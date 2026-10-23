import React from 'react';
import {useCurrentFrame} from 'remotion';
import {isDark, rgba} from '../core/color.mjs';
import {useReel} from '../reel/context';
import {audit} from './audit';
import {enter, prog} from './anim';

type Tok = {text: string; emph: boolean};

// "*Buy* now" -> [{Buy, emph}, {now}]. Asterisks may wrap several words.
export function parseEmphasis(text: string, emphasis: string[] = []): Tok[] {
  const out: Tok[] = [];
  let on = false;
  const marked = new Set(emphasis.map((e) => e.toLowerCase()));
  for (const raw of String(text).split(/\s+/).filter(Boolean)) {
    let w = raw;
    let startOn = on;
    if (w.startsWith('*')) { w = w.replace(/^\*+/, ''); startOn = true; on = true; }
    let endOff = false;
    if (/\*+[.,!?:;'")]*$/.test(w)) { w = w.replace(/\*+(?=[.,!?:;'")]*$)/, ''); endOff = true; }
    const clean = w.replace(/[.,!?:;'")]+$/, '').toLowerCase();
    out.push({text: w, emph: startOn || marked.has(clean)});
    if (endOff) on = false;
  }
  return out;
}

let ctx: CanvasRenderingContext2D | null = null;
const measurer = () => (ctx ??= document.createElement('canvas').getContext('2d')!);

export type FontRole = 'display' | 'body' | 'caption' | 'mono';
export function fontOf(style: any, role: FontRole, weight?: number | string) {
  const f = style.fonts[role] ?? style.fonts.body;
  return {family: f.family, weight: weight ?? f.weight ?? 400, upper: f.case === 'upper', tracking: f.tracking ?? 0, lineHeight: f.lineHeight ?? 1.15};
}

const cache = new Map<string, {size: number; lines: Tok[][]; ok: boolean}>();

// Largest size (<= max) at which the words wrap into <= maxLines lines no wider than `width`.
export function fitText(toks: Tok[], o: {family: string; weight: number | string; width: number; maxLines: number; max: number; min: number; tracking: number; upper: boolean; height?: number; lineHeight: number}) {
  const key = JSON.stringify([toks, o]);
  const hit = cache.get(key);
  if (hit) return hit;
  const g = measurer();
  const wrap = (size: number) => {
    g.font = `${o.weight} ${size}px "${o.family}"`;
    (g as any).letterSpacing = `${o.tracking * size}px`;
    const space = g.measureText(' ').width;
    const lines: Tok[][] = [];
    let line: Tok[] = [], lw = 0, widest = 0;
    for (const t of toks) {
      const w = g.measureText(o.upper ? t.text.toUpperCase() : t.text).width;
      widest = Math.max(widest, w);
      if (line.length && lw + space + w > o.width) { lines.push(line); line = [t]; lw = w; }
      else { lw += (line.length ? space : 0) + w; line.push(t); }
    }
    if (line.length) lines.push(line);
    const fits = lines.length <= o.maxLines && widest <= o.width && (!o.height || lines.length * size * o.lineHeight <= o.height);
    return {lines, fits};
  };
  let lo = o.min, hi = o.max, best: {size: number; lines: Tok[][]} | null = null;
  const top = wrap(hi);
  if (top.fits) best = {size: hi, lines: top.lines};
  else {
    for (let i = 0; i < 14; i++) {
      const mid = (lo + hi) / 2;
      const r = wrap(mid);
      if (r.fits) { best = {size: mid, lines: r.lines}; lo = mid; } else hi = mid;
    }
  }
  let res = best ? {...best, size: Math.floor(best.size), ok: true} : {size: o.min, lines: wrap(o.min).lines, ok: false};
  // Balance the lines (like CSS text-wrap: balance): the narrowest width that keeps the same number
  // of lines spreads the words evenly and avoids a lonely last word.
  if (res.ok && res.lines.length >= 2) {
    const n = res.lines.length, full = o.width;
    let lo2 = full * 0.45, hi2 = full;
    for (let i = 0; i < 12; i++) {
      const mid = (lo2 + hi2) / 2;
      o.width = mid;
      const r = wrap(res.size);
      if (r.lines.length <= n && r.fits) hi2 = mid; else lo2 = mid;
    }
    o.width = hi2;
    const r = wrap(res.size);
    o.width = full;
    if (r.lines.length === n) res = {...res, lines: r.lines};
  }
  cache.set(key, res);
  return res;
}

export type TextProps = {
  text: string;
  role?: FontRole;
  width: number;
  height?: number;
  maxLines?: number;
  max?: number;
  min?: number;
  weight?: number | string;
  color?: string;
  emphColor?: string;
  emphasis?: string[];
  align?: 'center' | 'left' | 'right';
  upper?: boolean;
  wordFrames?: (number | null)[]; // per word: local frame it appears (word-synced reveal)
  f?: number; // local frame for wordFrames
  appearAt?: number; // whole block appears at this frame (when no wordFrames)
  enterKind?: string;
  scene?: string;
  shadow?: boolean;
  glow?: number;
  style?: React.CSSProperties;
};

// Fitted, wrapped text with style-driven emphasis and optional word-by-word reveal.
export const Text: React.FC<TextProps> = (p) => {
  const {style, fps} = useReel();
  const frame = useCurrentFrame();
  const f = p.f ?? frame;
  const role = p.role ?? 'display';
  const font = fontOf(style, role, p.weight);
  const upper = p.upper ?? font.upper;
  const min = p.min ?? style.type.min;
  const toks = parseEmphasis(p.text, p.emphasis);
  const fit = fitText(toks, {family: font.family, weight: font.weight, width: p.width, maxLines: p.maxLines ?? 3, max: p.max ?? 150, min, tracking: font.tracking, upper, height: p.height, lineHeight: font.lineHeight});
  if (!fit.ok) audit('text-too-long', p.scene, {text: p.text, width: p.width, maxLines: p.maxLines ?? 3, minSize: min});
  const color = p.color ?? style.palette.text;
  const emph = p.emphColor ?? style.emphasis.color ?? style.palette.accent;
  const kind = style.emphasis.kind;
  const glowAmt = (p.glow ?? (role === 'display' ? 0.35 : 0)) * style.finish.bloom;
  let wi = 0;
  return (
    <div style={{fontFamily: `"${font.family}"`, fontWeight: font.weight as any, fontSize: fit.size, lineHeight: font.lineHeight, letterSpacing: `${font.tracking}em`, textTransform: upper ? 'uppercase' : 'none', color, textAlign: p.align ?? 'center', width: p.width, ...p.style}}>
      {fit.lines.map((line, li) => (
        <div key={li} style={{whiteSpace: 'nowrap'}}>
          {line.map((t, ti) => {
            const idx = wi++;
            const at = p.wordFrames ? p.wordFrames[idx] : null;
            const appear = p.wordFrames ? (at ?? p.appearAt ?? 0) : p.appearAt;
            const css: React.CSSProperties = appear !== undefined && appear !== null ? (enter(f, appear, style.motion, fps, p.enterKind) as any) : {};
            const clip = (css as any).clip;
            delete (css as any).clip;
            const e = t.emph;
            const ep = appear !== undefined && appear !== null ? prog(f, appear + 4, 10, 'expo') : 1;
            const wordStyle: React.CSSProperties = {
              display: 'inline-block',
              position: 'relative',
              isolation: 'isolate',
              color: e && (kind === 'color' || kind === 'glow' || kind === 'underline') ? emph : e && kind === 'box' ? style.palette.bg : color,
              textShadow: [p.shadow ? (isDark(style.palette.bg) ? `0 4px 24px ${rgba('#000000', 0.45)}` : `0 2px 10px ${rgba('#000000', 0.08)}`) : '', glowAmt > 0 || (e && kind === 'glow') ? `0 0 ${18 + 30 * style.finish.bloom}px ${rgba(e ? emph : color, Math.min(0.85, glowAmt + (e ? 0.45 : 0)))}` : ''].filter(Boolean).join(', ') || undefined,
              ...css,
            };
            const word = (
              <span style={wordStyle}>
                {e && kind === 'marker' && <span style={{position: 'absolute', left: '-0.08em', right: '-0.08em', top: '0.18em', bottom: '0.06em', background: rgba(emph, 0.85), transformOrigin: 'left', transform: `scaleX(${ep})`, zIndex: -1, borderRadius: '0.08em'}} />}
                {e && kind === 'box' && <span style={{position: 'absolute', left: '-0.12em', right: '-0.12em', top: '0.04em', bottom: '-0.02em', background: emph, transform: `scale(${0.6 + 0.4 * ep})`, opacity: ep, zIndex: -1, borderRadius: Math.min(16, style.surface.radius * 0.4)}} />}
                {e && kind === 'underline' && <span style={{position: 'absolute', left: 0, right: 0, bottom: '0.02em', height: '0.09em', background: emph, transformOrigin: 'left', transform: `scaleX(${ep})`, borderRadius: 4}} />}
                <span style={{position: 'relative'}}>{t.text}</span>
              </span>
            );
            return (
              <React.Fragment key={ti}>
                {ti > 0 && ' '}
                {clip ? <span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', paddingBottom: '0.08em'}}>{word}</span> : word}
              </React.Fragment>
            );
          })}
        </div>
      ))}
    </div>
  );
};
