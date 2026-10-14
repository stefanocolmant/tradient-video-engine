// @ts-nocheck
import {T,C,group,box,rod,line,mat,text,materials,environment,ticket,dynamicFace,canvasText,rounded,wire} from './objects';
export function buildBook(score){const root=environment(),m=materials();
 const y=p=>1.25+(p-100.03)*110;
 // Visible ladder, actual unit cells and a separate incoming order. Background depth carries the same price axis.
 gridBackground(root,m);
 for(let i=0;i<4;i++){const price=100.03+i*.01,Y=y(price);line(root,[[-3.3,Y,-.3],[3.3,Y,-.3]],i===2?C.gold:C.steel,i===2?.9:.4);text(root,price.toFixed(2),1.0,.28,-2.0,Y+.22,.15,i===2?'#ebc778':'#aec4d5');}
 text(root,'AVAILABLE QUANTITY',4.7,.30,.1,5.7,-.3,'#a8c2d4');
 const liquidity=[];for(let r=0;r<4;r++){const n=[2,1,0,4][r],row=[];for(let j=0;j<n;j++){const unit=box(root,.58,.46,.72,r===3?m.blue:m.cyan,-.6+j*.7,y(100.03+r*.01)+.27,.1,.08);text(unit,'1',.22,.22,0,0,.371,'#d9e8e9');row.push(unit)}liquidity.push(row);}
 const limit=group(root);const plane=new T.Mesh(new T.PlaneGeometry(6.8,4.5),new T.MeshBasicMaterial({color:C.gold,transparent:true,opacity:.075,side:T.DoubleSide,depthWrite:false}));plane.rotation.x=-Math.PI/2;plane.position.set(0,y(100.05),.4);limit.add(plane);wire(limit,[[-3.35,y(100.05),.2],[3.35,y(100.05),.2]],C.gold,.02);text(limit,'BUY LIMIT 100.05',3.4,.29,.25,y(100.05)+.35,.6,'#f0d49b');
 const order=group(root,0,.85,3.0);text(order,'O-01 · BUY 3',2.6,.30,0,-.67,.1,'#e5d19b');const fills=[];for(let i=0;i<3;i++){const g=group(order,(i-1)*.9,0,0);const wireframe=new T.LineSegments(new T.EdgesGeometry(new T.BoxGeometry(.72,.55,.82)),new T.LineBasicMaterial({color:C.gold}));g.add(wireframe);const body=box(g,.65,.48,.76,m.gold);fills.push(body);}
 const remaining=text(root,'1 REMAINS',2.5,.32,1.8,1.8,2.1,'#f1d7a6');
 text(root,'MATCH PRICE 100.03',3.5,.25,0,1.85,2.5,'#a9cbd3');
 const records=group(root,0,.45,4.6);const r1=text(records,'EXEC 01 · 1 @ 100.03',3.8,.24,0,.08,.1,'#9dd4d7'),r2=text(records,'EXEC 02 · 1 @ 100.03',3.8,.24,0,-.23,.1,'#9dd4d7');
 const pulse=new T.PointLight(C.gold,0,6);root.add(pulse);
 return{root,update(s){const a=s.p('book-arrive'),w=s.p('withdraw');order.position.z=4.5-1.5*a;liquidity[1][0].position.x=-.6+5*w;liquidity[1][0].visible=w<1;
  liquidity[0].forEach((u,i)=>{const p=s.p(i?'fill-two':'fill-one');const start=new T.Vector3(-.6+i*.7,1.52,.1),end=new T.Vector3((i-1)*.9,.85,order.position.z);u.position.copy(start.lerp(end,p));u.position.y+=Math.sin(Math.PI*p)*.6;u.visible=p<1;fills[i].visible=p>=1;});fills[2].visible=false;
  remaining.visible=s.p('wait')>.5;plane.material.opacity=.075+.06*s.p('above-limit');r1.visible=s.done('fill-one')&&s.p('wait')<.2;r2.visible=s.done('fill-two')&&s.p('wait')<.2;pulse.position.set(-.9,.95,order.position.z+.6);pulse.intensity=8*Math.sin(s.p('fill-two')*Math.PI);
 }};
}
function gridBackground(root,m){for(let i=0;i<19;i++){const y=.3+i*.38;line(root,[[-12,y,-6],[12,y,-6]],0x25425e,.24);for(let j=0;j<8;j++)box(root,.30+(i+j)%4*.18,.08,.10,m.blue,-6+j*1.7,y,-5.9);}for(let x=-12;x<=12;x+=2)line(root,[[x,0,-6],[x,8,-6]],0x1e344a,.25);}
export function buildReport(score){const root=environment({floor:false}),m=materials();gridBackground(root,m);
 const report=group(root);box(report,5.5,4.4,.15,m.blue);const display=dynamicFace(report,5.35,4.25,(c,W,H,s)=>{c.fillStyle='#0d1c2e';c.fillRect(0,0,W,H);canvasText(c,'EXECUTION REPORT',50,75,43,'#9cb7ca',700);canvasText(c,'R-01  /  ORDER O-01',50,135,29,'#6c8ca7',500);const a=[['REQUESTED','3'],['FILLED','2'],['REMAINING','1'],['FILL PRICE','100.03']];a.forEach(([k,v],i)=>{const y=230+i*118;c.strokeStyle='#2c4860';c.beginPath();c.moveTo(48,y+36);c.lineTo(W-50,y+36);c.stroke();canvasText(c,k,50,y,32,'#89a7bc',600);canvasText(c,v,W*.70,y,50,i===1?'#e7ca8d':'#d9e6ed',650)});canvasText(c,'PARTIAL FILL',50,760,37,'#c3ae7f',650);},1000,830);display.face.position.z=.09;display.draw({},'one');
 const sources=[];for(let i=0;i<2;i++){const g=group(root,-2.2+i*4.4,1.8,2);box(g,3.7,.75,.12,m.blue);text(g,`EXEC 0${i+1} · 1 @ 100.03`,3.35,.25,0,0,.09,'#b9d9df');sources.push(g)}
 const app=group(root,0,3.0,-1.0);box(app,7.0,4.8,.24,m.black);box(app,7.12,4.92,.12,m.metal,0,0,-.1);box(app,.38,1.5,.34,m.metal,0,-2.9,-.2);box(app,2.6,.1,1.2,m.black,0,-3.7,-.15);for(let i=0;i<30;i++)box(app,.035,.035,.12,m.black,-3.0+i*.20,-2.3,-.15);const records=dynamicFace(app,6.7,4.5,(c,W,H,s)=>{c.fillStyle='#0a1626';c.fillRect(0,0,W,H);canvasText(c,'TRADIENT / EXECUTION LOG',50,85,43,'#a6bbcd',700);canvasText(c,'ORDER O-01',50,182,39,'#dfc898',650);const rows=[['REQUESTED','3'],['FILLED',s.received?'2':'0'],['REMAINING',s.received?'1':'3']];rows.forEach(([k,v],i)=>{const y=300+i*137;canvasText(c,k,55,y,33,'#87a5ba');canvasText(c,v,W*.73,y,67,'#deebeb',700);c.strokeStyle='#20364b';c.beginPath();c.moveTo(50,y+34);c.lineTo(W-50,y+34);c.stroke()});canvasText(c,s.received?'REPORT R-01 RECEIVED':'AWAITING EXECUTION REPORT',50,800,34,s.received?'#88cdbd':'#697f98',600);},1200,900);records.face.position.z=.14;
 return{root,update(s){const p=s.p('report-form'),r=s.p('report-return');sources.forEach((g,i)=>{g.visible=p<.62;g.position.set(0,4.1-i*.95-.35*p,2-.9*p);g.scale.setScalar(1-.25*p)});report.visible=p>=.62&&r<.95;report.position.set(0,2.9,1.1-1.6*r);report.scale.setScalar((.3+.7*p)*(1-.76*r));app.visible=r>.01;app.scale.setScalar(.80+.20*r);records.draw({received:s.reported},String(s.reported));}};
}
