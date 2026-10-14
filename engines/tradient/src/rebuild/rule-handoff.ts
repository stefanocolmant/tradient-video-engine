// @ts-nocheck
// An opt-in shared world keeps the saved UI values and their dimensional explanation connected.
import {T,group,box,mat,canvasTex} from './objects';
import {buildDesk} from './desk';
import {buildCinematicConfiguration} from './configuration-cinematic';
import {ruleHandoffDirection,ruleHandoffState} from './rule-handoff-state.mjs';
import {ease,stateAt} from './runtime.mjs';
export function buildRuleHandoff(score){
 const d=ruleHandoffDirection(score),desk=buildDesk(score),config=buildCinematicConfiguration(score),root=new T.Group();root.add(desk.root,config.root);
 const h=config.handles,dh=desk.handles,params=group(root),cropped=[];
 for(let i=0;i<3;i++){
  const [x,y,w,h]=d.sourceRects[i],g=group(params),tx=canvasTex(w,h,()=>{}),W=w/d.sourceTexture[0]*d.screenSize[0],H=h/d.sourceTexture[1]*d.screenSize[1];
  const shell=box(g,W,H,.032,mat(0x728795,.82,.22),0,0,-.021,.015);const face=new T.Mesh(new T.PlaneGeometry(W,H),new T.MeshBasicMaterial({map:tx,toneMapped:false}));g.add(face);g.traverse(o=>o.layers.set(1));cropped.push({g,tx,face,shell,x,y,w,h});
 }
 const hero=group(root); // Combined focus uses scene layer membership.
 hero.add(h.hero); // reparent configuration content; its original local coordinates are unchanged.
 const skies=[...desk.depthFocus.skies,...h.skies];const focus={active:true,hero,skies,distance:10,aperture:d.focusAperture,maxblur:.014};
 const configAmbient=config.root.children.filter(o=>o.isLight),configIntensity=configAmbient.map(o=>o.intensity);
 return {root,depthFocus:focus,camera:f=>f<d.startFrame?score.shots.find(s=>f>=s.startFrame&&f<s.endFrame).camera:f<=d.endFrame?d.camera:score.visualDirection.configuration.camera,update(s,camera){
  const a=ruleHandoffState(score,s.frame),p=a.progress,started=s.frame>d.startFrame;
  desk.root.position.set(0,0,0);desk.root.visible=s.frame<d.endFrame;
  const deskState=stateAt(score,a.sourceFrame);desk.update(deskState,camera);
  // Copy the actual current source rectangles before removing those pixels from the screen.
  for(const c of cropped){const ctx=c.tx.image.getContext('2d');ctx.clearRect(0,0,c.w,c.h);ctx.drawImage(dh.display.tx.image,c.x,c.y,c.w,c.h,0,0,c.w,c.h);c.tx.needsUpdate=true;}
  if(started)desk.update(deskState,camera,{detachedFields:true,detachedChart:true});
  desk.root.position.set(...a.room);
  config.root.visible=started;hero.visible=started;params.visible=started;
  config.update(s,camera);h.chart.update(1,d.chartExtension);
  // The chart itself migrates from its screen coordinates, without a second sample changing underneath it.
  if(s.frame<=d.endFrame){h.chartRig.position.set(...d.chartSourcePosition.map((v,k)=>v+([0,3.6,0][k]-v)*p));h.chartRig.scale.set(...d.chartSourceScale.map(v=>v+(1-v)*p));h.chartRig.rotation.set(0,0,0);}
  h.field.world.position.y=d.terrainStartY*(1-p);h.header.visible=s.frame>=d.endFrame&&s.frame<score.visualDirection.configuration.headerOutFrame;
  for(let i=0;i<configAmbient.length;i++)configAmbient[i].intensity=configIntensity[i]*p;
  h.skies.forEach(o=>o.visible=s.frame>=d.endFrame);
  cropped.forEach((c,i)=>{c.g.visible=started&&p<1;c.g.position.set(...a.positions[i]);c.g.position.x+=d.lateralArcs[i]*Math.sin(p*Math.PI);c.g.rotation.y=(i-1)*.12*Math.sin(p*Math.PI);c.g.scale.setScalar(Math.max(.001,(1+d.fieldScaleGain*p)*a.settle));});
  focus.distance=camera.position.distanceTo(new T.Vector3(...(s.frame<d.startFrame?[2.3,4.4,.3]:[1.2,4.2,1.2])));
  focus.hero=s.frame<d.startFrame?dh.monitor:hero;focus.aperture=s.frame<=d.startFrame?desk.depthFocus.aperture:d.focusAperture;if(s.frame<=d.startFrame)focus.distance=desk.depthFocus.distance;
 }};
}
