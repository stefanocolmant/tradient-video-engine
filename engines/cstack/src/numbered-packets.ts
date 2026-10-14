// @ts-nocheck
// Native-time numbered-card emphasis; each engine owns its staging choice.
import {T,P,group,mat,canvasTex,glow,label,rand,mix,step,ease} from './kit/objects';
const blend=(t,a,b)=>ease(step(t,a,b));
const shape=(w,h,r)=>{const s=new T.Shape(),x=-w/2,y=-h/2;s.moveTo(x+r,y);s.lineTo(x+w-r,y);s.quadraticCurveTo(x+w,y,x+w,y+r);s.lineTo(x+w,y+h-r);s.quadraticCurveTo(x+w,y+h,x+w-r,y+h);s.lineTo(x+r,y+h);s.quadraticCurveTo(x,y+h,x,y+h-r);s.lineTo(x,y+r);s.quadraticCurveTo(x,y,x+r,y);return s;};
function card(parent,id){
  const g=group(parent),s=shape(2,1.16,.10),geo=new T.ShapeGeometry(s,16),p=geo.attributes.position,u=geo.attributes.uv;
  for(let i=0;i<p.count;i++)u.setXY(i,(p.getX(i)+1)/2,(p.getY(i)+.58)/1.16);
  const rim=new T.Mesh(new T.ExtrudeGeometry(s,{depth:.10,bevelEnabled:true,bevelSegments:2,steps:1,bevelSize:.012,bevelThickness:.012,curveSegments:12}),mat(0xa46b08,.25,.48));rim.position.z=-.12;g.add(rim);
  const faceMap=canvasTex(512,300,(c,w,h)=>{const grad=c.createLinearGradient(0,0,0,h);grad.addColorStop(0,'#1b1b29');grad.addColorStop(.239,'#201b24');grad.addColorStop(.24,'#ffbe0b');grad.addColorStop(1,'#f59d03');c.fillStyle=grad;c.fillRect(0,0,w,h)});
  const face=new T.MeshBasicMaterial({map:faceMap,toneMapped:false});face.uniforms={pulse:{value:0},clock:{value:0},brightness:{value:1}};
  face.onBeforeCompile=s=>{Object.assign(s.uniforms,face.uniforms);s.fragmentShader='uniform float pulse,clock,brightness;\n'+s.fragmentShader;s.fragmentShader=s.fragmentShader.replace('#include <map_fragment>','#include <map_fragment>\nfloat gold=1.0-step(.76,vMapUv.y);diffuseColor.rgb=mix(diffuseColor.rgb,vec3(1.,.83,.20),pulse*.80*gold);diffuseColor.rgb*=brightness;');};face.customProgramCacheKey=()=> 'numbered-face-v2';
  const panel=new T.Mesh(geo,face);panel.position.z=.04;g.add(panel);
  const tx=canvasTex(1100,380,(c,w,h)=>{c.fillStyle='#643106';c.font='900 360px FilmBody,Arial';c.textAlign='center';c.textBaseline='middle';c.fillText('#'+id,w/2,h/2,w*.94)});
  const number=new T.Mesh(new T.PlaneGeometry(1.68,.62),new T.MeshBasicMaterial({map:tx,transparent:true,toneMapped:false,depthWrite:false}));number.position.set(0,-.14,.06);g.add(number);
  return {g,face,number};
}
export function numberedPacketBeat(root,stage,mode='room'){
  const camera=new T.PerspectiveCamera(47,720/1280,.01,1500);camera.position.set(.2,3,14);camera.lookAt(0,3,-2);camera.updateMatrixWorld();
  const place=(o,x,y,width,z=0)=>{const target=new T.Vector3(x/720*2-1,1-y/1280*2,.5).unproject(camera),ray=target.sub(camera.position).normalize(),distance=(z-camera.position.z)/ray.z;o.position.copy(camera.position).addScaledVector(ray,distance);o.scale.setScalar(width/720*(14-z)*2*Math.tan(47*Math.PI/360)*(720/1280)/2);};
  const hero=card(root,'0847'),halo=glow(hero.g,4.2,0xffdb60);halo.position.z=-.15;halo.material.opacity=0;
  const context=mode==='cstack'?label(hero.g,'To Los Angeles',1.8,.22,'#e3efff'):null;if(context)context.position.set(0,.82,.02);
  const roomCards=group(root),roomSpec=[[90,166,66,'1303',-.04],[586,380,73,'1131',.025],[106,636,150,'0509',-.12],[221,654,92,'1126',.08],[697,725,145,'0489',-.10],[31,861,104,'0028',.03],[568,842,128,'0346',-.06],[219,822,76,'1143',.13],[495,771,64,'1008',.03],[253,751,62,'1442',-.1],[83,1008,100,'0094',.06],[606,1025,84,'0692',-.03]];
  const ambient=roomSpec.map(([x,y,w,id,tilt],i)=>{const c=card(roomCards,id);place(c.g,x,mode==='cstack'?y+60:y,w,-2-rand(i)*4);c.g.rotation.z=tilt;c.g.visible=mode==='room'||y<660;c.face.uniforms.brightness.value=mode==='room'?.55:.35;return c;});
  const cloud=group(root),atlasCols=8,atlasRows=16;
  const ids=Array.from({length:128},(_,i)=>String(1+Math.floor(rand(i+730)*1499)).padStart(4,'0'));
  const atlas=canvasTex(2048,2048,(c,w,h)=>{for(let i=0;i<128;i++){const x=i%8*256,y=Math.floor(i/8)*128;c.fillStyle='#cd900e';c.fillRect(x+1,y+28,254,99);c.fillStyle='#10182a';c.fillRect(x+1,y+1,254,27);c.fillStyle='#422706';c.font='900 70px FilmBody,Arial';c.textAlign='center';c.textBaseline='middle';c.fillText('#'+ids[i],x+128,y+80,230)}});
  const N=520,geo=new T.PlaneGeometry(2,1.16),offset=new Float32Array(N*2);for(let i=0;i<N;i++){offset[i*2]=(i%128%8)/8;offset[i*2+1]=1-(Math.floor(i%128/8)+1)/16;}geo.setAttribute('cardUv',new T.InstancedBufferAttribute(offset,2));
  const material=new T.MeshBasicMaterial({map:atlas,toneMapped:false});material.onBeforeCompile=s=>{s.vertexShader='attribute vec2 cardUv;\n'+s.vertexShader;s.vertexShader=s.vertexShader.replace('#include <uv_vertex>','#include <uv_vertex>\nvMapUv=vMapUv*vec2(0.125,0.0625)+cardUv;');};material.customProgramCacheKey=()=> 'numbered-cloud-atlas-v1';
  const field=new T.InstancedMesh(geo,material,N),dummy=new T.Object3D();cloud.add(field);
  const nearSpec=[[143,15,130,'0271',.03],[536,45,132,'0712',.12],[193,130,95,'1092',.06],[27,275,130,'0691',-.02],[339,274,146,'0725',.05],[577,295,140,'0533',.09],[263,341,113,'0198',.08],[474,339,104,'0556',.06],[39,426,153,'0213',.1],[225,420,150,'0344',.10],[539,425,118,'0880',-.12],[697,413,127,'1166',-.04],[129,670,133,'0637',.09],[488,674,105,'0370',.08],[43,792,150,'0002',-.1],[367,802,152,'0892',-.11],[587,789,135,'1237',.11],[450,742,125,'0145',-.09],[97,1135,100,'1097',.03]];
  const near=nearSpec.map(([x,y,w,id,tilt],i)=>{const c=card(cloud,id);place(c.g,x,y,w,-rand(i+61)*9);c.g.rotation.z=tilt;c.face.uniforms.brightness.value=(id==='0533'?.19:id==='1237'?.34:id==='1097'?.08:.65+rand(i)*.32);return c;});
  const darkBackdrop=new T.Mesh(new T.PlaneGeometry(150,200),new T.MeshBasicMaterial({color:0x10162e,toneMapped:false}));darkBackdrop.position.set(0,3,-80);cloud.add(darkBackdrop);
  const depthFocus={active:false,hero:hero.g,skies:[],distance:14,aperture:.000045,maxblur:.007};
  hero.g.traverse(o=>o.layers.enable(1));root.traverse(o=>{if(o.isLight)o.layers.enable(1);if(o.geometry?.type==='SphereGeometry'&&o.geometry.parameters.radius>300){o.layers.enable(2);depthFocus.skies.push(o)}});
  return {root,depthFocus,update(local){const t=41.8+local,focus=blend(t,42.03,42.40),pulse=blend(t,42.4,42.94),inCloud=t>=44.7;
    stage.visible=!inCloud;roomCards.visible=!inCloud;cloud.visible=inCloud;depthFocus.active=inCloud;
    const x=mode==='room'?mix(102,374,focus):mix(288,360,focus),y=mode==='room'?mix(352,275,focus):mix(514,475,focus),w=mode==='room'?mix(100,230,focus):mix(220,360,focus);
    place(hero.g,inCloud?360:x,inCloud?(mode==='room'?548:510):y,inCloud?(mode==='room'?176:205):w,0);
    hero.g.rotation.set(0,0,inCloud?0:mix(.065,0,focus));hero.face.uniforms.pulse.value=pulse;hero.face.uniforms.clock.value=t;halo.material.opacity=.13+.34*pulse;if(context)context.visible=!inCloud;
    ambient.forEach((c,i)=>{c.g.rotation.z=roomSpec[i][4]+Math.sin(local*.23+i)*.009;});
    if(inCloud){for(let i=0;i<N;i++){const z=-10-rand(i+930)*60,x=(rand(i+580)-.5)*850+360,y=(rand(i+681)-.5)*1600+640,ww=mix(63,14,(-z-10)/60);place(dummy,x,y+(t-44.7)*8,ww,z);dummy.rotation.set(0,(rand(i)-.5)*.22,(rand(i+31)-.5)*.24);dummy.updateMatrix();field.setMatrixAt(i,dummy.matrix);field.setColorAt(i,new T.Color().setScalar((.16+rand(i+887)*.48)*mix(1,.20,(-z-10)/60)*mix(1,.14,step(y,850,1160))));}field.instanceMatrix.needsUpdate=true;field.instanceColor.needsUpdate=true;near.forEach((c,i)=>{c.face.uniforms.clock.value=t+i;});}
  },camera(){return {eye:[.2,3,14],look:[0,3,-2],fov:47}}};
}
