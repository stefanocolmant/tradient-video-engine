import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import {spawnSync} from 'node:child_process';
import {bundle} from '@remotion/bundler';
import {renderFrames,renderStill,selectComposition} from '@remotion/renderer';
import {resolveProfile,openProductionBrowser} from './capture-profile.mjs';

export const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const argv=process.argv.slice(2), command=argv[0]?.startsWith('--')?'preview':argv.shift()??'preview';
const opt={};
for(let i=0;i<argv.length;i++){
 const a=argv[i];if(!a.startsWith('--'))throw Error('Use named options; see README');
 const [k,v]=a.slice(2).split('='); opt[k]=v??(argv[i+1]&&!argv[i+1].startsWith('--')?argv[++i]:true);
}
const presets=JSON.parse(fs.readFileSync(path.join(root,'engines.json')));
if(opt.list){console.log(presets);process.exit(0)}
const preset=presets[opt.engine??'tradient'];if(!preset)throw Error('Unknown engine; use --list');
const source=path.resolve(root,opt.source??preset.source),entry=opt.entry??preset.entry,id=opt.composition??preset.composition;
const scoreFile=opt.score?path.resolve(String(opt.score)):preset.score?path.join(source,preset.score):null;
const props=scoreFile?{score:JSON.parse(fs.readFileSync(scoreFile))}:{};
if(opt.props)Object.assign(props,JSON.parse(fs.readFileSync(path.resolve(String(opt.props)))));
const cli=path.join(root,'node_modules/@remotion/cli/remotion-cli.js');
if(command==='preview'){
 const args=[cli,'studio',path.join(source,entry),'--public-dir',path.join(source,'public')];
 if(opt.port)args.push('--port',String(opt.port));
 if(opt['no-open'])args.push('--no-open');
 if(opt.score||opt.props){fs.mkdirSync(path.join(root,'outputs'),{recursive:true});const f=path.join(root,'outputs/preview-props.json');fs.writeFileSync(f,JSON.stringify(props));args.push('--props',f)}
 console.log(`Open ${id} in Studio. Preview is not an export quality certificate.`);
 const r=spawnSync(process.execPath,args,{cwd:root,stdio:'inherit'});process.exit(r.status??1);
}
if(!['render','proof'].includes(command))throw Error('Expected preview, render or proof');
if(command==='render'&&spawnSync('ffmpeg',['-version'],{stdio:'ignore'}).status!==0)throw Error('Install FFmpeg and add it to PATH, then retry.');
const stamp=new Date().toISOString().replace(/[:.]/g,'-');
const out=path.resolve(String(opt.out??path.join(root,'outputs',`${id}-${stamp}`)));
if(fs.existsSync(out))throw Error('Output exists; choose a NEW --out directory to preserve prior attempts.');
fs.mkdirSync(out,{recursive:true});
// Portable mode preserves rendering settings, records this platform's browser, and
// does not pretend its binary hash must equal the original macOS executable.
process.env.VIDEO_ENGINE_PORTABLE=opt.pinned?'0':'1';
let profile=resolveProfile({source,entry,id,props});
if(!props.score?.captureProfile&&!props.captureProfile)profile={...profile,workers:1};
const serve=await bundle({entryPoint:path.join(source,entry),publicDir:path.join(source,'public'),outDir:path.join(out,'bundle')});
const {browser,environment}=await openProductionBrowser(profile);
const logs=[];const common={serveUrl:serve,inputProps:props,puppeteerInstance:browser,chromiumOptions:{gl:profile.gl},timeoutInMilliseconds:120000,onBrowserLog:e=>logs.push(e)};
let composition,range,result;
try{
 composition=await selectComposition({...common,id});
 const duration=composition.durationInFrames;
 if(command==='proof'){
  const frames=opt.frames?String(opt.frames).split(',').map(Number):[0,Math.floor(duration/4),Math.floor(duration/2),Math.floor(3*duration/4),duration-1];
  if(frames.some(f=>!Number.isInteger(f)||f<0||f>=duration))throw Error('Proof frame outside composition');
  for(const frame of frames){await renderStill({...common,composition,frame,imageFormat:'png',output:path.join(out,`frame-${String(frame).padStart(5,'0')}.png`)});console.log('Captured frame',frame)}
  range=frames;
 }else{
  range=opt.range?String(opt.range).split(':').map(Number):[0,duration-1];
  if(range.length!==2||range.some(f=>!Number.isInteger(f)||f<0||f>=duration)||range[0]>range[1])throw Error('Use inclusive --range start:end inside composition');
  fs.mkdirSync(path.join(out,'frames'));
  let last=0;
  result=await renderFrames({...common,composition,frameRange:range,outputDir:path.join(out,'frames'),imageFormat:'png',concurrency:profile.workers,onFrameUpdate:n=>{if(n-last>=30){console.log('Frames',n,'/',range[1]-range[0]+1);last=n}}});
 }
}finally{await browser.close({silent:true});fs.writeFileSync(path.join(out,'browser.json'),JSON.stringify(logs,null,2))}
const receipt={command,engine:opt.engine??'tradient',entry,id,environment,range,composition:{width:composition.width,height:composition.height,fps:composition.fps,durationInFrames:composition.durationInFrames},props};
fs.writeFileSync(path.join(out,'capture.json'),JSON.stringify(receipt,null,2));
if(command==='render'){
 const files=fs.readdirSync(path.join(out,'frames')).filter(n=>/^element-\d+\.png$/.test(n));
 const count=range[1]-range[0]+1;if(files.length!==count)throw Error('Missing frames');
 const digits=files[0].match(/element-(\d+)/)[1].length;
 const movie=path.join(out,`${id}.mp4`),fps=composition.fps,score=composition.props.score;
 const args=['-v','error','-n','-framerate',String(fps),'-start_number',String(range[0]),'-i',path.join(out,'frames',`element-%0${digits}d.png`)];
 const audio=score?.audio?.asset??preset.audio;
 if(!audio&&result.assetsInfo.assets.some(row=>row.audioAndVideoAssets.length))throw Error("No soundtrack declared for composition with media; use a supported baked soundtrack or Remotion audio stitcher.");
 if(audio){
  const offset=range[0]+(score?.audio?.startFrame??0)+(composition.props.sample?.offset??0);
  // These authored examples contain a single pre-mixed soundtrack. Preserve its frame mapping.
  const rows=result.assetsInfo.assets;
  for(const row of rows){const a=row.audioAndVideoAssets;if(a.length!==1||a[0].volume!==1||a[0].playbackRate!==1||a[0].toneFrequency!==1)throw Error('Custom multi-track audio requires Remotion stitchFramesToVideo; unsupported mix must not be silently flattened.');}
  args.push('-ss',String(offset/fps),'-i',path.join(source,'public',audio),'-map','0:v','-map','1:a');
 }
 args.push('-frames:v',String(count),'-t',String(count/fps),'-c:v','libx264','-crf','18','-preset','medium','-pix_fmt','yuv420p');
 if(audio)args.push('-c:a','aac','-b:a','192k');
 args.push('-movflags','+faststart',movie);
 let run=spawnSync('ffmpeg',args,{stdio:'inherit'});if(run.status!==0)throw Error('FFmpeg export failed');
 run=spawnSync('ffmpeg',['-v','error','-i',movie,'-f','null','-'],{encoding:'utf8'});if(run.status!==0||run.stderr.trim())throw Error('Full decode failed: '+run.stderr);
 receipt.export={file:path.basename(movie),frames:count,sha256:createHash('sha256').update(fs.readFileSync(movie)).digest('hex'),fullDecode:true,audioAsset:audio??null};
 fs.writeFileSync(path.join(out,'capture.json'),JSON.stringify(receipt,null,2));
 console.log('Export:',movie);
}
console.log('Receipt:',path.join(out,'capture.json'));
