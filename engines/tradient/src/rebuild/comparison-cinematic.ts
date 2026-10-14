// @ts-nocheck
import {T,C,group,box,rod,line,mat,text,materials,bars,cursor,glow} from './objects';
import {studio} from '../production-kit';
import {marketTerrain} from './data-cinematic';
import {ease} from './runtime.mjs';
// The two sheets are the same observation, not two different market outcomes.
export function buildCinematicComparison(score){
 const d=score.visualDirection.comparison;if(!d?.camera)throw Error('Comparison camera required');
 const root=studio({wide:true,warm:true}),m=materials(),hero=group(root),sheets=[],craft=score.visualDirection?.craftVersion===6;
 const field=marketTerrain(root,score.visualDirection.data),skies=root.children.filter(o=>o.isMesh&&o.material?.side===T.BackSide);skies.forEach(o=>{o.layers.set(2);if(craft)o.material.fragmentShader='varying vec3 p;void main(){float y=normalize(p).y;float h=exp(-pow((y-0.02)*7.0,2.0));gl_FragColor=vec4(mix(vec3(.006,.010,.027),vec3(.035,.055,.135),h),1.0);}';});root.children.filter(o=>o.isLight).forEach(o=>{o.intensity*=.35;o.layers.enable(1)});
 for(let j=0;j<2;j++){
  const g=group(hero,0,j?2.1:9,0),chart=bars(g,{data:score.marketData,width:9.3,height:3.9,depth:.40});
  const plate=new T.Mesh(new T.PlaneGeometry(10.7,5.5),new T.MeshPhysicalMaterial({color:0x18344e,transparent:true,opacity:.17,metalness:.45,roughness:.27,side:T.DoubleSide,depthWrite:false}));plate.position.z=-.4;g.add(plate);
  for(const x of [-5.35,5.35])rod(g,[x,-2.75,-.4],[x,2.75,-.4],.022,m.steel);
  for(const y of [-2.75,2.75])rod(g,[-5.35,y,-.4],[5.35,y,-.4],.022,m.steel);
  for(let k=0;k<6;k++){const y=-1.9+k*.78;line(g,[[-4.9,y,-.3],[4.9,y,-.3]],C.steel,.24);}
  const heading=text(g,j?'CONFIGURED SOFTWARE':'MANUAL ATTENTION',6.3,.39,0,3.15,0,'#afcbd5');
  const thresh=line(g,[[-5.1,chart.level(100),.45],[5.1,chart.level(100),.45]],C.gold,.9);
  const trigger=group(g,4.5,chart.level(100),.6);trigger.add(new T.Mesh(new T.TorusGeometry(.27,.025,10,48),m.gold));
  const p=cursor(g);p.scale.setScalar(1.5);
  const route=new T.CatmullRomCurve3([new T.Vector3(4.5,chart.level(100),.6),new T.Vector3(5.3,-.4,1.2),new T.Vector3(3.7,-2.4,2.0),new T.Vector3(0,-2.4,craft?3.2:2.0)]);
  const geometry=new T.TubeGeometry(route,80,.018,8,false),stroke=new T.Mesh(geometry,m.gold);g.add(stroke);
  const instruction=group(g,0,-2.4,2.0),values=[];for(let k=0;k<3;k++){const u=group(instruction,(k-1)*.70,0,0);box(u,.58,.58,.45,m.cyan,0,0,0,.08);text(u,'1',.32,.32,0,0,.24);values.push(u);}
  const limit=text(instruction,'LIMIT 100.05',3.2,.27,0,-.66,.24,'#e7d199');const formed=text(instruction,'BUY 3',2.5,.29,0,.67,.24,'#e7d199');
  const record=group(g);box(record,1.30,.48,.08,mat(0xa18f57,.72,.26));text(record,'100.01',1.17,.30,0,0,.05,'#f4dda5');const lamp=new T.PointLight(C.gold,18,5,2);lamp.layers.enable(1);record.add(lamp);const lightTrail=[];for(let k=0;k<6;k++)lightTrail.push(glow(g,.18,C.gold));
  sheets.push({g,chart,heading,thresh,trigger,p,stroke,geometry,instruction,values,limit,formed,record,route,lightTrail});
 }
 const common=group(hero,0,5.5,0),future=bars(common,{data:score.futureMarketData,width:score.futureMarketData.length*(9.3/score.marketData.length)*.75,height:3.9,x:2.1875+score.futureMarketData.length*(9.3/score.marketData.length)*.75/2,depth:.40});
 const title=text(common,'THE SAME MARKET CONTINUES',8.5,.40,0,3.1,.35,'#c1d6df');
 const observation=text(common,'ILLUSTRATIVE PRICE UPDATES',6.5,.27,0,-2.75,.35,'#8babbc');
 const key=new T.PointLight(C.gold,220,60,2);key.position.set(-8,13,12);key.layers.enable(1);root.add(key);const fill=new T.PointLight(C.cyan,180,55,2);fill.position.set(9,9,-6);fill.layers.enable(1);root.add(fill);
 hero.traverse(o=>o.layers.set(1));const depthFocus={active:true,hero,skies,distance:30,aperture:craft?.00022:.00010,maxblur:.01};
 return {root,depthFocus,environmentIntensity:.24,fogDensity:.006,camera:()=>d.camera,update(s,camera){
  const intro=s.p('compare'),auto=s.p('automatic-action'),manual=s.p('manual-action'),merge=s.p('no-prediction'),tail=s.p('no-guarantee');
  field.update(s.seconds-63.1667,.85);sheets.forEach((x,j)=>{
   const action=j?auto:manual;x.g.position.set(0,(j?2.1:9)*(1-merge)+5.5*merge,(j?-.6:.6)*(1-merge));x.g.rotation.y=(j?.08:-.08)*(1-merge);x.g.visible=j===0||merge<.995;
   x.chart.root.position.x=-1.3*merge;x.chart.root.scale.x=1-.25*merge;x.chart.update(1,intro);
   x.heading.visible=merge<.2&&(j===0||s.frame<d.labelFocusFrame);x.thresh.visible=merge<.8;x.trigger.visible=intro>.05&&merge<.4;x.trigger.scale.setScalar(.8+.25*intro);
   x.p.visible=j===0&&merge<.2;x.p.position.set(-3.5+8*manual,1.5+(x.chart.level(100)-1.5)*manual,.9);
   x.stroke.visible=action>0&&merge<.25;x.geometry.setDrawRange(0,Math.floor(action*80)*8*6);
   x.instruction.visible=action>.05&&merge<.25;x.instruction.position.z=2+1.2*action;x.instruction.scale.setScalar(.2+.8*action);
   x.values.forEach((u,k)=>{u.position.x=(k-1)*(.70+.35*(1-action));u.rotation.y=(k-1)*.35*(1-action)});
   x.record.visible=craft&&action>0&&action<1&&merge<.25;x.record.position.copy(x.route.getPoint(action));x.record.rotation.y=.35*Math.sin(action*Math.PI);x.record.scale.setScalar(.75+.25*Math.sin(action*Math.PI));x.lightTrail.forEach((p,k)=>{p.visible=x.record.visible;const q=Math.max(0,action-k*.02);p.position.copy(x.route.getPoint(q));p.material.opacity=(1-k/7)*.20;});
  });
  common.visible=merge>.15;title.visible=merge>.8;observation.visible=tail>.1;
  future.root.visible=merge>.5;future.candles.forEach((c,i)=>{const p=ease((merge-.5)*2+tail*.5-i*.13);c.body.visible=c.wick.visible=p>0;c.body.scale.y=Math.max(.001,p);c.wick.scale.y=Math.max(.001,p)});
  depthFocus.distance=camera.position.distanceTo(new T.Vector3(0,merge>.1?5.5:5,0));
 }};
}
