#!/usr/bin/env node
// npm run voice -- <video> [--provider auto|kokoro|elevenlabs|openai|say|file] [--voice NAME] [--speed 1.0] [--file my-recording.wav]
// Reads videos/<video>/script.md and writes voice/voice.wav + voice/words.json (every word's start and end).
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import {createRequire} from 'node:module';
import {args, exists, readJSON, rel, videoDir, writeJSON, ROOT} from './lib/paths.mjs';
import {scriptText, tokens} from '../src/core/text.mjs';
import {ffmpeg, duration} from './lib/ff.mjs';
import {SR, decodeAudio, writeWav, parseWav} from './lib/wav.mjs';
import {fromRecognised, fromSpeech, speechSegments} from './lib/align.mjs';
import {hasKey} from './lib/env.mjs';

function pronunciations(dir) {
  const map = {};
  for (const f of [path.join(ROOT, 'pronounce.json'), path.join(dir, 'pronounce.json')]) if (exists(f)) Object.assign(map, readJSON(f));
  const out = {};
  for (const [k, v] of Object.entries(map)) if (!k.startsWith('_')) out[k.toLowerCase()] = v;
  return out;
}

export function pickProvider(want) {
  if (want && want !== 'auto') return want;
  if (hasKey('ELEVENLABS_API_KEY')) return 'elevenlabs';
  if (hasKey('OPENAI_API_KEY')) return 'openai';
  try { createRequire(import.meta.url).resolve('kokoro-js'); return 'kokoro'; } catch { /* not installed */ }
  if (process.platform === 'darwin') return 'say';
  throw new Error('No voice available: add an ELEVENLABS_API_KEY or OPENAI_API_KEY to .env, run "npm install kokoro-js" for the free local voice, or record yourself and use --file.');
}

async function recognise(file) {
  const local = await import('./voice/local-whisper.mjs');
  if (local.available()) { const w = local.transcribeWords(file); if (w?.length) return {words: w, by: 'whisper.cpp (local)'}; }
  if (hasKey('OPENAI_API_KEY')) { const o = await import('./voice/openai.mjs'); const w = await o.transcribeWords(file); if (w?.length) return {words: w, by: 'OpenAI whisper-1'}; }
  return null;
}

export async function makeVoice(dir, opt = {}) {
  const scriptFile = path.join(dir, 'script.md');
  if (!exists(scriptFile)) throw new Error(`Write ${rel(scriptFile)} first (see docs/SCRIPT.md).`);
  const text = scriptText(fs.readFileSync(scriptFile, 'utf8'));
  if (!text) throw new Error('script.md has no spoken text yet.');
  const paragraphs = text.split(/\n\s*\n/).map((p) => p.replace(/\s+/g, ' ').trim()).filter(Boolean);
  const display = tokens(text);
  // Pronunciation fixes change only what the voice hears; captions keep the script's spelling.
  const say = pronunciations(dir);
  const ttsParas = paragraphs.map((p) => p.split(' ').map((w) => {
    const core = w.replace(/^[^\p{L}\p{N}]+|[^\p{L}\p{N}]+$/gu, '');
    const rep = say[core.toLowerCase()];
    return rep ? w.replace(core, rep) : w;
  }).join(' '));
  const map = []; // display token index -> [first tts token, last tts token]
  let ti = 0;
  for (const d of display) {
    const core = d.raw.replace(/^[^\p{L}\p{N}]+|[^\p{L}\p{N}]+$/gu, '').toLowerCase();
    const n = say[core] ? tokens(say[core]).length : 1;
    map.push([ti, ti + n - 1]);
    ti += n;
  }
  const ttsTokens = tokens(ttsParas.join('\n\n'));
  const provider = pickProvider(opt.provider);
  const outDir = path.join(dir, 'voice');
  fs.mkdirSync(outDir, {recursive: true});
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'tve-voice-'));
  const raw = path.join(tmp, 'raw.wav');
  console.log(`Voice: ${provider}${opt.voice ? ` (${opt.voice})` : ''} · ${display.length} words`);
  let ttsWords = null, label = provider, method = 'pauses + syllables';
  const speed = opt.speed ? Number(opt.speed) : 1;

  if (provider === 'kokoro') {
    const k = await import('./voice/kokoro.mjs');
    const r = await k.speak(ttsParas, {voice: opt.voice ?? k.DEFAULT_VOICE, speed});
    label = r.label;
    const sr = r.chunks[0]?.sr ?? 24000;
    const parts = [];
    let t = 0, tokIndex = 0;
    ttsWords = [];
    for (const c of r.chunks) {
      const segs = speechSegments(c.samples, sr);
      const ct = tokens(c.text);
      ttsWords.push(...fromSpeech(ct, segs, t));
      tokIndex += ct.length;
      parts.push(c.samples, new Float32Array(Math.round(c.pauseAfter * sr)));
      t += c.samples.length / sr + c.pauseAfter;
    }
    const all = new Float32Array(parts.reduce((s, p) => s + p.length, 0));
    let o = 0; for (const p of parts) { all.set(p, o); o += p.length; }
    writeWav(raw, {sr, data: [all]});
  } else if (provider === 'elevenlabs') {
    const e = await import('./voice/elevenlabs.mjs');
    const r = await e.speak(ttsParas.join('\n\n'), {voice: opt.voice ?? e.DEFAULT_VOICE, model: opt.model, speed});
    label = r.label;
    const mp3 = path.join(tmp, 'raw.mp3');
    fs.writeFileSync(mp3, r.mp3);
    ffmpeg(['-v', 'error', '-y', '-i', mp3, raw]);
    ttsWords = fromRecognised(ttsTokens, e.charsToWords(r.chars, r.starts, r.ends)).words;
    method = 'ElevenLabs character timestamps';
    console.log(`  sent ${r.sent} characters to ElevenLabs`);
  } else if (provider === 'openai') {
    const o = await import('./voice/openai.mjs');
    const r = await o.speak(ttsParas.join('\n\n'), {voice: opt.voice ?? o.DEFAULT_VOICE, speed});
    label = r.label;
    fs.writeFileSync(raw, r.wav);
    console.log(`  sent ${r.sent} characters to OpenAI`);
  } else if (provider === 'say') {
    if (process.platform !== 'darwin') throw new Error('"say" is the macOS built-in voice; pick another provider.');
    const txt = path.join(tmp, 'in.txt');
    fs.writeFileSync(txt, ttsParas.join('\n\n'));
    // WAV straight from say (the ffmpeg bundled with Remotion can't read AIFF).
    const r = spawnSync('say', ['-v', opt.voice ?? 'Samantha', '-r', String(Math.round(185 * speed)), '--file-format=WAVE', '--data-format=LEI16@24000', '-o', raw, '-f', txt], {encoding: 'utf8'});
    if (r.status !== 0) throw new Error('say failed: ' + r.stderr);
    label = `macOS say ${opt.voice ?? 'Samantha'} (draft quality)`;
  } else if (provider === 'file') {
    const src = opt.file ? path.resolve(String(opt.file)) : null;
    if (!src || !exists(src)) throw new Error('Pass your recording: npm run voice -- <video> --provider file --file path/to/recording.wav (read the script exactly as written)');
    ffmpeg(['-v', 'error', '-y', '-i', src, '-ac', '1', raw]);
    label = `recording ${path.basename(src)}`;
  } else throw new Error(`Unknown provider "${provider}" (kokoro, elevenlabs, openai, say, file)`);

  // Clean the take: 48 kHz mono, a short lead-in, no long silence at either end.
  const a = decodeAudio(raw, {sr: SR, channels: 1});
  const mono = a.data[0];
  const segs = speechSegments(mono, SR);
  const first = segs.length ? segs[0][0] : 0, last = segs.length ? segs[segs.length - 1][1] : mono.length / SR;
  const lead = 0.06, tailPad = 0.35;
  const cut0 = Math.max(0, first - lead), cut1 = Math.min(mono.length / SR, last + tailPad);
  const clean = mono.subarray(Math.round(cut0 * SR), Math.round(cut1 * SR));
  const voiceFile = path.join(outDir, 'voice.wav');
  writeWav(voiceFile, {sr: SR, data: [clean]});
  const shift = cut0;

  // Timings: provider timestamps, else pauses + syllables, then a recogniser if one is available.
  let words;
  if (ttsWords) {
    if (provider === 'kokoro') {
      // Kokoro chunks were written at their own sample rate; times are already in seconds.
    }
    words = display.map((d, i) => {
      const [x, y] = map[i];
      const s = ttsWords[x]?.s ?? 0, e = ttsWords[y]?.e ?? s + 0.3;
      return {w: d.raw, s: +(s - shift).toFixed(3), e: +(e - shift).toFixed(3)};
    });
  } else {
    const est = fromSpeech(ttsTokens, speechSegments(clean, SR));
    words = display.map((d, i) => ({w: d.raw, s: est[map[i][0]]?.s ?? 0, e: est[map[i][1]]?.e ?? 0}));
  }
  let check = null;
  const rec = await recognise(voiceFile).catch((e) => { console.log(`  (recogniser skipped: ${e.message})`); return null; });
  if (rec) {
    const r = fromRecognised(display, rec.words);
    check = {by: rec.by, wer: +r.realWer.toFixed(3), rawWer: +r.wer.toFixed(3), mismatches: r.mismatches.slice(0, 40)};
    if (!/timestamps/.test(method)) { words = r.words; method = `${rec.by} word timestamps`; }
  }
  words = words.map((w, i) => ({w: w.w, s: Math.max(0, w.s), e: Math.max(w.s + 0.05, w.e)}));
  for (let i = 1; i < words.length; i++) if (words[i].s < words[i - 1].s) words[i].s = words[i - 1].s;
  writeJSON(path.join(outDir, 'words.json'), words);
  const dur = clean.length / SR;
  const wps = display.length / Math.max(0.1, words.at(-1).e - words[0].s);
  const report = {provider, voice: label, seconds: +dur.toFixed(2), words: display.length, wordsPerSecond: +wps.toFixed(2), timing: method, check, made: new Date().toISOString()};
  writeJSON(path.join(outDir, 'voice.json'), report);
  fs.rmSync(tmp, {recursive: true, force: true});
  console.log(`  ${rel(voiceFile)} · ${dur.toFixed(1)} s · ${wps.toFixed(2)} words/s · timings: ${method}`);
  if (wps > 3.4) console.log('  ! fast read (over 3.4 words/s): try --speed 0.92 or trim the script');
  if (wps < 2.2) console.log('  ! slow read (under 2.2 words/s): try --speed 1.08');
  if (check) {
    console.log(`  check by ${check.by}: ${(check.wer * 100).toFixed(1)}% of words not heard as written (numbers and sound-alikes ignored)`);
    const real = check.mismatches.filter((m) => m.script && (m.heard === null || m.heard));
    if (real.length) console.log('  listen for: ' + real.slice(0, 8).map((m) => `"${m.script ?? ''}"${m.heard ? ` heard as "${m.heard}"` : ' (not heard)'}`).join(', '));
  } else console.log('  (no speech recogniser available for a word-by-word check; see docs/VOICE.md to add one)');
  return report;
}

const isMain = path.resolve(process.argv[1] ?? '') === fileURLToPath(import.meta.url);
if (isMain) {
  const a = args();
  try {
    await makeVoice(videoDir(a._[0]), a);
    process.exit(0);
  } catch (e) {
    console.error('\n' + (e?.message ?? e));
    process.exit(1);
  }
}
