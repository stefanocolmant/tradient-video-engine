#!/usr/bin/env node
// npm run style:learn -- <name> [--from folder] [--url https://...]... [--image file]... [--video file]...
//
// Learns a style from examples. Drop pictures, videos and a links.txt (website / video URLs, one per
// line) into styles/_inbox/<name>/, or pass them as options. The tool measures them (palette, light,
// contrast, texture, editing rhythm, motion, the website's real colors and fonts), turns that into a
// style, and writes:
//   styles/<name>/style.json     the style (edit freely; overrides.json survives re-learning)
//   styles/<name>/analysis.json  every measurement, and where each style value came from
//   styles/<name>/card.jpg       the learned style at a glance, next to the references
//   styles/<name>/refs/          small copies of the references (stay on your computer)
// Then: look at card.jpg, fix what measurements can't see (see docs/TRAIN_A_STYLE.md), and run
//   npm run style:test -- <name>
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import {ROOT, STYLES, args, exists, readJSON, rel, writeJSON, PUBLIC} from './lib/paths.mjs';
import {decodeImage, close as closeBrowser} from './lib/browser.mjs';
import {measure, mergePalettes, hueName, kmeans} from './lib/look.mjs';
import {analyzeVideo} from './lib/video-look.mjs';
import {captureSite, top} from './lib/site.mjs';
import {mapFontStack, downloadGoogleFont, findFamily} from './lib/fonts.mjs';
import {contrast, deltaE, hex, isDark, luminance, mix, readable, shade, toLab, chroma, hue, parse} from '../src/core/color.mjs';
import {deepMerge, validateStyle} from '../src/core/style.mjs';

const IMG = /\.(jpe?g|png|webp|gif|avif|bmp|svg|heic|heif)$/i;
const VID = /\.(mp4|mov|webm|mkv|m4v|avi)$/i;
const VIDEO_SITES = /(youtube\.com|youtu\.be|instagram\.com|tiktok\.com|vimeo\.com|twitter\.com|x\.com)\//i;
const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
const avg = (a) => (a.length ? a.reduce((s, v) => s + v, 0) / a.length : 0);
const cssColor = (c) => { try { const p = parse(c); return p.a < 0.5 ? null : hex(c); } catch { return null; } };

function gather(a, id) {
  const images = [].concat(a.image ?? []).map(String), videos = [].concat(a.video ?? []).map(String), urls = [].concat(a.url ?? []).map(String);
  const folder = a.from ? path.resolve(String(a.from)) : path.join(STYLES, '_inbox', id);
  if (exists(folder)) {
    const walk = (d) => {
      for (const f of fs.readdirSync(d)) {
        const p = path.join(d, f);
        if (fs.statSync(p).isDirectory()) { walk(p); continue; }
        if (IMG.test(f)) images.push(p);
        else if (VID.test(f)) videos.push(p);
        else if (/\.(txt|md|url|webloc)$/i.test(f)) for (const m of fs.readFileSync(p, 'utf8').matchAll(/https?:\/\/[^\s"'<>)]+/g)) urls.push(m[0]);
      }
    };
    walk(folder);
  }
  return {folder, images: [...new Set(images)], videos: [...new Set(videos)], urls: [...new Set(urls)]};
}

// Video links: downloaded with yt-dlp when it is installed (for analysis only).
function fetchVideoUrl(url, dir) {
  const ok = spawnSync('yt-dlp', ['--version'], {stdio: 'ignore'}).status === 0;
  if (!ok) return {error: 'install yt-dlp to analyse video links, or download the video and drop the file in the inbox'};
  fs.mkdirSync(dir, {recursive: true});
  const r = spawnSync('yt-dlp', ['-f', 'mp4[height<=1080]/best[height<=1080]/best', '--max-filesize', '300M', '--no-playlist', '-o', path.join(dir, '%(id)s.%(ext)s'), '--print', 'after_move:filepath', url], {encoding: 'utf8'});
  const file = r.stdout.trim().split('\n').pop();
  return r.status === 0 && file && exists(file) ? {file} : {error: (r.stderr || '').split('\n').slice(-2).join(' ')};
}

function heicToJpg(file) {
  if (process.platform !== 'darwin') return null;
  const out = path.join(os.tmpdir(), `tve-${path.basename(file)}.jpg`);
  const r = spawnSync('sips', ['-s', 'format', 'jpeg', file, '--out', out], {stdio: 'ignore'});
  return r.status === 0 && exists(out) ? out : null;
}

export async function learnStyle(name, a = {}) {
  const id = String(name).toLowerCase().replace(/[^a-z0-9-]+/g, '-').replace(/^-+|-+$/g, '');
  if (!id || id.startsWith('_')) throw new Error('Give the style a name: npm run style:learn -- my-style');
  const dir = path.join(STYLES, id);
  const refs = path.join(dir, 'refs');
  fs.mkdirSync(refs, {recursive: true});
  const src = gather(a, id);
  const why = {}; // style path -> where the value came from
  const notes = [];
  console.log(`Learning style "${id}" from ${src.images.length} picture(s), ${src.videos.length} video(s), ${src.urls.length} link(s)${exists(src.folder) ? ` (inbox ${rel(src.folder)})` : ''}`);
  if (!src.images.length && !src.videos.length && !src.urls.length) throw new Error(`Nothing to learn from. Drop pictures/videos and a links.txt into ${rel(path.join(STYLES, '_inbox', id))}/ or pass --image/--video/--url.`);

  // 1. Video links -> files.
  for (const u of src.urls.filter((u) => VIDEO_SITES.test(u))) {
    process.stdout.write(`  video link ${u} ... `);
    const r = fetchVideoUrl(u, path.join(dir, 'refs', 'raw'));
    if (r.file) { src.videos.push(r.file); console.log('downloaded'); } else { console.log(`skipped (${r.error})`); notes.push(`Could not fetch ${u}: ${r.error}`); }
  }
  const sites = src.urls.filter((u) => !VIDEO_SITES.test(u));

  // 2. Pictures.
  const imgMeasures = [];
  const thumbs = [];
  for (const [i, f0] of src.images.entries()) {
    let f = f0;
    if (/\.(heic|heif)$/i.test(f)) { f = heicToJpg(f0); if (!f) { notes.push(`Skipped ${path.basename(f0)}: convert HEIC to JPG first`); continue; } }
    try {
      const d = await decodeImage(f, {maxPx: 320, thumbPx: 1080});
      const m = measure(d.pixels, d.sw, d.sh, 4);
      const thumb = path.join(refs, `pic-${String(i + 1).padStart(2, '0')}.jpg`);
      fs.writeFileSync(thumb, d.thumb);
      thumbs.push({file: thumb, kind: 'picture', from: path.basename(f0)});
      imgMeasures.push({file: path.basename(f0), kind: 'picture', ...m, aspect: +(d.w / d.h).toFixed(3)});
      process.stdout.write('.');
    } catch (e) { notes.push(`Could not read ${path.basename(f0)}: ${e.message}`); }
  }
  if (src.images.length) process.stdout.write('\n');

  // 3. Videos: rhythm + one frame per shot.
  const vids = [];
  for (const f of src.videos) {
    try {
      process.stdout.write(`  video ${path.basename(f)} ... `);
      const v = analyzeVideo(f, {outDir: refs});
      for (const fr of v.frames) {
        const d = await decodeImage(fr.file, {maxPx: 320, thumbPx: 720});
        imgMeasures.push({file: path.basename(fr.file), kind: 'video-frame', ...measure(d.pixels, d.sw, d.sh, 4), aspect: +(d.w / d.h).toFixed(3), weight: 1 / Math.max(1, v.frames.length) * 3});
        thumbs.push({file: fr.file, kind: 'video', from: `${path.basename(f)} @${fr.t}s`});
      }
      vids.push(v);
      console.log(`${v.seconds}s, ${v.cuts} cuts (${v.cutsPerMinute}/min), median shot ${v.shotMedian}s, motion ${v.motion}`);
    } catch (e) { console.log('failed'); notes.push(`Could not read video ${path.basename(f)}: ${e.message}`); }
  }

  // 4. Websites.
  const siteData = [];
  for (const [i, u] of sites.entries()) {
    try {
      process.stdout.write(`  website ${u} ... `);
      const r = await captureSite(u, refs, {name: `site-${i + 1}`});
      for (const s of r.shots) {
        const d = await decodeImage(s, {maxPx: 320, thumbPx: 1080});
        imgMeasures.push({file: path.basename(s), kind: 'website', ...measure(d.pixels, d.sw, d.sh, 4), aspect: +(d.w / d.h).toFixed(3), weight: 0.5});
        thumbs.push({file: s, kind: 'website', from: u});
      }
      siteData.push(r.data);
      console.log(`ok (${top(r.data.fonts, 1)[0]?.[0]?.split(',')[0] ?? 'no text'})`);
    } catch (e) { console.log('failed'); notes.push(`Could not open ${u}: ${e.message.split('\n')[0]}`); }
  }
  await closeBrowser();
  if (!imgMeasures.length && !siteData.length) throw new Error('None of the references could be read: ' + notes.join('; '));

  // 5. Palette from everything, plus the website's real CSS colors by area.
  const palSources = imgMeasures.map((m) => ({palette: m.palette, weight: m.weight ?? 1}));
  for (const s of siteData) {
    const cols = [...top(s.bg, 6), ...top(s.text, 3), ...top(s.border, 2)].map(([c, w]) => [cssColor(c), w]).filter(([c]) => c);
    const tot = cols.reduce((x, [, w]) => x + w, 0) || 1;
    if (cols.length) palSources.push({palette: cols.map(([c, w]) => ({lab: toLab(c), share: w / tot})), weight: 1.2});
  }
  const palette = mergePalettes(palSources, 10);
  const brightness = avg(imgMeasures.filter((m) => m.kind !== 'website').map((m) => m.brightness)) || avg(imgMeasures.map((m) => m.brightness));
  const site = siteData[0];

  // 6. Roles. Background: pictures and videos are the look being asked for, so they decide it (the
  //    colour around their edges, else their largest dark/light colour). A website decides only when
  //    it is the only reference.
  let bg = null;
  const visualRefs = imgMeasures.filter((m) => m.kind !== 'website');
  if (visualRefs.length) {
    // Each picture gets one vote and each video one vote in total, however many frames it has.
    const votes = [];
    for (const m of visualRefs.filter((x) => x.border)) {
      const w = m.kind === 'video-frame' ? Math.max(1, Math.round(6 * (m.weight ?? 1) / 3)) : 6;
      for (let i = 0; i < w; i++) votes.push(toLab(m.border));
    }
    if (votes.length) {
      const kb = kmeans(votes, Math.min(3, votes.length), 10);
      if (kb[0] && kb[0].share >= 0.45) { bg = kb[0].hex; why['palette.bg'] = `colour around the edges of the references (pictures and videos weighted equally)`; }
    }
    if (!bg) {
      const dark = brightness < 0.45;
      const vp = mergePalettes(visualRefs.map((m) => ({palette: m.palette, weight: m.weight ?? 1})), 8).filter((c) => c.share > 0.05);
      const pick = vp.sort((x, y) => (dark ? x.lab[0] - y.lab[0] : y.lab[0] - x.lab[0]))[0] ?? palette[0];
      bg = pick.hex;
      why['palette.bg'] = `${dark ? 'darkest' : 'lightest'} large colour in the pictures/videos (overall brightness ${brightness.toFixed(2)})`;
    }
  } else if (site) {
    bg = cssColor(site.bodyBg) ?? cssColor(site.htmlBg) ?? cssColor(top(site.bg, 1)[0]?.[0]);
    if (bg) why['palette.bg'] = `website page background (${site.url})`;
  }
  if (!bg) { bg = palette[0].hex; why['palette.bg'] = 'largest colour in the references'; }
  // A video background has to carry text: a mid-tone becomes a deep or a pale version of its hue.
  {
    const [L, A, B] = toLab(bg);
    if (L > 28 && L < 82) {
      const goDark = brightness < 0.55;
      const {fromLab} = await import('../src/core/color.mjs');
      const was = bg;
      bg = goDark ? fromLab([11, A * 0.45, B * 0.45]) : fromLab([96, A * 0.25, B * 0.25]);
      why['palette.bg'] = `${why['palette.bg']}; the measured ${was} is a mid-tone, moved to a ${goDark ? 'deep' : 'pale'} version of the same hue so text reads on it`;
    }
  }
  const dark = isDark(bg);
  let text = null;
  if (site) {
    // Headings usually carry the strongest text colour; weigh use against contrast.
    const opts = top(site.text, 5).map(([c, w]) => [cssColor(c), w]).filter(([c]) => c && contrast(c, bg) >= 4.5);
    const best = opts.sort((x, y) => Math.sqrt(y[1]) * contrast(y[0], bg) - Math.sqrt(x[1]) * contrast(x[0], bg))[0];
    if (best) { text = best[0]; why['palette.text'] = 'website text colour (most used, highest contrast)'; }
  }
  if (!text) { text = readable(bg, [dark ? mix('#FFFFFF', palette[0]?.hex ?? '#FFFFFF', 0.06) : mix('#111111', palette[0]?.hex ?? '#111111', 0.08)], 7); why['palette.text'] = 'highest-contrast neutral on the background, tinted by the palette'; }
  // Accent: the most vivid colour with real presence; buttons and brand variables count extra.
  const cand = [];
  for (const c of palette) cand.push({hex: c.hex, score: chroma(c.hex) * Math.pow(c.share + 0.02, 0.35), from: 'reference palette'});
  for (const s of siteData) {
    for (const b of s.buttons) { const c = cssColor(b.bg); if (c && chroma(c) > 18) cand.push({hex: c, score: chroma(c) * 1.4, from: 'website button colour'}); }
    for (const [k, v] of Object.entries(s.vars)) { if (!/primary|accent|brand|highlight|cta|link/i.test(k)) continue; const c = cssColor(v); if (c && chroma(c) > 18) cand.push({hex: c, score: chroma(c) * 1.3, from: `website CSS variable ${k}`}); }
    for (const [c0, w] of top(s.text, 8)) { const c = cssColor(c0); if (c && chroma(c) > 25) cand.push({hex: c, score: chroma(c) * 0.9, from: 'website coloured text/links'}); }
  }
  cand.sort((x, y) => y.score - x.score);
  const usable = cand.filter((c) => deltaE(c.hex, bg) > 20 && deltaE(c.hex, text) > 15);
  const acc = usable[0] ?? {hex: dark ? '#4F8CFF' : '#2457E6', from: 'default (references have no clear accent colour)'};
  const accent = acc.hex;
  why['palette.accent'] = acc.from;
  const acc2 = usable.find((c) => deltaE(c.hex, accent) > 25 && Math.abs(hue(c.hex) - hue(accent)) > 25 && contrast(c.hex, bg) >= 2.5);
  const accent2 = acc2?.hex ?? shade(accent, dark ? 18 : -16);
  why['palette.accent2'] = acc2 ? acc2.from : 'a lighter/darker step of the accent';
  const surfaceSite = site ? top(site.bg, 4).map(([c]) => cssColor(c)).find((c) => c && c !== bg && deltaE(c, bg) < 18) : null;
  const surface = surfaceSite ?? mix(bg, text, dark ? 0.08 : 0.04);
  why['palette.surface'] = surfaceSite ? 'website card/panel colour' : 'a step from the background toward the text colour';

  // 7. Fonts from the website (mapped to open fonts), otherwise sensible defaults to review.
  const fonts = {};
  if (site) {
    const head = top(site.headings, 1)[0]?.[0] ?? top(site.fonts, 1)[0]?.[0];
    const body = top(site.body, 1)[0]?.[0] ?? site.bodyFont;
    if (head) {
      const [fam, weight, transform, ls] = head.split('|');
      const m = mapFontStack(fam);
      const upper = site.headingCount ? site.upperHeadings / site.headingCount > 0.5 : transform === 'uppercase';
      const sizeTrack = parseFloat(ls) || 0;
      const w0 = Number(weight) || 700;
      fonts.display = {family: m.family, weight: clamp(w0, 500, 900), case: upper ? 'upper' : 'none', tracking: clamp(sizeTrack / 48, -0.04, 0.12), lineHeight: 1.04};
      why['fonts.display'] = `website headings: ${m.from} -> ${m.family} (${m.how})${w0 < 500 ? `; weight ${w0} raised to 500 so titles hold up on a phone` : ''}`;
    }
    if (body) {
      const [fam, weight] = String(body).split('|');
      const m = mapFontStack(fam);
      fonts.body = {family: m.family, weight: clamp(Number(weight) || 400, 400, 700), lineHeight: 1.25};
      why['fonts.body'] = `website body text: ${m.from} -> ${m.family} (${m.how})`;
    }
  }
  if (!fonts.display) { fonts.display = {family: 'Inter', weight: 800, case: 'none', tracking: -0.02}; why['fonts.display'] = 'default: no website given; pick a family that matches the references (see card.jpg)'; }
  if (!fonts.body) { fonts.body = {family: fonts.display.family === 'Inter' ? 'Inter' : 'Inter', weight: 500}; why['fonts.body'] = 'default'; }

  // 8. Look and finish.
  const vis = imgMeasures.filter((m) => m.kind !== 'website');
  const pool = vis.length ? vis : imgMeasures;
  const grainV = avg(pool.map((m) => m.grain)), vign = avg(pool.map((m) => m.vignette)), sat = avg(pool.map((m) => m.saturation));
  const flat = avg(pool.map((m) => m.flatness)), edges = avg(pool.map((m) => m.edges)), warm = avg(pool.map((m) => m.warmth));
  const glowy = dark && palette.some((c) => c.lab[0] > 60 && chroma(c.hex) > 35 && c.share < 0.2);
  let bgKind = 'gradient';
  if (dark) bgKind = glowy ? (hue(bg) > 230 && hue(bg) < 320 ? 'luminous' : 'aurora') : grainV > 1.6 ? 'noise' : 'gradient';
  else bgKind = grainV > 1.2 && warm > 0.05 ? 'paper' : flat > 0.8 ? 'solid' : 'gradient';
  why['background.kind'] = `${dark ? 'dark' : 'light'} references${glowy ? ' with glowing highlights' : ''}, grain ${grainV.toFixed(2)}, flatness ${flat.toFixed(2)}`;
  const radii = siteData.flatMap((s) => s.radii);
  const radius = radii.length ? clamp([...radii].sort((x, y) => x - y)[Math.floor(radii.length / 2)], 0, 48) : flat > 0.75 ? 8 : 20;
  why['surface.radius'] = radii.length ? `median corner radius of ${radii.length} website elements` : 'guessed from how flat the references are';
  const glass = siteData.some((s) => s.glass > 2) || (dark && glowy);
  const hard = siteData.some((s) => s.hardShadows > 2);
  const soft = siteData.some((s) => s.shadows > 6);
  const borders = siteData.some((s) => Object.keys(s.border).length > 6);
  const surfaceKind = glass ? 'glass' : borders && !soft ? 'outline' : 'solid';
  why['surface.kind'] = glass ? 'website uses translucent glass panels / glowing dark look' : borders && !soft ? 'website draws outlined boxes' : 'filled cards';

  // 9. Motion from the videos' editing rhythm.
  let motion = {energy: 0.55, enter: 'rise', ease: 'expo', transition: 'fade', transitionFrames: 8, camera: 0.4, idle: 0.45, avgShot: 2.8, stagger: 0.06};
  if (vids.length) {
    const cpm = avg(vids.map((v) => v.cutsPerMinute)), med = avg(vids.map((v) => v.shotMedian)), mot = avg(vids.map((v) => v.motion)), diss = vids.reduce((s, v) => s + v.dissolves, 0), cuts = vids.reduce((s, v) => s + v.cuts, 0);
    const energy = clamp(0.2 + cpm / 60 + mot * 9, 0.1, 1);
    motion = {
      energy: +energy.toFixed(2),
      enter: energy > 0.78 ? 'pop' : energy > 0.42 ? 'rise' : 'fade',
      ease: energy > 0.75 ? 'back' : energy < 0.35 ? 'smooth' : 'expo',
      transition: diss > cuts * 0.5 ? 'fade' : cpm > 30 ? 'cut' : energy > 0.62 ? 'zoom' : 'slide',
      transitionFrames: cpm > 30 ? 6 : energy < 0.35 ? 14 : 10,
      camera: +clamp(0.25 + energy * 0.5, 0.2, 0.9).toFixed(2),
      idle: +clamp(0.3 + energy * 0.5, 0.2, 0.9).toFixed(2),
      avgShot: +clamp(med, 1.0, 6).toFixed(2),
      stagger: +clamp(0.1 - energy * 0.06, 0.03, 0.12).toFixed(3),
    };
    why.motion = `${vids.length} video(s): ${cpm.toFixed(1)} cuts/min, median shot ${med.toFixed(2)} s, motion ${mot.toFixed(3)}, ${diss} dissolve(s) vs ${cuts} cut(s)`;
  } else why.motion = 'default (no video given): add a video to learn the editing rhythm';
  const energy = motion.energy;
  const captions = energy > 0.7
    ? {mode: 'pop', maxWords: 3, size: 74, case: fonts.display.case === 'upper' ? 'upper' : 'none', font: 'display', position: 0.7, shadow: true, stroke: dark ? 0 : 0}
    : energy > 0.42 ? {mode: 'karaoke', maxWords: 5, size: 60, case: 'none', font: 'caption', position: 0.72, shadow: true}
    : {mode: 'subtitle', maxWords: 7, size: 50, case: 'none', font: 'caption', position: 0.75, shadow: true};
  why.captions = `${captions.mode} captions for a ${energy > 0.7 ? 'fast' : energy > 0.42 ? 'medium' : 'calm'} edit`;

  const learned = {
    id,
    name: a.title ? String(a.title) : id.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
    description: `Learned from ${src.images.length} picture(s), ${vids.length} video(s) and ${siteData.length} website(s): ${dark ? 'dark' : 'light'} ${hueName(bg)} background, ${hueName(accent)} accent${fonts.display ? `, ${fonts.display.family} titles` : ''}.`,
    palette: {bg, text, accent, accent2, surface, glow: dark ? accent2 : accent},
    fonts,
    background: {kind: bgKind, intensity: dark ? 0.6 : 0.5, motion: +clamp(0.2 + energy * 0.5, 0.1, 0.8).toFixed(2)},
    surface: {kind: surfaceKind, radius: Math.round(radius), border: surfaceKind === 'outline' ? 2 : surfaceKind === 'glass' ? 1.5 : 0, shadow: glass && dark ? 'glow' : hard ? 'hard' : soft || !dark ? 'soft' : 'none', blur: 0},
    emphasis: {kind: dark && glowy ? 'glow' : sat > 0.45 ? 'color' : !dark && energy > 0.6 ? 'marker' : 'color'},
    icons: {kind: dark && glowy ? 'neon3d' : flat > 0.78 ? 'solid' : 'line', stroke: flat > 0.78 ? 2.4 : 2},
    motion,
    finish: {bloom: dark && glowy ? 0.7 : 0, grain: +clamp(grainV / 30, 0.02, 0.16).toFixed(3), vignette: +clamp(vign * 1.4, 0.05, dark ? 0.65 : 0.2).toFixed(2)},
    captions,
    layout: {align: 'center'},
    sound: {music: energy > 0.72 ? 'drive' : energy < 0.35 ? 'calm' : dark ? 'pulse' : 'bright', musicVolume: 0.14, sfx: +clamp(0.5 + energy * 0.5, 0.4, 1).toFixed(2)},
    render3d: dark,
    learned: {date: new Date().toISOString().slice(0, 10), pictures: src.images.length, videos: vids.map((v) => v.file), websites: siteData.map((s) => s.url)},
  };

  // 10. Fonts: download the open families into the style folder.
  for (const role of ['display', 'body']) {
    const f = learned.fonts[role];
    const fam = findFamily(f.family);
    if (!fam) continue;
    const weights = role === 'display' ? [Number(f.weight)] : [400, Number(f.weight), 600, 700];
    try {
      const got = await downloadGoogleFont(fam.f, weights, path.join(dir, 'fonts'), 'fonts');
      f.family = got.family;
      f.files = got.files;
    } catch (e) { notes.push(`Font ${f.family}: ${e.message}`); }
  }

  // 11. Keep the agent's or user's corrections from earlier rounds.
  const overridesFile = path.join(dir, 'overrides.json');
  const overrides = exists(overridesFile) ? readJSON(overridesFile) : null;
  const style = overrides ? deepMerge(learned, overrides) : learned;
  if (overrides) why._overrides = 'values in overrides.json were applied on top';
  const {problems} = validateStyle(style);
  writeJSON(path.join(dir, 'style.json'), style);
  writeJSON(path.join(dir, 'analysis.json'), {style: id, made: new Date().toISOString(), why, notes, palette: palette.map((c) => ({hex: c.hex, share: +c.share.toFixed(3), name: hueName(c.hex)})), brightness: +brightness.toFixed(3), references: imgMeasures.map(({palette: p, ...m}) => ({...m, palette: p.slice(0, 5).map((c) => c.hex)})), videos: vids.map((v) => ({...v, frames: v.frames.map((fr) => ({file: path.relative(dir, fr.file).split(path.sep).join('/'), t: fr.t}))})), websites: siteData.map((s) => ({url: s.url, title: s.title, bodyBg: s.bodyBg, topBackgrounds: top(s.bg, 5), topText: top(s.text, 4), topFonts: top(s.fonts, 4), headings: top(s.headings, 3), body: top(s.body, 3), buttons: s.buttons.slice(0, 6), radii: s.radii.slice(0, 30), glass: s.glass, shadows: s.shadows, hardShadows: s.hardShadows, vars: s.vars, logo: s.logo}))});
  if (!exists(path.join(dir, 'STYLE.md'))) {
    fs.writeFileSync(path.join(dir, 'STYLE.md'), `# ${style.name}\n\n${style.description}\n\n## Learned from\n\n${thumbs.map((t) => `- ${t.kind}: ${t.from}`).filter((x, i, arr) => arr.indexOf(x) === i).join('\n')}\n\n## What the eye adds (fill this in after looking at card.jpg and refs/)\n\n- Title look:\n- Caption look:\n- Shapes and icons:\n- What moves, and how:\n- Do:\n- Don't:\n`);
  }
  // 12. The card: references next to the learned palette, fonts and rhythm.
  // Up to 4 of each kind on the card, so a long video can't crowd out the pictures and websites.
  const pickKinds = ['picture', 'website', 'video'].flatMap((k) => thumbs.filter((t) => t.kind === k).slice(0, k === 'video' ? 5 : 4));
  const card = await renderCard(id, style, pickKinds.slice(0, 12).map((t) => t.file), why);
  console.log(`\nStyle "${id}" written:\n  ${rel(path.join(dir, 'style.json'))}\n  ${rel(path.join(dir, 'analysis.json'))}  (where every value came from)\n  ${rel(card)}  (look at this next to the references)`);
  for (const p of problems) console.log(`  ! ${p}`);
  for (const n of notes) console.log(`  ! ${n}`);
  console.log(`\nNext: check card.jpg, correct anything the measurements can't see in ${rel(overridesFile)} (fonts, caption look, icons), then:\n  npm run style:test -- ${id}`);
  return {id, style, why, card};
}

export async function renderCard(id, style, refFiles, why = {}) {
  let label = 'References';
  if (!refFiles.length) {
    const fd = path.join(STYLES, id, 'test', 'frames');
    if (exists(fd)) { refFiles = fs.readdirSync(fd).filter((f) => f.endsWith('.jpg')).sort().map((f) => path.join(fd, f)); label = 'Sample frames in this style'; }
  }
  const R = await import('./lib/remotion.mjs');
  const {stage} = await import('./lib/project.mjs');
  const {loadStyle} = await import('./lib/project.mjs');
  const st = loadStyle(id);
  const tmp = path.join(PUBLIC, '_stage', `card-${id}-${Date.now().toString(36)}`);
  fs.mkdirSync(tmp, {recursive: true});
  const refsRel = refFiles.slice(0, 12).map((f, i) => { const d = path.join(tmp, `ref-${i}${path.extname(f)}`); fs.copyFileSync(f, d); return path.relative(PUBLIC, d).split(path.sep).join('/'); });
  const fake = {slug: `card-${id}`, dir: path.join(STYLES, id), styleDir: st.dir, style: st.style, timeline: {scenes: []}};
  const staged = stage(fake, {runId: `card-${id}`});
  const out = path.join(STYLES, id, 'card.jpg');
  const r = await R.stills({id: 'StyleCard', inputProps: {style: staged.style, refs: refsRel, why, label}, frames: [0], outDir: path.join(tmp, 'render'), format: 'jpeg', scale: 1});
  fs.renameSync(r.files[0], out);
  fs.rmSync(tmp, {recursive: true, force: true});
  return out;
}

const isMain = path.resolve(process.argv[1] ?? '') === fileURLToPath(import.meta.url);
if (isMain) {
  const a = args();
  try {
    await learnStyle(a._[0], a);
    process.exit(0);
  } catch (e) {
    console.error('\n' + (e?.stack ?? e));
    process.exit(1);
  }
}
