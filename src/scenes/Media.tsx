import React from 'react';
import {Img} from 'remotion';
import {rgba} from '../core/color.mjs';
import {asset} from '../reel/context';
import {EASE, prog} from '../ui/anim';
import {beats} from '../core/beats.mjs';
import {audit} from '../ui/audit';
import {Icon} from '../ui/Icon';
import {Icon3D} from '../ui/Icon3D';
import {Panel, Pill} from '../ui/Panel';
import {Text, fontOf} from '../ui/Text';
import {Center, useKit, wordFramesFor, type SceneProps} from './common';

// A quotation with its source; the words reveal as they are read.
export const Quote: React.FC<SceneProps> = ({scene, f, dur}) => {
  const k = useKit(scene, f);
  const {p, L, P, style, fps} = k;
  const text = String(p.text ?? p.quote ?? '');
  const frames = wordFramesFor(text, scene, fps);
  const last = Math.max(0, ...frames);
  const display = fontOf(style, 'display');
  return (
    <Center L={L} gap={30} style={{alignItems: 'flex-start'}}>
      <div style={{fontFamily: `"${display.family}"`, fontWeight: 900, fontSize: 300, lineHeight: 0.6, height: 140, color: P.accent, opacity: 0.85 * prog(f, -4, 10, 'out'), textShadow: style.finish.bloom ? `0 0 40px ${rgba(P.accent, 0.5)}` : undefined}}>“</div>
      <Text text={text} role={p.font === 'display' ? 'display' : 'body'} width={L.w} maxLines={7} max={96} min={48} weight={p.font === 'display' ? undefined : 600} align="left" wordFrames={frames} f={f} scene={k.id} emphasis={p.emphasis} />
      {(p.by || p.role) && (
        <div style={{display: 'flex', alignItems: 'center', gap: 22, ...k.en(Math.min(last + 4, dur * 0.7), 'rise')}}>
          {p.image && <Img src={asset(p.image)} style={{width: 96, height: 96, borderRadius: 48, objectFit: 'cover', border: `3px solid ${P.accent}`}} />}
          <div>
            {p.by && <div style={{fontFamily: `"${style.fonts.body.family}"`, fontWeight: 800, fontSize: 44, color: P.text}}>{p.by}</div>}
            {p.role && <div style={{fontFamily: `"${style.fonts.body.family}"`, fontWeight: 500, fontSize: 32, color: P.muted}}>{p.role}</div>}
          </div>
        </div>
      )}
    </Center>
  );
};

// A photo, screenshot or generated image with a slow camera move, optional frame and callouts.
export const ImageScene: React.FC<SceneProps> = ({scene, f, dur}) => {
  const k = useKit(scene, f);
  const {p, L, P, style, fps} = k;
  if (!p.src) audit('missing-asset', k.id, {prop: 'src'});
  const frame: string = p.frame ?? 'card';
  const motion: string = p.motion ?? 'push';
  const t = Math.min(1, f / Math.max(1, dur));
  const mv = EASE.smooth(t);
  const sc = motion === 'push' ? 1.04 + 0.1 * mv : motion === 'pull' ? 1.16 - 0.1 * mv : motion === 'none' ? 1 : 1.12;
  const tx = motion === 'pan-left' ? 4 - 8 * mv : motion === 'pan-right' ? -4 + 8 * mv : 0;
  const ty = motion === 'pan-up' ? 4 - 8 * mv : motion === 'pan-down' ? -4 + 8 * mv : 0;
  const fx = p.focus?.x ?? 0.5, fy = p.focus?.y ?? 0.5;
  const img = (
    <Img src={asset(p.src)} style={{width: '100%', height: '100%', objectFit: p.fit ?? 'cover', transform: `scale(${sc}) translate(${tx}%, ${ty}%)`, transformOrigin: `${fx * 100}% ${fy * 100}%`}} />
  );
  const callouts: any[] = p.callouts ?? [];
  const cat = beats.callouts(p, dur, fps);
  let box = {x: L.x0, y: L.y0, w: L.w, h: L.h};
  if (frame === 'full') box = {x: 0, y: 0, w: k.W, h: k.H};
  else if (frame === 'phone') { const w = Math.min(L.w * 0.78, (L.h - 40) * 0.49); box = {x: k.W / 2 - w / 2, y: L.cy - w * 1.02, w, h: w * 2.04}; }
  else if (frame === 'browser') { const h = Math.min(L.h * 0.8, L.w * 1.0); box = {x: L.x0, y: L.cy - h / 2, w: L.w, h}; }
  else { const h = Math.min(L.h - (p.caption ? 120 : 0), L.w * (p.aspect ?? 1.25)); box = {x: L.x0, y: L.y0 + (L.h - h - (p.caption ? 120 : 0)) / 2, w: L.w, h}; }
  const radius = frame === 'full' ? 0 : frame === 'phone' ? box.w * 0.14 : style.surface.radius;
  const e = frame === 'full' ? {opacity: prog(f, -6, 10, 'out')} : k.en(-2, 'rise');
  return (
    <div style={{position: 'absolute', inset: 0}}>
      <div style={{position: 'absolute', left: box.x, top: box.y, width: box.w, height: box.h, ...e}}>
        <div style={{position: 'absolute', inset: 0, borderRadius: radius, overflow: 'hidden', background: P.surface, boxShadow: frame === 'full' ? 'none' : `0 30px 80px ${rgba('#000000', 0.45)}`, border: frame === 'phone' ? `${box.w * 0.035}px solid #0d0f14` : frame === 'browser' ? `2px solid ${P.line}` : 'none'}}>
          {frame === 'browser' && <div style={{height: 54, background: P.surface2, display: 'flex', alignItems: 'center', gap: 12, padding: '0 22px'}}>{['#FF5F57', '#FEBC2E', '#28C840'].map((c) => <div key={c} style={{width: 18, height: 18, borderRadius: 9, background: c}} />)}</div>}
          <div style={{position: 'absolute', inset: frame === 'browser' ? '54px 0 0 0' : 0, overflow: 'hidden'}}>{img}</div>
          {frame === 'full' && <div style={{position: 'absolute', inset: 0, background: `linear-gradient(to bottom, ${rgba(P.bg, 0.55)} 0%, transparent 25%, transparent 55%, ${rgba(P.bg, 0.75)} 100%)`}} />}
        </div>
        {callouts.map((c, i) => {
          const cp = prog(f, cat[i], 14, 'back');
          const x = (c.x ?? 0.5) * box.w, y = (c.y ?? 0.5) * box.h;
          const right = x < box.w * 0.55;
          if (x < 0 || y < 0 || x > box.w || y > box.h) audit('callout-outside-image', k.id, {label: c.label});
          return (
            <div key={i} style={{position: 'absolute', left: x, top: y, opacity: Math.min(1, cp * 1.4)}}>
              <div style={{position: 'absolute', left: -38, top: -38, width: 76, height: 76, borderRadius: 38, border: `5px solid ${P.accent}`, transform: `scale(${cp * (1 + 0.08 * Math.sin(k.t * 5))})`, boxShadow: `0 0 24px ${rgba(P.accent, 0.6)}`}} />
              {c.label && (
                <div style={{position: 'absolute', top: -22, [right ? 'left' : 'right']: 60, transform: `scale(${cp})`, transformOrigin: right ? 'left center' : 'right center'} as React.CSSProperties}>
                  <Pill solid size={32}>{c.label}</Pill>
                </div>
              )}
            </div>
          );
        })}
      </div>
      {p.caption && frame !== 'full' && (
        <div style={{position: 'absolute', left: L.x0, width: L.w, top: box.y + box.h + 34, ...k.en(8, 'fade')}}>
          <Text text={p.caption} role="body" width={L.w} maxLines={2} max={58} min={44} weight={650} f={f} scene={k.id} emphasis={p.emphasis} />
        </div>
      )}
      {p.caption && frame === 'full' && (
        <div style={{position: 'absolute', left: L.x0, width: L.w, top: L.y0 + 20, ...k.en(6, 'rise')}}>
          <Text text={p.caption} role="display" width={L.w} maxLines={2} max={110 * style.type.display} min={56} f={f} scene={k.id} emphasis={p.emphasis} shadow />
        </div>
      )}
      {p.credit && <div style={{position: 'absolute', right: L.x0, top: box.y + box.h + (frame === 'full' ? -60 : 8), fontFamily: `"${style.fonts.body.family}"`, fontSize: 22, color: rgba(P.text, 0.6)}}>{p.credit}</div>}
    </div>
  );
};

// One big hero object for the thing being named: a 3D icon in luminous styles, a drawn icon in flat
// ones, with small satellites orbiting it.
export const Hero: React.FC<SceneProps> = ({scene, f, dur}) => {
  const k = useKit(scene, f);
  const {p, L, P, style} = k;
  const three = style.render3d && (style.icons.kind === 'neon3d' || style.icons.kind === 'glass3d');
  const size = Math.min(L.w * 0.86, L.h * (p.label ? 0.6 : 0.78));
  const sats: string[] = p.satellites ?? [];
  const draw = Math.min(1, (f + 10) / 30);
  return (
    <Center L={L} gap={28}>
      <div style={{position: 'relative', width: size, height: size, ...k.en(-4, 'pop', 5)}}>
        <div style={{position: 'absolute', inset: '12%', borderRadius: '50%', background: `radial-gradient(circle, ${rgba(p.color ?? P.glow, 0.22 * (0.4 + style.finish.bloom))}, transparent 70%)`, transform: `scale(${1 + 0.07 * Math.sin(k.t * 2.1)})`}} />
        <svg width={size} height={size} style={{position: 'absolute', inset: 0, overflow: 'visible', opacity: 0.35 + 0.5 * style.motion.idle}}>
          {(() => {
            const rx = size * 0.47, ry = size * 0.16, a = k.t * 1.25;
            const x = size / 2 + Math.cos(a) * rx, y = size * 0.78 + Math.sin(a) * ry;
            return (
              <>
                <ellipse cx={size / 2} cy={size * 0.78} rx={rx} ry={ry} fill="none" stroke={rgba(p.color ?? P.accent2, 0.35)} strokeWidth={2.5} />
                <circle cx={x} cy={y} r={9} fill={p.color ?? P.accent2} style={{filter: `drop-shadow(0 0 12px ${p.color ?? P.accent2})`}} />
              </>
            );
          })()}
        </svg>
        {three ? (
          <Icon3D name={p.icon} size={size} t={k.t} draw={draw} color={p.color} scene={k.id} />
        ) : (
          <div style={{position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', transform: `perspective(1400px) rotateY(${Math.sin(k.t * 0.8) * 10}deg) rotateX(${Math.cos(k.t * 0.6) * 5}deg)`}}>
            <Icon name={p.icon} size={size * 0.62} color={p.color} draw={draw} scene={k.id} stroke={style.icons.stroke * 0.9} />
          </div>
        )}
        {sats.map((s, i) => {
          const a = k.t * 0.6 + (i / sats.length) * Math.PI * 2;
          const x = Math.cos(a) * size * 0.52, y = Math.sin(a) * size * 0.2;
          const depth = (Math.sin(a) + 1) / 2;
          const ap = prog(f, 8 + i * 5, 12, 'back');
          return (
            <div key={i} style={{position: 'absolute', left: size / 2 + x - 50, top: size * 0.5 + y - 50, transform: `scale(${(0.7 + 0.45 * depth) * ap})`, opacity: (0.45 + 0.55 * depth) * ap, zIndex: depth > 0.5 ? 2 : 0}}>
              <Icon name={s} size={64} scene={k.id} badge />
            </div>
          );
        })}
      </div>
      {p.label && <div style={k.en(6, 'rise')}><Text text={p.label} role="display" width={L.w} maxLines={2} max={120 * style.type.display} min={56} f={f} scene={k.id} emphasis={p.emphasis} shadow /></div>}
      {p.sub && <div style={k.en(12, 'fade')}><Text text={p.sub} role="body" width={L.w * 0.9} maxLines={2} max={54} min={44} color={P.muted} f={f} scene={k.id} /></div>}
    </Center>
  );
};

// A field of small figures with some of them lit: "7 in 10", "1 in 4".
export const Grid: React.FC<SceneProps> = ({scene, f, dur}) => {
  const k = useKit(scene, f);
  const {p, L, P, style, fps} = k;
  const total = Math.max(1, Math.min(400, Number(p.total ?? 100)));
  const lit = Math.max(0, Math.min(total, Number(p.highlight ?? 10)));
  const cols = Number(p.cols ?? (total <= 10 ? total : total <= 50 ? 5 : 10));
  const rows = Math.ceil(total / cols);
  const labelH = p.label ? 200 : 0;
  const cell = Math.min(L.w / cols, (L.h - labelH - 40) / rows);
  const hlAt = beats.grid(p, dur, fps);
  const hp = prog(f, hlAt, 14, 'expo');
  const order = p.random ? Array.from({length: total}, (_, i) => i).sort((a, b) => Math.sin(a * 91.7) - Math.sin(b * 91.7)) : Array.from({length: total}, (_, i) => i);
  const litSet = new Set(order.slice(0, lit));
  return (
    <Center L={L} gap={36}>
      <div style={{display: 'grid', gridTemplateColumns: `repeat(${cols}, ${cell}px)`, gridAutoRows: `${cell}px`}}>
        {Array.from({length: total}, (_, i) => {
          const ap = prog(f, Math.floor(i / cols) * 1.2 + (i % cols) * 0.6 - 4, 10, 'out');
          const on = litSet.has(i);
          const c = on ? (p.tone === 'negative' ? P.negative : P.accent) : P.muted;
          return (
            <div key={i} style={{display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: ap * (on ? 1 : 1 - 0.55 * hp), transform: `scale(${ap * (on ? 1 + 0.12 * hp : 1)})`}}>
              <Icon name={p.icon ?? 'user'} size={cell * 0.72} color={on ? (hp > 0 ? c : P.muted) : P.muted} stroke={2.2} scene={k.id} plain />
            </div>
          );
        })}
      </div>
      {p.label && <div style={k.en(hlAt, 'rise')}><Text text={p.label} role="display" width={L.w} maxLines={2} max={110 * style.type.display} min={52} f={f} scene={k.id} emphasis={p.emphasis} /></div>}
    </Center>
  );
};

// Two states side by side or stacked; the second wipes in on its cue.
export const Split: React.FC<SceneProps> = ({scene, f, dur}) => {
  const k = useKit(scene, f);
  const {p, L, P, style, fps} = k;
  const a = p.left ?? p.top ?? p.before ?? {}, b = p.right ?? p.bottom ?? p.after ?? {};
  const wipeAt = beats.split(p, dur, fps);
  const wp = prog(f, wipeAt, 16, 'expo');
  const vertical = p.orientation !== 'horizontal';
  const half = vertical ? (L.h - 30) / 2 : (L.w - 30) / 2;
  const side = (s: any, i: number) => {
    const c = s.tone === 'negative' ? P.negative : s.tone === 'positive' ? P.positive : i === 0 ? P.muted : P.accent;
    return (
      <Panel active={i === 1 ? wp : 0} tone={s.tone === 'negative' ? 'negative' : 'positive'} style={{width: vertical ? L.w : half, height: vertical ? half : Math.min(L.h, 900), display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 22, overflow: 'hidden'}}>
        {s.label && <Pill color={c}>{s.label}</Pill>}
        {s.image && <Img src={asset(s.image)} style={{width: '100%', flex: 1, minHeight: 0, objectFit: 'cover', borderRadius: style.surface.radius * 0.6}} />}
        {s.icon && !s.image && <Icon name={s.icon} size={vertical ? Math.min(150, half * 0.32) : 150} color={c} scene={k.id} />}
        {s.text && <Text text={s.text} role="display" width={(vertical ? L.w : half) - 80} maxLines={2} max={86 * style.type.display} min={44} f={f} scene={k.id} color={i === 0 ? P.muted : P.text} emphasis={s.emphasis} />}
      </Panel>
    );
  };
  return (
    <div style={{position: 'absolute', left: L.x0, top: L.y0, width: L.w, height: L.h, display: 'flex', flexDirection: vertical ? 'column' : 'row', gap: 30, alignItems: 'center', justifyContent: 'center'}}>
      <div style={{...k.en(-2, 'rise'), opacity: (k.en(-2, 'rise').opacity as number) * (1 - 0.35 * wp)}}>{side(a, 0)}</div>
      <div style={{clipPath: vertical ? `inset(0 0 ${(1 - wp) * 100}% 0)` : `inset(0 ${(1 - wp) * 100}% 0 0)`, transform: `translateY(${(1 - wp) * 30}px)`}}>{side(b, 1)}</div>
    </div>
  );
};

// End card: who to follow and why, with a button that gets pressed.
export const CTA: React.FC<SceneProps> = ({scene, f, dur}) => {
  const k = useKit(scene, f);
  const {p, L, P, style, fps} = k;
  const pressAt = beats.press(p, dur, fps);
  const press = prog(f, pressAt, 5, 'out') - prog(f, pressAt + 5, 8, 'out');
  const done = f >= pressAt + 4;
  const handX = 1 - prog(f, pressAt - 16, 16, 'expo');
  const body = fontOf(style, 'body');
  return (
    <Center L={L} gap={36}>
      {p.logo || style.logo ? (
        <div style={k.en(-4, 'pop', 2)}><Img src={asset(p.logo ?? style.logo)} style={{height: 200, maxWidth: L.w * 0.7, objectFit: 'contain'}} /></div>
      ) : p.icon ? (
        <div style={k.en(-4, 'pop', 2)}><Icon name={p.icon} size={120} scene={k.id} badge /></div>
      ) : null}
      <Text text={String(p.text ?? 'Follow for more')} role="display" width={L.w} maxLines={3} max={124 * style.type.display} min={56} f={f} appearAt={0} scene={k.id} emphasis={p.emphasis} shadow glow={0.5} />
      {p.handle && <div style={{fontFamily: `"${body.family}"`, fontWeight: 700, fontSize: 52, color: P.muted, ...k.en(6, 'fade')}}>{p.handle}</div>}
      {p.button !== false && (
        <div style={{position: 'relative', ...k.en(10, 'pop')}}>
          <div style={{fontFamily: `"${body.family}"`, fontWeight: 800, fontSize: 50, padding: '26px 70px', borderRadius: 999, background: done ? 'transparent' : P.accent, color: done ? P.text : P.bg, border: `4px solid ${done ? P.line : P.accent}`, transform: `scale(${1 - 0.08 * press})`, boxShadow: !done && style.finish.bloom ? `0 0 40px ${rgba(P.accent, 0.55)}` : undefined, whiteSpace: 'nowrap'}}>
            {done ? (p.doneText ?? 'Following ✓') : (p.button ?? 'Follow')}
          </div>
          <div style={{position: 'absolute', right: -30 - handX * 260, bottom: -70 - handX * 120, opacity: prog(f, pressAt - 18, 6, 'out') * (1 - prog(f, pressAt + 14, 10, 'out'))}}>
            <Icon name="pointer" size={110} color={P.text} stroke={2} scene={k.id} plain />
          </div>
        </div>
      )}
      {p.sub && <div style={k.en(pressAt + 8, 'fade')}><Text text={p.sub} role="body" width={L.w * 0.9} maxLines={2} max={50} min={44} color={P.muted} f={f} scene={k.id} /></div>}
    </Center>
  );
};
