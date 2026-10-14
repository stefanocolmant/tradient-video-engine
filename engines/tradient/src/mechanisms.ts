// @ts-nocheck
// New authored explanatory mechanisms. CStack supplies primitives and lighting only.
import {T,P,group,box,cyl,ball,rod,tube,mat,label,glow,rand,step,ease,mix,canvasTex} from './kit/objects';
import {studio,surface,bokeh,practical} from './production-kit';
import {patch,weather} from './kit/realism/shade';

const TAU=Math.PI*2;
const q=(p,a,b)=>ease(step(p,a,b));
const pulse=(p,a,b)=>Math.sin(Math.PI*step(p,a,b));
function palette(){
 const metal=new T.MeshPhysicalMaterial({color:0xffffff,metalness:.78,roughness:.32,clearcoat:.25});
 patch(metal,weather({base:'#213c62',vary:.06,scale:2.3,bump:.00025,bumpScale:.12,rough:[.24,.39]}));
 return {metal,dark:mat(0x081222,.52,.46),steel:mat(0x9daebf,.87,.22),gold:mat(0xc79532,.76,.28),black:mat(0x02070e,.35,.5),cyan:mat(0x3b8caf,.72,.28,.08),hot:mat(0xffc34a,.3,.24,1.3),red:mat(0xd3465d,.32,.38,.25),glass:new T.MeshPhysicalMaterial({color:0x8dc5e3,transparent:true,opacity:.16,metalness:.1,roughness:.18,depthWrite:false,side:T.DoubleSide})};
}
function ring(p,r,t,m,x=0,y=0,z=0){const o=new T.Mesh(new T.TorusGeometry(r,t,12,64),m);o.position.set(x,y,z);o.castShadow=true;p.add(o);return o;}
function bolts(p,w,d,y,m){for(const x of [-w/2+.15,w/2-.15])for(const z of [-d/2+.15,d/2-.15]){const b=cyl(p,.06,.08,m,x,y,z,.06,6);box(p,.065,.012,.016,mat(0x202432),x,y+.046,z);}}
function base(p,w,d,m){box(p,w,.36,d,m.metal,0,.18,0,.09);box(p,w-.24,.1,d-.24,m.dark,0,.4,0);bolts(p,w,d,.4,m.steel);for(const x of [-1,1])for(const z of [-1,1])cyl(p,.13,.25,m.black,x*(w/2-.3),.08,z*(d/2-.3));}
function face(p,text,w=2.4,h=.45,x=0,y=1,z=.2,color='#edf6ff'){const o=label(p,text,w,h,color);o.position.set(x,y,z);return o;}
function bearing(p,x,y,z,r,m){const g=group(p,x,y,z);ring(g,r,.13,m.metal);ring(g,r*.73,.04,m.steel);for(let i=0;i<8;i++){const a=i*TAU/8;ball(g,.065,m.steel,Math.cos(a)*r*.86,Math.sin(a)*r*.86,.02);}return g;}
function rails(p,length,y,m,spacing=1.3){for(const x of [-spacing/2,spacing/2]){rod(p,[x,y,-length/2],[x,y,length/2],.075,m.steel);for(let z=-length/2;z<=length/2;z+=1.25){box(p,.22,.18,.26,m.metal,x,y-.13,z);box(p,spacing+.6,.12,.2,m.dark,0,y-.29,z);}}}
function set(){const root=studio({wide:true});surface(root,100,'#091528');const m=palette();bokeh(root,{count:18,z:-23});for(let i=0;i<14;i++){const x=(i%2?1:-1)*(7+rand(i)*8),z=-8-Math.floor(i/2)*4;const h=2+rand(i+8)*5;box(root,1.4,h,1.5,m.dark,x,h/2,z);for(let j=0;j<5;j++)box(root,.9,.04,.08,j===2?m.cyan:m.metal,x,.7+j*.38,z+.8);}return{root,m};}
function clampHardware(p,x,y,z,m){const g=group(p,x,y,z);box(g,.35,1.7,.42,m.metal,0,.85);rod(g,[0,.15,.26],[0,1.6,.26],.04,m.steel);const jaw=box(g,.7,.25,.65,m.gold,0,1.5,.28);return jaw;}
function wheel(p,r,m){const g=group(p);ring(g,r,.12,m.metal);ring(g,r*.68,.03,m.gold);cyl(g,.19,.5,m.steel).rotation.x=Math.PI/2;for(let i=0;i<12;i++){let a=i*TAU/12;rod(g,[Math.cos(a)*.22,Math.sin(a)*.22,0],[Math.cos(a)*r,Math.sin(a)*r,0],.035,m.steel);}return g;}
function ticket(p,m,text='BUY · 3'){const g=group(p);box(g,1.9,1.15,.12,m.metal,0,0,0,.1);box(g,1.67,.79,.045,m.dark,0,0,.09,.08);face(g,text,1.45,.3,0,.15,.13,'#ffc958');face(g,'LIMIT 100.05',1.46,.23,0,-.21,.13);for(let i=0;i<7;i++)box(g,.13,.09,.02,m.gold,-.64+i*.21,-.49,.085);return g;}

export function buildMechanism(kind:string,events:any[]=[]){
 const cue=(p,id,a,b)=>{const e=events.find(v=>v.id===id);return q(p,e?.startP??a,e?.endP??b)};
 const {root,m}=set();const actions:((p:number,t:number)=>void)[]=[];
 if(kind==='ribbon'){
  const chassis=group(root,0,0,-2);base(chassis,4.4,15,m);rails(chassis,14,1.5,m,2.1);
  for(const z of [-6,6]){const drum=group(chassis,0,1.5,z);cyl(drum,.7,2.6,m.metal).rotation.z=Math.PI/2;for(let x=-1.25;x<1.3;x+=.15){const o=ring(drum,.71,.018,m.steel);o.rotation.y=Math.PI/2;o.position.x=x;}for(const x of [-1.6,1.6]){const b=bearing(chassis,x,1.5,z,.42,m);b.rotation.y=Math.PI/2;box(chassis,.35,1.5,.85,m.metal,x,.78,z);}actions.push((p,t)=>drum.rotation.x=t*.8);}
  for(let i=0;i<72;i++){const g=group(chassis);box(g,2.3,.045,.2,m.metal);for(const x of [-1.04,1.04])box(g,.06,.035,.10,m.steel,x,.055);const h=.24+rand(i+920)*1.65;const stem=box(g,.2,h,.11,i%5?m.cyan:m.gold,Math.sin(i*.63)*.55,h/2+.08);rod(g,[stem.position.x,.07,0],[stem.position.x,h+.35,0],.018,m.steel);actions.push((p,t)=>{g.position.z=((i*.24+t*1.7)%17.28)-8.64;g.visible=Math.abs(g.position.z)<6.4;});}
  const arch=group(chassis,0,0,0);for(const x of [-2,2])box(arch,.27,4.2,.35,m.metal,x,2.1,0);box(arch,4.3,.25,.35,m.metal,0,4.1,0);const scanner=box(arch,3.1,.03,.025,m.hot,0,2.5,0);practical(arch,[0,2.6,.1],P.gold,15,6,.8);face(arch,'MARKET UPDATES',2.55,.25,0,4.5,.2);
  const sweep=group(chassis);box(sweep,2.1,.025,.08,m.hot);actions.push((p,t)=>{sweep.position.set(0,2.7,-6+12*q(p,.04,.92));scanner.scale.x=.9+.1*Math.sin(t*3);});
 }
 if(kind==='manual'){
  base(root,5,15,m);rails(root,14,1.4,m,1.8);const labels=['NOTICE','CHECK','PLACE'];
  for(let i=0;i<3;i++){const z=-4.5+i*4.5,g=group(root,0,0,z);for(let x of [-1.65,1.65]){box(g,.36,2.3,.7,m.metal,x,1.25);bearing(g,x,2.3,0,.25,m).rotation.y=Math.PI/2;}const hinge=group(g,0,2.3,0);box(hinge,3.1,.16,1.25,m.gold,0,0,.5);box(hinge,2.5,.04,.04,m.hot,0,.11,1.08);const gateLabel=face(g,labels[i],1.7,.28,0,3.85,.24);const lever=group(g,2.0,.8,.5);cyl(lever,.28,.24,m.metal);rod(lever,[0,0,0],[0,1.3,0],.08,m.steel);ball(lever,.23,m.gold,0,1.3,0);actions.push(p=>{gateLabel.position.y=2.8+1.05*(1-q(p,.15+i*.25,.23+i*.25));hinge.rotation.x=-1.25*(1-q(p,.15+i*.25,.23+i*.25));lever.rotation.z=-.7*q(p,.11+i*.25,.18+i*.25);});}
  const bead=ball(root,.23,m.hot,0,1.75,-6.5);const lamp=new T.PointLight(P.gold,15,5);root.add(lamp);actions.push(p=>{const a=q(p,.04,.15),b=q(p,.24,.39),c=q(p,.48,.64),d=q(p,.73,.96);bead.position.z=-6.5+1.7*a+4.5*b+4.5*c+2.2*d;lamp.position.copy(bead.position);});
 }
 if(kind==='rules'){
  const mount=group(root);base(mount,7.4,4.8,m);const titles=['CONDITION','SIZE','PRICE LIMIT'];
  for(let i=0;i<3;i++){const x=(i-1)*2.3,g=group(mount,x,0,0);box(g,1.9,2.8,.85,m.metal,0,1.9,-.15);for(let j=0;j<9;j++)box(g,1.55,.045,.08,m.black,0,.65+j*.12,.33);const disc=wheel(g,.76,m);disc.position.set(0,3.7,.5);for(let j=0;j<24;j++){const a=j*TAU/24;rod(g,[Math.sin(a)*.87,3.7+Math.cos(a)*.87,.5],[Math.sin(a)*.98,3.7+Math.cos(a)*.98,.5],.014,m.steel);}const needle=group(g,0,3.7,.65);rod(needle,[0,0,0],[0,.69,0],.035,m.hot);ball(needle,.09,m.gold);face(g,titles[i],1.95,.32,0,2.4,.33);face(g,['SIGNAL TRUE','3 UNITS','100.05'][i],1.65,.38,0,1.88,.34,'#ffd26e');const cartridge=group(g,0,5.8,0);box(cartridge,1.45,.55,.9,m.gold);for(let j=0;j<8;j++)box(cartridge,.08,.12,.05,m.steel,-.55+j*.16,-.3,.42);actions.push(p=>{const a=q(p,.06+i*.08,.23+i*.08);cartridge.position.y=5.8-1.35*a;disc.rotation.z=(-.8+i*.5)*q(p,.15,.56);needle.rotation.z=[-.7,.15,.7][i]*q(p,.16,.56);});}
  for(let i=0;i<3;i++){const g=group(mount,(i-1)*2.3,0,.8);const pane=group(g,-.78,1.3,0);box(pane,1.56,.92,.05,m.glass,.78,0);ring(g,.48,.028,m.steel,0,.92,0);const cam=wheel(g,.38,m);cam.position.set(0,.93,.08);const follower=box(g,.16,.5,.18,m.gold,0,1.42,.1);const pellets=[];if(i===1)for(let k=0;k<3;k++){const v=ball(g,.11,m.gold,-.32+k*.32,2.2,.22);pellets.push(v);}actions.push(p=>{const a=q(p,.38+i*.1,.48+i*.1);pane.rotation.y=-1.25*a;cam.rotation.z=a*2.2;follower.position.y=1.42+.18*Math.sin(a*Math.PI);pellets.forEach((v,k)=>{v.visible=p>=.5;v.position.y=1.65-.72*q(p,.51+k*.045,.59+k*.045);});});}
  for(const x of [-2.3,0,2.3])tube(mount,[[x,.6,-.7],[x,.3,-1.2],[0,.3,-2],[0,.6,-2.8]],.07,m.black);
  const connect=box(mount,6.5,.055,.035,m.hot,0,.65,.65);actions.push(p=>connect.scale.x=q(p,.55,.73));
 }
 if(kind==='scanner'){
  base(root,5.8,11,m);rails(root,12,1.3,m,1.6);const arch=group(root,0,2.65,0);ring(arch,1.8,.2,m.metal);ring(arch,1.49,.07,m.steel);for(let i=0;i<8;i++){const a=i*TAU/8;box(arch,.16,.36,.48,m.gold,Math.cos(a)*1.7,Math.sin(a)*1.7,0).rotation.z=a;}
  const lens=new T.Mesh(new T.CircleGeometry(1.42,64),m.glass);arch.add(lens);face(root,'CONDITION CHECK',2.9,.27,0,4.8,.18);const sensor=box(arch,2.7,.03,.03,m.hot,0,0,.13);const bar=group(root,0,1.4,.5);box(bar,2.45,.16,.55,m.metal);const gate=group(bar,0,.7,0);for(let k=0;k<7;k++)box(gate,.07,1.1,.1,m.gold,-.96+k*.32,0,0);for(const y of [-.54,.54])box(gate,2.1,.1,.15,m.gold,0,y,0);const signal=ball(root,.12,m.hot,0,2.65,.25);const light=new T.PointLight(P.gold,0,6);root.add(light);
  for(let i=0;i<10;i++){const g=group(root);box(g,1.03,.15,.66,m.metal);box(g,.66,.12,.4,i===9?m.hot:m.cyan,0,.15);const n=label(g,i===9?'TRUE':'FALSE',.78,.22,i===9?'#ffdb7e':'#8cafbf');n.position.set(0,.25,.36);actions.push(p=>{const arrival=i===9?.91:.055+i*.084;const a=q(p,arrival-.07,arrival+.04);g.position.set(i===9?0:2.7*q(p,arrival+.025,arrival+.09),1.5+(i===9?.9*q(p,arrival-.04,arrival+.02):0),-5+5*a+(i===9?5*q(p,.945,1):0));g.visible=p>arrival-.12&&p<arrival+.15;});}
  actions.push((p,t)=>{const accepted=cue(p,'condition-pass',.9,.945);gate.position.y=.7+1.5*accepted;signal.visible=p>.945;signal.position.z=.25+5*q(p,.945,1);light.position.copy(signal.position);light.intensity=18*accepted;sensor.position.y=Math.sin(t*4)*.78;});
 }
 if(kind==='assembly'){
  base(root,6.7,7,m);rails(root,7.5,1.5,m,1.7);for(let x of [-2.4,2.4])for(let z of [-1.6,1.6]){cyl(root,.16,5.6,m.steel,x,3,z);cyl(root,.29,1.1,m.metal,x,1.2,z);}
  box(root,5.7,.62,4.1,m.metal,0,5.5,0);bolts(root,5.7,4.1,5.84,m.gold);const piston=group(root,0,4.3,0);const ram=cyl(root,.24,1,m.steel,0,4.8,0);cyl(root,.42,.7,m.metal,0,5.15,0);box(piston,3.7,.55,2.6,m.metal,0,-.45,0);box(piston,3.5,.06,2.4,m.gold,0,-.76,0);const carrier=group(root,0,1.5,-3.2);box(carrier,2.5,.27,1.75,m.metal);const order=ticket(carrier,m);order.rotation.x=-Math.PI/2;order.position.y=.20;
  const pieces=[];for(let i=0;i<3;i++){const g=group(root,(i-1)*1.0,2.7,-1.8);box(g,.72,.2,.58,m.gold);face(g,['BUY','3','100.05'][i],.66,.2,0,.02,.32);pieces.push(g);}
  const amber=new T.PointLight(P.gold,0,7);amber.position.set(0,3,1.4);root.add(amber);for(let i=0;i<12;i++)box(root,.14,.08,.05,m.cyan,-2.6+i*.47,5.5,2.1);
  actions.push(p=>{carrier.position.z=-3.2+3.2*q(p,.03,.22)+5*q(p,.74,.98);pieces.forEach((g,i)=>{const a=q(p,.2+i*.065,.32+i*.065);g.position.y=2.7-.965*a;g.position.z=-1.8+1.8*a;g.visible=p<.65;});order.visible=p>=.65;piston.position.y=4.3-1.75*pulse(p,.48,.73);ram.position.y=(5.19+piston.position.y-.17)/2;ram.scale.y=5.19-(piston.position.y-.17);amber.intensity=28*pulse(p,.56,.67);});
 }
 if(kind==='broker'){
  base(root,7.5,10,m);const switcher=group(root,0,2,0);cyl(switcher,2.15,.28,m.metal).rotation.x=Math.PI/2;ring(switcher,2.0,.08,m.gold);for(let i=0;i<12;i++){const a=i*TAU/12;box(switcher,.3,.14,.18,m.steel,Math.cos(a)*1.7,Math.sin(a)*1.7,.18).rotation.z=a;}
  const path=new T.CatmullRomCurve3([new T.Vector3(0,1.6,6),new T.Vector3(0,2,1),new T.Vector3(1.3,2,0),new T.Vector3(2.6,2,-2),new T.Vector3(2.6,2,-7)]);for(const dx of [-.68,.68])tube(root,path.getPoints(50).map(v=>[v.x+dx,v.y-.35,v.z]),.065,m.steel);const card=ticket(root,m);card.scale.setScalar(.75);face(root,'BROKER',2.8,.5,0,5.0,0);face(root,'VENUE',2.3,.42,2.6,3.3,-6);const rotor=rod(switcher,[-1.5,0,.3],[1.5,0,.3],.1,m.cyan);const portal=group(root,2.6,2,-6);ring(portal,1.5,.24,m.metal);ring(portal,1.22,.04,m.hot);practical(root,[2.6,2,-5.6],P.gold,14,7,1.2);
  actions.push(p=>{const a=q(p,.08,.92),v=path.getPointAt(a);card.position.copy(v);card.rotation.y=-.35*Math.sin(a*Math.PI);rotor.rotation.z=TAU*q(p,.18,.6);});
 }
 if(kind==='market'){
  base(root,7.3,7,m);const shelves=[];const quantities=[];
  for(let i=0;i<3;i++){const g=group(root,0,1.3+i*1.5,-.7);box(g,5.8,.18,1.8,m.metal);for(const x of [-2.65,2.65])rod(g,[x,-.3,-.7],[x,.9,-.7],.055,m.steel);face(g,['100.03','100.04','100.06'][i],1.05,.29,-2.12,.4,.52,'#d3e8fa');const row=[];for(let j=0;j<(i===0?2:i===1?1:4);j++){const b=box(g,.54,.52,.68,i===2?m.cyan:m.gold,-.45+j*.7,.43,.02);for(let k=0;k<3;k++)box(b,.38,.028,.015,m.steel,0,-.1+k*.1,.35);row.push(b);}quantities.push(row);shelves.push(g);}
  for(const x of [-3.05,3.05])box(root,.28,5.7,.3,m.metal,x,3,-1.25);face(root,'AVAILABLE QUANTITY',3.8,.29,0,5.9,.25);
  const limit=group(root,0,3.55,.85);box(limit,6.1,.04,.09,m.hot);face(limit,'LIMIT 100.05',2.1,.25,.8,.31,.08,'#ffcd66');
  const order=group(root,0,1.5,4.6);box(order,2.7,.3,1.35,m.metal);const cells=[];for(let i=0;i<3;i++){box(order,.63,.055,.76,m.black,-.83+i*.83,.19,0);cells.push(box(order,.55,.23,.65,m.gold,-.83+i*.83,.3,0));}face(order,'ORDER · 3',1.9,.29,0,.28,.72);const parked=face(root,'1 REMAINS',1.75,.3,0,1.15,3.25,'#7bcff0');
  actions.push(p=>{order.position.z=4.6-2.65*cue(p,'order-arrival',.02,.25);quantities[1][0].position.x=-.45+7*cue(p,'withdraw',.2,.35);quantities[1][0].visible=cue(p,'withdraw',.2,.35)<1;quantities[0].forEach((o,i)=>{const a=cue(p,`fill-${i+1}`,.4+i*.06,.55+i*.06);o.position.set(-.45+i*.7+(-.83+i*.83+.45-i*.7)*a,.43+.07*a,.02+2.63*a);o.scale.y=1-.558*a;o.visible=a<1;});cells.forEach((o,i)=>o.visible=i<2?cue(p,`fill-${i+1}`,.4+i*.06,.55+i*.06)>=1:false);parked.visible=cue(p,'remainder',.73,.74)>0;});
 }
 if(kind==='report'){
  base(root,6,6,m);const printer=group(root,0,1.2,-1.1);box(printer,4.5,2.6,2.5,m.metal,0,1.3,0);box(printer,3.7,.2,.11,m.black,0,1.7,1.29);for(let i=0;i<12;i++)box(printer,.055,.6,.07,m.black,-1.65+i*.3,.6,1.28);face(printer,'EXECUTION REPORT',3.2,.25,0,2.7,1.3);
  const tex=canvasTex(900,1250,(c,w,h)=>{c.fillStyle='#cedae6';c.fillRect(0,0,w,h);c.fillStyle='#173251';c.font='bold 64px FilmBody';c.fillText('EXECUTION',70,130);c.font='54px FilmCondensed';[['REQUESTED','3'],['FILLED','2'],['PRICE','100.03'],['REMAINING','1']].forEach(([a,b],i)=>{c.fillText(a,70,320+i*160);c.fillText(b,640,320+i*160);c.fillRect(70,350+i*160,730,3)});c.font='bold 66px FilmBody';c.fillStyle='#936d24';c.fillText('PARTIAL FILL',70,1100);});
  const paperMaterial=new T.MeshStandardMaterial({map:tex,roughness:.77,metalness:.05,side:T.DoubleSide});paperMaterial.onBeforeCompile=shader=>{shader.vertexShader=shader.vertexShader.replace('#include <common>','#include <common>\nvarying vec3 vPaperWorld;').replace('#include <begin_vertex>','#include <begin_vertex>\nvPaperWorld=(modelMatrix*vec4(position,1.0)).xyz;');shader.fragmentShader=shader.fragmentShader.replace('#include <common>','#include <common>\nvarying vec3 vPaperWorld;').replace('#include <clipping_planes_fragment>','#include <clipping_planes_fragment>\nif(vPaperWorld.y<2.94) discard;');};const receipt=new T.Mesh(new T.PlaneGeometry(2.5,3.47,1,40),paperMaterial);root.add(receipt);const roller=wheel(root,.65,m);roller.position.set(2.65,2.6,.25);const holder=group(root,-2.65,2.6,.25);cyl(holder,.25,1.4,m.gold).rotation.z=Math.PI/2;
  actions.push((p,t)=>{receipt.position.set(0,1.205+3.47*cue(p,'print-feed',.04,.77),.3);receipt.rotation.x=0;roller.rotation.z=-q(p,.04,.8)*TAU;});
 }
 if(kind==='comparison'){
  base(root,9,12,m);const lanes=[-2.15,2.15];
  for(let i=0;i<2;i++){const g=group(root,lanes[i],0,0);rails(g,10,1.2,m,1.25);face(g,i?'PREDEFINED':'MANUAL',2.4,.36,0,4.4,-.2);for(let x of [-1.05,1.05])box(g,.21,2.3,.4,m.metal,x,2.25,0);const hinge=group(g,0,3.1,0);box(hinge,2.25,.14,1.3,m.gold,0,0,.48);const bead=ball(g,.18,m.hot,0,1.65,-5);const terminal=group(g,0,1.3,4.3);box(terminal,2.1,.42,1.6,m.metal);for(let j=0;j<3;j++)box(terminal,.42,.12,.5,m.black,-.6+j*.6,.27);const arrived=ball(terminal,.19,m.hot,0,.48);const lamp=new T.PointLight(P.gold,0,5);terminal.add(lamp);const marker=face(g,'ACTION',1.7,.25,0,2.65,4.3);
   actions.push(p=>{const start=cue(p,'signal-arrival',.06,.22);const proceed=i?cue(p,'predefined-action',.22,.48):cue(p,'manual-action',.52,.82);hinge.rotation.x=i?0:-1.2*(1-q(p,.46,.55));bead.position.z=-5+4.4*start+4.9*proceed;bead.visible=proceed<1;arrived.visible=proceed>=1;lamp.intensity=12*proceed;marker.material.opacity=.3+.7*proceed;});}
  const pulseLabel=face(root,'SAME CONDITION',3.8,.33,0,1.1,-5.8,'#edc87c');
 }
 if(kind==='overview'){
  base(root,9,8,m);const subjects=['DEFINE','TEST','MONITOR'];
  for(let i=0;i<3;i++){const g=group(root,(i-1)*2.7,0,0);base(g,2.45,3.9,m);face(g,subjects[i],2.2,.33,0,3.6,.25);
   if(i===0){const wheel1=wheel(g,.75,m);wheel1.position.set(0,2.7,.3);const n=rod(g,[0,2.7,.42],[.52,3.18,.42],.03,m.hot);box(g,1.8,1.5,.75,m.metal,0,1.4);face(g,'RULES',1.6,.28,0,1.5,.45);const lock=group(g,0,2,-.1);box(lock,1.4,.4,.8,m.gold);actions.push(p=>{lock.position.y=2.8-.65*q(p,.05,.25);wheel1.rotation.z=.7*q(p,.04,.25);});}
   if(i===1){rails(g,3.6,1.16,m,1.0);for(let j=0;j<7;j++){const sample=box(g,.9,.08,.6,j===3?m.gold:m.cyan,0,1.3,-1.5+j*.46);actions.push((p,t)=>{sample.position.z=((j*.46+t*.55)%3.22)-1.61;sample.position.x=sample.position.z>.1?1.0*q(sample.position.z,.1,1):0;});}ring(g,.95,.13,m.metal,0,2,.1);ring(g,.73,.025,m.gold,0,2,.1);face(g,'CHECK',1.4,.24,0,2.15,.3);}
   if(i===2){box(g,1.95,2.1,.8,m.metal,0,1.85);face(g,'FILLED  2',1.65,.3,0,2.25,.45,'#edc87c');face(g,'WAITING  1',1.65,.3,0,1.75,.45);const pen=box(g,.13,.52,.13,m.gold,0,1.1,.58);for(let j=0;j<15;j++)box(g,.064,.13+rand(j)*.25,.05,m.cyan,-.78+j*.11,.85,.46);actions.push((p,t)=>pen.position.x=Math.sin(t*.9)*.77);}
  }
  const crest=label(root,'TRADIENT',5.4,.72,'#e7f5ff');crest.position.set(0,5.25,-2);face(root,'RULES BEFORE REACTIONS',6,.37,0,4.4,-1.9,'#edc87c');
 }

 const skies=root.children.filter(o=>o.isMesh&&o.geometry?.type==='SphereGeometry'&&o.material?.type==='ShaderMaterial');skies.forEach(o=>o.layers.set(2));const focusHero=new T.Group();root.add(focusHero);
 return {root,skies,focusHero,update(p:number,t:number){actions.forEach(fn=>fn(p,t));},environmentIntensity:.34,fogDensity:.009};
}
