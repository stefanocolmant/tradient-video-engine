// @ts-nocheck
import {T,rack} from './kit/objects';
import {mergeGeometries} from 'three/examples/jsm/utils/BufferGeometryUtils.js';

// Rack internals are static. Bake their local transforms once and batch equal
// materials; preserve the visible geometry while avoiding thousands of draws.
let prototype;
export function compactRack(parent,x=0,z=0,scale=1){
  if(!prototype){
    const holder=new T.Group(),original=rack(holder);holder.updateMatrixWorld(true);
    const batches=new Map();
    original.traverse(o=>{
      if(!o.isMesh)return;
      const m=o.material;
      const key=JSON.stringify([m.type,m.color?.getHex(),m.metalness,m.roughness,m.emissive?.getHex(),m.emissiveIntensity,m.opacity,m.transparent,m.side,m.map?.uuid]);
      if(!batches.has(key))batches.set(key,{material:m,geometries:[]});
      const geo=o.geometry.index?o.geometry.toNonIndexed():o.geometry.clone();geo.applyMatrix4(o.matrixWorld);
      batches.get(key).geometries.push(geo);
    });
    prototype=new T.Group();
    for(const {material,geometries} of batches.values()){
      const merged=mergeGeometries(geometries);if(!merged)throw new Error('Rack geometry batch failed');
      const mesh=new T.Mesh(merged,material);mesh.castShadow=mesh.receiveShadow=true;prototype.add(mesh);
      geometries.forEach(g=>g.dispose());
    }
  }
  const result=prototype.clone();result.position.set(x,0,z);result.scale.setScalar(scale);parent.add(result);return result;
}
