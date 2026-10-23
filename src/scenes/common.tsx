import React from 'react';
import {overlap} from '../core/captions.mjs';
import {syncTokens} from '../core/timeline.mjs';
import {useLayout, useReel, type Scene} from '../reel/context';
import {enter, idle} from '../ui/anim';
import {parseEmphasis} from '../ui/Text';

export type SceneProps = {scene: Scene; f: number; dur: number};

const TEXT_SCENES = new Set(['title', 'statement', 'quote', 'cta']);
export function captionsOffFor(scene: Scene) {
  if (scene.captions === true) return false;
  if (scene.captions === false) return true;
  if (!TEXT_SCENES.has(scene.type)) return false;
  const p = scene.props ?? {};
  return overlap([p.text, p.kicker, p.sub, p.quote].filter(Boolean).join(' '), scene.words) >= 0.5;
}

// Frame (relative to the scene) when a text scene's first spoken word lands on screen. Captions stay
// on until then, so a title whose words come late in the line never leaves the screen wordless.
export function firstTextFrame(scene: Scene, fps: number) {
  if (scene.index === 0) return 0; // the hook is fully on screen in frame one
  const p = scene.props ?? {};
  const text = p.text ?? p.quote;
  if (!text) return 0;
  const frames = syncTokens(parseEmphasis(String(text)).map((t) => t.text), scene.words, scene.start, fps, 0.05);
  const first = frames.find((x) => typeof x === 'number');
  return typeof first === 'number' ? Math.max(0, first) : 0;
}

// Everything a scene usually needs, in one call.
export function useKit(scene: Scene, f: number) {
  const r = useReel();
  const {style, fps} = r;
  const capOn = !captionsOffFor(scene) && r.captions !== false;
  const L = useLayout(capOn);
  const m = style.motion;
  const float = (seed = 0, amt = 1) => {
    const i = idle(f, fps, style.motion.idle * amt, seed);
    return `translate(${i.x}px, ${i.y}px) rotate(${i.r}deg)`;
  };
  // Entrance CSS at frame `at`; pass `floatSeed` to keep a gentle idle drift once it has landed.
  const en = (at: number, kind?: string, floatSeed?: number) => {
    const c: any = enter(f, at, m, fps, kind);
    delete c.clip;
    if (floatSeed !== undefined) c.transform = `${float(floatSeed)} ${c.transform ?? ''}`;
    return c as React.CSSProperties;
  };
  return {...r, style, P: style.palette, fps, L, m, en, float, t: f / fps, id: scene.id, p: (scene.props ?? {}) as Record<string, any>};
}

// For on-screen text that repeats the narration: the frame each word should appear.
export function wordFramesFor(text: string, scene: Scene, fps: number) {
  const toks = parseEmphasis(text).map((t) => t.text);
  const frames = syncTokens(toks, scene.words, scene.start, fps, 0.05);
  // Words that are not spoken (or not found) appear with their neighbours.
  let last = 0;
  return frames.map((fr) => {
    if (fr === null) return last;
    last = fr;
    return fr;
  });
}

export const Center: React.FC<{L: ReturnType<typeof useLayout>; children: React.ReactNode; gap?: number; style?: React.CSSProperties}> = ({L, children, gap = 40, style}) => (
  <div style={{position: 'absolute', left: L.x0, top: L.y0, width: L.w, height: L.h, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap, ...style}}>{children}</div>
);

export const fmt = (v: number, decimals = 0) => v.toLocaleString('en-US', {minimumFractionDigits: decimals, maximumFractionDigits: decimals});
