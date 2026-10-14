import {useEffect,useState} from 'react';
import {delayRender,cancelRender,staticFile} from 'remotion';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import {Group} from 'three';
import {settle} from './kit/three-canvas';

export function useShip(){
  const [ship,setShip]=useState<Group|null>(null);
  const [handle]=useState(()=>delayRender('CC0 sailing-vessel model'));
  useEffect(()=>{new GLTFLoader().load(staticFile('ship/ship_pinnace.gltf'),asset=>{setShip(asset.scene);settle(handle);},undefined,e=>cancelRender(e));},[handle]);
  return ship;
}
