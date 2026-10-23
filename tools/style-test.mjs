#!/usr/bin/env node
// npm run style:test -- <style> [--video]
// Renders a short sampler (title, number, list, chart, hero, end card) in the style, puts it next to
// the style's references, and, for learned styles, scores how close the colours and light are.
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {STYLES, VIDEOS, PUBLIC, args, exists, readJSON, rel, writeJSON, styleDir} from './lib/paths.mjs';
import {tokens} from '../src/core/text.mjs';
import {deltaELab} from '../src/core/color.mjs';

const LINES = [
  ['title', 'This is how your videos look.', {text: 'How your videos *look*'}],
  ['number', 'Numbers count up and land on the word.', {value: 87, suffix: '%', label: 'land right on the spoken word', countAt: 'land'}],
  ['list', 'Points arrive one at a time, right when they are said.', {title: 'Built to be followed', items: [{text: 'One idea per scene', icon: 'lightbulb', at: 'Points'}, {text: 'Every word on its beat', icon: 'audio-lines', at: 'one at a time'}, {text: 'Nothing left to guess', icon: 'circle-check', at: 'said'}]}],
  ['chart', 'Charts draw themselves on.', {kind: 'area', title: 'Charts draw themselves', values: [12, 18, 15, 24, 31, 28, 39, 46], highlight: {index: 7, label: 'Here'}}],
  ['hero', 'Every line gets its own visual.', {icon: 'sparkles', label: 'Every line, its own visual', satellites: ['image', 'chart-line', 'map-pin']}],
  ['cta', 'And every video ends with a clear next step.', {text: 'A clear next step', handle: '@yourhandle'}],
];

// Word timings for the sampler narration (no audio): 0.3 s a word, a breath between sentences.
function syntheticWords() {
  const words = [];
  let t = 0.05;
  for (const [, line] of LINES) {
    for (const tok of tokens(line)) { words.push({w: tok.raw, s: +t.toFixed(3), e: +(t + 0.26).toFixed(3)}); t += 0.3; }
    t += 0.35;
  }
  return words;
}

export async function testStyle(id, a = {}) {
  const sdir = styleDir(id);
  const dir = path.join(VIDEOS, `_style-test-${id}`);
  fs.rmSync(dir, {recursive: true, force: true});
  fs.mkdirSync(path.join(dir, 'voice'), {recursive: true});
  const words = syntheticWords();
  writeJSON(path.join(dir, 'voice', 'words.json'), words);
  writeJSON(path.join(dir, 'storyboard.json'), {title: `Style test: ${id}`, style: id, music: false, scenes: LINES.map(([type, line, props], i) => ({type, line, ...(i ? {at: line.split(' ').slice(0, 3).join(' ')} : {}), props}))});
  fs.writeFileSync(path.join(dir, 'script.md'), LINES.map((l) => l[1]).join('\n\n'));
  const {renderStills, renderVideo} = await import('./render.mjs');
  const st = await renderStills(dir, {});
  const outDir = path.join(sdir, 'test');
  fs.mkdirSync(outDir, {recursive: true});
  const ours = fs.readdirSync(st.outDir).filter((f) => /^frame-\d+\.jpg$/.test(f)).sort().slice(1).map((f) => path.join(st.outDir, f)); // skip frame 1 (same as the title)
  fs.copyFileSync(st.sheet, path.join(outDir, 'sheet.jpg'));
  // Keep the sample frames: style cards show them when a style has no reference pictures.
  const framesDir = path.join(outDir, 'frames');
  fs.rmSync(framesDir, {recursive: true, force: true});
  fs.mkdirSync(framesDir, {recursive: true});
  ours.forEach((f, i) => fs.copyFileSync(f, path.join(framesDir, `${i + 1}-${LINES[i][0]}.jpg`)));
  // References next to our frames.
  const refsDir = path.join(sdir, 'refs');
  const refs = exists(refsDir) ? fs.readdirSync(refsDir).filter((f) => /\.(jpe?g|png)$/i.test(f)).map((f) => path.join(refsDir, f)) : [];
  const R = await import('./lib/remotion.mjs');
  const tmp = path.join(PUBLIC, '_stage', `cmp-${id}-${Date.now().toString(36)}`);
  fs.mkdirSync(tmp, {recursive: true});
  // A few of each kind (pictures, website, video frames), so one long video can't fill the row.
  const byKind = (re) => refs.filter((f) => re.test(path.basename(f)));
  const pics = byKind(/^pic-/), webs = byKind(/^site-/), vids = refs.filter((f) => !/^(pic|site)-/.test(path.basename(f)));
  const pickRefs = [...pics.slice(0, 3), ...webs.slice(0, 1), ...vids.filter((_, i) => i % Math.max(1, Math.floor(vids.length / 3)) === 0).slice(0, 2)].slice(0, 6);
  const cols = 6;
  // References fill their own row(s); the engine's frames start on a fresh row below them.
  const pad = pickRefs.length % cols ? cols - (pickRefs.length % cols) : 0;
  const all = [...pickRefs.map((f, i) => ['ref', f, `reference ${i + 1}`]), ...Array.from({length: pad}, () => ['pad', null, '']), ...ours.map((f, i) => ['ours', f, `${LINES[i][0]} (this style)`])];
  const images = all.map(([, f], i) => { if (!f) return ''; const d = path.join(tmp, `${i}${path.extname(f)}`); fs.copyFileSync(f, d); return path.relative(PUBLIC, d).split(path.sep).join('/'); });
  const r = await R.stills({id: 'Sheet', inputProps: {images, labels: all.map((x) => x[2]), cols, cellW: 300, cellH: 560, title: `Style test: ${id}`, sub: refs.length ? 'top: the references · bottom: the same look made by the engine' : 'sample frames in this style'}, frames: [0], outDir: path.join(tmp, 'render'), format: 'jpeg', scale: 1});
  const compare = path.join(outDir, 'compare.jpg');
  fs.renameSync(r.files[0], compare);
  fs.rmSync(tmp, {recursive: true, force: true});

  // Score against the learned references.
  let score = null;
  const analysisFile = path.join(sdir, 'analysis.json');
  if (exists(analysisFile) && refs.length) {
    const an = readJSON(analysisFile);
    const {decodeImage, close} = await import('./lib/browser.mjs');
    const {measure, mergePalettes, labSamples} = await import('./lib/look.mjs');
    const {toLab} = await import('../src/core/color.mjs');
    const ms = [];
    for (const f of ours) { const d = await decodeImage(f, {maxPx: 240, thumbPx: 64}); ms.push(measure(d.pixels, d.sw, d.sh, 4)); }
    await close();
    const ourPal = mergePalettes(ms.map((m) => ({palette: m.palette})), 8);
    const refPal = an.palette.slice(0, 6);
    let dSum = 0, wSum = 0;
    for (const c of refPal) {
      const lab = toLab(c.hex);
      const nearest = Math.min(...ourPal.map((o) => deltaELab(lab, o.lab)));
      dSum += nearest * c.share; wSum += c.share;
    }
    const meanDE = dSum / Math.max(1e-6, wSum);
    const ourBright = ms.reduce((s, m) => s + m.brightness, 0) / ms.length;
    const refBright = an.brightness;
    const pScore = Math.max(0, Math.min(100, 100 - meanDE * 2.4));
    const bScore = Math.max(0, 100 - Math.abs(ourBright - refBright) * 180);
    score = {palette: +pScore.toFixed(0), light: +bScore.toFixed(0), overall: +(pScore * 0.7 + bScore * 0.3).toFixed(0), meanDeltaE: +meanDE.toFixed(1), ourBrightness: +ourBright.toFixed(2), refBrightness: refBright};
    writeJSON(path.join(outDir, 'score.json'), score);
  }
  // A style without reference pictures shows its sample frames on its card: refresh it now.
  if (!refs.length) {
    const {renderCard} = await import('./style-learn.mjs');
    const {loadStyle} = await import('./lib/project.mjs');
    await renderCard(id, loadStyle(id).style, []);
  }
  let videoFile = null;
  if (a.video) {
    const out = await renderVideo(dir, {draft: true, 'no-qa': true});
    videoFile = path.join(outDir, 'sampler.mp4');
    fs.copyFileSync(out, videoFile);
  }
  console.log(`\nStyle test for "${id}":\n  ${rel(compare)}${videoFile ? `\n  ${rel(videoFile)}` : ''}`);
  if (score) {
    const verdict = score.overall >= 75 ? 'close match' : score.overall >= 55 ? 'partly there' : 'far off';
    console.log(`  match vs references: ${score.overall}/100 (${verdict}) · palette ${score.palette} (avg colour distance ${score.meanDeltaE}) · light ${score.light} (ours ${score.ourBrightness} vs refs ${score.refBrightness})`);
    if (score.palette < 70) console.log('  -> colours: compare the swatches in card.jpg with the references; fix palette.bg / accent in overrides.json');
    if (score.light < 70) console.log(`  -> light: the frames are ${score.ourBrightness < score.refBrightness ? 'darker' : 'brighter'} than the references (background colour or kind)`);
  }
  console.log('  Look at compare.jpg: titles, captions, cards and icons should feel like the references. Fix what does not in overrides.json, then run style:learn again (or edit style.json for defined styles).');
  return {compare, score, video: videoFile};
}

const isMain = path.resolve(process.argv[1] ?? '') === fileURLToPath(import.meta.url);
if (isMain) {
  const a = args();
  try {
    await testStyle(a._[0], a);
    process.exit(0);
  } catch (e) {
    console.error('\n' + (e?.stack ?? e));
    process.exit(1);
  }
}
