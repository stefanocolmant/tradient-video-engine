# Scenes

Every scene type the engine draws, with its props. Generated from `src/core/catalog.mjs` (run `npm run docs` after changing it).

Props marked * are required. A **cue** is a phrase from the narration (`"at": "ninety percent"`) or a number of seconds into the scene (`"at": 1.2`). Every prop whose name is `at` or ends in `At` is a cue. Text props accept `*asterisks*` around the words to highlight.

## Scene fields

| field | meaning |
|---|---|
| `type` | scene type (above)* |
| `at` | cue*  the phrase this scene starts on (every scene after the first) |
| `line` | the narration this scene covers (for review) |
| `props` | the scene's props (above) |
| `transition` | "cut" \| "fade" \| "slide" \| "zoom" \| "whip" \| "wipe" \| "flash" \| "blur"  override the style's |
| `captions` | true \| false  force captions on/off for this scene |
| `sound` | false  silence this scene's automatic sound effects |
| `sfx` | [name \| {name, at, gain}]  extra sound effects (names at the end of this page) |
| `hold` | seconds  only for storyboards with no voice yet |

## Types

| type | use it for |
|---|---|
| [`title`](#title) | The hook or a chapter title: a few huge words that land as they are said. Best first scene. |
| [`statement`](#statement) | One spoken sentence set big on screen, revealed word by word (captions hide under it). For the key line of a beat. |
| [`number`](#number) | A number that matters, counting up and landing on its spoken word. % values get a ring. |
| [`list`](#list) | 2-6 points arriving one by one on their cue words; the newest is lit. |
| [`compare`](#compare) | Two sides against each other (you vs a bot, before vs after); the winner lights up on its cue. |
| [`chart`](#chart) | Data drawing itself on: line, area, bar or candlesticks, with one highlighted point. |
| [`flow`](#flow) | A process or journey: nodes joined by paths; each lights up as the narration reaches it. |
| [`timeline`](#timeline) | Dates or steps in order; each arrives on its cue and the line fills. |
| [`quote`](#quote) | Someone's exact words with their name (real quotes only, with a source in facts.md). |
| [`image`](#image) | A photo, screenshot or generated image with a slow camera move and optional callouts. Real receipts (headlines, posts, documents) go here: npm run grab -- <url>. |
| [`hero`](#hero) | One big object for the thing being named (a 3D glowing icon in luminous styles), with optional orbiting satellites. The workhorse for "show the noun". |
| [`grid`](#grid) | Proportions as people/things: "7 in 10", "1 in 4". Icons fill in, the share lights up. |
| [`split`](#split) | Before and after (or two states) stacked; the second wipes in on its cue. |
| [`globe`](#globe) | Places and routes: a 3D planet in dark styles, a dotted map in light ones. |
| [`phone`](#phone) | A big close phone: messages, a notification, an app screen, or a screenshot. |
| [`cta`](#cta) | The ending: what to do next (follow, comment, link) with a button that gets pressed. |
| [`custom`](#custom) | A one-off visual written in code (src/scenes/custom/). Use when nothing above can show the idea. |

### title

The hook or a chapter title: a few huge words that land as they are said. Best first scene.

| prop | type and notes |
|---|---|
| `text` | string*  1-7 words; wrap a word in *asterisks* to highlight it |
| `kicker` | string  small label above (≤ 4 words) |
| `sub` | string  one short line below |
| `icon` | icon  hero icon above the words |
| `size` | "xl" \| "l" \| "m" |

Word limits (the checker warns above these): `text` ≤ 7, `kicker` ≤ 4, `sub` ≤ 10.

```json
{
  "type": "title",
  "at": "You tap Buy",
  "props": {
    "text": "You tap *Buy*",
    "icon": "mouse-pointer-click"
  }
}
```

### statement

One spoken sentence set big on screen, revealed word by word (captions hide under it). For the key line of a beat.

| prop | type and notes |
|---|---|
| `text` | string*  ≤ 14 words, usually the narration itself |
| `emphasis` | string[]  words to highlight |
| `kicker` | string |
| `icon` | icon |
| `font` | "display" \| "body" |

Word limits (the checker warns above these): `text` ≤ 14, `kicker` ≤ 4.

```json
{
  "type": "statement",
  "at": "By law",
  "props": {
    "text": "By law, it can't give you a *worse price*."
  }
}
```

### number

A number that matters, counting up and landing on its spoken word. % values get a ring.

| prop | type and notes |
|---|---|
| `value` | number* |
| `prefix` | string  e.g. "$" |
| `suffix` | string  e.g. "%", "M", "x" |
| `decimals` | number |
| `from` | number  start of the count |
| `label` | string  ≤ 8 words under it |
| `kicker` | string |
| `countAt` | cue  the phrase where the number is said (the count lands there) |
| `countDur` | number  seconds of counting (0.9) |
| `tone` | "positive" \| "negative" |
| `ring` | boolean |
| `compare` | {value, label}  a second bar to compare with |
| `icon` | icon |

Word limits (the checker warns above these): `label` ≤ 9, `kicker` ≤ 4.

```json
{
  "type": "number",
  "at": "More than ninety",
  "props": {
    "value": 90,
    "suffix": "%",
    "label": "of everyday investors' orders go this way",
    "countAt": "ninety percent"
  }
}
```

### list

2-6 points arriving one by one on their cue words; the newest is lit.

| prop | type and notes |
|---|---|
| `items` | [{text*, icon, sub, value, at}]*  2-6 items, ≤ 7 words each; value = a number or price shown on the right |
| `title` | string |
| `titleStyle` | "pill"  small label instead of a big title |
| `numbered` | boolean |
| `highlight` | number  index to light up once all items are in |
| `highlightAt` | cue  when the highlight moves to that item |

Word limits (the checker warns above these): `items` ≤ 6, `items.text` ≤ 7, `title` ≤ 6.

```json
{
  "type": "list",
  "at": "three things",
  "props": {
    "title": "Three things",
    "items": [
      {
        "text": "It goes to your broker",
        "icon": "briefcase",
        "at": "broker"
      },
      {
        "text": "Then a wholesaler",
        "icon": "building",
        "at": "wholesaler"
      }
    ]
  }
}
```

### compare

Two sides against each other (you vs a bot, before vs after); the winner lights up on its cue.

| prop | type and notes |
|---|---|
| `left` | {title, value, icon, points[], tone, at}* |
| `right` | {title, value, icon, points[], tone, at}* |
| `winner` | "left" \| "right" |
| `winnerAt` | cue |
| `title` | string |
| `vs` | string  badge text ("VS") |

Word limits (the checker warns above these): `left.title` ≤ 4, `right.title` ≤ 4, `title` ≤ 6.

```json
{
  "type": "compare",
  "at": "A human",
  "props": {
    "left": {
      "title": "You",
      "value": "250 ms",
      "icon": "user"
    },
    "right": {
      "title": "A bot",
      "value": "0.01 ms",
      "icon": "bot"
    },
    "winner": "right",
    "winnerAt": "faster"
  }
}
```

### chart

Data drawing itself on: line, area, bar or candlesticks, with one highlighted point.

| prop | type and notes |
|---|---|
| `kind` | "line" \| "area" \| "bar" \| "candles" |
| `values` | number[]  or data: [{label, value}] |
| `labels` | string[] |
| `title` | string |
| `highlight` | {index, label, at} |
| `prefix` | string |
| `suffix` | string |
| `tone` | "positive" \| "negative" |
| `drawAt` | cue |
| `drawDur` | number seconds |

Word limits (the checker warns above these): `title` ≤ 7.

```json
{
  "type": "chart",
  "at": "every year",
  "props": {
    "kind": "line",
    "title": "Users per year",
    "values": [
      12,
      18,
      25,
      31,
      44,
      58
    ],
    "labels": [
      "2020",
      "2021",
      "2022",
      "2023",
      "2024",
      "2025"
    ],
    "highlight": {
      "index": 5,
      "label": "New high"
    }
  }
}
```

### flow

A process or journey: nodes joined by paths; each lights up as the narration reaches it.

| prop | type and notes |
|---|---|
| `nodes` | [{label*, icon, at}]*  2-6 nodes, ≤ 4 words each |
| `layout` | "vertical" \| "horizontal" \| "loop" \| "hub" |
| `title` | string |
| `edges` | [[from, to]]  default: in order |
| `packet` | boolean  light travelling along paths (true) |

Word limits (the checker warns above these): `nodes` ≤ 6, `nodes.label` ≤ 4, `title` ≤ 6.

```json
{
  "type": "flow",
  "at": "Your app sends",
  "props": {
    "nodes": [
      {
        "label": "Your app",
        "icon": "smartphone"
      },
      {
        "label": "Broker",
        "icon": "briefcase",
        "at": "broker"
      },
      {
        "label": "Wholesaler",
        "icon": "building",
        "at": "wholesaler"
      }
    ]
  }
}
```

### timeline

Dates or steps in order; each arrives on its cue and the line fills.

| prop | type and notes |
|---|---|
| `events` | [{date*, label*, at}]*  2-5 events |
| `title` | string |

Word limits (the checker warns above these): `events` ≤ 5, `events.label` ≤ 7, `title` ≤ 6.

```json
{
  "type": "timeline",
  "at": "settles",
  "props": {
    "events": [
      {
        "date": "Today",
        "label": "You tap Buy"
      },
      {
        "date": "T+1",
        "label": "Shares and cash swap",
        "at": "business day"
      }
    ]
  }
}
```

### quote

Someone's exact words with their name (real quotes only, with a source in facts.md).

| prop | type and notes |
|---|---|
| `text` | string*  ≤ 30 words |
| `by` | string |
| `role` | string |
| `image` | path  their photo (needs rights) |
| `font` | "display" \| "body" |

Word limits (the checker warns above these): `text` ≤ 30.

```json
{
  "type": "quote",
  "at": "she wrote",
  "props": {
    "text": "The exact words, from a source you can link in facts.md.",
    "by": "Their name",
    "role": "Where and when they said it"
  }
}
```

### image

A photo, screenshot or generated image with a slow camera move and optional callouts. Real receipts (headlines, posts, documents) go here: npm run grab -- <url>.

| prop | type and notes |
|---|---|
| `src` | path*  file in the video's assets/ folder |
| `frame` | "card" \| "full" \| "phone" \| "browser" |
| `aspect` | number  height/width of the card frame (1.25) |
| `motion` | "push" \| "pull" \| "pan-left" \| "pan-right" \| "pan-up" \| "none" |
| `focus` | {x, y}  0-1, where the push heads |
| `callouts` | [{x, y, label, at}]  x/y 0-1 on the image |
| `caption` | string |
| `credit` | string  photo credit |
| `fit` | "cover" \| "contain" |

Word limits (the checker warns above these): `caption` ≤ 12.

```json
{
  "type": "image",
  "at": "the headline",
  "props": {
    "src": "assets/headline.png",
    "frame": "browser",
    "callouts": [
      {
        "x": 0.3,
        "y": 0.4,
        "label": "$460M",
        "at": "million"
      }
    ]
  }
}
```

### hero

One big object for the thing being named (a 3D glowing icon in luminous styles), with optional orbiting satellites. The workhorse for "show the noun".

| prop | type and notes |
|---|---|
| `icon` | icon* |
| `label` | string  ≤ 5 words |
| `sub` | string |
| `satellites` | icon[]  0-4 small icons orbiting |
| `color` | color |

Word limits (the checker warns above these): `label` ≤ 5, `satellites` ≤ 4.

```json
{
  "type": "hero",
  "at": "a wholesaler",
  "props": {
    "icon": "building",
    "label": "A wholesaler",
    "sub": "a giant trading firm"
  }
}
```

### grid

Proportions as people/things: "7 in 10", "1 in 4". Icons fill in, the share lights up.

| prop | type and notes |
|---|---|
| `total` | number*  10-200 |
| `highlight` | number* |
| `icon` | icon (user) |
| `label` | string |
| `cols` | number |
| `highlightAt` | cue |
| `tone` | "negative" |
| `random` | boolean |

Word limits (the checker warns above these): `label` ≤ 6.

```json
{
  "type": "grid",
  "at": "nine out of ten",
  "props": {
    "total": 10,
    "highlight": 9,
    "icon": "user",
    "label": "9 in 10 traders"
  }
}
```

### split

Before and after (or two states) stacked; the second wipes in on its cue.

| prop | type and notes |
|---|---|
| `before` | {label, text, icon, image, tone}* |
| `after` | {label, text, icon, image, tone, at}* |
| `orientation` | "vertical" \| "horizontal" |
| `wipeAt` | cue |

Word limits (the checker warns above these): `before.text` ≤ 5, `after.text` ≤ 5.

```json
{
  "type": "split",
  "at": "used to",
  "props": {
    "before": {
      "label": "Before",
      "text": "Shouting in a pit",
      "icon": "megaphone"
    },
    "after": {
      "label": "Now",
      "text": "Silent servers",
      "icon": "server",
      "at": "now"
    }
  }
}
```

### globe

Places and routes: a 3D planet in dark styles, a dotted map in light ones.

| prop | type and notes |
|---|---|
| `markers` | [{lat*, lon*, label, at}]* |
| `arcs` | [{from, to, at}]  indexes into markers |
| `focus` | {lat, lon} |
| `focusEnd` | {lat, lon} |
| `zoom` | number |
| `cables` | boolean  undersea cable web |
| `title` | string |
| `flat` | boolean  force the flat map |

Word limits (the checker warns above these): `title` ≤ 6.

```json
{
  "type": "globe",
  "at": "from New York",
  "props": {
    "markers": [
      {
        "lat": 40.71,
        "lon": -74,
        "label": "New York"
      },
      {
        "lat": 51.51,
        "lon": -0.13,
        "label": "London",
        "at": "London"
      }
    ],
    "arcs": [
      {
        "from": 0,
        "to": 1
      }
    ]
  }
}
```

### phone

A big close phone: messages, a notification, an app screen, or a screenshot.

| prop | type and notes |
|---|---|
| `screen` | "messages" \| "notification" \| "app" \| "image" |
| `messages` | [{from: "me"\|"them", text, at}] |
| `contact` | string |
| `notification` | {app, title, body, icon, at} |
| `app` | {title, big, sub, rows: [{label, value, tone, at}]} |
| `image` | path |
| `time` | string ("9:41") |
| `caption` | string  line above the phone |
| `light` | boolean  light-mode screen |

Word limits (the checker warns above these): `caption` ≤ 8.

```json
{
  "type": "phone",
  "at": "your app says",
  "props": {
    "screen": "notification",
    "notification": {
      "app": "Broker",
      "title": "Order filled",
      "body": "Bought 10 shares",
      "icon": "check"
    }
  }
}
```

### cta

The ending: what to do next (follow, comment, link) with a button that gets pressed.

| prop | type and notes |
|---|---|
| `text` | string*  ≤ 6 words |
| `handle` | string  @name |
| `button` | string \| false |
| `doneText` | string |
| `logo` | path |
| `icon` | icon |
| `sub` | string |
| `pressAt` | cue |

Word limits (the checker warns above these): `text` ≤ 6.

```json
{
  "type": "cta",
  "at": "Follow for",
  "props": {
    "text": "Follow for more",
    "handle": "@yourhandle"
  }
}
```

### custom

A one-off visual written in code (src/scenes/custom/). Use when nothing above can show the idea.

| prop | type and notes |
|---|---|
| `component` | string*  name registered in src/scenes/custom/index.ts |
| `...` | any props your component reads |

```json
{
  "type": "custom",
  "at": "the trick",
  "props": {
    "component": "Example",
    "text": "Custom scene"
  }
}
```

## Sound effects

Scenes make their own sounds (a blip per list item, a tick per timeline date, a counter while a number counts, a click on the end-card button, a whoosh on each cut). Add more with `"sfx": ["riser", {"name": "hit", "at": "boom"}]`, or silence a scene with `"sound": false`.

Available: `whoosh`, `whoosh-soft`, `swoosh`, `tick`, `click`, `hit`, `sub-drop`, `thud`, `pop`, `blip`, `blip-high`, `chime`, `shimmer`, `riser`, `counter`, `data`, `type`, `glitch`, `notify`, `send`, `power-up`, `unscramble`, `alert`, `light`.
