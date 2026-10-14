// Studied source: 79.333–81.5 and 96.1–110.1s. Independent shot direction,
// continuous physical signal path through the repeater.
import {T,group,mat,cyl,tube,label,step,ease,mix} from './kit/objects';
import {practical} from './production-kit';
import {underseaScene} from './undersea';
export function marineRun(kind: string) {
  const set=underseaScene(undefined,{bankLimit:3.5,rippleStrength:.48,repeaterAt:kind==='seabed'?undefined:-20}),root=set.root;
  const steel=mat(0xb3cbed,.88,.23),edge=mat(0xd3e3f7,.86,.24),dark=mat(0x254769,.74,.30);
  const repeater=group(root,0,.64,-20);
  const casing=steel.clone();casing.transparent=true;
  const shell=cyl(repeater,.60,3.7,casing);shell.rotation.x=Math.PI/2;
  for(const z of [-1.72,1.72]) {
    const ring=cyl(repeater,.73,.16,edge,0,0,z);ring.rotation.x=Math.PI/2;
    for(let i=0;i<16;i++) {
      const a=i*Math.PI/8,b=cyl(repeater,.043,.08,dark,Math.sin(a)*.65,Math.cos(a)*.65,z+Math.sign(z)*.1,undefined,6);
      b.rotation.x=Math.PI/2;
    }
  }
  for(const side of [-1,1]) {
    const neck=cyl(repeater,.22,.95,dark,0,0,side*2.25,.49);neck.rotation.x=-side*Math.PI/2;
    for(let i=0;i<8;i++) {
      const ring=cyl(repeater,.22+i*.025,.045,i%2?dark:edge,0,0,side*(2.70-i*.095));ring.rotation.x=Math.PI/2;
    }
    const belt=cyl(repeater,.62,.10,edge,0,0,side*.95);belt.rotation.x=Math.PI/2;
  }
  const inner=group(repeater);
  const core=cyl(inner,.28,3.5,mat(0x62b8db,.54,.23,.28));core.rotation.x=Math.PI/2;
  for(const x of [-.30,.30])tube(inner,[[x,0,-1.5],[x,.28,-1.1],[x,.30,1.1],[x,0,1.5]],.025,mat(0xe7b750,.78,.26,.5),32);
  const rim=practical(root,[-1.8,2,-19],0x95d3ff,30,7,.28);
  const title=label(root,'Repeater',1.15,.22);title.position.set(.2,1.9,-21.7);
  const subtitle=label(root,'every 80–100 km',1.55,.16);subtitle.position.set(.2,1.62,-21.7);
  repeater.visible=kind!=='seabed';rim.visible=kind==='repeater'||kind==='crossing';
  return {...set,
    update(t:number) {
      // Explicit values ensure random-access rendering cannot accumulate state.
      set.update(0);
      const fade=kind==='fade',repeat=kind==='repeater',cross=kind==='crossing';
      const q=ease(step(t,0,fade?3:repeat?4.5:6.5));
      const z=fade?mix(-3,-15.5,q):repeat?mix(-15.5,-27,q):cross?-27-t*5:-18-t*4;
      const lift=kind==='seabed'?0:.47*Math.exp(-Math.pow((z+20)/5,6));
      set.pulse.position.set(0,.36+lift,z);
      set.pulseLight.color.set(0xffa52b);
      set.pulse.scale.setScalar(fade?mix(.40,.23,q):repeat?mix(.23,.67,ease(step(t,1.4,3.1))):.67);
      set.pulseLight.intensity=fade?mix(95,12,q):repeat?mix(12,100,ease(step(t,1.4,3.1))):100;
      const reveal=ease(step(t,1.5,1.9))*(1-ease(step(t,2.7,3.1)));
      casing.opacity=repeat?1-.84*reveal:1;inner.visible=repeat&&reveal>.01;
      title.visible=subtitle.visible=repeat&&t>1.8;
      (rim.children[0] as T.PointLight).intensity=repeat?30+12*reveal:12;
    },
    camera(t:number) {
      if(kind==='seabed')return {eye:[4.2,4.6,10-t*4],look:[0,.34,-18-t*4],fov:51,offset:[-58,77]};
      if(kind==='fade'){const q=ease(step(t,0,3));return {eye:[mix(3.8,5.4,q),mix(5.2,2.4,q),mix(12,-5,q)],look:[0,.5,-20],fov:49,offset:[-15,20]};}
      if(kind==='repeater'){const q=ease(step(t,0,4.5));return {eye:[mix(8.0,7.5,q),mix(3.1,3.3,q),mix(-12,-14,q)],look:[0,.65,-20],fov:49,offset:[-12,-25]};}
      const travel=3.7*t;
      return {eye:[4.7,2.2,-9.8-travel],look:[0,.4,-27-travel],fov:53,offset:[-8,0]};
    }
  };
}
