// @ts-nocheck
import {T,C,group,box,cyl,rod,tube,line,mat,text,materials,environment,ticket,wire,glow} from './objects';
import {compactRack} from '../compact-rack';
import {fiberEntry} from '../fiber-entry';
import {cableConstruction} from './cable-construction';
import {ease} from './runtime.mjs';
import {cableConstructionDirection} from './craft-state.mjs';
function serverRoom(root){const m=materials();for(let i=0;i<6;i++){compactRack(root,-4.7,-3-i*4,1.1);const r=compactRack(root,4.7,-3-i*4,1.1);r.rotation.y=-.4;}for(let i=0;i<6;i++){box(root,9,.08,.08,m.steel,0,7,-i*5);box(root,3.4,.06,.16,mat(0x87b9df,.1,.3,.7),0,6.9,-i*5);}for(const x of [-2.6,2.6])line(root,[[x,.02,4],[x,.02,-35]],C.cyan,.35);}
export function buildNetwork(score){const root=environment(),m=materials(),room=group(root);serverRoom(room);const rack=compactRack(root);const brokerLabel=text(root,'BROKER',2.4,.32,0,4.7,.8,'#d8e7ee');
 const port=group(root,-.07,2.23,.84);box(port,.35,.23,.15,m.black,0,0,.025);for(let j=0;j<8;j++)box(port,.022,.07,.025,m.gold,-.105+j*.030,.025,.12);
 const shell=new T.Mesh(new T.CylinderGeometry(.23,.23,5.8,48,1,true,.5,Math.PI*1.72),m.blue);shell.rotation.x=Math.PI/2;shell.position.set(-.07,2.23,-1.9);root.add(shell);
 const cutaway=group(root,-.07,2.23,1.05);for(let i=0;i<8;i++){const a=i*Math.PI/4,x=Math.cos(a)*.11,y=Math.sin(a)*.11;const conductor=tube(cutaway,[[x,y,0],[x,y,-1],[x*.7,y*.7,-3],[x*.5,y*.5,-6]],.018,i%2?m.gold:m.cyan,96);conductor.o.geometry.dispose();conductor.o.geometry=new T.TubeGeometry(conductor.path,96,.018,24,false);}for(let z of [0,-.28,-.54,-1.3,-2.8,-4.5]){const ring=new T.Mesh(new T.TorusGeometry(.235,.014,8,64),m.steel);ring.position.z=z;cutaway.add(ring);}
 const card=ticket(root,{width:1.9,height:1.2,status:'FORMED'}),light=new T.PointLight(C.gold,15,5);root.add(light);const core=glow(root,.32,C.gold);const ingress=wire(root,[[.8,2.8,3],[.4,2.5,2.3],[-.07,2.23,1.15]],C.cyan,.012).o;
 const direction=score.visualDirection?.network,construction=direction?.construction?cableConstructionDirection(score):null;let fiberSpace=null,micro=null;const cut=construction?cableConstruction(root,construction):null;
 if(direction){
  fiberSpace=group(root,-.07,2.23,1.05);fiberSpace.rotation.y=Math.PI/2;fiberSpace.scale.setScalar(1.75);
  const origin=group(fiberSpace,-6.2,1.08,-2.4);micro=fiberEntry(origin,{controlledReveal:!!construction});
  port.children.forEach(o=>o.visible=false);
  for(const x of [-.145,.145])box(port,.045,.23,.09,m.black,x,0,.04);
  for(const y of [-.115,.115])box(port,.33,.025,.09,m.black,0,y,.04);
  const ferrule=new T.Mesh(new T.TorusGeometry(.068,.017,16,64),m.steel);ferrule.position.z=.12;port.add(ferrule);
  const glassCore=new T.Mesh(new T.CircleGeometry(.054,64),new T.MeshPhysicalMaterial({color:0x7bc7e5,transparent:true,opacity:.10,roughness:.05,metalness:.1,depthWrite:false,side:T.DoubleSide}));glassCore.position.z=.14;port.add(glassCore);
 }
 return{root,camera:direction?f=>construction&&f>=construction.startFrame?construction.camera:direction.camera:undefined,depthFocus:direction?{active:false,hero:new T.Group(),skies:[],distance:10,aperture:0,maxblur:0}:undefined,update(s,camera){const b=s.p('broker-arrive'),r=s.p('route');card.root.position.set(.8*(1-b),2.8-.57*b,3.0-1.85*b);card.draw({status:s.submitted?'SUBMITTED':'FORMED'},String(s.submitted));card.root.scale.setScalar(1-.90*b);card.root.visible=r<.2;core.position.set(-.07,2.23,1.2-7*r);light.position.copy(core.position);core.scale.setScalar(.20+.14*(1-r));light.intensity=8+12*Math.sin(r*Math.PI);rack.visible=r<.36;port.visible=r<.36;ingress.visible=r<.30;cutaway.visible=s.stage('connector').active&&!direction;shell.visible=s.stage('connector').active&&!direction;
 core.visible=true;
 if(direction){rack.visible=s.frame<direction.hideRackFrame;port.visible=true;fiberSpace.visible=s.stage('connector').active;root.updateMatrixWorld(true);const local=fiberSpace.worldToLocal(camera.position.clone()).add(new T.Vector3(6.2,-1.08,2.4));micro.update(4.3+1.1*r,{eye:local.toArray()});if(cut){const q=construction,active=s.frame>=q.startFrame;cut.root.visible=active&&s.frame<q.hideFrame;fiberSpace.visible=active?s.frame>=q.diveFrame:s.stage('connector').active;const reveal=active?ease((s.frame-q.diveFrame)/(q.microFrame-q.diveFrame)):1;micro.reveal(reveal,active?s.frame>=q.microFrame:4.3+1.1*r>5.20);cut.update(ease((s.frame-q.pulseStartFrame)/(q.pulseEndFrame-q.pulseStartFrame)),s.frame<q.microFrame?1:0);room.visible=!active;brokerLabel.visible=!active;if(active){card.root.visible=false;rack.visible=false;port.visible=false;ingress.visible=false;core.visible=false;light.intensity=0;}}}}};
}
export function buildAcceptance(score){const root=environment(),m=materials();serverRoom(root);const racks=group(root);compactRack(racks,-3.3,-1);compactRack(racks,3.3,-1);text(root,'EXECUTION VENUE',4.6,.32,0,5.0,.5,'#b7cad9');const card=ticket(root,{width:4.3,height:2.8,status:'ACCEPTED',filled:0});card.root.position.set(0,3,1);const boxes=[];for(let i=0;i<3;i++){const g=group(root,(i-1)*.95,1.1,1.4);g.add(new T.LineSegments(new T.EdgesGeometry(new T.BoxGeometry(.72,.6,.6)),new T.LineBasicMaterial({color:C.gold})));boxes.push(g);}text(root,'REQUESTED 3',2.6,.25,-1.4,.45,1.5,'#9ab5c6');text(root,'FILLED 0',2.3,.25,1.7,.45,1.5,'#e7d8b1');wire(root,[[-3.3,2.2,.3],[-2.2,1.5,1],[0,1.3,1]],C.cyan);
 return{root,update(s){const p=s.p('not-filled');card.root.position.z=.4+.6*p;card.root.rotation.y=-.13*(1-p);boxes.forEach((g,i)=>{g.position.y=1.1+.05*Math.sin(s.seconds*1.4+i);});}};
}
