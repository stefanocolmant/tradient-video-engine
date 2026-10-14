// @ts-nocheck
// Generic editorial player. Native scene construction is a pinned library dependency.
import React,{useMemo,useEffect,useState} from 'react';
import {AbsoluteFill,Audio,useCurrentFrame,staticFile,delayRender,continueRender,Img} from 'remotion';
import {useThree} from '@react-three/fiber';
import * as T from 'three';
import {RoomEnvironment} from 'three/examples/jsm/environments/RoomEnvironment.js';
import {ThreeCanvas,settle} from '../src/kit/three-canvas';
import {Finish} from '../src/kit/finish';
import {PacketDepth} from '../src/packet-depth';
import {Earth,Route,useEarth,webCable} from '../src/kit/globe';
import {Phone3D,usePhone} from '../src/kit/phone';
import {buildScene} from '../src/scenes';
import {GlobeShot,photoLeader} from '../src/globe-shot';
import {useShip} from '../src/ship-asset';
import {step,mix,ease} from '../src/kit/objects';
import {applySceneParameters} from './scene-parameters';
export function shotAt(score,frame){const t=frame/score.composition.fps;const s=score.shots.find(s=>t>=s.start&&t<s.end);if(!s)throw Error(`No shot at ${frame}`);return s;}
function Camera({eye,look=[0,0,0],fov=46,roll=0,offset=null}){const camera=useThree(s=>s.camera);camera.position.set(...eye);camera.clearViewOffset();camera.up.set(0,1,0);camera.lookAt(...look);camera.rotateZ(roll);camera.fov=fov;camera.near=.01;camera.far=1500;if(offset)camera.setViewOffset(720,1280,offset[0],offset[1],720,1280);camera.updateProjectionMatrix();return null;}
function Audit({frame,shot,local}){const camera=useThree(s=>s.camera);useEffect(()=>{const dir=new T.Vector3();camera.getWorldDirection(dir);console.info('PRODUCTION_AUDIT:'+JSON.stringify({frame,shot:shot.id,local,eye:camera.position.toArray(),direction:dir.toArray(),quaternion:camera.quaternion.toArray(),fov:camera.fov,view:camera.view}));},[frame]);return null;}
function Physical({shot,t,global,phone,earth,ship,score}){
 const type=shot.scene,r=score.render,gl=useThree(s=>s.gl),scene=useThree(s=>s.scene);
 const env=useMemo(()=>{const e=new RoomEnvironment(),pm=new T.PMREMGenerator(gl),tx=pm.fromScene(e,r.environmentBlur).texture;e.dispose();pm.dispose();return tx},[gl]);
 const built=useMemo(()=>{const b=buildScene(type,phone?.photo,earth,ship);return applySceneParameters(b,shot,score);},[type,ship]);
 built.update(t,global);scene.environment=env;scene.environmentIntensity=built.environmentIntensity??r.environmentIntensity;
 scene.fog=new T.FogExp2(built.fogColor??r.fogColor,built.fogDensity??(['network','final-network'].includes(type)?r.networkFogDensity:r.fogDensity));
 const c=built.camera(t,global),p=built.phone,f=score.phone;
 const state=p?(p.state??{mode:p.mode,time:p.mode==='lock'?f.lockTime:f.chatTime,contact:p.mode==='lock'?f.contact:'',date:f.date,messages:[{from:'them',text:f.incoming},{from:'me',text:f.outgoing},{from:'me',photo:true,appear:step(t,...f.photoReveal)}],compose:{photo:1-step(t,...f.photoReveal),pressed:1-Math.abs(step(t,...f.press)*2-1)},notif:step(t,...f.notification),brightness:1,delivered:step(t,...f.delivered)}):null;
 const x=score.supplemental[type];
 return <><Camera {...c}/><primitive object={built.root}/>{built.depthFocus&&<PacketDepth focus={built.depthFocus}/>}{x&&<group position={x.position} scale={x.scale} rotation={x.rotation}><Earth tex={earth} day={x.day} night={x.night}/><Route points={webCable(0,x.radius)} width={x.width} progress={step(t,...x.progress)} color={x.color} glow={x.glow}/></group>}{p&&phone&&<group position={p.position} rotation={p.rotation} scale={p.scale}><Phone3D assets={phone} state={state}/></group>}</>;
}
export function active(l,t,type,local){return (!l.types||l.types.includes(type))&&(l.start===undefined||t>=l.start)&&(l.end===undefined||t<l.end)&&(l.after===undefined||t>l.after)&&(l.localStart===undefined||local>=l.localStart)&&(l.localEnd===undefined||local<l.localEnd)&&(l.localAfter===undefined||local>l.localAfter);}
function Metric({top='24%',value,unit='',sub='',color='#fff',size=94,leftAlign=false,shadow=undefined}){return <div style={{position:'absolute',top,left:leftAlign?42:20,right:20,textAlign:leftAlign?'left':'center',fontSize:size,lineHeight:.95,color,textShadow:shadow??`0 0 16px ${color}77,0 2px 4px #0009`}}>{value}<span style={{fontSize:size*.3,marginLeft:7}}>{unit}</span>{sub&&<div style={{fontSize:26,marginTop:12,color:'#e7f5ff'}}>{sub}</div>}</div>}
function timerValue(t,l){if(t>=l.smallAt&&t<l.end){const found=l.samples.filter(a=>a[0]<=t).at(-1);if(found)return found[1]}let i=0;while(i+1<l.table.length&&t>=l.table[i+1][0])i++;const a=l.table[i],b=l.table[i+1];if(t>=l.hold[0]&&t<l.hold[1])return 200;if(l.interpolate.some(([a,b])=>t>=a&&t<b))return Math.round(mix(a[1],b?b[1]:a[1],b?step(t,a[0],b[0]):1));return a[1];}
function Layer({l,t,local,type}){
 if(!active(l,t,type,local))return null;
 if(l.kind==='static')return <div style={l.style} dangerouslySetInnerHTML={{__html:l.html}}/>;
 if(l.kind==='metric'){const selected=l.cases?.find(c=>active(c,t,type,local));return <Metric {...(selected?.props??l.props)}/>;}
 if(l.kind==='timer'){const big=t<l.smallAt;return <div style={{position:'absolute',top:big?236:169,right:type==='slowdown'?undefined:big?0:44,left:type==='slowdown'?130:big?0:undefined,textAlign:big?'center':'right',color:t<l.paleBefore||t>l.paleAfter?'#e5f5ff':'#86dcff',fontSize:big?92:56,lineHeight:1,textShadow:'0 0 14px #56bfff88'}}>{String(timerValue(t,l)).padStart(3,'0')}<span style={{fontSize:big?27:17,marginLeft:3}}>ms</span></div>;}
 if(l.kind==='packet-count'){const enter=ease(step(t,...l.enter)),exit=ease(step(t,...l.exit));return <div style={{position:'absolute',top:276,left:0,right:0,textAlign:'center',opacity:ease(step(t,...l.opacityEnter))*(1-exit),transform:`translateY(${(1-enter)*12}px) scale(${mix(.84,1,enter)})`,transformOrigin:'50% 65px',fontFamily:'FilmBody',fontWeight:900,color:'#ffbd0a',textShadow:'0 0 24px #ff980080,0 0 7px #fcb51755'}}><div style={{fontSize:118,lineHeight:1,transform:'scaleX(.86)'}}>{l.value}</div><div style={{fontSize:28,fontWeight:750,lineHeight:1,marginTop:3,color:'#f6f8fc',textShadow:'0 0 9px #cbe9ff66,0 2px 3px #000'}}>{l.unit}</div></div>;}
 if(l.kind==='photo-leader')return <svg width='720' height='1280' style={{position:'absolute',inset:0}}><path d={photoLeader(local)} stroke={l.stroke} strokeWidth={l.strokeWidth} fill='none'/></svg>;
 if(l.kind==='image')return <div style={l.style}><Img src={staticFile(l.asset)} style={{width:'100%',height:'100%'}}/></div>;
 if(l.kind==='arrival-count')return <Metric top={type==='arrival'&&local<l.settle?'27%':'14%'} leftAlign={!(type==='arrival'&&local<l.settle)} value={type==='arrival'?String(Math.round(l.received*step(local,...l.arrive))):type==='retransmit'?String(l.received+Math.min(l.retryCount,Math.floor(local/l.retryEvery))):'1,497'} unit={'/ '+l.total.toLocaleString('en-US')} sub={type==='arrival'?'packets':''} color='#ff325c' size={type==='arrival'&&local<l.settle?87:52}/>;
 if(l.kind==='photo-mosaic')return <div style={{position:'absolute',left:l.left,top:l.top,width:l.size,height:l.size,perspective:l.perspective}}>{Array.from({length:l.rows*l.columns},(_,i)=>{const x=i%l.columns,y=Math.floor(i/l.columns),q=ease(step(t,l.revealStart+x*l.columnStartDelay,l.revealEnd+x*l.columnEndDelay));return <div key={i} style={{position:'absolute',left:x*l.cell,top:y*l.cell,width:l.cellSize,height:l.cellSize,backgroundImage:`url(${staticFile(l.asset)})`,backgroundSize:`${l.size}px ${l.size}px`,backgroundPosition:`${-x*l.cell}px ${-y*l.cell}px`,opacity:q,transform:`translate3d(${(1-q)*(x-7)*l.scatter}px,${(1-q)*(y-7)*l.scatter}px,${(1-q)*l.depth}px) rotateY(${(1-q)*l.rotation}deg)`}}/>})}</div>;
 if(l.kind==='captions'){const c=l.cues.find(c=>t>=c.start&&t<c.end);if(!c)return null;const parts=c.text.split(new RegExp('('+l.highlight+')','g'));return <div style={{position:'absolute',left:30,right:30,top:907,fontFamily:'FilmBody',fontSize:35,fontWeight:700,lineHeight:1.08,textAlign:'center',color:'#fff',textShadow:'0 2px 3px #000,1px 0 2px #000,-1px 0 2px #000',WebkitTextStroke:'1px #0008',paintOrder:'stroke fill'}}>{parts.map((x,i)=><span key={i} style={{color:i%2?'#ffc52c':'#fff'}}>{x}</span>)}</div>;}
 throw Error(`Unknown layer ${l.kind}`);
}
export function ProductionReplay({score,sample=null,audit=false}:{score:any;sample?:{offset:number}|null;audit?:boolean}){
 const frame=useCurrentFrame(),fr=frame+(sample?.offset??0),t=fr/score.composition.fps,shot=shotAt(score,fr),local=t-shot.clock.localOrigin;
 const earth=useEarth(),phone=usePhone(score.phone.photoAsset),ship=useShip();
 const [ready,setReady]=useState(false),[wait]=useState(()=>delayRender('production typography'));
 useEffect(()=>{Promise.all(score.fonts.map(f=>new FontFace(f.family,`url(${staticFile(f.asset)})`,{weight:f.weight}).load().then(x=>document.fonts.add(x)))).then(()=>{setReady(true);settle(wait)});return()=>continueRender(wait)},[]);
 const f=score.finish,h=shot.handoff,r=score.render,grain=t>=f.grainWindow[0]&&t<f.grainWindow[1]?mix(f.grain,f.reducedGrain,ease(step(t,...f.grainRamp))):f.grain;
 const p=Math.max(h.enter?1-ease(step(local,0,h.enterDuration)):0,h.exit?ease(step(local,shot.end-shot.start-h.exitDuration,shot.end-shot.start)):0);
 const handoff={transform:`scale(${1+p*h.scaleGain})`,transformOrigin:h.origin,filter:p>.001?`blur(${p*h.blurGain}px)`:undefined};
 return <AbsoluteFill style={{background:r.background,fontFamily:'FilmCondensed,Arial',color:'#fff'}}><Finish fr={fr} bloom={f.bloom} grainAmount={grain}><AbsoluteFill style={handoff}>{ready&&phone&&earth&&ship&&<ThreeCanvas width={score.composition.width} height={score.composition.height} dpr={r.dpr} shadows='percentage' gl={{antialias:true}} camera={{fov:r.fov,near:r.near,far:r.far}} onCreated={({gl})=>{gl.toneMapping=T.ACESFilmicToneMapping;gl.toneMappingExposure=r.exposure;gl.setClearColor(r.clearColor,1);}}>{shot.component==='globe'?<GlobeShot type={shot.scene} t={local} fr={fr} earth={earth}/>:<Physical key={shot.resetKey} shot={shot} t={local} global={t+shot.clock.globalOffset} phone={phone} earth={earth} ship={ship} score={score}/ >}{audit&&<Audit frame={fr} shot={shot} local={local}/>}</ThreeCanvas>}</AbsoluteFill></Finish>{score.layers.map(l=><Layer key={l.id} l={l} t={t} local={local} type={shot.type}/>)}<Audio src={staticFile(score.audio.asset)} startFrom={(sample?.offset??0)+score.audio.startFrame} volume={score.audio.gain}/></AbsoluteFill>;
}
