// @ts-nocheck
// Reusable CStack scene composition: lights, atmosphere, physical surfaces, water.
import {T,P,group,mat,box,glow,rand,canvasTex,dust} from './kit/objects';
import {patch,weather} from './kit/realism/shade';

export function studio({warm=false,wide=false}={}){
  const root=new T.Group();
  root.add(new T.HemisphereLight(warm?0x96aaca:0x8eacee,0x080d21,1.4));
  const key=new T.DirectionalLight(warm?0xe5d5b9:0x8dbaff,3.0);key.position.set(-9,17,13);
  key.castShadow=true;key.shadow.mapSize.set(1024,1024);
  Object.assign(key.shadow.camera,{left:wide?-48:-20,right:wide?48:20,top:32,bottom:-20,near:.5,far:130});
  key.shadow.bias=-.0003;key.shadow.normalBias=.028;root.add(key,key.target);
  const rim=new T.DirectionalLight(0x294be5,2.1);rim.position.set(15,6,-28);root.add(rim);
  const fill=new T.DirectionalLight(0x365384,.65);fill.position.set(0,5,20);root.add(fill);
  const sky=new T.Mesh(new T.SphereGeometry(650,32,16),new T.ShaderMaterial({side:T.BackSide,depthWrite:false,toneMapped:false,
    vertexShader:'varying vec3 p;void main(){p=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
    fragmentShader:'varying vec3 p;void main(){float y=normalize(p).y;float a=exp(-pow((y-.025)*9.,2.));float b=exp(-pow((y-.04)*30.,2.));gl_FragColor=vec4(mix(vec3(.008,.015,.043),vec3(.06,.11,.31),a)+vec3(.015,.025,.045)*b,1.);}'
  }));root.add(sky);dust(root,380,140);return root;
}

export function surface(root,size=200,color='#101a2c'){
  const m=new T.MeshPhysicalMaterial({color:0xffffff,metalness:.12,roughness:.88,specularIntensity:.25});
  patch(m,weather({base:color,vary:.28,scale:.7,bump:.012,bumpScale:.065,rough:[.65,.94]}));
  const plane=new T.Mesh(new T.PlaneGeometry(size,size),m);plane.rotation.x=-Math.PI/2;plane.receiveShadow=true;root.add(plane);return plane;
}

export function ocean(root,{size=450,z=-75,y=0}={}){
  const geo=new T.PlaneGeometry(size,size,180,180);geo.rotateX(-Math.PI/2);
  const shader=new T.ShaderMaterial({uniforms:{clock:{value:0},eye:{value:new T.Vector3(0,5,20)},source:{value:new T.Vector3(-15,25,-100)},glint:{value:new T.Color('#a8b9e8')}},
    vertexShader:`uniform float clock;varying vec3 p;void main(){vec3 v=position;v.y+=sin(v.z*.25+clock*.65)*.13+sin(v.x*.43+v.z*.13-clock*.5)*.08;p=(modelMatrix*vec4(v,1.)).xyz;gl_Position=projectionMatrix*viewMatrix*vec4(p,1.);}`,
    fragmentShader:`uniform float clock;uniform vec3 eye,source,glint;varying vec3 p;void main(){float dx=0.,dz=0.;for(int i=0;i<8;i++){float k=float(i)+1.;vec2 d=vec2(cos(k*1.73),sin(k*1.73));float a=dot(p.xz,d)*(.5+k*.62)+clock*(.6+k*.13);float amp=.05/pow(k,.23);dx+=d.x*cos(a)*amp;dz+=d.y*cos(a)*amp;}vec3 n=normalize(vec3(-dx,1.,-dz)),v=normalize(eye-p),l=normalize(source-p);float shine=pow(max(dot(n,normalize(l+v)),0.),80.)*2.8;float fres=pow(1.-max(dot(n,v),0.),4.);vec3 c=vec3(.012,.026,.053)+vec3(.026,.048,.095)*fres+glint*shine;float mist=1.-exp(-length(eye-p)*.0018);gl_FragColor=vec4(mix(c,vec3(.018,.03,.075),mist),1.);}`
  });const mesh=new T.Mesh(geo,shader);mesh.position.set(0,y,z);root.add(mesh);
  return {mesh,shader,update(t,eye){shader.uniforms.clock.value=t;shader.uniforms.eye.value.set(...eye)}};
}

export function practical(root,position,color=P.gold,intensity=35,distance=18,size=1){
  const g=group(root,...position);const light=new T.PointLight(color,intensity,distance,2);g.add(light);glow(g,size,color);return g;
}

export function bokeh(root,{count=28,warm=true,z=-25}={}){
  for(let i=0;i<count;i++){const o=glow(root,1.8+rand(i+120)*3.8,warm&&i%3?0xdab786:0x6b96e8);o.position.set((rand(i+21)-.5)*30,rand(i+400)*23-7,z-rand(i+260)*14);o.material.opacity=.2+rand(i+56)*.25;}
}
