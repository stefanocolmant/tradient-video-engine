import {fileURLToPath} from 'node:url';
import fs from 'node:fs';
import path from 'node:path';
import {stateAt,cameraAt,timeline,assertScore} from '../../src/rebuild/runtime.mjs';
import {assertCinematic,resolveDataDirection,recordMotion} from '../../src/rebuild/cinematic-state.mjs';
const dir=path.dirname(fileURLToPath(import.meta.url)),root=path.resolve(dir,'../..');
const score=JSON.parse(fs.readFileSync(path.join(dir,'film.production.json'))),T=timeline(score),D=resolveDataDirection(score);
const notes=`
Begin obliquely between dimensional candles; candle side faces establish depth before the camera pulls toward the monitor surface.
The last candle rises with the market change. Continue pulling out so candle geometry resolves into the chart on the same screen.
Reveal the monitor, keyboard, mouse and unoccupied workstation; keep the candle history continuous through the change of scale.
The unattended desk establishes the missing attention. The display remains active; camera starts returning to the chart.
Approach the qualifying change while the cursor is still away from it. No reaction-time number is displayed.
Cursor contacts the changed candle on notice; its attention ring appears, then begins yielding focus to the rule inspector.
Move from the changed candle to the configured condition; cursor checks the rule on the spoken check.
Cursor travels to PLACE ORDER and depresses on place; the displayed state becomes submitted with filled quantity zero.
Hold the submitted state long enough to distinguish sending from execution. Monitor and desk retain their physical positions.
Cut to the earlier configuration state on the same monitor; no automatic order exists in this earlier view.
Return the last candle to the pre-signal position. Earlier history and the condition identity remain unchanged.
Camera selects the rule editor; condition, size and limit fields begin being entered in sequence.
The three fields become readable as configuration, with no submission motion. Camera keeps the editor large enough to read.
The store-rule action completes and the UI changes to configuration saved. Chart remains before the qualifying signal.
Keep the saved configuration readable while the camera prepares the move into its dimensional explanation.
Leave the editor for the same chart enlarged above the field of market records. This is configuration, not an order.
Establish the glass chart and its metal frame above dense timestamped records; chart history matches the desk dataset.
A wider angle shows the complete pre-signal configuration chart; ambient field lights continue below it.
Start extending the fixed 100.00 threshold across the chart on the condition phrase.
The threshold finishes crossing the chart width; candle bodies gain depth and separate from the glass plane.
Camera lowers toward the quantity plane; the first movement of the three stored size units begins.
Three equal units arrive together, visibly representing configured size three; the full chart becomes supporting context.
Camera rises toward the price axis as the fixed limit plane begins extending in depth.
The 100.05 boundary finishes extending, then the chart rotates and recedes toward the record field.
Land at the data field's low camera pose; three record caps begin rising toward their price heights.
Lift and turn toward the selected records. Their timestamps and prices are the same source cards now elevated on columns.
Move closer to the failed records while the dense surrounding field remains lower and softer.
Inspect the below-threshold values. The configured 100.00 line stays fixed above them; no order appears.
First rejected sample detaches into history, leaving its original column without a duplicate cap.
Second rejected sample follows a separate backward path; the camera travels along the below-threshold row.
The last failed record remains below the threshold as the earlier cards settle into history.
The final failed sample leaves for history; the camera starts moving away from the comparison toward the outgoing area.
Three outbound slots and the zero-order count occupy the foreground. They stay empty throughout the failed evaluations.
Return toward the next sample. The qualifying record is not shown as accepted until its rise reaches the threshold.
The 100.01 record crosses the fixed 100.00 boundary exactly at the passes anchor; its gold column makes the comparison spatial.
Follow the qualifying record into the stored checks; three size units and the fixed limit appear in the same environment.
Pull back just enough to hold evidence, size and price together. They begin converging toward a single instruction position.
The condition, quantity and limit rows assemble into one framed instruction on builds; status stays BUILDING until completion.
The completed O-01 instruction turns toward its network destination. No second instruction is emitted.
Cut on the instruction to the broker's physical rack aisle; it approaches the visible connector rather than floating independently.
The same instruction reaches the broker, scales into the port and becomes submitted. No filled units are shown.
The camera approaches the open ferrule, then enters the connector as routing begins.
Travel inside the A23 fiber construction: concentric microstructure and layered light trails occupy depth around the camera.
Continue through the fiber's finite center, then cut to the accepted instruction in the venue environment.
At the venue, acceptance remains distinct from execution. Three requested cells stay visibly empty.
Move across the acknowledged instruction and the zero-filled quantity; there is still no match or execution report.
Hold that distinction while the camera prepares to enter the market's price levels.
Reveal the dimensional ask book and the arriving three-slot instruction; prices and available unit counts are independent objects.
Approach the best eligible levels. Two units exist at 100.03, one at 100.04, and none at the 100.05 limit.
The 100.04 unit withdraws out of the book; it is removed from available quantity and never becomes a filled unit.
The camera follows the emptied price row toward the two eligible 100.03 units and the waiting three-slot instruction.
Both matching units begin separate arcs from the 100.03 row; each remains a single tracked physical unit during flight.
The first unit lands and changes to a filled slot; the second lands next. Two fills exist only after their separate contacts.
The third slot stays empty while the camera moves toward it. Filled two and remaining one stay conserved.
The remaining slot holds; the nearest available quantity is beyond the configured limit rather than guaranteed to fill.
Move from the waiting unit toward the fixed 100.05 boundary. The two prior fills remain in the foreground.
The camera exposes the gap between the fixed limit and the next 100.06 ask quantity.
The higher-priced quantity remains above the boundary. No unit crosses the limit to manufacture a full fill.
After the price restriction holds, two completed executions begin forming the distinct report from frame1759. The order is not submitted again.
The report finishes forming while price rows part to open an aisle; its return starts at frame1792 toward the receiving software.
Follow the report through the open aisle. At frame1827, requested three, filled two and remaining one update together on receipt.
Hold the received execution log and its O-01 linkage; requested three, filled two and remaining one remain unchanged.
The camera settles on the returned report state. No new fill is inferred while preparing the next comparison.
Reveal two spatial views of the same chart event, labeled manual attention and configured software.
Both views contain the identical qualifying sample and threshold. The manual cursor waits while the camera approaches software.
Approach the software's condition trace while the manual chart stays visible as context.
The configured trace reaches its instruction and begins assembling the three stored units without waiting for the cursor.
Move closer to that configured action; size three and limit 100.05 remain the original settings.
Return the camera toward manual attention. The cursor begins its later response to the same sample.
The manual cursor reaches the marked condition; its separate illustrative action forms, without showing a winning outcome.
Pull back from the action origins before merging the two views. No latency measurement or profit figure is introduced.
Align both charts into one shared market path. The example's different attention timing has not created two markets.
New price candles continue in both directions beyond the original sample, independently of either action.
Keep the continuing chart visible; no guarantee, fill certainty or profit comparison is shown.
Match back into the workstation display. The monitor is the same object and retains its execution record.
Pull out briefly to the desk, then start the final edit/test/monitor workflow.
The same desk holds briefly before the camera approaches the rule inspector; chart monitoring continues.
Highlight and edit the configured rule on define, with its original threshold, size and limit still recognizable.
Replay failed samples before the qualifying sample in the test view; restore the chart on the monitor anchor near this second end.
Inspect monitoring status and the execution record, preserving requested three, filled two and remaining one.
Pull back to the workstation with restrained Tradient identity and ongoing chart updates.
Continue the final pullback and chart motion through the partial final second; no additional pitch or order appears.
`.trim().split('\n');
if(notes.length!==82)throw Error('Need 82 unique second directions; got '+notes.length);
const familySources={desk:['src/rebuild/desk.ts','src/rebuild/desk-state.mjs'],configuration:['src/rebuild/configuration-cinematic.ts'],data:['src/rebuild/data-cinematic.ts','src/rebuild/cinematic-state.mjs'],network:['src/rebuild/network.ts','src/fiber-entry.ts'],acceptance:['src/rebuild/network.ts'],book:['src/rebuild/book-cinematic.ts'],report:['src/rebuild/book-cinematic.ts'],comparison:['src/rebuild/comparison-cinematic.ts']};
const familiesForEvent={};for(const shot of score.shots)for(const e of score.events)if(e.firstFrame<shot.endFrame&&e.endFrame>=shot.startFrame)(familiesForEvent[e.id]??=new Set()).add(shot.scene);
score.bindings=score.events.map(e=>({event:e.id,geometryConsumers:[...new Set([...familiesForEvent[e.id]].flatMap(f=>familySources[f]))],audioConsumer:'production-script/visual-direction-v5/audio.py; visualDirection.soundCues',documentationConsumer:'production-script/visual-direction-v5/describe.mjs',captionConsumer:'Frozen word-aligned captions; no rewritten narration',note:'Data extraction/history also resolve explicit event-bound offsets from visualDirection.data.beats.'}));
const snap=f=>{const s=stateAt(score,f);return{frame:f,orderCreated:s.orderCreated,submitted:s.submitted,accepted:s.accepted,filled:s.filled,remaining:s.remaining,reportCreated:s.reportCreated,reportReceived:s.reported}};
const pose=f=>{const s=stateAt(score,f);if(f>=736&&f<1166)return [99.96,99.98,99.99,100.01].map((price,i)=>{const height=D.thresholdY+(price-100)*D.unitHeight;const p=recordMotion(score,D,i,f,height);return{price,rise:p.rise,historyDeparture:p.drop,columnHeight:height*p.rise*(1-p.drop)}});if(f>=1414&&f<1895)return{withdraw:s.p('withdraw'),matchOne:s.p('fill-one'),matchTwo:s.p('fill-two'),reportFormation:s.p('report-form'),reportReturn:s.p('report-return')};return null;};
const words=JSON.parse(fs.readFileSync(path.join(root,'audio/words.json')));
score.seconds=[];
for(let sec=0,a=0;a<2446;sec++,a+=30){
 const b=Math.min(a+29,2445),shots=score.shots.filter(x=>x.startFrame<=b&&x.endFrame>a),events=score.events.filter(e=>e.firstFrame<=b&&e.endFrame>a),families=[...new Set(shots.map(x=>x.scene))];
 score.seconds.push({firstFrame:a,lastFrameInclusive:b,narration:words.filter(w=>w.start<(b+1)/30&&w.end>a/30).map(w=>w.text).join(' '),visibleCaptions:score.captions.filter(c=>c.start<(b+1)/30&&c.end>a/30).map(c=>c.text),direction:notes[sec],shotIds:shots.map(s=>s.id),actions:events.map(e=>({...e,progressAtStart:T.progress(e.id,a),progressAtEnd:T.progress(e.id,b)})),camera:shots.map(x=>({shot:x.id,start:cameraAt(x.camera,Math.max(a,x.startFrame),score),end:cameraAt(x.camera,Math.min(b,x.endFrame-1),score),easing:'quintic per declared knot; no delta-time accumulation'})),layers:families.map(f=>({scene:f,construction:score.recipes[f].geometry??score.recipes[f].construction,supportingMotionAndHold:score.recipes[f].hold,lightMaterialResponse:score.recipes[f].lighting??score.recipes[f].materials})),stateBefore:snap(a),stateAfter:snap(b),visibleDataAtStart:pose(a),visibleDataAtEnd:pose(b),sound:score.visualDirection.soundCues.map(c=>({...c,frame:T.get(c.event)[c.boundary]+c.offset})).filter(c=>c.frame>=a&&c.frame<=b),continuityIn:sec?notes[sec-1]:'Start on shared chart SAMPLE-A',continuityOut:sec<81?notes[sec+1]:'Film ends after frame2445; no post-roll action'});
}
if(!score.recipes.desk.technique.includes('V5 adds'))score.recipes.desk.technique+=' V5 adds .48 maximum candle depth during the opening, easing back to native .08 by frame45. Monitor geometry is the actual sharp hero group; the room and desk use the separate depth pass. Macro optics come from visualDirection.desk.';
score.documentationPolicy={canonical:'production-script/visual-direction-v5/film.production.json',rendererConsumes:['composition','shots.scene/startFrame/endFrame/camera','events.id/firstFrame/endFrame/anchorFrame','visualDirection.*.camera','visualDirection.desk macro optics','visualDirection.configuration departure/headerOutFrame','visualDirection.data geometry/lighting/beats/event-bound offsets','visualDirection.execution levels/priceScale/reportAisle','visualDirection.network camera/hideRackFrame','marketData','futureMarketData','render','captions','audio.asset/startFrame','engineDefaults.fonts'],audioConsumes:['visualDirection.soundCues event/boundary/offset/type/gain','events','voiceSha256'],documentOnly:['seconds','recipes','bindings','identities labels','status','visualDirection.*.version provenance'],fixedInComponents:'Authored dimensions, material formulas and trajectories are described in recipes and remain source code, not automatically generated by prose. Changing to wholly new visuals still requires new geometry, choreography and moving review.',qualityGate:'A23 replay proved reproduction, not original scene design. V4 is rejected. Technical correctness cannot approve aesthetic quality.'};
assertScore(score);assertCinematic(score);
fs.writeFileSync(path.join(dir,'film.production.json'),JSON.stringify(score,null,2)+'\n');fs.writeFileSync(path.join(dir,'props.json'),JSON.stringify({score},null,2)+'\n');
const out=['# V5 production script — candidate, not an approved benchmark','',`81.533333s / 2446 frames / 30fps / 720 × 1280. Narration source ${score.voiceSha256}.`,'','## What this package controls','',JSON.stringify(score.documentationPolicy,null,2),'','## Construction recipes'];
for(const [name,recipe]of Object.entries(score.recipes))out.push('',`### ${name}`,'',...Object.entries(recipe).map(([k,v])=>`**${k}:** ${Array.isArray(v)?v.join('; '):v}`));
out.push('','## Exact second-by-second direction');
for(const s of score.seconds){out.push('',`### ${(s.firstFrame/30).toFixed(2)}–${((s.lastFrameInclusive+1)/30).toFixed(2)}s · frames ${s.firstFrame}–${s.lastFrameInclusive}`,'',`**Narration:** ${s.narration||'(pause)'}`,`**Captions:** ${s.visibleCaptions.join(' / ')}`,`**Visible direction:** ${s.direction}`,`**Events:** ${s.actions.length?s.actions.map(e=>`${e.id}: ${e.action}; ${e.firstFrame}→${e.endFrame}, spoken anchor ${e.anchorFrame}, progress ${e.progressAtStart.toFixed(3)}→${e.progressAtEnd.toFixed(3)}.`).join(' '):'No new primary action; the described state and camera progression continue.'}`,`**Camera:** ${JSON.stringify(s.camera)}`,`**Layers, light and hold:** ${JSON.stringify(s.layers)}`,`**State:** ${JSON.stringify(s.stateBefore)} → ${JSON.stringify(s.stateAfter)}`,`**Visible data:** ${JSON.stringify(s.visibleDataAtStart)} → ${JSON.stringify(s.visibleDataAtEnd)}`,`**Sound:** ${s.sound.length?JSON.stringify(s.sound):'Continuous unchanged Brian performance and music; no additional effect onset in this second.'}`,`**Handoff:** ${s.continuityIn} → ${s.continuityOut}`);}
fs.writeFileSync(path.join(dir,'PRODUCTION-SCRIPT.md'),out.join('\n')+'\n');
fs.writeFileSync(path.join(dir,'PRODUCTION-SCRIPT.html'),'<!doctype html><meta charset="utf-8"><title>V5 production script</title><style>body{background:#0b1320;color:#dce8ef;max-width:1100px;margin:40px auto;padding:24px;font:15px/1.6 system-ui}pre{white-space:pre-wrap;overflow-wrap:anywhere}</style><pre>'+out.join('\n').replaceAll('&','&amp;').replaceAll('<','&lt;')+'</pre>');
console.log(JSON.stringify({seconds:score.seconds.length,events:score.events.length,recipes:Object.keys(score.recipes).length,soundCues:score.visualDirection.soundCues.length}));
