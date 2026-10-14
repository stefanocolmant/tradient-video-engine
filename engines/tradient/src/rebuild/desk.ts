// @ts-nocheck
import {T,C,group,box,cyl,rod,tube,mat,text,line,materials,environment,dynamicFace,canvasText,canvasTex,rounded,grid,bars,cursor} from './objects';
import {ease} from './runtime.mjs';
import {deskDisplayState,deskDisplayKey} from './desk-state.mjs';
import {patch,weather} from '../kit/realism/shade';
export function buildDesk(score){
 const root=environment(),m=materials(),craft=score.visualDirection?.craftVersion===6;
 if(craft){m.metal.color.set(0x687889);m.metal.roughness=.27;m.metal.metalness=.88;root.children.filter(o=>o.isLight).forEach(o=>o.intensity*=o.color?.getHex()===0x294be5?.20:.52);}
 const wood=new T.MeshPhysicalMaterial({color:0xffffff,roughness:.65,metalness:.12});patch(wood,weather({base:'#263247',vary:.12,scale:2,bump:.0006,bumpScale:.012,rough:[.50,.72]}));
 if(craft){wood.userData.patches=[];patch(wood,{key:'v6-walnut-grain',vertexPars:'varying vec3 woodPoint;',vertex:[{at:'worldpos_vertex',code:'woodPoint=(modelMatrix*vec4(transformed,1.)).xyz;'}],fragmentPars:'varying vec3 woodPoint;',fragment:[{at:'color_fragment',code:`float grain=sin(woodPoint.z*110.+sin(woodPoint.x*.40)*8.+sin(woodPoint.z*9.)*1.3);float pore=sin(woodPoint.z*370.+sin(woodPoint.x*1.5)*5.);diffuseColor.rgb*=mix(vec3(.055,.043,.031),vec3(.20,.135,.079),.48+.16*grain+.08*pore);`}]});wood.metalness=.03;wood.roughness=.50;wood.clearcoat=.22;}
 box(root,12,.32,6.4,wood,0,2.12,1.0,.10);box(root,11.5,.12,6.0,m.black,0,1.92,1);for(const x of [-5.2,5.2])for(const z of [-1.5,3.5]){box(root,.22,2,.22,m.metal,x,1,z);box(root,1.4,.1,.65,m.black,x,.04,z);}
 // Vented aluminium monitor, separate bezel, articulated support and real cables.
 const monitor=group(root,0,4.6,0);box(monitor,8.9,5.55,.3,m.black,0,0,-.12,.11);box(monitor,8.68,5.34,.12,m.metal,0,0,.06,.10);box(monitor,8.35,5.01,.03,mat(0x07101f,.1,.65),0,0,.135,.07);
 for(let i=0;i<33;i++)box(monitor,.075,.025,.38,m.black,-3.6+i*.225,-2.46,-.15);cyl(monitor,.025,.008,mat(0x76dcd0,.15,.4,1),4.2,-2.59,.15).rotation.x=Math.PI/2;
 box(root,.62,1.64,.32,m.metal,0,2.8,-.33);cyl(root,.18,.83,m.steel,0,3.33,-.24).rotation.z=Math.PI/2;box(root,2.6,.15,1.6,m.metal,0,2.35,-.2,.14);
 tube(root,[[0,3,-.3],[.6,2.5,-.7],[2.1,2.4,-1.3],[4.3,2.3,-1.9],[4.3,1,-2.2]],.035,m.black);
 // Individual keyboard keys, mouse, wrist rest; readable scale and contact shadows.
 const keyboard=group(root,-.5,2.39,2.65);box(keyboard,4.25,.16,1.5,m.metal,0,0,0,.17);for(let r=0;r<5;r++)for(let k=0;k<15;k++){const key=box(keyboard,.237,.08,.211,mat(r===0?0x344860:0x1d2b3f,.35,.4),-1.85+k*.264,.13,-.56+r*.25,.12);if(r===4&&k>4&&k<10)key.visible=false;else box(keyboard,.061,.004,.027,mat(0x7d91a6,.05,.6),key.position.x,.175,key.position.z);}box(keyboard,1.4,.08,.21,m.black,-.12,.13,.44,.13);box(root,4.4,.12,.52,m.black,-.5,2.4,3.75,.2);
 const mouse=group(root,3,2.44,2.66);const shell=new T.Mesh(new T.SphereGeometry(.48,32,20),m.metal);shell.scale.set(.85,.39,1.3);mouse.add(shell);rod(mouse,[0,.18,-.48],[0,.20,.06],.007,m.black);cyl(mouse,.055,.15,m.steel,0,.22,-.16).rotation.z=Math.PI/2;box(root,2.2,.025,2.3,mat(0x0c1525,.05,.85),3,2.305,2.65,.18);
 // Lamp, glass and room context actually explain unattended desk scale.
 cyl(root,.62,.13,m.metal,-4.7,2.36,.5);rod(root,[-4.7,2.4,.5],[-4.4,5.5,-.4],.07,m.steel);const shade=cyl(root,.63,.48,m.black,-4.4,5.7,-.4,.38);shade.rotation.z=-.35;root.add(new T.PointLight(0xffd6a0,24,8));root.children.at(-1).position.set(-4.4,5.4,-.2);
 const glass=new T.Mesh(new T.CylinderGeometry(.31,.28,.82,40,1,true),new T.MeshPhysicalMaterial({color:0xaecad9,transparent:true,opacity:.19,roughness:.08,metalness:.12,side:T.DoubleSide}));glass.position.set(-3.8,2.72,2.2);root.add(glass);cyl(root,.28,.38,mat(0x4c668a,.1,.2),-3.8,2.52,2.2);
 box(root,24,13,.25,mat(0x101a2d,.05,.83),0,5.5,-4.7);for(let i=0;i<14;i++)box(root,.04,11,.08,m.black,-11+i*1.7,5.4,-4.51);box(root,6,.16,1,m.metal,6,6,-3.8);for(let i=0;i<9;i++)box(root,.3,1.2+i%3*.15,.72,i%2?m.blue:m.black,3.4+i*.45,6.66,-3.8);const fill=new T.PointLight(0x5e99df,16,8);fill.position.set(0,4.5,1.5);root.add(fill);
 const display=dynamicFace(monitor,8.3,5.0,(c,W,H,s)=>{
  c.fillStyle='#091325';c.fillRect(0,0,W,H);c.fillStyle='#101e32';c.fillRect(0,0,W,112);canvasText(c,'TRADIENT',55,72,42,'#e7edf5',750);canvasText(c,'SAMPLE / USD',520,70,35,'#9fb5c8',550);canvasText(c,s.late?'MONITORING':s.earlier?'BEFORE SIGNAL':'MARKET',s.earlier?900:1170,70,s.earlier?28:32,s.earlier?'#efcb78':'#72cdd9',650);
  canvasText(c,'PRICE',58,165,23,'#7e99b2');canvasText(c,s.price,58,234,59,'#e7f3f5',600);canvasText(c,'ILLUSTRATIVE DATA',735,164,22,'#60788f');
  c.strokeStyle='#203650';c.lineWidth=2;for(let y=280;y<=725;y+=89){c.beginPath();c.moveTo(60,y);c.lineTo(978,y);c.stroke();canvasText(c,(100.08-(y-280)/89*.03).toFixed(2),70,y-9,20,'#6e8fa7');}for(let x=185;x<980;x+=130){c.beginPath();c.moveTo(x,258);c.lineTo(x,760);c.stroke();}
  canvasText(c,'09:30',120,797,23,'#66839c');canvasText(c,'09:31',490,797,23,'#66839c');canvasText(c,'09:32',850,797,23,'#66839c');
  rounded(c,1020,155,520,595,15,'#101f33','#284056');canvasText(c,s.earlier?'CONFIGURE RULE':'RULE INSPECTOR',1054,211,30,'#b4c5d4',650);
  const fields=[['CONDITION','PRICE > 100.00'],['QUANTITY','BUY 3 UNITS'],['PRICE LIMIT','100.05']];if(!s.detachedFields)fields.forEach(([k,v],i)=>{const y=264+i*126;rounded(c,1045,y,470,104,9,s.inspect&&i===0?'#223b4e':'#122439',s.inspect?'#9ea881':'#263e53');canvasText(c,k,1072,y+33,23,'#829aaf',600);canvasText(c,s.earlier&&!s.saved?v.slice(0,Math.ceil(v.length*Math.max(0,Math.min(1,s.configure*3-i)))):v,1072,y+78,34,'#e7d59d',650)});
  rounded(c,1045,666,470,62,12,s.saved?'#183b39':'#1f4159');canvasText(c,s.saved?'CONFIGURATION SAVED':'SAVE RULE',1085,708,28,'#9fe0ce',700);
  rounded(c,1020,790,520,138,12,s.submitted?'#173739':'#285273','#49798f');canvasText(c,s.late?'FILLED 2 / REMAINING 1':s.earlier?'WAITING FOR CONDITION':s.submitted?'SUBMITTED / FILLED 0':'PLACE ORDER',1064,850,33,'#e8f4f4',700);canvasText(c,s.late?'O-01 · PARTIAL FILL':s.earlier?'RULE-01 · NO ORDER':s.submitted?'Manual example':'BUY 3 · LIMIT 100.05',1064,896,27,'#99b9cb');
  if(s.earlier){rounded(c,55,852,920,76,12,'#162a40','#4c6380');canvasText(c,s.saved?'RULE-01 STORED · WAITING FOR CONDITION':'DEFINE THE DECISION BEFORE THE SIGNAL',85,904,28,'#e7c985',650)}
  else{canvasText(c,s.late?'CONNECTION ACTIVE · LATEST REPORT R-01':'MARKET UPDATES CONTINUE',60,907,29,'#80a7b6',550)}
  if(s.test){rounded(c,65,295,885,435,12,'#101e30','#467381');canvasText(c,'TEST THE RULE',100,357,42,'#e2edf4',700);['99.98  →  NO ORDER','99.99  →  NO ORDER','100.01  →  CONDITION MET'].slice(0,s.testRows).forEach((t,i)=>canvasText(c,t,103,448+i*88,40,i===2?'#e9c875':'#86adbc',600));}
 },1600,1000);display.face.position.z=.17;
 if(craft){
  const reflection=canvasTex(512,512,(c,W,H)=>{const grad=c.createLinearGradient(0,H, W,0);grad.addColorStop(0,'#9bc7ee00');grad.addColorStop(.51,'#9bc7ee00');grad.addColorStop(.64,'#aacce418');grad.addColorStop(.68,'#b9d8ef25');grad.addColorStop(.71,'#9bc7ee00');grad.addColorStop(1,'#9bc7ee00');c.fillStyle=grad;c.fillRect(0,0,W,H)});
  const glassFace=new T.Mesh(new T.PlaneGeometry(8.31,5.01),new T.MeshBasicMaterial({map:reflection,transparent:true,depthWrite:false,toneMapped:false}));glassFace.position.z=.195;monitor.add(glassFace);
  const inner=new T.Mesh(new T.CylinderGeometry(.34,.58,.26,48,1,true),new T.MeshPhysicalMaterial({color:0xd3d1c7,metalness:.82,roughness:.21,side:T.DoubleSide}));inner.position.set(-4.4,5.5,-.4);inner.rotation.z=-.35;root.add(inner);
  const bulb=new T.Mesh(new T.SphereGeometry(.12,24,16),mat(0xffe7ba,.05,.25,3));bulb.position.set(-4.35,5.42,-.4);root.add(bulb);
  const lampLight=new T.SpotLight(0xffdaaa,120,15,.73,.60,1.6);lampLight.position.set(-4.35,5.45,-.35);lampLight.target.position.set(-2.4,2.22,2.5);lampLight.castShadow=true;lampLight.shadow.mapSize.set(1024,1024);lampLight.shadow.bias=-.0002;root.add(lampLight,lampLight.target);
  const monitorSpill=new T.RectAreaLight(0x89b6cd,3.5,6,3);monitorSpill.position.set(0,4.5,.4);monitorSpill.lookAt(0,2.2,3.4);root.add(monitorSpill);
  const rim=new T.DirectionalLight(0xa9cce6,.8);rim.position.set(6,7,-3);root.add(rim);
 }
 const chart=bars(monitor,{data:score.marketData,width:4.45,height:2.23,x:-1.58,y:-.04,z:.225,depth:.08});const chartGrid=group(monitor);grid(chartGrid,4.8,2.3,-1.58,-.05,.18);
 const threshold=line(monitor,[[-3.88,chart.level(100),.32],[.69,chart.level(100),.32]],C.gold,.82);const thresholdLabel=text(monitor,'100.00',.65,.14,-3.45,.22,.33,'#e8c984');
 const outline=new T.Mesh(new T.RingGeometry(.15,.19,40),new T.MeshBasicMaterial({color:C.gold,transparent:true,opacity:.85,toneMapped:false}));outline.position.set(.52,.45,.34);monitor.add(outline);
 const pointer=cursor(monitor);pointer.position.z=.5;
 const mix=(a,b,p)=>a+(b-a)*p;
 const direction=score.visualDirection?.desk,skies=root.children.filter(o=>o.isMesh&&o.material?.side===T.BackSide);
 if(direction){monitor.traverse(o=>o.layers.set(1));skies.forEach(o=>o.layers.set(2));root.children.filter(o=>o.isLight).forEach(o=>o.layers.enable(1));}
 const depthFocus={active:true,hero:monitor,skies,distance:8,aperture:direction?.focusAperture??0,maxblur:craft?.014:.009};
 return {root,handles:{monitor,display,chart,chartGrid,threshold,thresholdLabel},depthFocus:direction?depthFocus:undefined,update(s,camera,options={}){
 if(direction){const macro=1-ease(s.frame/direction.macroEndFrame);chart.candles.forEach(c=>{c.body.scale.z=1+(direction.macroDepth/.08-1)*macro});depthFocus.distance=camera.position.distanceTo(new T.Vector3(s.frame<45?-1.1:0,4.5,.24));}const arrive=id=>{const e=score.events.find(e=>e.id===id);return direction?ease((s.frame-e.firstFrame)/(e.anchorFrame-e.firstFrame)):s.p(id)};
 const late=s.stage('closing').active,earlier=s.stage('earlier').active,notice=arrive('notice'),check=arrive('manual-check'),submit=arrive('manual-submit');
  const noticeX=direction?chart.root.position.x+chart.candles.at(-1).x:.4,noticeY=direction?chart.level(100):.45;
  let px=mix(3.9,noticeX,notice),py=mix(-2,noticeY,notice);px=mix(px,2.5,check);py=mix(py,direction?.90:.40,check);if(direction)outline.position.set(noticeX,noticeY,.34);px=mix(px,2.5,submit);py=mix(py,-1.86,submit);pointer.position.set(px,py,.5);pointer.visible=!earlier&&!late;pointer.scale.setScalar(1-.18*Math.sin(submit*Math.PI));
  outline.visible=!earlier&&!late;outline.scale.setScalar(.85+notice*.35);outline.material.opacity=notice*(1-check);
  const extension=earlier?.04*(1-s.p('before-signal')):late?.35+.10*Math.sin(s.seconds*2):s.p('market-change');chart.update(1,extension);threshold.visible=!(late&&s.p('test-end')>.2&&s.p('monitor-end')<.20);chart.root.visible=!(late&&s.p('test-end')>.2&&s.p('monitor-end')<.20);chartGrid.visible=thresholdLabel.visible=chart.root.visible;
  const visible=deskDisplayState(s,extension);if(options.detachedFields)visible.detachedFields=true;chart.root.visible=chartGrid.visible=threshold.visible=thresholdLabel.visible=!visible.test&&!options.detachedChart;display.draw(visible,deskDisplayKey(visible));
 },focusHero:[],skies:[]};
}
