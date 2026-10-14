// Standalone scene-kit examples: no reference footage, audio, photo or storyboard.
import React,{useMemo,useEffect,useState} from 'react';
import {AbsoluteFill,Composition,registerRoot,useCurrentFrame,staticFile,delayRender,continueRender} from 'remotion';
import {useThree} from '@react-three/fiber';
import * as T from 'three';
import {RoomEnvironment} from 'three/examples/jsm/environments/RoomEnvironment.js';
import {ThreeCanvas} from './kit/three-canvas';
import {Finish} from './kit/finish';
import {cableMacro} from './cable-macro';
import {cableLanding,cityRadio,infrastructureWorld} from './infrastructure';
function Scene({kind,t}:{kind:string;t:number}){
 const {scene,gl,camera}=useThree();
 const built=useMemo(()=>kind==='macro'?cableMacro('fiber'):kind==='landing'?cableLanding('landing'):kind==='radio'?cityRadio('receive-radio'):infrastructureWorld(),[kind]);
 const env=useMemo(()=>{const room=new RoomEnvironment(),pm=new T.PMREMGenerator(gl),tx=pm.fromScene(room,.04).texture;room.dispose();pm.dispose();return tx;},[gl]);
 scene.environment=env;scene.environmentIntensity=built.environmentIntensity??.25;scene.fog=new T.FogExp2(0x040b25,built.fogDensity??.004);
 built.update(t);const pose=built.camera(t),c=camera as T.PerspectiveCamera;c.position.set(...pose.eye as [number,number,number]);c.up.set(0,1,0);c.lookAt(...pose.look as [number,number,number]);c.fov=pose.fov;c.updateProjectionMatrix();
 return <primitive object={built.root}/>;
}
function Demo({kind}:{kind:string}){
 const fr=useCurrentFrame(),[ready,setReady]=useState(false),[hold]=useState(()=>delayRender('example font'));
 useEffect(()=>{new FontFace('FilmCondensed',`url(${staticFile('title.ttf')})`).load().then(font=>{document.fonts.add(font);setReady(true);continueRender(hold);});},[]);
 return <AbsoluteFill style={{background:'#040a20'}}><Finish fr={fr} bloom={.7}>{ready&&<ThreeCanvas width={720} height={1280} dpr={1.5} shadows="percentage" gl={{antialias:true}} camera={{near:.01,far:1500}} onCreated={({gl})=>{gl.toneMapping=T.ACESFilmicToneMapping;gl.toneMappingExposure=.85;gl.setClearColor('#040a20',1);}}><Scene kind={kind} t={fr/30}/></ThreeCanvas>}</Finish></AbsoluteFill>;
}
registerRoot(()=> <>{['macro','landing','radio','world'].map(kind=><Composition key={kind} id={'Demo-'+kind} component={Demo} defaultProps={{kind}} width={720} height={1280} fps={30} durationInFrames={180}/>)}</>);
