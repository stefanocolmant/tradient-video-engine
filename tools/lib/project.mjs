// Loading a video folder (storyboard + voice + style) and staging its files for the renderer.
import fs from 'node:fs';
import path from 'node:path';
import {resolveStoryboard} from '../../src/core/timeline.mjs';
import {validateStyle} from '../../src/core/style.mjs';
import {PUBLIC, ROOT, STAGE, exists, readJSON, styleDir} from './paths.mjs';

export function loadStyle(id) {
  const dir = styleDir(id);
  const raw = readJSON(path.join(dir, 'style.json'));
  const {style, problems} = validateStyle(raw);
  return {dir, raw, style, problems};
}

export function loadProject(dir, {style: styleOverride} = {}) {
  const sbFile = path.join(dir, 'storyboard.json');
  if (!exists(sbFile)) throw new Error(`${path.relative(ROOT, dir)} has no storyboard.json yet (write it after the script and voice; see docs/STORYBOARD.md)`);
  const sb = readJSON(sbFile);
  const styleId = styleOverride ?? sb.style ?? 'house';
  const st = loadStyle(styleId);
  const wordsFile = path.join(dir, 'voice', 'words.json');
  const words = exists(wordsFile) ? readJSON(wordsFile) : [];
  const timeline = resolveStoryboard(sb, words, st.style);
  const voice = ['voice/voice.wav', 'voice/voice.mp3'].map((p) => path.join(dir, p)).find(exists) ?? null;
  return {dir, slug: path.basename(dir), sb, styleId, styleDir: st.dir, style: st.style, styleProblems: st.problems, words, timeline, voice};
}

const MEDIA = /\.(png|jpe?g|webp|gif|svg|avif|bmp|mp4|mov|webm|m4v|wav|mp3|m4a|ttf|otf|woff2?)$/i;

// Copy everything the render needs under public/_stage/<run>/ and rewrite paths to match.
export function stage(project, {runId, audio = null} = {}) {
  fs.mkdirSync(STAGE, {recursive: true});
  // Old stages from earlier runs (older than 2 hours) are removed so public/ never grows.
  for (const d of fs.readdirSync(STAGE)) {
    const p = path.join(STAGE, d);
    try { if (Date.now() - fs.statSync(p).mtimeMs > 2 * 3600e3) fs.rmSync(p, {recursive: true, force: true}); } catch { /* ignore */ }
  }
  const run = runId ?? `${project.slug}-${Date.now().toString(36)}`;
  const base = path.join(STAGE, run);
  const pub = (abs) => path.relative(PUBLIC, abs).split(path.sep).join('/');
  const missing = [];
  const copy = (from, to) => { fs.mkdirSync(path.dirname(to), {recursive: true}); fs.copyFileSync(from, to); return pub(to); };
  const fromStyle = (file) => {
    if (!file || /^(https?:|data:)/.test(file)) return file;
    const inStyle = path.join(project.styleDir, file);
    if (exists(inStyle)) return copy(inStyle, path.join(base, 'style', file));
    if (exists(path.join(PUBLIC, file))) return file;
    missing.push(`style file ${file}`);
    return file;
  };
  const style = structuredClone(project.style);
  for (const role of Object.keys(style.fonts)) {
    const files = style.fonts[role].files ?? {};
    for (const w of Object.keys(files)) files[w] = fromStyle(files[w]);
    if (!Object.keys(files).length) missing.push(`font files for ${role} (${style.fonts[role].family})`);
  }
  if (style.background?.image) style.background.image = fromStyle(style.background.image);
  if (style.logo) style.logo = fromStyle(style.logo);

  const timeline = structuredClone(project.timeline);
  const fromProject = (value) => {
    if (typeof value !== 'string' || /^(https?:|data:)/.test(value) || !MEDIA.test(value)) return value;
    if (value.startsWith('style:')) return fromStyle(value.slice(6));
    const abs = path.resolve(project.dir, value);
    if (exists(abs)) return copy(abs, path.join(base, 'project', path.relative(project.dir, abs)));
    if (exists(path.join(PUBLIC, value))) return value;
    missing.push(`${value} (looked in ${path.relative(ROOT, project.dir)}/)`);
    return value;
  };
  const walk = (node) => {
    if (Array.isArray(node)) return node.map(walk);
    if (node && typeof node === 'object') { for (const k of Object.keys(node)) node[k] = walk(node[k]); return node; }
    return fromProject(node);
  };
  for (const s of timeline.scenes) if (s.props) s.props = walk(s.props);
  const audioRel = audio && exists(audio) ? copy(audio, path.join(base, 'project', path.basename(audio))) : null;
  return {run, base, style, timeline, audio: audioRel, missing};
}

export const nextVersion = (outDir, slug) => {
  if (!exists(outDir)) return 1;
  const nums = fs.readdirSync(outDir).map((f) => f.match(new RegExp(`^${slug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}_v(\\d+)`))).filter(Boolean).map((m) => Number(m[1]));
  return nums.length ? Math.max(...nums) + 1 : 1;
};
