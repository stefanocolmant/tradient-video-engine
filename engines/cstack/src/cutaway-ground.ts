// @ts-nocheck
// Compact cutaway: published CStack weather/rock and geometric terrain recipe.
// The buried utility layout is authored here; it is not an upstream reference shot.
import {T,box,rand,tube} from './kit/objects';
import {patch,weather} from './kit/realism/shade';
import {rock} from './kit/realism/shapes';
import {fbm2} from './kit/realism/noise';

export function cutawayGround(root){
 const soil=patch(new T.MeshPhysicalMaterial({color:0xffffff,metalness:0,roughness:.94,specularIntensity:.18}),weather({base:'#273143',vary:.48,scale:.065,rough:[.88,.99],bump:.0015,bumpScale:.018}));
 // Geometry gives the lower edge relief; a normal shader cannot alter a silhouette.
 const geo=new T.BoxGeometry(42,.66,1.2,280,4,2),pos=geo.attributes.position;
 const lower=x=>fbm2(x*5.8,.7,413,3)*.10;
 for(let i=0;i<pos.count;i++){const x=pos.getX(i),y=pos.getY(i),z=pos.getZ(i);pos.setY(i,y+lower(x)*(1-(y+.33)/.66));if(z>.59)pos.setZ(i,z+fbm2(x*8,y*12,62,3)*.020);}
 geo.computeVertexNormals();const slab=new T.Mesh(geo,soil);slab.position.set(12,-.60,1.42);root.add(slab);
 const grains=patch(new T.MeshPhysicalMaterial({color:0xffffff,metalness:0,roughness:.92,specularIntensity:.18}),weather({base:'#414854',vary:.32,scale:.045,rough:[.84,.98],bump:.0013,bumpScale:.012}));
 const dummy=new T.Object3D();
 for(let variant=0;variant<3;variant++){
  const mesh=new T.InstancedMesh(rock({seed:210+variant,size:[1,.72,.85],detail:1,rough:.12,cuts:3}),grains,5000);
  for(let j=0;j<5000;j++){
   const i=variant*5000+j,x=-9+rand(i+166)*42,large=j>=4000,s=large?.036+rand(i+17)*.04:.018+rand(i+17)*.018;
   const y=-.30-rand(i+91)*(.60-lower(x-12));
   dummy.position.set(x,y,2.012+fbm2((x-12)*8,(y+.60)*12,62,3)*.020);
   dummy.scale.set(s,s,s*.42);dummy.rotation.set(rand(i)*.12,rand(i+88)*.12,rand(i+99)*6.28);dummy.updateMatrix();mesh.setMatrixAt(j,dummy.matrix);mesh.setColorAt(j,new T.Color().setScalar(.60+rand(i+403)*.38));
  }
  mesh.instanceMatrix.needsUpdate=true;mesh.instanceColor.needsUpdate=true;mesh.castShadow=false;mesh.receiveShadow=false;root.add(mesh);
 }
 // Recessed soil and quiet parallel utilities provide depth beneath the signal.
 // All remain below/behind the hero axis y=-1.08,z=2.4 and its micro-camera entry.
 const earth=patch(new T.MeshPhysicalMaterial({color:0xffffff,metalness:0,roughness:.98,specularIntensity:.08}),weather({base:'#080f1c',vary:.35,scale:.35,rough:[.91,1],bump:.002,bumpScale:.12}));
 box(root,42,6.7,.35,earth,12,-4.17,.12);
 const utility=new T.MeshPhysicalMaterial({color:0x0b1c37,metalness:.48,roughness:.42,specularIntensity:.36});
 for(const [j,y,z,r] of [[0,-2.8,1.55,.10],[1,-2.98,1.19,.085],[2,-4.06,1.82,.13],[3,-4.23,1.48,.095]]){
  tube(root,[[-12,y+.16,z-.22],[0,y+.07,z],[12,y,z+.06],[26,y-.1,z],[42,y-.2,z-.12]],r,utility,140).o.castShadow=false;
 }
}
