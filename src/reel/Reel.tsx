import React, {useEffect, useState} from 'react';
import {AbsoluteFill, Audio, Sequence, continueRender, delayRender, interpolate, useCurrentFrame} from 'remotion';
import {SCENES} from '../scenes/registry';
import {captionsOffFor, firstTextFrame} from '../scenes/common';
import {setAudit, audit} from '../ui/audit';
import {EASE, clamp01} from '../ui/anim';
import {Background} from './Background';
import {Captions} from './Captions';
import {Finish} from './Finish';
import {ReelProvider, asset, useReel, type ReelProps, type Scene} from './context';

// Load every font the style names before the first frame is captured.
export function useFonts(style: ReelProps['style']) {
  const [ready, setReady] = useState(false);
  const [handle] = useState(() => delayRender('fonts'));
  useEffect(() => {
    const jobs: Promise<unknown>[] = [];
    const done = new Set<string>();
    for (const role of Object.keys(style.fonts)) {
      const spec = style.fonts[role];
      for (const [w, file] of Object.entries(spec.files ?? {})) {
        const k = `${spec.family}|${w}`;
        if (done.has(k) || !file) continue;
        done.add(k);
        const face = new FontFace(spec.family, `url(${asset(file)})`, {weight: String(w)});
        jobs.push(face.load().then((ff) => document.fonts.add(ff)).catch((e) => console.error('font failed', spec.family, w, String(e))));
      }
    }
    Promise.all(jobs).then(() => document.fonts.ready).then(() => { setReady(true); continueRender(handle); });
  }, [style, handle]);
  return ready;
}

const SceneSlot: React.FC<{scene: Scene; next?: Scene; prev?: Scene; tf: number; fps: number}> = ({scene, next, tf, fps}) => {
  const C = SCENES[scene.type];
  const inT = scene.index === 0 ? 0 : Math.round(transitionFrames(scene, tf));
  const outT = next ? Math.round(transitionFrames(next, tf)) : 0;
  const from = scene.start - Math.ceil(inT / 2);
  const to = scene.end + Math.floor(outT / 2);
  if (!C) audit('unknown-scene-type', scene.id, {type: scene.type});
  return (
    <Sequence from={from} durationInFrames={Math.max(1, to - from)} layout="none" name={`${scene.id} ${scene.type}`}>
      <SceneFrame scene={scene} next={next} offset={scene.start - from} inT={inT} outT={outT} fps={fps}>
        {(f) => (C ? <C scene={scene} f={f} dur={scene.end - scene.start} /> : null)}
      </SceneFrame>
    </Sequence>
  );
};

const transitionFrames = (scene: Scene, tf: number) => {
  const kind = scene.transition;
  if (kind === 'cut') return 0;
  return tf;
};

const SceneFrame: React.FC<{scene: Scene; next?: Scene; offset: number; inT: number; outT: number; fps: number; children: (f: number) => React.ReactNode}> = ({scene, next, offset, inT, outT, fps, children}) => {
  const {style, W} = useReel();
  const frame = useCurrentFrame();
  // Local scene frame: 0 = the scene's start. The opening scene runs a little ahead so its main
  // element is already on screen in frame one.
  const f = frame - offset + (scene.index === 0 ? Math.round(0.35 * fps) : 0);
  const dur = scene.end - scene.start;
  const kindIn = scene.transition ?? style.motion.transition;
  const kindOut = next ? next.transition ?? style.motion.transition : 'none';
  const e = inT > 0 ? clamp01((frame - offset + inT / 2) / inT) : 1; // 0..1 entering
  const x = outT > 0 ? clamp01((frame - offset - dur + outT / 2) / outT) : 0; // 0..1 leaving
  const ein = EASE.smooth(e), xout = EASE.smooth(x);
  const css: React.CSSProperties = {};
  let opacity = 1, tx = 0, ty = 0, sc = 1, blur = 0, clip: string | undefined;
  if (e < 1) {
    if (kindIn === 'fade' || kindIn === 'flash') opacity *= ein;
    if (kindIn === 'slide') ty += (1 - ein) * 1920 * 0.35, (opacity *= ein);
    if (kindIn === 'zoom') (sc *= 0.82 + 0.18 * ein), (opacity *= ein), (blur += (1 - ein) * 14);
    if (kindIn === 'whip') (tx += (1 - ein) * W), (blur += (1 - ein) * 22);
    if (kindIn === 'blur') (blur += (1 - ein) * 24), (opacity *= ein);
    if (kindIn === 'wipe') clip = `inset(${(1 - ein) * 100}% 0 0 0)`;
  }
  if (x > 0) {
    if (kindOut === 'fade' || kindOut === 'flash' || kindOut === 'blur') opacity *= 1 - xout;
    if (kindOut === 'slide') (ty -= xout * 1920 * 0.18), (opacity *= 1 - xout);
    if (kindOut === 'zoom') (sc *= 1 + 0.35 * xout), (opacity *= 1 - xout), (blur += xout * 14);
    if (kindOut === 'whip') (tx -= xout * W), (blur += xout * 22);
    if (kindOut === 'blur') blur += xout * 24;
  }
  // Slow camera push across the scene keeps held layouts alive.
  const push = 1 + 0.045 * style.motion.camera * interpolate(f, [0, Math.max(1, dur)], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const tilt = style.motion.tilt ?? 0;
  const tt = (frame - offset) / fps + scene.index * 1.7;
  tx += Math.sin(tt * 0.42) * 14 * style.motion.camera;
  ty += Math.cos(tt * 0.33) * 12 * style.motion.camera;
  const rx = tilt * (2.2 * Math.sin(tt * 0.45)), ry = tilt * (3.2 * Math.sin(tt * 0.33 + 1));
  css.transform = `translate(${tx}px, ${ty}px) perspective(2400px) rotateX(${rx}deg) rotateY(${ry}deg) scale(${sc * push})`;
  css.opacity = opacity;
  if (blur > 0.3) css.filter = `blur(${blur}px)`;
  if (clip) css.clipPath = clip;
  return <AbsoluteFill style={css}>{children(f)}</AbsoluteFill>;
};

const Flash: React.FC<{scenes: Scene[]; style: ReelProps['style']}> = ({scenes, style}) => {
  const f = useCurrentFrame();
  const s = scenes.find((x) => x.index > 0 && (x.transition ?? style.motion.transition) === 'flash' && f >= x.start - 2 && f < x.start + 5);
  if (!s) return null;
  const k = f - s.start;
  return <AbsoluteFill style={{background: style.palette.text, opacity: k < 0 ? 0.4 : Math.max(0, 0.85 - k * 0.2), pointerEvents: 'none'}} />;
};

export const Reel: React.FC<ReelProps> = (props) => {
  const {style, timeline, words} = props;
  setAudit(!!props.audit);
  const ready = useFonts(style);
  const W = timeline.width, H = timeline.height, fps = timeline.fps;
  const scenes = timeline.scenes;
  const off = new Map(scenes.filter(captionsOffFor).map((s) => [s.index, s.start + firstTextFrame(s, fps) - 2]));
  const hidden = (frame: number) => {
    if (props.captions === false) return true;
    const s = scenes.find((x) => frame >= x.start && frame < x.end);
    return !!s && off.has(s.index) && frame >= (off.get(s.index) as number);
  };
  const tf = style.motion.transitionFrames;
  return (
    <ReelProvider value={{...props, W, H, fps}}>
      <AbsoluteFill style={{background: style.palette.bg, overflow: 'hidden'}}>
        {ready && (
          <>
            <Background />
            {scenes.map((s, i) => (
              <SceneSlot key={s.id + i} scene={s} next={scenes[i + 1]} prev={scenes[i - 1]} tf={tf} fps={fps} />
            ))}
            <Flash scenes={scenes} style={style} />
            <Finish />
            <Captions hidden={hidden} />
          </>
        )}
        {props.audio && <Audio src={asset(props.audio)} />}
      </AbsoluteFill>
    </ReelProvider>
  );
};
