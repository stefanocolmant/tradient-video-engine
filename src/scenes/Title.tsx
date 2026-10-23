import React from 'react';
import {Text} from '../ui/Text';
import {Pill} from '../ui/Panel';
import {Icon} from '../ui/Icon';
import {Icon3D} from '../ui/Icon3D';
import {Center, useKit, wordFramesFor, type SceneProps} from './common';

// The hook / title card: a few huge words that land as they are spoken.
export const Title: React.FC<SceneProps> = ({scene, f, dur}) => {
  const k = useKit(scene, f);
  const {p, L, style, fps} = k;
  const text = String(p.text ?? '');
  const synced = wordFramesFor(text, scene, fps);
  // The hook is fully readable in frame one; later titles land word by word as they are said.
  const frames = scene.index === 0 ? synced.map((_, i) => -12 + i * 2) : synced;
  const lastWord = Math.max(0, ...frames);
  const three = style.render3d && (style.icons.kind === 'neon3d' || style.icons.kind === 'glass3d');
  const iconSize = Math.min(L.w * 0.62, L.h * 0.34);
  const size = p.size === 'm' ? 120 : p.size === 'l' ? 170 : 210;
  return (
    <Center L={L} gap={36}>
      {p.icon && (
        <div style={k.en(0, 'pop', 1)}>
          {three ? <Icon3D name={p.icon} size={iconSize} t={k.t} draw={Math.min(1, (f + 8) / 26)} scene={k.id} /> : <Icon name={p.icon} size={iconSize * 0.55} draw={Math.min(1, (f + 6) / 22)} scene={k.id} badge />}
        </div>
      )}
      {p.kicker && <div style={k.en(-2, 'fade')}><Pill>{p.kicker}</Pill></div>}
      <div style={{transform: `scale(${1 + 0.018 * style.motion.idle * Math.sin(k.t * 1.6)})`}}>
        <Text text={text} role="display" width={L.w} maxLines={p.icon ? 2 : 3} max={size * style.type.display} min={Math.max(style.type.min, 64)} wordFrames={frames} f={f} scene={k.id} emphasis={p.emphasis} shadow glow={0.5} />
      </div>
      {p.sub && (
        <div style={k.en(Math.min(lastWord + 6, dur * 0.6), 'fade')}>
          <Text text={p.sub} role="body" width={L.w * 0.9} maxLines={2} max={58 * style.type.body} min={44} color={k.P.muted} f={f} scene={k.id} />
        </div>
      )}
    </Center>
  );
};

// A spoken sentence set big on screen, revealed word by word (captions hide underneath it).
export const Statement: React.FC<SceneProps> = ({scene, f}) => {
  const k = useKit(scene, f);
  const {p, L, style, fps} = k;
  const text = String(p.text ?? '');
  const frames = wordFramesFor(text, scene, fps);
  return (
    <Center L={L} gap={34} style={{alignItems: style.layout.align === 'left' ? 'flex-start' : 'center'}}>
      {p.icon && <div style={k.en(0, 'pop', 2)}><Icon name={p.icon} size={110} scene={k.id} badge /></div>}
      {p.kicker && <div style={k.en(-2, 'fade')}><Pill>{p.kicker}</Pill></div>}
      <Text text={text} role={p.font === 'body' ? 'body' : 'display'} width={L.w} maxLines={5} max={(p.font === 'body' ? 92 : text.split(/\s+/).length <= 8 ? 150 : 124) * style.type.display} min={Math.max(style.type.min, 52)} wordFrames={frames} f={f} scene={k.id} emphasis={p.emphasis} align={style.layout.align === 'left' ? 'left' : 'center'} shadow />
    </Center>
  );
};
