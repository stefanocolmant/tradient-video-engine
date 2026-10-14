// @ts-nocheck
import {T,C,group,box,rod,line,mat,text,materials,bars} from './objects';
import {studio} from '../production-kit';
import {marketTerrain} from './data-cinematic';
import {ease} from './runtime.mjs';
export function buildCinematicConfiguration(score){
 const d=score.visualDirection?.configuration;if(!d?.camera||!d?.departure)throw Error('Configuration construction and departure required');
 const root=studio({warm:true,wide:true}),m=materials(),craft=score.visualDirection?.craftVersion===6;root.children.filter(o=>o.isLight).forEach(o=>{o.intensity*=.34;o.layers.enable(1)});
 const skies=root.children.filter(o=>o.isMesh&&o.material?.side===T.BackSide);skies.forEach(o=>{o.layers.set(2);if(craft)o.material.fragmentShader='varying vec3 p;void main(){float y=normalize(p).y;float h=exp(-pow((y-0.02)*7.0,2.0));gl_FragColor=vec4(mix(vec3(.006,.010,.027),vec3(.035,.055,.135),h),1.0);}';});
 const field=marketTerrain(root,score.visualDirection.data),hero=group(root),chartRig=group(hero,0,3.6,0);
 const chart=bars(chartRig,{data:score.marketData,width:8.7,height:4.8,x:0,y:0,z:.22,depth:.30});
 const back=new T.Mesh(new T.PlaneGeometry(10.7,6.5),new T.MeshPhysicalMaterial({color:0x163653,transparent:true,opacity:.24,metalness:.40,roughness:.27,side:T.DoubleSide,depthWrite:false}));back.position.z=-.3;chartRig.add(back);
 const frame=group(chartRig);for(const x of [-5.35,5.35])rod(frame,[x,-3.25,-.3],[x,3.25,-.3],.027,m.steel);for(const y of [-3.25,3.25])rod(frame,[-5.35,y,-.3],[5.35,y,-.3],.027,m.steel);
 for(let i=0;i<7;i++){
  const price=99.90+i*.03,Y=chart.level(price);line(chartRig,[[-5.1,Y,-.2],[5.1,Y,-.2]],C.steel,.28);text(chartRig,price.toFixed(2),.90,.23,-4.8,Y+.18,-.15,'#88acbb');
 }
 for(let i=0;i<17;i++)line(chartRig,[[-4.4+i*.55,-2.6,-.2],[-4.4+i*.55,2.8,-.2]],C.steel,.20);
 const header=group(chartRig);text(header,'RULE-01',2.7,.37,-3.8,3.77,0,'#92b4c6');text(header,'STORED BEFORE THE SIGNAL',5.4,.26,1,3.77,0,'#abb9a4');
 const threshold=group(chartRig,0,chart.level(100),.35);const thresholdLine=box(threshold,10,.045,.07,m.gold);text(threshold,'PRICE > 100.00',3.7,.34,1.6,.48,.15,'#f2d792');
 const size=group(hero,0,2.5,4),units=[];for(let i=0;i<3;i++){
  const g=group(size);box(g,.95,.95,.95,craft?mat(0x7d9199,.76,.26):m.cyan,0,0,0,.10);box(g,.83,.83,.02,m.black,0,0,.49,.05);text(g,'1',.50,.51,0,0,.51,'#d0edf1');if(craft){for(const x of [-.39,.39])for(const y of [-.39,.39])box(g,.027,.027,.012,m.steel,x,y,.51);box(g,.90,.018,.025,m.cyan,0,-.44,.51);}units.push(g);
 }
 text(size,'CONFIGURED SIZE: 3',4.7,.36,0,1.25,.1,'#a9dee6');
 const limit=group(chartRig,0,chart.level(100.05),.15);const pane=new T.Mesh(new T.PlaneGeometry(10,5.4),new T.MeshBasicMaterial({color:C.gold,transparent:true,opacity:.07,side:T.DoubleSide,depthWrite:false}));pane.rotation.x=-Math.PI/2;limit.add(pane);for(const z of [-2.7,2.7])box(limit,10,.045,.05,m.gold,0,0,z);for(const x of [-5,5])rod(limit,[x,0,-2.7],[x,0,2.7],.017,m.gold);text(limit,'LIMIT 100.05',3.8,.40,1.3,.48,2.7,'#f3d999');
 if(craft){back.material.opacity=.11;frame.children.forEach(o=>{o.material.roughness=.23;});}
 const key=new T.PointLight(C.gold,140,60,2);key.position.set(-6,11,9);key.layers.enable(1);root.add(key);const fill=new T.PointLight(C.cyan,95,50,2);fill.position.set(7,7,4);fill.layers.enable(1);root.add(fill);
 hero.traverse(o=>o.layers.set(1));const depthFocus={active:true,hero,skies,distance:24,aperture:craft?.00024:.00010,maxblur:.009};
 return {root,handles:{hero,chartRig,chart,threshold,thresholdLine,size,units,limit,header,field,skies,key,fill},depthFocus,environmentIntensity:.24,fogDensity:.006,fogColor:0x070e1e,camera:()=>d.camera,update(s,camera){
  const arrive=id=>{const e=score.events.find(x=>x.id===id);return score.visualDirection.ruleHandoff?ease((s.frame-e.firstFrame)/(e.anchorFrame-e.firstFrame)):s.p(id)};const condition=arrive('condition-detail'),quantity=arrive('size-detail'),price=arrive('limit-detail'),depart=ease((s.frame-d.departure.firstFrame)/(d.departure.endFrame-d.departure.firstFrame));
  header.visible=s.frame<d.headerOutFrame;
  field.update((s.frame-479)/30,.35);chart.update(1,.06);chartRig.position.set(0,3.6-depart*3.4,-depart*7);chartRig.rotation.x=-depart*Math.PI/2;chartRig.scale.setScalar(1-.75*depart);
  chart.candles.forEach((c,i)=>{const front=ease(Math.max(0,Math.min(1,condition*2-i/score.marketData.length)));c.body.position.z=.15+front*(craft?.80:.35);c.wick.position.z=c.body.position.z;});
  if(craft){threshold.visible=condition>0;threshold.scale.x=1;thresholdLine.scale.x=Math.max(.001,condition)}else threshold.scale.x=Math.max(.001,condition);size.visible=quantity>0&&depart<.99;size.scale.setScalar(Math.max(.001,quantity*(1-depart)));units.forEach((g,i)=>{g.position.set((i-1)*(1.15+.35*quantity),Math.sin(quantity*Math.PI)*.2,i===1?.15:0);g.rotation.y=(i-1)*.12*(1-quantity);});limit.visible=price>0;limit.scale.z=Math.max(.001,price);
  key.intensity=140+75*condition;depthFocus.distance=camera.position.distanceTo(new T.Vector3(0,3.5,1));
 }};
}
