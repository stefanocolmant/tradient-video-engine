// When things happen inside each scene type (items arriving, a count landing, a button press).
// Scenes use these for their animation and the mixer uses them for sound effects, so picture and
// sound can never drift apart. Frames are relative to the scene's start.

export function staggerFrames(cues, dur, stagger, fps, spread = 0.55) {
  const n = cues.length;
  const auto = (i) => Math.round(Math.min(i * Math.max(stagger * fps, 3), (dur * spread * i) / Math.max(1, n)));
  return cues.map((c, i) => (typeof c === 'number' ? c : auto(i)));
}

const asItems = (arr) => (arr ?? []).map((x) => (typeof x === 'string' ? {text: x} : x));

export const beats = {
  list: (p, dur, fps) => staggerFrames(asItems(p.items).map((it) => it.atFrame), dur, 0.35, fps, 0.7),
  flow: (p, dur, fps) => staggerFrames(asItems(p.nodes ?? p.steps).map((n) => n.atFrame), dur, 0.4, fps, 0.78),
  timeline: (p, dur, fps) => staggerFrames((p.events ?? []).map((e) => e.atFrame), dur, 0.45, fps, 0.75),
  messages: (p, dur, fps) => staggerFrames((p.messages ?? []).map((m) => m.atFrame), dur, 0.55, fps, 0.75),
  rows: (p, dur, fps) => staggerFrames((p.app?.rows ?? []).map((r) => r.atFrame), dur, 0.3, fps, 0.6),
  markers: (p, dur, fps) => staggerFrames((p.markers ?? []).map((m) => m.atFrame), dur, 0.3, fps, 0.6),
  callouts: (p, dur, fps) => staggerFrames((p.callouts ?? []).map((c) => c.atFrame), dur, 0.5, fps, 0.7),
  number: (p, dur, fps) => {
    const end = typeof p.countAtFrame === 'number' ? Math.max(8, p.countAtFrame + 4) : Math.round(fps * 0.9);
    const len = Math.round(fps * Number(p.countDur ?? 0.9));
    return {start: end - len, end, len};
  },
  notification: (p, dur, fps) => p.notification?.atFrame ?? Math.round(fps * 0.5),
  press: (p, dur, fps) => p.pressAtFrame ?? Math.round(Math.min(dur * 0.55, fps * 1.4)),
  grid: (p, dur, fps) => p.highlightAtFrame ?? Math.round(Math.min(dur * 0.45, fps * 1.1)),
  split: (p, dur, fps) => p.wipeAtFrame ?? (p.right ?? p.bottom ?? p.after)?.atFrame ?? Math.round(Math.min(dur * 0.45, fps * 1.2)),
  compare: (p, dur, fps) => ({
    appear: [p.left?.atFrame ?? 0, p.right?.atFrame ?? Math.round(Math.min(dur * 0.3, fps * 0.8))],
    win: p.winnerAtFrame ?? Math.round(dur * 0.62),
  }),
  chartDraw: (p, dur, fps) => ({at: p.drawAtFrame ?? 4, len: Math.round(fps * Number(p.drawDur ?? Math.min(1.6, (dur / fps) * 0.55)))}),
};

// Sound effects a scene makes on its own (each at a gain in dB). A scene can opt out with
// "sound": false or replace them with its own "sfx" list.
export function sceneSounds(scene, fps) {
  const p = scene.props ?? {};
  const dur = scene.end - scene.start;
  const out = [];
  const add = (name, frame, gain = 0) => { if (frame >= 0 && frame < dur + fps) out.push({name, frame: scene.start + frame, gain, scene: scene.id, auto: true}); };
  switch (scene.type) {
    case 'title': if (scene.index === 0) add('sub-drop', 0, -5); break;
    case 'list': beats.list(p, dur, fps).forEach((f) => add('blip', f, -3)); break;
    case 'flow': beats.flow(p, dur, fps).forEach((f, i) => add(i ? 'blip-high' : 'blip', f, -4)); break;
    case 'timeline': beats.timeline(p, dur, fps).forEach((f) => add('tick', f, -1)); break;
    case 'number': { const b = beats.number(p, dur, fps); add('counter', b.start, -7); add('thud', b.end, -3); break; }
    case 'phone':
      if ((p.screen ?? (p.messages ? 'messages' : '')) === 'messages') beats.messages(p, dur, fps).forEach((f) => add('pop', f, 0));
      if ((p.screen ?? (p.notification ? 'notification' : '')) === 'notification') add('notify', beats.notification(p, dur, fps), -5);
      break;
    case 'cta': if (p.button !== false) add('click', beats.press(p, dur, fps), 0); break;
    case 'hero': add('shimmer', 2, -9); break;
    case 'grid': add('blip-high', beats.grid(p, dur, fps), -4); break;
    case 'split': add('swoosh', beats.split(p, dur, fps), -3); break;
    case 'compare': if (p.winner) add('thud', beats.compare(p, dur, fps).win, -2); break;
    case 'chart': { const c = beats.chartDraw(p, dur, fps); add(p.kind === 'candles' ? 'data' : 'riser', c.at, -12); break; }
    case 'globe': beats.markers(p, dur, fps).forEach((f) => add('blip', f, -6)); break;
    case 'image': beats.callouts(p, dur, fps).forEach((f) => add('pop', f, -2)); break;
    default: break;
  }
  return out;
}
