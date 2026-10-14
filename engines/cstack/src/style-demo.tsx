import React, {useMemo} from 'react';
import {AbsoluteFill, Composition, registerRoot, useCurrentFrame} from 'remotion';
import {useThree} from '@react-three/fiber';
import * as T from 'three';
import {RoomEnvironment} from 'three/examples/jsm/environments/RoomEnvironment.js';
import {ThreeCanvas} from './kit/three-canvas';
import {Finish} from './kit/finish';
import {underseaScene} from './undersea';

const Set = ({seconds}: {seconds: number}) => {
  const {camera, scene, gl} = useThree();
  const built = useMemo(() => underseaScene(), []);
  const environment = useMemo(() => {
    const room = new RoomEnvironment(), pm = new T.PMREMGenerator(gl);
    const texture = pm.fromScene(room, .04).texture;
    room.dispose(); pm.dispose(); return texture;
  }, [gl]);
  scene.environment = environment;
  scene.environmentIntensity = built.environmentIntensity;
  scene.fog = new T.FogExp2(built.fogColor, built.fogDensity);
  built.update(seconds);
  const pose = built.camera(seconds), c = camera as T.PerspectiveCamera;
  c.position.set(pose.eye[0], pose.eye[1], pose.eye[2]);
  c.lookAt(pose.look[0], pose.look[1], pose.look[2]);
  c.fov = pose.fov;
  c.setViewOffset(720, 1280, pose.offset[0], pose.offset[1], 720, 1280);
  c.updateProjectionMatrix();
  return <primitive object={built.root}/>;
};
const UnderseaStyle = () => {
  const fr = useCurrentFrame();
  return <AbsoluteFill style={{background: '#020615'}}>
    <Finish fr={fr} bloom={.8}>
      <ThreeCanvas width={720} height={1280} dpr={1.5} shadows="percentage"
        gl={{antialias: true}} camera={{near: .01, far: 1500}}
        onCreated={({gl}) => {gl.toneMapping = T.ACESFilmicToneMapping; gl.toneMappingExposure = .85; gl.setClearColor('#040a20', 1);}}>
        <Set seconds={fr / 30}/>
      </ThreeCanvas>
    </Finish>
  </AbsoluteFill>;
};
registerRoot(() => <Composition id="UnderseaStyle" component={UnderseaStyle} durationInFrames={205} fps={30} width={720} height={1280}/>);
