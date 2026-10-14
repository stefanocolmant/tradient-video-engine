// @ts-nocheck
// Macro subjects stay large enough to explain their construction on a phone.
import {T,P,group,mat,cyl,rod,tube,glow,label,canvasTex,rand,step,ease,mix} from './kit/objects';
import {studio,practical} from './production-kit';
import {rock} from './kit/realism/shapes';
export function cableMacro(kind){
 const root=studio();
 const sand=canvasTex(1024,1024,(c,w,h)=>{c.fillStyle='#283454';c.fillRect(0,0,w,h);for(let y=0;y<h;y+=4){c.strokeStyle=`rgba(99,120,177,${.12+rand(y)*.16})`;c.beginPath();for(let x=0;x<w;x+=8){const yy=y+Math.sin(x*.03+y*.031)*1.4;x?c.lineTo(x,yy):c.moveTo(x,yy)}c.stroke();}});
 sand.wrapS=sand.wrapT=T.RepeatWrapping;sand.repeat.set(5,5);
 const floor=new T.Mesh(new T.PlaneGeometry(90,90),new T.MeshStandardMaterial({map:sand,color:0x7a91b5,roughness:.95,bumpMap:sand,bumpScale:.055}));floor.rotation.x=-Math.PI/2;floor.position.y=-1.9;floor.receiveShadow=true;root.add(floor);
 const stone=new T.InstancedMesh(rock({seed:27,detail:2,cuts:5}),mat(0x111a2c,.05,.9),100),d=new T.Object3D();
 for(let i=0;i<100;i++){const s=.08+rand(i+17)**3*.55;d.position.set((rand(i+28)-.5)*34,-1.8,(rand(i+66)-.5)*34);d.scale.set(s*1.3,s*.6,s);d.rotation.y=rand(i)*6;d.updateMatrix();stone.setMatrixAt(i,d.matrix);}stone.castShadow=true;root.add(stone);
 const steel=new T.MeshStandardMaterial({color:0xb5c5e2,metalness:.86,roughness:.34,envMapIntensity:1.8}),coat=mat(0x102851,.22,.5),copper=mat(0xb9876c,.65,.47),white=mat(0xdae8fa,.12,.5),glass=mat(0xc5ffff,.1,.2,.9);
 const assembly=group(root,0,.7,0);assembly.rotation.set(-Math.PI/2,0,0);
 // Cylinders grow along Y: jacket -> armour -> buffer -> copper -> glass.
 const cable=group(assembly,kind==='hose'?-.58:0,0,0);
 if(kind==='hose'){
  cyl(cable,.46,24,mat(0x16253c,.72,.38),0,0,0);
  for(let k=0;k<24;k++){const pts=[];for(let j=0;j<=300;j++){const y=-12+j*.08,a=k/24*Math.PI*2+y*.72;pts.push([Math.cos(a)*.46,y,Math.sin(a)*.46])}tube(cable,pts,.057,steel,300);}
  const hose=group(assembly,.62,0,.2);const weave=canvasTex(512,1024,(c,w,h)=>{c.fillStyle='#24bb6a';c.fillRect(0,0,w,h);for(let i=0;i<256;i++){c.strokeStyle=i%2?'#158c50':'#5edd94';c.lineWidth=.9;c.beginPath();c.moveTo(i*3,0);c.lineTo(i*3+80,h);c.stroke();}for(let y=0;y<h;y+=4){c.fillStyle='#72e4a433';c.fillRect(0,y,w,1)}});
  const rubber=new T.MeshStandardMaterial({map:weave,color:0xa7ffc4,roughness:.48,bumpMap:weave,bumpScale:.022});cyl(hose,.43,18,rubber,0,-6.5,0);
  const brass=mat(0xb88e3c,.86,.29);cyl(hose,.48,1.30,brass,0,2.05,0);cyl(hose,.53,.35,brass,0,2.37,0,.53,6);
  for(let y=1.5;y<2.8;y+=.13)cyl(hose,.505,.045,brass,0,y,0);
  cyl(hose,.39,.014,mat(0x10221b,.12,.82),0,2.83,0);const rim=new T.Mesh(new T.TorusGeometry(.45,.055,12,48),brass);rim.rotation.x=Math.PI/2;rim.position.y=2.84;hose.add(rim);
 }else{
  cyl(cable,.89,6.4,mat(0x101d35,.4,.6),0,-4.1,0);
  for(let k=0;k<22;k++){const pts=[];for(let j=0;j<=140;j++){const y=-7.3+j*.045,a=k/22*Math.PI*2+y*.4;pts.push([Math.cos(a)*.90,y,Math.sin(a)*.90]);}tube(cable,pts,.12,steel,140);}
  cyl(cable,.78,5.5,coat,0,-2.25,0);cyl(cable,.64,4.7,white,0,-1.40,0);cyl(cable,.50,3.5,steel,0,-.28,0);cyl(cable,.36,2.35,copper,0,.95,0);cyl(cable,.275,1.9,white,0,1.55,0);
  for(let k=0;k<8;k++){const a=k*Math.PI/4;const pts=[[Math.cos(a)*.09,2.15,Math.sin(a)*.09],[Math.cos(a)*.12,3.3,Math.sin(a)*.12],[Math.cos(a)*.35,4.8+rand(k)*.6,Math.sin(a)*.35]];tube(cable,pts,.014,glass,40);}
  practical(cable,[0,2.1,.3],0xc6e3ff,8,5,.8);
 }
 return {root,environmentIntensity:.35,fogDensity:.007,update(t){assembly.rotation.z=kind==='fiber'?-.50:.08;assembly.rotation.y=mix(-.035,.035,ease(step(t,0,3.3)));},camera(t){return kind==='hose'?{eye:[.6,8.8,9.3-t*.18],look:[0,.3,0],fov:43}:{eye:[.2,9.6,10.4-t*.25],look:[0,.3,-.2],fov:44};}};
}
