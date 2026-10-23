import React from 'react';
import nodes from 'lucide-static/icon-nodes.json';
import {rgba} from '../core/color.mjs';
import {useStyle} from '../reel/context';
import {audit} from './audit';

type Node = [string, Record<string, string>];
const ICONS = nodes as unknown as Record<string, Node[]>;
export const hasIcon = (name?: string) => !!name && !!ICONS[name];
export const iconNodes = (name: string): Node[] | null => ICONS[name] ?? null;

// A Lucide line icon (1,800+ names: npm run icons -- <word>). `draw` 0..1 draws the strokes on.
export const Icon: React.FC<{name: string; size?: number; color?: string; stroke?: number; draw?: number; scene?: string; style?: React.CSSProperties; badge?: boolean; plain?: boolean}> = ({name, size = 120, color, stroke, draw = 1, scene, style: css, badge, plain}) => {
  const s = useStyle();
  const n = ICONS[name];
  if (!n) audit('missing-icon', scene, {name});
  const c = color ?? s.icons.color ?? s.palette.accent2 ?? s.palette.accent;
  const sw = stroke ?? s.icons.stroke;
  const kind = s.icons.kind;
  const glow = kind === 'neon3d' || kind === 'glass3d' ? s.finish.bloom : 0;
  const dash = draw < 1 ? {pathLength: 1, strokeDasharray: 1, strokeDashoffset: 1 - draw} : {};
  const body = (n ?? [['circle', {cx: '12', cy: '12', r: '9'}]]).map(([tag, attrs], i) => {
    const {key: _k, ...rest} = attrs as any;
    return React.createElement(tag, {key: i, ...rest, ...dash});
  });
  const fill = kind === 'duotone' ? rgba(c, 0.18) : 'none';
  const svg = (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={c} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"
      style={{overflow: 'visible', filter: glow > 0 ? `drop-shadow(0 0 ${4 + 10 * glow}px ${rgba(c, 0.55 * Math.min(1, glow))})` : undefined, ...(badge ? {} : css)}}>
      {body}
    </svg>
  );
  if (plain || (!badge && kind !== 'solid')) return svg;
  return (
    <div style={{width: size * 1.7, height: size * 1.7, borderRadius: kind === 'solid' ? size * 0.5 : s.surface.radius, display: 'flex', alignItems: 'center', justifyContent: 'center', background: kind === 'solid' ? c : rgba(c, 0.12), border: kind === 'solid' ? 'none' : `2px solid ${rgba(c, 0.4)}`, ...css}}>
      {kind === 'solid' ? React.cloneElement(svg, {stroke: s.palette.bg}) : svg}
    </div>
  );
};
