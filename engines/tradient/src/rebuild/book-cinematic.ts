// @ts-nocheck
// One continuous coordinate system from the price ladder to the execution report.
import {T,C,group,box,cyl,rod,line,mat,text,materials,environment,wire,dynamicFace,canvasText,rounded} from './objects';
import {ease} from './runtime.mjs';
export function buildCinematicExecution(score){
 const d=score.visualDirection?.execution;if(!d?.camera||!Array.isArray(d.levels)||!d.priceScale||!d.reportAisle)throw Error('Explicit execution scene direction required');
 if(d.levels.some((r,i)=>r.price<score.values.fillPrice||!Number.isInteger(r.quantity)||r.quantity<0||(i&&r.price<=d.levels[i-1].price)))throw Error('Ask levels must be sorted and start at the best available price');
 for(const [price,quantity] of [[100.03,2],[100.04,1],[100.05,0],[100.06,4]])if(d.levels.find(r=>r.price===price)?.quantity!==quantity)throw Error('Liquidity choreography requires calibrated quantity at '+price);
 const root=environment({floor:true,warm:true}),m=materials(),hero=group(root),market=group(hero);
 const skies=root.children.filter(o=>o.isMesh&&o.material?.side===T.BackSide);skies.forEach(o=>o.layers.set(2));root.children.filter(o=>o.isLight).forEach(o=>o.layers.enable(1));
 const level=p=>1.8+(p-score.values.fillPrice)*d.priceScale;
 const rows=[],labels=[];
 // Each cell is one available unit at an explicit price. Depth stacks are size.
 for(let i=0;i<d.levels.length;i++){
  const r=d.levels[i],y=level(r.price),g=group(market,0,y,0),near=r.price>=100.03&&r.price<=100.06;
  box(g,8.2,.09,4.5,mat(0x15243b,.52,.42),0,-.13,-1.5,.06);
  box(g,8.2,.025,.06,mat(near?0x6b9cab:0x284566,.45,.35,.07),0,-.08,.77,.10);
  text(g,r.price.toFixed(2),1.45,.30,-3.05,.23,.86,near?'#deebee':'#6f94ac');
  const units=[];for(let j=0;j<r.quantity;j++){
   const u=group(g,.35+(j%4)*.86,.26,-Math.floor(j/4)*.9),body=box(u,.72,.52,.70,mat(near?0x64a6b8:0x234870,.55,.30,.03),0,0,0,.09);
   box(u,.64,.44,.015,m.black,0,0,.36,.05);text(u,'1',.35,.30,0,0,.377,near?'#c9e7eb':'#638ca6');
   for(const x of [-.28,.28])box(u,.025,.025,.015,m.steel,x,.17,.38,.1);
   units.push(u);
  }
  rows.push({g,units,price:r.price,y});labels.push(g);
 }
 for(const x of [-4.25,4.25]){
  rod(market,[x,-1.7,-3.8],[x,11.1,-3.8],.035,m.steel);
  for(let i=0;i<18;i++)line(market,[[x-.10,-1.2+i*.5,-3.8],[x+.10,-1.2+i*.5,-3.8]],C.steel,.55);
 }
 text(market,'AVAILABLE QUANTITY',5.6,.36,0,11.4,-1.8,'#9dbbcf');
 const limitY=level(score.values.limit),boundary=group(market,0,limitY,0);
 box(boundary,8.6,.05,.05,m.gold,0,.04,1.05,.05);
 const limitSheet=new T.Mesh(new T.PlaneGeometry(8.6,4.6),new T.MeshBasicMaterial({color:C.gold,transparent:true,opacity:.045,side:T.DoubleSide,depthWrite:false}));limitSheet.rotation.x=-Math.PI/2;limitSheet.position.set(0,.04,-1.2);boundary.add(limitSheet);
 text(boundary,'LIMIT 100.05',2.5,.29,1.0,.39,1.1,'#f2d48b');
 // The three empty slots are the three requested units, never market liquidity.
 const order=group(hero,0,.80,5),slots=[],fills=[];
 box(order,4.8,.12,2.2,m.black,0,-.45,0,.12);text(order,'O-01 · BUY 3',3.5,.34,0,-1.1,1.24,'#e8cd8e');
 for(let i=0;i<3;i++){
  const g=group(order,(i-1)*1.23,0,0);const edges=new T.LineSegments(new T.EdgesGeometry(new T.BoxGeometry(1.0,.75,.90)),new T.LineBasicMaterial({color:C.gold}));g.add(edges);slots.push(g);
  const fill=box(g,.92,.67,.82,m.gold,0,0,0,.1);text(fill,'1',.48,.42,0,0,.42,'#332d21');fills.push(fill);
 }
 const status=text(hero,'FILLED 2 · REMAINING 1',5.7,.37,0,-.98,6.3,'#e7d9ab');
 const waiting=text(hero,'1 REMAINS',2.3,.32,1.3,1.80,6.1,'#efdba2');
 const report=group(hero,0,3.6,4),reportBody=group(report),reportParts=[];
 box(reportBody,5.6,4.35,.20,mat(0x7a693b,.7,.32),0,0,0,.10);box(reportBody,5.45,4.20,.22,m.black,0,0,.03,.08);
 text(reportBody,'EXECUTION REPORT',4.8,.37,0,1.68,.17,'#b9d8e0');text(reportBody,'R-01 / O-01',2.7,.25,0,1.18,.17,'#80a7bc');
 for(let i=0;i<2;i++){
  const g=group(report),plate=box(g,4.85,.62,.08,m.blue);text(g,`EXEC 0${i+1} · 1 @ 100.03`,4.40,.30,0,0,.05,'#c0dfe5');reportParts.push(g);
 }
 text(reportBody,'REQUESTED 3',3.1,.30,-.8,-.73,.17,'#a2bdcd');text(reportBody,'FILLED 2',2.5,.30,-1.1,-1.2,.17,'#e9cc88');text(reportBody,'REMAINING 1',3.2,.30,-.75,-1.67,.17,'#d4e5e9');
 const terminal=group(root,0,3.8,-23),screen=group(terminal);
 box(screen,8.7,5.3,.42,m.metal,0,0,-.13,.12);box(screen,8.4,5.03,.08,m.black,0,0,.11,.09);
 for(let i=0;i<36;i++)box(screen,.065,.035,.23,m.black,-3.8+i*.215,-2.36,-.03);
 box(terminal,.52,1.9,.34,m.metal,0,-3.15,-.18);box(terminal,3.0,.15,1.9,m.black,0,-4.1,-.25,.15);
 box(root,13,.25,6.2,mat(0x1c2f46,.4,.50),0,-.51,-22.3,.12);
 wire(root,[[2.6,1.4,-23.3],[4.8,.2,-23.6],[5.9,-.55,-21],[6.2,-.55,-17]],0x467a9b,.035);
 const face=dynamicFace(screen,8.15,4.8,(c,W,H,s)=>{
  c.fillStyle='#071425';c.fillRect(0,0,W,H);canvasText(c,'TRADIENT',55,85,48,'#d5e7ec',700);canvasText(c,'EXECUTION LOG',W*.55,82,31,'#7b9cb0',600);
  rounded(c,55,150,W-110,120,12,'#14283d','#47657a');canvasText(c,'ORDER O-01 · BUY 3 · LIMIT 100.05',85,226,40,'#e7cb8e',650);
  [['REQUESTED','3'],['FILLED',s.received?'2':'0'],['REMAINING',s.received?'1':'3']].forEach(([k,v],i)=>{const x=70+i*375;canvasText(c,k,x,375,31,'#84a9bd',650);canvasText(c,v,x,500,113,i===1?'#e8c779':'#cfdee6',700);});
  c.fillStyle='#27425b';c.fillRect(55,550,W-110,3);canvasText(c,s.received?'REPORT R-01 RECEIVED':'AWAITING EXECUTION REPORT',65,639,37,s.received?'#95d1be':'#7896a8',650);
  canvasText(c,s.received?'EXEC 01 + EXEC 02 · 2 UNITS @ 100.03':'CONNECTION ACTIVE',65,722,31,'#789bad',550);
 },1200,800);face.face.position.z=.17;
 const key=new T.PointLight(C.gold,130,45,2);key.position.set(-4,7,7);key.layers.enable(1);root.add(key);const fillLight=new T.PointLight(C.cyan,80,40,2);fillLight.position.set(7,5,-4);fillLight.layers.enable(1);root.add(fillLight);
 const mainRows=rows.filter(r=>r.price>=100.03&&r.price<=100.06);market.traverse(o=>o.layers.set(1));order.traverse(o=>o.layers.set(1));report.traverse(o=>o.layers.set(1));status.layers.set(1);waiting.layers.set(1);
 const depthFocus={active:true,hero,skies,distance:20,aperture:.00008,maxblur:.009};
 return {root,depthFocus,environmentIntensity:.20,fogDensity:.006,camera:()=>d.camera,update(s,camera){
  const a=s.p('book-arrive'),w=s.p('withdraw'),f1=s.p('fill-one'),f2=s.p('fill-two'),forming=s.p('report-form'),returning=s.p('report-return');
  order.position.z=7-2*a;order.visible=forming<.85;status.visible=s.done('fill-two')&&forming<.05;waiting.visible=s.p('wait')>.2&&forming<.05;
  rows.forEach(r=>r.units.forEach((u,j)=>{u.position.set(.35+(j%4)*.86,.26,-Math.floor(j/4)*.9);u.visible=true;
   if(r.price===100.04){u.position.x+=w*9;u.position.z-=w*6;u.visible=w<1;}
   if(r.price===100.03){const p=j===0?f1:f2;const origin=new T.Vector3(.35+j*.86,r.y+.26,0),end=new T.Vector3((j-1)*1.23,.80,order.position.z);const pt=origin.lerp(end,p);pt.y+=Math.sin(p*Math.PI)*1.1;u.position.set(pt.x,pt.y-r.y,pt.z);u.rotation.y=Math.sin(p*Math.PI)*.40;u.visible=p<1;}
  }));fills[0].visible=s.done('fill-one');fills[1].visible=s.done('fill-two');fills[2].visible=false;
  const peel=ease((s.frame-d.reportAisle.firstFrame)/(d.reportAisle.endFrame-d.reportAisle.firstFrame));
  rows.forEach((row,i)=>{row.g.position.x=(i%2?1:-1)*(9+i*.14)*peel;row.g.rotation.y=(i%2?1:-1)*.10*peel;});boundary.position.x=-11.8*peel;
  market.visible=returning<.99;market.position.z=-returning*4;
  limitSheet.material.opacity=.045+.07*s.p('above-limit');
  report.visible=forming>0&&returning<.99;report.position.set(0,3.6,4-27*returning);report.rotation.y=-.08+.18*Math.sin(returning*Math.PI);report.scale.setScalar((.8+.2*forming)*(1-.40*returning));reportBody.scale.setScalar(Math.max(.001,forming));
  reportParts.forEach((g,i)=>{const p=ease(forming);g.position.set((i?1:-1)*2.4*(1-p),.45-i*.75+1.8*(1-p),.20+1.5*(1-p));g.rotation.y=(i?-.25:.25)*(1-p);g.scale.setScalar(.7+.3*p);});
  face.draw({received:s.reported},String(s.reported));terminal.visible=returning>0;
  key.position.set(-4,7,7-20*returning);key.intensity=130+returning*80;
  depthFocus.active=true;depthFocus.aperture=.00008*(1-.60*returning);depthFocus.distance=camera.position.distanceTo(new T.Vector3(0,3.6,forming>0?4-27*returning:0));
 }};
}
