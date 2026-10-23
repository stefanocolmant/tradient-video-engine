import React from 'react';
import {rgba} from '../core/color.mjs';
import {EASE, prog} from '../ui/anim';
import {beats} from '../core/beats.mjs';
import {Panel, Pill} from '../ui/Panel';
import {Text, fontOf} from '../ui/Text';
import {fmt, useKit, type SceneProps} from './common';

type Candle = {o: number; h: number; l: number; c: number};

// Candles that walk from the first value to the last (for a price story without real OHLC data).
function candlesFrom(values: number[]): Candle[] {
  const out: Candle[] = [];
  for (let i = 0; i < values.length; i++) {
    const o = i ? values[i - 1] : values[0] * 0.995;
    const c = values[i];
    const span = Math.abs(c - o) || Math.abs(c) * 0.004 || 1;
    const wig = (Math.sin(i * 12.9898) * 43758.5453) % 1;
    out.push({o, c, h: Math.max(o, c) + span * (0.35 + Math.abs(wig) * 0.6), l: Math.min(o, c) - span * (0.3 + Math.abs(wig) * 0.5)});
  }
  return out;
}

// Line, area, bar or candlestick chart that draws itself on, with an optional highlighted point.
export const Chart: React.FC<SceneProps> = ({scene, f, dur}) => {
  const k = useKit(scene, f);
  const {p, L, P, style, fps} = k;
  const kind: string = p.kind ?? 'line';
  const data: {label?: string; value: number}[] = p.data ?? (p.values ?? []).map((v: number, i: number) => ({value: Number(v), label: p.labels?.[i]}));
  const candles: Candle[] = p.candles ?? (kind === 'candles' ? candlesFrom(data.map((d) => d.value)) : []);
  const vals = kind === 'candles' ? candles.flatMap((c) => [c.h, c.l]) : data.map((d) => d.value);
  const lo = p.yMin ?? (kind === 'bar' ? Math.min(0, ...vals) : Math.min(...vals));
  const hi = p.yMax ?? Math.max(...vals);
  const pad = (hi - lo) * 0.12 || 1;
  const y0 = kind === 'bar' ? lo : lo - pad, y1 = hi + pad;
  const titleH = p.title ? 130 : 0;
  const W = L.w, H = Math.min(L.h - titleH - 40, L.w * 1.15);
  const inner = {x: 26, y: 40, w: W - 52, h: H - 120};
  const n = kind === 'candles' ? candles.length : data.length;
  const X = (i: number) => inner.x + (n <= 1 ? inner.w / 2 : (i / (n - 1)) * inner.w);
  const Y = (v: number) => inner.y + inner.h - ((v - y0) / (y1 - y0)) * inner.h;
  const cd = beats.chartDraw(p, dur, fps);
  const drawAt = cd.at, drawLen = cd.len;
  const dp = prog(f, drawAt, drawLen, EASE.smooth);
  const color = p.tone === 'negative' ? P.negative : p.tone === 'positive' ? P.positive : P.accent;
  const glow = style.finish.bloom ? `drop-shadow(0 0 ${10 * style.finish.bloom}px ${rgba(color, 0.7)})` : undefined;
  const hl = p.highlight;
  const hlAt = hl?.atFrame ?? drawAt + drawLen;
  const hp = hl ? prog(f, hlAt, 12, 'back') : 0;
  const body = fontOf(style, 'body');
  const linePts = data.map((d, i) => `${X(i).toFixed(1)},${Y(d.value).toFixed(1)}`).join(' ');
  const bw = Math.min(90, (inner.w / Math.max(1, n)) * 0.62);
  return (
    <div style={{position: 'absolute', left: L.x0, top: L.y0, width: L.w, height: L.h, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 30}}>
      {p.title && <div style={k.en(-3, 'fade')}><Text text={p.title} role="display" width={L.w} maxLines={2} max={86 * style.type.display} min={48} f={f} scene={k.id} emphasis={p.emphasis} /></div>}
      <div style={k.en(0, 'rise')}>
        <Panel pad={0} style={{width: W, height: H}}>
          <svg width={W} height={H} style={{overflow: 'visible'}}>
            {[0.25, 0.5, 0.75].map((q) => <line key={q} x1={inner.x} x2={inner.x + inner.w} y1={inner.y + inner.h * q} y2={inner.y + inner.h * q} stroke={rgba(P.line, 0.7)} strokeWidth={1.5} strokeDasharray="6 10" />)}
            <line x1={inner.x} x2={inner.x + inner.w} y1={inner.y + inner.h} y2={inner.y + inner.h} stroke={P.line} strokeWidth={2.5} />
            {(kind === 'line' || kind === 'area') && (
              <>
                {kind === 'area' && (
                  <>
                    <defs>
                      <linearGradient id={`area-${k.id}`} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={color} stopOpacity={0.42} />
                        <stop offset="100%" stopColor={color} stopOpacity={0.02} />
                      </linearGradient>
                    </defs>
                    <polygon points={`${X(0)},${inner.y + inner.h} ${linePts} ${X(n - 1)},${inner.y + inner.h}`} fill={`url(#area-${k.id})`} style={{clipPath: `inset(0 ${(1 - dp) * 100}% 0 0)`}} />
                  </>
                )}
                <polyline points={linePts} fill="none" stroke={color} strokeWidth={8} strokeLinejoin="round" strokeLinecap="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - dp} style={{filter: glow}} />
                {dp > 0.02 && (() => {
                  const idx = Math.min(n - 1, dp * (n - 1));
                  const i0 = Math.floor(idx), fr = idx - i0;
                  const v = data[i0].value + ((data[Math.min(n - 1, i0 + 1)]?.value ?? data[i0].value) - data[i0].value) * fr;
                  return <circle cx={X(idx)} cy={Y(v)} r={14} fill={color} style={{filter: glow}} />;
                })()}
              </>
            )}
            {kind === 'bar' && data.map((d, i) => {
              const g = prog(f, drawAt + i * Math.max(2, Math.round(drawLen / Math.max(1, n))), 16, 'expo');
              const top = Y(Math.max(d.value, y0)), base = Y(Math.max(0, y0));
              const c = hl && hl.index === i ? color : rgba(color, hl ? 0.45 : 1);
              return <rect key={i} x={X(i) - bw / 2} width={bw} y={base - (base - top) * g} height={(base - top) * g} rx={Math.min(12, bw / 4)} fill={c} style={{filter: hl?.index === i ? glow : undefined}} />;
            })}
            {kind === 'candles' && candles.map((c, i) => {
              const g = prog(f, drawAt + (i / Math.max(1, n)) * drawLen, 6, 'out');
              const up = c.c >= c.o;
              const col = up ? P.positive : P.negative;
              const cw = Math.min(42, (inner.w / n) * 0.6);
              return (
                <g key={i} opacity={g} transform={`translate(0 ${(1 - g) * 18})`}>
                  <line x1={X(i)} x2={X(i)} y1={Y(c.h)} y2={Y(c.l)} stroke={col} strokeWidth={3} />
                  <rect x={X(i) - cw / 2} width={cw} y={Y(Math.max(c.o, c.c))} height={Math.max(3, Math.abs(Y(c.o) - Y(c.c)))} rx={3} fill={col} style={{filter: style.finish.bloom ? `drop-shadow(0 0 6px ${rgba(col, 0.6)})` : undefined}} />
                </g>
              );
            })}
            {data.map((d, i) => (d.label && (n <= 7 || i === 0 || i === n - 1) ? (
              <text key={`l${i}`} x={X(i)} y={inner.y + inner.h + 52} textAnchor="middle" fontFamily={body.family} fontWeight={600} fontSize={30} fill={P.muted} opacity={dp > i / Math.max(1, n) ? 1 : 0.25}>{d.label}</text>
            ) : null))}
            {hl && hp > 0 && (() => {
              const i = Math.max(0, Math.min(n - 1, hl.index ?? n - 1));
              const v = kind === 'candles' ? candles[i].c : data[i].value;
              return (
                <g transform={`translate(${X(i)} ${Y(v)})`}>
                  <circle r={30 + 12 * Math.sin(k.t * 4)} fill="none" stroke={color} strokeWidth={4} opacity={0.6 * hp} />
                  <circle r={13 * hp} fill={color} />
                </g>
              );
            })()}
          </svg>
          {hl && hp > 0 && (() => {
            const i = Math.max(0, Math.min(n - 1, hl.index ?? n - 1));
            const v = kind === 'candles' ? candles[i].c : data[i].value;
            const x = X(i), y = Y(v);
            const left = x > W * 0.6;
            return (
              <div style={{position: 'absolute', left: left ? undefined : x + 34, right: left ? W - x + 34 : undefined, top: Math.max(10, y - 110), transform: `scale(${hp})`, transformOrigin: left ? 'right bottom' : 'left bottom'}}>
                <Pill solid color={color} size={34}>{hl.label ?? `${p.prefix ?? ''}${fmt(v, p.decimals ?? 0)}${p.suffix ?? ''}`}</Pill>
              </div>
            );
          })()}
        </Panel>
      </div>
    </div>
  );
};
