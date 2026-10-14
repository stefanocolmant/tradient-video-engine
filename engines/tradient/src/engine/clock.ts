export type Word = {w: string; s: number; e: number};
export type Anchor = {phrase: string; nth?: number; edge?: 'start' | 'end'; offset?: number};
export type EventSpec = {id: string; at: Anchor | number; until?: Anchor | number; what: string; sound?: string; gainDb?: number; x?: number};
export type Event = Omit<EventSpec, 'at' | 'until'> & {fr: number; dur: number; seconds: number};
const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9']/g, '');

// Resolves phrases across ASR's split numeric tokens ("4", ",000") without
// rewriting the raw word alignment. Ambiguous repetitions require an occurrence.
export function createClock(words: Word[], fps = 30) {
  const at = (anchor: Anchor | number): number => {
    if (typeof anchor === 'number') return anchor;
    const wanted = norm(anchor.phrase), hits: [number, number][] = [];
    for (let i = 0; i < words.length; i++) {
      let text = '';
      for (let j = i; j < words.length && text.length <= wanted.length; j++) {
        text += norm(words[j].w);
        if (text === wanted) {hits.push([i, j]); break;}
        if (!wanted.startsWith(text)) break;
      }
    }
    if (hits.length > 1 && anchor.nth === undefined) throw new Error(`Ambiguous cue: ${anchor.phrase} (${hits.length} matches)`);
    const hit = hits[anchor.nth ?? 0];
    if (!hit) throw new Error(`Missing cue: ${anchor.phrase}`);
    return words[anchor.edge === 'end' ? hit[1] : hit[0]][anchor.edge === 'end' ? 'e' : 's'] + (anchor.offset ?? 0);
  };
  const frame = (anchor: Anchor | number) => Math.round(at(anchor) * fps);
  const events = (spec: EventSpec[]): Event[] => spec.map(({at: start, until, ...event}) => {
    const fr = frame(start), end = until === undefined ? fr + 1 : frame(until);
    if (end <= fr) throw new Error(`Invalid event interval: ${event.id}`);
    return {...event, fr, dur: end - fr, seconds: fr / fps};
  });
  return {at, frame, events, fps};
}
