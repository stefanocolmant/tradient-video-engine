import React, {createContext, useContext} from 'react';
import {staticFile} from 'remotion';

export type Word = {w: string; s: number; e: number};
export type Scene = {
  index: number;
  id: string;
  type: string;
  line?: string;
  props?: Record<string, any>;
  transition?: string;
  captions?: boolean;
  start: number;
  end: number;
  startSec: number;
  endSec: number;
  words: Word[];
};
export type Style = Record<string, any> & {
  id: string;
  palette: Record<string, string>;
  fonts: Record<string, {family: string; files?: Record<string, string> | null; weight?: number | string; case?: string; tracking?: number; lineHeight?: number}>;
};
export type ReelProps = {
  style: Style;
  timeline: {fps: number; width: number; height: number; durationInFrames: number; scenes: Scene[]; voEnd: number};
  words: Word[];
  audio?: string | null;
  audit?: boolean;
  captions?: boolean;
  title?: string;
};

type Ctx = ReelProps & {W: number; H: number; fps: number};
const C = createContext<Ctx | null>(null);
export const ReelProvider: React.FC<{value: Ctx; children: React.ReactNode}> = ({value, children}) => <C.Provider value={value}>{children}</C.Provider>;
export const useReel = () => {
  const v = useContext(C);
  if (!v) throw new Error('useReel outside <Reel>');
  return v;
};
export const useStyle = () => useReel().style;

// Paths prepared by the render tool are relative to public/; web and data URLs pass through.
export const asset = (p?: string | null) => (!p ? '' : /^(https?:|data:|blob:)/.test(p) ? p : staticFile(p.replace(/^\/+/, '')));

// Where scene content may go, in the 1080 x 1920 frame. When captions are on, the bottom edge sits
// above the caption block so scene text and captions never collide.
export const useLayout = (captionsOn = true) => {
  const {W, H, style} = useReel();
  const L = style.layout;
  const x0 = Math.round(W * L.safeSide), x1 = W - x0;
  const y0 = Math.round(H * L.safeTop);
  const safeBottom = Math.round(H * (1 - L.safeBottom));
  const capTop = Math.round(H * style.captions.position - style.captions.size * 1.4);
  const y1 = captionsOn && style.captions.mode !== 'none' ? Math.min(safeBottom, capTop - 36) : safeBottom;
  return {W, H, x0, x1, y0, y1, w: x1 - x0, h: y1 - y0, cx: W / 2, cy: (y0 + y1) / 2, safeBottom};
};
