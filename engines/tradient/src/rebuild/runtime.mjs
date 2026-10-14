export const clamp=x=>Math.max(0,Math.min(1,x));
export const ease=x=>{x=clamp(x);return x*x*x*(x*(x*6-15)+10)};
export function timeline(score){
 for(const e of score.events)if(!Number.isInteger(e.firstFrame)||!Number.isInteger(e.endFrame)||e.firstFrame<0||e.endFrame<=e.firstFrame||e.endFrame>=score.composition.durationInFrames)throw Error('Invalid event range: '+e.id);
 const events=new Map(score.events.map(e=>[e.id,e]));
 if(events.size!==score.events.length)throw Error('Duplicate event id');
 const get=id=>{const e=events.get(id);if(!e)throw Error('Required visual event absent: '+id);return e};
 return {get,progress:(id,frame)=>{const e=get(id);return ease((frame-e.firstFrame)/(e.endFrame-e.firstFrame));},done:(id,frame)=>frame>=get(id).endFrame};
}
export function stateAt(score,frame){
 const t=timeline(score),p=id=>t.progress(id,frame),done=id=>t.done(id,frame);
 const filled=Number(done('fill-one'))+Number(done('fill-two'));
 const stage=id=>{const x=score.staging[id];if(!x)throw Error('Missing staging window: '+id);return {active:frame>=x.firstFrame&&frame<x.endFrame,seconds:(frame-x.firstFrame)/30,firstFrame:x.firstFrame,endFrame:x.endFrame};};
 return {frame,seconds:frame/30,p,done,at:id=>frame>=t.get(id).anchorFrame,stage,values:score.values,identities:score.identities,orderCreated:done('build'),submitted:done('broker-arrive'),accepted:done('route'),filled,remaining:3-filled,reported:done('report-return'),reportCreated:done('report-form'),conditionPassed:done('passes')};
}
export function cameraAt(knots,frame,score){
 knots=knots.map(k=>k.eventBinding?{...k,frame:timeline(score).get(k.eventBinding.id)[k.eventBinding.boundary]+k.eventBinding.offset}:k);
 if(knots.some((k,i)=>!Number.isFinite(k.frame)||!Number.isFinite(k.fov)||k.eye.length!==3||k.target.length!==3||![...k.eye,...k.target].every(Number.isFinite)||(i&&k.frame<=knots[i-1].frame)))throw Error('Invalid camera path');
 if(knots.length<2)throw Error('Explicit camera path required');let i=0;while(i<knots.length-2&&frame>knots[i+1].frame)i++;
 const a=knots[i],b=knots[i+1],p=ease((frame-a.frame)/(b.frame-a.frame));
 return {eye:a.eye.map((v,k)=>v+(b.eye[k]-v)*p),target:a.target.map((v,k)=>v+(b.target[k]-v)*p),fov:a.fov+(b.fov-a.fov)*p};
}
export function assertScore(s){
 if(!s.render||!['bloom','grain','exposure','environmentIntensity','fogDensity','dpr','aperture','maxblur','cameraNear','cameraFar','captionTop','captionSize'].every(k=>Number.isFinite(s.render[k])))throw Error('Explicit render settings required');
 if(!s.dataField||!['rows','cols','spacing','bendStart','bendRadius','speed'].every(k=>Number.isFinite(s.dataField[k])&&s.dataField[k]>0))throw Error('Explicit data field construction required');
 if(s.schemaVersion!==2)throw Error('Rebuild specification v2 required');
 if(s.shots[0].startFrame!==0||s.shots.at(-1).endFrame!==s.composition.durationInFrames)throw Error('Incomplete shot coverage');
 s.shots.forEach((x,i)=>{if(i&&s.shots[i-1].endFrame!==x.startFrame)throw Error('Gap/overlap');if(!s.recipes[x.scene])throw Error('Missing recipe');});
 const required=['market-change','notice','manual-check','manual-submit','before-signal','configure','store-rule','condition-detail','size-detail','limit-detail','data-arrive','inspect','ignore-updates','fail','no-order','passes','remaining-checks','build','broker-arrive','route','not-filled','book-arrive','withdraw','fill-one','fill-two','wait','above-limit','report-form','report-return','compare','automatic-action','manual-action','no-prediction','no-guarantee','return-desk','define-end','test-end','monitor-end'];
 for(const k of ['earlier','closing','lens','outgoing','history','data-family','connector'])if(!s.staging?.[k])throw Error('Missing staging window: '+k);
 for(const [k,v] of Object.entries(s.staging))if(!Number.isInteger(v.firstFrame)||!Number.isInteger(v.endFrame)||v.firstFrame<0||v.endFrame<=v.firstFrame||v.endFrame>s.composition.durationInFrames)throw Error('Invalid staging range: '+k);
 for(const shot of s.shots)cameraAt(shot.camera,shot.startFrame,s);
 const example={threshold:100,size:3,limit:100.05,qualifying:100.01,fillPrice:100.03,nextPrice:100.06,filled:2,remaining:1};for(const [k,v]of Object.entries(example))if(s.values[k]!==v)throw Error('Uncalibrated example value: '+k+' requires authored geometry and proof');
 const t=timeline(s);required.forEach(t.get);if(s.events.length!==required.length)throw Error('Unbound visual event');
 if(t.get('report-form').firstFrame<t.get('fill-two').endFrame)throw Error('Report precedes execution');
 if(t.get('report-return').firstFrame<t.get('report-form').endFrame)throw Error('Report return precedes creation');
 for(const [a,b]of [['passes','build'],['build','broker-arrive'],['broker-arrive','route'],['route','fill-one']])if(t.get(b).firstFrame<t.get(a).endFrame)throw Error('Invalid lifecycle '+a+' -> '+b);
 return true;
}
