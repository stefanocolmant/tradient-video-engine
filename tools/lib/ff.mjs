// FFmpeg / FFprobe. Uses a system ffmpeg when one is installed; otherwise the copy that ships inside
// Remotion (no install needed). Only filters present in both are used, so results match either way.
import {spawnSync, spawn} from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import {createRequire} from 'node:module';

const require = createRequire(import.meta.url);
const PLATFORM_PKG = {
  'darwin-arm64': '@remotion/compositor-darwin-arm64',
  'darwin-x64': '@remotion/compositor-darwin-x64',
  'linux-x64': '@remotion/compositor-linux-x64-gnu',
  'linux-arm64': '@remotion/compositor-linux-arm64-gnu',
  'win32-x64': '@remotion/compositor-win32-x64-msvc',
};

let resolved = null;
export function ffBins() {
  if (resolved) return resolved;
  const exe = process.platform === 'win32' ? '.exe' : '';
  const sys = spawnSync('ffmpeg', ['-version'], {encoding: 'utf8'});
  const sysProbe = spawnSync('ffprobe', ['-version'], {encoding: 'utf8'});
  if (!process.env.ENGINE_BUNDLED_FFMPEG && sys.status === 0 && sysProbe.status === 0) {
    resolved = {ffmpeg: 'ffmpeg', ffprobe: 'ffprobe', env: process.env, source: 'system', version: sys.stdout.split('\n')[0]};
    return resolved;
  }
  const pkg = PLATFORM_PKG[`${process.platform}-${process.arch}`];
  let dir = null;
  try {
    dir = path.dirname(require.resolve(`${pkg}/package.json`));
  } catch {
    try { dir = path.dirname(require.resolve(`${pkg.replace('-gnu', '-musl')}/package.json`)); } catch { /* none */ }
  }
  if (!dir || !fs.existsSync(path.join(dir, 'ffmpeg' + exe))) throw new Error('No ffmpeg found. Run "npm install" (Remotion ships one) or install FFmpeg.');
  const env = {...process.env};
  if (process.platform === 'darwin') env.DYLD_LIBRARY_PATH = dir;
  else if (process.platform === 'linux') env.LD_LIBRARY_PATH = dir + (env.LD_LIBRARY_PATH ? ':' + env.LD_LIBRARY_PATH : '');
  else env.PATH = dir + ';' + env.PATH;
  resolved = {ffmpeg: path.join(dir, 'ffmpeg' + exe), ffprobe: path.join(dir, 'ffprobe' + exe), env, source: 'bundled', version: 'Remotion bundled ffmpeg'};
  return resolved;
}

export function ffmpeg(args, {input, maxBuffer = 1 << 30, allowFail = false} = {}) {
  const b = ffBins();
  const r = spawnSync(b.ffmpeg, ['-hide_banner', ...args], {env: b.env, input, maxBuffer});
  if (r.status !== 0 && !allowFail) throw new Error(`ffmpeg failed (${args.join(' ').slice(0, 200)}):\n${String(r.stderr).slice(-1500)}`);
  return r;
}

export function probe(file) {
  const b = ffBins();
  const r = spawnSync(b.ffprobe, ['-v', 'error', '-show_format', '-show_streams', '-of', 'json', file], {env: b.env, encoding: 'utf8', maxBuffer: 1 << 26});
  if (r.status !== 0) throw new Error(`ffprobe failed on ${file}: ${r.stderr}`);
  return JSON.parse(r.stdout);
}

export const duration = (file) => Number(probe(file).format?.duration ?? 0);

// Decode a picture or video to small RGB frames. Returns {width, height, frames: [Uint8Array]}.
export function decodeFrames(file, {width = 96, fps = null, maxFrames = 2000, start = null, dur = null} = {}) {
  const info = probe(file);
  const v = info.streams.find((s) => s.codec_type === 'video');
  if (!v) throw new Error(`No picture in ${file}`);
  const ratio = (Number(v.height) || 1) / (Number(v.width) || 1);
  const rot = Math.abs(Number(v.tags?.rotate ?? v.side_data_list?.find((d) => d.rotation !== undefined)?.rotation ?? 0)) % 180 === 90;
  const w = width, h = Math.max(2, Math.round((rot ? 1 / ratio : ratio) * w / 2) * 2);
  const args = [];
  if (start !== null) args.push('-ss', String(start));
  args.push('-i', file);
  if (dur !== null) args.push('-t', String(dur));
  args.push('-vf', `scale=${w}:${h}`);
  if (fps) args.push('-r', String(fps));
  args.push('-frames:v', String(maxFrames), '-f', 'image2pipe', '-c:v', 'rawvideo', '-pix_fmt', 'rgb24', '-');
  const r = ffmpeg(['-v', 'error', ...args]);
  const size = w * h * 3;
  const frames = [];
  for (let o = 0; o + size <= r.stdout.length; o += size) frames.push(new Uint8Array(r.stdout.buffer, r.stdout.byteOffset + o, size));
  return {width: w, height: h, frames};
}

// Integrated loudness (LUFS) and true peak (dBTP) via loudnorm's measuring pass.
export function loudness(file) {
  // -vn and an explicit encoder: the ffmpeg bundled with Remotion has no default encoder for "null".
  const r = ffmpeg(['-nostats', '-i', file, '-vn', '-af', 'loudnorm=I=-14:TP=-1.5:LRA=11:print_format=json', '-c:a', 'pcm_s16le', '-f', 'null', '-'], {allowFail: true});
  const txt = String(r.stderr);
  const m = txt.slice(txt.lastIndexOf('{')).match(/\{[\s\S]*\}/);
  if (!m) return null;
  const j = JSON.parse(m[0]);
  return {lufs: Number(j.input_i), truePeak: Number(j.input_tp), lra: Number(j.input_lra), threshold: Number(j.input_thresh), raw: j};
}

export function spawnFF(args, opts = {}) {
  const b = ffBins();
  return spawn(b.ffmpeg, ['-hide_banner', ...args], {env: b.env, ...opts});
}
