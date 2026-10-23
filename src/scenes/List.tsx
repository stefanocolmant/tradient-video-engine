import React from 'react';
import {rgba} from '../core/color.mjs';
import {prog} from '../ui/anim';
import {beats} from '../core/beats.mjs';
import {Icon} from '../ui/Icon';
import {Panel, Pill} from '../ui/Panel';
import {Text, fontOf} from '../ui/Text';
import {useKit, type SceneProps} from './common';

// 2-6 points that arrive on their cue words; the newest one is lit, earlier ones step back.
export const List: React.FC<SceneProps> = ({scene, f, dur}) => {
  const k = useKit(scene, f);
  const {p, L, P, style, fps} = k;
  const items: any[] = (p.items ?? []).map((it: any) => (typeof it === 'string' ? {text: it} : it));
  const at = beats.list(p, dur, fps);
  const n = Math.max(1, items.length);
  const titleH = p.title ? 150 : 0;
  const gap = 30;
  const rowH = Math.min(260, (L.h - titleH - gap * (n - 1)) / n);
  let active = at.reduce((a, fr, i) => (f >= fr ? i : a), -1);
  // An explicit highlight takes over once every item is in.
  const hlAt = typeof p.highlightAtFrame === 'number' ? p.highlightAtFrame : Math.max(...at, 0) + 14;
  if (typeof p.highlight === 'number' && f >= hlAt) active = p.highlight;
  const numFont = fontOf(style, 'display');
  return (
    <div style={{position: 'absolute', left: L.x0, top: L.y0, width: L.w, height: L.h, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap}}>
      {p.title && (
        <div style={{display: 'flex', justifyContent: style.layout.align === 'left' ? 'flex-start' : 'center', ...k.en(-3, 'fade')}}>
          {p.titleStyle === 'pill' ? <Pill>{p.title}</Pill> : <Text text={p.title} role="display" width={L.w} maxLines={2} max={96 * style.type.display} min={52} f={f} scene={k.id} align={style.layout.align === 'left' ? 'left' : 'center'} />}
        </div>
      )}
      {items.map((it, i) => {
        const on = i === active;
        const past = typeof p.highlight === 'number' && f >= hlAt ? i !== active : i < active;
        const glow = prog(f, at[i], 10, 'out') * (on ? 1 : 0);
        return (
          <div key={i} style={{...k.en(at[i], undefined, i + 4), opacity: (k.en(at[i]).opacity as number) * (past ? 0.55 : 1)}}>
            <Panel active={glow} pad={0} style={{height: rowH, display: 'flex', alignItems: 'center', gap: 30, padding: `0 ${34 * style.layout.density}px`}}>
              {p.numbered ? (
                <div style={{fontFamily: `"${numFont.family}"`, fontWeight: numFont.weight as any, fontSize: Math.min(110, rowH * 0.62), color: on ? P.accent : P.muted, minWidth: rowH * 0.55, textAlign: 'center', textShadow: on && style.finish.bloom ? `0 0 24px ${rgba(P.accent, 0.6)}` : undefined}}>{i + 1}</div>
              ) : it.icon ? (
                <Icon name={it.icon} size={Math.min(112, rowH * 0.5)} color={on ? P.accent : undefined} draw={prog(f, at[i], 16, 'out')} scene={k.id} />
              ) : (
                <div style={{width: 18, height: 18, borderRadius: 9, background: on ? P.accent : P.muted, flex: 'none'}} />
              )}
              <div style={{flex: 1, minWidth: 0}}>
                <Text text={it.text} role="body" width={L.w - (p.numbered ? rowH * 0.55 : 120) - 110 - (it.value ? 300 : 0)} maxLines={2} max={Math.min(78, rowH * 0.36) * style.type.body} min={44} weight={650} color={on ? P.text : rgba(P.text, 0.85)} align="left" f={f} scene={k.id} emphasis={it.emphasis} />
                {it.sub && <Text text={it.sub} role="body" width={L.w - 240 - (it.value ? 300 : 0)} maxLines={1} max={44} min={36} color={P.muted} align="left" f={f} scene={k.id} />}
              </div>
              {it.value !== undefined && (
                <div style={{fontFamily: `"${numFont.family}"`, fontWeight: numFont.weight as any, fontSize: Math.min(84, rowH * 0.42), color: on ? P.accent : P.text, whiteSpace: 'nowrap', fontVariantNumeric: 'tabular-nums', textShadow: on && style.finish.bloom ? `0 0 22px ${rgba(P.accent, 0.6)}` : undefined}}>{it.value}</div>
              )}
            </Panel>
          </div>
        );
      })}
    </div>
  );
};

// Two sides set against each other; the winner lights up on its cue.
export const Compare: React.FC<SceneProps> = ({scene, f, dur}) => {
  const k = useKit(scene, f);
  const {p, L, P, style, fps} = k;
  const sides = [p.left ?? {}, p.right ?? {}];
  const cb = beats.compare(p, dur, fps);
  const appear = cb.appear;
  const winAt = cb.win;
  const win = p.winner === 'left' ? 0 : p.winner === 'right' ? 1 : -1;
  const wp = win >= 0 ? prog(f, winAt, 14, 'expo') : 0;
  const colW = (L.w - 70) / 2;
  const display = fontOf(style, 'display');
  return (
    <div style={{position: 'absolute', left: L.x0, top: L.y0, width: L.w, height: L.h, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 40}}>
      {p.title && <div style={k.en(-3, 'fade')}><Text text={p.title} role="display" width={L.w} maxLines={2} max={92 * style.type.display} min={50} f={f} scene={k.id} /></div>}
      <div style={{display: 'flex', gap: 70, alignItems: 'stretch', position: 'relative', minHeight: Math.min(L.h * 0.62, 940)}}>
        {sides.map((sd: any, i) => {
          const isWin = i === win, isLose = win >= 0 && !isWin;
          const tone = sd.tone ?? (isWin ? 'positive' : undefined);
          const c = tone === 'negative' ? P.negative : tone === 'positive' ? P.positive : i === 0 ? P.accent : P.accent2;
          return (
            <div key={i} style={(() => { const e = k.en(appear[i], undefined, i + 7); return {width: colW, ...e, opacity: (e.opacity as number) * (isLose ? 1 - 0.5 * wp : 1), transform: `${e.transform ?? ''} scale(${isWin ? 1 + 0.04 * wp : 1})`}; })()}>
              <Panel active={isWin ? wp : 0} tone={tone === 'negative' ? 'negative' : 'positive'} style={{height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 28, padding: '50px 24px'}}>
                {sd.icon && <Icon name={sd.icon} size={190} color={c} scene={k.id} />}
                {sd.title && <Text text={sd.title} role="body" width={colW - 50} maxLines={2} max={66} min={44} weight={700} upper f={f} scene={k.id} color={isWin ? P.text : P.muted} />}
                {sd.value !== undefined && <div style={{fontFamily: `"${display.family}"`, fontWeight: display.weight as any, fontSize: Math.min(180, (colW - 40) / Math.max(2.5, String(sd.value).length * 0.6)), color: c, lineHeight: 1, textShadow: style.finish.bloom ? `0 0 26px ${rgba(c, 0.5)}` : undefined, whiteSpace: 'nowrap'}}>{sd.value}</div>}
                {(sd.points ?? []).map((pt: string, j: number) => (
                  <div key={j} style={k.en(appear[i] + 6 + j * 5, 'fade')}>
                    <Text text={pt} role="body" width={colW - 50} maxLines={3} max={50} min={40} f={f} scene={k.id} color={P.muted} />
                  </div>
                ))}
              </Panel>
            </div>
          );
        })}
        <div style={{position: 'absolute', left: '50%', top: '50%', transform: `translate(-50%, -50%) scale(${prog(f, appear[1] - 2, 10, 'back')})`, width: 120, height: 120, borderRadius: 60, background: P.bg, border: `3px solid ${P.line}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: `"${display.family}"`, fontWeight: display.weight as any, fontSize: 46, color: P.text}}>
          {p.vs ?? 'VS'}
        </div>
      </div>
    </div>
  );
};
