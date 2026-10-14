import fs from 'node:fs';
import path from 'node:path';
import {bundle} from '@remotion/bundler';
import {renderFrames,renderStill,selectComposition} from '@remotion/renderer';
import {resolveProfile,openProductionBrowser} from './capture-profile.mjs';
const [source,entry,id,out,propsFile,mode='full',rangeText]=process.argv.slice(2);
if(!source||!entry||!id||!out)throw Error('capture source entry id output props [full|proof]');
if(fs.existsSync(path.join(out,'COMPLETE.json')))throw Error('Completed capture exists; preserve it');
fs.mkdirSync(out,{recursive:true});
const props=propsFile&&propsFile!=='-'?JSON.parse(fs.readFileSync(propsFile)):{};
fs.writeFileSync(path.join(out,'INPUT-PROPS.json'),JSON.stringify(props,null,2));
const serve=await bundle({entryPoint:path.resolve(source,entry),publicDir:path.resolve(source,'public'),outDir:path.resolve(out,'bundle')});
const profile=resolveProfile({source,entry,id,props});
const {gl,workers}=profile;
const {browser,environment}=await openProductionBrowser(profile);
fs.writeFileSync(path.join(out,'CAPTURE-CONFIG.json'),JSON.stringify({...profile,environment,imageFormat:'png',source:path.resolve(source),entry,id,propsFile,mode,rangeText},null,2));
const common={serveUrl:serve,inputProps:props,puppeteerInstance:browser,chromiumOptions:{gl},timeoutInMilliseconds:120000};
const composition=await selectComposition({...common,id,onBrowserLog:e=>console.error(JSON.stringify(e))}).catch(async error=>{await browser.close({silent:true});throw error});
fs.writeFileSync(path.join(out,'RESOLVED-PROPS.json'),JSON.stringify(composition.props,null,2));
fs.writeFileSync(path.join(out,'composition.json'),JSON.stringify({id:composition.id,width:composition.width,height:composition.height,fps:composition.fps,durationInFrames:composition.durationInFrames},null,2));
const log=fs.createWriteStream(path.join(out,'browser.log'),{flags:'a'});
const onBrowserLog=e=>{log.write(JSON.stringify(e)+'\n');};
try{
 if(mode==='proof'){
  const frames=props.proofFrames??[0,100,240,300,410,600,710,940,1130,1270,1375,1550,1660,1775,2000,2200,2300,2445,2600,2750,2850,2980,3150,3360,3440,3590,3750,3890,4030,4050,4150,4200,4330,4440,4650,4820];
  for(const frame of frames){await renderStill({...common,composition,frame,imageFormat:'png',output:path.join(out,`frame-${String(frame).padStart(5,'0')}.png`),onBrowserLog});console.log('frame',frame);}
 }else{
  const framesDir=path.join(out,'frames');fs.mkdirSync(framesDir,{recursive:true});
  if(fs.existsSync(path.join(out,'COMPLETE.json')))throw Error('Completed capture exists; preserve it');
  let last=0;
  const frameRange=rangeText?rangeText.split(':').map(Number):undefined;
  if(frameRange&&!(frameRange.length===2&&frameRange.every(Number.isInteger)&&frameRange[0]>=0&&frameRange[1]>=frameRange[0]&&frameRange[1]<composition.durationInFrames))throw Error('Bad inclusive frame range');
  const result=await renderFrames({...common,composition,frameRange,outputDir:framesDir,imageFormat:'png',concurrency:workers,onBrowserLog,onFrameUpdate:(n)=>{if(n-last>=60){last=n;console.log('frames',n,'/',composition.durationInFrames);}}});
  fs.writeFileSync(path.join(out,'COMPLETE.json'),JSON.stringify({frameCount:frameRange?frameRange[1]-frameRange[0]+1:composition.durationInFrames,frameRange:frameRange??[0,composition.durationInFrames-1],result},null,2));
 }
}finally{await browser.close({silent:true});log.end();}
