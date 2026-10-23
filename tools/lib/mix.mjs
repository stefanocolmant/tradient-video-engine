// The soundtrack: voice + music bed (ducked under the voice) + sound effects on the timeline's
// events, normalised to -14 LUFS with true peak under -1.5 dBTP (social platforms' target).
import fs from 'node:fs';
import path from 'node:path';
import {PUBLIC, exists} from './paths.mjs';
import {ffmpeg, loudness} from './ff.mjs';
import {SR, decodeAudio, envelope, writeWav} from './wav.mjs';

const db = (x) => 10 ** (x / 20);

export function findMusic(name, projectDir) {
  if (!name || name === 'none') return null;
  const cands = [path.resolve(projectDir, name), path.join(projectDir, 'music', name), path.join(PUBLIC, 'music', name), path.join(PUBLIC, 'music', `${name}.m4a`), path.join(PUBLIC, 'music', `${name}.mp3`), path.join(PUBLIC, 'music', `${name}.wav`)];
  return cands.find((p) => exists(p) && fs.statSync(p).isFile()) ?? null;
}

export function findSfx(name) {
  for (const ext of ['wav', 'mp3', 'm4a']) {
    const p = path.join(PUBLIC, 'sfx', `${name}.${ext}`);
    if (exists(p)) return p;
  }
  return null;
}

export function buildMix(project, outFile, {log = console.log} = {}) {
  const {timeline, style, sb} = project;
  const total = Math.ceil((timeline.durationInFrames / timeline.fps) * SR);
  const L = new Float32Array(total), R = new Float32Array(total);
  const notes = [];
  let voiceEnv = null;
  // Voice.
  if (project.voice) {
    const v = decodeAudio(project.voice);
    const n = Math.min(total, v.data[0].length);
    for (let i = 0; i < n; i++) { L[i] += v.data[0][i]; R[i] += v.data[1][i]; }
    voiceEnv = envelope(v.data[0], SR, 0.02);
    notes.push(`voice ${path.basename(project.voice)} ${(v.data[0].length / SR).toFixed(2)} s`);
  }
  // Music, looped and ducked: full level in pauses, about a third under speech.
  const musicCfg = sb.music === false ? null : (sb.music ?? {});
  const track = !musicCfg || !musicCfg.track || musicCfg.track === 'auto' ? style.sound.music : musicCfg.track;
  const musicFile = musicCfg ? findMusic(track, project.dir) : null;
  if (musicFile) {
    const m = decodeAudio(musicFile);
    const vol = musicCfg.volume ?? style.sound.musicVolume;
    const fadeIn = Math.round(0.4 * SR), fadeOut = Math.round(1.6 * SR);
    let duck = 1;
    const len = m.data[0].length;
    const xfade = Math.min(Math.round(0.05 * SR), Math.floor(len / 4));
    for (let i = 0; i < total; i++) {
      if (voiceEnv) {
        const e = voiceEnv[Math.floor(i / (SR * 0.02))] ?? 0;
        const target = e > 0.02 ? 0.36 : 1;
        duck += (target - duck) * (target < duck ? 0.0016 : 0.00012); // fast down (~15 ms), slow up (~180 ms)
      }
      let g = vol * duck;
      if (i < fadeIn) g *= i / fadeIn;
      if (i > total - fadeOut) g *= Math.max(0, (total - i) / fadeOut);
      const j = i % len;
      let sl = m.data[0][j], sr = m.data[1][j];
      if (j < xfade && i >= len) { const k = j / xfade; sl = sl * k + m.data[0][len - xfade + j] * (1 - k); sr = sr * k + m.data[1][len - xfade + j] * (1 - k); }
      L[i] += sl * g; R[i] += sr * g;
    }
    notes.push(`music ${path.basename(musicFile)} at ${(vol * 100).toFixed(0)}%`);
  } else if (musicCfg) notes.push('music: none found');
  // Sound effects.
  const sfxLevel = style.sound.sfx;
  const cache = new Map();
  let placed = 0;
  const missing = new Set();
  for (const e of timeline.sfx ?? []) {
    const file = findSfx(e.name);
    if (!file) { missing.add(e.name); continue; }
    if (!cache.has(file)) cache.set(file, decodeAudio(file));
    const a = cache.get(file);
    const start = Math.round((e.frame / timeline.fps) * SR);
    const g = db(e.gain ?? 0) * sfxLevel * (e.auto ? 0.55 : 0.8);
    for (let i = 0; i < a.data[0].length && start + i < total; i++) {
      if (start + i < 0) continue;
      L[start + i] += a.data[0][i] * g; R[start + i] += a.data[1][i] * g;
    }
    placed++;
  }
  if (placed) notes.push(`${placed} sound effects`);
  if (missing.size) notes.push(`sound effects not found: ${[...missing].join(', ')}`);
  // Normalise: measure, then one linear gain to -14 LUFS, then a soft limiter for peaks.
  const tmp = outFile + '.raw.wav';
  writeWav(tmp, {sr: SR, data: [L, R]});
  const meas = loudness(tmp);
  let gain = 1;
  if (meas && Number.isFinite(meas.lufs) && meas.lufs > -70) gain = db(-14 - meas.lufs);
  const ceiling = db(-2.2);
  for (const ch of [L, R]) for (let i = 0; i < total; i++) {
    let v = ch[i] * gain;
    const a = Math.abs(v);
    if (a > ceiling * 0.85) v = Math.sign(v) * (ceiling * 0.85 + (ceiling * 0.15) * Math.tanh((a - ceiling * 0.85) / (ceiling * 0.15)));
    ch[i] = v;
  }
  writeWav(outFile, {sr: SR, data: [L, R]});
  fs.rmSync(tmp, {force: true});
  const after = loudness(outFile);
  notes.push(`loudness ${after?.lufs?.toFixed(1)} LUFS, peak ${after?.truePeak?.toFixed(1)} dBTP`);
  log(`  mix: ${notes.join(' · ')}`);
  return {file: outFile, notes, loudness: after};
}

export {ffmpeg};
