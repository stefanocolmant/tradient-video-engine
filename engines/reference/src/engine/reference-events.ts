import words from '../words.json';
import {createClock, type EventSpec} from './clock';

export const clock = createClock(words, 30);
const phrase = (text: string, offset = 0) => ({phrase: text, offset});
export const EVENT_SPECS: EventSpec[] = [
  {id: 'undersea.bed', at: 0, until: phrase('It is carrying a photo', -.247), what: 'Deep underwater ambience', sound: 'underwater-deep', gainDb: -27},
  {id: 'undersea.accelerate', at: phrase('a beam of light', -.1), until: phrase('towards Los Angeles', .38), what: 'Tracking camera and light accelerate', sound: 'light_zip', gainDb: -20, x: 0},
  {id: 'undersea.speed', at: phrase('at 200,000 kilometers', .19), until: phrase('per second', .4), what: 'Speed quantity appears and clears', sound: 'counter', gainDb: -22},
  {id: 'globe.enter', at: phrase('It is carrying a photo', -.247), what: 'Pull out from cable into Pacific route', sound: 'whoosh', gainDb: -21},
  {id: 'phone.send', at: phrase('hit the send', .33), what: 'Photo leaves composer', sound: 'screen-tap', gainDb: -20},
  {id: 'phone.receive', at: phrase('phone lights up', .167), what: 'Receiver lock screen illuminates', sound: 'phone-vibrate-wood', gainDb: -22},
  {id: 'time.slow', at: phrase("let's slow down", -.16), until: phrase('750 times', .8), what: 'Time scale expands', sound: 'riser', gainDb: -25},
  {id: 'photo.binary', at: phrase('At zero millisecond', -.253), what: 'Photo changes to individual bits', sound: 'data_chatter', gainDb: -26},
  {id: 'data.lock', at: phrase('encrypts this data', .14), what: 'Lock engages', sound: 'padlock-close', gainDb: -22},
  {id: 'data.split', at: phrase('it is split', -.3), what: 'Data divides into packets', sound: 'blade-slice', gainDb: -22},
  {id: 'packets.address', at: phrase('each labeled with the address', -.08), what: 'Address appears on packet', sound: 'rubber-stamp', gainDb: -25},
  {id: 'photo.reassemble', at: phrase('puts the photo back together'), until: {phrase: 'puts the photo back together', edge: 'end'}, what: 'Photo pieces return to their image positions', sound: 'unscramble', gainDb: -24},
];
export const EVENTS = clock.events(EVENT_SPECS);
export const event = (id: string) => {
  const result = EVENTS.find(e => e.id === id);
  if (!result) throw new Error(`Unknown event ${id}`);
  return result;
};
export const OPENING_TIMING = {
  accelerate: event('undersea.accelerate').seconds,
  accelerationEnd: (event('undersea.accelerate').fr + event('undersea.accelerate').dur) / clock.fps,
  pitchAt: event('undersea.accelerate').seconds,
  pitchEnd: clock.at({phrase: 'is traveling', offset: .03}),
  speedAt: event('undersea.speed').seconds,
  speedEnd: (event('undersea.speed').fr + event('undersea.speed').dur) / clock.fps,
};
