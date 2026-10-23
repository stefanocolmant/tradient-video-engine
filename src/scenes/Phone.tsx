import React from 'react';
import {Img} from 'remotion';
import {isDark, rgba} from '../core/color.mjs';
import {asset} from '../reel/context';
import {prog} from '../ui/anim';
import {beats} from '../core/beats.mjs';
import {Icon} from '../ui/Icon';
import {Text} from '../ui/Text';
import {useKit, type SceneProps} from './common';

// A big, close phone (like a creator holding it up to the camera) showing messages, a notification,
// an app screen or a screenshot. Content sits in the top of the screen so it stays readable above
// the captions; the phone's lower edge runs off the frame.
export const Phone: React.FC<SceneProps> = ({scene, f, dur}) => {
  const k = useKit(scene, f);
  const {p, L, P, style, fps} = k;
  const screen: string = p.screen ?? (p.messages ? 'messages' : p.notification ? 'notification' : p.image ? 'image' : 'app');
  const capH = p.caption ? 150 : 0;
  const w = Math.round(Math.min(L.w * 1.02, k.W * 0.8)), h = Math.round(w * 2.08);
  const x = Math.round(k.W / 2 - w / 2), y = Math.round(L.y0 + capH);
  const dark = p.light ? false : true;
  const scr = {bg: dark ? '#0B0C10' : '#F4F5F7', text: dark ? '#F5F6F8' : '#101114', muted: dark ? '#8C9099' : '#6B6F76', bubble: dark ? '#26272C' : '#E6E7EB'};
  const body = style.fonts.body.family;
  const sway = Math.sin(k.t * 0.7) * 2;
  const e = k.en(-4, 'rise');
  const time = p.time ?? '9:41';
  const u = w / 100; // 1% of the phone's width
  let content: React.ReactNode = null;
  if (screen === 'messages') {
    const msgs: any[] = p.messages ?? [];
    const at = beats.messages(p, dur, fps);
    content = (
      <div style={{position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column'}}>
        <div style={{paddingTop: u * 17, paddingBottom: u * 3, display: 'flex', flexDirection: 'column', alignItems: 'center', borderBottom: `1px solid ${rgba(scr.muted, 0.25)}`}}>
          <div style={{width: u * 13, height: u * 13, borderRadius: '50%', background: P.accent, color: isDark(P.accent) ? '#FFFFFF' : '#0A0A0A', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: body, fontWeight: 800, fontSize: u * 6.5}}>{String(p.contact ?? '?').slice(0, 1).toUpperCase()}</div>
          <div style={{fontFamily: body, fontSize: u * 4.8, fontWeight: 600, color: scr.text, marginTop: u * 1.5}}>{p.contact ?? 'Unknown'}</div>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', gap: u * 2.6, padding: `${u * 5}px ${u * 4}px`}}>
          {msgs.map((m, i) => {
            const me = m.from === 'me';
            const ap = prog(f, at[i], 10, 'back');
            if (f < at[i] - 1) return null;
            return (
              <div key={i} style={{alignSelf: me ? 'flex-end' : 'flex-start', maxWidth: '82%', padding: `${u * 2.6}px ${u * 4.2}px`, borderRadius: u * 5.5, background: me ? P.accent : scr.bubble, color: me ? (isDark(P.accent) ? '#FFFFFF' : '#0A0A0A') : scr.text, fontFamily: body, fontSize: u * 5.8, lineHeight: 1.22, transform: `scale(${ap})`, transformOrigin: me ? 'right bottom' : 'left bottom', opacity: Math.min(1, ap * 1.5)}}>
                {m.text}
              </div>
            );
          })}
        </div>
      </div>
    );
  } else if (screen === 'notification') {
    const n = p.notification ?? {};
    const at = beats.notification(p, dur, fps);
    const np = prog(f, at, 14, 'back');
    content = (
      <div style={{position: 'absolute', inset: 0, background: `linear-gradient(180deg, ${P.bg2}, ${P.bg})`}}>
        <div style={{textAlign: 'center', marginTop: u * 18, fontFamily: body, color: '#FFFFFF'}}>
          <div style={{fontSize: u * 5, opacity: 0.85}}>{p.date ?? 'Tuesday, June 9'}</div>
          <div style={{fontSize: u * 23, fontWeight: 300, lineHeight: 1.05}}>{time}</div>
        </div>
        <div style={{position: 'absolute', left: u * 3, right: u * 3, top: u * 58, transform: `translateY(${(1 - np) * -u * 14}px) scale(${0.96 + 0.04 * np})`, opacity: Math.min(1, np * 1.4), borderRadius: u * 7, background: rgba(dark ? '#2A2C33' : '#FFFFFF', 0.96), padding: u * 5, display: 'flex', gap: u * 3.6, alignItems: 'flex-start', boxShadow: `0 ${u * 3}px ${u * 8}px ${rgba('#000000', 0.35)}`}}>
          <div style={{width: u * 14, height: u * 14, borderRadius: u * 3.2, background: P.accent, display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none'}}>
            <Icon name={n.icon ?? 'bell'} size={u * 8.4} color={isDark(P.accent) ? '#FFFFFF' : '#0A0A0A'} stroke={2.4} scene={k.id} />
          </div>
          <div style={{fontFamily: body, color: scr.text, minWidth: 0, flex: 1}}>
            <div style={{display: 'flex', justifyContent: 'space-between', gap: u * 3, fontSize: u * 5, color: scr.muted}}><span>{n.app ?? 'App'}</span><span>now</span></div>
            <div style={{fontSize: u * 7, fontWeight: 700, marginTop: u * 1, lineHeight: 1.12}}>{n.title}</div>
            <div style={{fontSize: u * 6.2, marginTop: u * 1, lineHeight: 1.18}}>{n.body}</div>
          </div>
        </div>
      </div>
    );
  } else if (screen === 'image') {
    content = <Img src={asset(p.image)} style={{position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top'}} />;
  } else {
    const app = p.app ?? {};
    const rows: any[] = app.rows ?? [];
    const at = beats.rows(p, dur, fps);
    content = (
      <div style={{position: 'absolute', inset: 0, padding: `${u * 18}px ${u * 5}px`, fontFamily: body, color: scr.text, display: 'flex', flexDirection: 'column', gap: u * 3}}>
        <div style={{fontSize: u * 7.5, fontWeight: 800}}>{app.title ?? 'Overview'}</div>
        {app.big && <div style={{fontSize: u * 15, fontWeight: 800, color: P.accent, lineHeight: 1.05, ...k.en(4, 'pop')}}>{app.big}</div>}
        {app.sub && <div style={{fontSize: u * 4.8, color: scr.muted}}>{app.sub}</div>}
        {rows.map((r, i) => (
          <div key={i} style={{display: 'flex', justifyContent: 'space-between', gap: u * 3, padding: `${u * 3.4}px ${u * 4}px`, borderRadius: u * 4, background: rgba(scr.muted, 0.14), fontSize: u * 5.4, ...k.en(at[i], 'rise')}}>
            <span>{r.label}</span><span style={{fontWeight: 700, color: r.tone === 'negative' ? P.negative : r.tone === 'positive' ? P.positive : scr.text}}>{r.value}</span>
          </div>
        ))}
      </div>
    );
  }
  return (
    <div style={{position: 'absolute', inset: 0}}>
      {p.caption && <div style={{position: 'absolute', left: L.x0, width: L.w, top: L.y0 - 10, ...k.en(2, 'fade')}}><Text text={p.caption} role="display" width={L.w} maxLines={2} max={72 * style.type.display} min={48} f={f} scene={k.id} emphasis={p.emphasis} /></div>}
      <div style={{position: 'absolute', left: x, top: y, width: w, height: h, transform: `perspective(2600px) rotateY(${-3 + sway}deg) rotateX(2deg) ${e.transform ?? ''}`, opacity: e.opacity}}>
        <div style={{position: 'absolute', inset: 0, borderRadius: u * 15, background: '#101216', boxShadow: `0 50px 110px ${rgba('#000000', 0.6)}, inset 0 0 0 ${Math.max(2, u * 0.6)}px #2a2d33${style.finish.bloom ? `, 0 0 90px ${rgba(P.glow, 0.2)}` : ''}`}} />
        <div style={{position: 'absolute', inset: u * 3, borderRadius: u * 12.5, overflow: 'hidden', background: scr.bg}}>
          {content}
          <div style={{position: 'absolute', top: u * 3, left: '50%', transform: 'translateX(-50%)', width: u * 29, height: u * 8.4, borderRadius: u * 5, background: '#000000'}} />
          {screen !== 'notification' && <div style={{position: 'absolute', top: u * 4.2, left: u * 9, fontFamily: body, fontWeight: 700, fontSize: u * 4.6, color: scr.text}}>{time}</div>}
        </div>
      </div>
    </div>
  );
};
