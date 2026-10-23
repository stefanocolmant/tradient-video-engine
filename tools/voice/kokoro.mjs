// Kokoro-82M (Apache-2.0): a free voice that runs on this computer. The model (~90 MB) downloads
// once into .cache/models on first use.
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import {ROOT} from '../lib/paths.mjs';

export const VOICES = {
  female: ['af_heart', 'af_bella', 'af_nicole', 'af_sarah', 'af_sky', 'bf_emma', 'bf_isabella'],
  male: ['am_michael', 'am_fenrir', 'am_puck', 'am_adam', 'am_echo', 'am_liam', 'am_onyx', 'bm_george', 'bm_fable', 'bm_daniel', 'bm_lewis'],
};
export const DEFAULT_VOICE = 'af_heart';

let tts = null;
async function load() {
  if (tts) return tts;
  let mod, tf;
  try {
    // Plain ESM imports so this is the same transformers.js instance kokoro-js uses.
    mod = await import('kokoro-js');
    tf = await import('@huggingface/transformers');
  } catch {
    throw new Error('The free local voice is not installed. Run: npm install kokoro-js   (or use --provider elevenlabs/openai/say, or record your own and use --file)');
  }
  tf.env.cacheDir = path.join(ROOT, '.cache', 'models');
  tts = await mod.KokoroTTS.from_pretrained('onnx-community/Kokoro-82M-v1.0-ONNX', {dtype: 'q8', device: 'cpu'});
  return tts;
}

// Paragraph by paragraph (whole paragraphs keep natural prosody), long ones split at sentences.
// Runs in a child process (see kokoro-worker.mjs).
export async function speak(paragraphs, {voice = DEFAULT_VOICE, speed = 1} = {}) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'tve-kokoro-'));
  const job = path.join(dir, 'job.json');
  fs.writeFileSync(job, JSON.stringify({paragraphs, voice, speed}));
  const r = spawnSync(process.execPath, [path.join(path.dirname(fileURLToPath(import.meta.url)), 'kokoro-worker.mjs'), job], {stdio: ['ignore', 'inherit', 'pipe'], encoding: 'utf8'});
  const out = `${job}.out.json`;
  if (!fs.existsSync(out)) {
    fs.rmSync(dir, {recursive: true, force: true});
    const msg = String(r.stderr ?? '').split('\n').filter((l) => /Error|error:/.test(l) && l.length < 400).slice(-2).join(' ');
    throw new Error(msg || 'Kokoro failed to produce audio');
  }
  const meta = JSON.parse(fs.readFileSync(out, 'utf8'));
  const chunks = meta.chunks.map((c) => {
    const b = fs.readFileSync(c.file);
    return {text: c.text, sr: c.sr, pauseAfter: c.pauseAfter, samples: new Float32Array(b.buffer.slice(b.byteOffset, b.byteOffset + b.byteLength))};
  });
  fs.rmSync(dir, {recursive: true, force: true});
  return {chunks, label: meta.label};
}

export async function speakInProcess(paragraphs, {voice = DEFAULT_VOICE, speed = 1} = {}) {
  const t = await load();
  if (!t.voices[voice]) throw new Error(`Unknown Kokoro voice "${voice}". Try: ${[...VOICES.female, ...VOICES.male].join(', ')}`);
  const chunks = [];
  for (const para of paragraphs) {
    const parts = [];
    let cur = '';
    for (const s of para.split(/(?<=[.!?])\s+/)) {
      if ((cur + ' ' + s).length > 320 && cur) { parts.push(cur); cur = s; } else cur = cur ? cur + ' ' + s : s;
    }
    if (cur) parts.push(cur);
    for (let i = 0; i < parts.length; i++) {
      const audio = await t.generate(parts[i], {voice, speed});
      chunks.push({text: parts[i], samples: audio.audio, sr: audio.sampling_rate, pauseAfter: i === parts.length - 1 ? 0.3 : 0.16});
      process.stdout.write('.');
    }
  }
  process.stdout.write('\n');
  return {chunks, label: `Kokoro-82M ${voice} (local, Apache-2.0)`};
}
