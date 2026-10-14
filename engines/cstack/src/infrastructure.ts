// @ts-nocheck
// Detailed infrastructure parts and action-led shots, reusable for new stories.
import {T,P,V,group,mat,box,cyl,ball,rod,tube,line,label,glow,signal,packet,rack,tower,palm,canvasTex,rand,step,ease,mix} from './kit/objects';
import {studio,surface,ocean,practical} from './production-kit';
const cam=(eye,look,fov=46)=>({eye,look,fov});
export function litCity(root,{la=false,z=-38,scale=1}={}){
 const g=group(root,0,0,z);g.scale.setScalar(scale);
 const tex=canvasTex(512,1024,(c,w,h)=>{c.fillStyle='#030916';c.fillRect(0,0,w,h);for(let y=0;y<64;y++)for(let x=0;x<28;x++){let q=rand(x*71+y+7);c.fillStyle=q>.84?'#aaccfa':q>.75?'#e5c69e':'#101a29';c.fillRect(x*18+5,y*16+3,5+rand(x+y)*5,7);}});
 const material=new T.MeshStandardMaterial({map:tex,color:0x809ab7,emissiveMap:tex,emissive:0xffffff,emissiveIntensity:.48,roughness:.64,metalness:.18});
 for(let i=0;i<84;i++){const x=(i%14-6.5)*4+(rand(i+600)-.5)*2,zz=-Math.floor(i/14)*7-rand(i+203)*4,hh=2+rand(i+97)**1.5*(la?13:19),ww=1.8+rand(i+50)*1.6;
  box(g,ww,hh,2.7,material,x,hh/2,zz,.006);box(g,ww+.015,.025,2.715,mat(0x142137,.25,.8),x,hh+.02,zz,.002);
  if(i%7===0)rod(g,[x,hh,zz],[x,hh+1.1,zz],.025,mat(0x779acd,.45,.4,.25));
 }
 if(!la){
  const pearl=group(g,-13,0,-14);cyl(pearl,.18,27,mat(0x6089c2,.72,.28),0,13.5);for(const y of [11,21]){ball(pearl,y===11?1.15:.8,mat(0x608ccc,.72,.25),0,y);practical(pearl,[0,y,0],0x7fbeff,10,4,.9);}rod(pearl,[0,25,0],[0,31,0],.08,mat(0xa0cdfc,.8,.3));
  const financial=group(g,4,0,-21);box(financial,2.3,26,1.8,material,0,13);for(const x of [-1.18,1.18])rod(financial,[x,0,.93],[x,27,.93],.018,mat(0x98c9f8,.2,.4,.5));line(financial,[[-1.18,27,.93],[1.18,27,.93]],0xa1caff,.9);box(financial,1.7,.7,.1,mat(0x020719),0,24.8,1);
  const taper=group(g,11,0,-24);cyl(taper,1.35,29,material,0,14.5,0,.50,8);rod(taper,[0,29,0],[0,32,0],.04,mat(0xa8d4ff));practical(taper,[0,32,0],0xafd4ff,2,3,1.1);
 }
 return g;
}
export function ventCabinet(root,x,y,z,w=2,h=3){
 const g=group(root,x,y,z),body=mat(0x3d4c67,.62,.48),dark=mat(0x080e19,.3,.72);box(g,w,h,1.15,body,0,h/2);box(g,w*.9,h*.89,.06,dark,0,h/2,.61);
 for(let j=0;j<24;j++)box(g,w*.81,.032,.05,body,0,.25+j*(h-.5)/24,.67);
 box(g,w*.35,.8,.07,body,-w*.23,1,.68);box(g,.08,.28,.05,mat(0x899bb5,.8,.3),w*.36,1.1,.67);return g;
}
export function cableLanding(kind){
 const la=kind==='la',root=studio({wide:true}),sea=ocean(root,{size:380,z:-100,y:-.45});const skyline=litCity(root,{la,z:la?-120:-68,scale:la?.8:.78});if(la)skyline.position.x=-34;sea.shader.uniforms.glint.value.set(la?'#efc14b':'#657dba');if(la)sea.shader.fragmentShader=sea.shader.fragmentShader.replace('float mist=','float pulseLight=exp(-length(p.xz-source.xz)*.065);c+=glint*pulseLight*(.07+shine*.6)*(.35+.65*abs(sin(p.z*9.+dx*14.)));float mist=');
 const tile=canvasTex(1024,1024,(c,w,h)=>{c.fillStyle='#303b57';c.fillRect(0,0,w,h);for(let i=0;i<1800;i++){let x=rand(i)*w,y=rand(i+70)*h;c.fillStyle=`rgba(126,150,190,${rand(i+91)*.08})`;c.fillRect(x,y,3,2);}c.strokeStyle='#0d172e';c.lineWidth=4;for(let j=0;j<=4;j++){c.beginPath();c.moveTo(j*w/4,0);c.lineTo(j*w/4,h);c.moveTo(0,j*h/4);c.lineTo(w,j*h/4);c.stroke();}});tile.wrapS=tile.wrapT=T.RepeatWrapping;tile.repeat.set(3,3);
 const floor=new T.Mesh(new T.BoxGeometry(la?180:32,.5,la?180:30),new T.MeshStandardMaterial({map:tile,color:0xb0bdd5,roughness:.68,metalness:.16}));floor.position.set(0,-.26,la?-110:4);floor.receiveShadow=true;root.add(floor);
 if(!la){
  box(root,7,5,12,mat(0x344259,.55,.63),-6.6,2.5,-1);
  box(root,7.35,.24,12.35,mat(0x8597b4,.68,.4),-6.6,5.0,-1);
  for(let i=0;i<4;i++){ventCabinet(root,-9+i*1.7,5.14,-.5,1.45,1.12);}
  for(let z of [-4,-.7,2.6]){box(root,.07,3.4,2.7,mat(0x17243c,.5,.6),-3.04,1.8,z);for(let j=0;j<9;j++)box(root,.08,.035,1.9,mat(0x667d9f,.5,.4),-2.96,1.1+j*.14,z);}
  const cabinet=ventCabinet(root,4.5,0,1.2,2.6,3.8);cabinet.rotation.y=-.38;
  const lamp=group(root,4.1,0,-1);rod(lamp,[0,0,0],[0,8.5,0],.11,mat(0x202b40,.65,.4));rod(lamp,[0,8.5,0],[-2.2,8.5,0],.10,mat(0x26344b));box(lamp,1.4,.22,.8,mat(0x41577a),-2.1,8.4);practical(lamp,[-2.1,8.2,0],0xc3e8ff,170,21,1.7);
  const wallLight=practical(root,[-2.8,3.5,1.3],0xffcd8c,120,15,1.4);box(root,.35,.16,.9,mat(0x20354e),-2.7,3.55,1.3);
  for(let x=-11;x<12;x+=2){rod(root,[x,0,-10.5],[x,1.7,-10.5],.04,mat(0x63799b,.75,.4));for(let j=0;j<6;j++)line(root,[[x,.15+j*.26,-10.5],[x+1.9,.15+j*.26,-8.5]],0x536787,.5);}
 }else{
  for(let i=0;i<32;i++){const side=i%2?1:-1,z=-27-Math.floor(i/2)*7.2;palm(root,side*(6+rand(i)*1.6),z,7+rand(i+51)*2);rod(root,[side*5.3,0,z],[side*5.3,3.7,z],.045,mat(0x3b4c65,.5,.5));const lamp=glow(root,.5,0xc6d2f3);lamp.position.set(side*5.3,3.7,z);}
  for(let i=0;i<24;i++){const side=i%2?1:-1,z=-25-Math.floor(i/2)*8;box(root,8,2.2+rand(i)*1.6,5,mat(0x18243b,.2,.65),side*(15+rand(i)*8),1.5,z);for(let j=0;j<5;j++)box(root,.5,.38,.015,mat(0xc3d6f0,.1,.5,1),side*(12+rand(i)*8)+j*1.1,1.6,z+2.52);}

 }
 const pts=la?[[0,-.30,24],[0,-.30,8],[0,-.30,-16],[0,.14,-22],[0,.14,-70]]:[[-1,.17,20],[-.8,.17,10],[-1.8,.17,6],[-2.9,.35,4],[-3.02,2.1,1.3],[-3.02,1.1,-5],[-1,.1,-8],[0,-.6,-18],[0,-.8,-70]];
 tube(root,la?pts.map(p=>[p[0],p[1]<0?-.68:p[1],p[2]]):pts,.105,mat(0x7389b3,.78,.4),120);const pulseGroup=group(root),pulse=signal(pulseGroup,pts,{r:.032,size:la?4.5:2.7});if(la)pulseGroup.children.filter(o=>o.isMesh).forEach(o=>o.visible=false);
 const title=label(root,la?'Los Angeles':'Shanghai',5,.9);title.position.set(la?-8:-11,la?11:15,-30);
 if(!la){const sub=label(root,'cable landing',4,.6,'#8dd5ff');sub.position.set(-11,13.9,-30);}
 return{root,fogDensity:.002,environmentIntensity:.38,update(t){pulse.at(ease(step(t,0,la?3.7:3.17)));if(la){const p=pulse.path.getPointAt(ease(step(t,0,3.7)));sea.shader.uniforms.source.value.set(p.x,5,p.z);}sea.update(t,this.camera(t).eye);},camera(t){return la?cam([0,3.4,22-t*2.2],[0,3.0,-55],51):cam([.3-t*.12,7.3,19-t*.65],[-.8,1,-8],48)}};
}
export function cityRadio(kind){
 const root=studio({wide:true});surface(root,180,'#111a36');litCity(root,{la:kind==='receive-radio',z:-24});
 for(const side of [-1,1]){box(root,10,.035,100,mat(0x101726,.3,.38),side*10,-.01,-30);for(let i=0;i<26;i++){box(root,6,.008,.055,mat(0x8597b4,.15,.7),side*10,.013,8-i*3.8);const light=glow(root,.45,0x82b8ff);light.position.set(side*4,.15,8-i*3.8);}}
 const mast=tower(root,kind==='tower'?0:4,-10,17);mast.visible=kind!=='send-radio';
 const beacon=practical(root,[kind==='tower'?0:4,17.4,-10],0xf07066,12,5,.7);beacon.visible=mast.visible;
 const phone={position:[-2.5,3.2,1.2],rotation:[-.05,.10,-.08],scale:2.55,mode:'thread'};
 const packets=[];if(kind==='send-radio')for(let i=0;i<65;i++){let a=packet(root,String(100+Math.floor(rand(i+23)*1300)).padStart(4,'0'),.48);packets.push(a);}
 const waveCenter=kind==='send-radio'?new T.Vector3(-2.5,4.4,.5):new T.Vector3(4,15,-10);
 const waves=[];for(let i=0;i<4;i++){const m=new T.ShaderMaterial({transparent:true,depthWrite:false,side:T.DoubleSide,uniforms:{opacity:{value:.4}},vertexShader:'varying vec3 n,v;void main(){vec4 mv=modelViewMatrix*vec4(position,1.);n=normalize(normalMatrix*normal);v=normalize(-mv.xyz);gl_Position=projectionMatrix*mv;}',fragmentShader:'uniform float opacity;varying vec3 n,v;void main(){float f=pow(1.-abs(dot(normalize(n),normalize(v))),3.8);gl_FragColor=vec4(1.,.64,.11,f*opacity);}' });const o=new T.Mesh(new T.SphereGeometry(1,48,32),m);o.position.copy(waveCenter);root.add(o);waves.push(o);}
 const ground=kind==='ground';if(ground){ventCabinet(root,-2.6,0,-6,2.2,3.5);ventCabinet(root,.1,0,-6,2.2,3.5);}
 const pathGroup=group(root);pathGroup.visible=ground||kind==='tower';const path=signal(pathGroup,[[4,16,-10],[4,6,-10],[3,.18,-8],[0,.18,-5],[-4,.18,1],[5,.18,5]],{size:2.4,r:.04});
 return{root,phone:kind==='send-radio'?phone:null,fogDensity:.003,environmentIntensity:.35,update(t){
  phone.scale=2.55*(1-.88*ease(step(t,4.65,6.13)));phone.position[0]=mix(-2.5,-5.2,ease(step(t,4.65,6.13)));
  packets.forEach((o,i)=>{const q=(t*.24+rand(i+18))%1;const a=rand(i+8)*6.28;const spread=2.2*ease(step(q,.15,.7));o.position.set(-2.5+Math.cos(a)*spread,2.9+q*9,1+Math.sin(a)*spread-q*4);o.rotation.z=(rand(i)-.5)*.25;o.scale.setScalar(Math.sin(q*Math.PI)*.9);});
  waves.forEach((o,i)=>{const q=(t*.27+i/4)%1;o.scale.setScalar(.7+q*12);o.material.uniforms.opacity.value=.42*(1-q);o.visible=kind==='send-radio'||kind==='receive-radio';});path.at(ground?ease(step(t,0,2.6)):ease(step(t,.2,2.9)));
 },camera(t){if(kind==='tower')return cam([3.2,mix(17,9,ease(step(t,0,3))),2.7],[0,mix(15,8,ease(step(t,0,3))),-10],43);if(ground)return cam([6,3.1,11],[-1,1.5,-6],46);if(kind==='receive-radio')return cam([13,15,15],[3,11,-11],46);return cam([.1+step(t,4.4,6.1),5.7,15.5-t*.13],[-.5,5.6,-8],48)}};
}

export function infrastructureWorld(){
 const root=studio({wide:true}),R=150;
 const night=canvasTex(2048,2048,(c,w,h)=>{c.fillStyle='#162443';c.fillRect(0,0,w,h);for(let j=0;j<360;j++){const x=rand(j+33)*w,y=rand(j+311)*h,r=8+rand(j+90)*42;const g=c.createRadialGradient(x,y,0,x,y,r);g.addColorStop(0,'#f4dcbfa0');g.addColorStop(.15,'#b8d2ff66');g.addColorStop(1,'#7eaaff00');c.fillStyle=g;c.fillRect(x-r,y-r,r*2,r*2);for(let i=0;i<95;i++){const a=rand(i+j*133)*6.28,d=rand(i+j*203)**.7*r;c.fillStyle=i%3?'#b9d6ff':'#ead8b1';c.fillRect(x+Math.cos(a)*d,y+Math.sin(a)*d,1,1)}}});
 const h=(x,z)=>Math.sqrt(Math.max(0,R*R-x*x-z*z))-R;
 const worldGeometry=new T.PlaneGeometry(220,220,128,128);worldGeometry.rotateX(-Math.PI/2);const vertices=worldGeometry.attributes.position;for(let i=0;i<vertices.count;i++)vertices.setY(i,h(vertices.getX(i),vertices.getZ(i)));worldGeometry.computeVertexNormals();
 const world=new T.Mesh(worldGeometry,new T.MeshStandardMaterial({map:night,emissiveMap:night,emissive:0xc0d7ff,emissiveIntensity:.65,color:0x7796c9,roughness:.74,metalness:.06}));root.add(world);
 const nodes=[[-6,6,'rack'],[8,3,'tower'],[-4,-10,'router'],[5.5,-19,'server'],[-8,-25,'tower'],[7,23,'tower']];
 const padMat=mat(0x0c152a,.65,.4),edgeMat=mat(0x83a7db,.45,.35,.3);
 for(const [x,z,type] of nodes){const y=h(x,z),g=group(root,x,y,z);cyl(g,type==='server'?5:type==='router'?4:3.3,.26,padMat,0,.13,0,undefined,6);cyl(g,type==='server'?5.05:type==='router'?4.05:3.35,.055,edgeMat,0,.08,0,undefined,6);
  if(type==='rack'){const r=rack(g,0,0,1.35);r.position.y=.28;}
  if(type==='tower'){const tw=tower(g,0,0,9);tw.position.y=.28;}
  if(type==='server'){for(let i=0;i<4;i++){const r=group(g,(i-1.5)*1.65,.3,0);box(r,1.55,5.3,2,mat(0x0b1932,.7,.36),0,2.65);for(let j=0;j<25;j++){box(r,1.3,.10,.045,mat(0x293e62,.7,.4),0,.24+j*.195,1.04);for(let k=0;k<2;k++)box(r,.027,.025,.02,mat(0xb6d9ff,.1,.5,1.0),-.48+k*.13,.24+j*.195,1.073);}}}
  if(type==='router'){box(g,5,.6,3.1,mat(0xb8c8e2,.36,.33),0,.62);box(g,4.65,.06,2.8,mat(0x0a142a,.3,.5),0,.97);for(let i=0;i<4;i++)rod(g,[-1.95+i*1.3,.96,-1.1],[-2.3+i*1.53,4.2,-1.8],.075,mat(0x0a1422));for(let i=0;i<6;i++)ball(g,.055,mat(0x9edfff,.1,.6,2),-1.3+i*.51,.62,1.59);}
 }
 for(let i=0;i<7;i++)for(let j=0;j<8;j++){const x=(j-3.5)*13,z=(i-5)*14,pts=[[x,h(x,z)+.12,z],[x+9,h(x+9,z-5)+.12,z-5],[x+13,h(x+13,z-14)+.12,z-14]];line(root,pts,0xa7d4ff,.6);}
 for(let i=0;i<nodes.length;i++){const [x,z]=nodes[i],n=nodes[(i+1)%nodes.length],pts=[];for(let j=0;j<=30;j++){const q=j/30,xx=mix(x,n[0],q),zz=mix(z,n[1],q);pts.push([xx,h(xx,zz)+.18,zz]);}tube(root,pts,.025,mat(0x9edaff,.15,.45,.3),40);}
 const glowPoint=practical(root,[-5,1,-4],0xc3ddff,42,30,2.1);
 return {root,fogDensity:.001,environmentIntensity:.45,update(t){glowPoint.children[0].intensity=32+12*Math.sin(t*.7);},camera(t){const q=ease(step(t,0,6.86));return cam([mix(4,1,q),mix(28,24,q),mix(40,36,q)],[0,2,-5],47)}};
}
