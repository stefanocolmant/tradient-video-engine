// Measuring a video's editing rhythm: where the cuts are, how long shots last, how much moves, how
// shots change (hard cuts or dissolves), plus one frame from each shot to look at.
import fs from 'node:fs';
import path from 'node:path';
import {decodeFrames, ffmpeg, probe} from './ff.mjs';

function histogram(px) {
  // 4x4x4 RGB bins, normalised.
  const h = new Float32Array(64);
  for (let i = 0; i < px.length; i += 3) h[((px[i] >> 6) << 4) | ((px[i + 1] >> 6) << 2) | (px[i + 2] >> 6)]++;
  const n = px.length / 3;
  for (let k = 0; k < 64; k++) h[k] /= n;
  return h;
}
const hdist = (a, b) => { let s = 0; for (let k = 0; k < 64; k++) s += Math.abs(a[k] - b[k]); return s / 2; };
const pdiff = (a, b) => { let s = 0; for (let i = 0; i < a.length; i += 3) s += Math.abs(a[i + 1] - b[i + 1]); return s / (a.length / 3) / 255; };

export function analyzeVideo(file, {outDir, maxSeconds = 240, sampleWidth = 72, fps = 15} = {}) {
  const info = probe(file);
  const v = info.streams.find((s) => s.codec_type === 'video');
  if (!v) throw new Error(`No video stream in ${file}`);
  const dur = Math.min(Number(info.format.duration) || 0, maxSeconds);
  const fr = decodeFrames(file, {width: sampleWidth, fps, maxFrames: Math.ceil(dur * fps) + 2, dur});
  const n = fr.frames.length;
  const hists = fr.frames.map(histogram);
  const lag = 3;
  const d = new Float32Array(n), m = new Float32Array(n), q = new Float32Array(n);
  for (let i = 1; i < n; i++) {
    d[i] = hdist(hists[i], hists[i - 1]);
    m[i] = pdiff(fr.frames[i], fr.frames[i - 1]);
    q[i] = pdiff(fr.frames[i], fr.frames[Math.max(0, i - lag)]);
  }
  const localMedian = (arr, i, r = 10) => {
    const vals = [];
    for (let j = Math.max(1, i - r); j < Math.min(n, i + r + 1); j++) if (Math.abs(j - i) > lag) vals.push(arr[j]);
    vals.sort((x, y) => x - y);
    return vals[Math.floor(vals.length / 2)] ?? 0;
  };
  // A shot change is a peak in colour change (footage) or in picture change over a few frames
  // (motion graphics, where every scene shares one background and only the content swaps).
  const cuts = [];
  const dissolves = [];
  for (let i = 2; i < n - 1; i++) {
    const hd = d[i] > 0.28 && d[i] > localMedian(d, i) * 3.5 && d[i] >= d[i - 1] && d[i] >= d[i + 1];
    const pq = q[i] > 0.035 && q[i] > localMedian(q, i) * 2.6 && q[i] >= q[i - 1] && q[i] >= q[i + 1];
    if ((hd || pq) && (!cuts.length || i - cuts[cuts.length - 1] > fps * 0.4)) {
      cuts.push(i);
      // Gradual change (a dissolve, zoom or slide) when the picture change builds over several frames.
      if (!hd && m[i] < q[i] * 0.6) dissolves.push(i);
    }
  }
  const bounds = [0, ...cuts, n];
  const shots = [];
  for (let s = 0; s < bounds.length - 1; s++) shots.push([bounds[s], bounds[s + 1]]);
  const lens = shots.map(([a, b]) => (b - a) / fps).filter((x) => x > 0.05);
  const sorted = [...lens].sort((a, b) => a - b);
  const median = sorted[Math.floor(sorted.length / 2)] ?? dur;
  // Motion inside shots (cuts excluded): mean frame-to-frame change.
  const near = (i) => cuts.some((c) => Math.abs(c - i) <= lag + 1);
  let mSum = 0, mN = 0;
  for (let i = 1; i < n; i++) if (!near(i)) { mSum += q[i]; mN++; }
  const motion = mN ? mSum / mN : 0;
  // One frame per shot (the middle), at most 16, saved for the contact sheet.
  const frames = [];
  if (outDir) {
    fs.mkdirSync(outDir, {recursive: true});
    const pick = shots.length <= 16 ? shots : Array.from({length: 16}, (_, k) => shots[Math.floor((k * shots.length) / 16)]);
    pick.forEach(([a, b], k) => {
      const t = ((a + b) / 2) / fps;
      const out = path.join(outDir, `${path.basename(file).replace(/\.[^.]+$/, '').replace(/[^\w-]+/g, '_')}-${String(k).padStart(2, '0')}.jpg`);
      ffmpeg(['-v', 'error', '-y', '-ss', t.toFixed(2), '-i', file, '-frames:v', '1', '-vf', 'scale=720:-2', '-q:v', '3', out], {allowFail: true});
      if (fs.existsSync(out)) frames.push({file: out, t: +t.toFixed(2)});
    });
  }
  const audio = info.streams.find((s) => s.codec_type === 'audio');
  return {
    file: path.basename(file),
    seconds: +dur.toFixed(2),
    size: [Number(v.width), Number(v.height)],
    aspect: +(Number(v.width) / Number(v.height)).toFixed(3),
    cuts: cuts.length,
    cutsPerMinute: +((cuts.length / Math.max(1, dur)) * 60).toFixed(1),
    shotMedian: +median.toFixed(2),
    shotMean: +(lens.reduce((a, b) => a + b, 0) / Math.max(1, lens.length)).toFixed(2),
    dissolves: dissolves.length,
    hardCuts: cuts.length - dissolves.length,
    motion: +motion.toFixed(4),
    hasAudio: !!audio,
    frames,
  };
}
