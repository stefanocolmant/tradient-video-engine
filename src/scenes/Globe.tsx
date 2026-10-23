import React, {useMemo} from 'react';
import * as THREE from 'three';
import {useThree} from '@react-three/fiber';
import world from '../assets/world-dots.json';
import {isDark, rgba} from '../core/color.mjs';
import {CableWeb, Dot, Earth, Route, Stars, arc, ll, useEarth, type LL} from '../kit/globe';
import {ThreeCanvas} from '../kit/three-canvas';
import {EASE, prog} from '../ui/anim';
import {beats} from '../core/beats.mjs';
import {Pill} from '../ui/Panel';
import {Text} from '../ui/Text';
import {useKit, type SceneProps} from './common';

type Marker = LL & {label?: string; atFrame?: number};

// Camera that sits `dist` radii out over a lat/lon, looking at the planet's centre.
function camPose(focus: LL, dist: number) {
  const p = ll(focus, dist);
  return p;
}

const GlobeSet: React.FC<{tex: any; t: number; eye: THREE.Vector3; fov: number; markers: Marker[]; arcs: any[]; mAt: number[]; aAt: number[]; f: number; color: string; color2: string; dark: boolean; cables: number}> = ({tex, t, eye, fov, markers, arcs, mAt, aAt, f, color, color2, dark, cables}) => {
  const {camera} = useThree();
  const c = camera as THREE.PerspectiveCamera;
  c.position.copy(eye);
  c.up.set(0, 1, 0);
  c.lookAt(0, 0, 0);
  c.fov = fov;
  c.updateProjectionMatrix();
  const routes = useMemo(() => arcs.map((a) => arc(markers[a.from], markers[a.to], 1.003, 0.12 + 0.1 * Math.min(1, markers[a.from] && markers[a.to] ? ll(markers[a.from]).angleTo(ll(markers[a.to])) : 0))), [arcs, markers]);
  return (
    <>
      {dark && <Stars fr={f} count={5000} opacity={0.8} />}
      <Earth tex={tex} night={dark ? 1 : 0.3} day={dark ? 0.55 : 1.25} />
      {cables > 0 && <CableWeb progress={cables} fr={f} pulses={0.6} color={color2} density={0.55} />}
      {routes.map((pts, i) => (
        <Route key={i} points={pts} color={color} width={0.006} glow={1} head={0.05} progress={prog(f, aAt[i], 20, 'smooth')} />
      ))}
      {markers.map((m, i) => (
        <Dot key={i} at={ll(m, 1.006)} size={0.07 + 0.03 * Math.sin(t * 5 + i)} color={color} opacity={prog(f, mAt[i], 8, 'out')} />
      ))}
    </>
  );
};

// The planet (3D in dark styles) or a dotted world map (flat styles), with places that light up on
// their cue and routes between them.
export const Globe: React.FC<SceneProps> = ({scene, f, dur}) => {
  const k = useKit(scene, f);
  const {p, L, P, style, fps} = k;
  const markers: Marker[] = p.markers ?? [];
  const arcs: any[] = p.arcs ?? [];
  const mAt = beats.markers(p, dur, fps);
  const aAt = arcs.map((a, i) => a.atFrame ?? Math.max(mAt[a.to] ?? 0, mAt[a.from] ?? 0) - 10 + i * 2);
  const dark = isDark(P.bg);
  const use3d = style.render3d && dark && p.flat !== true;
  const titleH = p.title ? 150 : 0;
  const box = {x: 0, y: Math.round(L.y0 + titleH), w: Math.round(k.W), h: Math.round(L.h - titleH)};
  if (use3d) return <Globe3D k={k} box={box} markers={markers} arcs={arcs} mAt={mAt} aAt={aAt} f={f} dur={dur} />;
  // Flat dotted map.
  const mapW = L.w, mapH = mapW / 2;
  const mx = L.x0, my = box.y + (box.h - mapH) / 2;
  const X = (lon: number) => mx + ((lon + 180) / 360) * mapW;
  const Y = (lat: number) => my + ((90 - lat) / 180) * mapH;
  const dotR = (mapW / (world as any).grid[0]) * 0.36;
  return (
    <div style={{position: 'absolute', inset: 0}}>
      {p.title && <div style={{position: 'absolute', left: L.x0, top: L.y0, width: L.w, ...k.en(-3, 'fade')}}><Text text={p.title} role="display" width={L.w} maxLines={2} max={86 * style.type.display} min={48} f={f} scene={k.id} emphasis={p.emphasis} /></div>}
      <svg width={k.W} height={k.H} style={{position: 'absolute', inset: 0, ...k.en(-6, 'fade')}}>
        {(world as any).dots.map(([lon, lat]: number[], i: number) => (
          <circle key={i} cx={X(lon)} cy={Y(lat)} r={dotR} fill={rgba(P.text, 0.22)} />
        ))}
        {arcs.map((a, i) => {
          const A = markers[a.from], B = markers[a.to];
          if (!A || !B) return null;
          const x1 = X(A.lon), y1 = Y(A.lat), x2 = X(B.lon), y2 = Y(B.lat);
          const lift = Math.hypot(x2 - x1, y2 - y1) * 0.35;
          const d = `M ${x1} ${y1} Q ${(x1 + x2) / 2} ${(y1 + y2) / 2 - lift} ${x2} ${y2}`;
          return <path key={i} d={d} fill="none" stroke={P.accent} strokeWidth={5} strokeLinecap="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - prog(f, aAt[i], 20, EASE.smooth)} />;
        })}
        {markers.map((m, i) => {
          const mp = prog(f, mAt[i], 12, 'back');
          return (
            <g key={i} transform={`translate(${X(m.lon)} ${Y(m.lat)})`} opacity={Math.min(1, mp * 1.5)}>
              <circle r={24 + 10 * Math.sin(k.t * 4 + i)} fill="none" stroke={P.accent} strokeWidth={3} opacity={0.5} />
              <circle r={12 * mp} fill={P.accent} />
            </g>
          );
        })}
      </svg>
      {markers.map((m, i) => (m.label ? (
        <div key={i} style={{position: 'absolute', left: X(m.lon), top: Y(m.lat) - 76, transform: `translateX(-50%) scale(${prog(f, mAt[i] + 3, 10, 'back')})`}}>
          <Pill solid size={28}>{m.label}</Pill>
        </div>
      ) : null))}
    </div>
  );
};

const Globe3D: React.FC<{k: any; box: {x: number; y: number; w: number; h: number}; markers: Marker[]; arcs: any[]; mAt: number[]; aAt: number[]; f: number; dur: number}> = ({k, box, markers, arcs, mAt, aAt, f, dur}) => {
  const {p, P, L, style} = k;
  const tex = useEarth();
  const first: LL = p.focus ?? markers[0] ?? {lat: 20, lon: 0};
  const last: LL = p.focusEnd ?? (markers.length > 1 ? markers[markers.length - 1] : first);
  const mv = EASE.smooth(Math.min(1, Math.max(0, f / Math.max(1, dur * 0.85))));
  const lerpLL = {lat: first.lat + (last.lat - first.lat) * mv, lon: first.lon + (last.lon - first.lon) * mv + (p.spin ? f * 0.15 : 0)};
  const dist = (p.zoom ? 4.6 / p.zoom : 4.6) - 0.35 * mv;
  const eye = camPose(lerpLL, dist);
  const fov = 34;
  // Same camera outside the canvas, to place DOM labels over their markers.
  const cam = new THREE.PerspectiveCamera(fov, box.w / box.h, 0.01, 100);
  cam.position.copy(eye); cam.lookAt(0, 0, 0); cam.updateMatrixWorld(); cam.updateProjectionMatrix();
  return (
    <div style={{position: 'absolute', inset: 0}}>
      {p.title && <div style={{position: 'absolute', left: L.x0, top: L.y0, width: L.w, ...k.en(-3, 'fade')}}><Text text={p.title} role="display" width={L.w} maxLines={2} max={86 * style.type.display} min={48} f={f} scene={k.id} emphasis={p.emphasis} /></div>}
      <div style={{position: 'absolute', left: box.x, top: box.y, width: box.w, height: box.h, ...k.en(-8, 'fade')}}>
        <ThreeCanvas width={box.w} height={box.h} gl={{alpha: true, antialias: true}} camera={{fov, near: 0.01, far: 100, position: [0, 0, 3]}} onCreated={({gl}) => gl.setClearColor(0x000000, 0)}>
          <GlobeSet tex={tex} t={k.t} eye={eye} fov={fov} markers={markers} arcs={arcs} mAt={mAt} aAt={aAt} f={f} color={P.accent} color2={P.accent2} dark cables={p.cables ? prog(f, 0, Math.round(dur * 0.8), 'smooth') : 0} />
        </ThreeCanvas>
        {markers.map((m, i) => {
          if (!m.label) return null;
          const v = ll(m, 1.01);
          const facing = v.clone().normalize().dot(eye.clone().normalize()) > 0.15;
          const s = v.clone().project(cam);
          const x = (s.x * 0.5 + 0.5) * box.w, y = (-s.y * 0.5 + 0.5) * box.h;
          return (
            <div key={i} style={{position: 'absolute', left: x, top: y - 70, transform: `translateX(-50%) scale(${prog(f, mAt[i] + 3, 10, 'back')})`, opacity: facing ? 1 : 0}}>
              <Pill solid size={28}>{m.label}</Pill>
            </div>
          );
        })}
      </div>
    </div>
  );
};
