// @ts-nocheck
// A23 construction techniques, newly staged for ONE market condition and ONE order.
// The field is history, height is price, the gold edge is the configured threshold.
import {T,C,group,box,rod,line,mat,text,canvasTex,canvasText,rand,glow,materials} from './objects';
import {RoundedBoxGeometry} from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import {studio} from '../production-kit';
import {resolveDataDirection,recordMotion} from './cinematic-state.mjs';
import {ease,timeline} from './runtime.mjs';

const clamp=(v)=>Math.max(0,Math.min(1,v));
const lerp=(a,b,p)=>a+(b-a)*p;
function required(score){
 const d=resolveDataDirection(score);
 if(!d||d.version!==1)throw Error('Cinematic data direction v1 required');
 for(const k of ['columns','rows','pitch','rowPitch','seed','thresholdY','unitHeight','camera','beats','fieldEmissive','focusAperture'])if(d[k]===undefined)throw Error('Missing cinematic direction '+k);
 for(const id of ['extract','empty','qualify','values','assemble','depart']){
  const b=d.beats[id];if(!b||!Number.isInteger(b.firstFrame)||!Number.isInteger(b.endFrame)||b.endFrame<=b.firstFrame)throw Error('Missing cinematic beat '+id);
 }
 if(!Array.isArray(d.beats.failedSamples)||d.beats.failedSamples.length!==3)throw Error('Three explicit history departures required');
 const t=timeline(score);
 for(const [beat,event]of [['qualify','passes'],['values','remaining-checks'],['assemble','build']]){
  const e=t.get(event),b=d.beats[beat];if(b.firstFrame!==e.firstFrame||b.endFrame!==e.endFrame)throw Error('Unbound cinematic beat '+beat);
 }
 return d;
}
function atlas(){return canvasTex(2048,2048,(c)=>{for(let i=0;i<64;i++){
 const x=i%8*256,y=Math.floor(i/8)*256,v=99.91+(i%9)*.01;
 c.fillStyle='#101b25';c.fillRect(x,y,256,256);c.strokeStyle='#7d744b';c.lineWidth=3;c.strokeRect(x+9,y+9,238,238);
 canvasText(c,'09:31:'+String(i%60).padStart(2,'0'),x+20,y+53,25,'#7b9aaa');
 canvasText(c,v.toFixed(2),x+20,y+133,53,'#e7d8a6',700);
 canvasText(c,'PRICE UPDATE',x+20,y+175,20,'#a09a79');
 for(let j=0;j<14;j++){c.fillStyle=j%3?'#44504b':'#8f8965';c.fillRect(x+20+j*15,y+205,8,20+(j%4)*3);}
}})}
export function marketTerrain(parent,d){
 const n=d.columns*d.rows,uv=new Float32Array(n*2),tx=atlas(),geo=new T.PlaneGeometry(.91,1.17);
 const facesMat=new T.MeshStandardMaterial({map:tx,emissiveMap:tx,emissive:0xffffff,emissiveIntensity:d.fieldEmissive,metalness:.25,roughness:.65});
 const uniforms={clock:{value:0},dim:{value:1}};
 facesMat.onBeforeCompile=s=>{
  s.uniforms.fieldClock=uniforms.clock;s.uniforms.fieldDim=uniforms.dim;
  s.vertexShader='attribute vec2 tileUv; varying vec3 fieldPosition;\n'+s.vertexShader;
  s.vertexShader=s.vertexShader.replace('#include <uv_vertex>','#include <uv_vertex>\nvMapUv=vMapUv/8.0+tileUv;vEmissiveMapUv=vMapUv;');
  s.vertexShader=s.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\nfieldPosition=(instanceMatrix*vec4(position,1.)).xyz;');
  s.fragmentShader='uniform float fieldClock;uniform float fieldDim;varying vec3 fieldPosition;\n'+s.fragmentShader;
  s.fragmentShader=s.fragmentShader.replace('#include <emissivemap_fragment>','#include <emissivemap_fragment>\nfloat wave=exp(-pow((fieldPosition.z+mod(fieldClock*7.,120.)-80.)*.32,2.));totalEmissiveRadiance*=fieldDim*(.48+wave*.7);');
 };facesMat.customProgramCacheKey=()=> 'a23-market-terrain-v1';
 const world=group(parent),body=new T.InstancedMesh(new T.BoxGeometry(.97,1,1.23),mat(0x14212b,.38,.60),n),rim=new T.InstancedMesh(new RoundedBoxGeometry(.98,.075,1.24,1,.018),mat(0x484635,.50,.46),n),face=new T.InstancedMesh(geo,facesMat,n);world.add(body,rim,face);body.receiveShadow=true;
 const obj=new T.Object3D(),cells=[];
 for(let i=0;i<n;i++){
  const col=i%d.columns,row=Math.floor(i/d.columns),x=(col-(d.columns-1)/2)*d.pitch,z=(row-d.rows*.70)*d.rowPitch;
  const h=.15+(Math.sin(x*.21+z*.07)+Math.cos(z*.19-x*.06)+2)*.13+rand(i+d.seed)*.30;
  const selected=d.clearCenter!==false&&Math.abs(x)<5.4&&z>-2&&z<3.5;
  const k=(i*17)%64;uv[i*2]=(k%8)/8;uv[i*2+1]=1-(Math.floor(k/8)+1)/8;
  cells.push([x,h,z]);obj.rotation.set(0,0,0);obj.position.set(x,h/2-.13,z);obj.scale.set(1,Math.max(.001,h),1);if(selected)obj.scale.setScalar(.001);obj.updateMatrix();body.setMatrixAt(i,obj.matrix);
  obj.position.y=h-.08;obj.scale.setScalar(selected?.001:1);obj.updateMatrix();rim.setMatrixAt(i,obj.matrix);
  obj.position.y=h-.035;obj.rotation.x=-Math.PI/2;obj.updateMatrix();face.setMatrixAt(i,obj.matrix);
  const pool=Math.exp(-((x-1)**2/260+(z+3)**2/800));face.setColorAt(i,new T.Color().setScalar(.12+pool*.76+rand(i+28)*.10));
 }
 geo.setAttribute('tileUv',new T.InstancedBufferAttribute(uv,2));
 box(world,350,.15,410,mat(0x060a0f,.15,.85),0,-.35,-50,0);
 return {world,cells,update(seconds,focus){uniforms.clock.value=seconds;uniforms.dim.value=1-.68*focus;}};
}
function dataPlate(p,{price='99.98',time='09:31:09.880',w=2.1,h=2.8}={}){
 const g=group(p),m=materials();
 box(g,w,h,.18,mat(0x8c7b49,.8,.25),0,0,0,.08);
 box(g,w-.07,h-.07,.19,m.black,0,0,.022,.05);
 box(g,w-.13,h-.13,.018,mat(0x152734,.48,.42),0,0,.13,.06);
 text(g,time,w*.88,.20,0,h*.34,.15,'#9bb9c7');
 text(g,price,w*.9,.58,0,h*.04,.15,'#f0dca0');
 text(g,'PRICE',w*.68,.18,0,-h*.22,.15,'#9aa99c');
 for(let i=0;i<18;i++)box(g,.025,.12+(i%3)*.04,.006,m.gold,-w*.38+i*w*.044,-h*.37,.16,0);
 return g;
}
export function buildCinematicData(score){
 const d=required(score),root=studio({warm:true,wide:true}),m=materials();
 const skies=root.children.filter(o=>o.isMesh&&o.geometry?.type==='SphereGeometry');
 skies.forEach(o=>o.layers.set(2));root.children.filter(o=>o.isLight).forEach(o=>{o.intensity*=.34;o.layers.enable(1)});
 const field=marketTerrain(root,d),hero=group(root);
 const key=new T.PointLight(0xffe3a0,160,75,2);key.position.set(-6,11,8);key.layers.enable(1);root.add(key);
 const rimLight=new T.PointLight(0x6ca9ef,230,65,2);rimLight.position.set(7,8,-7);rimLight.layers.enable(1);root.add(rimLight);
 const graze=new T.DirectionalLight(0xf0da9c,.38);graze.position.set(-9,4,-22);root.add(graze,graze.target);
 // Height is price, not a decorative machine. The fixed line survives all samples.
 const chart=group(hero,0,.65,0),rail=group(chart),thresholdY=d.thresholdY;
 box(rail,11,.70,5.3,mat(0x0a1523,.40,.50),0,-.36,.2,.06);
 for(let i=0;i<9;i++){
  const y=.55+i*.55;
  line(rail,[[-5.3,y,-1.35],[5.3,y,-1.35]],0x536a72,.35);
  if(i%2===0)text(rail,(99.94+i*.01).toFixed(2),.70,.19,-5.08,y+.12,-1.28,'#a7b8ba');
 }
 rod(rail,[-4.7,.25,-1.35],[-4.7,5.4,-1.35],.018,m.steel);
 const threshold=group(chart,0,thresholdY,0);
 box(threshold,10.5,.045,.045,m.gold,0,0,-1.05,.2);
 box(threshold,10.5,.025,.025,m.gold,0,0,-1.75,.2);
 for(const x of [-5.25,5.25])rod(threshold,[x,0,-1.75],[x,0,1.45],.012,m.gold);
 const glass=new T.Mesh(new T.PlaneGeometry(10.5,3.2),new T.MeshBasicMaterial({color:0xffdb78,transparent:true,opacity:.045,side:T.DoubleSide,depthWrite:false}));glass.rotation.x=-Math.PI/2;threshold.add(glass);
 const thresholdLeft=text(threshold,'100.00',1.52,.39,-2.4,.8,-1.7,'#f5d783');
 const thresholdRight=text(threshold,'100.00',1.52,.39,5.1,.70,1.55,'#f5d783');
 const thresholdDescription=text(threshold,'DEFINED THRESHOLD',3.15,.23,-.7,.35,-1.7,'#d3c390');
 const quotes=[99.96,99.98,99.99,100.01],xs=[-3.35,-1.12,1.12,3.35],records=[];
 quotes.forEach((price,i)=>{
  const g=group(chart,xs[i],0,0),height=thresholdY+(price-100)*d.unitHeight;
  const column=box(g,1.6,1,1.4,mat(i===3?0xdec472:0x467d91,.48,.29,.06),0,.5,0,.06);
  // Actual source record becomes the cap of its price column.
  const cap=dataPlate(g,{price:price.toFixed(2),time:['09:31:09.240','09:31:09.880','09:31:10.060','09:31:10.240'][i],w:1.9,h:2.35});
  const marker=text(g,price.toFixed(2),1.76,.48,0,height+.65,.8,i===3?'#f9df9a':'#c5e1e5');
  const tick=line(g,[[0,.1,.8],[0,.1,1.6]],C.gold,.7);
  records.push({g,column,cap,marker,height,tick});
 });
 // Empty destination stays empty until qualification and checks have completed.
 const out=group(hero,7.8,2.2,1),outSlots=[];
 text(out,'ORDERS',2.5,.34,0,1.7,0,'#93acbc');
 for(let i=0;i<3;i++){
  const frame=group(out,0,.8-i*.75,0);for(const [a,b]of [[[-1.5,-.30,0],[1.5,-.30,0]],[[-1.5,.30,0],[1.5,.30,0]],[[-1.5,-.30,0],[-1.5,.30,0]],[[1.5,-.30,0],[1.5,.30,0]]])line(frame,[a,b],0x527082,.7);outSlots.push(frame);
 }
 const zero=text(out,'0',1.1,.9,0,-2,0,'#b7ced6');
 const history=group(root);const historyCards=[];
 for(let i=0;i<3;i++)historyCards.push(dataPlate(history,{price:quotes[i].toFixed(2),time:['09:31:09.240','09:31:09.880','09:31:10.060'][i],w:1.9,h:2.35}));
 // The stored instruction is an exploded data structure: three quantity units,
 // a bounded price field, and condition evidence. All land in one addressed order.
 const assembly=group(hero,0,4.0,2),chassis=group(assembly);
 box(chassis,5.7,3.6,.24,mat(0x8a733b,.74,.28),0,0,0,.09);
 box(chassis,5.56,3.46,.27,m.black,0,0,.02,.06);
 box(chassis,5.41,3.31,.04,mat(0x13263b,.55,.32),0,0,.18,.06);
 for(let i=0;i<4;i++){const x=(i%2?1:-1)*2.62,y=(i<2?1:-1)*1.52;box(chassis,.055,.055,.015,m.steel,x,y,.22,.12);}
 text(chassis,'ORDER O-01',3.4,.35,-.65,1.28,.24,'#d1e0e7');const formedLabel=text(chassis,'FORMED',1.2,.22,1.85,1.28,.24,'#e9cc80');const buildingLabel=text(chassis,'BUILDING',1.2,.22,1.85,1.28,.24,'#a1bfca');
 const fieldGroups=[];
 for(let i=0;i<3;i++){
  const g=group(assembly),w=5.02,h=.69;
  box(g,w,h,.09,i===0?mat(0x916f25,.6,.30):m.blue,0,0,0,.08);
  text(g,['CONDITION MET · 100.01','BUY 3 UNITS','LIMIT 100.05'][i],4.7,.36,0,0,.052,i===0?'#fff0bc':'#e3e9df');fieldGroups.push(g);
 }
 const units=group(hero,3.8,6,1.7),unitMeshes=[];
 for(let i=0;i<3;i++){const g=group(units,(i-1)*.77,0,0);box(g,.63,.63,.63,m.cyan,0,0,0,.12);text(g,'1',.34,.34,0,0,.33,'#efffff');unitMeshes.push(g);}
 text(units,'SIZE 3',2.5,.31,0,.83,0,'#9fdce4');
 const limit=group(hero,-3.1,6.6,1.5);box(limit,3.9,.055,2.1,m.gold);text(limit,'LIMIT 100.05',3.4,.35,0,.65,.7,'#efdb9e');
 const marker=glow(root,2.2,C.gold);const point=new T.PointLight(C.gold,0,13,2);root.add(point);
 hero.traverse(o=>o.layers.set(1));
 const depthFocus={active:true,hero,skies,distance:18,aperture:d.focusAperture,maxblur:.010};
 const beat=(id,f)=>{const b=d.beats[id];return ease((f-b.firstFrame)/(b.endFrame-b.firstFrame));};
 return {root,depthFocus,environmentIntensity:.25,fogDensity:.006,fogColor:0x070e1e,camera:(frame)=>d.camera,
 update(s,camera){
  const f=s.frame,extract=beat('extract',f),empty=beat('empty',f),qualify=beat('qualify',f),values=beat('values',f),assemble=beat('assemble',f),depart=beat('depart',f);
  field.update((f-736)/30,values*.65+assemble*.25);
  chart.position.y=.65;chart.rotation.y=0;chart.scale.setScalar(1-.15*assemble);chart.visible=assemble<.99;
  records.forEach((r,i)=>{
   const {rise:arrive,drop}=recordMotion(score,d,i,f,r.height);
   r.g.visible=i<3||f>=d.beats.qualify.firstFrame;
   r.column.visible=drop<.99;r.column.scale.y=Math.max(.001,r.height*arrive*(1-drop));r.column.position.y=r.column.scale.y/2;
   r.cap.visible=drop===0;r.cap.position.set(0,.30+arrive*r.height,-.18);r.cap.rotation.set(-Math.PI/2+arrive*.28,0,0);r.cap.scale.setScalar(1-drop);
   r.marker.visible=false;r.marker.position.y=r.height*arrive+.70;
   r.g.position.z=-.4+arrive*.7;r.tick.visible=arrive>.8;
   if(i<3){const h=historyCards[i];h.visible=drop>0&&drop<.98;h.position.set(xs[i]-drop*(5.5+i),.95+arrive*r.height*(1-drop),.1-drop*(9+i*1.7));h.rotation.set(lerp(-Math.PI/2+.28,-Math.PI/2,drop),0,-.16*Math.sin(drop*Math.PI));h.scale.setScalar(1);}
  });
  threshold.visible=extract>.05&&assemble<.96;thresholdDescription.visible=f<1011;thresholdLeft.visible=f<1011;thresholdRight.visible=f>=1011;
  out.visible=f>=d.beats.empty.firstFrame-32&&f<d.beats.qualify.firstFrame;out.scale.setScalar(.8+.2*empty);zero.visible=qualify<.99;
  units.visible=values>0&&f<d.beats.assemble.firstFrame;units.position.set(3.8*(1-assemble),6*(1-assemble)+4*assemble,1.7+.7*assemble);units.scale.setScalar(Math.max(.001,values*(1-assemble)));
  limit.visible=values>0&&f<d.beats.assemble.firstFrame;limit.scale.setScalar(values*(1-assemble));
  assembly.visible=f>=d.beats.assemble.firstFrame;assembly.position.set(0,4,2-depart*2);assembly.rotation.set(-.04*assemble,.14-depart*.55,.025*Math.sin(assemble*Math.PI));
  chassis.scale.setScalar(Math.max(.001,assemble));formedLabel.visible=s.done('build');buildingLabel.visible=!s.done('build');
  fieldGroups.forEach((g,i)=>{
   const a=ease(clamp((f-d.beats.assemble.firstFrame-i*3)/(d.beats.assemble.endFrame-d.beats.assemble.firstFrame-i*3)));
   const origin=[[-.2,1.2,-1],[3.6,2.4,-.2],[-3.2,2.6,-.2]][i],end=[0,.56-i*.86,.27];
   g.position.set(lerp(origin[0],end[0],a),lerp(origin[1],end[1],a)+Math.sin(a*Math.PI)*.45,lerp(origin[2],end[2],a));g.rotation.set(.12*(1-a),(-.45+i*.45)*(1-a),.05*(1-a));g.scale.setScalar(.72+.28*a);
  });
  marker.visible=qualify>0&&assemble<.95;marker.position.set(3.35*(1-values),.65+d.thresholdY+qualify*.5,0.4+values*1.4);marker.material.opacity=.45*(1-assemble);point.position.copy(marker.position);point.intensity=110*qualify*(1-assemble);
  key.intensity=160+100*values;key.position.set(-6+values*2,11,8);rimLight.intensity=230+120*assemble;
  depthFocus.distance=camera.position.distanceTo(new T.Vector3(0,values>0?4:2.8,values>0?2:0));depthFocus.aperture=d.focusAperture*(.4+.6*Math.max(values,empty));
 }};
}
