// Style tokens. A style file only has to name what makes it different; everything else comes from
// BASE, and the missing palette roles are derived from bg / text / accent with contrast guarantees.
import {contrast, hex, isDark, mix, readable, shade} from './color.mjs';

export const ENUMS = {
  'background.kind': ['luminous', 'gradient', 'solid', 'grid', 'dots', 'paper', 'aurora', 'noise', 'image', 'stars'],
  'surface.kind': ['glass', 'solid', 'outline', 'none'],
  'surface.shadow': ['glow', 'soft', 'hard', 'none'],
  'emphasis.kind': ['color', 'marker', 'underline', 'box', 'glow'],
  'icons.kind': ['neon3d', 'glass3d', 'line', 'duotone', 'solid'],
  'motion.enter': ['rise', 'pop', 'slam', 'mask', 'fade', 'blur', 'type'],
  'motion.ease': ['expo', 'back', 'smooth', 'snap', 'spring'],
  'motion.transition': ['cut', 'fade', 'slide', 'zoom', 'whip', 'wipe', 'flash', 'blur'],
  'captions.mode': ['subtitle', 'pop', 'karaoke', 'none'],
  'captions.case': ['upper', 'none'],
  'layout.align': ['center', 'left'],
};

const INTER = {400: 'fonts/Inter-400.ttf', 500: 'fonts/Inter-500.ttf', 600: 'fonts/Inter-600.ttf', 700: 'fonts/Inter-700.ttf', 800: 'fonts/Inter-800.ttf', 900: 'fonts/Inter-900.ttf'};

export const BASE = {
  id: 'base',
  name: 'Base',
  description: '',
  palette: {},
  fonts: {
    display: {family: 'Inter', files: INTER, weight: 800, case: 'none', tracking: -0.02, lineHeight: 1.02},
    body: {family: 'Inter', files: INTER, weight: 500, tracking: 0, lineHeight: 1.25},
    caption: {family: 'Inter', files: INTER, weight: 700, tracking: 0, lineHeight: 1.15},
    mono: {family: 'JetBrains Mono', files: {400: 'fonts/JetBrainsMono-400.ttf', 500: 'fonts/JetBrainsMono-500.ttf', 700: 'fonts/JetBrainsMono-700.ttf'}, weight: 500, lineHeight: 1.3},
  },
  type: {display: 1, body: 1, min: 44},
  background: {kind: 'gradient', intensity: 0.5, angle: 160, motion: 0.4, image: null, grid: 90},
  surface: {kind: 'solid', radius: 24, border: 0, borderColor: null, shadow: 'soft', blur: 0, opacity: 1},
  emphasis: {kind: 'color', color: null},
  icons: {kind: 'line', stroke: 2, color: null},
  motion: {energy: 0.6, enter: 'rise', ease: 'expo', stagger: 0.06, transition: 'fade', transitionFrames: 8, camera: 0.4, idle: 0.4, tilt: 0, lead: 0.12, avgShot: 2.6},
  finish: {bloom: 0, grain: 0.04, vignette: 0.25, chromatic: 0, halftone: 0, scanlines: 0, blur: 0, tint: null, tintAmount: 0},
  captions: {mode: 'pop', position: 0.72, size: 64, font: 'caption', color: null, highlight: null, box: false, boxColor: null, case: 'none', maxWords: 3, stroke: 0, shadow: true},
  layout: {safeTop: 0.11, safeBottom: 0.22, safeSide: 0.075, align: 'center', density: 1},
  sound: {music: 'pulse', musicVolume: 0.14, sfx: 0.8},
  render3d: true,
  art: {do: [], dont: []},
};

const isObj = (v) => v && typeof v === 'object' && !Array.isArray(v);
export function deepMerge(a, b) {
  if (!isObj(a) || !isObj(b)) return b === undefined ? a : b;
  const out = {...a};
  for (const k of Object.keys(b)) out[k] = isObj(a[k]) && isObj(b[k]) ? deepMerge(a[k], b[k]) : b[k] === undefined ? a[k] : b[k];
  return out;
}

// Fill every palette role. Text and muted always read on bg (4.5:1 and 3:1), accent reaches 3:1.
export function derivePalette(p = {}) {
  const bg = hex(p.bg ?? '#0B0D12');
  const dark = isDark(bg);
  const text = readable(bg, [p.text ?? (dark ? '#F5F7FA' : '#121212')], 4.5);
  const accent = readable(bg, [p.accent ?? (dark ? '#4F8CFF' : '#2457E6')], 3);
  const out = {
    bg,
    bg2: hex(p.bg2 ?? shade(bg, dark ? 7 : -5)),
    surface: hex(p.surface ?? mix(bg, text, dark ? 0.07 : 0.035)),
    surface2: hex(p.surface2 ?? mix(bg, text, dark ? 0.13 : 0.08)),
    text,
    // A colour you chose keeps its hue: when it is too faint it is lifted until it reads.
    muted: readable(bg, [p.muted ?? mix(text, bg, 0.38)], 3),
    accent,
    accent2: readable(bg, [p.accent2 ?? shade(accent, dark ? 16 : -14)], 3),
    accent3: hex(p.accent3 ?? mix(accent, text, 0.5)),
    positive: readable(bg, [p.positive ?? (dark ? '#3DDC97' : '#0E8A5F')], 3),
    negative: readable(bg, [p.negative ?? (dark ? '#FF5C7A' : '#C8283F')], 3),
    glow: hex(p.glow ?? accent),
    line: hex(p.line ?? mix(bg, text, dark ? 0.2 : 0.16)),
  };
  return out;
}

// Merge a style file over BASE, derive the palette, clamp numbers and report problems.
export function normalizeStyle(raw = {}) {
  const s = deepMerge(BASE, raw);
  s.palette = derivePalette(raw.palette ?? {});
  // A role that names a different family must also bring its own file (or none, for the tools to fetch).
  const rf = raw.fonts ?? {};
  const role = (base, over) => (!over ? {...base} : over.family && over.family !== base.family ? {...base, files: null, ...over} : {...base, ...over});
  s.fonts = {display: role(BASE.fonts.display, rf.display), body: role(BASE.fonts.body, rf.body), mono: role(BASE.fonts.mono, rf.mono)};
  s.fonts.caption = rf.caption ? role(s.fonts.body, rf.caption) : {...s.fonts.body, weight: Math.max(600, Number(s.fonts.body.weight) || 600)};
  const clamp = (path, lo, hi) => {
    const keys = path.split('.'); let o = s; for (let i = 0; i < keys.length - 1; i++) o = o[keys[i]];
    const k = keys.at(-1); const v = Number(o[k]); o[k] = Number.isFinite(v) ? Math.min(hi, Math.max(lo, v)) : BASE[keys[0]][k];
  };
  [['motion.energy', 0, 1], ['motion.stagger', 0, 0.4], ['motion.transitionFrames', 0, 30], ['motion.camera', 0, 1], ['motion.idle', 0, 1], ['motion.tilt', 0, 1], ['motion.lead', 0, 0.4],
    ['finish.bloom', 0, 1.5], ['finish.grain', 0, 0.4], ['finish.vignette', 0, 1], ['finish.chromatic', 0, 1], ['finish.halftone', 0, 1], ['finish.scanlines', 0, 1], ['finish.blur', 0, 4], ['finish.tintAmount', 0, 1],
    ['captions.position', 0.3, 0.86], ['captions.size', 28, 140], ['captions.maxWords', 1, 9], ['captions.stroke', 0, 12],
    ['layout.safeTop', 0, 0.3], ['layout.safeBottom', 0, 0.35], ['layout.safeSide', 0.02, 0.2], ['layout.density', 0.6, 1.6],
    ['surface.radius', 0, 80], ['surface.border', 0, 8], ['surface.blur', 0, 40], ['surface.opacity', 0, 1],
    ['type.display', 0.6, 1.6], ['type.body', 0.6, 1.6], ['type.min', 24, 80],
    ['sound.musicVolume', 0, 1], ['sound.sfx', 0, 1.5], ['icons.stroke', 0.5, 4], ['background.intensity', 0, 1], ['background.motion', 0, 1]].forEach((a) => clamp(...a));
  return s;
}

export function validateStyle(raw) {
  const problems = [];
  const s = normalizeStyle(raw);
  for (const [path, allowed] of Object.entries(ENUMS)) {
    const [a, b] = path.split('.');
    const v = s[a]?.[b];
    if (v !== undefined && v !== null && !allowed.includes(v)) problems.push(`${path} = "${v}" (use one of: ${allowed.join(', ')})`);
  }
  if (!raw?.palette?.bg) problems.push('palette.bg is missing (the background color)');
  if (!raw?.palette?.accent) problems.push('palette.accent is missing (the highlight color)');
  const p = s.palette;
  if (raw?.palette?.text && contrast(raw.palette.text, p.bg) < 4.5) problems.push(`palette.text ${raw.palette.text} only reaches ${contrast(raw.palette.text, p.bg).toFixed(2)}:1 on bg; using ${p.text}`);
  if (raw?.palette?.accent && contrast(raw.palette.accent, p.bg) < 3) problems.push(`palette.accent ${raw.palette.accent} only reaches ${contrast(raw.palette.accent, p.bg).toFixed(2)}:1 on bg; using ${p.accent} for text`);
  return {style: s, problems};
}

// Size helper: style sizes are authored for a 1080-wide frame.
export const px = (v, width = 1080) => (v * width) / 1080;
