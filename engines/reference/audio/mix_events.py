"""Render an editable SFX stem from the SAME event frames used by the picture.

The comparison film keeps the source mix. This independent stem demonstrates
the reusable cue/mix mechanism; it is not represented as recovered source audio.
"""
import argparse
import json
from pathlib import Path
import numpy as np
import designed
from dsp import SR, read, put, fade, write

parser = argparse.ArgumentParser()
parser.add_argument('events')
parser.add_argument('output')
parser.add_argument('--end', type=float, required=True)
parser.add_argument('--samples', type=Path, required=True)
args = parser.parse_args()
data = json.loads(Path(args.events).read_text())
mix = np.zeros((round(args.end * SR), 2))
used = []
for event in data['events']:
    if event['seconds'] >= args.end or not event.get('sound'):
        continue
    name = event['sound']
    duration = event['dur'] / data['fps']
    file = args.samples / (name + '.flac')
    if file.exists():
        clip = read(str(file))
        provenance = str(file)
        if name == 'underwater-deep':
            length = round(min(duration, args.end - event['seconds']) * SR)
            clip = np.tile(clip, (int(np.ceil(length / len(clip))), 1))[:length]
            clip = fade(clip, .25, .3)
    else:
        fn = getattr(designed, name, None)
        if fn is None:
            raise ValueError(f'Missing SFX implementation: {name}')
        clip = fn(dur=max(.4, duration))
        provenance = 'CStack procedural synthesis: ' + name
    peak = float(np.max(np.abs(clip)))
    gain = 10 ** (event.get('gainDb', -24) / 20) / max(peak, .00001)
    put(mix, clip, event['seconds'], gain)
    used.append({**event, 'source': provenance, 'output_peak_target_dbfs': event.get('gainDb', -24)})
write(args.output, mix)
Path(args.output + '.json').write_text(json.dumps({'mode': 'independent SFX stem, not reference audio', 'events': used}, indent=2))
print(json.dumps({'file': args.output, 'duration': len(mix) / SR, 'events': len(used), 'peak_dbfs': 20 * np.log10(max(float(np.max(np.abs(mix))), 1e-9))}))
