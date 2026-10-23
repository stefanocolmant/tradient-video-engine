import React from 'react';
import {rgba} from '../../core/color.mjs';
import {prog} from '../../ui/anim';
import {Text} from '../../ui/Text';
import {Center, useKit, type SceneProps} from '../common';

// Template for a one-off visual the library doesn't cover. Copy this file, rename the component,
// add it to ./index.ts, then use it in a storyboard as {"type": "custom", "props": {"component": "Example", ...}}.
// Rules: read colors/fonts from the style (k.P, k.style), animate from `f` (the scene's frame; 0 = its
// start, cue frames arrive as props.<name>AtFrame), keep text inside k.L, never use Math.random().
export const Example: React.FC<SceneProps> = ({scene, f}) => {
  const k = useKit(scene, f);
  const grow = prog(f, 0, 24, 'expo');
  return (
    <Center L={k.L}>
      <div style={{width: 420 * grow, height: 420 * grow, borderRadius: '50%', border: `10px solid ${k.P.accent}`, boxShadow: `0 0 60px ${rgba(k.P.accent, 0.5)}`}} />
      <Text text={String(k.p.text ?? 'Custom scene')} role="display" width={k.L.w} maxLines={2} max={110} f={f} appearAt={6} scene={k.id} />
    </Center>
  );
};
