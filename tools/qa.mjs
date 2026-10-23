#!/usr/bin/env node
// npm run qa -- <video> [--file path.mp4]
// Checks the finished MP4 itself: it decodes cleanly, has the right size, length and loudness, no
// black, frozen or flashing stretches, nothing the renderer flagged, and builds a review sheet of
// the real frames for a human (or the agent) to look at.
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {args, readJSON, rel, videoDir, writeJSON, exists, PUBLIC} from './lib/paths.mjs';
import {ffmpeg, probe, loudness, decodeFrames} from './lib/ff.mjs';
import {loadProject} from './lib/project.mjs';
import * as R from './lib/remotion.mjs';

const row = (status, check, detail) => ({status, check, detail});

function latestVideo(outDir, slug) {
  if (!exists(outDir)) return null;
  const files = fs.readdirSync(outDir).filter((f) => f.startsWith(slug + '_v') && f.endsWith('.mp4')).map((f) => path.join(outDir, f));
  return files.sort((a, b) => fs.statSync(b).mtimeMs - fs.statSync(a).mtimeMs)[0] ?? null;
}

export async function runQA(dir, {file, logs, draft = false, sheet = true} = {}) {
  const project = loadProject(dir);
  const t = project.timeline;
  const outDir = path.join(project.dir, 'out');
  file ??= latestVideo(outDir, project.slug);
  if (!file || !exists(file)) throw new Error('No rendered video to check. Run: npm run render -- ' + project.slug);
  const base = file.replace(/\.mp4$/, '');
  draft = draft || /_draft\.mp4$/.test(file);
  if (!logs) { const rj = base + '_render.json'; logs = exists(rj) ? readJSON(rj).audit ?? [] : []; }
  const rows = [];
  console.log(`\nQA ${rel(file)}`);

  // 1. Container and streams.
  const info = probe(file);
  const v = info.streams.find((s) => s.codec_type === 'video');
  const au = info.streams.find((s) => s.codec_type === 'audio');
  const W = draft ? t.width / 2 : t.width, H = draft ? t.height / 2 : t.height;
  rows.push(v && v.codec_name === 'h264' && v.pix_fmt === 'yuv420p' ? row('PASS', 'video stream', `H.264 ${v.width}x${v.height} yuv420p`) : row('FAIL', 'video stream', JSON.stringify({codec: v?.codec_name, pix: v?.pix_fmt})));
  rows.push(v && Number(v.width) === W && Number(v.height) === H ? row('PASS', 'frame size', `${v.width}x${v.height}`) : row('FAIL', 'frame size', `${v?.width}x${v?.height}, expected ${W}x${H}`));
  const fps = v ? (([n, d]) => n / (d || 1))(String(v.r_frame_rate).split('/').map(Number)) : 0; // "30/1"
  rows.push(Math.abs(fps - t.fps) < 0.01 ? row('PASS', 'frame rate', `${fps} fps`) : row('FAIL', 'frame rate', `${fps}, expected ${t.fps}`));
  const dur = Number(info.format.duration);
  const want = t.durationInFrames / t.fps;
  rows.push(Math.abs(dur - want) <= 2.5 / t.fps + 0.05 ? row('PASS', 'length', `${dur.toFixed(2)} s (timeline ${want.toFixed(2)} s)`) : row('FAIL', 'length', `${dur.toFixed(2)} s, timeline says ${want.toFixed(2)} s`));
  if (project.voice) rows.push(au ? row('PASS', 'audio stream', `${au.codec_name} ${au.sample_rate} Hz ${au.channels} ch`) : row('FAIL', 'audio stream', 'missing (the video has a voice track)'));
  else rows.push(au ? row('PASS', 'audio stream', `${au.codec_name} (music/sfx only)`) : row('WARN', 'audio stream', 'silent video: no voice recorded yet'));

  // 2. Every frame decodes.
  const dec = ffmpeg(['-v', 'error', '-i', file, '-c:v', 'rawvideo', '-c:a', 'pcm_s16le', '-f', 'null', '-'], {allowFail: true});
  const decErr = String(dec.stderr).trim();
  rows.push(dec.status === 0 && !decErr ? row('PASS', 'full decode', '0 errors') : row('FAIL', 'full decode', decErr.slice(0, 300)));

  // 3. Loudness.
  if (au) {
    const l = loudness(file);
    if (!l) rows.push(row('WARN', 'loudness', 'could not measure'));
    else {
      rows.push(Math.abs(l.lufs + 14) <= 1.2 ? row('PASS', 'loudness', `${l.lufs.toFixed(1)} LUFS (target -14)`) : row(project.voice ? 'FAIL' : 'WARN', 'loudness', `${l.lufs.toFixed(1)} LUFS (target -14 ±1)`));
      rows.push(l.truePeak <= -0.9 ? row('PASS', 'true peak', `${l.truePeak.toFixed(1)} dBTP`) : row('FAIL', 'true peak', `${l.truePeak.toFixed(1)} dBTP (must stay under -1)`));
    }
  }

  // 4. Frame scan at low resolution: black, frozen, flashing, near-empty stretches.
  const fr = decodeFrames(file, {width: 96, maxFrames: 20000});
  const n = fr.frames.length;
  const luma = new Float32Array(n), diff = new Float32Array(n), fill = new Float32Array(n);
  for (let i = 0; i < n; i++) {
    const px = fr.frames[i];
    let s = 0;
    const hist = new Uint32Array(64);
    for (let k = 0; k < px.length; k += 3) { const y = 0.2126 * px[k] + 0.7152 * px[k + 1] + 0.0722 * px[k + 2]; s += y; hist[Math.min(63, y >> 2)]++; }
    luma[i] = s / (px.length / 3) / 255;
    // Share of pixels away from the frame's most common brightness: a rough "how much is on screen".
    let mode = 0; for (let b = 1; b < 64; b++) if (hist[b] > hist[mode]) mode = b;
    let away = 0; for (let b = 0; b < 64; b++) if (Math.abs(b - mode) > 3) away += hist[b];
    fill[i] = away / (px.length / 3);
    const lag = Math.min(i, 10);
    if (lag) { let d = 0; const p0 = fr.frames[i - lag]; for (let k = 0; k < px.length; k += 3) d += Math.abs(px[k + 1] - p0[k + 1]); diff[i] = d / (px.length / 3); }
  }
  const runs = (pred, minLen) => {
    const out = []; let st = -1;
    for (let i = 0; i <= n; i++) { const on = i < n && pred(i); if (on && st < 0) st = i; if (!on && st >= 0) { if (i - st >= minLen) out.push([st, i - 1]); st = -1; } }
    return out;
  };
  const sec = (f) => (f / t.fps).toFixed(2);
  const black = runs((i) => luma[i] < 0.025 && i > 2 && i < n - 3, 4);
  rows.push(!black.length ? row('PASS', 'black frames', 'none') : row('FAIL', 'black frames', black.map(([a, b]) => `${sec(a)}-${sec(b)}s`).join(', ')));
  const frozen = runs((i) => i > 10 && diff[i] < 0.55, Math.round(t.fps * 1.2));
  const slow = runs((i) => i > 10 && diff[i] < 1.0, Math.round(t.fps * 2.5));
  rows.push(frozen.length ? row('FAIL', 'motion', `frozen picture at ${frozen.map(([a, b]) => `${sec(a)}-${sec(b)}s`).join(', ')}`)
    : slow.length ? row('WARN', 'motion', `barely moving for 2.5 s+ at ${slow.map(([a, b]) => `${sec(a)}-${sec(b)}s`).join(', ')} (add a move or a new element on a cue)`)
    : row('PASS', 'motion', 'always something moving'));
  const flashes = [];
  for (let i = 1; i < n; i++) if (Math.abs(luma[i] - luma[i - 1]) > 0.4) flashes.push(i);
  rows.push(flashes.length <= 3 ? row('PASS', 'flashes', flashes.length ? `${flashes.length} hard flash(es)` : 'none') : row('WARN', 'flashes', `${flashes.length} big brightness jumps (photosensitivity): ${flashes.slice(0, 6).map(sec).join(', ')}s`));
  const empty = runs((i) => fill[i] < 0.03, Math.round(t.fps * 0.8));
  rows.push(!empty.length ? row('PASS', 'empty screen', 'something on screen throughout') : row('WARN', 'empty screen', `almost nothing on screen at ${empty.map(([a, b]) => `${sec(a)}-${sec(b)}s`).join(', ')}`));
  const hookFill = fill[0] ?? 0;
  rows.push(hookFill > 0.05 ? row('PASS', 'frame one', 'the hook is visible in the first frame') : row('FAIL', 'frame one', 'the first frame is (almost) empty: the hook must be on screen immediately'));

  // 5. What the renderer itself reported.
  const audits = (logs ?? []).filter((l) => l.kind !== 'browser-error');
  const bErr = (logs ?? []).filter((l) => l.kind === 'browser-error' && !/THREE\.Clock|deprecated/i.test(l.message));
  rows.push(!audits.length ? row('PASS', 'renderer audit', 'no text overflow, missing icons or files') : row('FAIL', 'renderer audit', audits.slice(0, 6).map((x) => `${x.scene ?? ''} ${x.kind} ${x.text ?? x.name ?? x.label ?? ''}`.trim()).join(' | ')));
  if (bErr.length) rows.push(row('WARN', 'browser errors', bErr.slice(0, 3).map((e) => e.message.slice(0, 120)).join(' | ')));

  // 6. Pacing.
  const lens = t.scenes.map((s) => (s.end - s.start) / t.fps);
  const longest = Math.max(...lens);
  rows.push(longest <= 7.5 ? row('PASS', 'pacing', `${t.scenes.length} scenes, avg ${(lens.reduce((a, b) => a + b, 0) / lens.length).toFixed(1)} s, longest ${longest.toFixed(1)} s`) : row('WARN', 'pacing', `a scene holds ${longest.toFixed(1)} s (split it or give it more events)`));

  // 7. Review sheet from the real file.
  let sheetFile = null;
  if (sheet) {
    const tmp = path.join(PUBLIC, '_stage', `qa-${Date.now().toString(36)}`);
    fs.mkdirSync(tmp, {recursive: true});
    const picks = [0, ...t.scenes.map((s) => s.start + Math.min(Math.round((s.end - s.start) * 0.62), Math.round(t.fps * 1.6)))];
    const images = [], labels = [];
    picks.forEach((f, i) => {
      const out = path.join(tmp, `${i}.jpg`);
      ffmpeg(['-v', 'error', '-ss', (f / t.fps + 0.001).toFixed(3), '-i', file, '-frames:v', '1', '-vf', 'scale=360:-2', '-q:v', '3', out], {allowFail: true});
      if (exists(out)) { images.push(path.relative(PUBLIC, out).split(path.sep).join('/')); labels.push(i === 0 ? 'frame 1' : `${t.scenes[i - 1].id} ${t.scenes[i - 1].type} ${sec(f)}s`); }
    });
    const cols = Math.min(6, Math.ceil(Math.sqrt(images.length * 1.6)));
    const r = await R.stills({id: 'Sheet', inputProps: {images, labels, cols, cellW: 300, cellH: 580, title: path.basename(file), sub: 'QA review sheet: one frame per scene from the rendered file'}, frames: [0], outDir: tmp, format: 'jpeg', scale: 1});
    sheetFile = base + '_review.jpg';
    fs.renameSync(r.files[0], sheetFile);
    fs.rmSync(tmp, {recursive: true, force: true});
  }

  const fails = rows.filter((r) => r.status === 'FAIL').length, warns = rows.filter((r) => r.status === 'WARN').length;
  const verdict = fails ? 'FAIL' : 'PASS';
  for (const r of rows) console.log(`  ${r.status === 'PASS' ? 'PASS' : r.status === 'WARN' ? 'WARN' : 'FAIL'}  ${r.check.padEnd(15)} ${r.detail}`);
  console.log(`\nQA ${verdict}: ${fails} failed, ${warns} warnings.${sheetFile ? `\nReview sheet (look at it): ${rel(sheetFile)}` : ''}`);
  writeJSON(base + '_qa.json', {file: path.basename(file), verdict, fails, warns, rows, sheet: sheetFile ? path.basename(sheetFile) : null, checked: new Date().toISOString()});
  return {verdict, rows, sheet: sheetFile};
}

const isMain = path.resolve(process.argv[1] ?? '') === fileURLToPath(import.meta.url);
if (isMain) {
  const a = args();
  try {
    const r = await runQA(videoDir(a._[0]), {file: a.file ? path.resolve(a.file) : undefined, draft: !!a.draft});
    process.exit(r.verdict === 'PASS' ? 0 : 1);
  } catch (e) {
    console.error(e?.message ?? e);
    process.exit(1);
  }
}
