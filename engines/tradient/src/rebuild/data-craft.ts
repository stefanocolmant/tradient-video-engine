// @ts-nocheck
// A real inspection of the same price texture; raw updates become one instruction.
import {T,C,group,box,line,mat,text,canvasText,canvasTex,materials,glow,dynamicFace,rounded} from './objects';
import {studio} from '../production-kit';
import {inspectionLens} from '../data-shots';
import {marketTerrain} from './data-cinematic';
import {resolveDataDirection,recordMotion} from './cinematic-state.mjs';
import {ease} from './runtime.mjs';
import {inspectionState} from './craft-state.mjs';
const mix=(a,b,p)=>a+(b-a)*p;
export function buildCraftData(score){
 const d=resolveDataDirection(score);if(!d.inspection?.camera||!d.inspection?.sampleSize)throw Error('V6 optical sample recipe required');
 const root=studio({warm:true,wide:true}),m=materials(),hero=group(root),field=marketTerrain(root,d);
 const skies=root.children.filter(o=>o.isMesh&&o.material?.side===T.BackSide);skies.forEach(o=>o.layers.set(2));root.children.filter(o=>o.isLight).forEach(o=>{o.intensity*=o.color?.getHex()===0x294be5?.05:.25;o.layers.enable(1)});
 skies.forEach(o=>{o.material.fragmentShader='varying vec3 p;void main(){float y=normalize(p).y;float h=exp(-pow((y-0.02)*7.0,2.0));gl_FragColor=vec4(mix(vec3(0.006,0.010,0.027),vec3(0.035,0.055,0.135),h),1.0);}';});
 const sample=group(hero,0,4,0),frame=group(sample);
 box(frame,5.65,5.65,.18,mat(0x596c77,.88,.25),0,0,-.11,.08);box(frame,5.49,5.49,.19,m.black,0,0,-.04,.05);
 for(const x of [-2.68,2.68])for(const y of [-2.68,2.68])box(frame,.045,.045,.014,m.steel,x,y,.07);
 const screen=dynamicFace(sample,5.23,5.25,(c,W,H,s)=>{
  c.fillStyle='#07111a';c.fillRect(0,0,W,H);canvasText(c,'MARKET UPDATES',42,65,36,'#a9c5cd',600);canvasText(c,'RULE-01',665,64,29,'#8b9b9d',600);
  const values=[99.96,99.98,99.99,s.price];
  for(let i=0;i<4;i++){const x=42+i*219;rounded(c,x,104,203,144,5,i===s.active?'#303e3b':'#14202a',i===s.active?'#b5a365':'#334348');canvasText(c,['09:31:09.240','09:31:09.880','09:31:10.060','09:31:10.240'][i],x+12,135,18,'#779da8');canvasText(c,i>s.active?'—':values[i].toFixed(2),x+15,204,43,i===s.active?'#edda9a':'#78949d',700);}
  const x0=75,y0=650,sx=580,sy=290;const Y=p=>y0-(p-99.94)/.08*sy;
  for(let i=0;i<5;i++){const y=Y(99.94+i*.02);c.strokeStyle='#253b43';c.lineWidth=2;c.beginPath();c.moveTo(x0,y);c.lineTo(x0+sx,y);c.stroke();canvasText(c,(99.94+i*.02).toFixed(2),30,y-10,21,'#608390');}
  c.strokeStyle='#e2bd62';c.lineWidth=4;c.beginPath();c.moveTo(x0,Y(100));c.lineTo(x0+sx,Y(100));c.stroke();canvasText(c,'DEFINED CONDITION  > 100.00',125,Y(100)-20,25,'#dfc986',650);
  const pricePath=[99.95,99.96,99.955,99.975,99.96,99.98,99.972,99.985,99.99,s.plotPrice];c.strokeStyle=s.pass?'#f4d47e':'#8dbfc9';c.lineWidth=5;c.beginPath();pricePath.forEach((p,i)=>{const x=x0+i*sx/9,y=Y(p);i?c.lineTo(x,y):c.moveTo(x,y)});c.stroke();c.fillStyle=s.pass?'#ffe39b':'#b3d6df';c.beginPath();c.arc(x0+sx,Y(s.plotPrice),10,0,Math.PI*2);c.fill();
  canvasText(c,'LATEST',42,738,24,'#8ca4aa');canvasText(c,s.price.toFixed(2),42,828,76,s.pass?'#f2d58c':'#d7e5e5',700);canvasText(c,s.pass?'CONDITION MET':'BELOW CONDITION',400,815,35,s.pass?'#f2d58c':'#87a3ad',650);
  canvasText(c,['09:31:09.240','09:31:09.880','09:31:10.060','09:31:10.240'][s.active],42,914,23,'#718b98');canvasText(c,'ONE PRICE RECORD',543,914,23,'#718b98');
 },960,960);screen.face.position.z=.08;sample.userData={face:screen.face,tx:screen.tx};
 const lens=inspectionLens(hero,sample);lens.scale.setScalar(.72);const lensLight=new T.PointLight(0xa4dce9,35,7,2);root.add(lensLight);lensLight.layers.enable(1);
 // Input tiles are records. They merge into one inspectable surface, not orders.
 const incoming=[],incomingGeo=new T.PlaneGeometry(5.23/12*.98,5.25/12*.98),uvGeo=incomingGeo.clone();
 const sourceMat=new T.MeshBasicMaterial({map:screen.tx,toneMapped:false,side:T.DoubleSide});
 for(let y=0;y<12;y++)for(let x=0;x<12;x++){
  const g=incomingGeo.clone(),uv=g.attributes.uv;for(let k=0;k<uv.count;k++)uv.setXY(k,(x+uv.getX(k))/12,(y+uv.getY(k))/12);
  const p=new T.Mesh(g,sourceMat);root.add(p);p.userData={x:(x-5.5)*5.23/12,y:(y-5.5)*5.25/12,index:y*12+x};incoming.push(p);
 }
 const rejects=[];for(let i=0;i<3;i++){const g=group(root);box(g,1.4,.74,.08,m.blue);text(g,[99.96,99.98,99.99][i].toFixed(2),1.2,.31,0,0,.05,'#d4cba3');rejects.push(g);}
 const out=group(hero,7.1,3.7,1);text(out,'OUTGOING ORDERS',4,.32,0,2.2,0,'#9eafb6');for(let i=0;i<3;i++){const y=1.4-i*.75;for(const dy of [-.25,.25])line(out,[[-1.8,y+dy,0],[1.8,y+dy,0]],C.steel,.6);for(const x of [-1.8,1.8])line(out,[[x,y-.25,0],[x,y+.25,0]],C.steel,.6);}text(out,'0',1.5,1.2,0,-1.3,0,'#b8d1da');
 const instruction=group(hero,0,4.3,1.0),chassis=group(instruction);box(chassis,5.6,3.7,.22,mat(0x8e7b4d,.74,.30),0,0,-.12,.08);box(chassis,5.48,3.58,.23,mat(0x0c1721,.25,.60),0,0,-.04,.06);text(chassis,'ORDER O-01',3.8,.35,-.4,1.40,.10,'#bfd8e1');const done=text(chassis,'FORMED',1.1,.23,1.8,1.4,.1,'#eed397');
 const parts=[];for(let i=0;i<3;i++){const g=group(instruction);box(g,5,.72,.13,i===0?mat(0x8a7137,.45,.45):m.blue);text(g,['CONDITION MET · 100.01','BUY 3 UNITS','LIMIT 100.05'][i],4.72,.35,0,0,.075,i===0?'#fff0c4':'#c9e1e6');parts.push(g);}
 const size=group(hero,3.7,5,1.3),sizeUnits=[];for(let i=0;i<3;i++){const u=box(size,.55,.55,.55,m.cyan,(i-1)*.72,0,0,.10);text(u,'1',.30,.3,0,0,.29);sizeUnits.push(u);}const sizeTitle=text(size,'SIZE 3',2.6,.27,0,.75,0,'#b3d9e1');
 const limit=group(hero,-3.7,5.7,1);box(limit,3.4,.04,1.8,m.gold);const limitTitle=text(limit,'LIMIT 100.05',3,.30,0,.55,.6,'#dfc991');
 const signal=glow(root,1.6,C.gold),light=new T.PointLight(C.gold,0,13,2);root.add(light);light.layers.enable(1);
 const key=new T.PointLight(0xffe4a2,150,65,2);key.position.set(-5,10,6);key.layers.enable(1);root.add(key);const rim=new T.PointLight(0x86b9d7,120,55,2);rim.position.set(8,8,-6);rim.layers.enable(1);root.add(rim);
 hero.traverse(o=>o.layers.set(1));const focus={active:true,hero,skies,distance:18,aperture:d.focusAperture,maxblur:.012};
 const progress=(id,f)=>{const b=d.beats[id];return ease((f-b.firstFrame)/(b.endFrame-b.firstFrame))};
 return{root,depthFocus:focus,environmentIntensity:.21,fogDensity:.0045,camera:()=>d.inspection.camera,update(s,camera){
  const f=s.frame,optics=inspectionState(score,f),extract=progress('extract',f),values=progress('values',f),assemble=progress('assemble',f),depart=progress('depart',f),qualify=progress('qualify',f);
  field.update((f-736)/30,.35+.45*values);const rise=optics.rise;sample.position.set(0,.45+3.55*rise,-3+3*rise);sample.rotation.set(-Math.PI/2*(1-rise),-.08*rise,0);sample.visible=f>=817&&f<1118;frame.scale.setScalar(1);
  const passed=optics.pass,price=optics.price;
  screen.draw({price,pass:passed,plotPrice:optics.plotPrice,active:optics.active},`${price.toFixed(6)}:${optics.plotPrice.toFixed(7)}:${passed}:${optics.active}`);
  sample.updateWorldMatrix(true,true);
  incoming.forEach((p,i)=>{const k=p.userData,a=optics.tile(k.index),end=screen.face.localToWorld(new T.Vector3(k.x,k.y,0));p.visible=f>=736&&f<817;p.position.set(mix((k.x*1.6)-5,end.x,a),mix(.5,end.y,a)+Math.sin(a*Math.PI)*1.4,mix(-15+(Math.floor(k.index/12))*1.1,end.z,a));p.rotation.set(-Math.PI/2*(1-a),-.08*a,0);p.scale.setScalar(.9+.1*a)});
  // Follow the actual last plotted price through the camera ray, never an arbitrary lens position.
  const lensEnter=optics.lensEnter,lensLeave=optics.lensLeave;
  const pixelY=650-(optics.plotPrice-99.94)/.08*290;
  const feature=screen.face.localToWorld(new T.Vector3((655/960-.5)*5.23,(.5-pixelY/960)*5.25,0));
  const opticalCenter=camera.position.clone().lerp(feature,.88),offset=new T.Vector3(0,0,.065*.72).applyEuler(sample.rotation);
  lens.visible=f>=809&&f<1080;lens.position.copy(opticalCenter.sub(offset));lens.position.x+=(1-lensEnter)*6+lensLeave*6;lens.rotation.copy(sample.rotation);lens.userData.updateOptics(camera.position);lensLight.position.copy(lens.position);lensLight.position.z+=1;lensLight.intensity=24*lensEnter*(1-lensLeave);
  rejects.forEach((g,i)=>{const b=d.beats.failedSamples[i],p=ease((f-b.firstFrame)/(b.endFrame-b.firstFrame));g.visible=p>0&&p<1;g.position.set(-1.7+(.9*i)-p*(6+i*2),4.2+Math.sin(p*Math.PI)*1.8-3.6*p,-p*(9+i*2));g.rotation.set(-p*Math.PI/2,0,-.15*Math.sin(p*Math.PI));g.scale.setScalar(1-.35*p)});
  out.visible=f>=944&&f<1011;size.visible=values>0&&f<1132;size.scale.setScalar(Math.max(.001,values));limit.visible=size.visible;limit.scale.setScalar(Math.max(.001,values));
  instruction.visible=f>=1104;instruction.rotation.y=.08-.25*depart;instruction.position.z=1-2*depart;chassis.scale.setScalar(Math.max(.001,assemble));done.visible=s.done('build');
  const fold=ease((f-1104)/14);
  if(f>=1104){sample.position.set(0,mix(4,4.9,fold),mix(0,1.1,fold));sample.rotation.y=-.08+fold*Math.PI/2;sample.scale.set(1-.115*fold,1-.87*fold,1);}
  else sample.scale.setScalar(1);
  instruction.updateWorldMatrix(true,true);
  parts.forEach((g,i)=>{const a=ease((f-1104-i*3)/(28-i*3));g.visible=f>=(i===0?1118:1104);const origin=instruction.worldToLocal(new T.Vector3(...[[0,4.9,1.1],[3.7,5,1.3],[-3.7,5.7,1]][i])).toArray(),dest=[0,.6-i*.9,.15];g.position.set(mix(origin[0],dest[0],a),mix(origin[1],dest[1],a)+Math.sin(a*Math.PI)*.6,mix(origin[2],dest[2],a));g.rotation.set(0,i===0?(1-ease((f-1118)/14))*Math.PI/2:(i-1)*.5*(1-a),0);g.scale.set(1,Math.max(.001,i===0?1:a),1)});
  if(f>=1104){size.position.set(mix(3.7,.9,assemble),mix(5,4,assemble),mix(1.3,1.24,assemble));size.scale.setScalar(1-.52*assemble);sizeTitle.visible=false;limit.position.set(mix(-3.7,0,assemble),mix(5.7,3.48,assemble),mix(1,1.1,assemble));limit.scale.set(1+.47*assemble,1,1-assemble);limitTitle.visible=false;}else{size.position.set(3.7,5,1.3);limit.position.set(-3.7,5.7,1);sizeTitle.visible=true;limitTitle.visible=true;}

  signal.visible=passed&&f<1104;signal.position.set(2.1,4.5,1.1);signal.material.opacity=.35*(1-values);light.position.copy(signal.position);light.intensity=55*(passed?1:0)*(1-assemble);
  focus.distance=camera.position.distanceTo(new T.Vector3(out.visible?7.1:0,4,values>0?1:0));
 }};
}
