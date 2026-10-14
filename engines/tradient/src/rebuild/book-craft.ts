// @ts-nocheck
// One continuous coordinate system from the price ladder to the execution report.
import {T,C,group,box,cyl,rod,line,mat,text,materials,environment,wire,dynamicFace,canvasText,rounded,canvasTex} from './objects';
import {ease} from './runtime.mjs';
import {reportFlight,limitJourneyState} from './craft-state.mjs';
import {patch,weather} from '../kit/realism/shade';
import {practical} from '../production-kit';
export function buildCraftExecution(score){
 const d=score.visualDirection?.execution;if(!d?.camera||!Array.isArray(d.levels)||!d.priceScale||!d.reportAisle)throw Error('Explicit execution scene direction required');
 if(d.levels.some((r,i)=>r.price<score.values.fillPrice||!Number.isInteger(r.quantity)||r.quantity<0||(i&&r.price<=d.levels[i-1].price)))throw Error('Ask levels must be sorted and start at the best available price');
 for(const [price,quantity] of [[100.03,2],[100.04,1],[100.05,0],[100.06,4]])if(d.levels.find(r=>r.price===price)?.quantity!==quantity)throw Error('Liquidity choreography requires calibrated quantity at '+price);
 const root=environment({floor:true,warm:true}),m=materials(),hero=group(root),market=group(root);
 const etched=new T.MeshPhysicalMaterial({color:0xffffff,metalness:.73,roughness:.34,clearcoat:.32});patch(etched,weather({base:'#263e53',vary:.13,scale:3.2,bump:.0013,bumpScale:.035,rough:[.27,.46]}));
 const rowMetal=new T.MeshPhysicalMaterial({color:0xffffff,metalness:.58,roughness:.41});patch(rowMetal,weather({base:'#182938',vary:.16,scale:1.8,bump:.002,bumpScale:.08,rough:[.33,.55]}));
 const activeLight=new T.PointLight(C.gold,0,10,2);activeLight.layers.enable(1);root.add(activeLight);
 const departureLight=new T.PointLight(C.cyan,0,8,2);departureLight.layers.enable(1);root.add(departureLight);
 const skies=root.children.filter(o=>o.isMesh&&o.material?.side===T.BackSide);skies.forEach(o=>{o.layers.set(2);o.material.fragmentShader='varying vec3 p;void main(){float y=normalize(p).y;float h=exp(-pow((y-0.02)*7.0,2.0));gl_FragColor=vec4(mix(vec3(.006,.010,.027),vec3(.035,.055,.135),h),1.0);}';});root.children.filter(o=>o.isLight&&o.color?.getHex()===0x294be5).forEach(o=>o.intensity*=.18);root.children.filter(o=>o.isLight).forEach(o=>o.layers.enable(1));
 const level=p=>1.8+(p-score.values.fillPrice)*d.priceScale;
 const farTexture=canvasTex(128,128,(c,W,H)=>{c.fillStyle='#223b4a';c.fillRect(0,0,W,H);c.strokeStyle='#6f8b8d';c.lineWidth=2;c.strokeRect(7,7,W-14,H-14);canvasText(c,'1',48,91,75,'#8ba4a7',600)});
 const farUnit=new T.MeshPhysicalMaterial({map:farTexture,color:0x607080,metalness:.45,roughness:.46});
 const rows=[],labels=[];
 // Each cell is one available unit at an explicit price. Depth stacks are size.
 for(let i=0;i<d.levels.length;i++){
  const r=d.levels[i],y=level(r.price),g=group(market,0,y,-i*d.priceDepth),near=r.price>=100.03&&r.price<=100.06;
  box(g,8.2,.09,4.5,rowMetal,0,-.13,-1.5,.06);
  box(g,8.2,.025,.06,mat(near?0x6b9cab:0x284566,.45,.35,.07),0,-.08,.77,.10);
  text(g,r.price.toFixed(2),1.45,.30,-3.05,.23,.86,near?'#deebee':'#405b70');
  const units=[];for(let j=0;j<r.quantity;j++){
   const u=group(g,.35+(j%4)*.86,.26,-Math.floor(j/4)*.9),body=box(u,.72,.52,.70,near?etched:farUnit,0,0,0,.09);
   if(near){box(u,.64,.44,.015,m.black,0,0,.36,.05);text(u,'1',.35,.30,0,0,.377,'#d1e8e9');
 for(let e=0;e<7;e++)box(u,.02,.015,.16,m.steel,-.24+e*.08,.27,-.05);
 box(u,.70,.018,.02,m.cyan,0,-.23,.37);}
   if(near)for(const x of [-.28,.28])cyl(u,.018,.012,m.steel,x,.17,.38).rotation.x=Math.PI/2;
   units.push(u);
  }
  rows.push({g,units,price:r.price,y,z:-i*d.priceDepth});labels.push(g);
 }
 for(const x of [-4.25,4.25]){
  rod(market,[x,-1.7,-3.8],[x,11.1,-3.8],.035,m.steel);
  for(let i=0;i<18;i++)line(market,[[x-.10,-1.2+i*.5,-3.8],[x+.10,-1.2+i*.5,-3.8]],C.steel,.55);
 }
 
 for(const r of rows){const near=r.price<=100.06;if(near){r.units.forEach(u=>u.traverse(o=>o.layers.set(1)));for(let j=0;j<5;j++)box(r.g,.035,.018,.40,m.steel,-3.7+j*.16,-.06,-.8);} }
 const limitY=level(score.values.limit),boundary=group(market,0,limitY,-2*d.priceDepth);
 box(boundary,8.6,.05,.05,m.gold,0,.04,1.05,.05);
 const limitSheet=new T.Mesh(new T.PlaneGeometry(8.6,4.6),new T.MeshBasicMaterial({color:C.gold,transparent:true,opacity:.045,side:T.DoubleSide,depthWrite:false}));limitSheet.rotation.x=-Math.PI/2;limitSheet.position.set(0,.04,-1.2);boundary.add(limitSheet);
 const existingLimitLabel=text(boundary,'LIMIT 100.05',2.5,.29,1.0,.39,1.1,'#f2d48b');
 let journey=null;
 if(d.limitJourney){
  const q=d.limitJourney,g=group(hero),curve=new T.CatmullRomCurve3(q.curvePoints.map(p=>new T.Vector3(...p))),points=curve.getPoints(100),geometry=new T.BufferGeometry().setFromPoints(points),material=new T.LineBasicMaterial({color:C.gold,transparent:true,opacity:0,depthWrite:false});
  const path=new T.Line(geometry,material);g.add(path);
  const marker=new T.Mesh(new T.SphereGeometry(.055,16,12),new T.MeshBasicMaterial({color:0xffdc80,transparent:true,opacity:0}));g.add(marker);
  const a=q.availableLabel,l=q.limitLabel,available=text(g,q.nextAvailablePrice.toFixed(2),a.width,a.height,...a.position,'#d5eaf1'),limit=text(g,'LIMIT '+score.values.limit.toFixed(2),l.width,l.height,...l.position,'#efd188');
  const nextY=level(q.nextAvailablePrice),bracket=line(g,[[-.35,limitY,-.8],[-.55,limitY,-.8],[-.55,nextY,-.8],[-.35,nextY,-.8]],C.gold,.85);
  g.traverse(o=>o.layers.set(1));g.visible=false;journey={g,curve,geometry,material,marker,available,limit,bracket};
 }
 // The three empty slots are the three requested units, never market liquidity.
 const order=group(hero,0,.80,5),slots=[],fills=[];
 box(order,4.8,.12,2.2,m.black,0,-.45,0,.12);text(order,'O-01 · BUY 3',3.5,.25,0,-.30,1.12,'#e8cd8e').rotation.x=-Math.PI/2;
 for(let i=0;i<3;i++){
  const g=group(order,(i-1)*1.23,0,0);const edges=new T.LineSegments(new T.EdgesGeometry(new T.BoxGeometry(1.0,.75,.90)),new T.LineBasicMaterial({color:C.gold}));g.add(edges);slots.push(g);
  const fill=box(g,.92,.67,.82,m.gold.clone(),0,0,0,.1);fill.userData.label=text(fill,'1',.48,.42,0,0,.42,'#332d21');fill.userData.executionText=text(hero,`EXEC 0${i+1} · 1 @ 100.03`,4.40,.30,0,0,0,'#c0dfe5');fill.userData.executionText.visible=false;fills.push(fill);
 }
 const reportFills=group(hero);
 const status=text(hero,'FILLED 2 · REMAINING 1',3.8,.24,0,-.15,6.0,'#e7d9ab');
 const waiting=text(hero,'1 REMAINS',1.6,.27,1.1,1.65,5.0,'#efdba2');
 const report=group(hero,0,3.6,4),reportBody=group(report),reportParts=[];
 box(reportBody,5.6,4.35,.20,mat(0x7a693b,.7,.32),0,0,0,.10);box(reportBody,5.45,4.20,.22,m.black,0,0,.03,.08);
 text(reportBody,'EXECUTION REPORT',4.8,.37,0,1.68,.17,'#b9d8e0');text(reportBody,'R-01 / O-01',2.7,.25,0,1.18,.17,'#80a7bc');
 for(let i=0;i<2;i++){
  const g=group(report),plate=box(g,4.85,.62,.08,m.blue);text(g,`EXEC 0${i+1} · 1 @ 100.03`,4.40,.30,0,0,.05,'#c0dfe5');g.userData.plate=plate;reportParts.push(g);
 }
 text(reportBody,'REQUESTED 3',3.1,.26,-.8,-.96,.17,'#a2bdcd');text(reportBody,'FILLED 2',2.5,.26,-1.1,-1.37,.17,'#e9cc88');text(reportBody,'REMAINING 1',3.2,.26,-.75,-1.78,.17,'#d4e5e9');
 const terminal=group(root,-10,3.8,-23),screen=group(terminal);
 box(screen,8.7,5.3,.42,m.metal,0,0,-.13,.12);box(screen,8.4,5.03,.08,m.black,0,0,.11,.09);
 for(let i=0;i<36;i++)box(screen,.065,.035,.23,m.black,-3.8+i*.215,-2.36,-.03);
 box(terminal,.52,1.9,.34,m.metal,0,-3.15,-.18);box(terminal,3.0,.15,1.9,m.black,0,-4.1,-.25,.15);
 box(root,13,.25,6.2,mat(0x1c2f46,.4,.50),-10,-.51,-22.3,.12);
 wire(root,[[-7.4,1.4,-23.3],[-5.2,.2,-23.6],[-4.1,-.55,-21],[-3.8,-.55,-17]],0x467a9b,.035);
 const face=dynamicFace(screen,8.15,4.8,(c,W,H,s)=>{
  c.fillStyle='#071425';c.fillRect(0,0,W,H);canvasText(c,'TRADIENT',55,85,48,'#d5e7ec',700);canvasText(c,'EXECUTION LOG',W*.55,82,31,'#7b9cb0',600);
  rounded(c,55,150,W-110,120,12,'#14283d','#47657a');canvasText(c,'ORDER O-01 · BUY 3 · LIMIT 100.05',85,226,40,'#e7cb8e',650);
  [['REQUESTED','3'],['FILLED',s.received?'2':'0'],['REMAINING',s.received?'1':'3']].forEach(([k,v],i)=>{const x=70+i*375;canvasText(c,k,x,375,31,'#84a9bd',650);canvasText(c,v,x,500,113,i===1?'#e8c779':'#cfdee6',700);});
  c.fillStyle='#27425b';c.fillRect(55,550,W-110,3);canvasText(c,s.received?'REPORT R-01 RECEIVED':'AWAITING EXECUTION REPORT',65,639,37,s.received?'#95d1be':'#7896a8',650);
  canvasText(c,s.received?'EXEC 01 + EXEC 02 · 2 UNITS @ 100.03':'CONNECTION ACTIVE',65,722,31,'#789bad',550);
 },1200,800);face.face.position.z=.17;
 const key=new T.PointLight(C.gold,130,45,2);key.position.set(-4,7,7);key.layers.enable(1);root.add(key);const fillLight=new T.PointLight(C.cyan,80,40,2);fillLight.position.set(7,5,-4);fillLight.layers.enable(1);root.add(fillLight);
 const mainRows=rows.filter(r=>r.price>=100.03&&r.price<=100.06);order.traverse(o=>o.layers.set(1));report.traverse(o=>o.layers.set(1));status.layers.set(1);waiting.layers.set(1);
 const depthFocus={active:true,hero,skies,distance:20,aperture:d.focusAperture,maxblur:.015};
 return {root,depthFocus,environmentIntensity:.20,fogDensity:.006,camera:f=>{const j=limitJourneyState(score,f);return j?.active?d.limitJourney.camera:d.camera},update(s,camera){
  const a=s.p('book-arrive'),w=s.p('withdraw'),f1=s.p('fill-one'),f2=s.p('fill-two'),forming=s.p('report-form'),returning=s.p('report-return');
  order.position.z=7-2*a;order.visible=forming<1;status.visible=s.done('fill-two')&&forming<.05;waiting.visible=s.p('wait')>.2&&forming<.05;
  rows.forEach(r=>r.units.forEach((u,j)=>{u.position.set(.35+(j%4)*.86,.26,-Math.floor(j/4)*.9);u.visible=true;
   if(r.price>100.06&&j===r.units.length-1){const cycle=((s.frame-d.context.liquidityUpdates.firstFrame+r.price*d.context.liquidityUpdates.periodFrames)%d.context.liquidityUpdates.periodFrames)/d.context.liquidityUpdates.periodFrames;const q=cycle<.23?ease(cycle/.23):cycle>.73?1-ease((cycle-.73)/.27):1;u.position.z-=q*6;u.position.y+=.18*Math.sin(q*Math.PI);u.visible=q<.97;}
   if(r.price===100.04){u.position.x+=w*9;u.position.z-=w*6;u.rotation.y=-w*.75;u.visible=w<1;departureLight.position.set(u.position.x,r.y+u.position.y,r.z+u.position.z+.6);departureLight.intensity=55*Math.sin(w*Math.PI);}
   if(r.price===100.03){const p=j===0?f1:f2;const origin=new T.Vector3(.35+j*.86,r.y+.26,r.z),end=new T.Vector3((j-1)*1.23,.80,order.position.z);const pt=origin.lerp(end,p);pt.y+=Math.sin(p*Math.PI)*1.1;u.position.set(pt.x,pt.y-r.y,pt.z-r.z);u.rotation.y=Math.sin(p*Math.PI)*.40;u.visible=p<1;}
  }));fills[0].visible=s.done('fill-one');fills[1].visible=s.done('fill-two');fills[2].visible=false;
  const peel=ease((s.frame-d.reportAisle.firstFrame)/(d.reportAisle.endFrame-d.reportAisle.firstFrame));
  rows.forEach((row,i)=>{row.g.position.x=0;row.g.rotation.y=0;});boundary.position.x=0;
 // Camera and report travel above the near price edge; the book stays physically intact.
 market.position.y=0;market.scale.setScalar(1);
  market.visible=true;market.position.z=0;
  limitSheet.material.opacity=.045+.07*s.p('above-limit');
  report.visible=forming>0&&returning<.99;const flightState=reportFlight(score,s.frame);report.position.set(...flightState.report);report.rotation.y=-.08+.18*Math.sin(returning*Math.PI);report.scale.setScalar((.8+.2*forming)*(1-.40*returning));reportBody.scale.setScalar(Math.max(.001,forming));
  reportParts.forEach((g,i)=>{
  const p=ease(forming);const start=new T.Vector3((i-1)*1.23,.80,5),end=new T.Vector3(0,3.6+.45-i*.75,4.20);
  const world=start.lerp(end,p);world.y+=Math.sin(p*Math.PI)*.45;report.updateWorldMatrix(true,true);g.position.copy(report.worldToLocal(world));
  if(forming===1){g.position.set(0,.45-i*.75,.20);g.rotation.y=0;g.scale.setScalar(1);}g.visible=forming===1;g.userData.plate.visible=true;
 });fills.forEach((x,i)=>{const p=ease(forming);x.visible=i<2&&s.done(i===0?'fill-one':'fill-two')&&forming<1;
   report.updateWorldMatrix(true,true);order.updateWorldMatrix(true,true);
   const target=report.localToWorld(new T.Vector3(0,.45-i*.75,.20)),world=new T.Vector3((i-1)*1.23,.80,order.position.z).lerp(target,p);world.y+=Math.sin(p*Math.PI)*.45;
   x.position.copy(x.parent.worldToLocal(world));x.scale.set(1+(4.85/.92-1)*p,1+(.62/.67-1)*p,1+(.08/.82-1)*p);x.rotation.y=report.rotation.y*p;x.material.color.set(C.gold).lerp(new T.Color(C.blue),p);x.material.emissiveIntensity=.18*(1-p);x.userData.label.visible=forming<.25;
   x.updateWorldMatrix(true,true);const label=x.userData.executionText;label.visible=i<2&&forming>.55&&forming<1;label.position.copy(x.localToWorld(new T.Vector3(0,0,.425)));label.quaternion.copy(x.getWorldQuaternion(new T.Quaternion()));label.scale.set(.19+.81*p,1,1);
  });

  face.draw({received:s.reported},String(s.reported));terminal.visible=returning>0;
  key.position.set(-4-10*returning,7,7-20*returning);key.intensity=170+returning*80;
 const flight=f2>0?f2:f1;activeLight.position.set(-.6,1.4+Math.sin(flight*Math.PI),2+3*flight);activeLight.intensity=35*Math.sin(flight*Math.PI)+12*s.filled;
 if(forming>0){activeLight.position.copy(report.position);activeLight.position.x-=3;activeLight.position.y+=3;activeLight.position.z+=2;activeLight.intensity=20*(1-returning);}
  if(returning>0){camera.position.set(...flightState.eye);camera.lookAt(...flightState.target);camera.fov=flightState.fov;camera.updateProjectionMatrix();}
  depthFocus.active=true;depthFocus.aperture=d.focusAperture*(1-.70*returning);depthFocus.distance=camera.position.distanceTo(new T.Vector3(-10*returning,3.6,forming>0?4-27*returning:0));
  if(journey){const j=limitJourneyState(score,s.frame);journey.g.visible=j.active;waiting.visible=waiting.visible&&!j.active;existingLimitLabel.visible=!j.active;
   journey.geometry.setDrawRange(0,Math.max(2,Math.ceil(j.progress*101)));journey.material.opacity=.75*j.opacity;
   journey.marker.position.copy(journey.curve.getPoint(j.progress));journey.marker.material.opacity=j.opacity;journey.marker.scale.setScalar(.7+.3*Math.sin(j.progress*Math.PI));
   for(const x of [journey.available,journey.limit,journey.bracket]){x.visible=j.labels>.02;x.material.transparent=true;x.material.opacity=j.labels;}
   if(j.active){activeLight.position.set(1.1,3.4,1.3);activeLight.intensity=24+36*j.labels;depthFocus.distance=camera.position.distanceTo(new T.Vector3(1.0,3.1,-.6));depthFocus.aperture=d.focusAperture*.65;}
  }
 }};
}
