import React from 'react';
import {AbsoluteFill, Img, staticFile} from 'remotion';
import {contrast, rgba} from './core/color.mjs';
import {useFonts} from './reel/Reel';
import {Background} from './reel/Background';
import {ReelProvider, type Style} from './reel/context';

export type StyleCardProps = {style: Style; refs: string[]; why?: Record<string, string>; label?: string};

const Swatch: React.FC<{c: string; role: string; on: string}> = ({c, role, on}) => (
  <div style={{display: 'flex', alignItems: 'center', gap: 14, marginBottom: 10}}>
    <div style={{width: 64, height: 44, borderRadius: 10, background: c, border: '1px solid rgba(255,255,255,0.18)'}} />
    <div style={{fontSize: 21, lineHeight: 1.2}}>
      <div style={{fontWeight: 700}}>{role}</div>
      <div style={{opacity: 0.7, fontFamily: 'Menlo, monospace', fontSize: 18}}>{c} · {contrast(c, on).toFixed(1)}:1</div>
    </div>
  </div>
);

// The learned (or defined) style at a glance: references, palette roles, fonts, rhythm and a sample frame.
export const StyleCard: React.FC<StyleCardProps> = ({style, refs, why = {}, label = 'References'}) => {
  const ready = useFonts(style);
  const P = style.palette, F = style.fonts as any, M = style.motion as any, C = style.captions as any, FI = style.finish as any;
  const cols = refs.length <= 4 ? 2 : refs.length <= 9 ? 3 : 4;
  const cell = 900 / cols;
  const area = why['palette.bg'] ? 740 : 790; // leave room for the sources line under the references
  const disp = F.display, body = F.body;
  return (
    <AbsoluteFill style={{background: '#101215', color: '#ECEEF2', fontFamily: 'Helvetica, Arial, sans-serif'}}>
      {ready && (
        <>
          <div style={{position: 'absolute', left: 30, top: 22, right: 30}}>
            <div style={{fontSize: 40, fontWeight: 800}}>{style.name}</div>
            <div style={{fontSize: 21, opacity: 0.75, marginTop: 6, maxWidth: 1500}}>{style.description}</div>
          </div>
          <div style={{position: 'absolute', left: 30, top: 128, fontSize: 18, letterSpacing: 2, opacity: 0.6}}>{label.toUpperCase()}</div>
          <div style={{position: 'absolute', left: 30, top: 160, width: 900, display: 'grid', gridTemplateColumns: `repeat(${cols}, ${cell - 10}px)`, gap: 10}}>
            {refs.length ? refs.map((r, i) => (
              <Img key={i} src={staticFile(r)} style={{width: cell - 10, height: Math.min(label.startsWith('Sample') ? (cell - 10) * 1.6 : cell - 10, (area / Math.ceil(refs.length / cols)) - 10), objectFit: 'cover', objectPosition: 'center 30%', borderRadius: 8}} />
            )) : <div style={{fontSize: 26, opacity: 0.6}}>No reference images (defined style)</div>}
          </div>
          <div style={{position: 'absolute', left: 960, top: 130, width: 300}}>
            <div style={{fontSize: 18, letterSpacing: 2, opacity: 0.6, marginBottom: 12}}>PALETTE</div>
            {[['bg', 'background'], ['surface', 'cards'], ['text', 'text'], ['muted', 'muted text'], ['accent', 'accent'], ['accent2', 'accent 2'], ['positive', 'up / good'], ['negative', 'down / bad']].map(([k, label]) => <Swatch key={k} c={P[k]} role={label} on={P.bg} />)}
          </div>
          <div style={{position: 'absolute', left: 1280, top: 130, width: 290, height: 516, borderRadius: 18, overflow: 'hidden', border: '2px solid rgba(255,255,255,0.2)'}}>
            <ReelProvider value={{style, timeline: {fps: 30, width: 290, height: 516, durationInFrames: 1, scenes: [], voEnd: 0}, words: [], W: 290, H: 516, fps: 30} as any}>
              <Background />
            </ReelProvider>
            <div style={{position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12, padding: 18}}>
              <div style={{fontFamily: `"${disp.family}"`, fontWeight: disp.weight, fontSize: 40, lineHeight: 1.02, letterSpacing: `${disp.tracking ?? 0}em`, textTransform: disp.case === 'upper' ? 'uppercase' : 'none', color: P.text, textAlign: 'center'}}>Your <span style={{color: P.accent}}>title</span> here</div>
              <div style={{fontFamily: `"${disp.family}"`, fontWeight: disp.weight, fontSize: 64, color: P.accent}}>90%</div>
              <div style={{background: style.surface.kind === 'none' ? 'transparent' : rgba(P.surface, 0.9), border: style.surface.border ? `2px solid ${P.line}` : 'none', borderRadius: Math.min(style.surface.radius, 20), padding: '10px 14px', fontFamily: `"${body.family}"`, fontWeight: 600, fontSize: 17, color: P.text}}>A card in this style</div>
              <div style={{position: 'absolute', bottom: 64, fontFamily: `"${F.caption.family}"`, fontWeight: F.caption.weight, fontSize: 20, color: P.text, textTransform: C.case === 'upper' ? 'uppercase' : 'none'}}>
                captions <span style={{color: C.highlight ?? P.accent}}>look</span> like this
              </div>
            </div>
          </div>
          <div style={{position: 'absolute', left: 960, top: 680, width: 610}}>
            <div style={{fontSize: 18, letterSpacing: 2, opacity: 0.6, marginBottom: 8}}>TYPE</div>
            <div style={{fontFamily: `"${disp.family}"`, fontWeight: disp.weight, fontSize: 54, lineHeight: 1.05, letterSpacing: `${disp.tracking ?? 0}em`, textTransform: disp.case === 'upper' ? 'uppercase' : 'none'}}>{disp.family} Aa 123</div>
            <div style={{fontFamily: `"${body.family}"`, fontWeight: body.weight, fontSize: 24, marginTop: 6, opacity: 0.9, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>{body.family}: the quick brown fox jumps over the lazy dog</div>
            <div style={{fontSize: 18, letterSpacing: 2, opacity: 0.6, margin: '22px 0 8px'}}>RHYTHM AND FINISH</div>
            <div style={{fontSize: 21, lineHeight: 1.5}}>
              energy {M.energy} · {M.enter} entrances · {M.transition} cuts · {M.avgShot}s per shot<br />
              captions: {C.mode}, up to {C.maxWords} words · background: {style.background.kind}<br />
              surface: {style.surface.kind}, radius {style.surface.radius}<br />
              bloom {FI.bloom} · grain {FI.grain} · vignette {FI.vignette}
            </div>
          </div>
          {why['palette.bg'] && (
            <div style={{position: 'absolute', left: 30, bottom: 18, width: 900, fontSize: 16, lineHeight: 1.35, opacity: 0.55, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden'}}>
              bg: {why['palette.bg']} · accent: {why['palette.accent']} · titles: {why['fonts.display']} · motion: {why.motion}
            </div>
          )}
        </>
      )}
    </AbsoluteFill>
  );
};
