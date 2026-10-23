"""Renders the engine's sound library: public/sfx/*.wav (sound effects) and public/music/*.m4a (beds).

Everything is synthesised here from numpy + scipy (designed.py / dsp.py), so the files are original and
free to use in any video. Only needed when changing the library; the engine itself just plays the files.

    python3 tools/sfx-gen/make_pack.py            # needs numpy, scipy and ffmpeg
"""
import os
import subprocess
import numpy as np
from dsp import SR, hz, db, secs, stereo, lp, hp, bp, fade, put, noise, reverb, echo, soft, write
import designed as D

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(os.path.dirname(HERE))
SFX = os.path.join(ROOT, 'public', 'sfx')
MUSIC = os.path.join(ROOT, 'public', 'music')
TAU = 2 * np.pi


def trim(x, thresh=1e-4):
    """Cut the silent tail a reverb leaves."""
    a = np.abs(x).max(1)
    idx = np.where(a > thresh)[0]
    return x[: idx[-1] + int(0.02 * SR)] if len(idx) else x


def sfx_pack():
    os.makedirs(SFX, exist_ok=True)
    pack = {
        'whoosh': lambda: D.whoosh(0.6),
        'whoosh-soft': lambda: D.whoosh(0.9, lo=200, hi=2600, peak=0.5) * 0.7,
        'swoosh': lambda: D.whoosh(0.34, lo=700, hi=7500, pan0=0.6, pan1=-0.6, seed=5),
        'tick': lambda: D.tick(),
        'click': lambda: D.tick(1.8),
        'hit': lambda: D.sub_drop(1.3),
        'sub-drop': lambda: D.sub_drop(2.2),
        'thud': lambda: D.thud(),
        'pop': lambda: D.pop(520),
        'blip': lambda: D.blip('C5'),
        'blip-high': lambda: D.blip('G5'),
        'chime': lambda: D.chime('C5'),
        'shimmer': lambda: D.glass_ping('C7'),
        'riser': lambda: D.riser(1.6),
        'counter': lambda: D.counter(1.1),
        'data': lambda: D.data_chatter(1.2),
        'type': lambda: D.data_chatter(0.9, rate=16, seed=33, lo='C5', spread=10),
        'glitch': lambda: D.glitch(),
        'notify': lambda: D.receive_tone(),
        'send': lambda: D.send_whoop(),
        'power-up': lambda: D.power_up(),
        'unscramble': lambda: D.unscramble(),
        'alert': lambda: D.alert_low(),
        'light': lambda: D.light_zip(),
    }
    for name, make in pack.items():
        x = make()
        if x.ndim == 1:
            x = stereo(x)
        x = trim(np.asarray(x, dtype=np.float64))
        write(os.path.join(SFX, f'{name}.wav'), fade(x, 0.001, 0.02), peak=-3)
        print(f'sfx {name:12s} {len(x) / SR:5.2f} s')


# ---------------- music beds ----------------
def saw(f, t, phase=0.0):
    return 2 * ((f * t + phase) % 1.0) - 1


def pad_chord(notes, dur, detune=0.006, cutoff=(700, 1900), seed=0):
    t = secs(dur)
    rng = np.random.default_rng(seed)
    L = np.zeros(len(t)); R = np.zeros(len(t))
    for n in notes:
        f = hz(n)
        for k, d in enumerate((-detune, 0, detune)):
            ph = rng.random()
            L += saw(f * (1 + d), t, ph) * (0.8 if k != 1 else 1)
            R += saw(f * (1 - d * 0.7), t, ph + 0.13) * (0.8 if k != 1 else 1)
    lfo = cutoff[0] + (cutoff[1] - cutoff[0]) * (0.5 + 0.5 * np.sin(TAU * 0.07 * t + seed))
    # time-varying low-pass approximated by crossfading two fixed filters
    lo = lp(np.stack([L, R], 1), cutoff[0], 2)
    hi = lp(np.stack([L, R], 1), cutoff[1], 2)
    mixk = ((lfo - cutoff[0]) / (cutoff[1] - cutoff[0]))[:, None]
    y = lo * (1 - mixk) + hi * mixk
    env = np.minimum(1, t / 1.2) * np.minimum(1, (dur - t) / 1.4).clip(0, 1)
    return y * env[:, None] / (len(notes) * 3)


def pluck(f, dur=0.6, bright=0.5, seed=0):
    """Karplus-Strong string."""
    n = int(dur * SR)
    p = max(2, int(SR / f))
    buf = np.random.default_rng(seed).uniform(-1, 1, p)
    out = np.zeros(n)
    for i in range(n):
        out[i] = buf[i % p]
        buf[i % p] = 0.5 * (buf[i % p] + buf[(i + 1) % p]) * (0.994 - 0.01 * (1 - bright))
    return fade(out, 0.001, 0.05)


def kick(dur=0.32):
    t = secs(dur)
    f = 45 + 95 * np.exp(-t / 0.035)
    ph = TAU * np.cumsum(f) / SR
    return np.sin(ph) * np.exp(-t / 0.13) + 0.15 * hp(noise(len(t), 2), 2000) * np.exp(-t / 0.004)


def hat(seed=0):
    t = secs(0.05)
    return hp(noise(len(t), seed), 7000) * np.exp(-t / 0.012)


def bed(name, bpm, chords, bass_pat, kick_on, hat_on, arp, bars=32, pump=0.0, key_shift=0):
    beat = 60.0 / bpm
    bar = 4 * beat
    total = bars * bar
    n = int(total * SR)
    tail = int(4 * SR)
    out = np.zeros((n + tail, 2))
    pad_bus = np.zeros_like(out)
    bass_bus = np.zeros_like(out)
    arp_bus = np.zeros_like(out)
    drum_bus = np.zeros_like(out)
    chord_bars = 2
    for ci in range(bars // chord_bars):
        notes = chords[ci % len(chords)]
        start = ci * chord_bars * bar
        put(pad_bus, pad_chord(notes, chord_bars * bar + 1.0, seed=ci), start)
        root = notes[0][:-1] + str(int(notes[0][-1]) - 1)
        for b in range(chord_bars * 4 * 2):  # eighth notes
            if bass_pat[b % len(bass_pat)] != 'x':
                continue
            t0 = start + b * beat / 2
            bt = secs(beat / 2 * 0.95)
            f = hz(root)
            y = soft(np.sin(TAU * f * bt) + 0.3 * np.sin(TAU * 2 * f * bt), 1.4) * np.exp(-bt / (beat * 0.35))
            put(bass_bus, stereo(fade(y, 0.003, 0.02)), t0)
        if arp:
            tones = notes + [notes[0][:-1] + str(int(notes[0][-1]) + 1)]
            for s16 in range(chord_bars * 16):
                if arp['pattern'][s16 % len(arp['pattern'])] != 'x':
                    continue
                t0 = start + s16 * beat / 4
                tone = tones[(s16 // 2) % len(tones)]
                put(arp_bus, stereo(pluck(hz(tone) * 2 ** arp.get('oct', 1), 0.5, seed=s16), np.sin(s16) * 0.5), t0)
    for b in range(int(total / beat)):
        t0 = b * beat
        if kick_on and (kick_on == 'four' or (kick_on == 'half' and b % 2 == 0)):
            put(drum_bus, stereo(kick()), t0)
        if hat_on:
            put(drum_bus, stereo(hat(b), 0.25), t0 + beat / 2, 0.6)
            if hat_on == 'sixteenths':
                put(drum_bus, stereo(hat(b + 99), -0.25), t0 + beat / 4, 0.25)
                put(drum_bus, stereo(hat(b + 199), -0.25), t0 + 3 * beat / 4, 0.25)
    # pumping: duck pad/bass/arp on each beat
    if pump > 0:
        t = np.arange(len(out)) / SR
        ph = (t % beat) / beat
        env = 1 - pump * np.exp(-ph * 9)
        pad_bus *= env[:, None]; bass_bus *= env[:, None]; arp_bus *= env[:, None]
    pad_bus = reverb(pad_bus, decay=3.5, wet=0.35, bright=4500)[: len(out)]
    arp_bus = echo(arp_bus, beat * 0.75, fb=0.3, wet=0.25)[: len(out)]
    arp_bus = reverb(arp_bus, decay=2.2, wet=0.3, bright=7000)[: len(out)]
    out = pad_bus * db(-2) + bass_bus * db(-7) + arp_bus * db(-13) + drum_bus * db(-6)
    # seamless loop: fold the tail back onto the start
    loop = out[:n].copy()
    loop[:tail] += out[n:n + tail]
    loop = hp(loop, 30)
    os.makedirs(MUSIC, exist_ok=True)
    wav = os.path.join(MUSIC, f'{name}.wav')
    write(wav, loop, peak=-4)
    m4a = os.path.join(MUSIC, f'{name}.m4a')
    subprocess.run(['ffmpeg', '-v', 'error', '-y', '-i', wav, '-c:a', 'aac', '-b:a', '160k', m4a], check=True)
    os.remove(wav)
    print(f'music {name:8s} {total:5.1f} s at {bpm} bpm')


def music_pack():
    # pulse: the house bed. Dark, F minor, steady pulse, made for luminous explainers.
    bed('pulse', 100, [['F3', 'Ab3', 'C4', 'Eb4'], ['Db3', 'F3', 'Ab3', 'C4'], ['Ab2', 'C3', 'Eb3', 'G3'], ['Eb3', 'G3', 'Bb3', 'Db4']],
        bass_pat='x.x.x.x.', kick_on='four', hat_on='eighths', arp={'pattern': 'x..x..x.x..x.x..', 'oct': 1}, pump=0.35)
    # bright: light editorial bed, C major / Lydian colour, plucky.
    bed('bright', 112, [['C4', 'E4', 'G4', 'B4'], ['F3', 'A3', 'C4', 'E4'], ['A3', 'C4', 'E4', 'G4'], ['G3', 'B3', 'D4', 'F#4'.replace('F#', 'Gb')]],
        bass_pat='x...x...', kick_on='half', hat_on='eighths', arp={'pattern': 'x.x.x.x.x.x.x.xx', 'oct': 1}, pump=0.15)
    # drive: energetic creator bed, A minor, sixteenth hats, stronger pump.
    bed('drive', 124, [['A3', 'C4', 'E4', 'G4'], ['F3', 'A3', 'C4', 'E4'], ['C4', 'E4', 'G4', 'B4'], ['G3', 'B3', 'D4', 'F4']],
        bass_pat='x.xxx.x.', kick_on='four', hat_on='sixteenths', arp={'pattern': 'x.xx.x.xx.x.x.xx', 'oct': 1}, pump=0.5)
    # calm: no drums, slow pads, for serious or reflective pieces.
    bed('calm', 72, [['D3', 'F3', 'A3', 'C4'], ['Bb2', 'D3', 'F3', 'A3'], ['G2', 'Bb2', 'D3', 'F3'], ['A2', 'C#3'.replace('C#', 'Db'), 'E3', 'G3']],
        bass_pat='x.......', kick_on=None, hat_on=None, arp={'pattern': 'x.......x.......', 'oct': 1}, bars=24)


if __name__ == '__main__':
    sfx_pack()
    music_pack()
