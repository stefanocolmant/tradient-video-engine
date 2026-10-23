import React from 'react';
import {AbsoluteFill, Img, staticFile} from 'remotion';

export type SheetProps = {images: string[]; labels: string[]; cols: number; cellW: number; cellH: number; title?: string; sub?: string; bg?: string};

// Contact sheet used by `npm run stills` and the style tools: one labelled cell per image.
export const Sheet: React.FC<SheetProps> = ({images, labels, cols, cellW, cellH, title, sub, bg = '#111317'}) => (
  <AbsoluteFill style={{background: bg, fontFamily: 'Helvetica, Arial, sans-serif', color: '#EDEFF3'}}>
    {title && (
      <div style={{height: 96, padding: '18px 24px', boxSizing: 'border-box'}}>
        <div style={{fontSize: 34, fontWeight: 700}}>{title}</div>
        {sub && <div style={{fontSize: 20, opacity: 0.7, marginTop: 6}}>{sub}</div>}
      </div>
    )}
    <div style={{display: 'grid', gridTemplateColumns: `repeat(${cols}, ${cellW}px)`, gap: 0}}>
      {images.map((src, i) => (
        <div key={i} style={{width: cellW, height: cellH, position: 'relative', boxSizing: 'border-box', padding: 8}}>
          {src ? <Img src={/^(https?:|data:)/.test(src) ? src : staticFile(src)} style={{width: '100%', height: cellH - 46, objectFit: 'contain', background: '#000', borderRadius: 6}} /> : null}
          <div style={{fontSize: 19, lineHeight: '30px', height: 30, overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', opacity: 0.9}}>{labels[i] ?? ''}</div>
        </div>
      ))}
    </div>
  </AbsoluteFill>
);

export const sheetSize = (n: number, cols: number, cellW: number, cellH: number, title?: string) => ({width: Math.max(2, cols * cellW), height: Math.max(2, Math.ceil(Math.max(1, n) / cols) * cellH + (title ? 96 : 0))});
