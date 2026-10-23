// Small color toolkit: parsing, mixing, WCAG contrast and CIELAB distance.

export function parse(c) {
  if (Array.isArray(c)) return {r: c[0], g: c[1], b: c[2], a: c[3] ?? 1};
  const s = String(c).trim();
  let m = s.match(/^#([0-9a-f]{3,8})$/i);
  if (m) {
    let h = m[1];
    if (h.length === 3 || h.length === 4) h = h.split('').map((x) => x + x).join('');
    const n = parseInt(h.slice(0, 6), 16);
    return {r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255, a: h.length === 8 ? parseInt(h.slice(6), 16) / 255 : 1};
  }
  m = s.match(/^rgba?\(([^)]+)\)$/i);
  if (m) {
    const p = m[1].split(/[\s,/]+/).filter(Boolean).map(Number);
    return {r: p[0], g: p[1], b: p[2], a: p[3] ?? 1};
  }
  throw new Error(`Unknown color: ${c}`);
}

const h2 = (v) => Math.round(Math.max(0, Math.min(255, v))).toString(16).padStart(2, '0');
export const hex = (c) => { const {r, g, b} = parse(c); return `#${h2(r)}${h2(g)}${h2(b)}`.toUpperCase(); };
export const rgba = (c, a) => { const {r, g, b} = parse(c); return `rgba(${Math.round(r)},${Math.round(g)},${Math.round(b)},${+a.toFixed(3)})`; };
export const mix = (a, b, t) => { const A = parse(a), B = parse(b); return hex([A.r + (B.r - A.r) * t, A.g + (B.g - A.g) * t, A.b + (B.b - A.b) * t]); };

const lin = (v) => { v /= 255; return v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; };
export const luminance = (c) => { const {r, g, b} = parse(c); return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b); };
export const contrast = (a, b) => { const x = luminance(a), y = luminance(b); return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05); };
export const isDark = (c) => luminance(c) < 0.18;

export function toLab(c) {
  const {r, g, b} = parse(c);
  let X = lin(r) * 0.4124 + lin(g) * 0.3576 + lin(b) * 0.1805;
  let Y = lin(r) * 0.2126 + lin(g) * 0.7152 + lin(b) * 0.0722;
  let Z = lin(r) * 0.0193 + lin(g) * 0.1192 + lin(b) * 0.9505;
  X /= 0.95047; Z /= 1.08883;
  const f = (t) => (t > 0.008856 ? Math.cbrt(t) : 7.787 * t + 16 / 116);
  const fx = f(X), fy = f(Y), fz = f(Z);
  return [116 * fy - 16, 500 * (fx - fy), 200 * (fy - fz)];
}
export function fromLab([L, A, B]) {
  const fy = (L + 16) / 116, fx = A / 500 + fy, fz = fy - B / 200;
  const inv = (t) => (t ** 3 > 0.008856 ? t ** 3 : (t - 16 / 116) / 7.787);
  const X = inv(fx) * 0.95047, Y = inv(fy), Z = inv(fz) * 1.08883;
  const r = X * 3.2406 + Y * -1.5372 + Z * -0.4986, g = X * -0.9689 + Y * 1.8758 + Z * 0.0415, b = X * 0.0557 + Y * -0.204 + Z * 1.057;
  const gam = (v) => 255 * (v <= 0.0031308 ? 12.92 * v : 1.055 * v ** (1 / 2.4) - 0.055);
  return hex([gam(r), gam(g), gam(b)]);
}
export const deltaELab = (x, y) => Math.hypot(x[0] - y[0], x[1] - y[1], x[2] - y[2]);
export const deltaE = (a, b) => deltaELab(toLab(a), toLab(b));
export const chroma = (c) => { const [, a, b] = toLab(c); return Math.hypot(a, b); };
export const hue = (c) => { const [, a, b] = toLab(c); return (Math.atan2(b, a) * 180 / Math.PI + 360) % 360; };

// Move a color's lightness (CIELAB L, 0..100) by `d`, keeping its hue.
export const shade = (c, d) => { const [L, A, B] = toLab(c); return fromLab([Math.max(0, Math.min(100, L + d)), A, B]); };

// The first candidate with at least `min` contrast against `bg`; otherwise push the best one
// lighter or darker until it passes.
export function readable(bg, candidates, min = 4.5) {
  for (const c of candidates) if (c && contrast(c, bg) >= min) return hex(c);
  let best = candidates.find(Boolean) ?? '#FFFFFF';
  const dir = isDark(bg) ? 1 : -1;
  for (let i = 0; i < 40 && contrast(best, bg) < min; i++) best = shade(best, dir * 3);
  return contrast(best, bg) >= min ? hex(best) : isDark(bg) ? '#FFFFFF' : '#111111';
}
