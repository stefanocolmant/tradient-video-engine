// @ts-nocheck
import React,{useMemo} from 'react';
import {useThree} from '@react-three/fiber';
import {T,label,step,ease,mix} from './kit/objects';
import {Earth,Stars,CableWeb,Route,ll,over,arc,webCable} from './kit/globe';

export function GlobeShot({type,t,fr,earth}){
  const scene=useThree(s=>s.scene),camera=useThree(s=>s.camera);
  scene.fog=null;const atl=type==='earth-atlantic',many=type.includes('web');
  const q=ease(step(t,0,type.includes('ending')?6.2:atl?3.8:type==='earth-pacific'?2.53:3.3));
  const points=useMemo(()=>atl?arc({lat:47,lon:-53},{lat:51,lon:-10},1.012,.012,100):webCable(0,1.008),[atl]);
  let pos,roll,offset;
  if(many){pos=over({lat:25,lon:mix(145,159,q)},mix(3.05,2.84,q));roll=-.08;offset=[0,-205];}
  else if(atl){pos=over({lat:36.76,lon:-32.43},mix(2.84,2.69,q));roll=-.0039;offset=[5.9,88.3];}
  else {pos=over({lat:42.5,lon:mix(160,162,q)},mix(3.36,3.50,q));roll=-.582;offset=[2,9.4];}
  camera.position.set(...pos);camera.up.set(0,1,0);camera.lookAt(0,0,0);camera.rotateZ(roll);camera.fov=46;
  camera.setViewOffset(720,1280,offset[0],offset[1],720,1280);camera.updateProjectionMatrix();camera.updateMatrixWorld();
  const tags=useMemo(()=>{const g=new T.Group();const data=atl?[['Newfoundland',{lat:47,lon:-53},-.035,-.04],['Ireland',{lat:51,lon:-10},.02,-.04]]:[['Shanghai',{lat:31.23,lon:121.47},.065,-.043],['Los Angeles',{lat:33.9,lon:-118.4},-.15,.043]];for(const [s,loc,dx,dy] of data){const o=label(g,s,s==='Newfoundland'?.30:s==='Los Angeles'?.33:.29,.050);o.userData={loc,dx,dy};o.material.depthTest=false;o.renderOrder=100;}return g;},[atl]);
  const right=new T.Vector3(1,0,0).applyQuaternion(camera.quaternion),up=new T.Vector3(0,1,0).applyQuaternion(camera.quaternion);
  tags.children.forEach(o=>{o.position.copy(ll(o.userData.loc,1.019)).addScaledVector(right,o.userData.dx).addScaledVector(up,o.userData.dy);o.quaternion.copy(camera.quaternion);});
  return <><Stars fr={fr} count={4500}/><Earth tex={earth} day={.32} night={1.06}/>
    {many?<CableWeb progress={type.includes('ending')?1:step(t,0,2.8)} fr={fr} pulses={1}/>:<>
      <Route points={points} color="#9fb4d0" width={.00055} progress={1} opacity={.30} glow={0} head={0}/>
      <Route points={points} color={atl?'#8bdfff':'#ffd02c'} width={.0011} progress={atl?step(t,0,2.5):.20+.80*step(t,0,2.53)} glow={.85} head={.08}/>
      <primitive object={tags}/></>}
  </>;
}

export function photoLeader(t){const q=ease(step(t,0,2.53));const camera=new T.PerspectiveCamera(46,720/1280,.01,1500);camera.position.set(...over({lat:42.5,lon:mix(160,162,q)},mix(3.36,3.50,q)));camera.lookAt(0,0,0);camera.rotateZ(-.582);camera.setViewOffset(720,1280,2,9.4,720,1280);camera.updateProjectionMatrix();camera.updateMatrixWorld();const curve=new T.CatmullRomCurve3(webCable(0,1.008));const p=curve.getPointAt(.2+.8*step(t,0,2.53)).project(camera);return `M${(p.x+1)*360} ${(1-p.y)*640} L534 551`;}
