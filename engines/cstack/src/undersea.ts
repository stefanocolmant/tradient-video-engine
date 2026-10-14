import * as T from 'three';
import {rock} from './kit/realism/shapes';
import {fbm2, GLSL_NOISE} from './kit/realism/noise';
import {patch, weather} from './kit/realism/shade';
import {canvasTex, rand, glow, step, mix, ease} from './kit/objects';

// The camera tracks a physical pulse. Screen anchors were measured in the source,
// separately from the material/lighting work; this is not an arbitrary orbit.
export const UNDERSEA = {
  seed: 620, cableRadius: 0.16, cameraHeight: 1.32, cameraSide: 2.64,
  pulseDistance: 32, fov: 54, referenceSize: [720, 1280],
};
const height = (x: number, z: number, bankLimit = Infinity) => {
  const bank = Math.max(0, Math.abs(x) - 8);
  const rise = bank * bank * .0075 * (1 + .18 * Math.sin(z * .09));
  return (Number.isFinite(bankLimit) ? bankLimit * Math.tanh(rise / bankLimit) : rise)
    + .022 * Math.sin(z * 9 + Math.sin(x * .3) * 2)
    + .025 * fbm2(x * .4, z * .3, UNDERSEA.seed, 3) - .025;
};

export type UnderseaTiming = {accelerate: number; accelerationEnd: number; pitchAt: number; pitchEnd: number};
export function underseaScene(timing: UnderseaTiming = {accelerate:2.5,accelerationEnd:4,pitchAt:2.5,pitchEnd:3.25}, profile: {bankLimit?: number; rippleStrength?: number; repeaterAt?: number} = {}) {
  const root = new T.Group();
  const terrain = new T.PlaneGeometry(180, 340, 320, 560);
  terrain.rotateX(-Math.PI / 2);
  const p = terrain.attributes.position;
  for (let i = 0; i < p.count; i++) p.setY(i, height(p.getX(i), p.getZ(i), profile.bankLimit));
  terrain.computeVertexNormals();
  const sand = canvasTex(1024, 1024, (ctx: CanvasRenderingContext2D, w: number, h: number) => {
    const data = ctx.createImageData(w, h);
    for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
      const k = (y * w + x) * 4;
      const ripple = Math.sin(y * .23 + Math.sin(x * .027) * 1.1);
      const n = 112 + ripple * 42 + (rand(x + y * w) - .5) * 40;
      data.data[k] = data.data[k + 1] = data.data[k + 2] = n;
      data.data[k + 3] = 255;
    }
    ctx.putImageData(data, 0, 0);
  });
  sand.wrapS = sand.wrapT = T.RepeatWrapping;
  sand.repeat.set(36, 68);
  sand.colorSpace = T.NoColorSpace;
  const seabed = new T.Mesh(terrain, new T.MeshPhysicalMaterial({
    color: 0x2c3855, metalness: 0, roughness: .94, specularIntensity: .18,
    bumpMap: sand, bumpScale: .075,
  }));
  seabed.material.onBeforeCompile = shader => {
    shader.vertexShader = 'varying vec3 vSandWorld;\n' + shader.vertexShader;
    shader.vertexShader = shader.vertexShader.replace('#include <begin_vertex>', '#include <begin_vertex>\nvSandWorld=(modelMatrix*vec4(position,1.)).xyz;');
    shader.fragmentShader = 'varying vec3 vSandWorld;\n' + GLSL_NOISE + shader.fragmentShader;
    shader.fragmentShader = shader.fragmentShader.replace('#include <color_fragment>', '#include <color_fragment>\ndiffuseColor.rgb*=1.+fbmAA(vSandWorld*1.4,length(fwidth(vSandWorld*1.4)))*.65;');
    shader.fragmentShader = shader.fragmentShader.replace('#include <normal_fragment_maps>', `#include <normal_fragment_maps>
      float terrainNoise=fbmAA(vSandWorld*.8,length(fwidth(vSandWorld*.8)));
      float ripplePhase=vSandWorld.z*16.0+sin(vSandWorld.x*.62)*1.2+terrainNoise*3.5;
      float rippleAA=1.-smoothstep(.3,2.,fwidth(ripplePhase));
      float slope=cos(ripplePhase)*(.34+.32*rzNoise(vSandWorld*.5))*rippleAA*${(profile.rippleStrength ?? 1).toFixed(3)};
      normal=normalize(normal+mat3(viewMatrix)*vec3(-cos(vSandWorld.x*.62)*slope*.046,0.,-slope));
    `);
  };
  seabed.material.customProgramCacheKey = () => `undersea-sand-ripple-${profile.rippleStrength ?? 1}`;
  seabed.receiveShadow = true;
  root.add(seabed);

  // CStack weather() supplies the albedo and multiplies this tint. A second
  // dark base color crushed all lit rock detail in the rendered proof.
  const stone = new T.MeshPhysicalMaterial({color: 0xffffff, roughness: .93, metalness: 0, specularIntensity: .12});
  patch(stone, weather({base:'#252c39',vary:.55,scale:.23,bump:.014,bumpScale:.06,rough:[.72,.94],chip:{color:'#485976',amount:.25},wet:.12}));
  const dummy = new T.Object3D();
  for (let variant = 0; variant < 8; variant++) {
    const stones = new T.InstancedMesh(rock({seed: 71 + variant, detail: 2, cuts: 7}), stone, 340);
    stones.castShadow = stones.receiveShadow = true;
    for (let j = 0; j < 340; j++) {
      const i = j + variant * 340;
      let x = (rand(i + 723) - .5) * 110, z = (rand(i + 145) - .66) * 230;
      if (Math.abs(x) < .35) x += .6;
      const r = .055 + Math.pow(rand(i + 472), 3.3) * .58;
      dummy.position.set(x, height(x, z, profile.bankLimit) + r * .18, z);
      dummy.rotation.set(rand(i) * .3, rand(i + 6) * Math.PI * 2, rand(i + 8) * .3);
      dummy.scale.set(r * (1 + rand(i + 11) * .5), r, r);
      dummy.updateMatrix();
      stones.setMatrixAt(j, dummy.matrix);
    }
    root.add(stones);
  }

  const nearStones = new T.InstancedMesh(rock({seed: 615, detail: 3, cuts: 4}), stone, 1600);
  nearStones.castShadow = nearStones.receiveShadow = true;
  for(let i=0;i<1600;i++) {
    let x=(rand(i+7231)-.5)*26,z=35-rand(i+6244)*135;
    if(Math.abs(x)<.3)x+=.6;
    const r=.025+rand(i+5253)**4*.055;
    dummy.position.set(x,height(x,z,profile.bankLimit)+r*.18,z);
    dummy.rotation.set(rand(i)*.3,rand(i+4)*6.28,rand(i+8)*.3);
    dummy.scale.set(r*1.4,r*.75,r);dummy.updateMatrix();nearStones.setMatrixAt(i,dummy.matrix);
  }
  root.add(nearStones);
  // Large stones are compositional landmarks, not random clutter. These centres
  // and diameters are measured at source time 3.4s; positions remain fixed in world.
  const calibration = new T.PerspectiveCamera(54, 720/1280, .01, 1500);
  const cz = 12 - (3.2*3.4 + 9*ease(step(3.4,timing.accelerate,timing.accelerationEnd)));
  calibration.position.set(2.64,1.32,cz);calibration.lookAt(0,.34,cz-32);
  calibration.setViewOffset(720,1280,21.6,49.92,720,1280);calibration.updateProjectionMatrix();calibration.updateMatrixWorld();
  const anchors = [[537,788,110],[669,719,107],[546,978,102],[565,1077,94],[203,962,32]];
  anchors.forEach(([px,py,width],i) => {
    const ray=new T.Vector3(px/720*2-1,1-(py+width*.18)/1280*2,.5).unproject(calibration).sub(calibration.position).normalize();
    const distance=-calibration.position.y/ray.y;
    const at=calibration.position.clone().addScaledVector(ray,distance);
    const r=width*distance*2*Math.tan(54*Math.PI/360)/1280/1.7*.75;
    const hero=new T.Mesh(rock({seed:82+i,detail:4,cuts:5,rough:.19,size:[r*1.2,r*.8,r]}),stone);
    hero.position.set(at.x,height(at.x,at.z,profile.bankLimit)+r*.18,at.z);hero.rotation.y=.3+i*.72;
    hero.castShadow=hero.receiveShadow=true;root.add(hero);
  });

  // Closely wound steel armour, with a dark valley between adjacent wires.
  const cable = new T.Group(); root.add(cable);
  const cableY = (z: number) => .17 + (profile.repeaterAt === undefined ? 0 : .47 * Math.exp(-Math.pow((z-profile.repeaterAt)/5,6)));
  const core = new T.Mesh<T.BufferGeometry, T.MeshStandardMaterial>(new T.CylinderGeometry(.145, .145, 360, 24),
    new T.MeshStandardMaterial({color: 0x192135, metalness: .85, roughness: .40}));
  if(profile.repeaterAt === undefined){core.rotation.x = Math.PI / 2; core.position.set(0, .17, -40);}
  else {const centres=Array.from({length:721},(_,i)=>{const z=140-i*.5;return new T.Vector3(0,cableY(z),z)});core.geometry.dispose();core.geometry=new T.TubeGeometry(new T.CatmullRomCurve3(centres),720,.145,24,false);}
  core.castShadow = core.receiveShadow = true; cable.add(core);
  const wireMaterial = new T.MeshStandardMaterial({color: 0xc2cde1, metalness: .91, roughness: .27, envMapIntensity: 3.5});
  for (let strand = 0; strand < 12; strand++) {
    const points: T.Vector3[] = [];
    for (let i = 0; i <= 6000; i++) {
      const z = 80 - i * .05, a = z * 1.5 + strand * Math.PI * 2 / 12;
      points.push(new T.Vector3(Math.cos(a) * .149, cableY(z) + Math.sin(a) * .149, z));
    }
    const wire = new T.Mesh(new T.TubeGeometry(new T.CatmullRomCurve3(points), 6000, .034, 10, false), wireMaterial);
    wire.castShadow = wire.receiveShadow = true; cable.add(wire);
  }

  const hemi = new T.HemisphereLight(0x5975d4, 0x020308, .78); root.add(hemi);
  const moon = new T.DirectionalLight(0x546bf5, 3.2);
  moon.position.set(-9, 15, -12); moon.target.position.set(0, 0, -25);
  moon.castShadow = true;
  moon.shadow.mapSize.set(2048, 2048);
  Object.assign(moon.shadow.camera, {left: -20, right: 20, top: 24, bottom: -24, near: .1, far: 90});
  moon.shadow.bias = -.00025; moon.shadow.normalBias = .018;
  root.add(moon, moon.target);
  const lowRim = new T.DirectionalLight(0x1129ad, 1.7);
  lowRim.position.set(4, 2, -45); root.add(lowRim);

  const head = new T.Group(); root.add(head);
  const aura = glow(head, 4.6, 0xffc553);
  aura.material.opacity = .82;
  const flare = glow(head, 1, 0xffd270); flare.scale.set(12, .20, 1);
  const hot = glow(head, 1.65, 0xfff3c6);
  const point = new T.PointLight(0xffc15b, 75, 18, 2); head.add(point);
  const white = new T.Mesh(new T.SphereGeometry(.11, 16, 12), new T.MeshBasicMaterial({color: 0xfff9e3})); head.add(white);

  // Screen-space soft particles are not used as replacement geometry: near dust
  // is soft, far dust is small and dim, with actual parallax as the camera travels.
  const dustGroup = new T.Group(); root.add(dustGroup);
  const flecks: {o: T.Sprite; x: number; y: number; z: number}[] = [];
  for (let i = 0; i < 520; i++) {
    const o = glow(dustGroup, .12 + rand(i + 209) ** 4 * .36, 0xadb8ce);
    o.material.rotation = rand(i+301)*2.0-.8;
    o.scale.x *= .45;
    o.material.opacity = .24 + rand(i + 95) * .46;
    const x = (rand(i + 372) - .5) * 55, y = rand(i + 564) * 20, z = 20 - rand(i + 912) * 130;
    o.position.set(x, y, z); flecks.push({o, x, y, z});
  }
  const sky = new T.Mesh(new T.SphereGeometry(600, 32, 24), new T.ShaderMaterial({
    side: T.BackSide, depthWrite: false,
    vertexShader: 'varying vec3 direction;void main(){direction=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
    fragmentShader: 'varying vec3 direction;void main(){float h=normalize(direction).y;float band=exp(-pow((h+.015)*5.,2.));vec3 c=mix(vec3(.012,.038,.050),vec3(.044,.08,.27),band*.8);gl_FragColor=vec4(c,1.);}',
    toneMapped: false,
  })); root.add(sky);
  const advance = (t: number) => 3.2 * t + 9 * ease(step(t, timing.accelerate, timing.accelerationEnd));
  return {
    root, pulse: head, pulseLight: point, environmentIntensity: .13, fogDensity: .004, fogColor: 0x020918,
    update(t: number) {
      const z = 12 - advance(t);
      head.position.set(0, .34, z - UNDERSEA.pulseDistance);
      const shadowZ = Math.round(z / (40 / 2048)) * (40 / 2048);
      moon.position.set(-9, 15, shadowZ - 8); moon.target.position.set(0, 0, shadowZ - 23);
      flecks.forEach(({o, x, y, z: zz}, i) => o.position.set(x + Math.sin(t * .17 + i) * .07, y + t * .02, zz));
      hot.material.opacity = .94 + .06 * Math.sin(t * 27);
    },
    camera(t: number) {
      const z = 12 - advance(t);
      const q = ease(step(t, timing.pitchAt, timing.pitchEnd));
      const px = mix(.447, .470, q), py = mix(.527, .461, q);
      return {
        eye: [UNDERSEA.cameraSide, UNDERSEA.cameraHeight, z], look: [0, .34, z - UNDERSEA.pulseDistance],
        fov: UNDERSEA.fov, offset: [(0.5 - px) * 720, (0.5 - py) * 1280],
      };
    },
  };
}
