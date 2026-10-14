// @ts-nocheck
// Film direction built from the shared CStack parts. New scripts reuse the parts,
// lighting and cue APIs; this storyboard is specific to the photo's journey.
import {T,P,V,group,mat,box,cyl,ball,tube,line,rod,label,glow,signal,tower,city,palm,packet,padlock,step,ease,mix,rand} from './kit/objects';
import {numberedPacketBeat} from './numbered-packets';
import {studio,surface,ocean,practical,bokeh} from './production-kit';
import {underseaScene} from './undersea';
import {rack} from './kit/objects';
const cam=(eye,look,fov=46)=>({eye,look,fov});

export {marineRun} from './marine-shots';

export {routedNetwork} from './network-shots';

export function explanation(kind){
  const root=studio();if(kind==='packet-number'){const stage=group(root);surface(stage,180,'#080f20');return numberedPacketBeat(root,stage,'cstack');}surface(root,180,'#080f20');
  const cards=[];
  if(kind==='packet-number'){
    for(let i=0;i<30;i++){const a=packet(root,String(21+i*43).padStart(4,'0'),.75);a.position.set((rand(i+6)-.5)*20,(rand(i+60)-.5)*17+4,-6-rand(i+16)*18);a.rotation.z=(rand(i)-.5)*.3;cards.push(a);}
    const hero=packet(root,'0847',4.6,true);hero.position.set(0,4,0);cards.unshift(hero);
    practical(root,[0,2,2],P.gold,22,12,1.6);
  }
  const path=signal(root,[[-12,2,0],[-6,2,0],[0,2,0],[7,2,0],[16,2,0]],{r:.025,size:2.3});
  path.core.visible=path.light.visible=kind==='slowdown';
  for(let i=0;i<28;i++){const a=glow(root,.35,P.cyan);a.position.set((rand(i+18)-.5)*32,rand(i+28)*15-1,-8-rand(i+91)*15);if(kind==='network-intro'){const b=glow(root,.6,P.cyan);b.position.copy(a.position);const j=(i+3)%28;line(root,[a.position,[(rand(j+18)-.5)*32,rand(j+28)*15-1,-8-rand(j+91)*15]],P.cyan,.27);}}
  if(kind==='slowdown')for(let i=0;i<60;i++)box(root,.025,.22,.025,mat(P.cyan,.1,.6,.5),-12+i*.48,1.62,0);
  return {root,update(t){path.at(ease(step(t,0,5.5)));cards.forEach((o,i)=>{o.rotation.y=Math.sin(t*.25+i)*.09;});},camera(t){return cam([.2,4,kind==='packet-number'?16:20-t*.12],[0,3.7,-1],46)}};
}

export function coastal(kind){
  const la=kind==='la';const root=studio({wide:true});
  const sea=ocean(root,{size:360,z:-185,y:-.28});
  const skyline=city(root,{la});skyline.position.set(0,-.2,-65);skyline.scale.setScalar(1.15);
  // Foreground waterfront with actual parapet, pavement and cable cabinets.
  const dock=box(root,44,.55,24,mat(0x19243b,.15,.85),0,-.3,5);
  for(let i=-7;i<8;i++){line(root,[[i*3,.015,-7],[i*3,.015,17]],0x526078,.25);line(root,[[-22,.015,i*2+5],[22,.015,i*2+5]],0x526078,.20);}
  for(const side of [-1,1]){
    for(let z=-6;z<17;z+=3)rod(root,[side*20,0,z],[side*20,1.4,z],.045,mat(0x718298,.8,.34));
    rod(root,[side*20,1.4,-7],[side*20,1.4,17],.045,mat(0x718298,.8,.34));
  }
  if(la){for(let i=0;i<12;i++){palm(root,(i%2?1:-1)*(9+rand(i)*5),-5-Math.floor(i/2)*5,8+rand(i+1)*3);}}
  else {
    for(let i=0;i<2;i++){
      box(root,2.4,3.7,1.3,mat(0x596575,.55,.43),-8+i*2.55,1.85,-1);
      for(let j=0;j<14;j++)box(root,1.8,.035,.05,mat(0x101a26),-8+i*2.55,2.9-j*.09,-.31);
      box(root,.07,.5,.08,mat(0x8da1b6,.8,.3),-7.15+i*2.55,1.65,-.27);
      practical(root,[-8+i*2.55,2.4,-.25],0x93cbff,16,7,.3);
    }
    for(const x of [-11,11]){rod(root,[x,0,-5],[x,7,-5],.1,mat(0x34455e,.8,.35));rod(root,[x,7,-5],[x+1.4,7,-5],.1,mat(0x34455e));box(root,1.6,.17,.8,mat(0x23344a),x+.7,7,-5);practical(root,[x+.7,6.8,-5],0xbcd8ff,85,17,1.2);}
  }
  const energy=signal(root,[[-5,.15,8],[-4,.15,2],[0,.15,-4],[0,-.10,-20],[0,-.15,-80]],{r:.035,size:3});
  const title=label(root,la?'Los Angeles':'Shanghai',5,.7);title.position.set(la?0:-5,la?6:8,-25);
  return {root,update(t){energy.at(la?1-ease(step(t,0,3.7)):ease(step(t,0,3.2)));const c=this.camera(t);sea.update(t,c.eye);},camera(t){return la?cam([0,3.6,18-t*1.9],[0,3,-30],53):cam([6-t*.25,5.8,14],[-4,2,-9],53)}};
}

export function cableSection(kind){
  const root=studio();surface(root,120,'#070e20');
  const g=group(root,0,kind==='fiber'?4:2.3,0);g.rotation.set(.20,0,kind==='fiber'?-1.05:-.30);
  const coat=mat(0x111c30,.18,.67),steel=mat(0x8c9db5,.93,.25),copper=mat(0xa77346,.88,.29),foam=mat(0xd1dce8,.1,.72),glass=mat(0x73d9ff,.1,.22,.5);
  const section=(radius,len,m,x)=>{const o=cyl(g,radius,len,m,x,0,0);o.rotation.z=Math.PI/2;return o;};
  section(1.05,7,coat,-4.7);section(.9,3.3,steel,-1.2);section(.72,2.6,copper,1.0);section(.58,2.2,foam,2.55);section(.35,2.4,coat,3.55);
  for(let i=0;i<22;i++){const a=i/22*Math.PI*2;const pts=[];for(let j=0;j<=80;j++){const x=-8+j*.09,ang=a+j*.10;pts.push([x,Math.cos(ang)*.94,Math.sin(ang)*.94]);}tube(g,pts,.052,steel,80);}
  for(let i=0;i<8;i++){const a=i/8*Math.PI*2;tube(g,[[3.7,Math.cos(a)*.14,Math.sin(a)*.14],[5,Math.cos(a)*.20,Math.sin(a)*.20],[6.8,Math.cos(a)*.65,Math.sin(a)*.65]],.021,glass,40);}
  const garden=group(root,0,.65,4);tube(garden,[[-8,0,0],[-3,0,0],[4,0,0]],.42,mat(0x176d45,.08,.76));
  for(let x=3.6;x<4.3;x+=.13){const o=cyl(garden,.53,.08,mat(0xbda064,.9,.3),x,0,0);o.rotation.z=Math.PI/2;}
  const fibre=practical(root,[6.8,3,0],P.cyan,30,12,1.8);
  const tag=label(root,kind==='hose'?'Garden hose':'Glass fibre',3.2,.55);tag.position.set(kind==='hose'?3:-2,kind==='hose'?1.5:6,3);
  garden.visible=kind==='hose';fibre.visible=kind==='fiber';
  return {root,update(t){g.rotation.y=mix(-.17,.15,ease(step(t,0,3.3)));g.scale.setScalar(kind==='hose'?.63:.92);},camera(t){return kind==='fiber'?cam([9,8,23-t*.25],[0,3.4,0],44):cam([7,10,25-t*.25],[0,2,0],49)}};
}

export function historicalSea(model){
  const root=studio({warm:true,wide:true});const sea=ocean(root,{size:500,z:-90});
  const hero=group(root,-2,0,-3);let copy;
  if(model){copy=model.clone(true);const bounds=new T.Box3().setFromObject(copy),size=bounds.getSize(new T.Vector3()),center=bounds.getCenter(new T.Vector3());const scale=13/Math.max(size.x,size.z);copy.scale.setScalar(scale);copy.position.set(-center.x*scale,-bounds.min.y*scale-.75,-center.z*scale);copy.traverse(o=>{if(o.isMesh){o.castShadow=o.receiveShadow=true;}});hero.add(copy);}
  hero.rotation.y=-.52;
  const far=hero.clone(true);far.position.set(-13,-.1,-38);far.scale.setScalar(.68);root.add(far);
  const moon=ball(root,2.3,new T.MeshBasicMaterial({color:0xf3e7ce}),-18,25,-100);glow(root,14,0xb1bfd9).position.copy(moon.position);
  practical(root,[2,2,1],0xffc883,8,14,.6);sea.shader.uniforms.source.value.copy(moon.position);
  return {root,environmentIntensity:.48,fogDensity:.0012,fogColor:0x080d1a,update(t){hero.rotation.z=Math.sin(t*.8)*.015;hero.rotation.x=Math.sin(t*.6)*.022;hero.position.y=Math.sin(t*.8)*.1;far.rotation.z=Math.sin(t*.5+1)*.015;sea.update(t,this.camera(t).eye);},camera(t){return cam([14-t*.55,6.3,20-t*.8],[-2,4.5,-4],48)}};
}

export function networkHorizon(){
  const root=studio({wide:true});const R=75;
  const globe=new T.Mesh(new T.SphereGeometry(R,96,64),mat(0x101f3d,.42,.48));globe.position.y=-R;globe.receiveShadow=true;root.add(globe);
  const h=(x,z)=>Math.sqrt(Math.max(0,R*R-x*x-z*z))-R;
  for(let i=0;i<320;i++){
    const x=(rand(i+77)-.5)*120,z=(rand(i+409)-.5)*120;
    const dot=glow(root,.12+rand(i+214)**4*.9,i%5?0x95b9e3:0xf5deab);dot.position.set(x,h(x,z)+.08,z);dot.material.opacity=.25+rand(i)*.45;
    if(i<70){const pts=[];for(let j=0;j<=10;j++){const xx=x+j*.65,zz=z+j*.3;pts.push([xx,h(xx,zz)+.1,zz]);}line(root,pts,0x629bd0,.24);}
  }
  const lightPositions=[],lightColors=[];
  for(let i=0;i<7000;i++){const x=(rand(i+940)-.5)*95,z=-65+rand(i+380)*96;lightPositions.push(x,h(x,z)+.12,z);const v=.35+rand(i)*.5;lightColors.push(v*.8,v*.9,v);}
  const points=new T.BufferGeometry();points.setAttribute('position',new T.Float32BufferAttribute(lightPositions,3));points.setAttribute('color',new T.Float32BufferAttribute(lightColors,3));root.add(new T.Points(points,new T.PointsMaterial({size:.065,vertexColors:true,transparent:true,opacity:.65,toneMapped:false})));
  const houses=new T.InstancedMesh(new T.BoxGeometry(1,1,1),mat(0x132747,.45,.65),220),instance=new T.Object3D();
  for(let i=0;i<220;i++){const x=(rand(i+48)-.5)*80,z=-15-rand(i+323)*50,hh=.3+rand(i+610)*2;instance.position.set(x,h(x,z)+hh/2,z);instance.scale.set(.4+rand(i+889),hh,.5+rand(i+139));instance.updateMatrix();houses.setMatrixAt(i,instance.matrix);}root.add(houses);
  const nodes=[[-8,0],[-5,-12],[9,-10],[13,-28],[-15,-33],[2,-45]];
  for(let i=0;i<nodes.length;i++){
    const [x,z]=nodes[i],y=h(x,z);const r=rack(root,x,z,.9);r.position.y=y;
    if(i%2===0){const tw=tower(root,x+4,z-4,8.5);tw.position.y=h(x+4,z-4);}
    const path=[];for(let j=0;j<=20;j++){const q=j/20,xx=x*(1-q),zz=mix(z,9,q);path.push([xx,h(xx,zz)+.1,zz]);}tube(root,path,.022,mat(0x3b719c,.3,.4,.5),48);
  }
  const router=group(root,0,h(0,9),9);box(router,3.7,.43,2.5,mat(0xa2b1cc,.45,.4),0,.28);box(router,3.9,.12,2.7,mat(0x081226),0,.02);
  for(const side of [-1,1])rod(router,[side*1.4,.45,-.8],[side*1.6,2.4,-1],.055,mat(0x0d1b30));
  for(let i=0;i<5;i++)box(router,.07,.025,.04,mat(P.cyan,.1,.5,2),-.65+i*.22,.3,1.27);
  const path=[];for(let i=0;i<=40;i++){const q=i/40,x=-8*(1-q),z=9*q;path.push([x,h(x,z)+.14,z]);}
  const pulse=signal(root,path,{r:.021,size:1.8});const hero=packet(root,'0847',1.2,true);
  return {root,update(t){const q=ease(step(t,.2,5.5));pulse.at(q);hero.position.copy(pulse.core.position);hero.position.y+=1.25;hero.scale.setScalar(1-.8*ease(step(t,5.4,6.6)));},camera(t){const q=ease(step(t,0,6.7));return cam([mix(14,4,q),mix(16,5,q),mix(36,19,q)],[0,1,mix(-10,7,q)],49)}};
}
