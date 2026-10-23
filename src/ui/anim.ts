import {Easing, interpolate, spring} from 'remotion';

export const clamp01 = (x: number) => Math.max(0, Math.min(1, x));
const CL = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;

export const EASE: Record<string, (t: number) => number> = {
  expo: Easing.bezier(0.16, 1, 0.3, 1),
  back: Easing.bezier(0.34, 1.56, 0.64, 1),
  smooth: Easing.bezier(0.45, 0, 0.55, 1),
  snap: Easing.bezier(0.85, 0, 0.15, 1),
  out: Easing.bezier(0.2, 0.8, 0.2, 1),
  in: Easing.bezier(0.5, 0, 0.75, 0),
  linear: (t) => t,
};

// 0 -> 1 between frame `at` and `at + dur`.
export const prog = (f: number, at: number, dur: number, ease: keyof typeof EASE | ((t: number) => number) = 'expo') => {
  const e = typeof ease === 'function' ? ease : EASE[ease] ?? EASE.expo;
  return interpolate(f, [at, at + Math.max(1, dur)], [0, 1], {...CL, easing: e});
};
export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
export const pop = (f: number, at: number, fps: number, damping = 13) =>
  spring({frame: f - at, fps, config: {damping, stiffness: 170, mass: 0.75}});

// Entrance length in frames: livelier styles enter faster.
export const enterDur = (energy: number) => Math.round(22 - 12 * clamp01(energy));

export type Motion = {energy: number; enter: string; ease: string; stagger: number; idle: number; camera: number};

// CSS for an element entering at frame `at`, following the style's entrance.
export function enter(f: number, at: number, m: Motion, fps: number, kind?: string) {
  const k = kind ?? m.enter;
  const d = enterDur(m.energy);
  const ease = (m.ease in EASE ? m.ease : 'expo') as keyof typeof EASE;
  const p = m.ease === 'spring' ? clamp01(pop(f, at, fps, 15)) : prog(f, at, d, ease);
  const o = prog(f, at, Math.max(4, d * 0.6), 'out');
  switch (k) {
    case 'pop': {
      const s = m.ease === 'spring' ? pop(f, at, fps, 11) : lerp(0.55, 1, prog(f, at, d, 'back'));
      return {opacity: o, transform: `scale(${s})`};
    }
    case 'slam': {
      const q = prog(f, at, Math.max(5, d * 0.45), 'out');
      const shake = f >= at + d * 0.45 && f < at + d * 0.45 + 6 ? Math.sin((f - at) * 2.6) * 6 * (1 - (f - at - d * 0.45) / 6) : 0;
      return {opacity: clamp01(q * 2), transform: `translate(${shake}px, ${shake * 0.4}px) scale(${lerp(1.6, 1, q)})`};
    }
    case 'mask':
      return {opacity: o > 0 ? 1 : 0, transform: `translateY(${lerp(110, 0, p)}%)`, clip: true};
    case 'fade':
      return {opacity: prog(f, at, d, 'smooth')};
    case 'blur':
      return {opacity: o, transform: `scale(${lerp(1.08, 1, p)})`, filter: `blur(${lerp(18, 0, p)}px)`};
    case 'type':
      return {opacity: o};
    case 'rise':
    default:
      return {opacity: o, transform: `translateY(${lerp(34 + 30 * m.energy, 0, p)}px)`, filter: p < 1 ? `blur(${lerp(7, 0, p)}px)` : undefined};
  }
}

// Gentle continuous motion so a held layout never freezes.
export const idle = (f: number, fps: number, amount: number, seed = 0) => {
  const t = f / fps;
  return {
    y: Math.sin(t * 1.3 + seed * 1.7) * 7 * amount,
    x: Math.cos(t * 0.9 + seed * 2.3) * 4 * amount,
    r: Math.sin(t * 0.7 + seed) * 0.6 * amount,
  };
};

// Frames at which a list of items appears (shared with the mixer, see core/beats.mjs).
export {staggerFrames} from '../core/beats.mjs';
