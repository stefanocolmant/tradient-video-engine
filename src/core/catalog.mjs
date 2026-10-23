// Every scene type the engine draws: what it is for, its props, and the limits that keep it readable.
// storyboard-check validates against this, and docs/SCENES.md is generated from it (npm run docs).
// Cue props ("at", "...At") take a phrase from the narration, or a number of seconds into the scene.

export const CATALOG = {
  title: {
    use: 'The hook or a chapter title: a few huge words that land as they are said. Best first scene.',
    props: {text: 'string*  1-7 words; wrap a word in *asterisks* to highlight it', kicker: 'string  small label above (≤ 4 words)', sub: 'string  one short line below', icon: 'icon  hero icon above the words', size: '"xl" | "l" | "m"'},
    limits: {text: 7, kicker: 4, sub: 10},
    example: {type: 'title', at: 'You tap Buy', props: {text: 'You tap *Buy*', icon: 'mouse-pointer-click'}},
  },
  statement: {
    use: 'One spoken sentence set big on screen, revealed word by word (captions hide under it). For the key line of a beat.',
    props: {text: 'string*  ≤ 14 words, usually the narration itself', emphasis: 'string[]  words to highlight', kicker: 'string', icon: 'icon', font: '"display" | "body"'},
    limits: {text: 14, kicker: 4},
    example: {type: 'statement', at: 'By law', props: {text: 'By law, it can\'t give you a *worse price*.'}},
  },
  number: {
    use: 'A number that matters, counting up and landing on its spoken word. % values get a ring.',
    props: {value: 'number*', prefix: 'string  e.g. "$"', suffix: 'string  e.g. "%", "M", "x"', decimals: 'number', from: 'number  start of the count', label: 'string  ≤ 8 words under it', kicker: 'string', countAt: 'cue  the phrase where the number is said (the count lands there)', countDur: 'number  seconds of counting (0.9)', tone: '"positive" | "negative"', ring: 'boolean', compare: '{value, label}  a second bar to compare with', icon: 'icon'},
    limits: {label: 9, kicker: 4},
    example: {type: 'number', at: 'More than ninety', props: {value: 90, suffix: '%', label: 'of everyday investors\' orders go this way', countAt: 'ninety percent'}},
  },
  list: {
    use: '2-6 points arriving one by one on their cue words; the newest is lit.',
    props: {items: '[{text*, icon, sub, value, at}]*  2-6 items, ≤ 7 words each; value = a number or price shown on the right', title: 'string', titleStyle: '"pill"  small label instead of a big title', numbered: 'boolean', highlight: 'number  index to light up once all items are in', highlightAt: 'cue  when the highlight moves to that item'},
    limits: {items: 6, 'items.text': 7, title: 6},
    example: {type: 'list', at: 'three things', props: {title: 'Three things', items: [{text: 'It goes to your broker', icon: 'briefcase', at: 'broker'}, {text: 'Then a wholesaler', icon: 'building', at: 'wholesaler'}]}},
  },
  compare: {
    use: 'Two sides against each other (you vs a bot, before vs after); the winner lights up on its cue.',
    props: {left: '{title, value, icon, points[], tone, at}*', right: '{title, value, icon, points[], tone, at}*', winner: '"left" | "right"', winnerAt: 'cue', title: 'string', vs: 'string  badge text ("VS")'},
    limits: {'left.title': 4, 'right.title': 4, title: 6},
    example: {type: 'compare', at: 'A human', props: {left: {title: 'You', value: '250 ms', icon: 'user'}, right: {title: 'A bot', value: '0.01 ms', icon: 'bot'}, winner: 'right', winnerAt: 'faster'}},
  },
  chart: {
    use: 'Data drawing itself on: line, area, bar or candlesticks, with one highlighted point.',
    props: {kind: '"line" | "area" | "bar" | "candles"', values: 'number[]  or data: [{label, value}]', labels: 'string[]', title: 'string', highlight: '{index, label, at}', prefix: 'string', suffix: 'string', tone: '"positive" | "negative"', drawAt: 'cue', drawDur: 'number seconds'},
    limits: {title: 7},
    example: {type: 'chart', at: 'every year', props: {kind: 'line', title: 'Users per year', values: [12, 18, 25, 31, 44, 58], labels: ['2020', '2021', '2022', '2023', '2024', '2025'], highlight: {index: 5, label: 'New high'}}},
  },
  flow: {
    use: 'A process or journey: nodes joined by paths; each lights up as the narration reaches it.',
    props: {nodes: '[{label*, icon, at}]*  2-6 nodes, ≤ 4 words each', layout: '"vertical" | "horizontal" | "loop" | "hub"', title: 'string', edges: '[[from, to]]  default: in order', packet: 'boolean  light travelling along paths (true)'},
    limits: {nodes: 6, 'nodes.label': 4, title: 6},
    example: {type: 'flow', at: 'Your app sends', props: {nodes: [{label: 'Your app', icon: 'smartphone'}, {label: 'Broker', icon: 'briefcase', at: 'broker'}, {label: 'Wholesaler', icon: 'building', at: 'wholesaler'}]}},
  },
  timeline: {
    use: 'Dates or steps in order; each arrives on its cue and the line fills.',
    props: {events: '[{date*, label*, at}]*  2-5 events', title: 'string'},
    limits: {events: 5, 'events.label': 7, title: 6},
    example: {type: 'timeline', at: 'settles', props: {events: [{date: 'Today', label: 'You tap Buy'}, {date: 'T+1', label: 'Shares and cash swap', at: 'business day'}]}},
  },
  quote: {
    use: 'Someone\'s exact words with their name (real quotes only, with a source in facts.md).',
    props: {text: 'string*  ≤ 30 words', by: 'string', role: 'string', image: 'path  their photo (needs rights)', font: '"display" | "body"'},
    limits: {text: 30},
    example: {type: 'quote', at: 'she wrote', props: {text: 'The exact words, from a source you can link in facts.md.', by: 'Their name', role: 'Where and when they said it'}},
  },
  image: {
    use: 'A photo, screenshot or generated image with a slow camera move and optional callouts. Real receipts (headlines, posts, documents) go here: npm run grab -- <url>.',
    props: {src: 'path*  file in the video\'s assets/ folder', frame: '"card" | "full" | "phone" | "browser"', aspect: 'number  height/width of the card frame (1.25)', motion: '"push" | "pull" | "pan-left" | "pan-right" | "pan-up" | "none"', focus: '{x, y}  0-1, where the push heads', callouts: '[{x, y, label, at}]  x/y 0-1 on the image', caption: 'string', credit: 'string  photo credit', fit: '"cover" | "contain"'},
    limits: {caption: 12},
    example: {type: 'image', at: 'the headline', props: {src: 'assets/headline.png', frame: 'browser', callouts: [{x: 0.3, y: 0.4, label: '$460M', at: 'million'}]}},
  },
  hero: {
    use: 'One big object for the thing being named (a 3D glowing icon in luminous styles), with optional orbiting satellites. The workhorse for "show the noun".',
    props: {icon: 'icon*', label: 'string  ≤ 5 words', sub: 'string', satellites: 'icon[]  0-4 small icons orbiting', color: 'color'},
    limits: {label: 5, satellites: 4},
    example: {type: 'hero', at: 'a wholesaler', props: {icon: 'building', label: 'A wholesaler', sub: 'a giant trading firm'}},
  },
  grid: {
    use: 'Proportions as people/things: "7 in 10", "1 in 4". Icons fill in, the share lights up.',
    props: {total: 'number*  10-200', highlight: 'number*', icon: 'icon (user)', label: 'string', cols: 'number', highlightAt: 'cue', tone: '"negative"', random: 'boolean'},
    limits: {label: 6},
    example: {type: 'grid', at: 'nine out of ten', props: {total: 10, highlight: 9, icon: 'user', label: '9 in 10 traders'}},
  },
  split: {
    use: 'Before and after (or two states) stacked; the second wipes in on its cue.',
    props: {before: '{label, text, icon, image, tone}*', after: '{label, text, icon, image, tone, at}*', orientation: '"vertical" | "horizontal"', wipeAt: 'cue'},
    limits: {'before.text': 5, 'after.text': 5},
    example: {type: 'split', at: 'used to', props: {before: {label: 'Before', text: 'Shouting in a pit', icon: 'megaphone'}, after: {label: 'Now', text: 'Silent servers', icon: 'server', at: 'now'}}},
  },
  globe: {
    use: 'Places and routes: a 3D planet in dark styles, a dotted map in light ones.',
    props: {markers: '[{lat*, lon*, label, at}]*', arcs: '[{from, to, at}]  indexes into markers', focus: '{lat, lon}', focusEnd: '{lat, lon}', zoom: 'number', cables: 'boolean  undersea cable web', title: 'string', flat: 'boolean  force the flat map'},
    limits: {title: 6},
    example: {type: 'globe', at: 'from New York', props: {markers: [{lat: 40.71, lon: -74.0, label: 'New York'}, {lat: 51.51, lon: -0.13, label: 'London', at: 'London'}], arcs: [{from: 0, to: 1}]}},
  },
  phone: {
    use: 'A big close phone: messages, a notification, an app screen, or a screenshot.',
    props: {screen: '"messages" | "notification" | "app" | "image"', messages: '[{from: "me"|"them", text, at}]', contact: 'string', notification: '{app, title, body, icon, at}', app: '{title, big, sub, rows: [{label, value, tone, at}]}', image: 'path', time: 'string ("9:41")', caption: 'string  line above the phone', light: 'boolean  light-mode screen'},
    limits: {caption: 8},
    example: {type: 'phone', at: 'your app says', props: {screen: 'notification', notification: {app: 'Broker', title: 'Order filled', body: 'Bought 10 shares', icon: 'check'}}},
  },
  cta: {
    use: 'The ending: what to do next (follow, comment, link) with a button that gets pressed.',
    props: {text: 'string*  ≤ 6 words', handle: 'string  @name', button: 'string | false', doneText: 'string', logo: 'path', icon: 'icon', sub: 'string', pressAt: 'cue'},
    limits: {text: 6},
    example: {type: 'cta', at: 'Follow for', props: {text: 'Follow for more', handle: '@yourhandle'}},
  },
  custom: {
    use: 'A one-off visual written in code (src/scenes/custom/). Use when nothing above can show the idea.',
    props: {component: 'string*  name registered in src/scenes/custom/index.ts', '...': 'any props your component reads'},
    limits: {},
    example: {type: 'custom', at: 'the trick', props: {component: 'Example', text: 'Custom scene'}},
  },
};

// Scene-level fields (outside props).
export const SCENE_FIELDS = {
  type: 'scene type (above)*',
  at: 'cue*  the phrase this scene starts on (every scene after the first)',
  line: 'the narration this scene covers (for review)',
  props: 'the scene\'s props (above)',
  transition: '"cut" | "fade" | "slide" | "zoom" | "whip" | "wipe" | "flash" | "blur"  override the style\'s',
  captions: 'true | false  force captions on/off for this scene',
  sound: 'false  silence this scene\'s automatic sound effects',
  sfx: '[name | {name, at, gain}]  extra sound effects (names at the end of this page)',
  hold: 'seconds  only for storyboards with no voice yet',
};

export const SFX_NAMES = ['whoosh', 'whoosh-soft', 'swoosh', 'tick', 'click', 'hit', 'sub-drop', 'thud', 'pop', 'blip', 'blip-high', 'chime', 'shimmer', 'riser', 'counter', 'data', 'type', 'glitch', 'notify', 'send', 'power-up', 'unscramble', 'alert', 'light'];
