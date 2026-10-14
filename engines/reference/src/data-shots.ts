// @ts-nocheck
// A continuous, seek-safe photo → data → encrypted sample → packet choreography.
// Native source time is supplied by A directly and by B's narration/phrase clock.
import {T,P,V,group,mat,box,cyl,rod,tube,label,padlock,canvasTex,step,ease,mix,rand} from './kit/objects';
import {studio} from './production-kit';
import {RoundedBoxGeometry} from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';

const blend=(t,a,b)=>ease(step(t,a,b));
// Each atlas cell represents one photo luminance value, not a random token.
// The binary view shows its normalized 16-bit grayscale representation.
function atlas(binary=false){
  return canvasTex(4096,4096,(c,w,h)=>{
    c.fillStyle='#080b0b';c.fillRect(0,0,w,h);c.textAlign='center';c.textBaseline='middle';
    for(let i=0;i<256;i++){
      const x=i%16*256,y=Math.floor(i/16)*256;
      c.fillStyle='#0c0e0c';c.fillRect(x+5,y+5,246,246);
      c.strokeStyle='#434435';c.lineWidth=4;c.strokeRect(x+7,y+7,242,242);
      c.strokeStyle='#bfa366';c.lineWidth=4;c.strokeRect(x+23,y+23,210,210);
      c.strokeStyle='#26291d';c.lineWidth=3;c.strokeRect(x+27,y+27,202,202);
      c.fillStyle='#fff0aa';c.font=binary?'bold 52px Arial':'bold 116px FilmBody,Arial';
      if(binary){const bits=(i*257).toString(2).padStart(16,'0');for(let row=0;row<4;row++){c.save();c.translate(x+128,y+51+row*52);c.scale(1.42,1);c.fillText(bits.slice(row*4,row*4+4),0,0,142);c.restore();}}
      else c.fillText(String(i),x+128,y+135,203);
    }
  });
}

function photoValues(photo){
  const c=document.createElement('canvas');c.width=192;c.height=180;const ctx=c.getContext('2d',{willReadFrequently:true});
  ctx.drawImage(photo,0,0,photo.width,photo.height*.95,0,0,192,180);const rgba=ctx.getImageData(0,0,192,180).data;
  return Array.from({length:192*180},(_,i)=>Math.round(rgba[i*4]*.2126+rgba[i*4+1]*.7152+rgba[i*4+2]*.0722));
}

function tiledFaces(parent,n,w,h,uvs,map,key){
  const geo=new T.PlaneGeometry(w,h);geo.setAttribute('tileUv',new T.InstancedBufferAttribute(uvs,2));
  const m=key==='photo'?new T.MeshBasicMaterial({map,color:0xffffff,toneMapped:false,polygonOffset:true,polygonOffsetFactor:-2,polygonOffsetUnits:-3,side:T.DoubleSide}):new T.MeshStandardMaterial({map,emissiveMap:map,emissive:0xfff3c4,emissiveIntensity:1.1,color:0xc7bc94,roughness:.84,metalness:.10,polygonOffset:true,polygonOffsetFactor:-2,polygonOffsetUnits:-3,side:T.DoubleSide});
  m.onBeforeCompile=s=>{
    s.vertexShader='attribute vec2 tileUv;\n'+s.vertexShader;
    s.vertexShader=s.vertexShader.replace('#include <uv_vertex>',`#include <uv_vertex>\nvMapUv=vMapUv/${key==='photo'?'vec2(128.0,134.736842)':'16.0'}+tileUv;${key==='photo'?'':'\nvEmissiveMapUv=vMapUv;'}`);
  };
  const compile=m.onBeforeCompile;m.onBeforeCompile=s=>{compile(s);if(key!=='photo')s.fragmentShader=s.fragmentShader.replace('#include <emissivemap_fragment>','#include <emissivemap_fragment>\n#ifdef USE_COLOR\ntotalEmissiveRadiance *= vColor.rgb;\n#endif');};
  m.customProgramCacheKey=()=>`data-faces-v5-${key}`;
  const o=new T.InstancedMesh(geo,m,n);o.receiveShadow=true;parent.add(o);return o;
}

// One shared face texture drives the exposed sample and its optical inspection.
// The lens maps camera rays into this panel, so moving it reveals the same cells.
export function dataGripper(parent){
  const g=group(parent),steel=mat(0xaebcc9,.96,.16),blue=mat(0x182844,.88,.25),black=mat(0x05090f,.82,.26);
  const panel=group(g,0,0,.18);box(panel,5.5,5.65,.26,black);
  const numbers=[130,177,161,39,16,138,103,206,87,214,165,182,75,67,187,21,179,173,200,3,97,199,153,134,127];
  const encrypted=[36,94,46,9,70,23,250,61,180,164,1,2,1,24,162,91,140,9,0,46,207,14,37,129,162];
  const tx=canvasTex(1000,1000,()=>{});let lastPhase=-1;
  const draw=t=>{const phase=t<33.28?0:t>=33.82?6:1+Math.floor((t-33.28)/.108);if(phase===lastPhase)return;lastPhase=phase;
    const c=tx.image.getContext('2d');c.fillStyle='#0a0d08';c.fillRect(0,0,1000,1000);c.font='bold 96px Arial';c.textAlign='center';c.textBaseline='middle';
    numbers.forEach((v,i)=>{const n=phase===0?v:phase===6?encrypted[i]:Math.floor(rand(i+phase*41)*256),x=i%5*200,y=Math.floor(i/5)*200;
      c.fillStyle='#242211';c.fillRect(x+6,y+6,188,188);c.strokeStyle='#554b29';c.lineWidth=5;c.strokeRect(x+8,y+8,184,184);
      const a=c.createLinearGradient(x,y,x+180,y+180);a.addColorStop(0,'#64501e');a.addColorStop(1,'#242414');c.fillStyle=a;c.fillRect(x+21,y+21,158,158);
      c.strokeStyle='#c1a04f';c.lineWidth=2;c.strokeRect(x+22,y+22,156,156);c.fillStyle='#fff2a0';c.fillText(String(n),x+100,y+110,151);
    });tx.needsUpdate=true;
  };draw(0);
  const face=new T.Mesh(new T.PlaneGeometry(5.23,5.25),new T.MeshBasicMaterial({map:tx,color:0xffffff,toneMapped:false}));face.position.z=.15;panel.add(face);
  const carrier=group(g,0,0,-.28);
  const bolt=(parent,x,y,z,r=.16)=>{const o=new T.Mesh(new T.CylinderGeometry(r,r,.11,6),steel);o.rotation.x=Math.PI/2;o.position.set(x,y,z);parent.add(o);cyl(parent,r*.42,.12,black,x,y,z+.065).rotation.x=Math.PI/2;};
  const link=(a,b,width,depth)=>{const av=V(a),bv=V(b),mid=av.clone().add(bv).multiplyScalar(.5),q=new T.Quaternion().setFromUnitVectors(V([0,1,0]),bv.clone().sub(av).normalize());
    const body=box(carrier,width,av.distanceTo(bv),depth,blue);body.position.copy(mid);body.quaternion.copy(q);
    const recess=box(carrier,width*.40,av.distanceTo(bv)*.70,.035,black);recess.position.copy(mid);recess.position.z+=depth/2+.025;recess.quaternion.copy(q);
    const rail=box(carrier,.045,av.distanceTo(bv)*.74,.04,steel);rail.position.copy(mid);rail.position.x+=width*.38;rail.position.z+=depth/2+.04;rail.quaternion.copy(q);
  };
  const head=group(carrier,0,3.45,-.12);cyl(head,1.18,.9,blue).rotation.x=Math.PI/2;
  for(const [rad,dep,z,m] of [[1.1,.15,.5,blue],[.93,.32,.68,black],[.68,.16,.90,blue],[.53,.2,1.01,black]])cyl(head,rad,dep,m,0,0,z).rotation.x=Math.PI/2;
  for(const [rad,z] of [[1.05,.56],[.66,1.0]]){const rim=new T.Mesh(new T.TorusGeometry(rad,.045,10,72),steel);rim.position.z=z;head.add(rim);}
  for(let k=0;k<8;k++){const a=k*Math.PI/4;bolt(head,Math.cos(a)*.99,Math.sin(a)*.99,.60,.075);}
  for(const side of [-1,1]){
    const pts=[[side*.77,3.35,.25],[side*4.0,1.30,.35],[side*2.80,-.12,.44]];
    link(pts[0],pts[1],.64,.43);link(pts[1],pts[2],.56,.45);
    for(const p of pts){cyl(carrier,.28,.53,black,p[0],p[1],p[2]).rotation.x=Math.PI/2;bolt(carrier,p[0],p[1],p[2]+.30,.19);}
    box(carrier,.4,.75,.92,black,side*2.84,-.23,.46);for(let k=0;k<4;k++)box(carrier,.36,.045,.10,steel,side*2.83,-.50+k*.15,.94);
  }
  link([0,3.5,-.7],[9.8,8.2,-1.2],1.08,.72);
  rod(carrier,[.35,4,-.22],[9.9,8.5,-.7],.07,steel);bolt(carrier,7.8,7.2,-.25,.20);
  // Lower actuator and top clamp are visible beyond the sample silhouette.
  box(carrier,2.3,2.8,.48,black,0,-3.42,-.16);
  for(let k=0;k<3;k++)cyl(carrier,.12+k*.055,.05,mat(0x18222b,.8,.36),-.7+k*.62,-3.35-k*.27,.10).rotation.x=Math.PI/2;
  link([0,-2.4,.22],[.1,-3.7,.12],.30,.28);bolt(carrier,.1,-3.7,.38,.10);
  link([0,3.1,1.01],[.12,2.45,.60],.42,.36);box(carrier,.42,.33,.5,steel,.12,2.55,.88);
  tube(carrier,[[0,4,-.4],[1.3,6,-.9],[4.6,7.3,-1.3],[8.8,7.6,-1.4]],.09,black,32);
  g.userData={face,tx,draw,carrier,panel};return g;
}

export function inspectionLens(parent,sample){
  const g=group(parent),steel=mat(0xb9c9d6,.96,.13),dark=mat(0x09131f,.86,.24);
  for(const [r,thickness,z,m] of [[1.68,.11,0,dark],[1.67,.044,.10,steel],[1.55,.045,.12,steel],[1.49,.015,.14,mat(0xd1bc7b,.83,.2)]]){const o=new T.Mesh(new T.TorusGeometry(r,thickness,12,96),m);o.position.z=z;g.add(o);}
  for(let i=0;i<8;i++){const a=i*Math.PI/4;const o=new T.Mesh(new T.CylinderGeometry(.044,.044,.045,6),steel);o.rotation.x=Math.PI/2;o.position.set(Math.cos(a)*1.68,Math.sin(a)*1.68,.115);g.add(o);}
  const geo=new T.CircleGeometry(1.50,96),m=new T.MeshBasicMaterial({map:sample.userData.tx,color:0xffffff,toneMapped:false});
  m.onBeforeCompile=s=>{s.fragmentShader=s.fragmentShader.replace('#include <map_fragment>','#include <map_fragment>\nfloat insidePanel=step(0.0,vMapUv.x)*step(vMapUv.x,1.0)*step(0.0,vMapUv.y)*step(vMapUv.y,1.0);\ndiffuseColor.rgb=mix(vec3(0.012,0.018,0.021),diffuseColor.rgb,insidePanel);');};m.customProgramCacheKey=()=> 'sample-inspection-v1';
  const optical=new T.Mesh(geo,m);optical.position.z=.065;g.add(optical);
  const glint=canvasTex(512,512,(c,w,h)=>{const a=c.createLinearGradient(0,0,w,h);a.addColorStop(0,'#c8f0ff55');a.addColorStop(.25,'#bee8ff0a');a.addColorStop(.6,'#ffffff00');a.addColorStop(1,'#13273933');c.fillStyle=a;c.fillRect(0,0,w,h);c.strokeStyle='#e3f6ff80';c.lineWidth=5;c.beginPath();c.arc(256,256,244,3.4,4.8);c.stroke();});
  const glass=new T.Mesh(new T.CircleGeometry(1.50,96),new T.MeshBasicMaterial({map:glint,transparent:true,depthWrite:false,toneMapped:false}));glass.position.z=.15;g.add(glass);
  rod(g,[-1.17,-1.17,0],[-3.6,-3.6,0],.15,steel);rod(g,[-1.92,-1.92,.015],[-3.6,-3.6,.015],.20,dark);
  const plane=new T.Plane(),hit=new T.Vector3(),center=new T.Vector3(),point=new T.Vector3(),ray=new T.Ray();
  g.userData.updateOptics=eye=>{
    sample.updateWorldMatrix(true,true);g.updateWorldMatrix(true,true);const face=sample.userData.face;
    plane.setFromNormalAndCoplanarPoint(new T.Vector3(0,0,1).transformDirection(face.matrixWorld),face.getWorldPosition(new T.Vector3()));
    const mapPoint=p=>{ray.set(eye,p.clone().sub(eye).normalize());if(!ray.intersectPlane(plane,hit))hit.copy(p);return face.worldToLocal(hit.clone());};
    center.copy(mapPoint(optical.getWorldPosition(new T.Vector3())));const pos=geo.attributes.position,uv=geo.attributes.uv;
    for(let i=0;i<pos.count;i++){point.fromBufferAttribute(pos,i);optical.localToWorld(point);const p=mapPoint(point);uv.setXY(i,.5+(center.x+(p.x-center.x)/1.85)/5.23,.5+(center.y+(p.y-center.y)/1.85)/5.25);}uv.needsUpdate=true;
  };return g;
}

export function dataJourney(kind,photo){
  const root=studio({warm:true,wide:true});root.children.forEach(o=>{if(o.isLight)o.intensity*=o.color?.getHex()===0x294be5?.075:.30;});
  // A dim navy horizon gives the low field camera depth without a cobalt stripe.
  const sky=new T.Mesh(new T.SphereGeometry(400,32,16),new T.ShaderMaterial({side:T.BackSide,depthWrite:false,toneMapped:false,
    vertexShader:'varying vec3 p;void main(){p=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}',
    fragmentShader:'varying vec3 p;void main(){float y=normalize(p).y;float h=exp(-pow((y-0.02)*7.0,2.0));gl_FragColor=vec4(mix(vec3(0.006,0.010,0.027),vec3(0.035,0.055,0.135),h),1.0);}'
  }));root.add(sky);
  const pool=new T.PointLight(0xffe6a2,95,100,2);pool.position.set(-3,7,-19);root.add(pool);
  const graze=new T.DirectionalLight(0xffe8ad,1.4);graze.position.set(-12,5,-24);graze.target.position.set(0,0,-3);root.add(graze,graze.target);
  const world=group(root),dummy=new T.Object3D();
  const floor=box(world,160,.2,220,mat(0x05070a,.12,.85),0,-.22,-30);
  const n=192*180,uv=new Float32Array(n*2),cells=[],values=photoValues(photo);
  // Variable-height bodies terminate at the same floor; raised cells no longer float.
  const bodies=new T.InstancedMesh(new T.BoxGeometry(.97,1,1.23),mat(0x141a1e,.58,.43),n);bodies.receiveShadow=true;world.add(bodies);
  const rims=new T.InstancedMesh(new RoundedBoxGeometry(.98,.075,1.24,1,.018),mat(0x302c1d,.72,.25),n);rims.receiveShadow=true;world.add(rims);
  for(let i=0;i<n;i++){
    const k=values[i];uv[i*2]=(k%16)/16;uv[i*2+1]=1-(Math.floor(k/16)+1)/16;
    const x=(i%192-95.5),z=(Math.floor(i/192)-117)*1.28;
    const terrain=(Math.sin(x*.22+z*.065)+Math.cos(z*.18-x*.07)+2)/4;
    const y=.10+terrain*.48+(k/255)*.22+rand(i+240)*.32;
    cells.push([x,y,z]);dummy.position.set(x,(y+.01)/2,z);dummy.rotation.set(0,0,0);dummy.scale.set(1,y+.25,1);dummy.updateMatrix();bodies.setMatrixAt(i,dummy.matrix);
    dummy.position.y=y+.085;dummy.scale.setScalar(1);dummy.updateMatrix();rims.setMatrixAt(i,dummy.matrix);
  }
  const faceColors=[];
  const decimals=tiledFaces(world,n,.91,1.17,uv,atlas(false),'decimal'),binary=tiledFaces(world,n,.91,1.17,uv,atlas(true),'binary');
  for(let i=0;i<n;i++){
    dummy.position.set(cells[i][0],cells[i][1]+.13,cells[i][2]);dummy.rotation.set(-Math.PI/2,0,0);dummy.scale.setScalar(1);dummy.updateMatrix();decimals.setMatrixAt(i,dummy.matrix);binary.setMatrixAt(i,dummy.matrix);
    const x=cells[i][0],z=cells[i][2],pool=Math.exp(-((x+5)**2/100+(z+4)**2/210));
    const color=new T.Color().setScalar((.05+Math.sqrt(values[i]/255)*.15+pool*.65+rand(i+583)*.11)*(.28+.72*Math.exp(-((z+7)**2)/3200)));
    faceColors.push(color);decimals.setColorAt(i,color);binary.setColorAt(i,color);
  }
  // Coarser physical tiles continue beyond the detailed field; their projected
  // footprint stays small while perspective and fog hide the LOD boundary.
  const farN=128*140,farUv=new Float32Array(farN*2),farCells=[];
  const farBodies=new T.InstancedMesh(new T.BoxGeometry(.97,1,1.23),bodies.material.clone(),farN);world.add(farBodies);
  for(let i=0;i<farN;i++){
    const row=Math.floor(i/128),size=1.5+row*.022,z=-151-row*2.8,x=(i%128-63.5)*size;
    const k=values[(i*17)%values.length];farUv[i*2]=(k%16)/16;farUv[i*2+1]=1-(Math.floor(k/16)+1)/16;
    const y=.20+rand(i+355)*.65;farCells.push([x,y,z,size]);dummy.position.set(x,(y+.01)/2,z);dummy.rotation.set(0,0,0);dummy.scale.set(size,y+.25,2.18);dummy.updateMatrix();farBodies.setMatrixAt(i,dummy.matrix);
  }
  const farFaces=tiledFaces(world,farN,.91,1.17,farUv,binary.material.map,'far-binary');
  for(let i=0;i<farN;i++){const [x,y,z,size]=farCells[i];dummy.position.set(x,y+.13,z);dummy.rotation.set(-Math.PI/2,0,0);dummy.scale.set(size,2.18,1);dummy.updateMatrix();farFaces.setMatrixAt(i,dummy.matrix);farFaces.setColorAt(i,new T.Color().setScalar(.075+rand(i+41)*.08));}
  const farGround=box(world,900,.1,950,mat(0x070a12,.08,.95),0,-.22,-380);
  const photograph=group(root),pn=16384,puv=new Float32Array(pn*2);
  for(let i=0;i<pn;i++){puv[i*2]=(i%128)/128;puv[i*2+1]=.05+(1-(Math.floor(i/128)+1)/128)*.95;}
  const photoTx=new T.Texture(photo);photoTx.colorSpace=T.SRGBColorSpace;photoTx.needsUpdate=true;
  const photoFaces=tiledFaces(photograph,pn,.248,.248,puv,photoTx,'photo');
  // Match the complete photo and pixel faces in the same light/color pipeline.
  const intact=new T.Mesh(new T.PlaneGeometry(32,32),new T.MeshBasicMaterial({map:photoTx,color:0xffffff,toneMapped:false,side:T.DoubleSide}));intact.position.z=.16;const cleanUV=intact.geometry.attributes.uv;for(let i=0;i<cleanUV.count;i++)cleanUV.setY(i,.05+cleanUV.getY(i)*.95);photograph.add(intact);
  const photoBodies=new T.InstancedMesh(new T.BoxGeometry(.248,.248,.12),mat(0x242729,.1,.74),pn);photograph.add(photoBodies);
  const lock=padlock(root);lock.hoop.scale.y=.62;
  box(lock.g,.97,.76,.05,mat(0x083554,.66,.28),0,0,.32,.08);
  const keyRim=new T.Mesh(new T.TorusGeometry(.245,.017,10,48),mat(0xbfd1d9,.94,.18));keyRim.position.z=.38;lock.g.add(keyRim);
  const keyBack=new T.Mesh(new T.CircleGeometry(.222,48),mat(0x03121b,.3,.44));keyBack.position.z=.384;lock.g.add(keyBack);
  const keyTop=new T.Mesh(new T.CircleGeometry(.066,32),new T.MeshBasicMaterial({color:0xbce5e0}));keyTop.position.set(0,.054,.39);lock.g.add(keyTop);box(lock.g,.068,.14,.015,new T.MeshBasicMaterial({color:0xbce5e0}),0,-.04,.392);
  for(const x of [-.4,.4])for(const y of [-.29,.29])cyl(lock.g,.027,.025,mat(0xcbdce2,.94,.2),x,y,.368).rotation.x=Math.PI/2;
  const gripper=dataGripper(root),lens=inspectionLens(root,gripper);
  const opticalCamera=new T.PerspectiveCamera(50,720/1280,.01,1500);
  const atPixel=(x,y,depth)=>new T.Vector3(x/720*2-1,1-y/1280*2,.5).unproject(opticalCamera).sub(opticalCamera.position).normalize().multiplyScalar(depth).add(opticalCamera.position);
  const packetCloud=group(root),count=1500;
  const cloudKey=new T.PointLight(0xffdc55,0,55,2),cloudRim=new T.PointLight(0xffc837,0,48,2);
  cloudKey.position.set(-7,13,8);cloudRim.position.set(9,5,2);root.add(cloudKey,cloudRim);
  const packets=new T.InstancedMesh(new RoundedBoxGeometry(1.8,.83,.15,2,.055),mat(0xf3a503,.08,.61,.035),count);packetCloud.add(packets);
  const headerGeo=new RoundedBoxGeometry(1.8,.24,.14,2,.045);headerGeo.translate(0,.46,-.005);
  const packetHeaders=new T.InstancedMesh(headerGeo,mat(0x09142c,.4,.42),count);packetCloud.add(packetHeaders);
  // Dim the complete reflected cloud, including specular rims, during focus.
  const cloudFocus={value:1};for(const material of [packets.material,packetHeaders.material]){material.onBeforeCompile=shader=>{shader.uniforms.cloudFocus=cloudFocus;shader.fragmentShader='uniform float cloudFocus;\n'+shader.fragmentShader;shader.fragmentShader=shader.fragmentShader.replace('#include <opaque_fragment>','outgoingLight *= cloudFocus;\n#include <opaque_fragment>');};material.customProgramCacheKey=()=> 'packet-focus-light-v1';}
  // The same rectangles begin as contiguous groups on the data surface. Their
  // temporary cell grid dissolves only after a near-to-far formation front.
  const cellGrid=canvasTex(720,332,(c,w,h)=>{c.clearRect(0,0,w,h);c.strokeStyle='#151d22';c.lineWidth=7;for(let x=0;x<=w;x+=w/6){c.beginPath();c.moveTo(x,0);c.lineTo(x,h);c.stroke();}for(let y=0;y<=h;y+=h/3){c.beginPath();c.moveTo(0,y);c.lineTo(w,y);c.stroke();}});
  const subdivisionGeo=new T.PlaneGeometry(1.8,.83);subdivisionGeo.translate(0,0,.084);
  const subdivisions=new T.InstancedMesh(subdivisionGeo,new T.MeshBasicMaterial({map:cellGrid,transparent:true,depthWrite:false,side:T.DoubleSide}),count);packetCloud.add(subdivisions);
  const subdivisionAlpha=new T.InstancedBufferAttribute(new Float32Array(count),1);subdivisionGeo.setAttribute('groupAlpha',subdivisionAlpha);
  subdivisions.material.onBeforeCompile=(shader)=>{shader.vertexShader='attribute float groupAlpha; varying float vGroupAlpha;\n'+shader.vertexShader;shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\nvGroupAlpha=groupAlpha;');shader.fragmentShader='varying float vGroupAlpha;\n'+shader.fragmentShader;shader.fragmentShader=shader.fragmentShader.replace('#include <alphamap_fragment>','#include <alphamap_fragment>\ndiffuseColor.a *= vGroupAlpha;');};
  subdivisions.material.customProgramCacheKey=()=> 'packet-subdivision-v1';
  const seamGeo=subdivisionGeo.clone(),seamAlpha=new T.InstancedBufferAttribute(new Float32Array(count),1);seamGeo.setAttribute('groupAlpha',seamAlpha);seamGeo.translate(0,0,.004);
  const seamMaterial=new T.MeshBasicMaterial({color:0xffedb0,transparent:true,depthWrite:false,side:T.DoubleSide,toneMapped:false});seamMaterial.onBeforeCompile=subdivisions.material.onBeforeCompile;seamMaterial.customProgramCacheKey=()=> 'packet-formation-seam-v1';
  const seamFaces=new T.InstancedMesh(seamGeo,seamMaterial,count);packetCloud.add(seamFaces);
  const origins=[],groundTurn=new T.Quaternion().setFromEuler(new T.Euler(-Math.PI/2,-.13,0,'YXZ')),airTurn=new T.Quaternion();
  for(let i=0;i<count;i++){const row=Math.floor(i/30);origins.push(new T.Vector3((i%30-14.5)*7,.95,50-row*5.2).multiplyScalar(.5).applyAxisAngle(new T.Vector3(0,1,0),-.13));}
  const formationCue=(z)=>36.48+Math.max(0,(50-z)/5.2)*.008;
  // A sparse near layer and a broad dark far layer preserve the count without
  // turning every pixel into identically sized confetti. All start in the grid.
  const positions=[],sizes=[],packetColors=[];for(let i=0;i<count;i++){
    const near=i<96,mid=i>=96&&i<596;
    const x=(rand(i+601)-.5)*(near?24:mid?60:270),y=(rand(i+410)-.5)*(near?44:mid?95:460)+4;
    const z=near?14-rand(i+908)*24:mid?-12-rand(i+908)*43:-55-rand(i+908)*175;
    positions.push([x,y,z]);sizes.push(near?1.10+rand(i+207)*.45:mid?1+rand(i+207)*.25:.80+rand(i+207)*.4);
    const color=new T.Color().setScalar((.55+rand(i+660)*.45)*(1-step(-z,8,150)*.90));packetColors.push(color);packets.setColorAt(i,color);
  }
  // Rounded in the image plane, independently of the shallow physical depth.
  // A single front flap overlaps the header and owns the orange body silhouette.
  const cardShape=(w,h,r)=>{const s=new T.Shape(),x=-w/2,y=-h/2;s.moveTo(x+r,y);s.lineTo(x+w-r,y);s.quadraticCurveTo(x+w,y,x+w,y+r);s.lineTo(x+w,y+h-r);s.quadraticCurveTo(x+w,y+h,x+w-r,y+h);s.lineTo(x+r,y+h);s.quadraticCurveTo(x,y+h,x,y+h-r);s.lineTo(x,y+r);s.quadraticCurveTo(x,y,x+r,y);return s;};
  const panel=(p,w,h,r,texture,base,z)=>{
    const shape=cardShape(w,h,r),g=new T.ExtrudeGeometry(shape,{depth:.16,bevelEnabled:true,bevelSegments:3,steps:1,bevelSize:.025,bevelThickness:.025,curveSegments:14});
    const body=new T.Mesh(g,base);body.position.z=z-.16;p.add(body);
    const faceGeo=new T.ShapeGeometry(shape,24),pos=faceGeo.attributes.position,uv=faceGeo.attributes.uv;for(let i=0;i<pos.count;i++)uv.setXY(i,(pos.getX(i)+w/2)/w,(pos.getY(i)+h/2)/h);
    const face=new T.Mesh(faceGeo,new T.MeshBasicMaterial({map:texture,color:0xffffff,toneMapped:false}));face.position.z=z+.03;p.add(face);return shape;
  };
  const hero=group(root),header=group(hero,0,2.30,-.04);
  const addressMap=canvasTex(1100,600,(c,w,h)=>{
    const g=c.createLinearGradient(0,0,w,h);g.addColorStop(0,'#122852');g.addColorStop(.6,'#111740');g.addColorStop(1,'#0a1026');c.fillStyle=g;c.fillRect(0,0,w,h);

  });
  const headerShape=panel(header,5.5,3.0,.33,addressMap,mat(0x13274c,.6,.28),.06);
  const rim=new T.LineLoop(new T.BufferGeometry().setFromPoints(headerShape.getPoints(80).map(p=>new T.Vector3(p.x,p.y,.096))),new T.LineBasicMaterial({color:0x647eac,transparent:true,opacity:.66}));header.add(rim);
  const addressRows=[[128,'From',"Shanghai · Mom's phone"],[270,'To','Los Angeles · Your phone']].map(([y,key,value])=>{
    const tx=canvasTex(1100,600,(c,w,h)=>{c.textAlign='left';c.textBaseline='middle';c.fillStyle='#8d9fc8';c.font='bold 50px FilmBody,Arial';c.fillText(key,65,y);c.fillStyle='#f5f8ff';c.font='bold 70px FilmBody,Arial';c.fillText(value,216,y,824);});
    const mesh=new T.Mesh(new T.PlaneGeometry(5.5,3),new T.MeshBasicMaterial({map:tx,transparent:true,toneMapped:false,depthWrite:false}));mesh.position.z=.098;header.add(mesh);return mesh;
  });
  const bodyMap=canvasTex(1100,690,(c,w,h)=>{
    const g=c.createLinearGradient(0,0,0,h);g.addColorStop(0,'#1b2030');g.addColorStop(.23,'#231c1a');g.addColorStop(.259,'#38251a');g.addColorStop(.262,'#ffd43c');g.addColorStop(.29,'#ffbd0b');g.addColorStop(1,'#ef9400');c.fillStyle=g;c.fillRect(0,0,w,h);
    const sheen=c.createLinearGradient(0,0,w,0);sheen.addColorStop(0,'rgba(255,225,130,0)');sheen.addColorStop(.20,'rgba(255,232,140,.10)');sheen.addColorStop(.44,'rgba(255,243,196,.025)');sheen.addColorStop(.83,'rgba(255,229,111,.14)');sheen.addColorStop(1,'rgba(255,225,130,0)');c.fillStyle=sheen;c.fillRect(0,0,w,h);
  });
  const front=group(hero,0,.475,0);panel(front,5.5,3.45,.31,bodyMap,mat(0x1b2130,.14,.40),.18);
  const numberMap=canvasTex(1100,460,(c,w,h)=>{c.fillStyle='#673308';c.font='900 390px FilmBody,Arial';c.textAlign='center';c.textBaseline='middle';c.fillText('#0847',w/2,h/2,w*.90);});const number=new T.Mesh(new T.PlaneGeometry(4.3,1.8),new T.MeshBasicMaterial({map:numberMap,transparent:true,toneMapped:false}));hero.add(number);number.position.set(0,0,.225);

  const baselineCamera=(local,t)=>{
    if(t<23.3){const q=blend(t,21.76,22.30),settle=blend(t,22.3,23.3);return{eye:[mix(0,mix(-2.3,0,settle),q),mix(0,7,q)+7*settle,mix(92,mix(9,9,settle),q)],look:[0,mix(-8,0,q),-2*settle],fov:50,roll:mix(0,mix(-.17,-.10,settle),q)};}
    if(t<27.8){const q=blend(t,25,27.8);return{eye:[0,mix(14,20,q),mix(9,26,q)],look:[0,0,-2],fov:50,roll:mix(-.10,0,q)};}
    if(t<35){const q=blend(t,30.2,31.6);return{eye:[mix(0,1.5,q),mix(20,23,q),mix(26,23,q)],look:[0,mix(0,2.5,q),-2*(1-q)],fov:50,roll:-.13*q};}
    const q=blend(t,35,36.8),fly=blend(t,36.8,37.40);return{eye:[mix(1.5,0,q),mix(mix(23,29,q),5,fly),mix(23,28,q)],look:[0,mix(2.5,4,fly),mix(0,-12,q)],fov:50,roll:-.13*(1-q)};
  };
  const camera=(local,t)=>{
    const old=baselineCamera(local,t);
    if(t<23.3){const dive=blend(t,21.76,22.30)*(1-blend(t,22.30,23.30));return{...old,eye:old.eye.map((v,i)=>mix(v,[-1.2,2.4,5.4][i],dive*.48)),roll:mix(old.roll,.22,dive)};}
    const wide=blend(t,25,27.8)*(1-blend(t,36.8,37.4)),inspect=blend(t,30.2,31.6),pull=blend(t,35,36.8);
    const eye=[mix(0,1.5,inspect)*(1-pull),mix(mix(13,17,inspect),21,pull),mix(mix(35,29,inspect),40,pull)];
    const look=[0,mix(0,2.5,inspect)*(1-pull),mix(-2,-12,pull)];
    const roll=mix(mix(-.16,0,blend(t,27,28.5)),.15,inspect)*(1-pull);
    return{...old,eye:old.eye.map((v,i)=>mix(v,eye[i],wide)),look:old.look.map((v,i)=>mix(v,look[i],wide)),roll:mix(old.roll,roll,wide)};
  };
  // Preserve screen-space foreground staging while the ground camera is refitted.
  const foreground=group(root);for(const o of [lock.g,gripper,lens,hero])foreground.add(o);foreground.matrixAutoUpdate=false;
  const fieldCamera=new T.PerspectiveCamera(50,720/1280,.01,1500);
  const setCamera=(c,p)=>{c.position.set(...p.eye);c.up.set(0,1,0);c.lookAt(...p.look);c.rotateZ(p.roll);c.updateMatrixWorld();};
  const skies=root.children.filter(o=>o.isMesh&&o.material?.isShaderMaterial&&o.material.side===T.BackSide);
  const depthFocus={active:false,hero,skies,distance:25,aperture:0,maxblur:.012};skies.forEach(o=>o.layers.enable(2));hero.traverse(o=>o.layers.enable(1));root.traverse(o=>{if(o.isLight)o.layers.enable(1);});
  return{root,depthFocus,environmentIntensity:.30,fogDensity:.004,fogColor:0x080e22,camera,update(local,t){
    const dive=blend(t,21.76,22.3),showData=blend(t,22.72,23.32),split=blend(t,36.55,38.08);
    intact.visible=t<21.83;photoFaces.visible=photoBodies.visible=t>=21.83;photoFaces.material.color.setScalar(mix(1,.62,dive));
    photograph.visible=t<23.34;photograph.rotation.set(-Math.PI/2*dive,0,0);photograph.position.y=.4*dive;
    if(photograph.visible)for(let i=0;i<pn;i++){
      const x=(i%128-63.5)*.25,y=(63.5-Math.floor(i/128))*.25,wave=Math.sin((x*.14+y*.10+t*1.5))*dive*.12+rand(i+950)*dive*.055;
      dummy.position.set(x,y,wave);dummy.rotation.set(0,0,0);dummy.scale.setScalar((1-showData)*(1-dive*.06));dummy.updateMatrix();photoBodies.setMatrixAt(i,dummy.matrix);
      dummy.position.z=wave+.16;dummy.updateMatrix();photoFaces.setMatrixAt(i,dummy.matrix);
    }
    photoFaces.instanceMatrix.needsUpdate=photoBodies.instanceMatrix.needsUpdate=true;
    world.visible=t>22.65&&t<37.20;const terrainOpacity=blend(t,22.65,23.05)*(1-blend(t,36.83,37.20));for(const m of [floor.material,bodies.material,rims.material,decimals.material,binary.material,farGround.material,farFaces.material,farBodies.material]){m.transparent=true;m.opacity=terrainOpacity;}world.scale.setScalar(mix(1,.50,blend(t,25,27.4)));world.rotation.y=-.13*blend(t,25,27.4);decimals.visible=t<24.63;binary.visible=t>=24.38;
    // Sweep the conversion through the ground instead of changing every tile
    // in one frame. The source has mixed decimal/binary rows at24.5s.
    if(t<25)for(let i=0;i<n;i++){
      const [x,y,z]=cells[i],cue=24.38+step(-z,-7,14)*.25;
      dummy.position.set(x,y+.13,z);dummy.rotation.set(-Math.PI/2,0,0);dummy.scale.setScalar(t<cue?1:0);dummy.updateMatrix();decimals.setMatrixAt(i,dummy.matrix);
      dummy.scale.setScalar(t>=cue?1:0);dummy.updateMatrix();binary.setMatrixAt(i,dummy.matrix);
    }
    // Set the complete binary pose after a direct seek beyond the conversion.
    if(t>=25)for(let i=0;i<n;i++){dummy.position.set(cells[i][0],cells[i][1]+.13,cells[i][2]);dummy.rotation.set(-Math.PI/2,0,0);dummy.scale.setScalar(1);dummy.updateMatrix();binary.setMatrixAt(i,dummy.matrix);}
    decimals.instanceMatrix.needsUpdate=binary.instanceMatrix.needsUpdate=true;
    // Erase the original cells behind the advancing seam, never reveal a second
    // floating grid. All poses/colors are reset from source data for seek safety.
    if(t>=36.4&&t<37.2)for(let i=0;i<n;i++){
      const [x,y,z]=cells[i],cue=formationCue(z),merge=blend(t,cue,cue+.075),inside=Math.abs(x)<105&&z>-207&&z<52;
      const retain=inside?1-merge:1;
      dummy.position.set(x,(y+.01)/2,z);dummy.rotation.set(0,0,0);dummy.scale.set(retain,(y+.25)*retain,retain);dummy.updateMatrix();bodies.setMatrixAt(i,dummy.matrix);
      dummy.position.y=y+.085;dummy.scale.setScalar(retain);dummy.updateMatrix();rims.setMatrixAt(i,dummy.matrix);
      dummy.position.y=y+.13;dummy.rotation.set(-Math.PI/2,0,0);dummy.updateMatrix();binary.setMatrixAt(i,dummy.matrix);
      binary.setColorAt(i,faceColors[i]);
    }
    if(t<36.4){for(let i=0;i<n;i++){const [x,y,z]=cells[i];dummy.position.set(x,(y+.01)/2,z);dummy.rotation.set(0,0,0);dummy.scale.set(1,y+.25,1);dummy.updateMatrix();bodies.setMatrixAt(i,dummy.matrix);dummy.position.y=y+.085;dummy.scale.setScalar(1);dummy.updateMatrix();rims.setMatrixAt(i,dummy.matrix);binary.setColorAt(i,faceColors[i]);}}
    bodies.instanceMatrix.needsUpdate=rims.instanceMatrix.needsUpdate=binary.instanceMatrix.needsUpdate=true;binary.instanceColor.needsUpdate=true;
    // Hold an open shackle alone, click it closed, then retreat while the gripper arrives.
    const rise=blend(t,27.1,28.4),retreat=blend(t,29.6,31.6),exit=blend(t,34.08,35.1);
    lock.g.visible=t>=27.1&&t<35.1;const lockScale=mix(2.9,1.65,retreat)*(1-exit);lock.g.scale.set(-lockScale,lockScale,lockScale);
    lock.g.position.set(mix(.2,-5.5,retreat),mix(-3,mix(4.4,7,retreat),rise),mix(7,-4,retreat));lock.g.rotation.set(-.25,-.16,0);
    lock.hoop.position.set(0,.45+.68*(1-blend(t,29.15,29.6)),0);
    const grasp=blend(t,30.75,31.9),settle=blend(t,31.95,32.35);gripper.visible=t>=30.75&&t<35.25;
    const opticalPose=baselineCamera(local,t);opticalCamera.position.set(...opticalPose.eye);opticalCamera.up.set(0,1,0);opticalCamera.lookAt(...opticalPose.look);opticalCamera.rotateZ(opticalPose.roll);opticalCamera.updateMatrixWorld();
    gripper.position.copy(atPixel(mix(1020,mix(404,340,settle),grasp)+exit*850,mix(770,mix(650,526,settle),grasp)-exit*260,27));
    gripper.rotation.set(mix(-.53,-.73,settle),-.10,mix(-.34,-.14,settle));gripper.scale.setScalar(mix(1.23,1.17,settle));
    gripper.userData.carrier.position.y=mix(0,-1.10,settle);gripper.userData.carrier.position.z=mix(0,-.65,settle);gripper.userData.draw(t);gripper.userData.panel.rotation.x=-Math.PI/2*(1-blend(t,31.62,32.08));
    const inspect=blend(t,32.02,32.26),scan=blend(t,32.40,33.8);lens.visible=t>=32.02&&t<34.24;
    lens.position.copy(atPixel(mix(-270,mix(310,292,scan),inspect)-blend(t,34.02,34.24)*950,mix(448,562,scan)-blend(t,34.02,34.24)*100,23));lens.quaternion.copy(opticalCamera.quaternion);lens.scale.setScalar(mix(1.35,1.48,scan));
    setCamera(fieldCamera,camera(local,t));foreground.matrix.multiplyMatrices(fieldCamera.matrixWorld,opticalCamera.matrixWorldInverse);foreground.matrixWorldNeedsUpdate=true;
    if(lens.visible)lens.userData.updateOptics(fieldCamera.position);
    depthFocus.active=t>=37.4&&t<41.8;depthFocus.aperture=.00016*blend(t,37.4,38.0);depthFocus.distance=mix(32,18,blend(t,39.45,40.2));subdivisions.visible=seamFaces.visible=t<37.4;
    const cloudLight=blend(t,37.4,38.0);cloudKey.intensity=780*cloudLight;cloudRim.intensity=580*cloudLight;
    cloudKey.position.x=-7+Math.sin((t-37.4)*.7)*1.4;
    packets.material.color.set(0xf3a503).lerp(new T.Color(0xffc20a),cloudLight);packets.material.roughness=mix(.61,.44,cloudLight);
    packetCloud.visible=t>=36.48;cloudFocus.value=mix(1,.21,blend(t,39.45,40.2));
    if(packetCloud.visible)for(let i=0;i<count;i++){
      const row=Math.floor(i/30),cue=36.48+row*.008,formed=blend(t,cue,cue+.075),lift=blend(t,cue+.16,cue+.55),travel=blend(t,cue+.23,37.50+rand(i+80)*.17);
      const p=positions[i],origin=origins[i],depthSettle=blend(t,37.4,38.1),spread=i<96?1:i<596?.80:.49,nearScale=mix(1,i<96?.62:1,depthSettle),rise=Math.sin(lift*Math.PI/2)*2.8*(1-travel);
      // Compose the near layer at the projected frame edge; keep the center deep.
      const depth=28-p[2],hh=depth*Math.tan(25*Math.PI/180),hw=hh*720/1280;
      let nx=(rand(i+601)-.5)*2.8,ny=(rand(i+410)-.5)*2.6;
      const radial=Math.sqrt(nx*nx+(ny-.05)*(ny-.05));if(radial<.86){const q=.86/Math.max(.08,radial);nx*=q;ny=.05+(ny-.05)*q;}
      const targetX=i<96?mix(p[0],nx*hw,depthSettle):p[0]*mix(1,spread,depthSettle);
      const targetY=i<96?mix(p[1],5+ny*hh-depth*.025,depthSettle):4+(p[1]-4)*mix(1,spread,depthSettle);
      dummy.position.set(mix(origin.x,targetX,travel),mix(origin.y,targetY,travel)+rise,mix(origin.z,p[2],travel)-(t-38)*1.1*travel);
      const turn=lift,tumble=1-blend(t,37.02,37.85),settled=blend(t,37.4,38.0);
      airTurn.setFromEuler(new T.Euler((rand(i+23)-.5)*(.10+.30*settled+4.4*tumble),(rand(i+70)-.5)*(.18+.28*settled+4*tumble),(rand(i+92)-.5)*(.08+.27*settled+4*tumble)));
      dummy.quaternion.copy(groundTurn).slerp(airTurn,turn);
      dummy.scale.set(mix(1.80,sizes[i],travel)*formed*nearScale,mix(2.44,sizes[i],travel)*formed*nearScale,1);dummy.updateMatrix();packets.setMatrixAt(i,dummy.matrix);packetHeaders.setMatrixAt(i,dummy.matrix);
      subdivisions.setMatrixAt(i,dummy.matrix);subdivisionAlpha.setX(i,1-blend(t,cue+.05,cue+.18));seamFaces.setMatrixAt(i,dummy.matrix);seamAlpha.setX(i,Math.exp(-(((t-cue-.042)/.022)**2))*.92);const selective=.24+Math.pow(rand(i+173),2)*.76;packets.setColorAt(i,packetColors[i].clone().multiplyScalar(mix(.43,1,lift)*mix(1,selective,settled)));
    }
    packets.instanceMatrix.needsUpdate=packetHeaders.instanceMatrix.needsUpdate=subdivisions.instanceMatrix.needsUpdate=seamFaces.instanceMatrix.needsUpdate=subdivisionAlpha.needsUpdate=seamAlpha.needsUpdate=packets.instanceColor.needsUpdate=true;
    // The close address card is intentionally in front of the cloud: depth-aware
    // exclusion keeps foreground cards from hiding the address and number.
    const focus=blend(t,39.8,40.35);hero.visible=t>=39.8;hero.position.set(0,5.30+.11*blend(t,40.4,41.7),12);hero.scale.setScalar(mix(.22,.91,focus)*(1+.014*blend(t,40.3,41.7)));hero.rotation.set(0,0,.009*Math.sin((t-40.3)*1.7)*focus);
    const reveal=blend(t,40.00,40.23);header.visible=t>=40.00;header.scale.y=reveal;header.position.y=mix(.80,2.40,reveal);number.visible=t>=41.43;addressRows[0].material.opacity=blend(t,40.17,40.34);addressRows[1].material.opacity=blend(t,40.40,40.54);
    // Before the address reveal, the front is a simple blank orange packet.
    front.scale.y=mix(2.5/3.45,1,reveal);front.position.y=.475*reveal;bodyMap.repeat.y=mix(.735,1,reveal);bodyMap.offset.y=0;
    for(let i=0;i<count;i++)if(t>39.5&&Math.abs(positions[i][0])<4&&Math.abs(positions[i][1]-5)<4&&positions[i][2]>-4){
      packets.getMatrixAt(i,dummy.matrix);dummy.matrix.elements[14]-=22;packets.setMatrixAt(i,dummy.matrix);packetHeaders.setMatrixAt(i,dummy.matrix);
    }
  }};
}
