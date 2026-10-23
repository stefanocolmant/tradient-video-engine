import React from 'react';
import {useCurrentFrame} from 'remotion';
import {rgba, isDark} from '../core/color.mjs';
import {useStyle} from '../reel/context';

// A card in the style's surface language: glass, solid, outline or none.
export const Panel: React.FC<{children?: React.ReactNode; style?: React.CSSProperties; active?: number; tone?: 'surface' | 'accent' | 'positive' | 'negative'; pad?: number}> = ({children, style: css, active = 0, tone = 'surface', pad}) => {
  const s = useStyle();
  const frame = useCurrentFrame();
  const P = s.palette, S = s.surface;
  const dark = isDark(P.bg);
  // A slow highlight that crosses glass panels now and then, like light catching a screen.
  const cycle = 96, ph = ((frame + 37) % cycle) / cycle;
  const glint = S.kind === 'glass' && s.finish.bloom > 0 ? Math.max(0, 1 - Math.abs(ph * 2.4 - 1.2) * 1.4) : 0;
  const toneColor = tone === 'surface' ? P.accent : P[tone];
  const border = S.border > 0 || S.kind === 'outline' || S.kind === 'glass' ? Math.max(S.border, S.kind === 'glass' ? 1.5 : 2) : 0;
  const borderColor = S.borderColor ?? (S.kind === 'glass' ? rgba(dark ? '#BFD4FF' : '#000000', dark ? 0.28 : 0.12) : P.line);
  const activeBorder = active > 0 ? rgba(toneColor, 0.35 + 0.55 * active) : borderColor;
  let background = 'transparent';
  if (S.kind === 'glass') background = `linear-gradient(160deg, ${rgba(P.surface2, 0.78 * S.opacity)}, ${rgba(P.surface, 0.62 * S.opacity)})`;
  // Tone colours the border and a light tint when the card is active; the fill stays the surface so text always reads.
  else if (S.kind === 'solid') background = active > 0 && tone !== 'surface' ? `linear-gradient(${rgba(toneColor, 0.1 * active)}, ${rgba(toneColor, 0.1 * active)}), ${P.surface}` : P.surface;
  const shadow =
    S.shadow === 'glow' ? `0 0 ${24 + 40 * active}px ${rgba(active > 0 ? toneColor : P.glow, 0.12 + 0.35 * active)}, inset 0 1px 0 ${rgba('#FFFFFF', dark ? 0.08 : 0.5)}`
    : S.shadow === 'soft' ? `0 18px 50px ${rgba('#000000', dark ? 0.45 : 0.12)}, 0 2px 8px ${rgba('#000000', dark ? 0.3 : 0.06)}`
    : S.shadow === 'hard' ? `10px 10px 0 ${dark ? rgba('#000000', 0.6) : P.text}`
    : 'none';
  return (
    <div
      style={{
        position: 'relative',
        borderRadius: S.radius,
        background: S.kind === 'none' ? 'transparent' : background,
        border: border ? `${border}px solid ${activeBorder}` : 'none',
        boxShadow: S.kind === 'none' ? 'none' : shadow,
        backdropFilter: S.kind === 'glass' && S.blur ? `blur(${S.blur}px)` : undefined,
        padding: pad ?? 36 * s.layout.density,
        boxSizing: 'border-box',
        ...css,
      }}
    >
      {glint > 0 && <div style={{position: 'absolute', inset: 0, borderRadius: S.radius, overflow: 'hidden', pointerEvents: 'none'}}><div style={{position: 'absolute', top: '-40%', bottom: '-40%', width: '28%', left: `${-40 + ph * 180}%`, transform: 'rotate(18deg)', background: `linear-gradient(90deg, transparent, ${rgba('#FFFFFF', 0.07 * glint)}, transparent)`}} /></div>}
      {children}
    </div>
  );
};

// Small label pill used for kickers, tags and callouts.
export const Pill: React.FC<{children: React.ReactNode; color?: string; solid?: boolean; style?: React.CSSProperties; size?: number}> = ({children, color, solid, style: css, size = 38}) => {
  const s = useStyle();
  const c = color ?? s.palette.accent;
  const f = s.fonts.body;
  return (
    <div style={{display: 'inline-flex', alignItems: 'center', gap: 10, padding: `${size * 0.32}px ${size * 0.62}px`, borderRadius: 999, fontFamily: `"${f.family}"`, fontWeight: 700, fontSize: size, letterSpacing: '0.06em', textTransform: 'uppercase', color: solid ? s.palette.bg : c, background: solid ? c : rgba(c, 0.14), border: `2px solid ${rgba(c, solid ? 1 : 0.5)}`, whiteSpace: 'nowrap', ...css}}>
      {children}
    </div>
  );
};
