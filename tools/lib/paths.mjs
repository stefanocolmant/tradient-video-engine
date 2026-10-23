import path from 'node:path';
import fs from 'node:fs';
import {fileURLToPath} from 'node:url';

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
export const VIDEOS = path.join(ROOT, 'videos');
export const STYLES = path.join(ROOT, 'styles');
export const PUBLIC = path.join(ROOT, 'public');
export const STAGE = path.join(PUBLIC, '_stage');

export const rel = (p) => path.relative(process.cwd(), p) || '.';
export const exists = (p) => fs.existsSync(p);
export const readJSON = (p) => JSON.parse(fs.readFileSync(p, 'utf8'));
export const writeJSON = (p, v) => { fs.mkdirSync(path.dirname(p), {recursive: true}); fs.writeFileSync(p, JSON.stringify(v, null, 2) + '\n'); };

// "my-video", "videos/my-video" or an absolute path -> the video folder.
export function videoDir(arg) {
  if (!arg) throw new Error('Name the video folder, e.g. npm run render -- my-video');
  const cands = [path.resolve(arg), path.join(VIDEOS, arg), path.join(VIDEOS, path.basename(arg))];
  const hit = cands.find((p) => fs.existsSync(path.join(p, 'storyboard.json')) || fs.existsSync(path.join(p, 'script.md')));
  if (!hit) throw new Error(`No video folder "${arg}" (looked in videos/). Make one with: npm run new -- ${path.basename(arg)}`);
  return hit;
}

export function styleDir(id) {
  const p = path.join(STYLES, id);
  if (!fs.existsSync(path.join(p, 'style.json'))) {
    const have = fs.existsSync(STYLES) ? fs.readdirSync(STYLES).filter((d) => fs.existsSync(path.join(STYLES, d, 'style.json'))) : [];
    throw new Error(`No style "${id}". Styles here: ${have.join(', ') || '(none)'}`);
  }
  return p;
}

// Named options: --key value, --key=value, --flag. Positional arguments are returned in `_`.
export function args(argv = process.argv.slice(2)) {
  const out = {_: []};
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (!a.startsWith('--')) { out._.push(a); continue; }
    const [k, v] = a.slice(2).split(/=(.*)/s);
    const val = v !== undefined ? v : argv[i + 1] !== undefined && !argv[i + 1].startsWith('--') ? argv[++i] : true;
    out[k] = out[k] === undefined ? val : [].concat(out[k], val); // repeated options collect into a list
  }
  return out;
}
