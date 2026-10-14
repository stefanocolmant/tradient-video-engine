import React,{useMemo} from 'react';
import {AbsoluteFill,Composition,registerRoot,useCurrentFrame} from 'remotion';
import {useThree} from '@react-three/fiber';
import * as T from 'three';
import {RoomEnvironment} from 'three/examples/jsm/environments/RoomEnvironment.js';
import {ThreeCanvas} from './kit/three-canvas';
import {Finish} from './kit/finish';
import {routedNetwork,cableSection,historicalSea} from './production-scenes';
import {useShip} from './ship-asset';

function Scene({kind,t,ship}:{kind:string;t:number;ship:T.Group|null}){
  const {scene,gl,camera}=useThree();
  const built=useMemo<Pick<ReturnType<typeof routedNetwork>,'root'|'update'|'camera'>&{environmentIntensity?:number;fogColor?:number;fogDensity?:number}>(()=>kind==='ship'?historicalSea(ship):kind==='cable'?cableSection('fiber'):routedNetwork('router'),[kind,ship]);
  const env=useMemo(()=>{const room=new RoomEnvironment(),pm=new T.PMREMGenerator(gl),tx=pm.fromScene(room,.04).texture;room.dispose();pm.dispose();return tx;},[gl]);
  scene.environment=env;scene.environmentIntensity=built.environmentIntensity??.25;
  scene.fog=new T.FogExp2(built.fogColor??0x040b25,built.fogDensity??.004);
  built.update(t);const pose=built.camera(t),c=camera as T.PerspectiveCamera;
  c.position.set(...pose.eye as [number,number,number]);c.up.set(0,1,0);c.lookAt(...pose.look as [number,number,number]);c.fov=pose.fov;c.updateProjectionMatrix();
  return <primitive object={built.root}/>;
}
function Demo({kind}:{kind:string}){
  const fr=useCurrentFrame(),ship=useShip();
  return <AbsoluteFill style={{background:'#040a20'}}><Finish fr={fr} bloom={.7}>
    <ThreeCanvas width={720} height={1280} dpr={1.5} shadows="percentage" gl={{antialias:true}} camera={{near:.01,far:1500}} onCreated={({gl})=>{gl.toneMapping=T.ACESFilmicToneMapping;gl.toneMappingExposure=.85;gl.setClearColor('#040a20',1);}}>
      <Scene kind={kind} t={fr/30} ship={ship}/>
    </ThreeCanvas>
  </Finish></AbsoluteFill>;
}
registerRoot(()=> <>{['network','cable','ship'].map(kind=><Composition key={kind} id={'Demo-'+kind} component={Demo} defaultProps={{kind}} width={720} height={1280} fps={30} durationInFrames={180}/>)}</>);
