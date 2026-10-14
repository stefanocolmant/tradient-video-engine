// @ts-nocheck
// A23 nested cable-construction technique; no seabed, geography or second order.
import {T,group,cyl,tube,mat,glow} from './objects';
import {practical} from '../production-kit';
import {patch,weather} from '../kit/realism/shade';
export function cableConstruction(parent,d){
 const root=group(parent,...d.position);root.rotation.x=-Math.PI/2;root.scale.setScalar(d.scale);
 const steel=new T.MeshPhysicalMaterial({color:0xc1d4e7,metalness:.86,roughness:.29,clearcoat:.25});
 patch(steel,weather({base:'#9aafc3',vary:.08,scale:3,bump:.0008,bumpScale:.03,rough:[.23,.36]}));
 const coat=mat(0x132d50,.28,.5),polymer=mat(0xd5e5ed,.12,.47),copper=mat(0xb78561,.74,.35),glass=mat(0xbedfff,.1,.15,.3);
 const jacket=cyl(root,.89,6.4,coat,0,-4.1,0),armor=group(root);
 for(let k=0;k<d.armorCount;k++){const pts=[];for(let j=0;j<=140;j++){const y=-7.3+j*.045,a=k/d.armorCount*Math.PI*2+y*.4;pts.push([Math.cos(a)*.90,y,Math.sin(a)*.90]);}tube(armor,pts,.12,steel,140);}
 const layers=[];for(const [radius,length,y,material]of [[.78,5.5,-2.25,coat],[.64,4.7,-1.4,polymer],[.50,3.5,-.28,steel],[.36,2.35,.95,copper],[.275,1.9,1.55,polymer]])layers.push(cyl(root,radius,length,material,0,y,0));
 const paths=[];for(let k=0;k<8;k++){const a=k*Math.PI/4,pts=k===d.selectedFiber?[[0,2.15,0],[0,3.3,0],[0,d.tipAxis,0]]:[[Math.cos(a)*.09,2.15,Math.sin(a)*.09],[Math.cos(a)*.12,3.3,Math.sin(a)*.12],[Math.cos(a)*.35,4.8,Math.sin(a)*.35]];paths.push(tube(root,pts,.018,glass,64).path);}
 const pulse=glow(root,d.pulseSize,0xffb338),light=new T.PointLight(0xffcf79,0,5);pulse.material.depthTest=false;root.add(light);practical(root,[0,2.1,.3],0xb7d9ff,8,5,.6);
 return {root,jacket,armor,layers,paths,update(p,opacity){const point=paths[d.selectedFiber].getPoint(.20+.80*p);pulse.position.copy(point);pulse.visible=opacity>0;light.position.copy(point);light.intensity=12*opacity;pulse.material.opacity=.85*opacity;}};
}
