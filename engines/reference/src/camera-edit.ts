import {step,ease} from './kit/objects';

// Frame-driven optical handoffs, applied only to scene families with a shared
// travel/scale motif. Captions remain sharp above the moving picture.
const enter=new Set(['earth-pacific','sending','binary','network','landing','seabed','fiber','earth-web','crossing','arrival','photo','earth-atlantic','earth-pacific-return','final-network']);
const exit=new Set(['undersea','earth-pacific','slowdown','network-intro','reroute','landing','hose','fiber','repeater','receive-radio','unlock','ship','earth-atlantic','earth-web-ending']);
export function pictureHandoff(type:string,local:number,duration:number){
  const incoming=enter.has(type)?1-ease(step(local,0,.23)):0;
  const outgoing=exit.has(type)?ease(step(local,duration-.2,duration)):0;
  const p=Math.max(incoming,outgoing),large=type==='undersea'||type==='earth-pacific';
  return {transform:`scale(${1+p*(large?1.8:.32)})`,transformOrigin:'50% 47%',filter:p>.001?`blur(${p*(large?20:9)}px)`:undefined};
}
