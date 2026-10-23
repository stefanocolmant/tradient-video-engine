import React from 'react';
import {interpolate} from 'remotion';
import {rgba} from '../core/color.mjs';
import {EASE, prog} from '../ui/anim';
import {beats} from '../core/beats.mjs';
import {Icon} from '../ui/Icon';
import {Pill} from '../ui/Panel';
import {Text, fontOf} from '../ui/Text';
import {Center, fmt, useKit, type SceneProps} from './common';

// A big number that counts up and lands on its spoken word, with a label and optional ring or
// comparison bar.
export const NumberScene: React.FC<SceneProps> = ({scene, f, dur}) => {
  const k = useKit(scene, f);
  const {p, L, P, style, fps} = k;
  const value = Number(p.value ?? 0);
  const from = Number(p.from ?? 0);
  const decimals = Number(p.decimals ?? (Math.abs(value) < 10 && value % 1 ? 1 : 0));
  const nb = beats.number(p, dur, fps);
  const countEnd = nb.end, countLen = nb.len;
  const cp = interpolate(f, [countEnd - countLen, countEnd], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: EASE.expo});
  const shown = from + (value - from) * cp;
  const font = fontOf(style, 'display');
  const text = `${p.prefix ?? ''}${fmt(shown, decimals)}${p.suffix ?? ''}`;
  const finalText = `${p.prefix ?? ''}${fmt(value, decimals)}${p.suffix ?? ''}`;
  const size = Math.min(320, (L.w / Math.max(3, finalText.length * 0.58)) * style.type.display);
  const color = p.tone === 'negative' ? P.negative : p.tone === 'positive' ? P.positive : P.accent;
  const ring = p.ring ?? (p.suffix === '%' && value <= 100);
  const R = Math.min(L.w * 0.42, 400);
  const land = prog(f, countEnd - 2, 8, 'back');
  return (
    <Center L={L} gap={30}>
      {p.kicker && <div style={k.en(0, 'fade')}><Pill color={color}>{p.kicker}</Pill></div>}
      <div style={{position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', width: ring ? R * 2 : undefined, height: ring ? R * 2 : undefined, ...k.en(0, 'pop', 3)}}>
        {ring && (
          <svg width={R * 2} height={R * 2} style={{position: 'absolute', inset: 0, transform: 'rotate(-90deg)'}}>
            <circle cx={R} cy={R} r={R - 18} fill="none" stroke={rgba(P.line, 0.8)} strokeWidth={22} />
            <circle cx={R} cy={R} r={R - 18} fill="none" stroke={color} strokeWidth={22} strokeLinecap="round" pathLength={100} strokeDasharray={100} strokeDashoffset={100 - Math.max(0, Math.min(100, shown))} style={{filter: style.finish.bloom ? `drop-shadow(0 0 ${(12 + 6 * Math.sin(k.t * 3)) * style.finish.bloom}px ${rgba(color, 0.7)})` : undefined}} />
            {cp >= 1 && (() => { const a = (k.t * 1.4) % (Math.PI * 2); return <circle cx={R + Math.cos(a) * (R - 18)} cy={R + Math.sin(a) * (R - 18)} r={15} fill={rgba('#FFFFFF', 0.9)} style={{filter: `drop-shadow(0 0 16px ${color})`}} />; })()}
          </svg>
        )}
        {p.icon && !ring && <div style={{position: 'absolute', top: -size * 0.55, ...k.en(2, 'pop')}}><Icon name={p.icon} size={96} scene={k.id} /></div>}
        <div style={{fontFamily: `"${font.family}"`, fontWeight: font.weight as any, fontSize: ring ? Math.min(size, R * 0.62) : size, lineHeight: 1, letterSpacing: `${font.tracking}em`, color, fontVariantNumeric: 'tabular-nums', textShadow: style.finish.bloom ? `0 0 ${30 * style.finish.bloom}px ${rgba(color, 0.55)}` : undefined, transform: `scale(${1 + 0.06 * Math.sin(Math.PI * land) + (cp >= 1 ? 0.015 * Math.sin(k.t * 2.4) : 0)})`, whiteSpace: 'nowrap'}}>
          {text}
        </div>
      </div>
      {p.label && (
        <div style={k.en(Math.min(countEnd - 6, dur * 0.4), 'rise')}>
          <Text text={p.label} role="body" width={L.w * 0.92} maxLines={2} max={72 * style.type.body} min={44} weight={600} upper={style.fonts.display.case === 'upper'} f={f} scene={k.id} emphasis={p.emphasis} />
        </div>
      )}
      {p.compare && (
        <div style={{width: L.w * 0.86, display: 'flex', flexDirection: 'column', gap: 18, ...k.en(countEnd, 'fade')}}>
          {[{label: p.compareLabel ?? p.label ?? '', v: value, c: color}, {label: p.compare.label, v: Number(p.compare.value), c: P.muted}].map((row, i) => {
            const max = Math.max(Math.abs(value), Math.abs(Number(p.compare.value))) || 1;
            const grow = prog(f, countEnd + i * 6, 18, 'expo');
            return (
              <div key={i} style={{display: 'flex', alignItems: 'center', gap: 18}}>
                <div style={{height: 38, width: `${(Math.abs(row.v) / max) * 78 * grow}%`, background: row.c, borderRadius: 10, boxShadow: i === 0 && style.finish.bloom ? `0 0 24px ${rgba(row.c, 0.5)}` : undefined}} />
                <div style={{fontFamily: `"${style.fonts.body.family}"`, fontWeight: 700, fontSize: 44, color: i === 0 ? P.text : P.muted, whiteSpace: 'nowrap', opacity: grow}}>{row.label}</div>
              </div>
            );
          })}
        </div>
      )}
    </Center>
  );
};
