// @ts-nocheck
// Native51.333–56.933: one deterministic spatial/cue family across two logical shots.
import {T,group,mat,box,cyl,rod,tube,line,label,glow,canvasTex,rand,step,ease,mix} from './kit/objects';
import {studio,practical} from './production-kit';
import {fiberEntry} from './fiber-entry';
import {cutawayGround} from './cutaway-ground';

function blueMast(root){
 const g=group(root),steel=mat(0x285ca0,.50,.35,.025),edge=mat(0x649acd,.78,.27,.025),orange=mat(0xf1a14d,.25,.52,.12),dark=mat(0x101723,.65,.48);
 const h=18,s=y=>1.5-y/18*1.15;
 for(const x of [-1,1])for(const z of [-1,1])rod(g,[x*s(0),0,z*s(0)],[x*s(h),h,z*s(h)],.052,steel);
 for(let j=0;j<14;j++){const y=j*h/14,yy=(j+1)*h/14;for(const side of [-1,1]){for(const flip of [-1,1]){rod(g,[flip*s(y),y,side*s(y)],[-flip*s(yy),yy,side*s(yy)],.024,j%4===1?edge:steel);rod(g,[side*s(y),y,flip*s(y)],[side*s(yy),yy,-flip*s(yy)],.021,steel);}rod(g,[-s(y),y,side*s(y)],[s(y),y,side*s(y)],.027,steel);rod(g,[side*s(y),y,-s(y)],[side*s(y),y,s(y)],.027,steel);}}
 // Internal ladder and cable bundles keep the route attached to the structure.
 for(const x of [-.18,.18])rod(g,[x,0,.37],[x,17,.37],.019,edge);
 for(let y=.14;y<17;y+=.25)rod(g,[-.18,y,.37],[.18,y,.37],.014,edge);
 for(let i=0;i<4;i++)rod(g,[.28+i*.045,.25,.20],[.28+i*.045,16.7,.20],.016,dark);
 for(const y of [14,16.6]){
  const r=y>15?.83:1.02;const deck=cyl(g,r,.09,dark,0,y,0,r,8);deck.rotation.y=Math.PI/8;
  for(let k=0;k<8;k++){const a=k*Math.PI/4,b=(k+1)*Math.PI/4;rod(g,[Math.cos(a)*r,y,Math.sin(a)*r],[Math.cos(a)*r,y+.6,Math.sin(a)*r],.014,edge);rod(g,[Math.cos(a)*r,y+.6,Math.sin(a)*r],[Math.cos(b)*r,y+.6,Math.sin(b)*r],.017,steel);}
  for(let side=0;side<3;side++){const a=side*Math.PI*2/3;const mounts=group(g,Math.sin(a)*r,y,Math.cos(a)*r);mounts.rotation.y=a;rod(mounts,[-.65,.7,0],[.65,.7,0],.024,edge);
   for(let k=0;k<3;k++){if(side>0&&k!==1)continue;const xx=(k-1)*.46,hh=k===1?.72:1.46;rod(mounts,[xx,-.1,0],[xx,2,0],.025,edge);box(mounts,.28,hh,.15,orange,xx,1.02,.10,.06);for(let n=0;n<3;n++)box(mounts,.035,.055,.035,dark,xx-.07+n*.07,1.02-hh/2-.03,.10);}
  }
 }
 for(const y of [8.4,10.4]){const dish=cyl(g,.22,.10,orange,-.75,y,.65,.16,24);dish.rotation.x=Math.PI/2;rod(g,[-.75,y,.4],[-.75,y,.68],.04,steel);}
 rod(g,[0,17,0],[0,18.25,0],.018,steel);practical(g,[0,17.4,0],0xff425c,2,3,.28);return g;
}
function cabinet(root,x,h,w){
 const vents=[];const g=group(root,x,0,0),body=mat(0x53627e,.40,.60),dark=mat(0x111924,.32,.63),trim=mat(0x7f91ae,.5,.48);
 box(g,w,h,1.18,body,0,h/2,0,.015);box(g,w+.18,.095,1.34,trim,0,h+.025,0,.01);box(g,w-.09,h-.14,.024,body,0,h/2,.612,.003);
 for(const yy of (h>3?[h*.24,h*.78]:[h*.78])){box(g,w*.59,.51,.016,dark,0,yy,.638);for(let j=0;j<7;j++){const v=box(g,w*.59,.040,.07,trim.clone(),0,yy-.235+j*.076,.68,.002);v.rotation.x=-.2;vents.push({material:v.material,y:yy});}}
 for(const yy of [h*.22,h*.76])box(g,.045,.17,.045,dark,-w*.46,yy,.65);box(g,.042,.32,.05,dark,w*.34,h*.48,.665);rod(g,[-w*.46,.06,.641],[-w*.46,h-.07,.641],.006,trim);return {g,vents};
}
function district(root){
 const tx=canvasTex(512,1024,(c,w,h)=>{c.fillStyle='#060d1b';c.fillRect(0,0,w,h);for(let y=0;y<14;y++)for(let x=0;x<8;x++){let r=rand(x*121+y+443);c.fillStyle=r>.93?'#cbb58b':r>.80?'#6c83a8':r>.59?'#14243d':'#080f1e';c.fillRect(x*64+16,y*73+20,26,35);}});
 const m=new T.MeshStandardMaterial({color:0x778398,map:tx,emissiveMap:tx,emissive:0xc9d6ef,emissiveIntensity:.3,roughness:.86});
 for(let i=0;i<18;i++){const x=(i%9-4)*5,z=-10-Math.floor(i/9)*9,h=5+rand(i+630)*6;box(root,4.5,h,4,m,x,h/2,z,.003);box(root,4.6,.12,4.1,mat(0x101b2c,.2,.8),x,h,z);}
}
export function towerLight(kind,role='reference'){
 const root=studio({wide:true}),b=role==='cstack',clock=t=>t+(kind==='ground'?54.3-51.333:0);
 root.traverse(o=>{if(o.geometry?.parameters?.radius===650)o.material.fragmentShader=o.material.fragmentShader.replace('.008,.015,.043','.035,.045,.09').replace('.06,.11,.31','.045,.065,.18');});
 blueMast(root);district(root);practical(root,[3,2,3],0x9ebfff,55,13,.2);practical(root,[-2,17,1],0x8fbbff,28,8,.22);
 const blue=mat(0x21406c,.64,.4),dark=mat(0x090f20,.2,.85);box(root,55,.22,21,dark,10,-.17,-8.5);
 // Cutaway face leaves underground route visible from the camera side.
 cutawayGround(root);
 box(root,4.7,.25,2.9,mat(0x3b4560,.4,.64),5.55,-.025,.2);const cab=cabinet(root,4.75,3.5,1.75);cabinet(root,6.35,2.6,1.38);rod(root,[6.6,2.6,-.25],[6.6,3.55,-.25],.04,blue);
 // A diamond wire fence, sparse posts, and low background separate planes.
 const fence=group(root,0,0,-1.8),wire=mat(0x284872,.65,.48);
 for(let x=-7;x<24;x+=2.2)rod(fence,[x,0,0],[x,2.05,0],.026,blue);rod(fence,[-7,2.05,0],[24,2.05,0],.035,blue);
 const verts=[];for(let x=-9;x<24;x+=.19){verts.push(x,0,0,x+1.2,2,0);verts.push(x,2,0,x+1.2,0,0);}const net=new T.LineSegments(new T.BufferGeometry().setAttribute('position',new T.Float32BufferAttribute(verts,3)),new T.LineBasicMaterial({color:0x284570,transparent:true,opacity:.5}));fence.add(net);
 // Physical overhead carrier and curved inlet are dark until the warm pulse passes.
 for(const z of [.15,.4]){rod(root,[.35,3.65,z],[3.3,3.65,z],.025,blue);tube(root,[[3.3,3.65,z],[3.9,3.65,z],[3.92,3.5,z],[3.92,3.42,z]],.027,dark,24);}
 const cp=new T.CurvePath();const add=(a,c,d,z)=>cp.add(new T.CubicBezierCurve3(new T.Vector3(...a),new T.Vector3(...c),new T.Vector3(...d),new T.Vector3(...z)));
 add([.3,17,.52],[.3,12,.52],[.3,5,.52],[.3,3.65,.52]);
 add([.3,3.65,.52],[2,3.65,.52],[4.05,3.4,.52],[4.1,3.45,.52]);
 add([4.1,3.45,.52],[4.75,3.45,.8],[4.75,2,.8],[4.75,.02,.8]);
 add([4.75,.02,.8],[4.75,-1.05,2.3],[5,-1.08,2.4],[6.2,-1.08,2.4]);
 add([6.2,-1.08,2.4],[11,-1.08,2.4],[18,-1.08,2.4],[26,-1.08,2.4]);
 const lens=cp.getCurveLengths(),total=cp.getLength();const seg=[0,...lens.map(n=>n/total)];
 const cable=tube(root,cp,.063,new T.MeshPhysicalMaterial({color:0x84adee,emissive:0x204d8d,emissiveIntensity:.15,metalness:.25,roughness:.22,transparent:true,opacity:.45,depthWrite:false}),180);
 const shader=new T.ShaderMaterial({transparent:true,depthWrite:false,blending:T.AdditiveBlending,uniforms:{q:{value:0},pulseEnabled:{value:0},routeLength:{value:total},tail:{value:3.5}},vertexShader:'varying vec2 v;void main(){v=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',fragmentShader:'uniform float q,pulseEnabled,routeLength,tail;varying vec2 v;void main(){float d=(q-v.x)*routeLength;float a=(exp(-pow(d/.12,2.))+step(0.,d)*exp(-max(d,0.)/tail)*.85)*pulseEnabled;gl_FragColor=vec4(1.,.60,.08,a);}'});tube(root,cp,.046,shader,250);
 const pulse=practical(root,[0,0,0],0xffb629,18,5,1.35),core=glow(pulse,.22,0xfff2bf);
 const title=label(root,'Cell tower',3.0,.5);title.position.set(-3.9,17.4,.5);
 const fiberLabel=label(root,'Fiber optic cable',2.5,.3,'#9cb8df'),entry=fiberEntry(root);
 const wave=practical(root,[0,15,2],0xffba43,0,10,5);wave.children[1].material.opacity=0;
 const keys=[
  [0,[3.6,4.0,20],[0,12.8,0]], [.867,[3.6,4.0,20],[0,12.8,0]],
  [1.24,[2.2,17.25,5.7],[.8,16.45,.5]], [1.63,[2.2,17.25,5.7],[.8,16.45,.5]],
  [2.20,[4,5.2,6.8],[2,4.5,.5]], [2.65,[3.8,2.2,8],[3,1.7,.4]],
  [3.15,[6.8,1.3,13.8],[5.8,0,.4]], [3.8,[6.8,1.3,13.8],[5.8,0,.4]],
  [5.60,[6.8,1.3,13.8],[5.8,0,.4]]
 ];
 //018: native cabinet anchors determine composition before any surface detail.
 // These authored eye/look poses use the existing fixed lens; they are not a published CStack shot.
 const framing=[
  [2.20,[4,5.2,6.8],[2,4.5,.5]],
  [2.667,[-2,2.714,15.956],[2.828,1.753,.4]],
  [2.934,[.008,1.083,15.699],[4.919,.166,.4]],
  [3.167,[.196,1.062,15.859],[5.709,-.264,.4]],
  [4.167,[2.543,-.401,13.8],[7.278,-.426,.4]],
  [4.567,[0,1.3,13.8],[0,0,.4]]
 ];
 function compose(tt,eye,look){
  if(tt<=2.2||tt>=4.567)return;
  // Match the existing pulse-follow position exactly before fiberEntry takes over.
  const x=Math.max(5.8,cp.getPointAt(progress(4.567)).x-1.5);
  framing[5][1][0]=x+1;framing[5][2][0]=x;
  let i=0;while(i<framing.length-2&&tt>framing[i+1][0])i++;
  const a=framing[i],z=framing[i+1],dt=z[0]-a[0],q=step(tt,a[0],z[0]);
  const endV=(cp.getPointAt(progress(4.568)).x-cp.getPointAt(progress(4.566)).x)/.002;
  const slope=(j,c,k)=>j===0?0:j===framing.length-1?(k===0?endV:0):(framing[j+1][c][k]-framing[j-1][c][k])/(framing[j+1][0]-framing[j-1][0]);
  for(const [c,out] of [[1,eye],[2,look]])for(let k=0;k<3;k++)out[k]=(2*q**3-3*q*q+1)*a[c][k]+(q**3-2*q*q+q)*dt*slope(i,c,k)+(-2*q**3+3*q*q)*z[c][k]+(q**3-q*q)*dt*slope(i+1,c,k);
 }
 function camera(t){const tt=clock(t);let i=0;while(i<keys.length-2&&tt>keys[i+1][0])i++;const a=keys[i],z=keys[i+1],q=ease(step(tt,a[0],z[0]));const eye=a[1].map((v,k)=>mix(v,z[1][k],q)),look=a[2].map((v,k)=>mix(v,z[2][k],q));if(tt>3.8){const x=Math.max(5.8,cp.getPointAt(progress(tt)).x-1.5);eye[0]=x+1;look[0]=x;}compose(tt,eye,look);return entry.camera(tt,{eye,look,fov:b?47:46},cp.getPointAt(progress(tt)).x);}
 function progress(tt){const k=[[1.64,0],[2.20,seg[1]],[2.57,seg[2]],[3.47,seg[3]],[3.9,seg[4]],[5.7,1]];let i=0;while(i<k.length-2&&tt>k[i+1][0])i++;return mix(k[i][1],k[i+1][1],step(tt,k[i][0],k[i+1][0]));}
 return{root,arrivalParts:{title,wave},fogColor:0x050d25,fogDensity:.004,environmentIntensity:.2,camera,update(t){const tt=clock(t),q=progress(tt),active=tt>=1.63?1:0;pulse.visible=!!active;pulse.position.copy(cp.getPointAt(q));pulse.children[0].intensity=tt<2.57?28:tt<3.8?24:22;pulse.children[1].scale.setScalar(tt<3.8?1.9:1.25);cab.vents.forEach(v=>{const on=step(tt,v.y>2?2.70:3.17,v.y>2?2.87:3.37);v.material.color.set(0x7f91ae).lerp(new T.Color(0xe6b557),on);v.material.emissive.set(0xffa624);v.material.emissiveIntensity=on*.65;});shader.uniforms.q.value=q;shader.uniforms.pulseEnabled.value=active;shader.uniforms.tail.value=mix(3.5,.28,step(tt,2.57,2.95));title.visible=tt<.9;const c=camera(t);title.lookAt(new T.Vector3(...c.eye));fiberLabel.visible=tt>4.3&&tt<4.967;fiberLabel.position.set(c.look[0],-1.6,2.4);fiberLabel.lookAt(new T.Vector3(...c.eye));const dive=entry.update(tt,c);pulse.children[1].scale.setScalar(mix(tt<3.8?1.9:1.25,.012,dive));core.scale.setScalar(mix(.18,.003,dive));pulse.children[0].intensity*=1-dive*.999;const flash=(1-step(tt,.75,.9))*(.5+.5*Math.cos(tt*21))**8;wave.children[0].intensity=flash*85;wave.children[1].material.opacity=flash*.12;}};
}
