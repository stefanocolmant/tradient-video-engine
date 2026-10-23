// Optional: word timings from a local whisper.cpp ("whisper-cli") with a model in .cache/whisper/.
// Install whisper.cpp (macOS: brew install whisper-cpp) and run: npm run setup -- --whisper
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {spawnSync} from 'node:child_process';
import {ROOT} from '../lib/paths.mjs';
import {ffmpeg} from '../lib/ff.mjs';

export const MODEL = path.join(ROOT, '.cache', 'whisper', 'ggml-base.en.bin');
const bin = () => ['whisper-cli', 'whisper-cpp', 'main'].find((b) => spawnSync(b, ['--help'], {stdio: 'ignore'}).status === 0);
export const available = () => fs.existsSync(MODEL) && !!bin();

export function transcribeWords(file) {
  const b = bin();
  if (!b || !fs.existsSync(MODEL)) return null;
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'tve-wh-'));
  const wav = path.join(tmp, 'in.wav');
  ffmpeg(['-v', 'error', '-y', '-i', file, '-ar', '16000', '-ac', '1', '-c:a', 'pcm_s16le', wav]);
  const r = spawnSync(b, ['-m', MODEL, '-f', wav, '-ojf', '-of', path.join(tmp, 'out'), '-ml', '1', '-sow', '-np'], {encoding: 'utf8'});
  const jf = path.join(tmp, 'out.json');
  if (r.status !== 0 || !fs.existsSync(jf)) { fs.rmSync(tmp, {recursive: true, force: true}); return null; }
  const j = JSON.parse(fs.readFileSync(jf, 'utf8'));
  fs.rmSync(tmp, {recursive: true, force: true});
  return (j.transcription ?? []).map((s) => ({word: s.text.trim(), start: s.offsets.from / 1000, end: s.offsets.to / 1000})).filter((w) => w.word);
}
