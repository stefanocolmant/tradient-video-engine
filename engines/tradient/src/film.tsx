// @ts-nocheck
import React,{useMemo,useState,useEffect} from 'react';
import {AbsoluteFill,Audio,Composition,registerRoot,useCurrentFrame,staticFile,delayRender,continueRender,cancelRender} from 'remotion';
import {useThree} from '@react-three/fiber';
import * as T from 'three';
import {RoomEnvironment} from 'three/examples/jsm/environments/RoomEnvironment.js';
import {ThreeCanvas,settle} from './kit/three-canvas';
import {Finish} from './kit/finish';
import {PacketDepth} from './packet-depth';
import {buildMechanism} from './mechanisms';
import defaultScore from '../production-script/film.production.json';

export function cameraAt(points,p){let i=0;while(i<points.length-2&&p>points[i+1].p)i++;const a=points[i],b=points[i+1];const u=Math.max(0,Math.min(1,(p-a.p)/(b.p-a.p))),e=u*u*(3-2*u);return{eye:a.eye.map((v,k)=>v+(b.eye[k]-v)*e),look:a.look.map((v,k)=>v+(b.look[k]-v)*e),fov:a.fov+(b.fov-a.fov)*e};}
function World({shot,sceneSpec,t,frame,audit}){
 const {scene,gl,camera}=useThree();
 const built=useMemo(()=>buildMechanism(sceneSpec.id,sceneSpec.events),[sceneSpec.id]);
 const env=useMemo(()=>{const e=new RoomEnvironment(),pm=new T.PMREMGenerator(gl),tx=pm.fromScene(e,.04).texture;e.dispose();pm.dispose();return tx},[gl]);
 scene.environment=env;scene.environmentIntensity=.34;scene.fog=new T.FogExp2(0x040b25,.009);
 const p=Math.max(0,Math.min(1,(t-sceneSpec.start)/(sceneSpec.end-sceneSpec.start)));
 built.update(p,t-sceneSpec.start);const c=cameraAt(shot.camera,(t-shot.start)/(shot.end-shot.start));
 camera.position.set(...c.eye);camera.up.set(0,1,0);camera.lookAt(...c.look);camera.fov=c.fov;camera.near=.01;camera.far=1500;camera.updateProjectionMatrix();
 useEffect(()=>{if(audit)console.info('NEW_FILM_AUDIT:'+JSON.stringify({frame,shot:shot.id,scene:sceneSpec.id,p,camera:c}));},[frame]);
 return <><primitive object={built.root}/><PacketDepth focus={{active:true,hero:built.focusHero,skies:built.skies,distance:camera.position.distanceTo(new T.Vector3(...c.look)),aperture:.00038,maxblur:.009}}/></>;
}
export function Film({score=defaultScore,audit=false,sample=null}){
 const frame=useCurrentFrame()+(sample?.offset??0),t=frame/score.composition.fps;
 const shot=score.shots.find(s=>frame>=s.firstFrame&&frame<=s.lastFrameInclusive)??score.shots.at(-1),scene=score.scenes.find(s=>s.id===shot.scene);
 const [ready,setReady]=useState(false),[wait]=useState(()=>delayRender('New film typography'));
 useEffect(()=>{Promise.all(score.engineDefaults.fonts.map(f=>new FontFace(f.family,`url(${staticFile(f.asset)})`,{weight:f.weight}).load().then(font=>document.fonts.add(font)))).then(()=>{setReady(true);settle(wait)}).catch(cancelRender);return()=>continueRender(wait)},[]);
 const cap=score.captions.find(c=>t>=c.start&&t<c.end),r=score.engineDefaults.render;
 return <AbsoluteFill style={{background:r.background,color:'#fff',fontFamily:'FilmBody'}}>
  <Finish fr={frame} bloom={.55} grainAmount={.055}>{ready&&<ThreeCanvas width={720} height={1280} dpr={1.5} shadows='percentage' gl={{antialias:true}} camera={{fov:44,near:.01,far:1500}} onCreated={({gl})=>{gl.toneMapping=T.ACESFilmicToneMapping;gl.toneMappingExposure=.85;gl.setClearColor('#040a20',1);}}><World key={scene.id} shot={shot} sceneSpec={scene} t={t} frame={frame} audit={audit}/></ThreeCanvas>}</Finish>
  {cap&&<div style={{position:'absolute',top:1015,left:38,right:38,fontSize:34,fontWeight:750,lineHeight:1.13,textAlign:'center',textShadow:'0 2px 4px #000,0 0 12px #000',WebkitTextStroke:'1px #0008',paintOrder:'stroke fill'}}>{cap.text}</div>}
  {score.audio?.asset&&<Audio src={staticFile(score.audio.asset)} startFrom={sample?.offset??0} volume={1}/>}
 </AbsoluteFill>;
}
registerRoot(()=> <Composition id='TradientRulesBeforeReactions' component={Film} width={720} height={1280} fps={30} durationInFrames={defaultScore.composition.durationInFrames} defaultProps={{score:defaultScore}} calculateMetadata={({props})=>({durationInFrames:props.score.composition.durationInFrames,fps:30,width:720,height:1280})}/>);
