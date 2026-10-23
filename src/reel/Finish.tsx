import React from 'react';
import {AbsoluteFill, random, useCurrentFrame} from 'remotion';
import {rgba} from '../core/color.mjs';
import {useReel} from './context';
import {useNoise} from './Background';

// The look laid over everything: vignette, film grain, halftone, scanlines and a color tint.
// Grain moves every frame so dark gradients never band after the platform recompresses.
export const Finish: React.FC = () => {
  const {style, W, H} = useReel();
  const f = useCurrentFrame();
  const F = style.finish;
  const grain = useNoise(512, 1, 'grain');
  return (
    <AbsoluteFill style={{pointerEvents: 'none'}}>
      {F.tint && F.tintAmount > 0 && <AbsoluteFill style={{background: F.tint, mixBlendMode: 'soft-light', opacity: F.tintAmount}} />}
      {F.halftone > 0 && (
        <AbsoluteFill style={{backgroundImage: `radial-gradient(${rgba('#000000', 0.55)} 1.2px, transparent 1.8px)`, backgroundSize: '7px 7px', mixBlendMode: 'multiply', opacity: F.halftone * 0.5}} />
      )}
      {F.scanlines > 0 && (
        <AbsoluteFill style={{backgroundImage: `repeating-linear-gradient(0deg, ${rgba('#000000', 0.5)} 0px, ${rgba('#000000', 0.5)} 1px, transparent 2px, transparent 4px)`, opacity: F.scanlines * 0.45}} />
      )}
      {F.vignette > 0 && (
        <AbsoluteFill style={{background: `radial-gradient(ellipse 80% 66% at 50% 46%, transparent 52%, ${rgba('#000000', 0.62 * F.vignette)} 100%)`}} />
      )}
      {F.grain > 0 && (
        <AbsoluteFill style={{backgroundImage: `url(${grain})`, backgroundSize: '512px 512px', backgroundPosition: `${Math.floor(random(`gx${f}`) * 512)}px ${Math.floor(random(`gy${f}`) * 512)}px`, mixBlendMode: 'overlay', opacity: Math.min(0.6, F.grain * 1.6), width: W, height: H}} />
      )}
    </AbsoluteFill>
  );
};
