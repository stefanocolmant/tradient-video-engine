#!/usr/bin/env node
// npm run style:new -- <name> [options]        your own style, from your brand
//   --base house|clean|bold        start from one of these looks (default: clean on light colours, house on dark)
//   --bg #hex --text #hex --accent #hex --accent2 #hex     your colours (anything left out is derived)
//   --font-display "Family" --font-body "Family"          any Google Fonts family (downloaded into the style)
//   --mood calm|confident|energetic|playful|luxury|techy   how it moves and feels
//   --captions pop|karaoke|subtitle|none                   caption look
//   --logo path/to/logo.png                                used on the end card
//   --from brand.json                                      the same options as a JSON file
//   --update                                               change an existing style instead of starting over
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {STYLES, args, exists, readJSON, rel, writeJSON} from './lib/paths.mjs';
import {downloadGoogleFont, findFamily, fontCatalog} from './lib/fonts.mjs';
import {deepMerge, validateStyle} from '../src/core/style.mjs';
import {isDark, hex} from '../src/core/color.mjs';

export const MOODS = {
  calm: {motion: {energy: 0.32, enter: 'fade', ease: 'smooth', transition: 'fade', transitionFrames: 14, camera: 0.3, idle: 0.35, avgShot: 3.6, stagger: 0.1}, captions: {mode: 'subtitle', maxWords: 7, size: 50, case: 'none', position: 0.75}, sound: {music: 'calm', sfx: 0.5}, finish: {grain: 0.04}},
  confident: {motion: {energy: 0.55, enter: 'rise', ease: 'expo', transition: 'slide', transitionFrames: 10, camera: 0.45, idle: 0.45, avgShot: 2.8, stagger: 0.06}, captions: {mode: 'karaoke', maxWords: 5, size: 58, case: 'none', position: 0.72}, sound: {music: 'auto', sfx: 0.8}},
  energetic: {motion: {energy: 0.88, enter: 'pop', ease: 'back', transition: 'zoom', transitionFrames: 7, camera: 0.7, idle: 0.7, avgShot: 1.9, stagger: 0.04}, captions: {mode: 'pop', maxWords: 3, size: 76, case: 'upper', font: 'display', position: 0.7}, sound: {music: 'drive', sfx: 1}},
  playful: {motion: {energy: 0.72, enter: 'pop', ease: 'spring', transition: 'slide', transitionFrames: 9, camera: 0.5, idle: 0.65, avgShot: 2.3, stagger: 0.05}, captions: {mode: 'pop', maxWords: 3, size: 70, case: 'none', position: 0.71}, emphasis: {kind: 'marker'}, surface: {radius: 30}, sound: {music: 'bright', sfx: 0.95}},
  luxury: {motion: {energy: 0.35, enter: 'blur', ease: 'smooth', transition: 'blur', transitionFrames: 16, camera: 0.35, idle: 0.3, avgShot: 3.4, stagger: 0.12}, captions: {mode: 'subtitle', maxWords: 6, size: 48, case: 'none', position: 0.76}, finish: {grain: 0.05, vignette: 0.35}, sound: {music: 'calm', sfx: 0.45}},
  techy: {motion: {energy: 0.66, enter: 'rise', ease: 'snap', transition: 'wipe', transitionFrames: 8, camera: 0.5, idle: 0.55, avgShot: 2.4, stagger: 0.05}, captions: {mode: 'karaoke', maxWords: 4, size: 60, case: 'none', position: 0.72}, sound: {music: 'pulse', sfx: 0.9}},
};

const slug = (s) => String(s).toLowerCase().replace(/[^a-z0-9-]+/g, '-').replace(/^-+|-+$/g, '');

export async function newStyle(name, a = {}) {
  const id = slug(name);
  if (!id || id.startsWith('_')) throw new Error('Name the style: npm run style:new -- my-brand --accent "#FF5A1F"');
  const opt = a.from ? {...readJSON(path.resolve(String(a.from))), ...a} : a;
  const dir = path.join(STYLES, id);
  const existing = exists(path.join(dir, 'style.json')) ? readJSON(path.join(dir, 'style.json')) : null;
  if (existing && !opt.update && !opt.force) throw new Error(`Style "${id}" exists. Add --update to change it, or pick another name.`);
  const darkBg = opt.bg ? isDark(hex(opt.bg)) : null;
  const baseId = String(opt.base ?? (existing && opt.update ? '' : darkBg === false ? 'clean' : darkBg === true ? 'house' : 'clean'));
  let style = existing && opt.update ? existing : baseId ? structuredClone(readJSON(path.join(STYLES, baseId, 'style.json'))) : {};
  if (!existing || !opt.update) { delete style.art; delete style.learned; }
  style.id = id;
  style.name = opt.title ?? opt.name ?? (existing?.name && opt.update ? existing.name : id.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()));
  const pal = {...(style.palette ?? {})};
  const setColor = (k, v) => { if (v) pal[k] = hex(String(v)); };
  if (opt.bg && !opt.update) for (const k of ['bg2', 'surface', 'surface2', 'muted', 'line', 'glow']) delete pal[k]; // re-derive around a new background
  setColor('bg', opt.bg); setColor('text', opt.text); setColor('accent', opt.accent); setColor('accent2', opt.accent2);
  setColor('positive', opt.positive); setColor('negative', opt.negative);
  if (opt.bg && !opt.text && !opt.update) delete pal.text;
  if (opt.accent && !opt.accent2 && !opt.update) delete pal.accent2;
  style.palette = pal;
  if (opt.mood) {
    const m = MOODS[String(opt.mood)];
    if (!m) throw new Error(`Unknown mood "${opt.mood}" (${Object.keys(MOODS).join(', ')})`);
    style = deepMerge(style, m);
  }
  if (opt.captions) style.captions = {...(style.captions ?? {}), mode: String(opt.captions)};
  // Fonts: download into the style folder so the style travels as one folder.
  for (const [role, flag] of [['display', 'font-display'], ['body', 'font-body']]) {
    const fam = opt[flag];
    if (!fam) continue;
    const meta = findFamily(String(fam));
    if (!meta) {
      const near = fontCatalog().filter((f) => f.f.toLowerCase().includes(String(fam).toLowerCase().split(' ')[0])).slice(0, 5).map((f) => f.f);
      throw new Error(`"${fam}" is not on Google Fonts${near.length ? ` (close: ${near.join(', ')})` : ''}. Proprietary fonts can't be bundled; pick an open look-alike.`);
    }
    const weight = Number(opt[`${flag}-weight`] ?? (role === 'display' ? (meta.w.includes(800) ? 800 : meta.w.includes(700) ? 700 : meta.w[meta.w.length - 1]) : meta.w.includes(500) ? 500 : 400));
    const got = await downloadGoogleFont(meta.f, role === 'display' ? [weight] : [400, weight, 600, 700], path.join(dir, 'fonts'), 'fonts');
    style.fonts = style.fonts ?? {};
    style.fonts[role] = {...(style.fonts[role] ?? {}), family: got.family, files: got.files, weight};
    if (role === 'body' && style.fonts.caption) style.fonts.caption = {...style.fonts.caption, family: got.family, files: got.files, weight: Math.max(600, weight)};
    console.log(`  font ${role}: ${got.family} (${Object.keys(got.files).join(', ')})`);
  }
  if (opt.logo) {
    const src = path.resolve(String(opt.logo));
    if (!exists(src)) throw new Error(`Logo not found: ${src}`);
    fs.mkdirSync(path.join(dir, 'assets'), {recursive: true});
    const dest = path.join(dir, 'assets', `logo${path.extname(src).toLowerCase()}`);
    fs.copyFileSync(src, dest);
    style.logo = `assets/${path.basename(dest)}`;
  }
  // Light styles do not glow; dark styles keep their light. "auto" music: pulse on dark, bright on light.
  const dark = isDark(style.palette.bg ?? '#000000');
  if (style.sound?.music === 'auto') style.sound.music = dark ? 'pulse' : 'bright';
  if (!dark) {
    style.finish = {...(style.finish ?? {}), bloom: 0, vignette: Math.min(style.finish?.vignette ?? 0.15, 0.2)};
    if (['neon3d', 'glass3d'].includes(style.icons?.kind)) style.icons = {...style.icons, kind: 'line'};
    if (style.background?.kind === 'luminous' || style.background?.kind === 'stars') style.background = {...style.background, kind: 'gradient'};
    if (style.surface?.shadow === 'glow') style.surface = {...style.surface, shadow: 'soft'};
    style.render3d = false;
  }
  style.description = opt.description ?? `${style.name}: ${dark ? 'dark' : 'light'} background ${style.palette.bg}, accent ${style.palette.accent}, ${style.fonts?.display?.family ?? 'Inter'} titles${opt.mood ? `, ${opt.mood} pace` : ''}.`;
  const {style: norm, problems} = validateStyle(style);
  writeJSON(path.join(dir, 'style.json'), style);
  if (!exists(path.join(dir, 'STYLE.md'))) fs.writeFileSync(path.join(dir, 'STYLE.md'), `# ${style.name}\n\n${style.description}\n\nBuilt with: npm run style:new -- ${id}${baseId ? ` --base ${baseId}` : ''}${opt.mood ? ` --mood ${opt.mood}` : ''}\n\n## Do\n\n- \n\n## Don't\n\n- \n`);
  const {renderCard} = await import('./style-learn.mjs');
  const card = await renderCard(id, norm, []);
  console.log(`\nStyle "${id}" ${existing && opt.update ? 'updated' : 'created'}: ${rel(path.join(dir, 'style.json'))}\nCard: ${rel(card)}`);
  for (const p of problems) console.log(`  ! ${p}`);
  console.log(`\nNext: npm run style:test -- ${id}   (sample frames in this style)`);
  return {id, style};
}

const isMain = path.resolve(process.argv[1] ?? '') === fileURLToPath(import.meta.url);
if (isMain) {
  const a = args();
  try {
    await newStyle(a._[0], a);
    process.exit(0);
  } catch (e) {
    console.error('\n' + (e?.message ?? e));
    process.exit(1);
  }
}
