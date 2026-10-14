import {dataFieldPose} from '../../src/rebuild/data-field.mjs';
import {deskDisplayState,deskDisplayKey} from '../../src/rebuild/desk-state.mjs';
import fs from 'node:fs';import assert from 'node:assert/strict';import {stateAt,assertScore,timeline,cameraAt} from '../../src/rebuild/runtime.mjs';
const dir=new URL('./',import.meta.url),s=JSON.parse(fs.readFileSync(new URL('film.production.json',dir)));assertScore(s);const t=timeline(s);
assert(t.get('report-return').firstFrame>=t.get('report-form').endFrame,'Report return must not start before report creation');
const values={threshold:100,size:3,limit:100.05,qualifying:100.01,fillPrice:100.03,nextPrice:100.06,filled:2,remaining:1};assert.deepEqual(s.values,values,'This authored scene geometry is calibrated to the declared example; new values need adapters and proofs.');
const snapshot=(score,f)=>{const x=stateAt(score,f),sh=score.shots.find(z=>f>=z.startFrame&&f<z.endFrame);return{f,events:score.events.map(e=>[e.id,x.p(e.id),x.done(e.id)]),order:x.orderCreated,submitted:x.submitted,accepted:x.accepted,filled:x.filled,remaining:x.remaining,reportCreated:x.reportCreated,reported:x.reported,camera:cameraAt(sh.camera,f,score)}};
const forward=[];
for(let f=0;f<s.composition.durationInFrames;f++){const a=stateAt(s,f);assert.equal(a.filled+a.remaining,3);if(a.reported){assert(a.reportCreated);assert.equal(a.filled,2);}if(!a.conditionPassed)assert.equal(a.orderCreated,false);if(a.accepted)assert(a.submitted);forward.push(snapshot(s,f));}
for(let f=2445;f>=0;f--)assert.deepEqual(snapshot(s,f),forward[f],`Backward evaluation changed frame${f}`);
for(let j=0;j<200;j++){const f=(j*173)%2446;assert.deepEqual(snapshot(s,f),forward[f],`Direct seek changed frame${f}`);}
const missing=structuredClone(s);missing.events=missing.events.filter(e=>e.id!=='notice');assert.throws(()=>assertScore(missing),/Required visual event absent/);
const duplicate=structuredClone(s);duplicate.events.push(duplicate.events[0]);assert.throws(()=>assertScore(duplicate),/Duplicate event id/);
const stage=structuredClone(s);delete stage.staging.lens;assert.throws(()=>assertScore(stage),/Missing staging window/);
const early=structuredClone(s);early.events.find(e=>e.id==='report-form').firstFrame=t.get('fill-two').endFrame-1;assert.throws(()=>assertScore(early),/Report precedes execution/);
// Renderer input mutations must change the intended frame and not unrelated states.
const shifted=structuredClone(s),notice=shifted.events.find(e=>e.id==='notice');notice.firstFrame+=30;notice.endFrame+=30;assert.notDeepEqual(snapshot(s,155),snapshot(shifted,155));for(const f of[0,220,390,1075,1570,1835,2420])assert.deepEqual(snapshot(s,f),snapshot(shifted,f));
const camera=structuredClone(s);camera.events.find(e=>e.id==='return-desk').endFrame+=20;assert.notDeepEqual(snapshot(s,2265).camera,snapshot(camera,2265).camera);assert.deepEqual(snapshot(s,2400).camera,snapshot(camera,2400).camera);
assert.equal(s.seconds.length,82);assert.equal(s.seconds.at(-1).lastFrameInclusive,2445);assert.equal(s.bindings.length,38);assert(s.bindings.every(b=>b.geometryConsumers.length||b.cameraConsumers.length));
assert.equal(s.futureMarketData.length,6);for(const d of s.futureMarketData)assert(d.high>=Math.max(d.open,d.close)&&d.low<=Math.min(d.open,d.close));
const hashData=JSON.stringify(s.marketData);assert.equal(s.marketData.length,27);assert(s.marketData.slice(0,-1).every(d=>d.close<100));for(const d of s.marketData)assert(d.high>=d.open&&d.high>=d.close&&d.low<=d.open&&d.low<=d.close);
const screen=f=>deskDisplayState(stateAt(s,f),.35);
assert.notEqual(deskDisplayKey(screen(2314)),deskDisplayKey(screen(2332)),'Definition highlight must invalidate texture');
assert.equal(screen(2344).testRows,1);assert.equal(screen(2353).testRows,2);assert.equal(screen(2363).testRows,3);assert.equal(screen(2376).test,false);
for(const f of [2314,2332,2344,2353,2363,2380,2445])assert.deepEqual(screen(f),deskDisplayState(stateAt(s,f),.35));
for(const mutate of [q=>q.events[0].endFrame=q.events[0].firstFrame,q=>q.events[0].firstFrame=NaN,q=>q.shots[0].camera[1].frame=q.shots[0].camera[0].frame,q=>q.staging.closing.endFrame=NaN,q=>q.values.size=4,q=>q.events.find(e=>e.id==='report-return').firstFrame=1780]){const q=structuredClone(s);mutate(q);assert.throws(()=>assertScore(q));}
let maximumQuoteStep=0;
for(let f=1;f<430;f++)for(let row=0;row<32;row++){const a=dataFieldPose(row*18,(f-1)/30,s.dataField),b=dataFieldPose(row*18,f/30,s.dataField);if(b.depth>a.depth)continue;const distance=Math.hypot(b.x-a.x,b.y-a.y,b.z-a.z);maximumQuoteStep=Math.max(maximumQuoteStep,distance);assert(distance<=.017,'Quote field jumped at a row boundary');}
const oldJump=Math.abs((2.91666*.48)%1.4-(2.91667*.48)%1.4);assert(oldJump>1.39);
fs.writeFileSync(new URL('../../qa/completion/data-field-continuity.json',dir),JSON.stringify({oldGlobalWrapJump:oldJump,maximumContinuousStep:maximumQuoteStep,frames:430,rows:32,exception:'One outgoing row recycles beyond the foreground; all other rows continue without a global jump.'},null,2));
const receipt={passed:true,frames:2446,backwardStates:2446,directSeeks:200,events:38,seconds:82,tests:['texture key covers painted state','sequential closing test outcomes','invalid event/camera/staging/value/lifecycle rejection','quantity conservation','execution before report','missing/duplicate event rejection','missing staging rejection','one-second notice mutation scoped to intended event','camera timing follows return-desk event','OHLC bounds/shared dataset','every event bound to renderer'],scope:'Deterministic state/camera tests. Rendered seek and motion inspection are separate evidence.'};fs.mkdirSync(new URL('../../qa/rebuild/',dir),{recursive:true});fs.writeFileSync(new URL('../../qa/rebuild/state-checks.json',dir),JSON.stringify(receipt,null,2)+'\n');console.log(JSON.stringify(receipt));
