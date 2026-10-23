import React, {useMemo} from 'react';
import {useCurrentFrame} from 'remotion';
import {chunkWords} from '../core/captions.mjs';
import {rgba} from '../core/color.mjs';
import {prog} from '../ui/anim';
import {fitText, fontOf} from '../ui/Text';
import {useReel} from './context';

// Spoken-word captions in the style's caption mode. Hidden over scenes whose big text already says
// the narration (see Reel), and in styles with mode "none".
export const Captions: React.FC<{hidden: (frame: number) => boolean}> = ({hidden}) => {
  const {style, words, fps, W, H} = useReel();
  const f = useCurrentFrame();
  const C = style.captions;
  const chunks = useMemo(
    () => chunkWords(words, {maxWords: C.maxWords, maxChars: C.mode === 'subtitle' ? 34 : C.maxWords <= 3 ? 18 : 26}),
    [words, C.maxWords, C.mode],
  );
  if (C.mode === 'none' || !words.length || hidden(f)) return null;
  const t = f / fps;
  const chunk = chunks.find((c) => t >= c.s - 0.03 && t < c.e);
  if (!chunk) return null;
  const font = fontOf(style, C.font === 'display' ? 'display' : C.font === 'body' ? 'body' : 'caption');
  const upper = C.case === 'upper';
  const color = C.color ?? style.palette.text;
  const hi = C.highlight ?? style.palette.accent;
  const startF = Math.round(chunk.s * fps);
  const inP = prog(f, startF - 2, C.mode === 'pop' ? 6 : 4, C.mode === 'pop' ? 'back' : 'out');
  const width = W * (C.mode === 'subtitle' ? 0.84 : 0.86);
  const fit = fitText(chunk.words.map((w: any) => ({text: w.w, emph: false})), {family: font.family, weight: font.weight, width, maxLines: 2, max: C.size, min: Math.min(C.size, 34), tracking: font.tracking, upper, lineHeight: 1.12});
  const stroke = C.stroke > 0 ? {WebkitTextStroke: `${C.stroke}px ${style.palette.bg}`, paintOrder: 'stroke fill'} : {};
  const shadow = C.shadow ? `0 3px 18px ${rgba('#000000', 0.55)}, 0 1px 3px ${rgba('#000000', 0.6)}` : undefined;
  let k = 0;
  return (
    <div style={{position: 'absolute', left: 0, right: 0, top: H * C.position, transform: `translateY(-50%) scale(${C.mode === 'pop' ? 0.86 + 0.14 * inP : 1})`, display: 'flex', justifyContent: 'center', opacity: inP}}>
      <div style={{fontFamily: `"${font.family}"`, fontWeight: font.weight as any, fontSize: fit.size, lineHeight: 1.12, letterSpacing: `${font.tracking}em`, textTransform: upper ? 'uppercase' : 'none', textAlign: 'center', color, textShadow: shadow, padding: C.box ? '14px 26px 18px' : 0, borderRadius: C.box ? Math.min(28, style.surface.radius) : 0, background: C.box ? (C.boxColor ?? rgba(style.palette.bg, 0.78)) : 'transparent', maxWidth: width + 60, ...stroke}}>
        {fit.lines.map((line, li) => (
          <div key={li} style={{whiteSpace: 'nowrap'}}>
            {line.map((tok, ti) => {
              const w = chunk.words[k++];
              const spoken = t >= w.s - 0.02;
              const current = spoken && (t < w.e + 0.05 || w === chunk.words[chunk.words.length - 1] || t < (chunk.words[k]?.s ?? Infinity));
              let c = color, bg: string | undefined;
              if (C.mode === 'pop' && current) { if (C.box) c = hi; else c = hi; }
              if (C.mode === 'karaoke') c = spoken ? (current ? hi : color) : rgba(color, 0.45);
              if (C.mode === 'pop' && current && C.highlightBox) { bg = hi; c = style.palette.bg; }
              return (
                <React.Fragment key={ti}>
                  {ti > 0 && ' '}
                  <span style={{color: c, background: bg, borderRadius: bg ? 10 : 0, padding: bg ? '0 0.12em' : 0, transform: C.mode === 'pop' && current ? 'scale(1.06)' : undefined, display: 'inline-block'}}>{tok.text}</span>
                </React.Fragment>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};
