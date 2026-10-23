import React from 'react';
import {rgba} from '../core/color.mjs';
import {prog} from '../ui/anim';
import {beats} from '../core/beats.mjs';
import {Icon} from '../ui/Icon';
import {Panel} from '../ui/Panel';
import {Text} from '../ui/Text';
import {useKit, type SceneProps} from './common';

// A process: nodes connected by paths; each node lights up as the narration reaches it while a
// light travels along the path into it.
export const Flow: React.FC<SceneProps> = ({scene, f, dur}) => {
  const k = useKit(scene, f);
  const {p, L, P, style, fps} = k;
  const nodes: any[] = (p.nodes ?? p.steps ?? []).map((n: any) => (typeof n === 'string' ? {label: n} : n));
  const n = nodes.length;
  const layout: string = p.layout ?? (n <= 4 ? 'vertical' : 'loop');
  const at = beats.flow(p, dur, fps);
  const titleH = p.title ? 140 : 0;
  const top = L.y0 + titleH, h = L.h - titleH;
  const cx = L.cx;
  // Node centres and size per layout.
  let pos: {x: number; y: number}[] = [];
  let nw = L.w * 0.92, nh = Math.min(210, (h - 70 * (n - 1)) / Math.max(1, n));
  if (layout === 'horizontal') {
    nw = Math.min(320, (L.w - 36 * (n - 1)) / n); nh = 330;
    // Spread across the full width: the gap between nodes is part of the story (distance, steps).
    pos = nodes.map((_, i) => ({x: n === 1 ? L.cx : L.x0 + nw / 2 + (i * (L.w - nw)) / (n - 1), y: top + h / 2}));
  } else if (layout === 'loop' || layout === 'hub') {
    const R = Math.min(L.w, h) * 0.36;
    nw = Math.min(300, R * 1.05); nh = 210;
    const ring = layout === 'hub' ? nodes.slice(1) : nodes;
    pos = ring.map((_, i) => {
      const a = -Math.PI / 2 + (i / ring.length) * Math.PI * 2;
      return {x: cx + Math.cos(a) * R, y: top + h / 2 + Math.sin(a) * R * 1.05};
    });
    if (layout === 'hub') pos = [{x: cx, y: top + h / 2}, ...pos];
  } else {
    const gap = (h - nh * n) / Math.max(1, n - 1);
    pos = nodes.map((_, i) => ({x: cx, y: top + nh / 2 + i * (nh + Math.min(gap, 90)) + Math.max(0, (h - (nh * n + Math.min(gap, 90) * (n - 1))) / 2)}));
  }
  const edges: [number, number][] = p.edges ?? (layout === 'hub' ? nodes.slice(1).map((_, i) => [0, i + 1]) : layout === 'loop' ? nodes.map((_, i) => [i, (i + 1) % n]) : nodes.slice(1).map((_, i) => [i, i + 1]));
  const active = at.reduce((a, fr, i) => (f >= fr ? i : a), -1);
  const glow = style.finish.bloom;
  return (
    <div style={{position: 'absolute', inset: 0}}>
      {p.title && <div style={{position: 'absolute', left: L.x0, top: L.y0, width: L.w, ...k.en(-3, 'fade')}}><Text text={p.title} role="display" width={L.w} maxLines={2} max={86 * style.type.display} min={48} f={f} scene={k.id} /></div>}
      <svg width={k.W} height={k.H} style={{position: 'absolute', inset: 0, overflow: 'visible'}}>
        {edges.map(([a, b], i) => {
          const A = pos[a], B = pos[b];
          if (!A || !B) return null;
          // The light leaves when the first node is lit and arrives exactly as the next one is said.
          const start = Math.min(at[a] + 4, at[b] - 6);
          const dp = prog(f, start, Math.max(6, at[b] - start), at[b] - start > 40 ? 'linear' : 'smooth');
          const dx = B.x - A.x, dy = B.y - A.y, d = Math.hypot(dx, dy) || 1;
          const ux = dx / d, uy = dy / d;
          const trimA = layout === 'horizontal' ? nw / 2 + 6 : layout === 'vertical' ? nh / 2 + 6 : 90;
          const trimB = trimA + 10;
          const x1 = A.x + ux * trimA, y1 = A.y + uy * trimA, x2 = B.x - ux * trimB, y2 = B.y - uy * trimB;
          const px = x1 + (x2 - x1) * dp, py = y1 + (y2 - y1) * dp;
          const lit = f >= at[b];
          return (
            <g key={i}>
              <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={rgba(P.line, 0.9)} strokeWidth={5} strokeLinecap="round" />
              <line x1={x1} y1={y1} x2={px} y2={py} stroke={lit ? P.accent : P.accent2} strokeWidth={6} strokeLinecap="round" style={{filter: glow ? `drop-shadow(0 0 ${8 * glow}px ${rgba(P.accent2, 0.8)})` : undefined}} />
              {dp > 0 && dp < 1 && p.packet !== false && <circle cx={px} cy={py} r={13} fill={P.accent2} style={{filter: `drop-shadow(0 0 ${10 + 14 * glow}px ${P.accent2})`}} />}
              {dp >= 1 && <polygon points={`${x2 + ux * 16},${y2 + uy * 16} ${x2 - uy * 12},${y2 + ux * 12} ${x2 + uy * 12},${y2 - ux * 12}`} fill={lit ? P.accent : P.accent2} />}
              {dp >= 1 && p.packet !== false && [0, 0.5].map((off) => {
                const q = ((k.t * 0.8 + off + i * 0.17) % 1);
                return <circle key={off} cx={x1 + (x2 - x1) * q} cy={y1 + (y2 - y1) * q} r={9} fill={P.accent2} opacity={Math.sin(Math.PI * q)} style={{filter: `drop-shadow(0 0 ${8 + 10 * glow}px ${P.accent2})`}} />;
              })}
            </g>
          );
        })}
      </svg>
      {nodes.map((nd, i) => {
        const on = i === active, done = i < active;
        const lit = prog(f, at[i], 10, 'out');
        const P0 = pos[i];
        if (!P0) return null;
        // Every node is on screen from the start as a dim outline, and lights up when it is said.
        const e = k.en(at[i] - 6, 'pop', i + 11);
        const ghost = 0.24 * prog(f, -6, 12, 'out');
        const shown = Math.max(ghost, e.opacity as number);
        return (
          <div key={i} style={{position: 'absolute', left: P0.x - nw / 2, top: P0.y - nh / 2, width: nw, height: nh, ...e, transform: f < at[i] - 6 ? undefined : e.transform, filter: f < at[i] - 6 ? 'grayscale(1)' : e.filter, opacity: shown * (done ? 0.7 : 1)}}>
            <Panel active={on ? lit : done ? 0.25 : 0} pad={0} style={{width: '100%', height: '100%', display: 'flex', flexDirection: layout === 'vertical' ? 'row' : 'column', alignItems: 'center', justifyContent: 'center', gap: layout === 'vertical' ? 28 : 14, padding: 18}}>
              {nd.icon && <Icon name={nd.icon} size={layout === 'vertical' ? Math.min(104, nh * 0.52) : 92} color={on || done ? P.accent : undefined} draw={prog(f, at[i] - 4, 16, 'out')} scene={k.id} />}
              <Text text={nd.label} role="body" width={layout === 'vertical' ? nw - (nd.icon ? 170 : 60) : nw - 30} maxLines={2} max={layout === 'vertical' ? 66 : 46} min={layout === 'vertical' ? 44 : 34} weight={700} align={layout === 'vertical' && nd.icon ? 'left' : 'center'} f={f} scene={k.id} />
            </Panel>
          </div>
        );
      })}
    </div>
  );
};

// Dates on a line; each event arrives on its cue and the progress line follows.
export const Timeline: React.FC<SceneProps> = ({scene, f, dur}) => {
  const k = useKit(scene, f);
  const {p, L, P, style, fps} = k;
  const events: any[] = p.events ?? [];
  const n = Math.max(1, events.length);
  const at = beats.timeline(p, dur, fps);
  const titleH = p.title ? 140 : 0;
  const top = L.y0 + titleH + 20, h = L.h - titleH - 40;
  const step = h / n;
  const lineX = L.x0 + 70;
  const active = at.reduce((a, fr, i) => (f >= fr ? i : a), -1);
  const fill = active < 0 ? 0 : (active + prog(f, at[active], 14, 'out') * 0.5) / n;
  const display = style.fonts.display;
  return (
    <div style={{position: 'absolute', inset: 0}}>
      {p.title && <div style={{position: 'absolute', left: L.x0, top: L.y0, width: L.w, ...k.en(-3, 'fade')}}><Text text={p.title} role="display" width={L.w} maxLines={2} max={86 * style.type.display} min={48} f={f} scene={k.id} /></div>}
      <div style={{position: 'absolute', left: lineX - 3, top, width: 6, height: h, background: rgba(P.line, 0.9), borderRadius: 3}} />
      <div style={{position: 'absolute', left: lineX - 3, top, width: 6, height: h * fill, background: P.accent, borderRadius: 3, boxShadow: style.finish.bloom ? `0 0 18px ${rgba(P.accent, 0.7)}` : undefined}} />
      {fill > 0.02 && <div style={{position: 'absolute', left: lineX - 9, top: top + ((k.t * 0.5) % 1) * h * fill - 9, width: 18, height: 18, borderRadius: 9, background: '#FFFFFF', opacity: 0.85, boxShadow: `0 0 18px ${P.accent}`}} />}
      {events.map((ev, i) => {
        const y = top + step * i + step / 2;
        const on = i === active;
        const e = k.en(at[i], undefined, i + 3);
        const ghost = 0.22 * prog(f, -6, 12, 'out'); // later dates wait as dim outlines
        const before = f < at[i];
        return (
          <div key={i} style={{position: 'absolute', left: lineX - 22, top: y - 22, display: 'flex', alignItems: 'center', gap: 40, ...e, transform: before ? undefined : e.transform, filter: before ? 'grayscale(1)' : e.filter, opacity: Math.max(ghost, e.opacity as number) * (i < active ? 0.6 : 1)}}>
            <div style={{width: 44, height: 44, borderRadius: 22, background: on || i < active ? P.accent : P.bg, border: `5px solid ${P.accent}`, boxShadow: on ? `0 0 ${18 + 14 * Math.sin(k.t * 4)}px ${P.accent}` : undefined, flex: 'none', transform: on ? `scale(${1 + 0.12 * Math.sin(k.t * 4)})` : undefined}} />
            <div>
              <div style={{fontFamily: `"${display.family}"`, fontWeight: display.weight as any, fontSize: Math.min(118, step * 0.44), color: on ? P.accent : P.text, lineHeight: 1, textTransform: display.case === 'upper' ? 'uppercase' : 'none'}}>{ev.date}</div>
              <Text text={ev.label} role="body" width={L.w - 170} maxLines={2} max={Math.min(58, step * 0.26)} min={40} align="left" color={P.muted} f={f} scene={k.id} />
            </div>
          </div>
        );
      })}
    </div>
  );
};
