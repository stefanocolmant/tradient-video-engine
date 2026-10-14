// @ts-nocheck
// Native45.167–51.333. Published CStack phone, authored staging and causal paths.
import {T,group,mat,box,cyl,rod,ball,label,glow,canvasTex,rand,step,ease,mix} from './kit/objects';
import {studio,practical} from './production-kit';
import {phoneLayout,screenPoint} from './kit/phone';
import {Reflector} from 'three/examples/jsm/objects/Reflector.js';

function skyline(root){
 const g=group(root,0,-13,-140);g.scale.set(2,1.8,2);
 const tx=canvasTex(512,1024,(c,w,h)=>{c.fillStyle='#040918';c.fillRect(0,0,w,h);for(let y=0;y<60;y++)for(let x=0;x<24;x++){const q=rand(x*73+y+91);c.fillStyle=q>.89?'#71819e':q>.84?'#344361':'#080e20';c.fillRect(x*21+6,y*17+5,7,6);}});
 const wall=new T.MeshStandardMaterial({color:0x46506c,map:tx,emissive:0xb2c2e8,emissiveMap:tx,emissiveIntensity:.7,roughness:.83});
 for(let i=0;i<44;i++){const x=(i%22-10.5)*2.7,z=-Math.floor(i/22)*12;const h=2+rand(i+228)*9;box(g,2+rand(i+67),h,3,wall,x,h/2,z);}
 const glass=mat(0x142e63,.48,.38,.08),edge=mat(0x467cba,.55,.45,.13);
 // The source skyline's three distinct silhouettes, kept distant behind the phone.
 const tall=group(g,-6,0,-8);box(tall,1.9,31,1.5,glass,0,15.5);rod(tall,[-.97,0,.77],[-.97,31,.77],.023,edge);box(tall,1.94,.25,1.5,edge,0,31);practical(tall,[.5,31.7,1.2],0x85c6ff,14,6,2.5);
 const aperture=group(g,-13,0,-5);box(aperture,1.8,21,1.4,glass,0,10.5);for(const x of [-.8,.8])rod(aperture,[x,18,.72],[x,22,.72],.035,edge);rod(aperture,[-.8,22,.72],[.8,22,.72],.035,edge);
 const taper=group(g,9,0,-8);cyl(taper,1.15,20,glass,0,10,0,.28,12);for(let y=2;y<20;y+=.9)cyl(taper,1.2-y*.046,.04,edge,0,y,0,undefined,24);rod(taper,[0,20,0],[0,25,0],.045,edge);
 const pearl=group(g,18,0,-9);rod(pearl,[0,0,0],[0,23,0],.11,edge);for(const y of [10,17])ball(pearl,y===10?.9:.38,glass,0,y);practical(pearl,[0,17,0],0x94b6ff,5,4,.55);
 return g;
}

function radioMast(root){
 const g=group(root,3,-9,-75),metal=mat(0x2455a2,.65,.4,.09),warm=mat(0xee8c32,.24,.48,.16),h=17;
 const s=y=>1.35-(y/h)*1.03;
 for(const x of [-1,1])for(const z of [-1,1])rod(g,[x*s(0),0,z*s(0)],[x*s(h),h,z*s(h)],.033,metal);
 for(let j=0;j<12;j++){const y=j*h/12,yy=(j+1)*h/12;for(const side of [-1,1]){
  rod(g,[-s(y),y,side*s(y)],[s(yy),yy,side*s(yy)],.018,metal);rod(g,[s(y),y,side*s(y)],[-s(yy),yy,side*s(yy)],.018,metal);
  rod(g,[side*s(y),y,-s(y)],[side*s(yy),yy,s(yy)],.018,metal);rod(g,[-s(y),y,side*s(y)],[s(y),y,side*s(y)],.023,metal);
 }}
 for(const y of [12.1,16]){for(const side of [-1,1])rod(g,[side*.9,y,-.7],[side*.9,y,.7],.03,metal);for(let k=0;k<3;k++){const a=k*2.094;const p=box(g,.21,1.23,.12,warm,Math.cos(a)*.85,y+.45,Math.sin(a)*.85,.02);p.rotation.y=-a;}}
 rod(g,[0,16,0],[0,18,0],.022,metal);practical(g,[0,18,0],0xff476a,2,3,.22);
 return g;
}

function numbered(root,id){
 const g=group(root),tx=canvasTex(480,190,(c,w,h)=>{c.fillStyle='#ffb80a';c.fillRect(0,0,w,h);c.fillStyle='#754407';c.fillRect(0,0,w,11);c.fillStyle='#492602';c.font='900 138px FilmBody';c.textAlign='center';c.textBaseline='middle';c.fillText('#'+id,w/2,h*.54,w*.94);});
 box(g,.53,.22,.035,mat(0xbd7106,.1,.55),0,0,-.025,.007);
 const face=new T.Mesh(new T.PlaneGeometry(.53,.22),new T.MeshBasicMaterial({map:tx,toneMapped:false}));g.add(face);return g;
}

export function sendingRadio(role='reference',arrival=false){
 const root=studio({wide:true}),b=role==='cstack';
 root.traverse(o=>{if(o.geometry?.parameters?.radius===650)o.material.fragmentShader=o.material.fragmentShader.replace('.008,.015,.043','.045,.065,.170').replace('.06,.11,.31','.045,.075,.21');});
 // A true mirrored scene render includes the published phone and moving packets.
 const floor=new Reflector(new T.PlaneGeometry(24,24),{textureWidth:720,textureHeight:1280,color:0x69758a,clipBias:.003,multisample:2});
 floor.rotation.x=-Math.PI/2;floor.position.set(0,-.025,9);
 floor.material.fragmentShader=floor.material.fragmentShader.replace('vec4 base = texture2DProj( tDiffuse, vUv );','vec2 uv=vUv.xy/vUv.w; vec4 base=texture2D(tDiffuse,uv)*.5; base+=(texture2D(tDiffuse,uv+vec2(.0035,0.))+texture2D(tDiffuse,uv-vec2(.0035,0.))+texture2D(tDiffuse,uv+vec2(0.,.0035))+texture2D(tDiffuse,uv-vec2(0.,.0035)))*.125;').replace('vec4( blendOverlay( base.rgb, color ), 1.0 )','vec4(vec3(.012,.020,.044)+base.rgb*.17,1.0)');
 root.add(floor);skyline(root);const mast=radioMast(root);
 const frame=group(root);const wall=mat(0x101d3d,.2,.66);box(frame,.42,13,.52,wall,-2.75,6.4,-2.7);box(frame,20,.26,.55,wall,3,1.55,-2.8);box(frame,2.5,13,.52,wall,-4.2,6.4,-2.7);
 // A lower street, framed by near buildings, makes the flight read as travel.
 const windows=canvasTex(512,1024,(c,w,h)=>{c.fillStyle='#080e1a';c.fillRect(0,0,w,h);for(let y=0;y<32;y++)for(let x=0;x<12;x++){let v=rand(x*181+y+732);c.fillStyle=v>.84?'#8292ad':v>.67?'#28374f':'#0b1321';c.fillRect(x*42+10,y*32+9,16,14);}});
 const facade=new T.MeshStandardMaterial({color:0x667590,map:windows,emissive:0xc4cfea,emissiveMap:windows,emissiveIntensity:.6,roughness:.8});
 for(let i=0;i<(arrival?4:7);i++)for(const side of [-1,1]){const h=arrival?(i>=2?4:5+rand(i+side+183)):18+rand(i+side+183)*8;box(root,5.5,h,7,facade,side*(11+rand(i+992)*2),-9+h/2,-26-i*13);}
 const road=new T.Mesh(new T.PlaneGeometry(25,arrival?56:110),mat(0x060d1b,.05,.9));road.rotation.x=-Math.PI/2;road.position.set(0,-9.05,arrival?-38:-65);root.add(road);
 const pool=canvasTex(128,128,(c,w,h)=>{const a=c.createRadialGradient(w/2,h/2,0,w/2,h/2,w/2);a.addColorStop(0,'#9cbdef90');a.addColorStop(.25,'#6487bd45');a.addColorStop(1,'#30498200');c.fillStyle=a;c.fillRect(0,0,w,h);});
 for(let i=0;i<(arrival?13:22);i++){const z=-15-i*4;for(const side of [-1,1]){const light=new T.Mesh(new T.PlaneGeometry(5,3),new T.MeshBasicMaterial({map:pool,transparent:true,depthWrite:false,opacity:.55,toneMapped:false}));light.rotation.x=-Math.PI/2;light.position.set(side*4.7,-8.98,z);root.add(light);}box(root,.09,.005,.9,mat(0x596c8b,.1,.9),.1,-8.97,z);}
 const phone={position:[b?-.25:-.8,2.4,0],rotation:[-.025,.10,-.065],scale:2.06,mode:'thread',state:{mode:'thread',time:'7:02',contact:'',messages:[{from:'them',text:'Mom, what are you up to?'},{from:'me',text:'Cooking. All your favorites.'},{from:'me',photo:true,appear:1}],compose:{photo:0},brightness:1,delivered:1}};
 const layout=phoneLayout(phone.state),rect=layout.lastPhoto,local=new T.Vector3(...screenPoint(rect.x+rect.w/2,rect.y+rect.h*.55,.14));
 const matrix=new T.Matrix4().compose(new T.Vector3(...phone.position),new T.Quaternion().setFromEuler(new T.Euler(...phone.rotation)),new T.Vector3(phone.scale,phone.scale,phone.scale));const origin=local.applyMatrix4(matrix);
 const sources=Array.from({length:38},(_,i)=>new T.Vector3(...screenPoint(rect.x+rect.w*(.2+.6*rand(i+941)),rect.y+rect.h*(.2+.6*rand(i+821)),.14)).applyMatrix4(matrix));
 const cards=Array.from({length:38},(_,i)=>numbered(root,String(Math.floor(rand(i+631)*1450)).padStart(4,'0')));
 const waves=Array.from({length:3},()=>{const m=new T.ShaderMaterial({transparent:true,depthWrite:false,side:T.DoubleSide,uniforms:{alpha:{value:0}},vertexShader:'varying vec3 n,v;void main(){vec4 mv=modelViewMatrix*vec4(position,1.);n=normalize(normalMatrix*normal);v=normalize(-mv.xyz);gl_Position=projectionMatrix*mv;}',fragmentShader:'uniform float alpha;varying vec3 n,v;void main(){float f=pow(1.-abs(dot(normalize(n),normalize(v))),7.);gl_FragColor=vec4(1.,.61,.06,f*alpha);}'});const mesh=new T.Mesh(new T.SphereGeometry(1,48,24),m);mesh.position.set(phone.position[0],3.2,-.25);root.add(mesh);return mesh;});
 const title=label(root,'Cell tower',3,.5);title.position.set(-1,8.5,-74.5);
 const flight=new T.CubicBezierCurve3(origin.clone(),new T.Vector3(-.4,7,-4),new T.Vector3(1.2,6,-50),new T.Vector3(3,7.4,-75));const pulse=practical(root,[0,0,0],0xffbf29,14,6,.45);
 const camera=t=>{const q=ease(step(t,3.1,5.65)),push=ease(step(t,2.2,3.1));return{eye:[mix(0,4,q),mix(4.2,1,q),mix(13.5-1.4*push,-52,q)],look:[mix(0,3,q),mix(2.3,3.5,q),mix(-4,-75,q)],fov:b?47:46};};
 return{root,phone,arrivalParts:{mast,title},fogColor:0x050d25,fogDensity:.0025,environmentIntensity:.2,camera,update(t){
  cards.forEach((o,i)=>{const q=(i/38+t*.23)%1,up=ease(step(q,0,.43)),spread=ease(step(q,.16,.62));const x=phone.position[0]+(rand(i+82)-.5)*3.6,y=5.2+rand(i+152)*1.5,z=-.3-rand(i+195)*1.4;o.position.set(mix(sources[i].x,x,spread),mix(sources[i].y,y,up),mix(sources[i].z,z,up));o.rotation.set(.04,(rand(i+283)-.5)*.3,(rand(i+337)-.5)*.30);o.scale.setScalar((.76+rand(i+44)*.27)*Math.min(1,step(q,0,.025))*Math.min(1,1-step(q,.95,1)));});
  waves.forEach((o,i)=>{const q=(t*.75+i/3)%1;o.scale.set(1+q*1.7,1.4+q*2,1+q*1.7);o.material.uniforms.alpha.value= .28*(1-q)*step(t,2.3,2.7)*(1-step(t,3.2,3.7));});
  pulse.visible=t>=3.2&&t<5.5;pulse.position.copy(flight.getPoint(ease(step(t,3.2,5.4))));title.visible=t>4.75;const c=camera(t);title.lookAt(new T.Vector3(...c.eye));frame.visible=t<4.0;
 }};
}
