import React, {useMemo} from 'react';
import {AbsoluteFill, Img, random, useCurrentFrame} from 'remotion';
import {rgba, isDark, mix} from '../core/color.mjs';
import {asset, useReel} from './context';

// Noise texture made once per page (paper fibre, film grain).
export const useNoise = (size = 256, contrastAmt = 1, seed = 'n') =>
  useMemo(() => {
    const c = document.createElement('canvas');
    c.width = c.height = size;
    const g = c.getContext('2d')!;
    const d = g.createImageData(size, size);
    for (let i = 0; i < size * size; i++) {
      const v = 128 + (random(`${seed}${i}`) - 0.5) * 255 * contrastAmt;
      d.data[i * 4] = d.data[i * 4 + 1] = d.data[i * 4 + 2] = v;
      d.data[i * 4 + 3] = 255;
    }
    g.putImageData(d, 0, 0);
    return c.toDataURL();
  }, [size, contrastAmt, seed]);

const Dust: React.FC<{n: number; color: string; t: number; speed: number; W: number; H: number}> = ({n, color, t, speed, W, H}) => (
  <>
    {Array.from({length: n}, (_, i) => {
      const x = random(`dx${i}`) * W;
      const y0 = random(`dy${i}`) * H;
      const y = (((y0 - t * (12 + 30 * random(`ds${i}`)) * speed) % H) + H) % H;
      const r = 1 + random(`dr${i}`) * 2.6;
      const tw = 0.35 + 0.65 * Math.abs(Math.sin(t * (0.6 + random(`dt${i}`)) + i));
      return <div key={i} style={{position: 'absolute', left: x, top: y, width: r * 2, height: r * 2, borderRadius: '50%', background: color, opacity: 0.22 + 0.5 * tw * random(`do${i}`), boxShadow: `0 0 ${r * 4}px ${color}`}} />;
    })}
  </>
);

export const Background: React.FC = () => {
  const {style, W, H, fps} = useReel();
  const f = useCurrentFrame();
  const t = f / fps;
  const P = style.palette;
  const B = style.background;
  const speed = 0.3 + B.motion * (0.5 + style.motion.idle);
  const dark = isDark(P.bg);
  const noise = useNoise(256, 1, 'paper');

  switch (B.kind) {
    case 'luminous': {
      const gridShift = (t * 38 * speed) % 120;
      return (
        <AbsoluteFill style={{background: `radial-gradient(ellipse 120% 70% at 50% 28%, ${P.bg2} 0%, ${P.bg} 62%, ${mix(P.bg, '#000000', 0.35)} 100%)`, overflow: 'hidden'}}>
          <div style={{position: 'absolute', left: -W, width: W * 3, top: H * 0.52, height: H * 1.2, transformOrigin: '50% 0%', transform: 'perspective(900px) rotateX(76deg)', backgroundImage: `linear-gradient(${rgba(P.line, 0.55)} 2px, transparent 2px), linear-gradient(90deg, ${rgba(P.line, 0.55)} 2px, transparent 2px)`, backgroundSize: '120px 120px', backgroundPosition: `0px ${gridShift}px`, maskImage: 'linear-gradient(to bottom, transparent 0%, black 18%, black 60%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 18%, black 60%, transparent 100%)', opacity: 0.55 * B.intensity + 0.2}} />
          <div style={{position: 'absolute', inset: 0, background: `radial-gradient(ellipse 60% 30% at 50% ${18 + Math.sin(t * 0.3) * 3}%, ${rgba(P.glow, 0.16 * B.intensity + 0.05)}, transparent 70%)`}} />
          {[0, 1].map((k) => (
            <div key={k} style={{position: 'absolute', left: W * (0.1 + 0.5 * k) + Math.sin(t * 0.25 + k * 2) * 120, top: -H * 0.2, width: W * 0.45, height: H * 1.4, transform: `rotate(${18 - k * 34}deg)`, background: `linear-gradient(90deg, transparent, ${rgba(P.accent2, 0.05 * B.intensity + 0.02)}, transparent)`, filter: 'blur(30px)'}} />
          ))}
          <Dust n={70} color={rgba(P.accent2, 0.9)} t={t} speed={speed} W={W} H={H} />
        </AbsoluteFill>
      );
    }
    case 'grid':
    case 'dots': {
      const size = B.grid ?? 90;
      const shift = (t * 14 * speed) % size;
      const img = B.kind === 'grid'
        ? `linear-gradient(${rgba(P.line, 0.6)} 1.5px, transparent 1.5px), linear-gradient(90deg, ${rgba(P.line, 0.6)} 1.5px, transparent 1.5px)`
        : `radial-gradient(${rgba(P.line, 0.9)} 2.2px, transparent 2.6px)`;
      return (
        <AbsoluteFill style={{background: P.bg}}>
          <AbsoluteFill style={{backgroundImage: img, backgroundSize: `${size}px ${size}px`, backgroundPosition: `${shift}px ${shift * 0.6}px`, opacity: 0.5 + 0.5 * B.intensity, maskImage: 'radial-gradient(ellipse 85% 70% at 50% 45%, black 40%, transparent 100%)', WebkitMaskImage: 'radial-gradient(ellipse 85% 70% at 50% 45%, black 40%, transparent 100%)'}} />
          <AbsoluteFill style={{background: `radial-gradient(ellipse 70% 40% at 50% 30%, ${rgba(P.accent, 0.08 * B.intensity)}, transparent 70%)`}} />
        </AbsoluteFill>
      );
    }
    case 'paper':
      return (
        <AbsoluteFill style={{background: P.bg}}>
          <AbsoluteFill style={{backgroundImage: `url(${noise})`, backgroundSize: '256px 256px', mixBlendMode: dark ? 'screen' : 'multiply', opacity: 0.06 + 0.1 * B.intensity}} />
          <AbsoluteFill style={{background: `radial-gradient(ellipse 90% 75% at 50% 45%, transparent 55%, ${rgba(dark ? '#000000' : '#6B5B3E', 0.14)} 100%)`}} />
        </AbsoluteFill>
      );
    case 'aurora': {
      const blob = (c: string, k: number) => {
        const x = 0.5 + 0.32 * Math.sin(t * 0.17 * speed + k * 2.1);
        const y = 0.38 + 0.25 * Math.cos(t * 0.13 * speed + k * 1.3);
        return <div key={k} style={{position: 'absolute', left: W * x - W * 0.45, top: H * y - W * 0.45, width: W * 0.9, height: W * 0.9, borderRadius: '50%', background: c, opacity: 0.22 + 0.25 * B.intensity, filter: 'blur(140px)'}} />;
      };
      return <AbsoluteFill style={{background: P.bg, overflow: 'hidden'}}>{[P.accent, P.accent2, P.accent3].map(blob)}</AbsoluteFill>;
    }
    case 'stars':
      return (
        <AbsoluteFill style={{background: `radial-gradient(ellipse 100% 60% at 50% 35%, ${P.bg2}, ${P.bg} 70%)`}}>
          <Dust n={160} color="#FFFFFF" t={t} speed={0.3 * speed} W={W} H={H} />
          <AbsoluteFill style={{background: `radial-gradient(ellipse 60% 35% at ${50 + 18 * Math.sin(t * 0.05)}% ${30 + 8 * Math.cos(t * 0.04)}%, ${rgba(P.accent2, 0.06 * B.intensity)}, transparent 70%)`}} />
        </AbsoluteFill>
      );
    case 'image':
      return (
        <AbsoluteFill style={{background: P.bg, overflow: 'hidden'}}>
          {B.image && <Img src={asset(B.image)} style={{width: '100%', height: '100%', objectFit: 'cover', transform: `scale(${1.06 + 0.04 * Math.sin(t * 0.1)})`}} />}
          <AbsoluteFill style={{background: rgba(P.bg, 0.55 + 0.3 * (1 - B.intensity))}} />
        </AbsoluteFill>
      );
    case 'solid':
      return <AbsoluteFill style={{background: P.bg}} />;
    case 'noise':
    case 'gradient':
    default: {
      const a = (B.angle ?? 160) + Math.sin(t * 0.08 * speed) * 10;
      return (
        <AbsoluteFill style={{background: `linear-gradient(${a}deg, ${P.bg2}, ${P.bg} 70%)`}}>
          <AbsoluteFill style={{background: `radial-gradient(ellipse 80% 45% at ${50 + Math.sin(t * 0.2) * 12}% 25%, ${rgba(P.accent, 0.1 * B.intensity)}, transparent 70%)`}} />
        </AbsoluteFill>
      );
    }
  }
};
