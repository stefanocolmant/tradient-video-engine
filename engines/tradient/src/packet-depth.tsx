// A scene-local depth pass. The hero is drawn afterward with its authored colors
// and sharp lettering; all parameters come from the deterministic native clock.
import {useEffect,useMemo} from 'react';
import {useFrame,useThree} from '@react-three/fiber';
import {Color,NormalBlending,Object3D} from 'three';
import {EffectComposer} from 'three/examples/jsm/postprocessing/EffectComposer.js';
import {RenderPass} from 'three/examples/jsm/postprocessing/RenderPass.js';
import {BokehPass} from 'three/examples/jsm/postprocessing/BokehPass.js';
import {OutputPass} from 'three/examples/jsm/postprocessing/OutputPass.js';

type Focus={active:boolean;hero:Object3D;skies:Object3D[];distance:number;aperture:number;maxblur:number};

export function PacketDepth({focus}: {focus:Focus}) {
  const {gl,scene,camera,size}=useThree();
  const pipeline=useMemo(()=>{
    const composer=new EffectComposer(gl),render=new RenderPass(scene,camera);
    const bokeh=new BokehPass(scene,camera,{focus:25,aperture:0,maxblur:.009});
    // Keep the authored display-space sky out of the linear color pipeline.
    // Preserve coverage through the blur, then unpremultiply before tone mapping.
    composer.renderTarget1.samples=4;composer.renderTarget2.samples=4;
    render.clearColor=new Color(0);render.clearAlpha=0;
    bokeh.materialBokeh.fragmentShader=bokeh.materialBokeh.fragmentShader.replace(
      'gl_FragColor.a = 1.0;', 'gl_FragColor.rgb /= max(gl_FragColor.a, 0.00001);');
    const output=new OutputPass();output.material.transparent=true;
    output.material.blending=NormalBlending;output.material.depthTest=false;output.material.depthWrite=false;
    composer.addPass(render);composer.addPass(bokeh);composer.addPass(output);
    return {composer,render,bokeh,output};
  },[gl,scene,camera]);
  useEffect(()=>{pipeline.composer.setPixelRatio(gl.getPixelRatio());pipeline.composer.setSize(size.width,size.height);},[pipeline,gl,size.width,size.height]);
  useEffect(()=>()=>{pipeline.render.dispose();pipeline.bokeh.dispose();pipeline.output.dispose();pipeline.composer.dispose();},[pipeline]);
  useFrame(()=>{
    if(!focus.active){gl.render(scene,camera);return;}
    const oldMask=camera.layers.mask,oldVisible=focus.hero.visible,oldSky=focus.skies.map(o=>o.visible),oldClear=gl.autoClear,oldTarget=gl.getRenderTarget();
    try {
      camera.layers.set(2);gl.render(scene,camera);gl.autoClear=false;
      camera.layers.mask=oldMask;focus.skies.forEach(o=>o.visible=false);focus.hero.visible=false;
      const uniforms=pipeline.bokeh.uniforms as Record<string,{value:number}>;
      uniforms.focus.value=focus.distance;
      uniforms.aperture.value=focus.aperture;
      uniforms.maxblur.value=focus.maxblur;
      pipeline.composer.render(0);
      focus.hero.visible=oldVisible;
      gl.setRenderTarget(null);gl.autoClear=false;gl.clearDepth();camera.layers.set(1);gl.render(scene,camera);
    } finally {
      focus.hero.visible=oldVisible;focus.skies.forEach((o,i)=>o.visible=oldSky[i]);camera.layers.mask=oldMask;gl.autoClear=oldClear;gl.setRenderTarget(oldTarget);
    }
  },1);
  return null;
}
