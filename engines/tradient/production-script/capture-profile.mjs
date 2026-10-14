import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import {createHash} from 'node:crypto';
import {ensureBrowser,openBrowser} from '@remotion/renderer';

// Capture state is part of the production recipe, not an implicit workstation
// preference. Original controls use this same profile without changing source.
export function resolveProfile({source,entry,id,props={}}){
 let declared=props.captureProfile??props.score?.captureProfile;
 if(!declared&&id==='ProductionScriptReplay'){
  const file=path.resolve(source,path.dirname(entry),'a23.production.json');
  if(fs.existsSync(file))declared=JSON.parse(fs.readFileSync(file)).captureProfile;
 }
 const profile={id:'legacy-native-diagnostic',gl:'angle',canvasProfile:'native',workers:2,fromSurface:true,...declared};
 const overrides={};
 for(const [env,key,convert] of [['PRODUCTION_GL','gl',String],['PRODUCTION_CANVAS','canvasProfile',String],['PRODUCTION_WORKERS','workers',Number]]){
  if(process.env[env]!==undefined){profile[key]=convert(process.env[env]);overrides[env]=profile[key];}
 }
 if(process.env.DISABLE_FROM_SURFACE){profile.fromSurface=false;overrides.DISABLE_FROM_SURFACE=process.env.DISABLE_FROM_SURFACE;}
 if(!['native','cpu-preserved'].includes(profile.canvasProfile))throw Error('Unknown canvas profile');
 if(![1,2].includes(profile.workers))throw Error('Capture workers must be 1 or 2');
 if(!profile.fromSurface)throw Error('A23 requires fromSurface screenshots; retain prior unsupported-path diagnostic separately');
 return {...profile,overrides};
}

export async function openProductionBrowser(profile){
 const executable=await ensureBrowser({chromeMode:'headless-shell'});
 if(!executable.path)throw Error('Pinned Chromium executable unavailable');
 const sha256=createHash('sha256').update(fs.readFileSync(executable.path)).digest('hex');
 if(profile.browserSha256&&profile.browserSha256!==sha256)throw Error(`Browser hash mismatch: ${sha256}`);
 // macOS headless-shell resource lookup fails in deeply nested extracted paths.
 // Copy the complete downloaded runtime to a short, hash-addressed cache; never substitute a browser version.
 let launchPath=executable.path;
 if(process.platform==='darwin'){
  const cache=path.join(os.tmpdir(),'tradient-chromium-'+sha256.slice(0,12));
  if(!fs.existsSync(cache))fs.cpSync(path.dirname(executable.path),cache,{recursive:true});
  launchPath=path.join(cache,path.basename(executable.path));
  for(const name of [path.basename(executable.path),'icudtl.dat']){
   const a=createHash('sha256').update(fs.readFileSync(path.join(path.dirname(executable.path),name))).digest('hex');
   const b=createHash('sha256').update(fs.readFileSync(path.join(cache,name))).digest('hex');
   if(a!==b)throw Error('Browser runtime cache mismatch: '+name);
  }
 }
 const browser=await openBrowser('chrome',{browserExecutable:launchPath,chromiumOptions:{gl:profile.gl}});
 if(profile.canvasProfile==='cpu-preserved'){
  const newPage=browser.newPage.bind(browser);
  browser.newPage=async options=>{
   const page=await newPage(options);
   await page.evaluateOnNewDocument(()=>{
    const original=HTMLCanvasElement.prototype.getContext;
    HTMLCanvasElement.prototype.getContext=function(kind,...options){
     const settings=kind==='2d'?[{...(options[0]??{}),willReadFrequently:true}]:kind==='webgl2'?[{...(options[0]??{}),preserveDrawingBuffer:true}]:options;
     return original.call(this,kind,...settings);
    };
   });
   return page;
  };
 }
 return {browser,environment:{browserExecutable:launchPath,downloadedExecutable:executable.path,browserSha256:sha256,node:process.version,platform:process.platform,architecture:process.arch,osRelease:os.release(),profile}};
}
