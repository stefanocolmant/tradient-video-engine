import words from '../words.json';
import specs from './storyboard.json';
import {createClock, type Anchor} from './clock';
export const timelineClock=createClock(words,30);
export const FILM_FRAMES=Math.round((words.at(-1)!.e+1.246667)*30);
const starts=specs.map(s=>timelineClock.frame(s.at as Anchor|number));
export const STORY=specs.map((s,i)=>({...s,start:starts[i]/30,end:(starts[i+1]??FILM_FRAMES)/30}));
export const SHOTS=STORY.map(s=>[s.start,s.end,s.type] as [number,number,string]);
export function nativeTime(t:number,index:number){const s=STORY[index];return s.nativeStart+(t-s.start)/(s.end-s.start)*(s.nativeEnd-s.nativeStart);}
export const TRANSITIONS=STORY.slice(1).map(s=>({id:'enter.'+s.id,fr:Math.round(s.start*30),dur:9,seconds:s.start,what:'Camera handoff into '+s.type,sound:'whoosh',gainDb:-29}));

export function sceneTime(t:number,index:number){return nativeTime(t,index)-STORY[index].nativeStart;}
