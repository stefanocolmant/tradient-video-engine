#!/usr/bin/env node
// npm run storyboard:check -- <video>
// Before rendering: every scene type and prop is valid, text fits its scene, icons and files exist,
// every cue phrase is really said, scenes are long enough to read and short enough to stay alive,
// the visuals vary, every sentence gets its own visual, and on-screen numbers have sources.
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {args, exists, readJSON, rel, videoDir} from './lib/paths.mjs';
import {loadProject} from './lib/project.mjs';
import {CATALOG, SFX_NAMES} from '../src/core/catalog.mjs';
import {findNumbers, isClaim} from '../src/core/numbers.mjs';
import {scriptText, sentences, norm} from '../src/core/text.mjs';
import {iconExists, nearestIcons} from './icons.mjs';

const row = (status, check, detail) => ({status, check, detail});
const wordsIn = (s) => String(s ?? '').replace(/\*/g, '').split(/\s+/).filter(Boolean).length;
const HOOKS = new Set(['title', 'number', 'hero', 'image', 'statement', 'phone', 'compare', 'split', 'globe', 'chart', 'grid']);

export function checkStoryboard(dir) {
  const rows = [];
  let project;
  try { project = loadProject(dir); } catch (e) { return {rows: [row('FAIL', 'load', e.message)], fails: 1, warns: 0}; }
  const {sb, timeline: t, words} = project;
  const scenes = sb.scenes ?? [];
  if (!scenes.length) return {rows: [row('FAIL', 'scenes', 'storyboard.json has no scenes yet')], fails: 1, warns: 0};
  if (!words.length) rows.push(row('WARN', 'voice', 'no voice yet (npm run voice): cues are not checked and scenes use "hold" seconds'));

  // Types, props, limits, icons, files.
  const probs = [], warnsP = [];
  const iconNames = [];
  scenes.forEach((s, i) => {
    const id = s.id ?? `s${i + 1}`;
    const spec = CATALOG[s.type];
    if (!spec) { probs.push(`${id}: unknown type "${s.type}" (types: ${Object.keys(CATALOG).join(', ')})`); return; }
    const p = s.props ?? {};
    for (const [k, desc] of Object.entries(spec.props)) if (String(desc).split('  ')[0].trim().endsWith('*') && p[k] === undefined && k !== '...' && !(s.type === 'split' && (p.left || p.top)) && !(s.type === 'chart' && p.data)) probs.push(`${id} (${s.type}): missing "${k}"`);
    for (const [k, lim] of Object.entries(spec.limits ?? {})) {
      const parts = k.split('.');
      const vals = parts.length === 2 ? (Array.isArray(p[parts[0]]) ? p[parts[0]].map((x) => (typeof x === 'string' ? x : x?.[parts[1]])) : [p[parts[0]]?.[parts[1]]]) : [p[k]];
      if (parts.length === 1 && Array.isArray(p[k])) { if (p[k].length > lim) probs.push(`${id} (${s.type}): ${p[k].length} ${k}, max ${lim}`); continue; }
      for (const v of vals) {
        if (typeof v !== 'string') continue;
        const n = wordsIn(v);
        if (n > lim * 1.3) probs.push(`${id} (${s.type}): "${v}" is ${n} words; ${k} takes ≤ ${lim}`);
        else if (n > lim) warnsP.push(`${id}: "${v}" is ${n} words (${k} reads best at ≤ ${lim})`);
      }
    }
    const walk = (o, key) => {
      if (Array.isArray(o)) return o.forEach((v) => walk(v, key));
      if (o && typeof o === 'object') return Object.entries(o).forEach(([k, v]) => walk(v, k));
      if (typeof o !== 'string') return;
      if (['icon', 'satellites'].includes(key)) iconNames.push([id, o]);
      if (['src', 'image', 'logo', 'photo'].includes(key) && !/^https?:/.test(o) && !exists(path.resolve(dir, o.replace(/^style:/, ''))) && !o.startsWith('style:')) probs.push(`${id}: file not found: ${o} (put it in ${rel(path.join(dir, 'assets'))}/)`);
    };
    walk(p, '');
    for (const e of s.sfx ?? []) { const n = typeof e === 'string' ? e : e.name; if (!SFX_NAMES.includes(n)) probs.push(`${id}: unknown sound "${n}" (sounds: ${SFX_NAMES.join(', ')})`); }
  });
  for (const [id, name] of iconNames) if (!iconExists(name)) probs.push(`${id}: no icon "${name}" (try: ${nearestIcons(name).join(', ')}; search: npm run icons -- <word>)`);
  rows.push(probs.length ? row('FAIL', 'scenes & props', probs.join('\n                   ')) : row('PASS', 'scenes & props', `${scenes.length} scenes, every type, prop, icon and file valid`));
  if (warnsP.length) rows.push(row('WARN', 'text length', warnsP.join('\n                   ')));

  // Cues and timing.
  if (t.errors.length) rows.push(row('FAIL', 'cues', t.errors.join('\n                   ')));
  else if (words.length) rows.push(row('PASS', 'cues', 'every scene and item starts on a phrase that is really said'));
  const lens = t.scenes.map((s) => (s.end - s.start) / t.fps);
  const short = t.scenes.filter((s, i) => lens[i] < 0.9), shortish = t.scenes.filter((s, i) => lens[i] >= 0.9 && lens[i] < 1.3);
  const long = t.scenes.filter((s, i) => lens[i] > 7);
  if (short.length) rows.push(row('FAIL', 'too short', short.map((s) => `${s.id} ${((s.end - s.start) / t.fps).toFixed(2)} s`).join(', ') + ' (nobody can read that: merge it or start it earlier)'));
  else if (shortish.length) rows.push(row('WARN', 'short scenes', shortish.map((s) => `${s.id} ${((s.end - s.start) / t.fps).toFixed(2)} s`).join(', ')));
  if (long.length) rows.push(row('WARN', 'long holds', long.map((s) => `${s.id} ${((s.end - s.start) / t.fps).toFixed(1)} s`).join(', ') + ' (split it, or give it items/callouts that arrive on cue)'));
  if (!short.length && !long.length) rows.push(row('PASS', 'pacing', `avg ${(lens.reduce((a, b) => a + b, 0) / lens.length).toFixed(1)} s per scene (style aims for ${project.style.motion.avgShot} s)`));

  // Hook and variety.
  rows.push(HOOKS.has(scenes[0].type) ? row('PASS', 'hook scene', `opens on a ${scenes[0].type}`) : row('WARN', 'hook scene', `opens on a ${scenes[0].type}; open on something big (title, number, hero, image)`));
  const types = scenes.map((s) => s.type);
  const repeats = types.filter((x, i) => i && x === types[i - 1] && x !== 'custom');
  const counts = types.reduce((m, x) => ({...m, [x]: (m[x] ?? 0) + 1}), {});
  const over = Object.entries(counts).filter(([, c]) => c / types.length > 0.4 && types.length >= 5);
  const distinct = Object.keys(counts).length;
  const wantDistinct = Math.min(6, Math.ceil(types.length / 2.5));
  const vProbs = [];
  if (repeats.length) vProbs.push(`${repeats.length} back-to-back repeat(s) of the same scene type`);
  if (over.length) vProbs.push(`${over.map(([k, c]) => `${k} ${c}/${types.length}`).join(', ')} of scenes`);
  if (distinct < wantDistinct) vProbs.push(`only ${distinct} scene types; use ${wantDistinct}+ for this length`);
  rows.push(vProbs.length ? row('WARN', 'variety', vProbs.join('; ')) : row('PASS', 'variety', `${distinct} different scene types`));

  // Every sentence gets its own visual: a scene change inside any sentence longer than ~4 s.
  if (words.length) {
    const md = exists(path.join(dir, 'script.md')) ? fs.readFileSync(path.join(dir, 'script.md'), 'utf8') : '';
    const sents = sentences(scriptText(md));
    let wi = 0;
    const starts = new Set(t.scenes.map((s) => s.start));
    const gaps = [];
    for (const sent of sents) {
      const n = sent.split(/\s+/).filter((w) => norm(w)).length;
      const ws = words.slice(wi, wi + n);
      wi += n;
      if (!ws.length) continue;
      const s0 = Math.round(ws[0].s * t.fps), s1 = Math.round(ws[ws.length - 1].e * t.fps);
      const hasCut = [...starts].some((f) => f >= s0 - Math.round(t.fps * 0.6) && f <= s1);
      if (!hasCut && (s1 - s0) / t.fps > 2.2) gaps.push(`"${sent.slice(0, 50)}${sent.length > 50 ? '...' : ''}"`);
    }
    rows.push(gaps.length ? row('WARN', 'line = visual', `${gaps.length} sentence(s) without their own visual: ${gaps.slice(0, 4).join(', ')}`) : row('PASS', 'line = visual', 'every sentence gets a new visual'));
  }

  // On-screen numbers need sources too.
  const facts = exists(path.join(dir, 'facts.md')) ? fs.readFileSync(path.join(dir, 'facts.md'), 'utf8') : '';
  const factVals = new Set(findNumbers(facts).map((n) => n.value));
  const shown = [];
  const collect = (o, key) => {
    if (Array.isArray(o)) return o.forEach((v) => collect(v, key));
    if (o && typeof o === 'object') return Object.entries(o).forEach(([k, v]) => collect(v, k));
    if (typeof o === 'string' && ['text', 'label', 'value', 'title', 'sub', 'kicker', 'body', 'big', 'caption'].includes(key)) shown.push(o);
  };
  scenes.forEach((s) => {
    collect(s.props ?? {}, '');
    if (s.type === 'number' && s.props?.value !== undefined) shown.push(`${s.props.prefix ?? ''}${s.props.value}${s.props.suffix === '%' ? '%' : ''}`);
  });
  const unsourced = [...new Set(shown.flatMap((x) => findNumbers(x).filter(isClaim).filter((n) => !factVals.has(n.value) && !(n.value >= 1900 && n.value <= 2100 && factVals.has(n.value))).map((n) => n.text)))];
  rows.push(unsourced.length ? row('FAIL', 'on-screen facts', `numbers on screen not in facts.md: ${unsourced.join(', ')}`) : row('PASS', 'on-screen facts', 'every number shown has a source'));

  const fails = rows.filter((r) => r.status === 'FAIL').length;
  return {rows, fails, warns: rows.filter((r) => r.status === 'WARN').length, timeline: t};
}

const isMain = path.resolve(process.argv[1] ?? '') === fileURLToPath(import.meta.url);
if (isMain) {
  const a = args();
  try {
    const dir = videoDir(a._[0]);
    const r = checkStoryboard(dir);
    console.log(`Storyboard check: ${rel(path.join(dir, 'storyboard.json'))}`);
    for (const x of r.rows) console.log(`  ${x.status}  ${x.check.padEnd(16)} ${x.detail}`);
    if (r.timeline?.scenes?.length) {
      console.log('\n  scene  type        start   length  line');
      for (const s of r.timeline.scenes) console.log(`  ${s.id.padEnd(6)} ${s.type.padEnd(11)} ${(s.start / r.timeline.fps).toFixed(2).padStart(6)}s ${((s.end - s.start) / r.timeline.fps).toFixed(2).padStart(6)}s  ${(s.words ?? []).map((w) => w.w).join(' ').slice(0, 60)}`);
    }
    console.log(`\n${r.fails ? 'FAIL' : 'PASS'}: ${r.fails} to fix, ${r.warns} to consider.`);
    process.exit(r.fails ? 1 : 0);
  } catch (e) {
    console.error(e?.message ?? e);
    process.exit(1);
  }
}
