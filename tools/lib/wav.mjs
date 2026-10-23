// PCM WAV in and out, plus decoding any audio file to float samples through ffmpeg.
import fs from 'node:fs';
import {ffmpeg} from './ff.mjs';

export const SR = 48000;

// Any audio/video file -> {sr, channels, data: Float32Array[] per channel}.
export function decodeAudio(file, {sr = SR, channels = 2} = {}) {
  const r = ffmpeg(['-v', 'error', '-i', file, '-vn', '-ac', String(channels), '-ar', String(sr), '-c:a', 'pcm_s16le', '-f', 'wav', '-']);
  return parseWav(r.stdout);
}

export function parseWav(buf) {
  if (buf.toString('ascii', 0, 4) !== 'RIFF') throw new Error('Not a WAV file');
  let o = 12, fmt = null, data = null;
  while (o + 8 <= buf.length) {
    const id = buf.toString('ascii', o, o + 4);
    let size = buf.readUInt32LE(o + 4);
    if (id === 'data' && (size === 0 || size === 0xffffffff || o + 8 + size > buf.length)) size = buf.length - o - 8; // streamed wav
    if (id === 'fmt ') fmt = {format: buf.readUInt16LE(o + 8), channels: buf.readUInt16LE(o + 10), sr: buf.readUInt32LE(o + 12), bits: buf.readUInt16LE(o + 22)};
    if (id === 'data') { data = buf.subarray(o + 8, o + 8 + size); break; }
    o += 8 + size + (size % 2);
  }
  if (!fmt || !data) throw new Error('Broken WAV');
  const n = Math.floor(data.length / (fmt.bits / 8) / fmt.channels);
  const ch = Array.from({length: fmt.channels}, () => new Float32Array(n));
  for (let i = 0; i < n; i++) {
    for (let c = 0; c < fmt.channels; c++) {
      const k = (i * fmt.channels + c) * (fmt.bits / 8);
      ch[c][i] = fmt.bits === 16 ? data.readInt16LE(k) / 32768 : fmt.bits === 32 && fmt.format === 3 ? data.readFloatLE(k) : fmt.bits === 24 ? (data.readIntLE(k, 3) / 8388608) : data.readInt32LE(k) / 2147483648;
    }
  }
  return {sr: fmt.sr, channels: fmt.channels, data: ch};
}

export function writeWav(file, {sr = SR, data}) {
  const channels = data.length, n = data[0].length;
  const buf = Buffer.alloc(44 + n * channels * 2);
  buf.write('RIFF', 0); buf.writeUInt32LE(36 + n * channels * 2, 4); buf.write('WAVE', 8);
  buf.write('fmt ', 12); buf.writeUInt32LE(16, 16); buf.writeUInt16LE(1, 20); buf.writeUInt16LE(channels, 22);
  buf.writeUInt32LE(sr, 24); buf.writeUInt32LE(sr * channels * 2, 28); buf.writeUInt16LE(channels * 2, 32); buf.writeUInt16LE(16, 34);
  buf.write('data', 36); buf.writeUInt32LE(n * channels * 2, 40);
  let o = 44;
  for (let i = 0; i < n; i++) for (let c = 0; c < channels; c++) { const v = Math.max(-1, Math.min(1, data[c][i])); buf.writeInt16LE(Math.round(v * 32767), o); o += 2; }
  fs.writeFileSync(file, buf);
}

// RMS envelope in windows of `win` seconds (one value per window).
export function envelope(x, sr, win = 0.02) {
  const n = Math.max(1, Math.round(sr * win));
  const out = new Float32Array(Math.ceil(x.length / n));
  for (let w = 0; w < out.length; w++) {
    let s = 0, c = 0;
    for (let i = w * n; i < Math.min(x.length, (w + 1) * n); i++) { s += x[i] * x[i]; c++; }
    out[w] = Math.sqrt(s / Math.max(1, c));
  }
  return out;
}
