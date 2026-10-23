#!/usr/bin/env node
// npm run stills  -- <video> [--at 0,1.5,3] [--style id]      one still per scene + a contact sheet
// npm run render  -- <video> [--draft] [--workers n] [--range a:b] [--style id] [--no-qa]
// npm run preview -- <video>                                  Remotion Studio with this video loaded
import fs from 'node:fs';
import path from 'node:path';
import {spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import {ROOT, args, videoDir, writeJSON, rel, PUBLIC} from './lib/paths.mjs';
import {loadProject, stage, nextVersion} from './lib/project.mjs';
import {buildMix} from './lib/mix.mjs';
import * as R from './lib/remotion.mjs';
import {runQA} from './qa.mjs';

export function prepare(dir, opt = {}) {
  const project = loadProject(dir, {style: opt.style});
  const t = project.timeline;
  for (const w of t.warnings) console.log(`  ! ${w}`);
  if (project.styleProblems.length) for (const p of project.styleProblems) console.log(`  ! style: ${p}`);
  if (t.errors.length) {
    console.log('\nThe storyboard has problems:');
    for (const e of t.errors) console.log(`  x ${e}`);
    console.log('\nFix storyboard.json (npm run storyboard:check -- ' + project.slug + ' explains each one).');
    process.exit(1);
  }
  return project;
}

function props(project, staged, extra = {}) {
  return {style: staged.style, timeline: staged.timeline, words: project.words, audio: staged.audio, audit: true, title: project.sb.title ?? project.slug, captions: project.sb.captions !== false, ...extra};
}

async function sheet(files, labels, out, title, sub) {
  // Stills must sit under public/ for the sheet composition to load them.
  const tmp = path.join(PUBLIC, '_stage', `sheet-${Date.now().toString(36)}`);
  fs.mkdirSync(tmp, {recursive: true});
  const images = files.map((f, i) => { const d = path.join(tmp, `${i}${path.extname(f)}`); fs.copyFileSync(f, d); return path.relative(PUBLIC, d).split(path.sep).join('/'); });
  const cols = Math.min(6, images.length <= 4 ? images.length : Math.ceil(Math.sqrt(images.length * 1.6)));
  const r = await R.stills({id: 'Sheet', inputProps: {images, labels, cols, cellW: 300, cellH: 580, title, sub}, frames: [0], outDir: path.join(tmp, 'render'), format: 'jpeg', scale: 1});
  fs.renameSync(r.files[0], out);
  fs.rmSync(tmp, {recursive: true, force: true});
  return out;
}

export async function renderStills(dir, opt = {}) {
  const project = prepare(dir, opt);
  const t = project.timeline;
  const staged = stage(project);
  const frames = [], labels = [];
  if (opt.at) {
    for (const s of String(opt.at).split(',')) { frames.push(Math.round(Number(s) * t.fps)); labels.push(`${Number(s).toFixed(2)} s`); }
  } else {
    frames.push(0); labels.push('frame 1 (hook)');
    for (const s of t.scenes) {
      const dur = s.end - s.start;
      frames.push(s.start + Math.min(Math.round(dur * 0.62), Math.round(t.fps * 1.6)));
      labels.push(`${s.id} ${s.type} · ${(s.start / t.fps).toFixed(1)}s`);
    }
  }
  const outDir = path.join(project.dir, 'out', `stills-${new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19)}`);
  const logs = [];
  const r = await R.stills({inputProps: props(project, staged), frames, outDir, scale: opt.scale ? Number(opt.scale) : 0.5, logs});
  const sheetFile = await sheet(r.files, labels, path.join(outDir, 'sheet.jpg'), `${project.slug} · style ${project.styleId}`, `${t.scenes.length} scenes · ${(t.durationInFrames / t.fps).toFixed(1)} s`);
  fs.rmSync(staged.base, {recursive: true, force: true});
  if (logs.length) writeJSON(path.join(outDir, 'audit.json'), logs);
  console.log(`\nStills: ${rel(outDir)}\nSheet:  ${rel(sheetFile)}`);
  report(logs);
  return {outDir, sheet: sheetFile, logs};
}

function report(logs) {
  const audits = logs.filter((l) => l.kind !== 'browser-error');
  const errs = logs.filter((l) => l.kind === 'browser-error');
  if (!audits.length && !errs.length) { console.log('Audit: no problems reported by the renderer.'); return; }
  console.log(`Audit: ${audits.length} problem(s) reported by the renderer:`);
  for (const l of audits.slice(0, 30)) console.log(`  x ${l.scene ?? ''} ${l.kind}: ${JSON.stringify(Object.fromEntries(Object.entries(l).filter(([k]) => !['kind', 'scene'].includes(k))))}`);
  for (const e of errs.slice(0, 10)) console.log(`  x browser: ${e.message}`);
}

export async function renderVideo(dir, opt = {}) {
  const project = prepare(dir, opt);
  const outDir = path.join(project.dir, 'out');
  fs.mkdirSync(outDir, {recursive: true});
  const v = nextVersion(outDir, project.slug);
  const name = `${project.slug}_v${v}${opt.draft ? '_draft' : ''}`;
  console.log(`Rendering ${name} (${project.timeline.scenes.length} scenes, ${(project.timeline.durationInFrames / project.timeline.fps).toFixed(1)} s, style ${project.styleId})`);
  const mixFile = path.join(outDir, `${name}_mix.wav`);
  const mix = buildMix(project, mixFile);
  const staged = stage(project, {audio: mixFile});
  if (staged.missing.length) { console.log('Missing files:\n' + staged.missing.map((m) => `  x ${m}`).join('\n')); process.exit(1); }
  const output = path.join(outDir, `${name}.mp4`);
  const logs = [];
  const t0 = Date.now();
  const range = opt.range ? String(opt.range).split(':').map(Number) : null;
  await R.video({inputProps: props(project, staged), output, scale: opt.draft ? 0.5 : 1, concurrency: opt.workers, frameRange: range, logs});
  const secs = (Date.now() - t0) / 1000;
  fs.rmSync(staged.base, {recursive: true, force: true});
  writeJSON(path.join(outDir, `${name}_render.json`), {file: path.basename(output), style: project.styleId, seconds: secs, draft: !!opt.draft, mix: mix.notes, audit: logs, made: new Date().toISOString()});
  console.log(`Rendered ${rel(output)} in ${secs.toFixed(0)} s`);
  report(logs);
  if (!opt['no-qa']) {
    const qa = await runQA(project.dir, {file: output, logs, draft: !!opt.draft});
    if (qa.verdict !== 'PASS') process.exitCode = 1;
    renderVideo.lastQA = qa;
  }
  return output;
}

async function studio(dir, opt) {
  const project = prepare(dir, opt);
  const mixFile = path.join(project.dir, 'out', 'preview_mix.wav');
  fs.mkdirSync(path.dirname(mixFile), {recursive: true});
  buildMix(project, mixFile);
  const staged = stage(project, {runId: `studio-${project.slug}`, audio: mixFile});
  const propsFile = path.join(project.dir, 'out', 'preview-props.json');
  writeJSON(propsFile, props(project, staged, {audit: false}));
  console.log('Opening Remotion Studio (select the "Reel" composition). Ctrl+C to stop.');
  const cli = path.join(ROOT, 'node_modules/@remotion/cli/remotion-cli.js');
  spawnSync(process.execPath, [cli, 'studio', path.join(ROOT, 'src/index.ts'), '--props', propsFile], {cwd: ROOT, stdio: 'inherit'});
}

const isMain = path.resolve(process.argv[1] ?? '') === fileURLToPath(import.meta.url);
if (isMain) {
  const a = args();
  const cmd = a._[0];
  if (!['stills', 'video', 'studio'].includes(cmd)) {
    console.log('Usage: npm run stills -- <video> | npm run render -- <video> [--draft] | npm run preview -- <video>');
    process.exit(1);
  }
  try {
    const dir = videoDir(a._[1]);
    if (cmd === 'stills') await renderStills(dir, a);
    else if (cmd === 'video') await renderVideo(dir, a);
    else await studio(dir, a);
    process.exit(0);
  } catch (e) {
    console.error('\n' + (e?.stack ?? e));
    process.exit(1);
  }
}
