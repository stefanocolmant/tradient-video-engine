// @ts-nocheck
import {T,C,group,box,rod,line,mat,text,materials,environment,dynamicFace,canvasText,rounded,canvasTex,grid,bars,ticket,wire,rand} from './objects';
import {dataFieldPose} from './data-field.mjs';
import {ease} from './runtime.mjs';
import {inspectionLens} from '../data-shots';
function quoteAtlas(){return canvasTex(2048,2048,(c,W,H)=>{for(let i=0;i<64;i++){const x=i%8*256,y=Math.floor(i/8)*256;c.fillStyle=i%5?'#152b43':'#1a3649';c.fillRect(x+3,y+3,250,250);c.strokeStyle='#466378';c.lineWidth=2;c.strokeRect(x+8,y+8,240,240);canvasText(c,'09:'+String(31+Math.floor(i/60)).padStart(2,'0')+':'+String(i%60).padStart(2,'0'),x+21,y+65,26,'#7194aa',500);canvasText(c,(99.91+i%9*.01).toFixed(2),x+21,y+142,52,'#d7e5eb',650);canvasText(c,'QUOTE  '+String(i+1).padStart(3,'0'),x+21,y+218,23,'#b89e6f',550);}})}
function field(parent,settings){const {rows,cols,spacing,bendStart,bendRadius,speed}=settings,n=rows*cols,atlas=quoteAtlas(),g=new T.PlaneGeometry(1.22,1.22);const uv=new Float32Array(n*2);for(let i=0;i<n;i++){uv[i*2]=(i%64%8)/8;uv[i*2+1]=Math.floor(i%64/8)/8}g.setAttribute('tileUv',new T.InstancedBufferAttribute(uv,2));const m=new T.MeshStandardMaterial({map:atlas,emissiveMap:atlas,emissive:0xb2c6d5,emissiveIntensity:.38,metalness:.28,roughness:.60});m.onBeforeCompile=s=>{s.vertexShader='attribute vec2 tileUv;\n'+s.vertexShader;s.vertexShader=s.vertexShader.replace('#include <uv_vertex>','#include <uv_vertex>\nvMapUv=vMapUv/8.0+tileUv;vEmissiveMapUv=vMapUv;');};m.customProgramCacheKey=()=> 'market-record-atlas-v1';const tiles=new T.InstancedMesh(g,m,n),body=new T.InstancedMesh(new T.BoxGeometry(1.25,.12,1.25),mat(0x0b1c32,.6,.4),n);parent.add(tiles,body);const o=new T.Object3D();return{update(t){for(let i=0;i<n;i++){const {x,y,z,angle}=dataFieldPose(i,t,settings);o.position.set(x,y,z);o.rotation.set(angle,0,0);o.updateMatrix();body.setMatrixAt(i,o.matrix);o.position.y+=.066*Math.cos(angle);o.position.z+=.066*Math.sin(angle);o.rotation.x=angle-Math.PI/2;o.updateMatrix();tiles.setMatrixAt(i,o.matrix)}body.instanceMatrix.needsUpdate=tiles.instanceMatrix.needsUpdate=true;}}}
export function buildConfiguration(score){const root=environment(),m=materials();
 const chart=bars(root,{data:score.marketData,width:5.5,height:3.0,x:0,y:3,z:.1,depth:.18});grid(root,6,4,0,3,0,0x355779,8,12);rod(root,[-3,1,0],[-3,5.2,0],.014,m.steel);rod(root,[-3,1,0],[3.4,1,0],.014,m.steel);
 for(let j=0;j<7;j++)text(root,(99.90+j*.03).toFixed(2),.68,.17,-3.35,chart.level(99.90+j*.03),.05,'#8ba9bd');
 const threshold=line(root,[[-3.0,chart.level(100),.27],[3.1,chart.level(100),.27]],C.gold,.95);text(root,'CONDITION · PRICE > 100.00',4.4,.27,0,5.4,.1,'#e9ce94');
 const qty=group(root,.5,1.8,1);const units=[];for(let i=0;i<3;i++){const g=group(qty);box(g,.55,.55,.55,m.cyan);text(g,'1',.30,.28,0,0,.29,'#edf4f1');units.push(g)}text(qty,'SIZE 3',1.9,.28,0,-.70,.2,'#a8dbe1');
 const lim=group(root);const plane=new T.Mesh(new T.PlaneGeometry(6.6,3.6),new T.MeshBasicMaterial({color:C.gold,transparent:true,opacity:.08,side:T.DoubleSide,depthWrite:false}));plane.rotation.x=-Math.PI/2;plane.position.y=chart.level(100.05);lim.add(plane);wire(lim,[[-3.3,chart.level(100.05),0],[3.3,chart.level(100.05),0]],C.gold,.018);text(lim,'LIMIT 100.05',2.6,.28,.4,chart.level(100.05)+.35,.25,'#f1d19a');
 text(root,'STORED CONFIGURATION',4.7,.28,0,.35,0,'#93a9bf');
 return{root,update(s){const a=s.p('condition-detail'),b=s.p('size-detail'),c=s.p('limit-detail');chart.update(1,a*.3);units.forEach((g,i)=>{g.position.set((i-1)*(.12+b*.58),.1+b*.40,1*b);g.scale.setScalar(.6+b*.4)});qty.scale.setScalar(.05+.95*b);lim.visible=c>0;lim.scale.x=Math.max(.001,c);threshold.material.opacity=.35+.65*a;}};
}
export function buildData(score){const root=environment(),m=materials(),f=field(root,score.dataField);
 const sample=group(root,0,3.3,.15);box(sample,5.5,5.5,.14,m.blue);const d=dynamicFace(sample,5.23,5.25,(c,W,H,s)=>{
  c.fillStyle='#0b1a2b';c.fillRect(0,0,W,H);canvasText(c,'MARKET SAMPLE',55,80,43,'#88a8bd',650);canvasText(c,s.pass?'09:31:10.240':'09:31:09.880',55,143,35,'#687f98');
  canvasText(c,s.pass?'100.01':s.fail?'99.99':'99.98',220,290,64,s.pass?'#e8ca83':'#d9e7ec',700);canvasText(c,'PRICE',55,345,27,'#6f92a7');
  c.strokeStyle='#2a4960';c.lineWidth=2;for(let i=0;i<5;i++){c.beginPath();c.moveTo(60,430+i*67);c.lineTo(930,430+i*67);c.stroke();}
  c.strokeStyle='#78b7c7';c.lineWidth=7;c.beginPath();[[60,700],[185,620],[315,655],[450,565],[585,590],[710,510],[850,s.pass?425:530]].forEach(([x,y],i)=>i?c.lineTo(x,y):c.moveTo(x,y));c.stroke();c.setLineDash([18,10]);c.strokeStyle='#dfc477';c.lineWidth=4;c.beginPath();c.moveTo(60,476);c.lineTo(940,476);c.stroke();c.setLineDash([]);canvasText(c,'100.00 THRESHOLD',590,462,28,'#e4c986');
  rounded(c,55,815,890,110,12,s.pass?'#253c35':'#1a2b3c','#436477');canvasText(c,s.pass?'CONDITION MET':'CONDITION NOT MET',86,888,44,s.pass?'#d2e7b8':'#a9c0d0',650);
 },1000,1000);d.face.position.z=.1;sample.userData={tx:d.tx,face:d.face};d.draw({pass:false,fail:false},'initial');
 const lens=inspectionLens(root,sample);lens.scale.setScalar(.55);lens.position.set(-.9,3.9,.65);
 const outgoing=group(root,3.7,1.8,.8);box(outgoing,2.2,1.35,.08,mat(0x0b1c31,.35,.7));for(const [a,b]of [[[-1.1,-.67,0],[1.1,-.67,0]],[[-1.1,.67,0],[1.1,.67,0]],[[-1.1,-.67,0],[-1.1,.67,0]],[[1.1,-.67,0],[1.1,.67,0]]])line(outgoing,a.map? [a,b]:[],C.steel,.6);text(outgoing,'OUTGOING',1.8,.20,0,1.0,0,'#90a8b9');const zero=text(outgoing,'NO ORDER',1.8,.30,0,0,.08,'#c3d2dd');
 const history=group(root,-4.3,1.6,-.3);text(history,'HISTORY',1.6,.22,0,1.4,.1,'#7795ad');const his=[];for(let i=0;i<3;i++){const g=group(history,0,.6-i*.43,0);box(g,1.9,.34,.12,m.blue);text(g,['99.96','99.98','99.99'][i],1.5,.20,0,0,.07);his.push(g);}
 const rejected=[];for(let i=0;i<3;i++){const g=group(root);box(g,1.6,.42,.10,m.blue);text(g,['99.96','99.98','99.99'][i],1.3,.24,0,0,.06,'#a8bfce');rejected.push(g)}
 const instr=ticket(root,{width:4.1,height:2.6});instr.root.position.set(0,2.6,1);const parts=[];for(let i=0;i<3;i++){const g=group(root,-3+i*3,4.3,.8);box(g,2.35,.66,.12,m.blue);text(g,['CONDITION MET','BUY 3 UNITS','LIMIT 100.05'][i],2.0,.26,0,0,.08,'#e6d2a0');parts.push(g);}
 const leaders=[];for(let i=0;i<3;i++)leaders.push(wire(root,[[-3+i*3,4.0,.7],[-3+i*3,3.8,.7],[0,2.8,.8]],C.gold,.012).o);
 const light=new T.PointLight(C.gold,0,8);light.position.set(0,3,2);root.add(light);
 return{root,update(s,cam){f.update(s.stage('data-family').seconds*(.6+.4*s.p('data-arrive')));const inspect=s.p('inspect'),fail=s.p('fail'),pass=s.p('passes'),checks=s.p('remaining-checks'),build=s.p('build');
  const familyIn=Math.min(1,Math.max(0,s.stage('data-family').seconds/2));sample.scale.setScalar(.06+.73*familyIn-.57*checks);sample.position.set(-.5*checks,3.0-.50*checks,-.7+familyIn*.85);sample.visible=build<.98;
  const ls=s.stage('lens'),win=score.staging.lens;if(!Number.isFinite(win.enterFrames)||!Number.isFinite(win.exitFrames))throw Error('Lens entry/exit duration required');const enter=ease((s.frame-ls.firstFrame)/win.enterFrames),leave=ease((s.frame-(ls.endFrame-win.exitFrames))/win.exitFrames);lens.visible=ls.active;lens.position.set(-.72-.03*inspect-5.5*(1-enter)-5.5*leave,3.92-3*(1-enter)-3*leave,.65);lens.rotation.z=-.30*(1-enter)+.30*leave;d.draw({pass:s.at('passes'),fail:fail>.3},`${s.at('passes')}:${fail>.3}`);lens.userData.updateOptics(cam.position);
  outgoing.visible=s.stage('outgoing').active&&build<.9;outgoing.position.x=3.1;outgoing.scale.setScalar(.75);zero.visible=build<.6;zero.material.opacity=.4+.6*s.p('no-order');
  history.visible=s.stage('history').active&&checks<.5;
  rejected.forEach((g,i)=>{const p=i===2?fail:Math.max(0,Math.min(1,s.p('ignore-updates')*1.7-i*.7));g.visible=p>0&&p<1&&checks<.5;g.position.set(-.6-3.7*p,2.9-(.7+i*.43)*p,.35-.4*p);g.scale.setScalar(.6+.4*p)});
 his.forEach((g,i)=>{g.position.y=.6-i*.43-(.1*s.p('ignore-updates'));});
  // Qualification stays above the instruction. Quantity and limit occupy separate rows.
  const land=build;const targets=[[0,4.55,.9],[0,3.03,1.12],[0,2.40,1.12]];
  parts.forEach((g,i)=>{g.visible=checks>.01&&(i===0||!s.done('build'));const end=targets[i];g.position.set((-2.4+i*2.4)*(1-land)+end[0]*land,4.35*(1-land)+end[1]*land,.7+.65*Math.min(1,land*6));g.scale.setScalar(1-.12*land);});leaders.forEach(o=>o.visible=checks>.01&&build<.01);
  instr.draw({title:s.done('build')?'ORDER O-01':'',status:s.done('build')?'FORMED':'ASSEMBLING',fields:s.done('build')},String(s.done('build')));instr.root.visible=build>0;instr.root.scale.setScalar(1);instr.root.position.y=2.7;light.intensity=8*pass*(1-build);
 }};
}
