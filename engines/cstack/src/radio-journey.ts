// @ts-nocheck
// One radio world, preserving the phone view and shared tower/ground clock.
import {T,group,step,ease,mix} from './kit/objects';
import {sendingRadio} from './phone-radio';
import {towerLight} from './tower-light';

export function radioJourney(kind,role='reference'){
 const phoneStage=sendingRadio(role,true),tower=towerLight('tower',role),root=new T.Group();
 const turn=new T.Quaternion().setFromAxisAngle(new T.Vector3(0,1,0),-Math.PI/2),undo=turn.clone().invert();
 const offset=new T.Vector3(3,-9,-75).applyQuaternion(turn).negate();
 const transform=a=>new T.Vector3(...a).applyQuaternion(turn).add(offset).toArray();
 const mapCamera=c=>({...c,eye:transform(c.eye),look:transform(c.look)});
 // Directional targets must travel with a rigidly transformed light rig.
 phoneStage.root.traverse(o=>{if(o.isDirectionalLight&&!o.target.parent)phoneStage.root.add(o.target);});
 phoneStage.root.position.copy(offset);phoneStage.root.quaternion.copy(turn);root.add(phoneStage.root,tower.root);
 const originalPhone=phoneStage.phone,pose=new T.Quaternion().setFromEuler(new T.Euler(...originalPhone.rotation)).premultiply(turn);
 const phone={...originalPhone,position:transform(originalPhone.position),rotation:new T.Euler().setFromQuaternion(pose).toArray().slice(0,3)};
 const phoneSky=phoneStage.root.children.find(o=>o.geometry?.parameters?.radius===650),towerSky=tower.root.children.find(o=>o.geometry?.parameters?.radius===650);
 towerSky.visible=false;phoneSky.material.uniforms.arrivalBlend={value:0};
 phoneSky.material.fragmentShader='uniform float arrivalBlend;'+phoneSky.material.fragmentShader.replace('vec3(.045,.065,.170)','mix(vec3(.045,.065,.170),vec3(.035,.045,.09),arrivalBlend)').replace('vec3(.045,.075,.21)','mix(vec3(.045,.075,.21),vec3(.045,.065,.18),arrivalBlend)');
 // Hemisphere direction uses world position, unlike ordinary directional targets.
 const hemi=phoneStage.root.children.find(o=>o.isHemisphereLight);hemi.position.copy(new T.Vector3(0,1,0).sub(offset).applyQuaternion(undo));
 const lights=g=>{const a=[];g.traverse(o=>{if(o.isLight)a.push({o,intensity:o.intensity})});return a};
 const earlyLights=lights(phoneStage.root),lateLights=lights(tower.root);
 const approachStart=4.5,approachEnd=5.5;
 const phoneCamera=t=>mapCamera(phoneStage.camera(t<=3.1?t:3.1+(t-3.1)*.6));
 const start=phoneCamera(approachStart);
 const path=new T.CubicBezierCurve3(new T.Vector3(...start.eye),new T.Vector3(-35,9,1),new T.Vector3(-6,4,23),new T.Vector3(3.6,4,20));
 const local=t=>t+(kind==='tower'?51.333-45.167:kind==='ground'?54.3-45.167:0);
 function camera(t){const tt=local(t);if(tt<=approachStart)return phoneCamera(tt);if(tt>=approachEnd)return tower.camera(tt-(51.333-45.167));const q=ease(step(tt,approachStart,approachEnd)),look=start.look.map((v,i)=>mix(v,[0,12.8,0][i],ease(step(tt,approachStart,4.93))));return{eye:path.getPoint(q).toArray(),look,fov:role==='cstack'?47:46};}
 const built={root,phone,fogColor:0x050d25,fogDensity:.0025,environmentIntensity:.2,camera,update(t){
  const tt=local(t),q=ease(step(tt,4.1,5.5));
  for(const l of [...earlyLights,...lateLights])l.o.intensity=l.intensity;
  phoneStage.update(tt);tower.update(tt-(51.333-45.167));
  const cam=camera(t);tower.arrivalParts.title.quaternion.setFromRotationMatrix(new T.Matrix4().lookAt(new T.Vector3(...cam.eye),new T.Vector3(...cam.look),new T.Vector3(0,1,0)));if(tt<51.333-45.167){tower.arrivalParts.wave.children[0].intensity=0;tower.arrivalParts.wave.children[1].material.opacity=0;}tower.arrivalParts.title.visible=tt>=4.933&&tt<7.066;
  phoneStage.arrivalParts.mast.visible=false;phoneStage.arrivalParts.title.visible=false;
  for(const l of earlyLights)l.o.intensity*=1-q;for(const l of lateLights)l.o.intensity*=q;
  phoneSky.material.uniforms.arrivalBlend.value=q;
  phoneSky.position.copy(offset.clone().multiplyScalar(1-q).sub(offset).applyQuaternion(undo));
  built.fogDensity=mix(.0025,.004,q);built.phone=tt<4.5?phone:null;
 }};
 return built;
}
