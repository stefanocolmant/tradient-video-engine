// @ts-nocheck
import React,{useMemo,useState,useEffect} from 'react';
import {AbsoluteFill,Audio,Composition,registerRoot,useCurrentFrame,staticFile,delayRender,continueRender,cancelRender} from 'remotion';
import {useThree} from '@react-three/fiber';
import * as T from 'three';
import {RoomEnvironment} from 'three/examples/jsm/environments/RoomEnvironment.js';
import {ThreeCanvas,settle} from '../kit/three-canvas';
import {Finish} from '../kit/finish';
import {PacketDepth} from '../packet-depth';
import {buildDesk} from './desk';
import {buildData,buildConfiguration} from './data';
import {buildCraftData} from './data-craft';
import {buildCraftExecution} from './book-craft';
import craftScore from '../../production-script/visual-direction-v6/film.production.json';
import limitScore from '../../production-script/visual-direction-v7/film.production.json';
import handoffScore from '../../production-script/visual-direction-v8/film.production.json';
import {buildRuleHandoff} from './rule-handoff';
import {buildCinematicData} from './data-cinematic';
import {buildCinematicExecution} from './book-cinematic';
import {buildCinematicConfiguration} from './configuration-cinematic';
import {buildBook,buildReport} from './execution';
import {buildNetwork,buildAcceptance} from './network';
import {buildComparison} from './comparison';
import {buildCinematicComparison} from './comparison-cinematic';
import {assertScore,stateAt,cameraAt} from './runtime.mjs';
import {assertCinematic} from './cinematic-state.mjs';
import defaultScore from '../../production-script/rebuild/film.production.json';
import cinematicScore from '../../production-script/visual-direction-v5/film.production.json';
const builders={desk:buildDesk,configuration:buildConfiguration,data:buildData,book:buildBook,report:buildReport,network:buildNetwork,acceptance:buildAcceptance,comparison:buildComparison};
const familyFor=(shot,score)=>score.visualDirection?.ruleHandoff&&(['06-earlier','07-configure'].includes(shot.id)||shot.scene==='configuration')?'rule-handoff':score.visualDirection?.execution&&['book','report'].includes(shot.scene)?'execution':shot.scene;
function World({shot,score,frame}){const {scene,gl,camera}=useThree();const family=familyFor(shot,score);const built=useMemo(()=>family==='rule-handoff'?buildRuleHandoff(score):family==='comparison'&&score.visualDirection?.comparison?buildCinematicComparison(score):family==='configuration'&&score.visualDirection?.configuration?buildCinematicConfiguration(score):family==='execution'?(score.visualDirection?.craftVersion===6?buildCraftExecution(score):buildCinematicExecution(score)):family==='data'&&score.visualDirection?.data?(score.visualDirection?.craftVersion===6?buildCraftData(score):buildCinematicData(score)):builders[shot.scene](score),[family,score]);const emptyHero=useMemo(()=>new T.Group(),[]);const env=useMemo(()=>{const e=new RoomEnvironment(),pm=new T.PMREMGenerator(gl),tx=pm.fromScene(e,.03).texture;e.dispose();pm.dispose();return tx},[gl]);scene.environment=env;scene.environmentIntensity=built.environmentIntensity??score.render.environmentIntensity;scene.fog=new T.FogExp2(built.fogColor??0x050d20,built.fogDensity??score.render.fogDensity);
 const c=cameraAt(built.camera?built.camera(frame):shot.camera,frame,score);camera.position.set(...c.eye);camera.up.set(0,1,0);camera.lookAt(...c.target);camera.fov=c.fov;camera.near=score.render.cameraNear;camera.far=score.render.cameraFar;camera.updateProjectionMatrix();const state=stateAt(score,frame);built.update(state,camera);
 return <><primitive object={built.root}/><PacketDepth focus={built.depthFocus??{active:true,hero:emptyHero,skies:[],distance:camera.position.distanceTo(new T.Vector3(...c.target)),aperture:score.render.aperture,maxblur:score.render.maxblur}}/></>;
}
export function Film({score=defaultScore,sample=null}){useMemo(()=>{assertScore(score);if(score.visualDirection)assertCinematic(score)},[score]);const frame=useCurrentFrame()+(sample?.offset??0),t=frame/30,shot=score.shots.find(s=>frame>=s.startFrame&&frame<s.endFrame);if(!shot)throw Error('Frame uncovered '+frame);const [ready,setReady]=useState(false),[wait]=useState(()=>delayRender('Visual rebuild fonts'));useEffect(()=>{Promise.all(score.engineDefaults.fonts.map(f=>new FontFace(f.family,`url(${staticFile(f.asset)})`,{weight:f.weight}).load().then(font=>document.fonts.add(font)))).then(()=>{setReady(true);settle(wait)}).catch(cancelRender);return()=>continueRender(wait)},[]);const cap=score.captions.find(c=>t>=c.start&&t<c.end);
 return <AbsoluteFill style={{background:'#050b1c',color:'#fff',fontFamily:'FilmBody'}}><Finish fr={frame} bloom={score.render.bloom} grainAmount={score.render.grain}>{ready&&<ThreeCanvas width={720} height={1280} dpr={score.render.dpr} shadows='percentage' gl={{antialias:true}} camera={{fov:44,near:.012,far:1200}} onCreated={({gl})=>{gl.toneMapping=T.ACESFilmicToneMapping;gl.toneMappingExposure=score.render.exposure;gl.setClearColor('#050b1c',1);}}><World key={familyFor(shot,score)} shot={shot} score={score} frame={frame}/></ThreeCanvas>}</Finish>{cap&&<div style={{position:'absolute',top:shot.captionTop??score.render.captionTop,left:45,right:45,fontSize:score.render.captionSize,fontWeight:750,lineHeight:1.12,textAlign:'center',textShadow:'0 2px 4px #000,0 0 12px #000',WebkitTextStroke:'1px #0008',paintOrder:'stroke fill'}}>{cap.text}</div>}<Audio src={staticFile(score.audio.asset)} startFrom={sample?.offset??0} volume={1}/></AbsoluteFill>;
}
registerRoot(()=> <><Composition id='TradientRulesHandoff' component={Film} width={720} height={1280} fps={30} durationInFrames={2446} defaultProps={{score:handoffScore}}/><Composition id='TradientRulesRebuilt' component={Film} width={720} height={1280} fps={30} durationInFrames={defaultScore.composition.durationInFrames} defaultProps={{score:defaultScore}} calculateMetadata={({props})=>({durationInFrames:props.score.composition.durationInFrames,fps:30,width:720,height:1280})}/><Composition id='TradientRulesCinematic' component={Film} width={720} height={1280} fps={30} durationInFrames={2446} defaultProps={{score:cinematicScore}}/><Composition id='TradientRulesCraft' component={Film} width={720} height={1280} fps={30} durationInFrames={2446} defaultProps={{score:craftScore}}/><Composition id='TradientRulesLimitJourney' component={Film} width={720} height={1280} fps={30} durationInFrames={2446} defaultProps={{score:limitScore}}/></>);
