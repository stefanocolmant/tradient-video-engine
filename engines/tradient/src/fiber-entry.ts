// @ts-nocheck
// Authored fiber interior; CStack's published bounded-acceleration camera easing.
import {T,group,glow,rand,step,mix} from './kit/objects';
import {move} from './kit/realism/camera';

export function fiberEntry(root,{controlledReveal=false}={}){
 const g=group(root),axisY=-1.08,axisZ=2.4,r=.063;
 const shell=new T.Mesh(new T.CylinderGeometry(r,r,54,64,1,true),new T.MeshPhysicalMaterial({color:0x668bca,emissive:0x244676,emissiveIntensity:.22,roughness:.18,metalness:.15,transparent:true,opacity:.24,depthWrite:false,side:T.DoubleSide}));
 shell.rotation.z=-Math.PI/2;shell.position.set(33.2,axisY,axisZ);g.add(shell);
 const wall=new T.Mesh(new T.CylinderGeometry(r*.96,r*.96,54,64,1,true),new T.MeshBasicMaterial({color:0x020613,side:T.BackSide,fog:false,toneMapped:false}));wall.rotation.z=-Math.PI/2;wall.position.copy(shell.position);g.add(wall);
 const ringGeo=new T.RingGeometry(r*.73,r*1.12,96);
 const ringMat=new T.ShaderMaterial({transparent:true,depthWrite:false,side:T.DoubleSide,blending:T.AdditiveBlending,toneMapped:false,vertexShader:'varying float radius;varying float d;void main(){radius=length(position.xy);vec4 p=modelViewMatrix*instanceMatrix*vec4(position,1.);d=-p.z;gl_Position=projectionMatrix*p;}',fragmentShader:'varying float radius;varying float d;void main(){float z=(radius-.0583);float a=(.62*exp(-z*z/.0000023)+.16*exp(-z*z/.000032))*(1.-smoothstep(.2,2.4,d));gl_FragColor=vec4(.52,.73,1.,a);}'});
 const rings=new T.InstancedMesh(ringGeo,ringMat,146),dummy=new T.Object3D();
 for(let i=0;i<146;i++){dummy.position.set(6.35+i*.37,axisY,axisZ);dummy.rotation.set(0,Math.PI/2,0);dummy.updateMatrix();rings.setMatrixAt(i,dummy.matrix);}rings.instanceMatrix.needsUpdate=true;g.add(rings);
 // Soft-edged world-space ribbons retain perspective and carry a luminous core.
 const points=[],colors=[],uv=[];
 for(let lane=0;lane<76;lane++){const angle=lane/76*Math.PI*2,rad=r*(.77+rand(lane+118)*.10);for(let j=0;j<84;j++){const seed=lane*91+j,x=6.25+j*.64+rand(seed+22)*.4,len=.12+rand(seed+203)*.5,w=.00018+rand(seed+76)*.00048;const c=new T.Color(lane%3===0?0xffd17d:0xa8caff).multiplyScalar(.8+rand(seed+917)*.8);for(const [u,v] of [[0,0],[1,0],[0,1],[1,0],[1,1],[0,1]]){const across=(u*2-1)*w*4;points.push(x+v*len,axisY+Math.cos(angle)*rad-Math.sin(angle)*across,axisZ+Math.sin(angle)*rad+Math.cos(angle)*across);colors.push(c.r,c.g,c.b);uv.push(u,v);}}}
 const material=new T.ShaderMaterial({transparent:true,depthWrite:false,side:T.DoubleSide,blending:T.AdditiveBlending,toneMapped:false,vertexColors:true,vertexShader:'varying vec3 tint;varying float d;varying vec2 tex;void main(){vec4 p=modelViewMatrix*vec4(position,1.);d=-p.z;tint=color;tex=uv;gl_Position=projectionMatrix*p;}',fragmentShader:'varying vec3 tint;varying float d;varying vec2 tex;void main(){float z=abs(tex.x*2.-1.);float a=(.9*exp(-z*z/.016)+.19*exp(-z*z/.2))*(1.-smoothstep(1.5,3.5,d))*smoothstep(.015,.055,d)*smoothstep(0.,.14,tex.y)*(1.-smoothstep(.86,1.,tex.y));gl_FragColor=vec4(mix(tint,vec3(1.,.70,.30),smoothstep(.28,1.2,d)*.8),a);}'});
 const rays=new T.Mesh(new T.BufferGeometry().setAttribute('position',new T.Float32BufferAttribute(points,3)).setAttribute('color',new T.Float32BufferAttribute(colors,3)).setAttribute('uv',new T.Float32BufferAttribute(uv,2)),material);g.add(rays);
 const center=new T.Mesh(new T.CircleGeometry(.037,64),new T.MeshBasicMaterial({color:0x080b11,side:T.DoubleSide,toneMapped:false,fog:false}));center.rotation.y=Math.PI/2;g.add(center);
 const core=glow(g,.12,0xffdf89);core.material.depthTest=false;const tiny=glow(g,.025,0xfff4c6);tiny.material.depthTest=false;
 const offsets=new T.CatmullRomCurve3([[-.5,2.38,11.4],[-4.5,1.4,8],[-7,.8,4],[-6,.35,1.5],[-3,.08,.2],[-.65,0,0]].map(p=>new T.Vector3(...p)),false,'centripetal');
 function camera(tt,base,px){if(tt<=4.567)return base;const q=move(tt,4.567,5.37),o=offsets.getPoint(q),aim=move(tt,4.567,4.967);return{...base,eye:[px+o.x,axisY+o.y,axisZ+o.z],look:[mix(base.look[0],px+2,aim),mix(base.look[1],axisY,aim),mix(base.look[2],axisZ,aim)]};}
 if(controlledReveal){
  for(const m of [ringMat,material]){m.uniforms.reveal={value:1};m.fragmentShader='uniform float reveal;'+m.fragmentShader.replace(/gl_FragColor=vec4\((.*),a\);/, 'gl_FragColor=vec4($1,a*reveal);');}
 }
 function reveal(amount,signal){if(!controlledReveal)throw Error('Controlled reveal must be enabled explicitly');shell.material.opacity=.24*amount;wall.material.opacity=amount;if(wall.material.transparent!==(amount<1)){wall.material.transparent=amount<1;wall.material.needsUpdate=true;}wall.material.depthWrite=amount===1;wall.renderOrder=amount<1?-1:0;ringMat.uniforms.reveal.value=material.uniforms.reveal.value=amount;center.visible=core.visible=tiny.visible=signal&&amount>0;}
 return{camera,reveal,update(tt,camera){const q=move(tt,4.9,5.27);g.visible=tt>4.25;center.visible=core.visible=tiny.visible=tt>5.20;center.position.set(camera.eye[0]+1.5,axisY,axisZ);core.position.set(camera.eye[0]+1.49,axisY,axisZ);tiny.position.copy(core.position);core.material.opacity=q*.9;tiny.material.opacity=q;return q;}};
}
