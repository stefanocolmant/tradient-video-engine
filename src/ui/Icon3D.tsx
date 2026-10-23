import React, {useMemo} from 'react';
import * as THREE from 'three';
import {SVGLoader} from 'three/examples/jsm/loaders/SVGLoader.js';
import {RoomEnvironment} from 'three/examples/jsm/environments/RoomEnvironment.js';
import {useThree} from '@react-three/fiber';
import {ThreeCanvas} from '../kit/three-canvas';
import {rgba} from '../core/color.mjs';
import {useReel} from '../reel/context';
import {iconNodes} from './Icon';
import {audit} from './audit';

// Lucide icon -> SVG markup -> glowing tubes along every stroke. 24 icon units become `scale` world units.
function tubes(name: string, radius: number) {
  const n = iconNodes(name) ?? [['circle', {cx: '12', cy: '12', r: '9'}]];
  const inner = n.map(([tag, a]) => `<${tag} ${Object.entries(a).map(([k, v]) => `${k}="${v}"`).join(' ')}/>`).join('');
  const data = new SVGLoader().parse(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">${inner}</svg>`);
  const geos: THREE.BufferGeometry[] = [];
  for (const path of data.paths) {
    for (const sub of path.subPaths) {
      const pts2 = sub.getPoints(40);
      const pts: THREE.Vector3[] = [];
      for (const p of pts2) {
        const v = new THREE.Vector3(p.x - 12, -(p.y - 12), 0);
        if (!pts.length || pts[pts.length - 1].distanceTo(v) > 0.02) pts.push(v);
      }
      if (pts.length < 2) continue;
      const closed = pts[0].distanceTo(pts[pts.length - 1]) < 0.05;
      if (closed) pts.pop();
      const curve = new THREE.CatmullRomCurve3(pts, closed, 'catmullrom', 0.05);
      const len = curve.getLength();
      geos.push(new THREE.TubeGeometry(curve, Math.max(12, Math.round(len * 10)), radius, 10, closed));
    }
  }
  return geos;
}

const IconMesh: React.FC<{name: string; color: string; kind: string; draw: number; spin: number; t: number; scale: number; bloom: number}> = ({name, color, kind, draw, spin, t, scale, bloom}) => {
  const {scene, gl} = useThree();
  const geos = useMemo(() => tubes(name, kind === 'glass3d' ? 1.05 : 0.95), [name, kind]);
  const env = useMemo(() => {
    const pm = new THREE.PMREMGenerator(gl);
    const tex = pm.fromScene(new RoomEnvironment(), 0.04).texture;
    pm.dispose();
    return tex;
  }, [gl]);
  scene.environment = env;
  const mat = useMemo(() => {
    const c = new THREE.Color(color);
    if (kind === 'glass3d') return new THREE.MeshPhysicalMaterial({color: c, metalness: 0.1, roughness: 0.08, transmission: 0.6, thickness: 1.2, clearcoat: 1, emissive: c, emissiveIntensity: 0.35 * bloom, envMapIntensity: 1.4});
    return new THREE.MeshStandardMaterial({color: c.clone().multiplyScalar(0.6), metalness: 0.2, roughness: 0.35, emissive: c, emissiveIntensity: 1.1 + 1.4 * bloom, envMapIntensity: 0.6});
  }, [color, kind, bloom]);
  return (
    <group scale={scale} rotation={[Math.sin(t * 0.6) * 0.12, Math.sin(t * 0.8) * 0.35 * spin, 0]} position={[0, Math.sin(t * 1.2) * 0.08, 0]}>
      {geos.map((g, i) => {
        const count = g.index ? g.index.count : g.attributes.position.count;
        const share = Math.max(0, Math.min(1, draw * geos.length - i * 0.6));
        g.setDrawRange(0, Math.floor(count * Math.min(1, share * 1.15)));
        return <mesh key={i} geometry={g} material={mat} />;
      })}
    </group>
  );
};

// The 3D hero icon. Works in any style; luminous styles get emissive tubes, others a glossy finish.
export const Icon3D: React.FC<{name: string; size: number; color?: string; draw?: number; t: number; spin?: number; scene?: string}> = ({name, size: rawSize, color, draw = 1, t, spin = 1, scene}) => {
  const {style} = useReel();
  const size = Math.max(16, Math.round(rawSize)); // the canvas needs whole pixels
  if (!iconNodes(name)) audit('missing-icon', scene, {name});
  const c = color ?? style.icons.color ?? style.palette.accent2;
  const kind = style.icons.kind === 'glass3d' ? 'glass3d' : 'neon3d';
  const bloom = style.finish.bloom;
  return (
    <div style={{width: size, height: size, filter: `drop-shadow(0 0 ${10 + 26 * bloom}px ${rgba(c, 0.5 * Math.min(1, bloom + 0.2))})`}}>
      <ThreeCanvas width={size} height={size} gl={{alpha: true, antialias: true}} camera={{position: [0, 0, 46], fov: 32, near: 0.1, far: 200}} onCreated={({gl}) => { gl.setClearColor(0x000000, 0); gl.toneMapping = THREE.ACESFilmicToneMapping; gl.toneMappingExposure = 1.05; }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[6, 10, 12]} intensity={1.6} />
        <directionalLight position={[-10, -4, -6]} intensity={0.8} color={c} />
        <IconMesh name={name} color={c} kind={kind} draw={draw} spin={spin} t={t} scale={0.88} bloom={bloom} />
      </ThreeCanvas>
    </div>
  );
};
