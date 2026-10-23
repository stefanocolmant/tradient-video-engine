// Measuring a look from pixels: palette (k-means in CIELAB), brightness, contrast, saturation,
// warmth, how flat or textured it is, grain, vignette and the colour around the edges.
import {deltaELab, fromLab, hex, toLab} from '../../src/core/color.mjs';

const lin = (v) => { v /= 255; return v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; };
function rgb2lab(r, g, b) {
  let X = lin(r) * 0.4124 + lin(g) * 0.3576 + lin(b) * 0.1805, Y = lin(r) * 0.2126 + lin(g) * 0.7152 + lin(b) * 0.0722, Z = lin(r) * 0.0193 + lin(g) * 0.1192 + lin(b) * 0.9505;
  X /= 0.95047; Z /= 1.08883;
  const f = (t) => (t > 0.008856 ? Math.cbrt(t) : 7.787 * t + 16 / 116);
  const fx = f(X), fy = f(Y), fz = f(Z);
  return [116 * fy - 16, 500 * (fx - fy), 200 * (fy - fz)];
}

// Pixels (RGBA or RGB) -> Lab samples, every `step`-th pixel.
export function labSamples(px, channels = 4, step = 1) {
  const out = [];
  for (let i = 0; i < px.length; i += channels * step) {
    if (channels === 4 && px[i + 3] < 128) continue;
    out.push(rgb2lab(px[i], px[i + 1], px[i + 2]));
  }
  return out;
}

// Deterministic k-means++ (seeded) in Lab. Returns clusters sorted by share: [{lab, hex, share}].
export function kmeans(samples, k = 8, iters = 14) {
  if (!samples.length) return [];
  let seed = 12345;
  const rnd = () => ((seed = (seed * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff);
  const cents = [samples[Math.floor(rnd() * samples.length)].slice()];
  while (cents.length < Math.min(k, samples.length)) {
    const d = samples.map((s) => Math.min(...cents.map((c) => deltaELab(s, c))) ** 2);
    const tot = d.reduce((a, b) => a + b, 0) || 1;
    let r = rnd() * tot, i = 0;
    while (i < d.length - 1 && (r -= d[i]) > 0) i++;
    cents.push(samples[i].slice());
  }
  let assign = new Int32Array(samples.length);
  for (let it = 0; it < iters; it++) {
    for (let i = 0; i < samples.length; i++) {
      let best = 0, bd = Infinity;
      for (let c = 0; c < cents.length; c++) { const d = deltaELab(samples[i], cents[c]); if (d < bd) { bd = d; best = c; } }
      assign[i] = best;
    }
    const sum = cents.map(() => [0, 0, 0, 0]);
    for (let i = 0; i < samples.length; i++) { const s = sum[assign[i]]; s[0] += samples[i][0]; s[1] += samples[i][1]; s[2] += samples[i][2]; s[3]++; }
    sum.forEach((s, c) => { if (s[3]) cents[c] = [s[0] / s[3], s[1] / s[3], s[2] / s[3]]; });
  }
  const counts = new Array(cents.length).fill(0);
  for (const a of assign) counts[a]++;
  return cents.map((lab, c) => ({lab, hex: fromLab(lab), share: counts[c] / samples.length})).filter((c) => c.share > 0).sort((a, b) => b.share - a.share);
}

// Merge palettes from many images into one, weighting each image equally (or by `weight`).
export function mergePalettes(list, k = 10) {
  const pts = [];
  for (const {palette, weight = 1} of list) for (const c of palette) { const n = Math.max(1, Math.round(c.share * 200 * weight)); for (let i = 0; i < n; i++) pts.push(c.lab); }
  return kmeans(pts, k, 18);
}

// Whole-image measurements. px is RGBA (channels=4) or RGB (3), size w x h.
export function measure(px, w, h, channels = 4) {
  const L = new Float32Array(w * h), C = new Float32Array(w * h), B = new Float32Array(w * h);
  for (let i = 0, p = 0; p < w * h; i += channels, p++) {
    const [l, a, b] = rgb2lab(px[i], px[i + 1], px[i + 2]);
    L[p] = l; C[p] = Math.hypot(a, b); B[p] = b;
  }
  const mean = (arr) => arr.reduce((s, v) => s + v, 0) / arr.length;
  const mL = mean(L), sL = Math.sqrt(mean(L.map((v) => (v - mL) ** 2)));
  // Edges (Sobel on L) and a noise estimate on smooth areas.
  let edges = 0, nEdge = 0, noise = 0, nNoise = 0;
  for (let y = 1; y < h - 1; y++) for (let x = 1; x < w - 1; x++) {
    const i = y * w + x;
    const gx = -L[i - w - 1] - 2 * L[i - 1] - L[i + w - 1] + L[i - w + 1] + 2 * L[i + 1] + L[i + w + 1];
    const gy = -L[i - w - 1] - 2 * L[i - w] - L[i - w + 1] + L[i + w - 1] + 2 * L[i + w] + L[i + w + 1];
    const g = Math.hypot(gx, gy) / 8;
    edges += g; nEdge++;
    if (g < 2.5) { const avg = (L[i - 1] + L[i + 1] + L[i - w] + L[i + w]) / 4; noise += Math.abs(L[i] - avg); nNoise++; }
  }
  // Corners vs centre for vignette; the outer ring for the "background" colour.
  const region = (x0, y0, x1, y1) => { let s = 0, n = 0; for (let y = Math.floor(y0 * h); y < y1 * h; y++) for (let x = Math.floor(x0 * w); x < x1 * w; x++) { s += L[y * w + x]; n++; } return n ? s / n : 0; };
  const corners = (region(0, 0, 0.15, 0.15) + region(0.85, 0, 1, 0.15) + region(0, 0.85, 0.15, 1) + region(0.85, 0.85, 1, 1)) / 4;
  const centre = region(0.35, 0.35, 0.65, 0.65);
  const border = [];
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) if (x < w * 0.06 || x > w * 0.94 || y < h * 0.06 || y > h * 0.94) { const i = (y * w + x) * channels; border.push(rgb2lab(px[i], px[i + 1], px[i + 2])); }
  const borderPal = kmeans(border.filter((_, i) => i % 3 === 0), 3, 8);
  const pal = kmeans(labSamples(px, channels, Math.max(1, Math.floor((w * h) / 9000))), 8);
  const top3 = pal.slice(0, 3).reduce((s, c) => s + c.share, 0);
  return {
    brightness: +(mL / 100).toFixed(3),
    contrast: +(sL / 50).toFixed(3),
    saturation: +(mean(C) / 60).toFixed(3),
    warmth: +(mean(B) / 40).toFixed(3),
    edges: +(edges / Math.max(1, nEdge) / 10).toFixed(3),
    flatness: +top3.toFixed(3),
    grain: +(noise / Math.max(1, nNoise)).toFixed(3),
    vignette: +Math.max(0, (centre - corners) / Math.max(1, centre)).toFixed(3),
    border: borderPal[0]?.hex ?? null,
    palette: pal,
  };
}

export const hueName = (h) => {
  const [L, a, b] = toLab(h);
  const C = Math.hypot(a, b);
  if (C < 8) return L > 85 ? 'white' : L < 18 ? 'black' : 'grey';
  const ang = (Math.atan2(b, a) * 180 / Math.PI + 360) % 360;
  const names = [[20, 'pink-red'], [50, 'red-orange'], [75, 'orange'], [100, 'yellow'], [140, 'yellow-green'], [180, 'green'], [220, 'teal'], [260, 'cyan-blue'], [300, 'blue'], [330, 'purple'], [360, 'magenta']];
  return names.find(([lim]) => ang < lim)[1];
};
export {hex};
