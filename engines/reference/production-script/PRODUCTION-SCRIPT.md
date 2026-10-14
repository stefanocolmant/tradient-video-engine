# A23 — complete production script

Baseline: Reference-Reconstruction-v23.mp4 · 720 × 1280 · 30 fps · 4,865 frames. Canonical render data: 2ec63d2689d7ef16d90bdc9549440c3a951c45a65ec0c4b262ca6cc5d63d3df4.

**Read this as a production recipe.** The saved scene code supplies the intricate geometry and animation algorithms; this script supplies the editorial order, clocks, content, overlays and settings. The construction chapters explain how to author different visuals. Passing replay does not establish automatic quality for unseen scenes.

Sound: retain the continuous mixed reference WAV. Proposed cue names are explicitly labeled design annotations; they are not recovered stems or audited identifications of the original effects. A second with no design cue still plays its exact native mixed audio segment.

## Every second

### 00:00.000–00:01.000 · frames 0–29

**Shots:** shot-01
**Narration:** Right now, 4 ,000
**Captions:** Right now 4,000 meters
**Visible overlay layers:** opening, pacific-depth, captions

**00:00.000–00:01.000 · undersea:** Track a bright pulse straight along armored cable at3.2 world units/s; the introductory title and Pacific/depth label establish the journey.
**Sampling:** Output frames 0–29.
- Foreground: Armored cable, fine sand ripples and calibrated near rocks.
- Background: Blue terrain banks, world-space dust and dim horizon.
- Camera: eye[2.64,1.32,z],look[0,.34,z-32],fov54; source offset animation2.5–3.25.
- Light: 75-intensity golden pulse; blue moon follows camera with quantized shadow position.
- Continuity: Next shot earth-pacific; no geographic Earth builder is part of this recipe.
- Evaluated recipe sample: {   "native": 0.5,   "local": 0.5,   "camera_z": 10.4,   "pulse_z": -21.6,   "camera_offset": [     38.16,     -34.56   ] }
- Construction source: src/undersea.ts:170-190; src/index.tsx:33-34,43

**Clock / handoff shot-01:** origin 0s; active local range 0.0–0.9666666666666667s; reset key 0; {   "enter": false,   "exit": true,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 1.8,   "blurGain": 20,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 0,
    "shot": "shot-01",
    "local": 0,
    "eye": [
      2.64,
      1.32,
      12
    ],
    "direction": [
      -0.082182397681124,
      -0.030507102169508152,
      -0.996150274922715
    ],
    "quaternion": [
      -0.015242407800266498,
      0.04114038822243721,
      0.0006276830909333566,
      0.999036907964513
    ],
    "fov": 54,
    "view": {
      "enabled": true,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 38.16,
      "offsetY": -34.56000000000003,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 29,
    "shot": "shot-01",
    "local": 0.9666666666666667,
    "eye": [
      2.64,
      1.32,
      8.906666666666666
    ],
    "direction": [
      -0.082182397681124,
      -0.030507102169508152,
      -0.996150274922715
    ],
    "quaternion": [
      -0.015242407800266498,
      0.04114038822243721,
      0.0006276830909333566,
      0.999036907964513
    ],
    "fov": 54,
    "view": {
      "enabled": true,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 38.16,
      "offsetY": -34.56000000000003,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 00:00.000–00:01.000. Design annotations: id: undersea.bed
frame: 0
label: Deep underwater ambience
status: proposed design annotation; mixed master is playback authority

**Measured mix:** -18.53 dBFS RMS; -2.994 dBFS peak. Source samples per channel 0–48000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 00:01.000–00:02.000 · frames 30–59

**Shots:** shot-01
**Narration:** ,000 meters below the Pacific Ocean,
**Captions:** Right now 4,000 meters / below the Pacific Ocean,
**Visible overlay layers:** opening, pacific-depth, captions

**00:01.000–00:02.000 · undersea:** Track a bright pulse straight along armored cable at3.2 world units/s; the introductory title and Pacific/depth label establish the journey.
**Sampling:** Output frames 30–59.
- Foreground: Armored cable, fine sand ripples and calibrated near rocks.
- Background: Blue terrain banks, world-space dust and dim horizon.
- Camera: eye[2.64,1.32,z],look[0,.34,z-32],fov54; source offset animation2.5–3.25.
- Light: 75-intensity golden pulse; blue moon follows camera with quantized shadow position.
- Continuity: Next shot earth-pacific; no geographic Earth builder is part of this recipe.
- Evaluated recipe sample: {   "native": 1.5,   "local": 1.5,   "camera_z": 7.2,   "pulse_z": -24.8,   "camera_offset": [     38.16,     -34.56   ] }
- Construction source: src/undersea.ts:170-190; src/index.tsx:33-34,43

**Clock / handoff shot-01:** origin 0s; active local range 1.0–1.9666666666666666s; reset key 0; {   "enter": false,   "exit": true,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 1.8,   "blurGain": 20,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 30,
    "shot": "shot-01",
    "local": 1,
    "eye": [
      2.64,
      1.32,
      8.8
    ],
    "direction": [
      -0.082182397681124,
      -0.030507102169508152,
      -0.996150274922715
    ],
    "quaternion": [
      -0.015242407800266498,
      0.04114038822243721,
      0.0006276830909333566,
      0.999036907964513
    ],
    "fov": 54,
    "view": {
      "enabled": true,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 38.16,
      "offsetY": -34.56000000000003,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 59,
    "shot": "shot-01",
    "local": 1.9666666666666666,
    "eye": [
      2.64,
      1.32,
      5.706666666666667
    ],
    "direction": [
      -0.082182397681124,
      -0.030507102169508152,
      -0.996150274922715
    ],
    "quaternion": [
      -0.015242407800266498,
      0.04114038822243721,
      0.0006276830909333566,
      0.999036907964513
    ],
    "fov": 54,
    "view": {
      "enabled": true,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 38.16,
      "offsetY": -34.56000000000003,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 00:01.000–00:02.000. No separately asserted effect onset.

**Measured mix:** -17.504 dBFS RMS; -4.627 dBFS peak. Source samples per channel 48000–96000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 00:02.000–00:03.000 · frames 60–89

**Shots:** shot-01
**Narration:** Ocean, a beam of
**Captions:** below the Pacific Ocean, / a beam of light
**Visible overlay layers:** opening, pacific-depth, captions

**00:02.000–00:02.500 · undersea:** Track a bright pulse straight along armored cable at3.2 world units/s; the introductory title and Pacific/depth label establish the journey.
**Sampling:** Output frames 60–74.
- Foreground: Armored cable, fine sand ripples and calibrated near rocks.
- Background: Blue terrain banks, world-space dust and dim horizon.
- Camera: eye[2.64,1.32,z],look[0,.34,z-32],fov54; source offset animation2.5–3.25.
- Light: 75-intensity golden pulse; blue moon follows camera with quantized shadow position.
- Continuity: Next shot earth-pacific; no geographic Earth builder is part of this recipe.
- Evaluated recipe sample: {   "native": 2.25,   "local": 2.25,   "camera_z": 4.8,   "pulse_z": -27.2,   "camera_offset": [     38.16,     -34.56   ] }
- Construction source: src/undersea.ts:170-190; src/index.tsx:33-34,43

**00:02.500–00:02.600 · undersea:** Acceleration begins and pulse screen anchor starts rising while the opening headline remains visible.
**Sampling:** Output frames 75–77.
- Foreground: Armored cable, fine sand ripples and calibrated near rocks.
- Background: Blue terrain banks, world-space dust and dim horizon.
- Camera: eye[2.64,1.32,z],look[0,.34,z-32],fov54; source offset animation2.5–3.25.
- Light: 75-intensity golden pulse; blue moon follows camera with quantized shadow position.
- Continuity: Next shot earth-pacific; no geographic Earth builder is part of this recipe.
- Evaluated recipe sample: {   "native": 2.55,   "local": 2.55,   "camera_z": 3.8106667,   "pulse_z": -28.1893333,   "camera_offset": [     37.9490133,     -33.4836622   ] }
- Construction source: src/undersea.ts:170-190; src/index.tsx:33-34,43

**00:02.600–00:03.000 · undersea:** Headline clears; accelerate and lift the pulse screen anchor from(.447,.527) toward(.470,.461).
**Sampling:** Output frames 78–89.
- Foreground: Armored cable, fine sand ripples and calibrated near rocks.
- Background: Blue terrain banks, world-space dust and dim horizon.
- Camera: eye[2.64,1.32,z],look[0,.34,z-32],fov54; source offset animation2.5–3.25.
- Light: 75-intensity golden pulse; blue moon follows camera with quantized shadow position.
- Continuity: Next shot earth-pacific; no geographic Earth builder is part of this recipe.
- Evaluated recipe sample: {   "native": 2.8,   "local": 2.8,   "camera_z": 2.104,   "pulse_z": -29.896,   "camera_offset": [     32.33088,     -4.82304   ] }
- Construction source: src/undersea.ts:170-190; src/index.tsx:33-34,43

**Clock / handoff shot-01:** origin 0s; active local range 2.0–2.966666666666667s; reset key 0; {   "enter": false,   "exit": true,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 1.8,   "blurGain": 20,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 60,
    "shot": "shot-01",
    "local": 2,
    "eye": [
      2.64,
      1.32,
      5.6
    ],
    "direction": [
      -0.082182397681124,
      -0.030507102169508152,
      -0.996150274922715
    ],
    "quaternion": [
      -0.015242407800266498,
      0.04114038822243721,
      0.0006276830909333566,
      0.999036907964513
    ],
    "fov": 54,
    "view": {
      "enabled": true,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 38.16,
      "offsetY": -34.56000000000003,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 89,
    "shot": "shot-01",
    "local": 2.966666666666667,
    "eye": [
      2.64,
      1.32,
      0.4353580246913573
    ],
    "direction": [
      -0.082182397681124,
      -0.030507102169508152,
      -0.996150274922715
    ],
    "quaternion": [
      -0.015242407800266498,
      0.04114038822243721,
      0.0006276830909333566,
      0.999036907964513
    ],
    "fov": 54,
    "view": {
      "enabled": true,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 26.904470123456797,
      "offsetY": 22.85951473251025,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 00:02.000–00:03.000. Design annotations: id: undersea.accelerate
frame: 75
label: Tracking camera and light accelerate
status: proposed design annotation; mixed master is playback authority

**Measured mix:** -17.254 dBFS RMS; -5.621 dBFS peak. Source samples per channel 96000–144000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 00:03.000–00:04.000 · frames 90–119

**Shots:** shot-01
**Narration:** of light is traveling towards Los
**Captions:** a beam of light / is traveling / towards Los Angeles
**Visible overlay layers:** pacific-depth, captions

**00:03.000–00:03.250 · undersea:** Headline clears; accelerate and lift the pulse screen anchor from(.447,.527) toward(.470,.461).
**Sampling:** Output frames 90–97.
- Foreground: Armored cable, fine sand ripples and calibrated near rocks.
- Background: Blue terrain banks, world-space dust and dim horizon.
- Camera: eye[2.64,1.32,z],look[0,.34,z-32],fov54; source offset animation2.5–3.25.
- Light: 75-intensity golden pulse; blue moon follows camera with quantized shadow position.
- Continuity: Next shot earth-pacific; no geographic Earth builder is part of this recipe.
- Evaluated recipe sample: {   "native": 3.125,   "local": 3.125,   "camera_z": -1.3854167,   "pulse_z": -33.3854167,   "camera_offset": [     22.8266667,     43.6622222   ] }
- Construction source: src/undersea.ts:170-190; src/index.tsx:33-34,43

**00:03.250–00:04.000 · undersea:** Pulse screen anchor has settled; finish the additional9-unit eased camera advance.
**Sampling:** Output frames 98–119.
- Foreground: Armored cable, fine sand ripples and calibrated near rocks.
- Background: Blue terrain banks, world-space dust and dim horizon.
- Camera: eye[2.64,1.32,z],look[0,.34,z-32],fov54; source offset animation2.5–3.25.
- Light: 75-intensity golden pulse; blue moon follows camera with quantized shadow position.
- Continuity: Next shot earth-pacific; no geographic Earth builder is part of this recipe.
- Evaluated recipe sample: {   "native": 3.625,   "local": 3.625,   "camera_z": -7.19375,   "pulse_z": -39.19375,   "camera_offset": [     21.6,     49.92   ] }
- Construction source: src/undersea.ts:170-190; src/index.tsx:33-34,43

**Clock / handoff shot-01:** origin 0s; active local range 3.0–3.966666666666667s; reset key 0; {   "enter": false,   "exit": true,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 1.8,   "blurGain": 20,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 90,
    "shot": "shot-01",
    "local": 3,
    "eye": [
      2.64,
      1.32,
      0.06666666666666643
    ],
    "direction": [
      -0.082182397681124,
      -0.030507102169508152,
      -0.996150274922715
    ],
    "quaternion": [
      -0.015242407800266498,
      0.04114038822243721,
      0.0006276830909333566,
      0.999036907964513
    ],
    "fov": 54,
    "view": {
      "enabled": true,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 25.89333333333334,
      "offsetY": 28.017777777777724,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 119,
    "shot": "shot-01",
    "local": 3.966666666666667,
    "eye": [
      2.64,
      1.32,
      -9.680197530864199
    ],
    "direction": [
      -0.082182397681124,
      -0.030507102169508152,
      -0.996150274922715
    ],
    "quaternion": [
      -0.015242407800266498,
      0.04114038822243721,
      0.0006276830909333566,
      0.999036907964513
    ],
    "fov": 54,
    "view": {
      "enabled": true,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 21.60000000000002,
      "offsetY": 49.91999999999997,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 00:03.000–00:04.000. No separately asserted effect onset.

**Measured mix:** -18.666 dBFS RMS; -3.459 dBFS peak. Source samples per channel 144000–192000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 00:04.000–00:05.000 · frames 120–149

**Shots:** shot-01
**Narration:** Los Angeles at 200
**Captions:** towards Los Angeles / at 200,000 kilometers
**Visible overlay layers:** pacific-depth, light-speed, captions

**00:04.000–00:04.667 · undersea:** Return to steady3.2 units/s with9-unit extra advance; cable texture/rocks provide parallax.
**Sampling:** Output frames 120–139.
- Foreground: Armored cable, fine sand ripples and calibrated near rocks.
- Background: Blue terrain banks, world-space dust and dim horizon.
- Camera: eye[2.64,1.32,z],look[0,.34,z-32],fov54; source offset animation2.5–3.25.
- Light: 75-intensity golden pulse; blue moon follows camera with quantized shadow position.
- Continuity: Next shot earth-pacific; no geographic Earth builder is part of this recipe.
- Evaluated recipe sample: {   "native": 4.333333333,   "local": 4.333333333,   "camera_z": -10.8666667,   "pulse_z": -42.8666667,   "camera_offset": [     21.6,     49.92   ] }
- Construction source: src/undersea.ts:170-190; src/index.tsx:33-34,43

**00:04.667–00:05.000 · undersea:** 200,000km/s metric appears above the steadily tracked physical pulse; terrain and cable continue passing beneath.
**Sampling:** Output frames 140–149.
- Foreground: Armored cable, fine sand ripples and calibrated near rocks.
- Background: Blue terrain banks, world-space dust and dim horizon.
- Camera: eye[2.64,1.32,z],look[0,.34,z-32],fov54; source offset animation2.5–3.25.
- Light: 75-intensity golden pulse; blue moon follows camera with quantized shadow position.
- Continuity: Next shot earth-pacific; no geographic Earth builder is part of this recipe.
- Evaluated recipe sample: {   "native": 4.833333333,   "local": 4.833333333,   "camera_z": -12.4666667,   "pulse_z": -44.4666667,   "camera_offset": [     21.6,     49.92   ] }
- Construction source: src/undersea.ts:170-190; src/index.tsx:33-34,43

**Clock / handoff shot-01:** origin 0s; active local range 4.0–4.966666666666667s; reset key 0; {   "enter": false,   "exit": true,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 1.8,   "blurGain": 20,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 120,
    "shot": "shot-01",
    "local": 4,
    "eye": [
      2.64,
      1.32,
      -9.8
    ],
    "direction": [
      -0.08218239768112401,
      -0.030507102169508152,
      -0.996150274922715
    ],
    "quaternion": [
      -0.015242407800266498,
      0.041140388222437214,
      0.0006276830909333567,
      0.999036907964513
    ],
    "fov": 54,
    "view": {
      "enabled": true,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 21.60000000000002,
      "offsetY": 49.91999999999997,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 149,
    "shot": "shot-01",
    "local": 4.966666666666667,
    "eye": [
      2.64,
      1.32,
      -12.893333333333334
    ],
    "direction": [
      -0.08218239768112401,
      -0.030507102169508152,
      -0.996150274922715
    ],
    "quaternion": [
      -0.015242407800266498,
      0.041140388222437214,
      0.0006276830909333567,
      0.999036907964513
    ],
    "fov": 54,
    "view": {
      "enabled": true,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 21.60000000000002,
      "offsetY": 49.91999999999997,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 00:04.000–00:05.000. Design annotations: id: undersea.speed
frame: 140
label: Speed quantity appears and clears
status: proposed design annotation; mixed master is playback authority

**Measured mix:** -18.886 dBFS RMS; -5.48 dBFS peak. Source samples per channel 192000–240000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 00:05.000–00:06.000 · frames 150–179

**Shots:** shot-01
**Narration:** 200 ,000 kilometers
**Captions:** at 200,000 kilometers
**Visible overlay layers:** pacific-depth, light-speed, captions

**00:05.000–00:06.000 · undersea:** 200,000km/s metric appears above the steadily tracked physical pulse; terrain and cable continue passing beneath.
**Sampling:** Output frames 150–179.
- Foreground: Armored cable, fine sand ripples and calibrated near rocks.
- Background: Blue terrain banks, world-space dust and dim horizon.
- Camera: eye[2.64,1.32,z],look[0,.34,z-32],fov54; source offset animation2.5–3.25.
- Light: 75-intensity golden pulse; blue moon follows camera with quantized shadow position.
- Continuity: Next shot earth-pacific; no geographic Earth builder is part of this recipe.
- Evaluated recipe sample: {   "native": 5.5,   "local": 5.5,   "camera_z": -14.6,   "pulse_z": -46.6,   "camera_offset": [     21.6,     49.92   ] }
- Construction source: src/undersea.ts:170-190; src/index.tsx:33-34,43

**Clock / handoff shot-01:** origin 0s; active local range 5.0–5.966666666666667s; reset key 0; {   "enter": false,   "exit": true,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 1.8,   "blurGain": 20,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 150,
    "shot": "shot-01",
    "local": 5,
    "eye": [
      2.64,
      1.32,
      -13
    ],
    "direction": [
      -0.082182397681124,
      -0.030507102169508152,
      -0.996150274922715
    ],
    "quaternion": [
      -0.015242407800266498,
      0.04114038822243721,
      0.0006276830909333566,
      0.999036907964513
    ],
    "fov": 54,
    "view": {
      "enabled": true,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 21.60000000000002,
      "offsetY": 49.91999999999997,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 179,
    "shot": "shot-01",
    "local": 5.966666666666667,
    "eye": [
      2.64,
      1.32,
      -16.093333333333334
    ],
    "direction": [
      -0.082182397681124,
      -0.030507102169508152,
      -0.996150274922715
    ],
    "quaternion": [
      -0.015242407800266498,
      0.04114038822243721,
      0.0006276830909333566,
      0.999036907964513
    ],
    "fov": 54,
    "view": {
      "enabled": true,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 21.60000000000002,
      "offsetY": 49.91999999999997,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 00:05.000–00:06.000. No separately asserted effect onset.

**Measured mix:** -17.948 dBFS RMS; -3.846 dBFS peak. Source samples per channel 240000–288000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 00:06.000–00:07.000 · frames 180–209

**Shots:** shot-01, shot-02
**Narration:** per second.
**Captions:** at 200,000 kilometers / per second.
**Visible overlay layers:** pacific-depth, light-speed, captions

**00:06.000–00:06.400 · undersea:** 200,000km/s metric appears above the steadily tracked physical pulse; terrain and cable continue passing beneath.
**Sampling:** Output frames 180–191.
- Foreground: Armored cable, fine sand ripples and calibrated near rocks.
- Background: Blue terrain banks, world-space dust and dim horizon.
- Camera: eye[2.64,1.32,z],look[0,.34,z-32],fov54; source offset animation2.5–3.25.
- Light: 75-intensity golden pulse; blue moon follows camera with quantized shadow position.
- Continuity: Next shot earth-pacific; no geographic Earth builder is part of this recipe.
- Evaluated recipe sample: {   "native": 6.2,   "local": 6.2,   "camera_z": -16.84,   "pulse_z": -48.84,   "camera_offset": [     21.6,     49.92   ] }
- Construction source: src/undersea.ts:170-190; src/index.tsx:33-34,43

**00:06.400–00:06.633 · undersea:** Speed metric clears; keep Pacific/depth locator and onward cable motion.
**Sampling:** Output frames 192–198.
- Foreground: Armored cable, fine sand ripples and calibrated near rocks.
- Background: Blue terrain banks, world-space dust and dim horizon.
- Camera: eye[2.64,1.32,z],look[0,.34,z-32],fov54; source offset animation2.5–3.25.
- Light: 75-intensity golden pulse; blue moon follows camera with quantized shadow position.
- Continuity: Next shot earth-pacific; no geographic Earth builder is part of this recipe.
- Evaluated recipe sample: {   "native": 6.5165,   "local": 6.5165,   "camera_z": -17.8528,   "pulse_z": -49.8528,   "camera_offset": [     21.6,     49.92   ] }
- Construction source: src/undersea.ts:170-190; src/index.tsx:33-34,43

**00:06.633–00:06.833 · undersea:** Outgoing optical zoom/blur rises through final.2s while the cable chase continues; prepare geographic pullout.
**Sampling:** Output frames 199–204.
- Foreground: Armored cable, fine sand ripples and calibrated near rocks.
- Background: Blue terrain banks, world-space dust and dim horizon.
- Camera: eye[2.64,1.32,z],look[0,.34,z-32],fov54; source offset animation2.5–3.25.
- Light: 75-intensity golden pulse; blue moon follows camera with quantized shadow position.
- Continuity: Next shot earth-pacific; no geographic Earth builder is part of this recipe.
- Evaluated recipe sample: {   "native": 6.733,   "local": 6.733,   "camera_z": -18.5456,   "pulse_z": -50.5456,   "camera_offset": [     21.6,     49.92   ] }
- Construction source: src/undersea.ts:170-190; src/index.tsx:33-34,43

**00:06.833–00:07.000 · earth-pacific:** Pacific gold highlight progress=.20+.80*step(local,0,2.53).Head sprite follows highlighted endpoint on route curve.
**Sampling:** Output frames 205–209.
- Foreground: Billboard Shanghai/Los Angeles, full dim route and gold route.
- Background: Unit Earth with photographic day/night maps, blue atmosphere and8100 seeded stars incl. milky haze; no fog.
- Camera: q=ease(step(local,0,2.53)); eye=over(lat42.5,lon=mix(160,162,q),distance=mix(3.36,3.50,q)); look origin,fov46,roll-.582,viewOffset[2,9.4].
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Earth shader day.32/night1.06/air1, no sun, no physical-light animation. Native-frame star twinkle continues.
- Continuity: View offset, roll, and projection of leader must stay identical; DOM photo/leader remain unscaled during optical handoff.
Optical picture incoming p=1-ease(step(local,0,.23)); scale=1+p*1.8,blur=p*20px,origin50%47%; typography stays sharp/unscaled.
- Construction source: src/index.tsx:22 SHOTS; src/globe-shot.tsx:10-25 GlobeShot

**Clock / handoff shot-01:** origin 0s; active local range 6.0–6.8s; reset key 0; {   "enter": false,   "exit": true,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 1.8,   "blurGain": 20,   "origin": "50% 47%" }
**Clock / handoff shot-02:** origin 6.833s; active local range 0.00033333333333285253–0.1336666666666666s; reset key 6.833; {   "enter": true,   "exit": true,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 1.8,   "blurGain": 20,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 180,
    "shot": "shot-01",
    "local": 6,
    "eye": [
      2.64,
      1.32,
      -16.200000000000003
    ],
    "direction": [
      -0.082182397681124,
      -0.030507102169508152,
      -0.996150274922715
    ],
    "quaternion": [
      -0.015242407800266498,
      0.04114038822243721,
      0.0006276830909333566,
      0.999036907964513
    ],
    "fov": 54,
    "view": {
      "enabled": true,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 21.60000000000002,
      "offsetY": 49.91999999999997,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 209,
    "shot": "shot-02",
    "local": 0.1336666666666666,
    "eye": [
      -2.328877817204914,
      2.2707472241903703,
      -0.8468985149332701
    ],
    "direction": [
      0.692885157482887,
      -0.6755902076156602,
      0.2519683113285158
    ],
    "quaternion": [
      0.019835860389090826,
      -0.7909429146954174,
      -0.4377884457946922,
      0.4270329273772807
    ],
    "fov": 46,
    "view": {
      "enabled": true,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 00:06.000–00:07.000. Design annotations: id: globe.enter
frame: 205
label: Pull out from cable into Pacific route
status: proposed design annotation; mixed master is playback authority

**Measured mix:** -20.221 dBFS RMS; -5.897 dBFS peak. Source samples per channel 288000–336000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 00:07.000–00:08.000 · frames 210–239

**Shots:** shot-02
**Narration:** It is carrying a photo that
**Captions:** It is carrying a photo / that your mom just sent.
**Visible overlay layers:** photo-leader, photo-inset, captions

**00:07.000–00:07.063 · earth-pacific:** Pacific gold highlight progress=.20+.80*step(local,0,2.53).Head sprite follows highlighted endpoint on route curve.
**Sampling:** Output frames 210–211.
- Foreground: Billboard Shanghai/Los Angeles, full dim route and gold route.
- Background: Unit Earth with photographic day/night maps, blue atmosphere and8100 seeded stars incl. milky haze; no fog.
- Camera: q=ease(step(local,0,2.53)); eye=over(lat42.5,lon=mix(160,162,q),distance=mix(3.36,3.50,q)); look origin,fov46,roll-.582,viewOffset[2,9.4].
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Earth shader day.32/night1.06/air1, no sun, no physical-light animation. Native-frame star twinkle continues.
- Continuity: View offset, roll, and projection of leader must stay identical; DOM photo/leader remain unscaled during optical handoff.
Optical picture incoming p=1-ease(step(local,0,.23)); scale=1+p*1.8,blur=p*20px,origin50%47%; typography stays sharp/unscaled.
- Construction source: src/index.tsx:22 SHOTS; src/globe-shot.tsx:10-25 GlobeShot

**00:07.063–00:07.800 · earth-pacific:** Pacific gold highlight progress=.20+.80*step(local,0,2.53).Head sprite follows highlighted endpoint on route curve.
**Sampling:** Output frames 212–233.
- Foreground: Billboard Shanghai/Los Angeles, full dim route and gold route.
- Background: Unit Earth with photographic day/night maps, blue atmosphere and8100 seeded stars incl. milky haze; no fog.
- Camera: q=ease(step(local,0,2.53)); eye=over(lat42.5,lon=mix(160,162,q),distance=mix(3.36,3.50,q)); look origin,fov46,roll-.582,viewOffset[2,9.4].
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Earth shader day.32/night1.06/air1, no sun, no physical-light animation. Native-frame star twinkle continues.
- Continuity: View offset, roll, and projection of leader must stay identical; DOM photo/leader remain unscaled during optical handoff.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/globe-shot.tsx:10-25 GlobeShot

**00:07.800–00:08.000 · earth-pacific:** Pacific gold highlight progress=.20+.80*step(local,0,2.53).Head sprite follows highlighted endpoint on route curve.
**Sampling:** Output frames 234–239.
- Foreground: Billboard Shanghai/Los Angeles, full dim route and gold route. Photo inset at474,551 (170px square) and projected yellow SVG leader are visible above finish.
- Background: Unit Earth with photographic day/night maps, blue atmosphere and8100 seeded stars incl. milky haze; no fog.
- Camera: q=ease(step(local,0,2.53)); eye=over(lat42.5,lon=mix(160,162,q),distance=mix(3.36,3.50,q)); look origin,fov46,roll-.582,viewOffset[2,9.4].
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Earth shader day.32/night1.06/air1, no sun, no physical-light animation. Native-frame star twinkle continues.
- Continuity: View offset, roll, and projection of leader must stay identical; DOM photo/leader remain unscaled during optical handoff.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/globe-shot.tsx:10-25 GlobeShot

**Clock / handoff shot-02:** origin 6.833s; active local range 0.16699999999999982–1.1336666666666666s; reset key 6.833; {   "enter": true,   "exit": true,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 1.8,   "blurGain": 20,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 210,
    "shot": "shot-02",
    "local": 0.16699999999999982,
    "eye": [
      -2.32943685673355,
      2.2711649956887525,
      -0.8466951790175143
    ],
    "direction": [
      0.6929239983248936,
      -0.6755902076156604,
      0.25186147764053174
    ],
    "quaternion": [
      0.019802110694502967,
      -0.7909099918652618,
      -0.43778997366402794,
      0.4270939008449826
    ],
    "fov": 46,
    "view": {
      "enabled": true,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 239,
    "shot": "shot-02",
    "local": 1.1336666666666666,
    "eye": [
      -2.381281855423531,
      2.309936138669911,
      -0.8271615897974521
    ],
    "direction": [
      0.6964567877722099,
      -0.6755902076156604,
      0.2419210907296926
    ],
    "quaternion": [
      0.01666949613819102,
      -0.7878341660929317,
      -0.4379204408647836,
      0.43274142638294644
    ],
    "fov": 46,
    "view": {
      "enabled": true,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 00:07.000–00:08.000. No separately asserted effect onset.

**Measured mix:** -18.194 dBFS RMS; -4.116 dBFS peak. Source samples per channel 336000–384000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 00:08.000–00:09.000 · frames 240–269

**Shots:** shot-02
**Narration:** that your mom just sent.
**Captions:** that your mom just sent.
**Visible overlay layers:** photo-leader, photo-inset, captions

**00:08.000–00:09.000 · earth-pacific:** Pacific gold highlight progress=.20+.80*step(local,0,2.53).Head sprite follows highlighted endpoint on route curve.
**Sampling:** Output frames 240–269.
- Foreground: Billboard Shanghai/Los Angeles, full dim route and gold route. Photo inset at474,551 (170px square) and projected yellow SVG leader are visible above finish.
- Background: Unit Earth with photographic day/night maps, blue atmosphere and8100 seeded stars incl. milky haze; no fog.
- Camera: q=ease(step(local,0,2.53)); eye=over(lat42.5,lon=mix(160,162,q),distance=mix(3.36,3.50,q)); look origin,fov46,roll-.582,viewOffset[2,9.4].
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Earth shader day.32/night1.06/air1, no sun, no physical-light animation. Native-frame star twinkle continues.
- Continuity: View offset, roll, and projection of leader must stay identical; DOM photo/leader remain unscaled during optical handoff.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/globe-shot.tsx:10-25 GlobeShot

**Clock / handoff shot-02:** origin 6.833s; active local range 1.1669999999999998–2.1336666666666666s; reset key 6.833; {   "enter": true,   "exit": true,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 1.8,   "blurGain": 20,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 240,
    "shot": "shot-02",
    "local": 1.1669999999999998,
    "eye": [
      -2.383758661459206,
      2.3117898937403343,
      -0.8261947544367649
    ],
    "direction": [
      0.696622133941097,
      -0.6755902076156602,
      0.24144455652837032
    ],
    "quaternion": [
      0.01651969456506422,
      -0.787686091000509,
      -0.4379261174218599,
      0.43301089757144695
    ],
    "fov": 46,
    "view": {
      "enabled": true,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 269,
    "shot": "shot-02",
    "local": 2.1336666666666666,
    "eye": [
      -2.4458642270675264,
      2.358329676696914,
      -0.8009374947952772
    ],
    "direction": [
      0.7006662118922352,
      -0.6755902076156602,
      0.22944439606670347
    ],
    "quaternion": [
      0.012758236801690498,
      -0.7839384066539052,
      -0.43805183714078816,
      0.439759468282638
    ],
    "fov": 46,
    "view": {
      "enabled": true,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 00:08.000–00:09.000. No separately asserted effect onset.

**Measured mix:** -18.362 dBFS RMS; -5.143 dBFS peak. Source samples per channel 384000–432000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 00:09.000–00:10.000 · frames 270–299

**Shots:** shot-02, shot-03
**Narration:** From the moment your
**Captions:** that your mom just sent. / From the moment
**Visible overlay layers:** photo-leader, photo-inset, captions

**00:09.367–00:09.597 · sending:** The incoming picture zoom and blur settle over 0.23 seconds. The photo is staged in the composer with message-photo progress at zero.
**Sampling:** Output frames 282–287.
- Foreground: An angled phone shows the message thread and an unpressed send arrow.
- Background: Warm studio, dark navy ground, thirty warm/cool bokeh sprites, and thirty-five additional glows.
- Camera: Eye [0.2, 3, 11.5 - 0.15 * local], look [0, 3, 0], FOV 43. The camera makes a slow forward push.
- Light: Warm key, rim, and fill lights plus the phone screen light. Lighting is static except for screen luminance.
- Continuity: The shot starts at local time zero. The composer and message share the same photo asset.
- Construction source: src/scenes.ts:35; src/index.tsx:25; src/kit/phone.tsx:97-121,190-279

**00:09.597–00:10.000 · sending:** Hold the staged photo while the camera pushes slowly toward the phone. Both text messages are already fully visible.
**Sampling:** Output frames 288–299.
- Foreground: The 128-pixel staged photo sits in the composer beneath the text bubbles.
- Background: Warm studio, dark navy ground, thirty warm/cool bokeh sprites, and thirty-five additional glows.
- Camera: Eye [0.2, 3, 11.5 - 0.15 * local], look [0, 3, 0], FOV 43. The camera makes a slow forward push.
- Light: Warm key, rim, and fill lights plus the phone screen light. Lighting is static except for screen luminance.
- Continuity: There is no hand geometry or packet motion in this active shot.
- Construction source: src/scenes.ts:35; src/index.tsx:25; src/kit/phone.tsx:97-121,190-279

**00:09.000–00:09.167 · earth-pacific:** Pacific gold highlight progress=.20+.80*step(local,0,2.53).Head sprite follows highlighted endpoint on route curve.
**Sampling:** Output frames 270–275.
- Foreground: Billboard Shanghai/Los Angeles, full dim route and gold route. Photo inset at474,551 (170px square) and projected yellow SVG leader are visible above finish.
- Background: Unit Earth with photographic day/night maps, blue atmosphere and8100 seeded stars incl. milky haze; no fog.
- Camera: q=ease(step(local,0,2.53)); eye=over(lat42.5,lon=mix(160,162,q),distance=mix(3.36,3.50,q)); look origin,fov46,roll-.582,viewOffset[2,9.4].
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Earth shader day.32/night1.06/air1, no sun, no physical-light animation. Native-frame star twinkle continues.
- Continuity: View offset, roll, and projection of leader must stay identical; DOM photo/leader remain unscaled during optical handoff.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/globe-shot.tsx:10-25 GlobeShot

**00:09.167–00:09.300 · earth-pacific:** Pacific gold highlight progress=.20+.80*step(local,0,2.53).Head sprite follows highlighted endpoint on route curve.
**Sampling:** Output frames 276–278.
- Foreground: Billboard Shanghai/Los Angeles, full dim route and gold route. Photo inset at474,551 (170px square) and projected yellow SVG leader are visible above finish.
- Background: Unit Earth with photographic day/night maps, blue atmosphere and8100 seeded stars incl. milky haze; no fog.
- Camera: q=ease(step(local,0,2.53)); eye=over(lat42.5,lon=mix(160,162,q),distance=mix(3.36,3.50,q)); look origin,fov46,roll-.582,viewOffset[2,9.4].
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Earth shader day.32/night1.06/air1, no sun, no physical-light animation. Native-frame star twinkle continues.
- Continuity: View offset, roll, and projection of leader must stay identical; DOM photo/leader remain unscaled during optical handoff.
Optical picture outgoing p=ease(step(local,duration-.2,duration)); scale=1+p*1.8,blur=p*20px,origin50%47%; typography stays sharp/unscaled.
- Construction source: src/index.tsx:22 SHOTS; src/globe-shot.tsx:10-25 GlobeShot

**00:09.300–00:09.363 · earth-pacific:** Pacific gold highlight progress=.20+.80*step(local,0,2.53).Head sprite follows highlighted endpoint on route curve.
**Sampling:** Output frames 279–280.
- Foreground: Billboard Shanghai/Los Angeles, full dim route and gold route. Photo inset at474,551 (170px square) and projected yellow SVG leader are visible above finish.
- Background: Unit Earth with photographic day/night maps, blue atmosphere and8100 seeded stars incl. milky haze; no fog.
- Camera: q=ease(step(local,0,2.53)); eye=over(lat42.5,lon=mix(160,162,q),distance=mix(3.36,3.50,q)); look origin,fov46,roll-.582,viewOffset[2,9.4].
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Earth shader day.32/night1.06/air1, no sun, no physical-light animation. Native-frame star twinkle continues.
- Continuity: View offset, roll, and projection of leader must stay identical; DOM photo/leader remain unscaled during optical handoff.
Optical picture outgoing p=ease(step(local,duration-.2,duration)); scale=1+p*1.8,blur=p*20px,origin50%47%; typography stays sharp/unscaled.
- Construction source: src/index.tsx:22 SHOTS; src/globe-shot.tsx:10-25 GlobeShot

**00:09.363–00:09.367 · earth-pacific:** Pacific gold highlight progress=.20+.80*step(local,0,2.53). Highlight endpoint reached; hold completed line.
**Sampling:** Output frames 281–281.
- Foreground: Billboard Shanghai/Los Angeles, full dim route and gold route. Photo inset at474,551 (170px square) and projected yellow SVG leader are visible above finish.
- Background: Unit Earth with photographic day/night maps, blue atmosphere and8100 seeded stars incl. milky haze; no fog.
- Camera: q=ease(step(local,0,2.53)); eye=over(lat42.5,lon=mix(160,162,q),distance=mix(3.36,3.50,q)); look origin,fov46,roll-.582,viewOffset[2,9.4].
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Earth shader day.32/night1.06/air1, no sun, no physical-light animation. Native-frame star twinkle continues.
- Continuity: View offset, roll, and projection of leader must stay identical; DOM photo/leader remain unscaled during optical handoff.
Optical picture outgoing p=ease(step(local,duration-.2,duration)); scale=1+p*1.8,blur=p*20px,origin50%47%; typography stays sharp/unscaled.
- Construction source: src/index.tsx:22 SHOTS; src/globe-shot.tsx:10-25 GlobeShot

**Clock / handoff shot-02:** origin 6.833s; active local range 2.167–2.533666666666667s; reset key 6.833; {   "enter": true,   "exit": true,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 1.8,   "blurGain": 20,   "origin": "50% 47%" }
**Clock / handoff shot-03:** origin 9.367s; active local range 0.032999999999999474–0.5996666666666659s; reset key 9.367; {   "enter": true,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 270,
    "shot": "shot-02",
    "local": 2.167,
    "eye": [
      -2.447134981976205,
      2.3592832164694633,
      -0.8004002085983922
    ],
    "direction": [
      0.7007469128741831,
      -0.6755902076156602,
      0.22919780860891997
    ],
    "quaternion": [
      0.012681158628168432,
      -0.7838610160738364,
      -0.4380540752516233,
      0.4398974003685235
    ],
    "fov": 46,
    "view": {
      "enabled": true,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 299,
    "shot": "shot-03",
    "local": 0.5996666666666659,
    "eye": [
      0.2,
      3,
      11.41005
    ],
    "direction": [
      -0.017525714836748776,
      0,
      -0.9998464128652267
    ],
    "quaternion": [
      0,
      0.008763193903295247,
      0,
      0.9999616024791219
    ],
    "fov": 43,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 00:09.000–00:10.000. No separately asserted effect onset.

**Measured mix:** -17.133 dBFS RMS; -4.593 dBFS peak. Source samples per channel 432000–480000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 00:10.000–00:11.000 · frames 300–329

**Shots:** shot-03
**Narration:** your mom's thumb hit the
**Captions:** your mom's thumb / hit the send
**Visible overlay layers:** captions

**00:10.000–00:10.817 · sending:** Hold the staged photo while the camera pushes slowly toward the phone. Both text messages are already fully visible.
**Sampling:** Output frames 300–324.
- Foreground: The 128-pixel staged photo sits in the composer beneath the text bubbles.
- Background: Warm studio, dark navy ground, thirty warm/cool bokeh sprites, and thirty-five additional glows.
- Camera: Eye [0.2, 3, 11.5 - 0.15 * local], look [0, 3, 0], FOV 43. The camera makes a slow forward push.
- Light: Warm key, rim, and fill lights plus the phone screen light. Lighting is static except for screen luminance.
- Continuity: There is no hand geometry or packet motion in this active shot.
- Construction source: src/scenes.ts:35; src/index.tsx:25; src/kit/phone.tsx:97-121,190-279

**00:10.817–00:11.000 · sending:** The send arrow compresses, reaches its peak press at native 10.992, and begins releasing. The photo stays staged until 11.017.
**Sampling:** Output frames 325–329.
- Foreground: The blue send arrow shrinks and changes color. The physical phone remains still.
- Background: Warm studio, dark navy ground, thirty warm/cool bokeh sprites, and thirty-five additional glows.
- Camera: Eye [0.2, 3, 11.5 - 0.15 * local], look [0, 3, 0], FOV 43. The camera makes a slow forward push.
- Light: Warm key, rim, and fill lights plus the phone screen light. Lighting is static except for screen luminance.
- Continuity: pressed = 1 - abs(2 * step(local, 1.45, 1.8) - 1).
- Construction source: src/scenes.ts:35; src/index.tsx:25; src/kit/phone.tsx:97-121,190-279

**Clock / handoff shot-03:** origin 9.367s; active local range 0.6329999999999991–1.599666666666666s; reset key 9.367; {   "enter": true,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 300,
    "shot": "shot-03",
    "local": 0.6329999999999991,
    "eye": [
      0.2,
      3,
      11.40505
    ],
    "direction": [
      -0.017533395788722757,
      0,
      -0.9998462782008622
    ],
    "quaternion": [
      0,
      0.008767034821927125,
      0,
      0.9999615688117374
    ],
    "fov": 43,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 329,
    "shot": "shot-03",
    "local": 1.599666666666666,
    "eye": [
      0.2,
      3,
      11.26005
    ],
    "direction": [
      -0.017759109321584764,
      0,
      -0.9998422945825527
    ],
    "quaternion": [
      0,
      0.008879904769966442,
      0,
      0.9999605728683889
    ],
    "fov": 43,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 00:10.000–00:11.000. Design annotations: id: phone.send
frame: 328
label: Photo leaves composer
status: proposed design annotation; mixed master is playback authority

**Measured mix:** -17.775 dBFS RMS; -6.201 dBFS peak. Source samples per channel 480000–528000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 00:11.000–00:12.000 · frames 330–359

**Shots:** shot-03
**Narration:** the send to the moment that your
**Captions:** hit the send / to the moment / that your phone lights up,
**Visible overlay layers:** captions

**00:11.000–00:11.017 · sending:** The send arrow compresses, reaches its peak press at native 10.992, and begins releasing. The photo stays staged until 11.017.
**Sampling:** Output frames 330–330.
- Foreground: The blue send arrow shrinks and changes color. The physical phone remains still.
- Background: Warm studio, dark navy ground, thirty warm/cool bokeh sprites, and thirty-five additional glows.
- Camera: Eye [0.2, 3, 11.5 - 0.15 * local], look [0, 3, 0], FOV 43. The camera makes a slow forward push.
- Light: Warm key, rim, and fill lights plus the phone screen light. Lighting is static except for screen luminance.
- Continuity: pressed = 1 - abs(2 * step(local, 1.45, 1.8) - 1).
- Construction source: src/scenes.ts:35; src/index.tsx:25; src/kit/phone.tsx:97-121,190-279

**00:11.017–00:11.167 · sending:** The photo begins moving out of the composer into the final message. The send-arrow press returns to zero by 11.167.
**Sampling:** Output frames 331–335.
- Foreground: The photo grows from a 128-pixel composer preview toward a 232-pixel message image as the composer contracts.
- Background: Warm studio, dark navy ground, thirty warm/cool bokeh sprites, and thirty-five additional glows.
- Camera: Eye [0.2, 3, 11.5 - 0.15 * local], look [0, 3, 0], FOV 43. The camera makes a slow forward push.
- Light: Warm key, rim, and fill lights plus the phone screen light. Lighting is static except for screen luminance.
- Continuity: appear = step(local, 1.65, 2.15); compose.photo = 1 - appear. The phone adds its own cubic easing.
- Construction source: src/scenes.ts:35; src/index.tsx:25; src/kit/phone.tsx:97-121,190-279

**00:11.167–00:11.517 · sending:** The photo finishes its move into the right-side message. The composer becomes an empty text field.
**Sampling:** Output frames 336–345.
- Foreground: The final message image reaches 232 pixels while the surrounding message layout shifts.
- Background: Warm studio, dark navy ground, thirty warm/cool bokeh sprites, and thirty-five additional glows.
- Camera: Eye [0.2, 3, 11.5 - 0.15 * local], look [0, 3, 0], FOV 43. The camera makes a slow forward push.
- Light: Warm key, rim, and fill lights plus the phone screen light. Lighting is static except for screen luminance.
- Continuity: The staged preview and arrow disappear once compose.photo falls to 0.02 or below.
- Construction source: src/scenes.ts:35; src/index.tsx:25; src/kit/phone.tsx:97-121,190-279

**00:11.517–00:11.867 · sending:** The Delivered label fades in. The message layout reserves 18 additional pixels as soon as delivery progress becomes positive.
**Sampling:** Output frames 346–356.
- Foreground: The sent photo remains visible with the Delivered label beneath it.
- Background: Warm studio, dark navy ground, thirty warm/cool bokeh sprites, and thirty-five additional glows.
- Camera: Eye [0.2, 3, 11.5 - 0.15 * local], look [0, 3, 0], FOV 43. The camera makes a slow forward push.
- Light: Warm key, rim, and fill lights plus the phone screen light. Lighting is static except for screen luminance.
- Continuity: The screen canvas is redrawn from the current state every frame.
- Construction source: src/scenes.ts:35; src/index.tsx:25; src/kit/phone.tsx:97-121,190-279

**00:11.867–00:12.000 · sending:** Hold the delivered photo until the cut to the first bedside scene.
**Sampling:** Output frames 357–359.
- Foreground: The phone displays the complete photo message, Delivered label, and empty composer.
- Background: Warm studio, dark navy ground, thirty warm/cool bokeh sprites, and thirty-five additional glows.
- Camera: Eye [0.2, 3, 11.5 - 0.15 * local], look [0, 3, 0], FOV 43. The camera makes a slow forward push.
- Light: Warm key, rim, and fill lights plus the phone screen light. Lighting is static except for screen luminance.
- Continuity: The sending clock ends at local 2.8 seconds. The next phone uses lock-screen mode.
- Construction source: src/scenes.ts:35; src/index.tsx:25; src/kit/phone.tsx:97-121,190-279

**Clock / handoff shot-03:** origin 9.367s; active local range 1.6329999999999991–2.599666666666666s; reset key 9.367; {   "enter": true,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 330,
    "shot": "shot-03",
    "local": 1.6329999999999991,
    "eye": [
      0.2,
      3,
      11.25505
    ],
    "direction": [
      -0.01776699622773627,
      0,
      -0.9998421544649155
    ],
    "quaternion": [
      0,
      0.008883848689747887,
      0,
      0.9999605378375976
    ],
    "fov": 43,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 359,
    "shot": "shot-03",
    "local": 2.599666666666666,
    "eye": [
      0.2,
      3,
      11.11005
    ],
    "direction": [
      -0.017998803037321643,
      0,
      -0.9998380084239765
    ],
    "quaternion": [
      0,
      0.008999765997610733,
      0,
      0.9999595012859214
    ],
    "fov": 43,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 00:11.000–00:12.000. No separately asserted effect onset.

**Measured mix:** -16.511 dBFS RMS; -3.713 dBFS peak. Source samples per channel 528000–576000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 00:12.000–00:13.000 · frames 360–389

**Shots:** shot-03, shot-04
**Narration:** phone lights up,
**Captions:** that your phone lights up,
**Visible overlay layers:** elapsed, captions

**00:12.000–00:12.167 · sending:** Hold the delivered photo until the cut to the first bedside scene.
**Sampling:** Output frames 360–365.
- Foreground: The phone displays the complete photo message, Delivered label, and empty composer.
- Background: Warm studio, dark navy ground, thirty warm/cool bokeh sprites, and thirty-five additional glows.
- Camera: Eye [0.2, 3, 11.5 - 0.15 * local], look [0, 3, 0], FOV 43. The camera makes a slow forward push.
- Light: Warm key, rim, and fill lights plus the phone screen light. Lighting is static except for screen luminance.
- Continuity: The sending clock ends at local 2.8 seconds. The next phone uses lock-screen mode.
- Construction source: src/scenes.ts:35; src/index.tsx:25; src/kit/phone.tsx:97-121,190-279

**00:12.167–00:12.517 · bedside-first:** Show the lock screen without a notification for the first 0.35 seconds.
**Sampling:** Output frames 366–375.
- Foreground: The flat phone shows 4:02 and Thursday, October 8 beside the glass and lamp.
- Background: Wood tabletop, translucent glass on the left, modeled lamp on the right, and a curving charger cable.
- Camera: Eye [mix(0.45, 0.1, step(local, 0, 5)), 9, 6], look [0, 0, 0.2], FOV 48.
- Light: Cool studio lights and the phone point light. Phone intensity is 2.2 * (0.55 + 0.45 * notif). The modeled lamp has no dedicated light.
- Continuity: This is a fresh local clock at native 12.167.
- Construction source: src/scenes.ts:34; src/index.tsx:25; src/kit/phone.tsx:281-346

**00:12.517–00:13.000 · bedside-first:** The Mom notification slides upward by 46 screen points, scales from 0.94 to 1, and fades in.
**Sampling:** Output frames 376–389.
- Foreground: The notification shows Mom, Attachment: 1 Image, and the photo thumbnail.
- Background: Wood tabletop, translucent glass on the left, modeled lamp on the right, and a curving charger cable.
- Camera: Eye [mix(0.45, 0.1, step(local, 0, 5)), 9, 6], look [0, 0, 0.2], FOV 48.
- Light: Cool studio lights and the phone point light. Phone intensity is 2.2 * (0.55 + 0.45 * notif). The modeled lamp has no dedicated light.
- Continuity: notif = step(local, 0.35, 1.1). The phone applies cubic easing and increases its screen light with notif.
- Construction source: src/scenes.ts:34; src/index.tsx:25; src/kit/phone.tsx:281-346

**Clock / handoff shot-03:** origin 9.367s; active local range 2.632999999999999–2.799666666666665s; reset key 9.367; {   "enter": true,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }
**Clock / handoff shot-04:** origin 12.167s; active local range 0.032999999999999474–0.799666666666667s; reset key 12.167; {   "enter": false,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 360,
    "shot": "shot-03",
    "local": 2.632999999999999,
    "eye": [
      0.2,
      3,
      11.10505
    ],
    "direction": [
      -0.018006904292274757,
      0,
      -0.9998378625546288
    ],
    "quaternion": [
      0,
      0.009003817117510974,
      0,
      0.9999594648171067
    ],
    "fov": 43,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 389,
    "shot": "shot-04",
    "local": 0.799666666666667,
    "eye": [
      0.39402333333333334,
      9,
      6
    ],
    "direction": [
      -0.03677561746643775,
      -0.8400024292925287,
      -0.5413348988774073
    ],
    "quaternion": [
      -0.477959944502253,
      0.029779892758363423,
      0.0162164292848903,
      0.8777268805613463
    ],
    "fov": 48,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 00:12.000–00:13.000. Design annotations: id: phone.receive
frame: 365
label: Receiver lock screen illuminates
status: proposed design annotation; mixed master is playback authority

**Measured mix:** -17.32 dBFS RMS; -2.343 dBFS peak. Source samples per channel 576000–624000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 00:13.000–00:14.000 · frames 390–419

**Shots:** shot-04
**Narration:** only 200 millisecond
**Captions:** only 200 milliseconds passes.
**Visible overlay layers:** elapsed, captions

**00:13.000–00:13.267 · bedside-first:** The Mom notification slides upward by 46 screen points, scales from 0.94 to 1, and fades in.
**Sampling:** Output frames 390–398.
- Foreground: The notification shows Mom, Attachment: 1 Image, and the photo thumbnail.
- Background: Wood tabletop, translucent glass on the left, modeled lamp on the right, and a curving charger cable.
- Camera: Eye [mix(0.45, 0.1, step(local, 0, 5)), 9, 6], look [0, 0, 0.2], FOV 48.
- Light: Cool studio lights and the phone point light. Phone intensity is 2.2 * (0.55 + 0.45 * notif). The modeled lamp has no dedicated light.
- Continuity: notif = step(local, 0.35, 1.1). The phone applies cubic easing and increases its screen light with notif.
- Construction source: src/scenes.ts:34; src/index.tsx:25; src/kit/phone.tsx:281-346

**00:13.267–00:14.000 · bedside-first:** Hold the complete notification while the camera continues its slight lateral drift.
**Sampling:** Output frames 399–419.
- Foreground: The phone, charger, and notification remain still.
- Background: Wood tabletop, translucent glass on the left, modeled lamp on the right, and a curving charger cable.
- Camera: Eye [mix(0.45, 0.1, step(local, 0, 5)), 9, 6], look [0, 0, 0.2], FOV 48.
- Light: Cool studio lights and the phone point light. Phone intensity is 2.2 * (0.55 + 0.45 * notif). The modeled lamp has no dedicated light.
- Continuity: This instance ends at local 2.7 seconds, before the five-second camera path reaches its endpoint.
- Construction source: src/scenes.ts:34; src/index.tsx:25; src/kit/phone.tsx:281-346

**Clock / handoff shot-04:** origin 12.167s; active local range 0.8330000000000002–1.799666666666667s; reset key 12.167; {   "enter": false,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 390,
    "shot": "shot-04",
    "local": 0.8330000000000002,
    "eye": [
      0.39169,
      9,
      6
    ],
    "direction": [
      -0.03655813098478953,
      -0.8400091369784926,
      -0.541339221608362
    ],
    "quaternion": [
      -0.4779686074847366,
      0.029604044570309265,
      0.01612090965672303,
      0.8777298713590762
    ],
    "fov": 48,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 419,
    "shot": "shot-04",
    "local": 1.799666666666667,
    "eye": [
      0.32402333333333333,
      9,
      6
    ],
    "direction": [
      -0.030248888223188934,
      -0.8401863878384284,
      -0.5414534499403205
    ],
    "quaternion": [
      -0.47819764427920264,
      0.024500776225682305,
      0.013347110746124342,
      0.877808965324968
    ],
    "fov": 48,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 00:13.000–00:14.000. No separately asserted effect onset.

**Measured mix:** -15.926 dBFS RMS; -4.332 dBFS peak. Source samples per channel 624000–672000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 00:14.000–00:15.000 · frames 420–449

**Shots:** shot-04, shot-05
**Narration:** millisecond passes.
**Captions:** only 200 milliseconds passes.
**Visible overlay layers:** elapsed, captions

**00:14.000–00:14.867 · bedside-first:** Hold the complete notification while the camera continues its slight lateral drift.
**Sampling:** Output frames 420–446.
- Foreground: The phone, charger, and notification remain still.
- Background: Wood tabletop, translucent glass on the left, modeled lamp on the right, and a curving charger cable.
- Camera: Eye [mix(0.45, 0.1, step(local, 0, 5)), 9, 6], look [0, 0, 0.2], FOV 48.
- Light: Cool studio lights and the phone point light. Phone intensity is 2.2 * (0.55 + 0.45 * notif). The modeled lamp has no dedicated light.
- Continuity: This instance ends at local 2.7 seconds, before the five-second camera path reaches its endpoint.
- Construction source: src/scenes.ts:34; src/index.tsx:25; src/kit/phone.tsx:281-346

**00:14.867–00:15.000 · slowdown:** Hold the gold signal at the left endpoint, x = -6, for the first 0.5 seconds.
**Sampling:** Output frames 447–449.
- Foreground: One gold glow sprite sits at y = 3.6, z = -1 below the 200 ms overlay.
- Background: Bedroom set with bed, pillow, table, framed art, and lamp.
- Camera: Eye [0.2, 3, 14 - 0.025 * local], look [0, 3, -2], FOV 47.
- Light: Cool wide studio plus a warm #ffcd91 practical light with intensity 4 at [6, 2.5, -4].
- Continuity: Room network nodes and packet objects are constructed but hidden for slowdown.
- Construction source: src/extensions.ts:8-9; src/index.tsx:36-38; src/camera-edit.ts:4-10

**Clock / handoff shot-04:** origin 12.167s; active local range 1.8330000000000002–2.6996666666666673s; reset key 12.167; {   "enter": false,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }
**Clock / handoff shot-05:** origin 14.867s; active local range 0.032999999999999474–0.0996666666666659s; reset key 14.867; {   "enter": false,   "exit": true,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 420,
    "shot": "shot-04",
    "local": 1.8330000000000002,
    "eye": [
      0.32169000000000003,
      9,
      6
    ],
    "direction": [
      -0.030031259286709085,
      -0.8401919039459782,
      -0.5414570047651859
    ],
    "quaternion": [
      -0.47820477560793156,
      0.024324683002556278,
      0.01325134214134969,
      0.877811428675912
    ],
    "fov": 48,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 449,
    "shot": "shot-05",
    "local": 0.0996666666666659,
    "eye": [
      0.2,
      3,
      13.997508333333334
    ],
    "direction": [
      -0.012500970013410443,
      0,
      -0.9999218598214183
    ],
    "quaternion": [
      0,
      0.006250607113786945,
      0,
      0.9999804647645417
    ],
    "fov": 47,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 00:14.000–00:15.000. No separately asserted effect onset.

**Measured mix:** -21.295 dBFS RMS; -4.421 dBFS peak. Source samples per channel 672000–720000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 00:15.000–00:16.000 · frames 450–479

**Shots:** shot-05
**Narration:** Now, let's slow down
**Captions:** Now let's slow down
**Visible overlay layers:** elapsed, captions

**00:15.000–00:15.367 · slowdown:** Hold the gold signal at the left endpoint, x = -6, for the first 0.5 seconds.
**Sampling:** Output frames 450–461.
- Foreground: One gold glow sprite sits at y = 3.6, z = -1 below the 200 ms overlay.
- Background: Bedroom set with bed, pillow, table, framed art, and lamp.
- Camera: Eye [0.2, 3, 14 - 0.025 * local], look [0, 3, -2], FOV 47.
- Light: Cool wide studio plus a warm #ffcd91 practical light with intensity 4 at [6, 2.5, -4].
- Continuity: Room network nodes and packet objects are constructed but hidden for slowdown.
- Construction source: src/extensions.ts:8-9; src/index.tsx:36-38; src/camera-edit.ts:4-10

**00:15.367–00:16.000 · slowdown:** Move the signal linearly across the room toward the right endpoint.
**Sampling:** Output frames 462–479.
- Foreground: The gold head travels horizontally beneath the 200 ms timer.
- Background: Bedroom set with bed, pillow, table, framed art, and lamp.
- Camera: Eye [0.2, 3, 14 - 0.025 * local], look [0, 3, -2], FOV 47.
- Light: Cool wide studio plus a warm #ffcd91 practical light with intensity 4 at [6, 2.5, -4].
- Continuity: The movement window is local 0.5–5.0 seconds, covering 11 world units.
- Construction source: src/extensions.ts:8-9; src/index.tsx:36-38; src/camera-edit.ts:4-10

**Clock / handoff shot-05:** origin 14.867s; active local range 0.13299999999999912–1.099666666666666s; reset key 14.867; {   "enter": false,   "exit": true,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 450,
    "shot": "shot-05",
    "local": 0.13299999999999912,
    "eye": [
      0.2,
      3,
      13.996675
    ],
    "direction": [
      -0.012501621139153814,
      0,
      -0.9999218516808667
    ],
    "quaternion": [
      0,
      0.00625093269574071,
      0,
      0.9999804627293643
    ],
    "fov": 47,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 479,
    "shot": "shot-05",
    "local": 1.099666666666666,
    "eye": [
      0.2,
      3,
      13.972508333333334
    ],
    "direction": [
      -0.012520533333686412,
      0,
      -0.9999216150504199
    ],
    "quaternion": [
      0,
      0.006260389348121115,
      0,
      0.9999804035705949
    ],
    "fov": 47,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 00:15.000–00:16.000. Design annotations: id: time.slow
frame: 459
label: Time scale expands
status: proposed design annotation; mixed master is playback authority

**Measured mix:** -16.509 dBFS RMS; -2.605 dBFS peak. Source samples per channel 720000–768000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 00:16.000–00:17.000 · frames 480–509

**Shots:** shot-05
**Narration:** down that 200 millisecond
**Captions:** Now let's slow down / that 200 milliseconds
**Visible overlay layers:** elapsed, captions

**00:16.000–00:17.000 · slowdown:** Move the signal linearly across the room toward the right endpoint.
**Sampling:** Output frames 480–509.
- Foreground: The gold head travels horizontally beneath the 200 ms timer.
- Background: Bedroom set with bed, pillow, table, framed art, and lamp.
- Camera: Eye [0.2, 3, 14 - 0.025 * local], look [0, 3, -2], FOV 47.
- Light: Cool wide studio plus a warm #ffcd91 practical light with intensity 4 at [6, 2.5, -4].
- Continuity: The movement window is local 0.5–5.0 seconds, covering 11 world units.
- Construction source: src/extensions.ts:8-9; src/index.tsx:36-38; src/camera-edit.ts:4-10

**Clock / handoff shot-05:** origin 14.867s; active local range 1.1329999999999991–2.099666666666664s; reset key 14.867; {   "enter": false,   "exit": true,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 480,
    "shot": "shot-05",
    "local": 1.1329999999999991,
    "eye": [
      0.2,
      3,
      13.971675
    ],
    "direction": [
      -0.012521186498868648,
      0,
      -0.9999216068715892
    ],
    "quaternion": [
      0,
      0.006260715949914044,
      0,
      0.9999804015258472
    ],
    "fov": 47,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 509,
    "shot": "shot-05",
    "local": 2.099666666666664,
    "eye": [
      0.2,
      3,
      13.947508333333333
    ],
    "direction": [
      -0.01254015797612137,
      0,
      -0.9999213691275599
    ],
    "quaternion": [
      0,
      0.00627020224714046,
      0,
      0.9999803420886733
    ],
    "fov": 47,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 00:16.000–00:17.000. No separately asserted effect onset.

**Measured mix:** -15.702 dBFS RMS; -3.377 dBFS peak. Source samples per channel 768000–816000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 00:17.000–00:18.000 · frames 510–539

**Shots:** shot-05
**Narration:** millisecond 750 times
**Captions:** that 200 milliseconds / 750 times
**Visible overlay layers:** elapsed, slow-motion, captions

**00:17.000–00:17.100 · slowdown:** Move the signal linearly across the room toward the right endpoint.
**Sampling:** Output frames 510–512.
- Foreground: The gold head travels horizontally beneath the 200 ms timer.
- Background: Bedroom set with bed, pillow, table, framed art, and lamp.
- Camera: Eye [0.2, 3, 14 - 0.025 * local], look [0, 3, -2], FOV 47.
- Light: Cool wide studio plus a warm #ffcd91 practical light with intensity 4 at [6, 2.5, -4].
- Continuity: The movement window is local 0.5–5.0 seconds, covering 11 world units.
- Construction source: src/extensions.ts:8-9; src/index.tsx:36-38; src/camera-edit.ts:4-10

**00:17.100–00:18.000 · slowdown:** The gold 750× overlay appears while the signal continues to x = 5.
**Sampling:** Output frames 513–539.
- Foreground: The moving head sits beneath the 200 ms and 750× comparison.
- Background: Bedroom set with bed, pillow, table, framed art, and lamp.
- Camera: Eye [0.2, 3, 14 - 0.025 * local], look [0, 3, -2], FOV 47.
- Light: Cool wide studio plus a warm #ffcd91 practical light with intensity 4 at [6, 2.5, -4].
- Continuity: The overlay begins at global 17.1 seconds independently of the head position.
- Construction source: src/extensions.ts:8-9; src/index.tsx:36-38; src/camera-edit.ts:4-10

**Clock / handoff shot-05:** origin 14.867s; active local range 2.132999999999999–3.099666666666664s; reset key 14.867; {   "enter": false,   "exit": true,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 510,
    "shot": "shot-05",
    "local": 2.132999999999999,
    "eye": [
      0.2,
      3,
      13.946675
    ],
    "direction": [
      -0.012540813190338541,
      0,
      -0.9999213609102093
    ],
    "quaternion": [
      0,
      0.006270529873571537,
      0,
      0.9999803400342951
    ],
    "fov": 47,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 539,
    "shot": "shot-05",
    "local": 3.099666666666664,
    "eye": [
      0.2,
      3,
      13.922508333333333
    ],
    "direction": [
      -0.012559844229470965,
      0,
      -0.9999211220455999
    ],
    "quaternion": [
      0,
      0.006280045955251152,
      0,
      0.9999802803169671
    ],
    "fov": 47,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 00:17.000–00:18.000. No separately asserted effect onset.

**Measured mix:** -15.647 dBFS RMS; -3.175 dBFS peak. Source samples per channel 816000–864000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 00:18.000–00:19.000 · frames 540–569

**Shots:** shot-05
**Narration:** times so we can see everything
**Captions:** 750 times / so we can see everything
**Visible overlay layers:** elapsed, slow-motion, captions

**00:18.000–00:19.000 · slowdown:** The gold 750× overlay appears while the signal continues to x = 5.
**Sampling:** Output frames 540–569.
- Foreground: The moving head sits beneath the 200 ms and 750× comparison.
- Background: Bedroom set with bed, pillow, table, framed art, and lamp.
- Camera: Eye [0.2, 3, 14 - 0.025 * local], look [0, 3, -2], FOV 47.
- Light: Cool wide studio plus a warm #ffcd91 practical light with intensity 4 at [6, 2.5, -4].
- Continuity: The overlay begins at global 17.1 seconds independently of the head position.
- Construction source: src/extensions.ts:8-9; src/index.tsx:36-38; src/camera-edit.ts:4-10

**Clock / handoff shot-05:** origin 14.867s; active local range 3.132999999999999–4.099666666666664s; reset key 14.867; {   "enter": false,   "exit": true,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 540,
    "shot": "shot-05",
    "local": 3.132999999999999,
    "eye": [
      0.2,
      3,
      13.921675
    ],
    "direction": [
      -0.012560501502379463,
      0,
      -0.9999211137894874
    ],
    "quaternion": [
      0,
      0.006280374611149515,
      0,
      0.9999802782528983
    ],
    "fov": 47,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 569,
    "shot": "shot-05",
    "local": 4.099666666666664,
    "eye": [
      0.2,
      3,
      13.897508333333333
    ],
    "direction": [
      -0.012579592384306483,
      0,
      -0.9999208737972444
    ],
    "quaternion": [
      0,
      0.006289920617767449,
      0,
      0.9999802182536524
    ],
    "fov": 47,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 00:18.000–00:19.000. No separately asserted effect onset.

**Measured mix:** -18.196 dBFS RMS; -3.458 dBFS peak. Source samples per channel 864000–912000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 00:19.000–00:20.000 · frames 570–599

**Shots:** shot-05
**Narration:** everything that happens to the photo.
**Captions:** so we can see everything / that happens to the photo.
**Visible overlay layers:** elapsed, slow-motion, captions

**00:19.000–00:19.867 · slowdown:** The gold 750× overlay appears while the signal continues to x = 5.
**Sampling:** Output frames 570–596.
- Foreground: The moving head sits beneath the 200 ms and 750× comparison.
- Background: Bedroom set with bed, pillow, table, framed art, and lamp.
- Camera: Eye [0.2, 3, 14 - 0.025 * local], look [0, 3, -2], FOV 47.
- Light: Cool wide studio plus a warm #ffcd91 practical light with intensity 4 at [6, 2.5, -4].
- Continuity: The overlay begins at global 17.1 seconds independently of the head position.
- Construction source: src/extensions.ts:8-9; src/index.tsx:36-38; src/camera-edit.ts:4-10

**00:19.867–00:20.000 · slowdown:** Hold the signal at x = 5 after its horizontal journey ends.
**Sampling:** Output frames 597–599.
- Foreground: The head rests at the right side of the static room.
- Background: Bedroom set with bed, pillow, table, framed art, and lamp.
- Camera: Eye [0.2, 3, 14 - 0.025 * local], look [0, 3, -2], FOV 47.
- Light: Cool wide studio plus a warm #ffcd91 practical light with intensity 4 at [6, 2.5, -4].
- Continuity: The movement finishes before the outgoing picture handoff starts.
- Construction source: src/extensions.ts:8-9; src/index.tsx:36-38; src/camera-edit.ts:4-10

**Clock / handoff shot-05:** origin 14.867s; active local range 4.132999999999999–5.099666666666664s; reset key 14.867; {   "enter": false,   "exit": true,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 570,
    "shot": "shot-05",
    "local": 4.132999999999999,
    "eye": [
      0.2,
      3,
      13.896675
    ],
    "direction": [
      -0.012580251725623453,
      0,
      -0.9999208655021258
    ],
    "quaternion": [
      0,
      0.006290250307992632,
      0,
      0.9999802161798316
    ],
    "fov": 47,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 599,
    "shot": "shot-05",
    "local": 5.099666666666664,
    "eye": [
      0.2,
      3,
      13.872508333333334
    ],
    "direction": [
      -0.012599402733029164,
      0,
      -0.9999206243751407
    ],
    "quaternion": [
      0,
      0.006299826380918853,
      0,
      0.9999801558968909
    ],
    "fov": 47,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 00:19.000–00:20.000. No separately asserted effect onset.

**Measured mix:** -17.272 dBFS RMS; -3.032 dBFS peak. Source samples per channel 912000–960000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 00:20.000–00:21.000 · frames 600–629

**Shots:** shot-05, shot-06
**Narration:** photo. At zero
**Captions:** that happens to the photo. / At 0 milliseconds,
**Visible overlay layers:** elapsed, slow-motion, captions

**00:20.000–00:20.167 · slowdown:** Hold the signal at x = 5 after its horizontal journey ends.
**Sampling:** Output frames 600–605.
- Foreground: The head rests at the right side of the static room.
- Background: Bedroom set with bed, pillow, table, framed art, and lamp.
- Camera: Eye [0.2, 3, 14 - 0.025 * local], look [0, 3, -2], FOV 47.
- Light: Cool wide studio plus a warm #ffcd91 practical light with intensity 4 at [6, 2.5, -4].
- Continuity: The movement finishes before the outgoing picture handoff starts.
- Construction source: src/extensions.ts:8-9; src/index.tsx:36-38; src/camera-edit.ts:4-10

**00:20.167–00:20.367 · slowdown:** The outgoing picture scales from 1 to 1.32 and blurs from 0 to 9 pixels.
**Sampling:** Output frames 606–611.
- Foreground: The room and signal blur while the DOM comparison text remains sharp above them.
- Background: Bedroom set with bed, pillow, table, framed art, and lamp.
- Camera: Eye [0.2, 3, 14 - 0.025 * local], look [0, 3, -2], FOV 47.
- Light: Cool wide studio plus a warm #ffcd91 practical light with intensity 4 at [6, 2.5, -4].
- Continuity: The next binary scene receives the global native clock at 20.367 seconds.
- Construction source: src/extensions.ts:8-9; src/index.tsx:36-38; src/camera-edit.ts:4-10

**00:20.367–00:20.597 · binary:** The incoming picture handoff settles onto the intact photo.
**Sampling:** Output frames 612–617.
- Foreground: A 32 × 32 photo plane is visible; the data world remains hidden.
- Background: Dark navy sky, photo-derived decimal/binary terrain, coarse far-field tiles, and fog.
- Camera: Use the data-journey actualFieldCamera formula: distant photo view, dive/recovery at 21.76–23.3, then a wider field view at 25–27.8. Foreground compensation preserves baseline placement.
- Light: Dim warm studio, point-light pool intensity 95 at [-3, 7, -19], and grazing directional light intensity 1.4. The photo uses an unlit Basic material.
- Continuity: The data builder receives global native time. The initial camera eye is [0, 0, 92].
- Construction source: src/data-shots.ts:227-285

**00:20.597–00:21.000 · binary:** Hold the intact photo before the camera dive begins.
**Sampling:** Output frames 618–629.
- Foreground: The full-color photograph uses the vertical UV crop 0.05–1.0.
- Background: Dark navy sky, photo-derived decimal/binary terrain, coarse far-field tiles, and fog.
- Camera: Use the data-journey actualFieldCamera formula: distant photo view, dive/recovery at 21.76–23.3, then a wider field view at 25–27.8. Foreground compensation preserves baseline placement.
- Light: Dim warm studio, point-light pool intensity 95 at [-3, 7, -19], and grazing directional light intensity 1.4. The photo uses an unlit Basic material.
- Continuity: The photograph uses a Basic material outside scene tone mapping.
- Construction source: src/data-shots.ts:227-285

**Clock / handoff shot-05:** origin 14.867s; active local range 5.132999999999999–5.499666666666666s; reset key 14.867; {   "enter": false,   "exit": true,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }
**Clock / handoff shot-06:** origin 20.367s; active local range 0.0329999999999977–0.5996666666666641s; reset key 20.367; {   "enter": true,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 600,
    "shot": "shot-05",
    "local": 5.132999999999999,
    "eye": [
      0.2,
      3,
      13.871675
    ],
    "direction": [
      -0.012600064152532982,
      0,
      -0.9999206160407695
    ],
    "quaternion": [
      0,
      0.006300157110361015,
      0,
      0.9999801538132567
    ],
    "fov": 47,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 629,
    "shot": "shot-06",
    "local": 0.5996666666666641,
    "eye": [
      0,
      0,
      92
    ],
    "direction": [
      0,
      -0.08662961636484198,
      -0.996240588195683
    ],
    "quaternion": [
      -0.043355575214250514,
      0,
      0,
      0.9990597049715506
    ],
    "fov": 50,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 00:20.000–00:21.000. Design annotations: id: photo.binary
frame: 611
label: Photo changes to individual bits
status: proposed design annotation; mixed master is playback authority

**Measured mix:** -20.25 dBFS RMS; -3.343 dBFS peak. Source samples per channel 960000–1008000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 00:21.000–00:22.000 · frames 630–659

**Shots:** shot-06
**Narration:** zero millisecond, the phone
**Captions:** At 0 milliseconds, / the phone doesn't recognize
**Visible overlay layers:** elapsed, captions

**00:21.000–00:21.760 · binary:** Hold the intact photo before the camera dive begins.
**Sampling:** Output frames 630–652.
- Foreground: The full-color photograph uses the vertical UV crop 0.05–1.0.
- Background: Dark navy sky, photo-derived decimal/binary terrain, coarse far-field tiles, and fog.
- Camera: Use the data-journey actualFieldCamera formula: distant photo view, dive/recovery at 21.76–23.3, then a wider field view at 25–27.8. Foreground compensation preserves baseline placement.
- Light: Dim warm studio, point-light pool intensity 95 at [-3, 7, -19], and grazing directional light intensity 1.4. The photo uses an unlit Basic material.
- Continuity: The photograph uses a Basic material outside scene tone mapping.
- Construction source: src/data-shots.ts:227-285

**00:21.760–00:21.830 · binary:** Begin the camera dive and pivot the photo toward the floor.
**Sampling:** Output frames 653–654.
- Foreground: The intact photo remains visible for the first 0.07 seconds of the dive.
- Background: Dark navy sky, photo-derived decimal/binary terrain, coarse far-field tiles, and fog.
- Camera: Use the data-journey actualFieldCamera formula: distant photo view, dive/recovery at 21.76–23.3, then a wider field view at 25–27.8. Foreground compensation preserves baseline placement.
- Light: Dim warm studio, point-light pool intensity 95 at [-3, 7, -19], and grazing directional light intensity 1.4. The photo uses an unlit Basic material.
- Continuity: dive = blend(native, 21.76, 22.3).
- Construction source: src/data-shots.ts:227-285

**00:21.830–00:22.000 · binary:** Replace the intact plane with 128 × 128 physical photo tiles as the dive continues.
**Sampling:** Output frames 655–659.
- Foreground: The photo pixels develop small depth waves and darken from 1 to 0.62.
- Background: Dark navy sky, photo-derived decimal/binary terrain, coarse far-field tiles, and fog.
- Camera: Use the data-journey actualFieldCamera formula: distant photo view, dive/recovery at 21.76–23.3, then a wider field view at 25–27.8. Foreground compensation preserves baseline placement.
- Light: Dim warm studio, point-light pool intensity 95 at [-3, 7, -19], and grazing directional light intensity 1.4. The photo uses an unlit Basic material.
- Continuity: The tile UV mapping preserves the intact photo crop and color pipeline.
- Construction source: src/data-shots.ts:227-285

**Clock / handoff shot-06:** origin 20.367s; active local range 0.6329999999999991–1.5996666666666641s; reset key 20.367; {   "enter": true,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 630,
    "shot": "shot-06",
    "local": 0.6329999999999991,
    "eye": [
      0,
      0,
      92
    ],
    "direction": [
      0,
      -0.08662961636484198,
      -0.996240588195683
    ],
    "quaternion": [
      -0.043355575214250514,
      0,
      0,
      0.9990597049715506
    ],
    "fov": 50,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 659,
    "shot": "shot-06",
    "local": 1.5996666666666641,
    "eye": [
      -0.8230499413433883,
      2.308212665713153,
      55.49669830727665
    ],
    "direction": [
      0.014688671624022799,
      -0.13723718047595962,
      -0.9904293004656771
    ],
    "quaternion": [
      -0.06889718982412273,
      -0.006207012284524953,
      0.01673601093234889,
      0.9974640625961975
    ],
    "fov": 50,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 00:21.000–00:22.000. No separately asserted effect onset.

**Measured mix:** -16.969 dBFS RMS; -4.529 dBFS peak. Source samples per channel 1008000–1056000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 00:22.000–00:23.000 · frames 660–689

**Shots:** shot-06
**Narration:** phone doesn't recognize the
**Captions:** the phone doesn't recognize / the photo.
**Visible overlay layers:** elapsed, captions

**00:22.000–00:22.300 · binary:** Replace the intact plane with 128 × 128 physical photo tiles as the dive continues.
**Sampling:** Output frames 660–668.
- Foreground: The photo pixels develop small depth waves and darken from 1 to 0.62.
- Background: Dark navy sky, photo-derived decimal/binary terrain, coarse far-field tiles, and fog.
- Camera: Use the data-journey actualFieldCamera formula: distant photo view, dive/recovery at 21.76–23.3, then a wider field view at 25–27.8. Foreground compensation preserves baseline placement.
- Light: Dim warm studio, point-light pool intensity 95 at [-3, 7, -19], and grazing directional light intensity 1.4. The photo uses an unlit Basic material.
- Continuity: The tile UV mapping preserves the intact photo crop and color pipeline.
- Construction source: src/data-shots.ts:227-285

**00:22.300–00:22.650 · binary:** Recover the camera from the low dive while the photo lies horizontally.
**Sampling:** Output frames 669–679.
- Foreground: The tiled photo is flat at group y = 0.4, still above a hidden data world.
- Background: Dark navy sky, photo-derived decimal/binary terrain, coarse far-field tiles, and fog.
- Camera: Use the data-journey actualFieldCamera formula: distant photo view, dive/recovery at 21.76–23.3, then a wider field view at 25–27.8. Foreground compensation preserves baseline placement.
- Light: Dim warm studio, point-light pool intensity 95 at [-3, 7, -19], and grazing directional light intensity 1.4. The photo uses an unlit Basic material.
- Continuity: The photo group rotation is now -π/2 around X.
- Construction source: src/data-shots.ts:227-285

**00:22.650–00:22.720 · binary:** Begin fading the decimal data world in beneath the photo.
**Sampling:** Output frames 680–681.
- Foreground: Photo tiles overlap the first visible decimal cells.
- Background: Dark navy sky, photo-derived decimal/binary terrain, coarse far-field tiles, and fog.
- Camera: Use the data-journey actualFieldCamera formula: distant photo view, dive/recovery at 21.76–23.3, then a wider field view at 25–27.8. Foreground compensation preserves baseline placement.
- Light: Dim warm studio, point-light pool intensity 95 at [-3, 7, -19], and grazing directional light intensity 1.4. The photo uses an unlit Basic material.
- Continuity: The field fade starts at 22.65; photo-tile shrink starts at 22.72.
- Construction source: src/data-shots.ts:227-285

**00:22.720–00:23.000 · binary:** Shrink the photo tiles while the decimal field fades fully in.
**Sampling:** Output frames 682–689.
- Foreground: The image breaks down into the physical decimal-cell surface.
- Background: Dark navy sky, photo-derived decimal/binary terrain, coarse far-field tiles, and fog.
- Camera: Use the data-journey actualFieldCamera formula: distant photo view, dive/recovery at 21.76–23.3, then a wider field view at 25–27.8. Foreground compensation preserves baseline placement.
- Light: Dim warm studio, point-light pool intensity 95 at [-3, 7, -19], and grazing directional light intensity 1.4. The photo uses an unlit Basic material.
- Continuity: showData runs from 22.72–23.32. Field opacity reaches 1 at 23.05.
- Construction source: src/data-shots.ts:227-285

**Clock / handoff shot-06:** origin 20.367s; active local range 1.6329999999999991–2.599666666666664s; reset key 20.367; {   "enter": true,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 660,
    "shot": "shot-06",
    "local": 1.6329999999999991,
    "eye": [
      -1.0073373187239913,
      2.8151683291277694,
      46.98200468537459
    ],
    "direction": [
      0.02116955589433936,
      -0.15717579687567534,
      -0.9873437186612031
    ],
    "quaternion": [
      -0.0790729811604457,
      -0.008695074456166262,
      0.02427921990994913,
      0.9965351869408152
    ],
    "fov": 50,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 689,
    "shot": "shot-06",
    "local": 2.599666666666664,
    "eye": [
      -0.6714238683127643,
      10.967473251028771,
      8.551999999999994
    ],
    "direction": [
      0.045123322772423244,
      -0.7370736413462726,
      -0.6743043326084461
    ],
    "quaternion": [
      -0.4018713549755351,
      -0.03670487359880655,
      -0.0273888321773426,
      0.9145501725855092
    ],
    "fov": 50,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 00:22.000–00:23.000. No separately asserted effect onset.

**Measured mix:** -15.713 dBFS RMS; -2.97 dBFS peak. Source samples per channel 1056000–1104000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 00:23.000–00:24.000 · frames 690–719

**Shots:** shot-06
**Narration:** photo. It only knows
**Captions:** the photo. / It only knows
**Visible overlay layers:** elapsed, captions

**00:23.000–00:23.050 · binary:** Shrink the photo tiles while the decimal field fades fully in.
**Sampling:** Output frames 690–691.
- Foreground: The image breaks down into the physical decimal-cell surface.
- Background: Dark navy sky, photo-derived decimal/binary terrain, coarse far-field tiles, and fog.
- Camera: Use the data-journey actualFieldCamera formula: distant photo view, dive/recovery at 21.76–23.3, then a wider field view at 25–27.8. Foreground compensation preserves baseline placement.
- Light: Dim warm studio, point-light pool intensity 95 at [-3, 7, -19], and grazing directional light intensity 1.4. The photo uses an unlit Basic material.
- Continuity: showData runs from 22.72–23.32. Field opacity reaches 1 at 23.05.
- Construction source: src/data-shots.ts:227-285

**00:23.050–00:23.340 · binary:** Finish shrinking the photo tiles and hide the photograph group at 23.34.
**Sampling:** Output frames 692–700.
- Foreground: The decimal field remains while the last tiny photo faces vanish.
- Background: Dark navy sky, photo-derived decimal/binary terrain, coarse far-field tiles, and fog.
- Camera: Use the data-journey actualFieldCamera formula: distant photo view, dive/recovery at 21.76–23.3, then a wider field view at 25–27.8. Foreground compensation preserves baseline placement.
- Light: Dim warm studio, point-light pool intensity 95 at [-3, 7, -19], and grazing directional light intensity 1.4. The photo uses an unlit Basic material.
- Continuity: The camera reaches its stable field phase at 23.3.
- Construction source: src/data-shots.ts:227-285

**00:23.340–00:24.000 · binary:** Hold the decimal-cell field with its gold numerals and varied physical heights.
**Sampling:** Output frames 701–719.
- Foreground: Photo-derived luminance values label the nearby tiles.
- Background: Dark navy sky, photo-derived decimal/binary terrain, coarse far-field tiles, and fog.
- Camera: Use the data-journey actualFieldCamera formula: distant photo view, dive/recovery at 21.76–23.3, then a wider field view at 25–27.8. Foreground compensation preserves baseline placement.
- Light: Dim warm studio, point-light pool intensity 95 at [-3, 7, -19], and grazing directional light intensity 1.4. The photo uses an unlit Basic material.
- Continuity: Binary conversion has not started yet.
- Construction source: src/data-shots.ts:227-285

**Clock / handoff shot-06:** origin 20.367s; active local range 2.632999999999999–3.599666666666664s; reset key 20.367; {   "enter": true,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 690,
    "shot": "shot-06",
    "local": 2.632999999999999,
    "eye": [
      -0.5697077760000022,
      11.442076159999989,
      8.626751999999998
    ],
    "direction": [
      0.037149520105936105,
      -0.7461152125112824,
      -0.6647796648628346
    ],
    "quaternion": [
      -0.40797167650941585,
      -0.03419471793536656,
      -0.0308968345721998,
      0.9118306959325484
    ],
    "fov": 50,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 719,
    "shot": "shot-06",
    "local": 3.599666666666664,
    "eye": [
      0,
      14,
      9
    ],
    "direction": [
      0,
      -0.7863183388224226,
      -0.6178215519319036
    ],
    "quaternion": [
      -0.436591226370659,
      -0.021847770829359358,
      -0.044950998551477266,
      0.8982706628267323
    ],
    "fov": 50,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 00:23.000–00:24.000. No separately asserted effect onset.

**Measured mix:** -17.688 dBFS RMS; -4.424 dBFS peak. Source samples per channel 1104000–1152000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 00:24.000–00:25.000 · frames 720–749

**Shots:** shot-06
**Narration:** knows ones and zeros.
**Captions:** It only knows / ones and zeros.
**Visible overlay layers:** elapsed, captions

**00:24.000–00:24.380 · binary:** Hold the decimal-cell field with its gold numerals and varied physical heights.
**Sampling:** Output frames 720–731.
- Foreground: Photo-derived luminance values label the nearby tiles.
- Background: Dark navy sky, photo-derived decimal/binary terrain, coarse far-field tiles, and fog.
- Camera: Use the data-journey actualFieldCamera formula: distant photo view, dive/recovery at 21.76–23.3, then a wider field view at 25–27.8. Foreground compensation preserves baseline placement.
- Light: Dim warm studio, point-light pool intensity 95 at [-3, 7, -19], and grazing directional light intensity 1.4. The photo uses an unlit Basic material.
- Continuity: Binary conversion has not started yet.
- Construction source: src/data-shots.ts:227-285

**00:24.380–00:24.630 · binary:** Convert the decimal faces to the binary atlas in a near-to-far sweep.
**Sampling:** Output frames 732–738.
- Foreground: Decimal and four-row, 16-bit binary faces coexist during the advancing sweep.
- Background: Dark navy sky, photo-derived decimal/binary terrain, coarse far-field tiles, and fog.
- Camera: Use the data-journey actualFieldCamera formula: distant photo view, dive/recovery at 21.76–23.3, then a wider field view at 25–27.8. Foreground compensation preserves baseline placement.
- Light: Dim warm studio, point-light pool intensity 95 at [-3, 7, -19], and grazing directional light intensity 1.4. The photo uses an unlit Basic material.
- Continuity: Each cell switches at cue = 24.38 + step(-z, -7, 14) * 0.25.
- Construction source: src/data-shots.ts:227-285

**00:24.630–00:25.000 · binary:** Hold the completed binary field briefly.
**Sampling:** Output frames 739–749.
- Foreground: Binary tiles are active and the decimal mesh is hidden.
- Background: Dark navy sky, photo-derived decimal/binary terrain, coarse far-field tiles, and fog.
- Camera: Use the data-journey actualFieldCamera formula: distant photo view, dive/recovery at 21.76–23.3, then a wider field view at 25–27.8. Foreground compensation preserves baseline placement.
- Light: Dim warm studio, point-light pool intensity 95 at [-3, 7, -19], and grazing directional light intensity 1.4. The photo uses an unlit Basic material.
- Continuity: At native 25 and later, the code rewrites complete binary poses for direct seeking.
- Construction source: src/data-shots.ts:227-285

**Clock / handoff shot-06:** origin 20.367s; active local range 3.632999999999999–4.599666666666664s; reset key 20.367; {   "enter": true,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 720,
    "shot": "shot-06",
    "local": 3.632999999999999,
    "eye": [
      0,
      14,
      9
    ],
    "direction": [
      0,
      -0.7863183388224226,
      -0.6178215519319036
    ],
    "quaternion": [
      -0.436591226370659,
      -0.021847770829359358,
      -0.044950998551477266,
      0.8982706628267323
    ],
    "fov": 50,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 749,
    "shot": "shot-06",
    "local": 4.599666666666664,
    "eye": [
      0,
      14,
      9
    ],
    "direction": [
      0,
      -0.7863183388224226,
      -0.6178215519319036
    ],
    "quaternion": [
      -0.436591226370659,
      -0.021847770829359358,
      -0.044950998551477266,
      0.8982706628267323
    ],
    "fov": 50,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 00:24.000–00:25.000. No separately asserted effect onset.

**Measured mix:** -16.079 dBFS RMS; -4.674 dBFS peak. Source samples per channel 1152000–1200000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 00:25.000–00:26.000 · frames 750–779

**Shots:** shot-06
**Narration:** The phone
**Captions:** ones and zeros. / The phone converts the photo
**Visible overlay layers:** elapsed, captions

**00:25.000–00:26.000 · binary:** Scale the world down toward 0.5 and rotate it toward Y = -0.13 while the camera widens.
**Sampling:** Output frames 750–779.
- Foreground: The binary terrain recedes into a broader field.
- Background: Dark navy sky, photo-derived decimal/binary terrain, coarse far-field tiles, and fog.
- Camera: Use the data-journey actualFieldCamera formula: distant photo view, dive/recovery at 21.76–23.3, then a wider field view at 25–27.8. Foreground compensation preserves baseline placement.
- Light: Dim warm studio, point-light pool intensity 95 at [-3, 7, -19], and grazing directional light intensity 1.4. The photo uses an unlit Basic material.
- Continuity: World scaling finishes at 27.4; the wide camera blend finishes at 27.8.
- Construction source: src/data-shots.ts:227-285

**Clock / handoff shot-06:** origin 20.367s; active local range 4.632999999999999–5.599666666666664s; reset key 20.367; {   "enter": true,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 750,
    "shot": "shot-06",
    "local": 4.632999999999999,
    "eye": [
      0,
      14,
      9
    ],
    "direction": [
      0,
      -0.7863183388224226,
      -0.6178215519319036
    ],
    "quaternion": [
      -0.436591226370659,
      -0.021847770829359358,
      -0.044950998551477266,
      0.8982706628267323
    ],
    "fov": 50,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 779,
    "shot": "shot-06",
    "local": 5.599666666666664,
    "eye": [
      0,
      14.921709621584034,
      19.548480256691576
    ],
    "direction": [
      3.469446951953614e-18,
      -0.5693010433046004,
      -0.8221291395470018
    ],
    "quaternion": [
      -0.29787288951503843,
      -0.014393467909465656,
      -0.046068345746803074,
      0.9533846428874624
    ],
    "fov": 50,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 00:25.000–00:26.000. No separately asserted effect onset.

**Measured mix:** -20.482 dBFS RMS; -3.836 dBFS peak. Source samples per channel 1200000–1248000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.

**Measured candidate cue (identity unconfirmed):** id: measured-transient-1
timeSeconds: 25.054
nearestVideoFrame: 752
onsetResolutionSeconds: 0.011609977324263039
description: Mixed-spectrum transient
centroidHz: 872
estimatedDurationSeconds: 0.441
speechMaskActive: False
coincidentVisualBeats: binary-12
relationship: Temporal coexistence with these visual actions; causation or intended synchronization is not asserted.
identityStatus: Acoustic measurement; effect identity unconfirmed. This can include music/speech attacks.

### 00:26.000–00:27.000 · frames 780–809

**Shots:** shot-06
**Narration:** phone converts the photo into
**Captions:** The phone converts the photo / into 16 million
**Visible overlay layers:** elapsed, captions

**00:26.000–00:27.000 · binary:** Scale the world down toward 0.5 and rotate it toward Y = -0.13 while the camera widens.
**Sampling:** Output frames 780–809.
- Foreground: The binary terrain recedes into a broader field.
- Background: Dark navy sky, photo-derived decimal/binary terrain, coarse far-field tiles, and fog.
- Camera: Use the data-journey actualFieldCamera formula: distant photo view, dive/recovery at 21.76–23.3, then a wider field view at 25–27.8. Foreground compensation preserves baseline placement.
- Light: Dim warm studio, point-light pool intensity 95 at [-3, 7, -19], and grazing directional light intensity 1.4. The photo uses an unlit Basic material.
- Continuity: World scaling finishes at 27.4; the wide camera blend finishes at 27.8.
- Construction source: src/data-shots.ts:227-285

**Clock / handoff shot-06:** origin 20.367s; active local range 5.632999999999999–6.599666666666664s; reset key 20.367; {   "enter": true,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 780,
    "shot": "shot-06",
    "local": 5.632999999999999,
    "eye": [
      0,
      14.94773436238302,
      20.091466990794647
    ],
    "direction": [
      -3.469446951953614e-18,
      -0.5603995584516027,
      -0.8282223945820644
    ],
    "quaternion": [
      -0.2927244474349136,
      -0.014184519127990106,
      -0.046274939255521834,
      0.9549711133264347
    ],
    "fov": 50,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 809,
    "shot": "shot-06",
    "local": 6.599666666666664,
    "eye": [
      0,
      14.218816350978097,
      32.31161607095953
    ],
    "direction": [
      0,
      -0.3828323380921665,
      -0.923817839679926
    ],
    "quaternion": [
      -0.19475431656239725,
      -0.012721491278566045,
      -0.06392832954238548,
      0.9786838552473843
    ],
    "fov": 50,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 00:26.000–00:27.000. No separately asserted effect onset.

**Measured mix:** -16.375 dBFS RMS; -3.929 dBFS peak. Source samples per channel 1248000–1296000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 00:27.000–00:28.000 · frames 810–839

**Shots:** shot-06
**Narration:** into 16 million ones
**Captions:** into 16 million
**Visible overlay layers:** elapsed, captions

**00:27.000–00:27.100 · binary:** Scale the world down toward 0.5 and rotate it toward Y = -0.13 while the camera widens.
**Sampling:** Output frames 810–812.
- Foreground: The binary terrain recedes into a broader field.
- Background: Dark navy sky, photo-derived decimal/binary terrain, coarse far-field tiles, and fog.
- Camera: Use the data-journey actualFieldCamera formula: distant photo view, dive/recovery at 21.76–23.3, then a wider field view at 25–27.8. Foreground compensation preserves baseline placement.
- Light: Dim warm studio, point-light pool intensity 95 at [-3, 7, -19], and grazing directional light intensity 1.4. The photo uses an unlit Basic material.
- Continuity: World scaling finishes at 27.4; the wide camera blend finishes at 27.8.
- Construction source: src/data-shots.ts:227-285

**00:27.100–00:27.400 · binary:** Begin raising the open padlock while the field scaling completes.
**Sampling:** Output frames 813–821.
- Foreground: A large blue open lock emerges in front of the binary floor.
- Background: Dark navy sky, photo-derived decimal/binary terrain, coarse far-field tiles, and fog.
- Camera: Use the data-journey actualFieldCamera formula: distant photo view, dive/recovery at 21.76–23.3, then a wider field view at 25–27.8. Foreground compensation preserves baseline placement.
- Light: Dim warm studio, point-light pool intensity 95 at [-3, 7, -19], and grazing directional light intensity 1.4. The photo uses an unlit Basic material.
- Continuity: The lock rise runs from 27.1–28.4. Its open hoop Y is 1.13.
- Construction source: src/data-shots.ts:227-285

**00:27.400–00:27.800 · binary:** Finish the wide camera staging as the open lock continues upward.
**Sampling:** Output frames 822–833.
- Foreground: The open lock rises over a now-stable ground transform.
- Background: Dark navy sky, photo-derived decimal/binary terrain, coarse far-field tiles, and fog.
- Camera: Use the data-journey actualFieldCamera formula: distant photo view, dive/recovery at 21.76–23.3, then a wider field view at 25–27.8. Foreground compensation preserves baseline placement.
- Light: Dim warm studio, point-light pool intensity 95 at [-3, 7, -19], and grazing directional light intensity 1.4. The photo uses an unlit Basic material.
- Continuity: The foreground compensation preserves the authored screen placement.
- Construction source: src/data-shots.ts:227-285

**00:27.800–00:28.000 · binary:** Finish raising the lock to y = 4.4.
**Sampling:** Output frames 834–839.
- Foreground: The open lock has scale 2.9, negative X scale, x = 0.2, and z = 7.
- Background: Dark navy sky, photo-derived decimal/binary terrain, coarse far-field tiles, and fog.
- Camera: Use the data-journey actualFieldCamera formula: distant photo view, dive/recovery at 21.76–23.3, then a wider field view at 25–27.8. Foreground compensation preserves baseline placement.
- Light: Dim warm studio, point-light pool intensity 95 at [-3, 7, -19], and grazing directional light intensity 1.4. The photo uses an unlit Basic material.
- Continuity: The hoop remains open; closing begins at 29.15 in the next shot.
- Construction source: src/data-shots.ts:227-285

**Clock / handoff shot-06:** origin 20.367s; active local range 6.632999999999999–7.599666666666664s; reset key 20.367; {   "enter": true,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 810,
    "shot": "shot-06",
    "local": 6.632999999999999,
    "eye": [
      0,
      14.151934993072615,
      32.547586464823326
    ],
    "direction": [
      6.938893903907228e-18,
      -0.37906489839679275,
      -0.9253700896416683
    ],
    "quaternion": [
      -0.19274887932540555,
      -0.012760278130436923,
      -0.06481280105797269,
      0.9790221374615867
    ],
    "fov": 50,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 839,
    "shot": "shot-06",
    "local": 7.599666666666664,
    "eye": [
      0,
      13,
      35
    ],
    "direction": [
      0,
      -0.3314859950125599,
      -0.9434601396511318
    ],
    "quaternion": [
      -0.16809159371828958,
      -0.0038918242097468643,
      -0.022817269314456903,
      0.9854995900793655
    ],
    "fov": 50,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 00:27.000–00:28.000. No separately asserted effect onset.

**Measured mix:** -15.095 dBFS RMS; -2.907 dBFS peak. Source samples per channel 1296000–1344000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 00:28.000–00:29.000 · frames 840–869

**Shots:** shot-06
**Narration:** ones and zero and encrypts
**Captions:** ones and zeros / and encrypts its data.
**Visible overlay layers:** elapsed, captions

**00:28.000–00:28.400 · binary:** Finish raising the lock to y = 4.4.
**Sampling:** Output frames 840–851.
- Foreground: The open lock has scale 2.9, negative X scale, x = 0.2, and z = 7.
- Background: Dark navy sky, photo-derived decimal/binary terrain, coarse far-field tiles, and fog.
- Camera: Use the data-journey actualFieldCamera formula: distant photo view, dive/recovery at 21.76–23.3, then a wider field view at 25–27.8. Foreground compensation preserves baseline placement.
- Light: Dim warm studio, point-light pool intensity 95 at [-3, 7, -19], and grazing directional light intensity 1.4. The photo uses an unlit Basic material.
- Continuity: The hoop remains open; closing begins at 29.15 in the next shot.
- Construction source: src/data-shots.ts:227-285

**00:28.400–00:29.000 · binary:** Hold the open lock over the binary field.
**Sampling:** Output frames 852–869.
- Foreground: The open lock is fully visible; the gripper remains hidden.
- Background: Dark navy sky, photo-derived decimal/binary terrain, coarse far-field tiles, and fog.
- Camera: Use the data-journey actualFieldCamera formula: distant photo view, dive/recovery at 21.76–23.3, then a wider field view at 25–27.8. Foreground compensation preserves baseline placement.
- Light: Dim warm studio, point-light pool intensity 95 at [-3, 7, -19], and grazing directional light intensity 1.4. The photo uses an unlit Basic material.
- Continuity: The cut at 29 reconstructs dataJourney but preserves its global clock phase.
- Construction source: src/data-shots.ts:227-285

**Clock / handoff shot-06:** origin 20.367s; active local range 7.632999999999999–8.599666666666664s; reset key 20.367; {   "enter": true,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 840,
    "shot": "shot-06",
    "local": 7.632999999999999,
    "eye": [
      0,
      13,
      35
    ],
    "direction": [
      8.673617379884035e-19,
      -0.3314859950125598,
      -0.9434601396511318
    ],
    "quaternion": [
      -0.1681004783065699,
      -0.003487028467981609,
      -0.020444003473191183,
      0.9855516792880797
    ],
    "fov": 50,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 869,
    "shot": "shot-06",
    "local": 8.599666666666664,
    "eye": [
      0,
      13,
      35
    ],
    "direction": [
      0,
      -0.3314859950125598,
      -0.9434601396511318
    ],
    "quaternion": [
      -0.16813664137966505,
      0,
      0,
      0.98576369877652
    ],
    "fov": 50,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 00:28.000–00:29.000. No separately asserted effect onset.

**Measured mix:** -16.658 dBFS RMS; -4.279 dBFS peak. Source samples per channel 1344000–1392000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 00:29.000–00:30.000 · frames 870–899

**Shots:** shot-07
**Narration:** encrypts this data.
**Captions:** and encrypts its data.
**Visible overlay layers:** elapsed, captions

**00:29.000–00:29.150 · encryption:** Hold the open padlock immediately after the shot remount.
**Sampling:** Output frames 870–874.
- Foreground: The blue open lock remains over the unchanged binary terrain.
- Background: Binary field at half scale with Y rotation -0.13, beneath a dark navy horizon.
- Camera: Use the data-journey actualFieldCamera formula. Inspection blends at 30.2–31.6; pullback at 35–36.8. Foreground poses use baseline-camera unprojection and matrix compensation.
- Light: Dim studio, warm pool, and grazing light. Sample and lens Basic texture materials preserve readable values.
- Continuity: dataJourney receives global native time rather than restarting its actions at local zero.
- Construction source: src/data-shots.ts:44-108,227-294

**00:29.150–00:29.600 · encryption:** Lower the shackle from y = 1.13 to y = 0.45, closing the lock.
**Sampling:** Output frames 875–887.
- Foreground: The open lock becomes closed.
- Background: Binary field at half scale with Y rotation -0.13, beneath a dark navy horizon.
- Camera: Use the data-journey actualFieldCamera formula. Inspection blends at 30.2–31.6; pullback at 35–36.8. Foreground poses use baseline-camera unprojection and matrix compensation.
- Light: Dim studio, warm pool, and grazing light. Sample and lens Basic texture materials preserve readable values.
- Continuity: The shackle uses blend(native, 29.15, 29.6).
- Construction source: src/data-shots.ts:44-108,227-294

**00:29.600–00:30.000 · encryption:** Begin moving the closed lock left and backward while reducing its scale.
**Sampling:** Output frames 888–899.
- Foreground: The lock moves toward x = -5.5, y = 7, z = -4 and scale 1.65.
- Background: Binary field at half scale with Y rotation -0.13, beneath a dark navy horizon.
- Camera: Use the data-journey actualFieldCamera formula. Inspection blends at 30.2–31.6; pullback at 35–36.8. Foreground poses use baseline-camera unprojection and matrix compensation.
- Light: Dim studio, warm pool, and grazing light. Sample and lens Basic texture materials preserve readable values.
- Continuity: The retreat ends at 31.6; the gripper is still hidden.
- Construction source: src/data-shots.ts:44-108,227-294

**Clock / handoff shot-07:** origin 29s; active local range 0.0–0.966666666666665s; reset key 29; {   "enter": false,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 870,
    "shot": "shot-07",
    "local": 0,
    "eye": [
      0,
      13,
      35
    ],
    "direction": [
      0,
      -0.3314859950125598,
      -0.9434601396511318
    ],
    "quaternion": [
      -0.16813664137966505,
      0,
      0,
      0.98576369877652
    ],
    "fov": 50,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 899,
    "shot": "shot-07",
    "local": 0.966666666666665,
    "eye": [
      0,
      13,
      35
    ],
    "direction": [
      0,
      -0.3314859950125598,
      -0.9434601396511318
    ],
    "quaternion": [
      -0.16813664137966505,
      0,
      0,
      0.98576369877652
    ],
    "fov": 50,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 00:29.000–00:30.000. Design annotations: id: data.lock
frame: 870
label: Lock engages
status: proposed design annotation; mixed master is playback authority

**Measured mix:** -20.093 dBFS RMS; -3.507 dBFS peak. Source samples per channel 1392000–1440000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 00:30.000–00:31.000 · frames 900–929

**Shots:** shot-07
**Narration:** To anyone that tries
**Captions:** To anyone that tries
**Visible overlay layers:** elapsed, captions

**00:30.000–00:30.200 · encryption:** Begin moving the closed lock left and backward while reducing its scale.
**Sampling:** Output frames 900–905.
- Foreground: The lock moves toward x = -5.5, y = 7, z = -4 and scale 1.65.
- Background: Binary field at half scale with Y rotation -0.13, beneath a dark navy horizon.
- Camera: Use the data-journey actualFieldCamera formula. Inspection blends at 30.2–31.6; pullback at 35–36.8. Foreground poses use baseline-camera unprojection and matrix compensation.
- Light: Dim studio, warm pool, and grazing light. Sample and lens Basic texture materials preserve readable values.
- Continuity: The retreat ends at 31.6; the gripper is still hidden.
- Construction source: src/data-shots.ts:44-108,227-294

**00:30.200–00:30.750 · encryption:** Start the camera inspection blend while the closed lock continues retreating.
**Sampling:** Output frames 906–922.
- Foreground: The closed lock moves to the upper left over an unbroken binary floor.
- Background: Binary field at half scale with Y rotation -0.13, beneath a dark navy horizon.
- Camera: Use the data-journey actualFieldCamera formula. Inspection blends at 30.2–31.6; pullback at 35–36.8. Foreground poses use baseline-camera unprojection and matrix compensation.
- Light: Dim studio, warm pool, and grazing light. Sample and lens Basic texture materials preserve readable values.
- Continuity: The alternate camera moves from [0, 13, 35] toward [1.5, 17, 29], with roll approaching 0.15.
- Construction source: src/data-shots.ts:44-108,227-294

**00:30.750–00:31.000 · encryption:** Bring the gripper in from offscreen right toward pixel [404, 650].
**Sampling:** Output frames 923–929.
- Foreground: The mechanical clamp carries the fixed 25-value sample toward the center.
- Background: Binary field at half scale with Y rotation -0.13, beneath a dark navy horizon.
- Camera: Use the data-journey actualFieldCamera formula. Inspection blends at 30.2–31.6; pullback at 35–36.8. Foreground poses use baseline-camera unprojection and matrix compensation.
- Light: Dim studio, warm pool, and grazing light. Sample and lens Basic texture materials preserve readable values.
- Continuity: The entry window is 30.75–31.9. The sample panel initially lies at X rotation -π/2.
- Construction source: src/data-shots.ts:44-108,227-294

**Clock / handoff shot-07:** origin 29s; active local range 1.0–1.966666666666665s; reset key 29; {   "enter": false,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 900,
    "shot": "shot-07",
    "local": 1,
    "eye": [
      0,
      13,
      35
    ],
    "direction": [
      0,
      -0.3314859950125598,
      -0.9434601396511318
    ],
    "quaternion": [
      -0.16813664137966505,
      0,
      0,
      0.98576369877652
    ],
    "fov": 50,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 929,
    "shot": "shot-07",
    "local": 1.966666666666665,
    "eye": [
      0.8568189180434045,
      15.284850448115746,
      31.572724327826382
    ],
    "direction": [
      -0.023584295659714375,
      -0.381414680960282,
      -0.9241031447550655
    ],
    "quaternion": [
      -0.1936868745820252,
      0.020828399773244938,
      0.044485228379765686,
      0.9798329637410312
    ],
    "fov": 50,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 00:30.000–00:31.000. No separately asserted effect onset.

**Measured mix:** -16.197 dBFS RMS; -3.128 dBFS peak. Source samples per channel 1440000–1488000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 00:31.000–00:32.000 · frames 930–959

**Shots:** shot-07
**Narration:** tries to intercept this data,
**Captions:** To anyone that tries / to intercept this data,
**Visible overlay layers:** elapsed, captions

**00:31.000–00:31.620 · encryption:** Bring the gripper in from offscreen right toward pixel [404, 650].
**Sampling:** Output frames 930–948.
- Foreground: The mechanical clamp carries the fixed 25-value sample toward the center.
- Background: Binary field at half scale with Y rotation -0.13, beneath a dark navy horizon.
- Camera: Use the data-journey actualFieldCamera formula. Inspection blends at 30.2–31.6; pullback at 35–36.8. Foreground poses use baseline-camera unprojection and matrix compensation.
- Light: Dim studio, warm pool, and grazing light. Sample and lens Basic texture materials preserve readable values.
- Continuity: The entry window is 30.75–31.9. The sample panel initially lies at X rotation -π/2.
- Construction source: src/data-shots.ts:44-108,227-294

**00:31.620–00:31.950 · encryption:** Pivot the sample panel upright as the gripper finishes entering.
**Sampling:** Output frames 949–958.
- Foreground: The data face rotates into view beneath the mechanical head.
- Background: Binary field at half scale with Y rotation -0.13, beneath a dark navy horizon.
- Camera: Use the data-journey actualFieldCamera formula. Inspection blends at 30.2–31.6; pullback at 35–36.8. Foreground poses use baseline-camera unprojection and matrix compensation.
- Light: Dim studio, warm pool, and grazing light. Sample and lens Basic texture materials preserve readable values.
- Continuity: The panel turn runs from 31.62–32.08; entry finishes at 31.9.
- Construction source: src/data-shots.ts:44-108,227-294

**00:31.950–00:32.000 · encryption:** Begin settling the gripper upward and left while retracting its carrier downward and backward.
**Sampling:** Output frames 959–959.
- Foreground: The sample moves toward pixel [340, 526]. The arm extends beyond its silhouette.
- Background: Binary field at half scale with Y rotation -0.13, beneath a dark navy horizon.
- Camera: Use the data-journey actualFieldCamera formula. Inspection blends at 30.2–31.6; pullback at 35–36.8. Foreground poses use baseline-camera unprojection and matrix compensation.
- Light: Dim studio, warm pool, and grazing light. Sample and lens Basic texture materials preserve readable values.
- Continuity: The settling window ends at 32.35.
- Construction source: src/data-shots.ts:44-108,227-294

**Clock / handoff shot-07:** origin 29s; active local range 2.0–2.966666666666665s; reset key 29; {   "enter": false,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 930,
    "shot": "shot-07",
    "local": 2,
    "eye": [
      0.9096209912536435,
      15.425655976676383,
      31.361516034985428
    ],
    "direction": [
      -0.02515785180514957,
      -0.3847054838537458,
      -0.9226964686100221
    ],
    "quaternion": [
      -0.19533533301873593,
      0.022268214330037877,
      0.0472486410688706,
      0.9793445768585007
    ],
    "fov": 50,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 959,
    "shot": "shot-07",
    "local": 2.966666666666665,
    "eye": [
      1.5,
      17,
      29
    ],
    "direction": [
      -0.04378745581498246,
      -0.42327873954483053,
      -0.9049407535096375
    ],
    "quaternion": [
      -0.21435463169067379,
      0.03977078221429439,
      0.07835200548577242,
      0.9727956311534177
    ],
    "fov": 50,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 00:31.000–00:32.000. No separately asserted effect onset.

**Measured mix:** -16.274 dBFS RMS; -2.398 dBFS peak. Source samples per channel 1488000–1536000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 00:32.000–00:33.000 · frames 960–989

**Shots:** shot-07
**Narration:** data, all they see is
**Captions:** to intercept this data, / all they see
**Visible overlay layers:** elapsed, captions

**00:32.000–00:32.020 · encryption:** Begin settling the gripper upward and left while retracting its carrier downward and backward.
**Sampling:** Output frames 960–960.
- Foreground: The sample moves toward pixel [340, 526]. The arm extends beyond its silhouette.
- Background: Binary field at half scale with Y rotation -0.13, beneath a dark navy horizon.
- Camera: Use the data-journey actualFieldCamera formula. Inspection blends at 30.2–31.6; pullback at 35–36.8. Foreground poses use baseline-camera unprojection and matrix compensation.
- Light: Dim studio, warm pool, and grazing light. Sample and lens Basic texture materials preserve readable values.
- Continuity: The settling window ends at 32.35.
- Construction source: src/data-shots.ts:44-108,227-294

**00:32.020–00:32.260 · encryption:** Sweep the inspection lens in from the left toward pixel x = 310.
**Sampling:** Output frames 961–967.
- Foreground: The lens magnifies the same texture displayed on the sample.
- Background: Binary field at half scale with Y rotation -0.13, beneath a dark navy horizon.
- Camera: Use the data-journey actualFieldCamera formula. Inspection blends at 30.2–31.6; pullback at 35–36.8. Foreground poses use baseline-camera unprojection and matrix compensation.
- Light: Dim studio, warm pool, and grazing light. Sample and lens Basic texture materials preserve readable values.
- Continuity: Lens entry ends at 32.26. Its ray-mapped UV coordinates are recomputed each frame.
- Construction source: src/data-shots.ts:44-108,227-294

**00:32.260–00:32.400 · encryption:** Hold the lens near its initial inspection position as the gripper finishes settling.
**Sampling:** Output frames 968–971.
- Foreground: The original decimal matrix is visible through the magnifier.
- Background: Binary field at half scale with Y rotation -0.13, beneath a dark navy horizon.
- Camera: Use the data-journey actualFieldCamera formula. Inspection blends at 30.2–31.6; pullback at 35–36.8. Foreground poses use baseline-camera unprojection and matrix compensation.
- Light: Dim studio, warm pool, and grazing light. Sample and lens Basic texture materials preserve readable values.
- Continuity: The scan begins at 32.40; the sample remains in phase zero.
- Construction source: src/data-shots.ts:44-108,227-294

**00:32.400–00:33.000 · encryption:** Scan the lens downward and slightly left while increasing its scale from 1.35 toward 1.48.
**Sampling:** Output frames 972–989.
- Foreground: The magnified values track the sample surface beneath the lens.
- Background: Binary field at half scale with Y rotation -0.13, beneath a dark navy horizon.
- Camera: Use the data-journey actualFieldCamera formula. Inspection blends at 30.2–31.6; pullback at 35–36.8. Foreground poses use baseline-camera unprojection and matrix compensation.
- Light: Dim studio, warm pool, and grazing light. Sample and lens Basic texture materials preserve readable values.
- Continuity: The scan window is 32.4–33.8.
- Construction source: src/data-shots.ts:44-108,227-294

**Clock / handoff shot-07:** origin 29s; active local range 3.0–3.9666666666666686s; reset key 29; {   "enter": false,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 960,
    "shot": "shot-07",
    "local": 3,
    "eye": [
      1.5,
      17,
      29
    ],
    "direction": [
      -0.04378745581498246,
      -0.42327873954483053,
      -0.9049407535096375
    ],
    "quaternion": [
      -0.21435463169067379,
      0.03977078221429439,
      0.07835200548577242,
      0.9727956311534177
    ],
    "fov": 50,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 989,
    "shot": "shot-07",
    "local": 3.9666666666666686,
    "eye": [
      1.5,
      17,
      29
    ],
    "direction": [
      -0.04378745581498246,
      -0.42327873954483053,
      -0.9049407535096375
    ],
    "quaternion": [
      -0.21435463169067379,
      0.03977078221429439,
      0.07835200548577242,
      0.9727956311534177
    ],
    "fov": 50,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 00:32.000–00:33.000. No separately asserted effect onset.

**Measured mix:** -16.965 dBFS RMS; -3.048 dBFS peak. Source samples per channel 1536000–1584000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 00:33.000–00:34.000 · frames 990–1019

**Shots:** shot-07
**Narration:** is random numbers.
**Captions:** is random numbers.
**Visible overlay layers:** elapsed, captions

**00:33.000–00:33.280 · encryption:** Scan the lens downward and slightly left while increasing its scale from 1.35 toward 1.48.
**Sampling:** Output frames 990–998.
- Foreground: The magnified values track the sample surface beneath the lens.
- Background: Binary field at half scale with Y rotation -0.13, beneath a dark navy horizon.
- Camera: Use the data-journey actualFieldCamera formula. Inspection blends at 30.2–31.6; pullback at 35–36.8. Foreground poses use baseline-camera unprojection and matrix compensation.
- Light: Dim studio, warm pool, and grazing light. Sample and lens Basic texture materials preserve readable values.
- Continuity: The scan window is 32.4–33.8.
- Construction source: src/data-shots.ts:44-108,227-294

**00:33.280–00:33.820 · encryption:** Step the sample through five seeded intermediate matrices, then show the fixed encrypted matrix.
**Sampling:** Output frames 999–1014.
- Foreground: The panel and lens digits change together because they share one texture.
- Background: Binary field at half scale with Y rotation -0.13, beneath a dark navy horizon.
- Camera: Use the data-journey actualFieldCamera formula. Inspection blends at 30.2–31.6; pullback at 35–36.8. Foreground poses use baseline-camera unprojection and matrix compensation.
- Light: Dim studio, warm pool, and grazing light. Sample and lens Basic texture materials preserve readable values.
- Continuity: phase = 1 + floor((native - 33.28) / 0.108); phase six starts at 33.82.
- Construction source: src/data-shots.ts:44-108,227-294

**00:33.820–00:34.000 · encryption:** Hold the final encrypted values after the lens scan finishes.
**Sampling:** Output frames 1015–1019.
- Foreground: The encrypted 25-cell matrix is stable beneath the lens.
- Background: Binary field at half scale with Y rotation -0.13, beneath a dark navy horizon.
- Camera: Use the data-journey actualFieldCamera formula. Inspection blends at 30.2–31.6; pullback at 35–36.8. Foreground poses use baseline-camera unprojection and matrix compensation.
- Light: Dim studio, warm pool, and grazing light. Sample and lens Basic texture materials preserve readable values.
- Continuity: The final values do not continue scrambling after 33.82.
- Construction source: src/data-shots.ts:44-108,227-294

**Clock / handoff shot-07:** origin 29s; active local range 4.0–4.966666666666669s; reset key 29; {   "enter": false,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 990,
    "shot": "shot-07",
    "local": 4,
    "eye": [
      1.5,
      17,
      29
    ],
    "direction": [
      -0.04378745581498246,
      -0.42327873954483053,
      -0.9049407535096375
    ],
    "quaternion": [
      -0.21435463169067379,
      0.03977078221429439,
      0.07835200548577242,
      0.9727956311534177
    ],
    "fov": 50,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 1019,
    "shot": "shot-07",
    "local": 4.966666666666669,
    "eye": [
      1.5,
      17,
      29
    ],
    "direction": [
      -0.04378745581498246,
      -0.42327873954483053,
      -0.9049407535096375
    ],
    "quaternion": [
      -0.21435463169067379,
      0.03977078221429439,
      0.07835200548577242,
      0.9727956311534177
    ],
    "fov": 50,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 00:33.000–00:34.000. No separately asserted effect onset.

**Measured mix:** -18.094 dBFS RMS; -3.164 dBFS peak. Source samples per channel 1584000–1632000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 00:34.000–00:35.000 · frames 1020–1049

**Shots:** shot-07
**Narration:** But this data is too
**Captions:** But this data is too big
**Visible overlay layers:** elapsed, captions

**00:34.000–00:34.020 · encryption:** Hold the final encrypted values after the lens scan finishes.
**Sampling:** Output frames 1020–1020.
- Foreground: The encrypted 25-cell matrix is stable beneath the lens.
- Background: Binary field at half scale with Y rotation -0.13, beneath a dark navy horizon.
- Camera: Use the data-journey actualFieldCamera formula. Inspection blends at 30.2–31.6; pullback at 35–36.8. Foreground poses use baseline-camera unprojection and matrix compensation.
- Light: Dim studio, warm pool, and grazing light. Sample and lens Basic texture materials preserve readable values.
- Continuity: The final values do not continue scrambling after 33.82.
- Construction source: src/data-shots.ts:44-108,227-294

**00:34.020–00:34.080 · encryption:** Begin sliding the lens quickly left and upward.
**Sampling:** Output frames 1021–1022.
- Foreground: The lens leaves first while the gripper and lock hold their positions.
- Background: Binary field at half scale with Y rotation -0.13, beneath a dark navy horizon.
- Camera: Use the data-journey actualFieldCamera formula. Inspection blends at 30.2–31.6; pullback at 35–36.8. Foreground poses use baseline-camera unprojection and matrix compensation.
- Light: Dim studio, warm pool, and grazing light. Sample and lens Basic texture materials preserve readable values.
- Continuity: The lens exit window is 34.02–34.24.
- Construction source: src/data-shots.ts:44-108,227-294

**00:34.080–00:34.240 · encryption:** Start moving the gripper right and upward and shrinking the lock away.
**Sampling:** Output frames 1023–1027.
- Foreground: The inspection props clear the field as the lens completes its exit.
- Background: Binary field at half scale with Y rotation -0.13, beneath a dark navy horizon.
- Camera: Use the data-journey actualFieldCamera formula. Inspection blends at 30.2–31.6; pullback at 35–36.8. Foreground poses use baseline-camera unprojection and matrix compensation.
- Light: Dim studio, warm pool, and grazing light. Sample and lens Basic texture materials preserve readable values.
- Continuity: The gripper gains 850 pixels in X and -260 pixels in Y over its exit blend.
- Construction source: src/data-shots.ts:44-108,227-294

**00:34.240–00:35.000 · encryption:** Continue the gripper exit and lock shrink after the lens disappears.
**Sampling:** Output frames 1028–1049.
- Foreground: The carrier and small lock retreat against the binary floor.
- Background: Binary field at half scale with Y rotation -0.13, beneath a dark navy horizon.
- Camera: Use the data-journey actualFieldCamera formula. Inspection blends at 30.2–31.6; pullback at 35–36.8. Foreground poses use baseline-camera unprojection and matrix compensation.
- Light: Dim studio, warm pool, and grazing light. Sample and lens Basic texture materials preserve readable values.
- Continuity: The lock becomes hidden at 35.1; the gripper becomes hidden at 35.25.
- Construction source: src/data-shots.ts:44-108,227-294

**Clock / handoff shot-07:** origin 29s; active local range 5.0–5.966666666666669s; reset key 29; {   "enter": false,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 1020,
    "shot": "shot-07",
    "local": 5,
    "eye": [
      1.5,
      17,
      29
    ],
    "direction": [
      -0.04378745581498246,
      -0.42327873954483053,
      -0.9049407535096375
    ],
    "quaternion": [
      -0.21435463169067379,
      0.03977078221429439,
      0.07835200548577242,
      0.9727956311534177
    ],
    "fov": 50,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 1049,
    "shot": "shot-07",
    "local": 5.966666666666669,
    "eye": [
      1.5,
      17,
      29
    ],
    "direction": [
      -0.04378745581498246,
      -0.42327873954483053,
      -0.9049407535096375
    ],
    "quaternion": [
      -0.21435463169067379,
      0.03977078221429439,
      0.07835200548577242,
      0.9727956311534177
    ],
    "fov": 50,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 00:34.000–00:35.000. No separately asserted effect onset.

**Measured mix:** -16.482 dBFS RMS; -1.915 dBFS peak. Source samples per channel 1632000–1680000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 00:35.000–00:36.000 · frames 1050–1079

**Shots:** shot-07
**Narration:** too big to be sent in one
**Captions:** But this data is too big / to be sent in one go
**Visible overlay layers:** elapsed, captions

**00:35.000–00:35.250 · encryption:** Begin the camera pullback while the last lock and gripper geometry disappear.
**Sampling:** Output frames 1050–1057.
- Foreground: The mechanical arm exits right and the field reclaims the frame.
- Background: Binary field at half scale with Y rotation -0.13, beneath a dark navy horizon.
- Camera: Use the data-journey actualFieldCamera formula. Inspection blends at 30.2–31.6; pullback at 35–36.8. Foreground poses use baseline-camera unprojection and matrix compensation.
- Light: Dim studio, warm pool, and grazing light. Sample and lens Basic texture materials preserve readable values.
- Continuity: Foreground objects retain the camera compensation until they are hidden.
- Construction source: src/data-shots.ts:44-108,227-294

**00:35.250–00:36.000 · encryption:** Pull back over the empty binary field to prepare the packet formation.
**Sampling:** Output frames 1058–1079.
- Foreground: No inspection props remain in front of the broad data field.
- Background: Binary field at half scale with Y rotation -0.13, beneath a dark navy horizon.
- Camera: Use the data-journey actualFieldCamera formula. Inspection blends at 30.2–31.6; pullback at 35–36.8. Foreground poses use baseline-camera unprojection and matrix compensation.
- Light: Dim studio, warm pool, and grazing light. Sample and lens Basic texture materials preserve readable values.
- Continuity: The pullback runs from 35–36.8 and continues across the next cut at 36.3.
- Construction source: src/data-shots.ts:44-108,227-294

**Clock / handoff shot-07:** origin 29s; active local range 6.0–6.966666666666669s; reset key 29; {   "enter": false,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 1050,
    "shot": "shot-07",
    "local": 6,
    "eye": [
      1.5,
      17,
      29
    ],
    "direction": [
      -0.04378745581498246,
      -0.42327873954483053,
      -0.9049407535096375
    ],
    "quaternion": [
      -0.21435463169067379,
      0.03977078221429439,
      0.07835200548577242,
      0.9727956311534177
    ],
    "fov": 50,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 1079,
    "shot": "shot-07",
    "local": 6.966666666666669,
    "eye": [
      0.6668190824569382,
      19.22181578011483,
      35.10999339531578
    ],
    "direction": [
      -0.014385355178612275,
      -0.39069857446168377,
      -0.9204062610988657
    ],
    "quaternion": [
      -0.19897848496530343,
      0.014297970886796863,
      0.034221544328021505,
      0.9793018004952496
    ],
    "fov": 50,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 00:35.000–00:36.000. No separately asserted effect onset.

**Measured mix:** -16.889 dBFS RMS; -3.944 dBFS peak. Source samples per channel 1680000–1728000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 00:36.000–00:37.000 · frames 1080–1109

**Shots:** shot-07, shot-08
**Narration:** one go, so it is split
**Captions:** to be sent in one go / so it is split
**Visible overlay layers:** elapsed, captions

**00:36.000–00:36.300 · encryption:** Pull back over the empty binary field to prepare the packet formation.
**Sampling:** Output frames 1080–1088.
- Foreground: No inspection props remain in front of the broad data field.
- Background: Binary field at half scale with Y rotation -0.13, beneath a dark navy horizon.
- Camera: Use the data-journey actualFieldCamera formula. Inspection blends at 30.2–31.6; pullback at 35–36.8. Foreground poses use baseline-camera unprojection and matrix compensation.
- Light: Dim studio, warm pool, and grazing light. Sample and lens Basic texture materials preserve readable values.
- Continuity: The pullback runs from 35–36.8 and continues across the next cut at 36.3.
- Construction source: src/data-shots.ts:44-108,227-294

**00:36.300–00:36.480 · packets:** Continue pulling back over the binary field before packet instances become visible.
**Sampling:** Output frames 1089–1094.
- Foreground: The ground cells remain exposed.
- Background: The binary ground disappears by 37.2, leaving the navy sky and packet cloud at three depth ranges.
- Camera: The pullback ends at 36.8 and the camera descent ends at 37.4. Thereafter eye [0, 5, 28], look [0, 4, -12], FOV 50, roll 0.
- Light: Cloud lights rise to 780 and 580 over 37.4–38.0. Body roughness changes 0.61→0.44. Cloud lighting is multiplied by 1→0.21 over 39.45–40.2; the hero is rendered sharp on layer 1.
- Continuity: The global action phase continues from encryption.
- Construction source: src/data-shots.ts:169-240,249-325; src/index.tsx:30,39; src/packet-depth.tsx:1-57

**00:36.480–00:36.640 · packets:** Start the packet formation front at row zero, then advance one row every 0.008 seconds.
**Sampling:** Output frames 1095–1099.
- Foreground: Rectangular packet groups grow out of the field with temporary subdivision lines and flashing seams.
- Background: The binary ground disappears by 37.2, leaving the navy sky and packet cloud at three depth ranges.
- Camera: The pullback ends at 36.8 and the camera descent ends at 37.4. Thereafter eye [0, 5, 28], look [0, 4, -12], FOV 50, roll 0.
- Light: Cloud lights rise to 780 and 580 over 37.4–38.0. Body roughness changes 0.61→0.44. Cloud lighting is multiplied by 1→0.21 over 39.45–40.2; the hero is rendered sharp on layer 1.
- Continuity: Each row forms over 0.075 seconds; the first lift begins at 36.64.
- Construction source: src/data-shots.ts:169-240,249-325; src/index.tsx:30,39; src/packet-depth.tsx:1-57

**00:36.640–00:36.830 · packets:** Lift the formed groups and begin moving them into the cloud.
**Sampling:** Output frames 1100–1104.
- Foreground: Gold groups peel upward as the matching original cells shrink away behind the formation front.
- Background: The binary ground disappears by 37.2, leaving the navy sky and packet cloud at three depth ranges.
- Camera: The pullback ends at 36.8 and the camera descent ends at 37.4. Thereafter eye [0, 5, 28], look [0, 4, -12], FOV 50, roll 0.
- Light: Cloud lights rise to 780 and 580 over 37.4–38.0. Body roughness changes 0.61→0.44. Cloud lighting is multiplied by 1→0.21 over 39.45–40.2; the hero is rendered sharp on layer 1.
- Continuity: Lift runs from cue + 0.16 to cue + 0.55. Travel starts at cue + 0.23.
- Construction source: src/data-shots.ts:169-240,249-325; src/index.tsx:30,39; src/packet-depth.tsx:1-57

**00:36.830–00:37.000 · packets:** Fade away the terrain while cards spread into the floating cloud and the camera descends.
**Sampling:** Output frames 1105–1109.
- Foreground: Tumbling packets replace the cell floor.
- Background: The binary ground disappears by 37.2, leaving the navy sky and packet cloud at three depth ranges.
- Camera: The pullback ends at 36.8 and the camera descent ends at 37.4. Thereafter eye [0, 5, 28], look [0, 4, -12], FOV 50, roll 0.
- Light: Cloud lights rise to 780 and 580 over 37.4–38.0. Body roughness changes 0.61→0.44. Cloud lighting is multiplied by 1→0.21 over 39.45–40.2; the hero is rendered sharp on layer 1.
- Continuity: World opacity reaches zero at 37.2; the camera descent ends at 37.4.
- Construction source: src/data-shots.ts:169-240,249-325; src/index.tsx:30,39; src/packet-depth.tsx:1-57

**Clock / handoff shot-07:** origin 29s; active local range 7.0–7.266666666666666s; reset key 29; {   "enter": false,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }
**Clock / handoff shot-08:** origin 36.3s; active local range 0.0–0.6666666666666714s; reset key 36.3; {   "enter": false,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 1080,
    "shot": "shot-07",
    "local": 7,
    "eye": [
      0.625514403292179,
      19.331961591220857,
      35.412894375857356
    ],
    "direction": [
      -0.013321383337092558,
      -0.38950439481021015,
      -0.9209282638563758
    ],
    "quaternion": [
      -0.19839109960956078,
      0.013298107666939224,
      0.032082607693829576,
      0.9795074467362418
    ],
    "fov": 50,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 1109,
    "shot": "shot-08",
    "local": 0.6666666666666714,
    "eye": [
      0,
      21.65510564672277,
      37.73662551440319
    ],
    "direction": [
      0,
      -0.39101744349713535,
      -0.9203832673842809
    ],
    "quaternion": [
      -0.1995203405867672,
      0,
      0,
      0.9798936848924686
    ],
    "fov": 50,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 00:36.000–00:37.000. Design annotations: id: data.split
frame: 1093
label: Data divides into packets
status: proposed design annotation; mixed master is playback authority

**Measured mix:** -18.052 dBFS RMS; -1.77 dBFS peak. Source samples per channel 1728000–1776000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 00:37.000–00:38.000 · frames 1110–1139

**Shots:** shot-08
**Narration:** split into 1 ,500
**Captions:** so it is split / into 1,500 smaller packets
**Visible overlay layers:** elapsed, packet-quantity, captions

**00:37.000–00:37.200 · packets:** Fade away the terrain while cards spread into the floating cloud and the camera descends.
**Sampling:** Output frames 1110–1115.
- Foreground: Tumbling packets replace the cell floor.
- Background: The binary ground disappears by 37.2, leaving the navy sky and packet cloud at three depth ranges.
- Camera: The pullback ends at 36.8 and the camera descent ends at 37.4. Thereafter eye [0, 5, 28], look [0, 4, -12], FOV 50, roll 0.
- Light: Cloud lights rise to 780 and 580 over 37.4–38.0. Body roughness changes 0.61→0.44. Cloud lighting is multiplied by 1→0.21 over 39.45–40.2; the hero is rendered sharp on layer 1.
- Continuity: World opacity reaches zero at 37.2; the camera descent ends at 37.4.
- Construction source: src/data-shots.ts:169-240,249-325; src/index.tsx:30,39; src/packet-depth.tsx:1-57

**00:37.200–00:37.400 · packets:** Continue the cloud travel after the world disappears.
**Sampling:** Output frames 1116–1121.
- Foreground: The last temporary subdivisions and seams remain until 37.4.
- Background: The binary ground disappears by 37.2, leaving the navy sky and packet cloud at three depth ranges.
- Camera: The pullback ends at 36.8 and the camera descent ends at 37.4. Thereafter eye [0, 5, 28], look [0, 4, -12], FOV 50, roll 0.
- Light: Cloud lights rise to 780 and 580 over 37.4–38.0. Body roughness changes 0.61→0.44. Cloud lighting is multiplied by 1→0.21 over 39.45–40.2; the hero is rendered sharp on layer 1.
- Continuity: The camera approaches eye [0, 5, 28].
- Construction source: src/data-shots.ts:169-240,249-325; src/index.tsx:30,39; src/packet-depth.tsx:1-57

**00:37.400–00:37.470 · packets:** Begin ramping the cloud lights and depth focus while redistributing near cards toward the frame edges.
**Sampling:** Output frames 1122–1124.
- Foreground: The gold cloud brightens around an open central area.
- Background: The binary ground disappears by 37.2, leaving the navy sky and packet cloud at three depth ranges.
- Camera: The pullback ends at 36.8 and the camera descent ends at 37.4. Thereafter eye [0, 5, 28], look [0, 4, -12], FOV 50, roll 0.
- Light: Cloud lights rise to 780 and 580 over 37.4–38.0. Body roughness changes 0.61→0.44. Cloud lighting is multiplied by 1→0.21 over 39.45–40.2; the hero is rendered sharp on layer 1.
- Continuity: Lights and aperture settle by 38.0; depth-based positioning settles by 38.1.
- Construction source: src/data-shots.ts:169-240,249-325; src/index.tsx:30,39; src/packet-depth.tsx:1-57

**00:37.470–00:37.850 · packets:** Bring in the 1,500 packets metric as formation travel finishes and large tumbles subside.
**Sampling:** Output frames 1125–1135.
- Foreground: The count appears over a layered gold packet cloud.
- Background: The binary ground disappears by 37.2, leaving the navy sky and packet cloud at three depth ranges.
- Camera: The pullback ends at 36.8 and the camera descent ends at 37.4. Thereafter eye [0, 5, 28], look [0, 4, -12], FOV 50, roll 0.
- Light: Cloud lights rise to 780 and 580 over 37.4–38.0. Body roughness changes 0.61→0.44. Cloud lighting is multiplied by 1→0.21 over 39.45–40.2; the hero is rendered sharp on layer 1.
- Continuity: Metric opacity settles by 37.53, metric size and translation by 37.72, packet travel by 37.67, and tumble by 37.85.
- Construction source: src/data-shots.ts:169-240,249-325; src/index.tsx:30,39; src/packet-depth.tsx:1-57

**00:37.850–00:38.000 · packets:** Finish settling the sparse near layer and compressed middle and far layers.
**Sampling:** Output frames 1136–1139.
- Foreground: Packets frame a deeper central space.
- Background: The binary ground disappears by 37.2, leaving the navy sky and packet cloud at three depth ranges.
- Camera: The pullback ends at 36.8 and the camera descent ends at 37.4. Thereafter eye [0, 5, 28], look [0, 4, -12], FOV 50, roll 0.
- Light: Cloud lights rise to 780 and 580 over 37.4–38.0. Body roughness changes 0.61→0.44. Cloud lighting is multiplied by 1→0.21 over 39.45–40.2; the hero is rendered sharp on layer 1.
- Continuity: Lighting and depth aperture finish their ramps at 38.0; placement finishes at 38.1.
- Construction source: src/data-shots.ts:169-240,249-325; src/index.tsx:30,39; src/packet-depth.tsx:1-57

**Clock / handoff shot-08:** origin 36.3s; active local range 0.7000000000000028–1.6666666666666714s; reset key 36.3; {   "enter": false,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 1110,
    "shot": "shot-08",
    "local": 0.7000000000000028,
    "eye": [
      0,
      21.460905349794213,
      36.88888888888883
    ],
    "direction": [
      0,
      -0.39009000690983797,
      -0.9207767299997772
    ],
    "quaternion": [
      -0.1990267193120346,
      0,
      0,
      0.9799940637574742
    ],
    "fov": 50,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 1139,
    "shot": "shot-08",
    "local": 1.6666666666666714,
    "eye": [
      0,
      5,
      28
    ],
    "direction": [
      0,
      -0.02499219116020307,
      -0.9996876464081228
    ],
    "quaternion": [
      -0.012497071494499133,
      0,
      0,
      0.9999219085528936
    ],
    "fov": 50,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 00:37.000–00:38.000. No separately asserted effect onset.

**Measured mix:** -15.676 dBFS RMS; -2.737 dBFS peak. Source samples per channel 1776000–1824000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 00:38.000–00:39.000 · frames 1140–1169

**Shots:** shot-08
**Narration:** ,500 smaller packets,
**Captions:** into 1,500 smaller packets
**Visible overlay layers:** elapsed, packet-quantity, captions

**00:38.000–00:38.100 · packets:** Finish settling the sparse near layer and compressed middle and far layers.
**Sampling:** Output frames 1140–1142.
- Foreground: Packets frame a deeper central space.
- Background: The binary ground disappears by 37.2, leaving the navy sky and packet cloud at three depth ranges.
- Camera: The pullback ends at 36.8 and the camera descent ends at 37.4. Thereafter eye [0, 5, 28], look [0, 4, -12], FOV 50, roll 0.
- Light: Cloud lights rise to 780 and 580 over 37.4–38.0. Body roughness changes 0.61→0.44. Cloud lighting is multiplied by 1→0.21 over 39.45–40.2; the hero is rendered sharp on layer 1.
- Continuity: Lighting and depth aperture finish their ramps at 38.0; placement finishes at 38.1.
- Construction source: src/data-shots.ts:169-240,249-325; src/index.tsx:30,39; src/packet-depth.tsx:1-57

**00:38.100–00:39.000 · packets:** Hold the packet count over the drifting cloud.
**Sampling:** Output frames 1143–1169.
- Foreground: Gold packets surround the quantity label against the navy sky.
- Background: The binary ground disappears by 37.2, leaving the navy sky and packet cloud at three depth ranges.
- Camera: The pullback ends at 36.8 and the camera descent ends at 37.4. Thereafter eye [0, 5, 28], look [0, 4, -12], FOV 50, roll 0.
- Light: Cloud lights rise to 780 and 580 over 37.4–38.0. Body roughness changes 0.61→0.44. Cloud lighting is multiplied by 1→0.21 over 39.45–40.2; the hero is rendered sharp on layer 1.
- Continuity: Packet Z continues with the term -(native - 38) * 1.1 * travel.
- Construction source: src/data-shots.ts:169-240,249-325; src/index.tsx:30,39; src/packet-depth.tsx:1-57

**Clock / handoff shot-08:** origin 36.3s; active local range 1.7000000000000028–2.6666666666666714s; reset key 36.3; {   "enter": false,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 1140,
    "shot": "shot-08",
    "local": 1.7000000000000028,
    "eye": [
      0,
      5,
      28
    ],
    "direction": [
      0,
      -0.02499219116020307,
      -0.9996876464081228
    ],
    "quaternion": [
      -0.012497071494499133,
      0,
      0,
      0.9999219085528936
    ],
    "fov": 50,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 1169,
    "shot": "shot-08",
    "local": 2.6666666666666714,
    "eye": [
      0,
      5,
      28
    ],
    "direction": [
      0,
      -0.02499219116020307,
      -0.9996876464081228
    ],
    "quaternion": [
      -0.012497071494499133,
      0,
      0,
      0.9999219085528936
    ],
    "fov": 50,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 00:38.000–00:39.000. No separately asserted effect onset.

**Measured mix:** -17.882 dBFS RMS; -2.34 dBFS peak. Source samples per channel 1824000–1872000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 00:39.000–00:40.000 · frames 1170–1199

**Shots:** shot-08
**Narration:** packets, each labeled with
**Captions:** into 1,500 smaller packets / each labeled
**Visible overlay layers:** elapsed, packet-quantity, captions

**00:39.000–00:39.430 · packets:** Hold the packet count over the drifting cloud.
**Sampling:** Output frames 1170–1182.
- Foreground: Gold packets surround the quantity label against the navy sky.
- Background: The binary ground disappears by 37.2, leaving the navy sky and packet cloud at three depth ranges.
- Camera: The pullback ends at 36.8 and the camera descent ends at 37.4. Thereafter eye [0, 5, 28], look [0, 4, -12], FOV 50, roll 0.
- Light: Cloud lights rise to 780 and 580 over 37.4–38.0. Body roughness changes 0.61→0.44. Cloud lighting is multiplied by 1→0.21 over 39.45–40.2; the hero is rendered sharp on layer 1.
- Continuity: Packet Z continues with the term -(native - 38) * 1.1 * travel.
- Construction source: src/data-shots.ts:169-240,249-325; src/index.tsx:30,39; src/packet-depth.tsx:1-57

**00:39.430–00:39.570 · packets:** Fade the count out while dimming the cloud and moving the focus distance toward 18.
**Sampling:** Output frames 1183–1187.
- Foreground: The count disappears as the central area prepares for the hero card.
- Background: The binary ground disappears by 37.2, leaving the navy sky and packet cloud at three depth ranges.
- Camera: The pullback ends at 36.8 and the camera descent ends at 37.4. Thereafter eye [0, 5, 28], look [0, 4, -12], FOV 50, roll 0.
- Light: Cloud lights rise to 780 and 580 over 37.4–38.0. Body roughness changes 0.61→0.44. Cloud lighting is multiplied by 1→0.21 over 39.45–40.2; the hero is rendered sharp on layer 1.
- Continuity: Metric exit is 39.43–39.57; cloud dimming and focus adjustment run from 39.45–40.2.
- Construction source: src/data-shots.ts:169-240,249-325; src/index.tsx:30,39; src/packet-depth.tsx:1-57

**00:39.570–00:39.800 · packets:** Hold the cleared center briefly before the hero appears.
**Sampling:** Output frames 1188–1193.
- Foreground: The dim cloud leaves space for the selected packet.
- Background: The binary ground disappears by 37.2, leaving the navy sky and packet cloud at three depth ranges.
- Camera: The pullback ends at 36.8 and the camera descent ends at 37.4. Thereafter eye [0, 5, 28], look [0, 4, -12], FOV 50, roll 0.
- Light: Cloud lights rise to 780 and 580 over 37.4–38.0. Body roughness changes 0.61→0.44. Cloud lighting is multiplied by 1→0.21 over 39.45–40.2; the hero is rendered sharp on layer 1.
- Continuity: From native > 39.5, eligible central foreground cloud instances shift 22 units backward.
- Construction source: src/data-shots.ts:169-240,249-325; src/index.tsx:30,39; src/packet-depth.tsx:1-57

**00:39.800–00:40.000 · packets:** Grow a plain orange hero packet from scale 0.22 toward 0.91.
**Sampling:** Output frames 1194–1199.
- Foreground: The hero front is visible without its address header or number.
- Background: The binary ground disappears by 37.2, leaving the navy sky and packet cloud at three depth ranges.
- Camera: The pullback ends at 36.8 and the camera descent ends at 37.4. Thereafter eye [0, 5, 28], look [0, 4, -12], FOV 50, roll 0.
- Light: Cloud lights rise to 780 and 580 over 37.4–38.0. Body roughness changes 0.61→0.44. Cloud lighting is multiplied by 1→0.21 over 39.45–40.2; the hero is rendered sharp on layer 1.
- Continuity: The focus growth runs from 39.8–40.35.
- Construction source: src/data-shots.ts:169-240,249-325; src/index.tsx:30,39; src/packet-depth.tsx:1-57

**Clock / handoff shot-08:** origin 36.3s; active local range 2.700000000000003–3.6666666666666714s; reset key 36.3; {   "enter": false,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 1170,
    "shot": "shot-08",
    "local": 2.700000000000003,
    "eye": [
      0,
      5,
      28
    ],
    "direction": [
      0,
      -0.02499219116020307,
      -0.9996876464081228
    ],
    "quaternion": [
      -0.012497071494499133,
      0,
      0,
      0.9999219085528936
    ],
    "fov": 50,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 1199,
    "shot": "shot-08",
    "local": 3.6666666666666714,
    "eye": [
      0,
      5,
      28
    ],
    "direction": [
      0,
      -0.02499219116020307,
      -0.9996876464081228
    ],
    "quaternion": [
      -0.012497071494499133,
      0,
      0,
      0.9999219085528936
    ],
    "fov": 50,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 00:39.000–00:40.000. Design annotations: id: packets.address
frame: 1181
label: Address appears on packet
status: proposed design annotation; mixed master is playback authority

**Measured mix:** -19.364 dBFS RMS; -3.795 dBFS peak. Source samples per channel 1872000–1920000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 00:40.000–00:41.000 · frames 1200–1229

**Shots:** shot-08
**Narration:** with the address and the packet's
**Captions:** each labeled / with the address / and the packet's number.
**Visible overlay layers:** elapsed, captions

**00:40.000–00:40.170 · packets:** Unfold the dark header upward while expanding the orange front.
**Sampling:** Output frames 1200–1205.
- Foreground: The header grows from zero height; the body changes from a 2.5-unit to a 3.45-unit height.
- Background: The binary ground disappears by 37.2, leaving the navy sky and packet cloud at three depth ranges.
- Camera: The pullback ends at 36.8 and the camera descent ends at 37.4. Thereafter eye [0, 5, 28], look [0, 4, -12], FOV 50, roll 0.
- Light: Cloud lights rise to 780 and 580 over 37.4–38.0. Body roughness changes 0.61→0.44. Cloud lighting is multiplied by 1→0.21 over 39.45–40.2; the hero is rendered sharp on layer 1.
- Continuity: Header reveal runs from 40–40.23.
- Construction source: src/data-shots.ts:169-240,249-325; src/index.tsx:30,39; src/packet-depth.tsx:1-57

**00:40.170–00:40.400 · packets:** Fade in the From address and finish the hero growth.
**Sampling:** Output frames 1206–1211.
- Foreground: The header reads From — Shanghai · Mom's phone.
- Background: The binary ground disappears by 37.2, leaving the navy sky and packet cloud at three depth ranges.
- Camera: The pullback ends at 36.8 and the camera descent ends at 37.4. Thereafter eye [0, 5, 28], look [0, 4, -12], FOV 50, roll 0.
- Light: Cloud lights rise to 780 and 580 over 37.4–38.0. Body roughness changes 0.61→0.44. Cloud lighting is multiplied by 1→0.21 over 39.45–40.2; the hero is rendered sharp on layer 1.
- Continuity: The From row settles at 40.34; scale settles at 40.35. The To row remains hidden until 40.40.
- Construction source: src/data-shots.ts:169-240,249-325; src/index.tsx:30,39; src/packet-depth.tsx:1-57

**00:40.400–00:40.540 · packets:** Fade in the destination address.
**Sampling:** Output frames 1212–1216.
- Foreground: The header adds To — Los Angeles · Your phone.
- Background: The binary ground disappears by 37.2, leaving the navy sky and packet cloud at three depth ranges.
- Camera: The pullback ends at 36.8 and the camera descent ends at 37.4. Thereafter eye [0, 5, 28], look [0, 4, -12], FOV 50, roll 0.
- Light: Cloud lights rise to 780 and 580 over 37.4–38.0. Body roughness changes 0.61→0.44. Cloud lighting is multiplied by 1→0.21 over 39.45–40.2; the hero is rendered sharp on layer 1.
- Continuity: The hero begins a gentle 0.11-unit rise ending at 41.7.
- Construction source: src/data-shots.ts:169-240,249-325; src/index.tsx:30,39; src/packet-depth.tsx:1-57

**00:40.540–00:41.000 · packets:** Hold the complete address header with small scale, height, and roll changes.
**Sampling:** Output frames 1217–1229.
- Foreground: Both address rows are readable; the number area remains blank.
- Background: The binary ground disappears by 37.2, leaving the navy sky and packet cloud at three depth ranges.
- Camera: The pullback ends at 36.8 and the camera descent ends at 37.4. Thereafter eye [0, 5, 28], look [0, 4, -12], FOV 50, roll 0.
- Light: Cloud lights rise to 780 and 580 over 37.4–38.0. Body roughness changes 0.61→0.44. Cloud lighting is multiplied by 1→0.21 over 39.45–40.2; the hero is rendered sharp on layer 1.
- Continuity: The number does not appear before 41.43.
- Construction source: src/data-shots.ts:169-240,249-325; src/index.tsx:30,39; src/packet-depth.tsx:1-57

**Clock / handoff shot-08:** origin 36.3s; active local range 3.700000000000003–4.666666666666671s; reset key 36.3; {   "enter": false,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 1200,
    "shot": "shot-08",
    "local": 3.700000000000003,
    "eye": [
      0,
      5,
      28
    ],
    "direction": [
      0,
      -0.02499219116020307,
      -0.9996876464081228
    ],
    "quaternion": [
      -0.012497071494499133,
      0,
      0,
      0.9999219085528936
    ],
    "fov": 50,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 1229,
    "shot": "shot-08",
    "local": 4.666666666666671,
    "eye": [
      0,
      5,
      28
    ],
    "direction": [
      0,
      -0.02499219116020307,
      -0.9996876464081228
    ],
    "quaternion": [
      -0.012497071494499133,
      0,
      0,
      0.9999219085528936
    ],
    "fov": 50,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 00:40.000–00:41.000. No separately asserted effect onset.

**Measured mix:** -18.451 dBFS RMS; -2.318 dBFS peak. Source samples per channel 1920000–1968000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 00:41.000–00:42.000 · frames 1230–1259

**Shots:** shot-08, shot-09
**Narration:** packet's number. Remember
**Captions:** and the packet's number. / Remember those
**Visible overlay layers:** elapsed, captions

**00:41.000–00:41.430 · packets:** Hold the complete address header with small scale, height, and roll changes.
**Sampling:** Output frames 1230–1242.
- Foreground: Both address rows are readable; the number area remains blank.
- Background: The binary ground disappears by 37.2, leaving the navy sky and packet cloud at three depth ranges.
- Camera: The pullback ends at 36.8 and the camera descent ends at 37.4. Thereafter eye [0, 5, 28], look [0, 4, -12], FOV 50, roll 0.
- Light: Cloud lights rise to 780 and 580 over 37.4–38.0. Body roughness changes 0.61→0.44. Cloud lighting is multiplied by 1→0.21 over 39.45–40.2; the hero is rendered sharp on layer 1.
- Continuity: The number does not appear before 41.43.
- Construction source: src/data-shots.ts:169-240,249-325; src/index.tsx:30,39; src/packet-depth.tsx:1-57

**00:41.430–00:41.800 · packets:** Reveal #0847 and hold the completed address packet.
**Sampling:** Output frames 1243–1253.
- Foreground: The orange body shows #0847 beneath the dark address header.
- Background: The binary ground disappears by 37.2, leaving the navy sky and packet cloud at three depth ranges.
- Camera: The pullback ends at 36.8 and the camera descent ends at 37.4. Thereafter eye [0, 5, 28], look [0, 4, -12], FOV 50, roll 0.
- Light: Cloud lights rise to 780 and 580 over 37.4–38.0. Body roughness changes 0.61→0.44. Cloud lighting is multiplied by 1→0.21 over 39.45–40.2; the hero is rendered sharp on layer 1.
- Continuity: The next shot uses a newly constructed card and room staging.
- Construction source: src/data-shots.ts:169-240,249-325; src/index.tsx:30,39; src/packet-depth.tsx:1-57

**00:41.800–00:42.000 · packet-number:** Cut to the room with a small selected #0847 card near the upper left.
**Sampling:** Output frames 1254–1259.
- Foreground: The hero is at pixel [102, 352], width 100, roll 0.065, with twelve ambient cards.
- Background: The room remains until 44.7, then switches to a #10162e backdrop and numbered packet cloud.
- Camera: Fixed eye [0.2, 3, 14], look [0, 3, -2], FOV 47. Emphasis comes from card placement in screen pixels.
- Light: Studio and room practical lights, a shader pulse on the hero, and an additive halo. PacketDepth is active only in the cloud stage.
- Continuity: This is fresh room geometry rather than the previous address-card pose.
- Construction source: src/numbered-packets.ts:18-43; src/extensions.ts:8-9

**Clock / handoff shot-08:** origin 36.3s; active local range 4.700000000000003–5.466666666666669s; reset key 36.3; {   "enter": false,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }
**Clock / handoff shot-09:** origin 41.8s; active local range 0.0–0.1666666666666714s; reset key 41.8; {   "enter": false,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 1230,
    "shot": "shot-08",
    "local": 4.700000000000003,
    "eye": [
      0,
      5,
      28
    ],
    "direction": [
      0,
      -0.02499219116020307,
      -0.9996876464081228
    ],
    "quaternion": [
      -0.012497071494499133,
      0,
      0,
      0.9999219085528936
    ],
    "fov": 50,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 1259,
    "shot": "shot-09",
    "local": 0.1666666666666714,
    "eye": [
      0.2,
      3,
      14
    ],
    "direction": [
      -0.012499023551926024,
      0,
      -0.9999218841540817
    ],
    "quaternion": [
      0,
      0.0062496338260130254,
      0,
      0.9999804708478267
    ],
    "fov": 47,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 00:41.000–00:42.000. No separately asserted effect onset.

**Measured mix:** -19.78 dBFS RMS; -3.672 dBFS peak. Source samples per channel 1968000–2016000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 00:42.000–00:43.000 · frames 1260–1289

**Shots:** shot-09
**Narration:** Remember those packet numbers because
**Captions:** Remember those / packet numbers,
**Visible overlay layers:** elapsed, captions

**00:42.000–00:42.030 · packet-number:** Cut to the room with a small selected #0847 card near the upper left.
**Sampling:** Output frames 1260–1260.
- Foreground: The hero is at pixel [102, 352], width 100, roll 0.065, with twelve ambient cards.
- Background: The room remains until 44.7, then switches to a #10162e backdrop and numbered packet cloud.
- Camera: Fixed eye [0.2, 3, 14], look [0, 3, -2], FOV 47. Emphasis comes from card placement in screen pixels.
- Light: Studio and room practical lights, a shader pulse on the hero, and an additive halo. PacketDepth is active only in the cloud stage.
- Continuity: This is fresh room geometry rather than the previous address-card pose.
- Construction source: src/numbered-packets.ts:18-43; src/extensions.ts:8-9

**00:42.030–00:42.400 · packet-number:** Move the hero upward and right while increasing its size.
**Sampling:** Output frames 1261–1271.
- Foreground: The hero moves to [374, 275], grows to width 230, and levels its roll to zero.
- Background: The room remains until 44.7, then switches to a #10162e backdrop and numbered packet cloud.
- Camera: Fixed eye [0.2, 3, 14], look [0, 3, -2], FOV 47. Emphasis comes from card placement in screen pixels.
- Light: Studio and room practical lights, a shader pulse on the hero, and an additive halo. PacketDepth is active only in the cloud stage.
- Continuity: focus = blend(native, 42.03, 42.40).
- Construction source: src/numbered-packets.ts:18-43; src/extensions.ts:8-9

**00:42.400–00:42.940 · packet-number:** Brighten the gold body and increase the halo while holding the hero position.
**Sampling:** Output frames 1272–1288.
- Foreground: The selected #0847 gold mask gains pulse 0–1 and halo opacity 0.13–0.47.
- Background: The room remains until 44.7, then switches to a #10162e backdrop and numbered packet cloud.
- Camera: Fixed eye [0.2, 3, 14], look [0, 3, -2], FOV 47. Emphasis comes from card placement in screen pixels.
- Light: Studio and room practical lights, a shader pulse on the hero, and an additive halo. PacketDepth is active only in the cloud stage.
- Continuity: The pulse is a one-way ramp, not a periodic flash.
- Construction source: src/numbered-packets.ts:18-43; src/extensions.ts:8-9

**00:42.940–00:43.000 · packet-number:** Hold the highlighted #0847 card in the room while ambient cards gently roll.
**Sampling:** Output frames 1289–1289.
- Foreground: The large bright card contrasts with twelve dim contextual cards.
- Background: The room remains until 44.7, then switches to a #10162e backdrop and numbered packet cloud.
- Camera: Fixed eye [0.2, 3, 14], look [0, 3, -2], FOV 47. Emphasis comes from card placement in screen pixels.
- Light: Studio and room practical lights, a shader pulse on the hero, and an additive halo. PacketDepth is active only in the cloud stage.
- Continuity: The camera is fixed. Ambient roll adds sin(local * 0.23 + i) * 0.009.
- Construction source: src/numbered-packets.ts:18-43; src/extensions.ts:8-9

**Clock / handoff shot-09:** origin 41.8s; active local range 0.20000000000000284–1.1666666666666714s; reset key 41.8; {   "enter": false,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 1260,
    "shot": "shot-09",
    "local": 0.20000000000000284,
    "eye": [
      0.2,
      3,
      14
    ],
    "direction": [
      -0.012499023551926024,
      0,
      -0.9999218841540817
    ],
    "quaternion": [
      0,
      0.0062496338260130254,
      0,
      0.9999804708478267
    ],
    "fov": 47,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 1289,
    "shot": "shot-09",
    "local": 1.1666666666666714,
    "eye": [
      0.2,
      3,
      14
    ],
    "direction": [
      -0.012499023551926024,
      0,
      -0.9999218841540817
    ],
    "quaternion": [
      0,
      0.0062496338260130254,
      0,
      0.9999804708478267
    ],
    "fov": 47,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 00:42.000–00:43.000. No separately asserted effect onset.

**Measured mix:** -15.565 dBFS RMS; -3.159 dBFS peak. Source samples per channel 2016000–2064000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 00:43.000–00:44.000 · frames 1290–1319

**Shots:** shot-09
**Narration:** because your phone is going to
**Captions:** packet numbers, / because your phone / is going to need them
**Visible overlay layers:** elapsed, captions

**00:43.000–00:44.000 · packet-number:** Hold the highlighted #0847 card in the room while ambient cards gently roll.
**Sampling:** Output frames 1290–1319.
- Foreground: The large bright card contrasts with twelve dim contextual cards.
- Background: The room remains until 44.7, then switches to a #10162e backdrop and numbered packet cloud.
- Camera: Fixed eye [0.2, 3, 14], look [0, 3, -2], FOV 47. Emphasis comes from card placement in screen pixels.
- Light: Studio and room practical lights, a shader pulse on the hero, and an additive halo. PacketDepth is active only in the cloud stage.
- Continuity: The camera is fixed. Ambient roll adds sin(local * 0.23 + i) * 0.009.
- Construction source: src/numbered-packets.ts:18-43; src/extensions.ts:8-9

**Clock / handoff shot-09:** origin 41.8s; active local range 1.2000000000000028–2.1666666666666714s; reset key 41.8; {   "enter": false,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 1290,
    "shot": "shot-09",
    "local": 1.2000000000000028,
    "eye": [
      0.2,
      3,
      14
    ],
    "direction": [
      -0.012499023551926024,
      0,
      -0.9999218841540817
    ],
    "quaternion": [
      0,
      0.0062496338260130254,
      0,
      0.9999804708478267
    ],
    "fov": 47,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 1319,
    "shot": "shot-09",
    "local": 2.1666666666666714,
    "eye": [
      0.2,
      3,
      14
    ],
    "direction": [
      -0.012499023551926024,
      0,
      -0.9999218841540817
    ],
    "quaternion": [
      0,
      0.0062496338260130254,
      0,
      0.9999804708478267
    ],
    "fov": 47,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 00:43.000–00:44.000. No separately asserted effect onset.

**Measured mix:** -16.288 dBFS RMS; -3.097 dBFS peak. Source samples per channel 2064000–2112000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 00:44.000–00:45.000 · frames 1320–1349

**Shots:** shot-09
**Narration:** to need them at the end.
**Captions:** is going to need them / at the end.
**Visible overlay layers:** elapsed, captions

**00:44.000–00:44.700 · packet-number:** Hold the highlighted #0847 card in the room while ambient cards gently roll.
**Sampling:** Output frames 1320–1340.
- Foreground: The large bright card contrasts with twelve dim contextual cards.
- Background: The room remains until 44.7, then switches to a #10162e backdrop and numbered packet cloud.
- Camera: Fixed eye [0.2, 3, 14], look [0, 3, -2], FOV 47. Emphasis comes from card placement in screen pixels.
- Light: Studio and room practical lights, a shader pulse on the hero, and an additive halo. PacketDepth is active only in the cloud stage.
- Continuity: The camera is fixed. Ambient roll adds sin(local * 0.23 + i) * 0.009.
- Construction source: src/numbered-packets.ts:18-43; src/extensions.ts:8-9

**00:44.700–00:45.000 · packet-number:** Switch instantly from the room to the packet cloud and recenter the hero.
**Sampling:** Output frames 1341–1349.
- Foreground: The sharp #0847 card is at [360, 548], width 176, surrounded by nineteen near cards and 520 deep cards.
- Background: The room remains until 44.7, then switches to a #10162e backdrop and numbered packet cloud.
- Camera: Fixed eye [0.2, 3, 14], look [0, 3, -2], FOV 47. Emphasis comes from card placement in screen pixels.
- Light: Studio and room practical lights, a shader pulse on the hero, and an additive halo. PacketDepth is active only in the cloud stage.
- Continuity: Depth focus activates at 44.7. Deep-card Y adds (native - 44.7) * 8 until the cut.
- Construction source: src/numbered-packets.ts:18-43; src/extensions.ts:8-9

**Clock / handoff shot-09:** origin 41.8s; active local range 2.200000000000003–3.1666666666666714s; reset key 41.8; {   "enter": false,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 1320,
    "shot": "shot-09",
    "local": 2.200000000000003,
    "eye": [
      0.2,
      3,
      14
    ],
    "direction": [
      -0.012499023551926024,
      0,
      -0.9999218841540817
    ],
    "quaternion": [
      0,
      0.0062496338260130254,
      0,
      0.9999804708478267
    ],
    "fov": 47,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 1349,
    "shot": "shot-09",
    "local": 3.1666666666666714,
    "eye": [
      0.2,
      3,
      14
    ],
    "direction": [
      -0.012499023551926024,
      0,
      -0.9999218841540817
    ],
    "quaternion": [
      0,
      0.0062496338260130254,
      0,
      0.9999804708478267
    ],
    "fov": 47,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 00:44.000–00:45.000. No separately asserted effect onset.

**Measured mix:** -18.467 dBFS RMS; -4.198 dBFS peak. Source samples per channel 2112000–2160000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 00:45.000–00:46.000 · frames 1350–1379

**Shots:** shot-09, shot-10
**Narration:** At three millisecond,
**Captions:** At 3 milliseconds,
**Visible overlay layers:** elapsed, captions

**00:45.167–00:46.000 · send-radio:** Thirty-eight numbered cards repeatedly rise and spread from measured photo pixels on the sent-photo phone; camera holds its initial street view.
**Sampling:** Output frames 1355–1379.
- Foreground: Photo-linked numbered cards, phone until4.5, then destination mast.
- Background: Reflective floor, framed city street and shared blended sky.
- Camera: Use continuous-radio-journey camera: transformed phone view→cubic bridge4.5–5.5→tower opening pose.
- Light: Blend q=ease(step(tt,4.1,5.5)); reset intensities before applying fade.
- Continuity: tt is exact local time; following logical tower uses internal origin45.167, differing.0003333333s.
- Evaluated recipe sample: {   "native": 45.583333333,   "local": 0.416666667,   "journey_tt": 0.4166667,   "phone_visible": true,   "travel_pulse_visible": false,   "light_blend": 0 }
- Construction source: src/radio-journey.ts:25-40; src/phone-radio.ts:65-71

**00:45.000–00:45.167 · packet-number:** Switch instantly from the room to the packet cloud and recenter the hero.
**Sampling:** Output frames 1350–1354.
- Foreground: The sharp #0847 card is at [360, 548], width 176, surrounded by nineteen near cards and 520 deep cards.
- Background: The room remains until 44.7, then switches to a #10162e backdrop and numbered packet cloud.
- Camera: Fixed eye [0.2, 3, 14], look [0, 3, -2], FOV 47. Emphasis comes from card placement in screen pixels.
- Light: Studio and room practical lights, a shader pulse on the hero, and an additive halo. PacketDepth is active only in the cloud stage.
- Continuity: Depth focus activates at 44.7. Deep-card Y adds (native - 44.7) * 8 until the cut.
- Construction source: src/numbered-packets.ts:18-43; src/extensions.ts:8-9

**Clock / handoff shot-09:** origin 41.8s; active local range 3.200000000000003–3.3333333333333357s; reset key 41.8; {   "enter": false,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }
**Clock / handoff shot-10:** origin 45.166666666666664s; active local range 0.0–0.8000000000000043s; reset key 45.166666666666664; {   "enter": false,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 1350,
    "shot": "shot-09",
    "local": 3.200000000000003,
    "eye": [
      0.2,
      3,
      14
    ],
    "direction": [
      -0.012499023551926024,
      0,
      -0.9999218841540817
    ],
    "quaternion": [
      0,
      0.0062496338260130254,
      0,
      0.9999804708478267
    ],
    "fov": 47,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 1379,
    "shot": "shot-10",
    "local": 0.8000000000000043,
    "eye": [
      -88.5,
      13.2,
      -2.9999999999999822
    ],
    "direction": [
      0.9941577225110843,
      -0.10793712415834622,
      -3.3306690738754706e-16
    ],
    "quaternion": [
      -0.03821739619896896,
      -0.7060732473531134,
      -0.03821739619896895,
      0.7060732473531136
    ],
    "fov": 46,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 00:45.000–00:46.000. No separately asserted effect onset.

**Measured mix:** -17.466 dBFS RMS; -3.452 dBFS peak. Source samples per channel 2160000–2208000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 00:46.000–00:47.000 · frames 1380–1409

**Shots:** shot-10
**Narration:** millisecond, the packet leaves
**Captions:** At 3 milliseconds, / the packet leaves
**Visible overlay layers:** elapsed, captions

**00:46.000–00:47.000 · send-radio:** Thirty-eight numbered cards repeatedly rise and spread from measured photo pixels on the sent-photo phone; camera holds its initial street view.
**Sampling:** Output frames 1380–1409.
- Foreground: Photo-linked numbered cards, phone until4.5, then destination mast.
- Background: Reflective floor, framed city street and shared blended sky.
- Camera: Use continuous-radio-journey camera: transformed phone view→cubic bridge4.5–5.5→tower opening pose.
- Light: Blend q=ease(step(tt,4.1,5.5)); reset intensities before applying fade.
- Continuity: tt is exact local time; following logical tower uses internal origin45.167, differing.0003333333s.
- Evaluated recipe sample: {   "native": 46.5,   "local": 1.333333333,   "journey_tt": 1.3333333,   "phone_visible": true,   "travel_pulse_visible": false,   "light_blend": 0 }
- Construction source: src/radio-journey.ts:25-40; src/phone-radio.ts:65-71

**Clock / handoff shot-10:** origin 45.166666666666664s; active local range 0.8333333333333357–1.8000000000000043s; reset key 45.166666666666664; {   "enter": false,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 1380,
    "shot": "shot-10",
    "local": 0.8333333333333357,
    "eye": [
      -88.5,
      13.2,
      -2.9999999999999822
    ],
    "direction": [
      0.9941577225110843,
      -0.10793712415834622,
      -3.3306690738754706e-16
    ],
    "quaternion": [
      -0.03821739619896896,
      -0.7060732473531134,
      -0.03821739619896895,
      0.7060732473531136
    ],
    "fov": 46,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 1409,
    "shot": "shot-10",
    "local": 1.8000000000000043,
    "eye": [
      -88.5,
      13.2,
      -2.9999999999999822
    ],
    "direction": [
      0.9941577225110843,
      -0.10793712415834622,
      -3.3306690738754706e-16
    ],
    "quaternion": [
      -0.03821739619896896,
      -0.7060732473531134,
      -0.03821739619896895,
      0.7060732473531136
    ],
    "fov": 46,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 00:46.000–00:47.000. No separately asserted effect onset.

**Measured mix:** -17.222 dBFS RMS; -2.804 dBFS peak. Source samples per channel 2208000–2256000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 00:47.000–00:48.000 · frames 1410–1439

**Shots:** shot-10
**Narration:** leaves your mom's phone as radio
**Captions:** the packet leaves / your mom's phone / as radio waves
**Visible overlay layers:** elapsed, captions

**00:47.000–00:47.367 · send-radio:** Thirty-eight numbered cards repeatedly rise and spread from measured photo pixels on the sent-photo phone; camera holds its initial street view.
**Sampling:** Output frames 1410–1420.
- Foreground: Photo-linked numbered cards, phone until4.5, then destination mast.
- Background: Reflective floor, framed city street and shared blended sky.
- Camera: Use continuous-radio-journey camera: transformed phone view→cubic bridge4.5–5.5→tower opening pose.
- Light: Blend q=ease(step(tt,4.1,5.5)); reset intensities before applying fade.
- Continuity: tt is exact local time; following logical tower uses internal origin45.167, differing.0003333333s.
- Evaluated recipe sample: {   "native": 47.183333333,   "local": 2.016666667,   "journey_tt": 2.0166667,   "phone_visible": true,   "travel_pulse_visible": false,   "light_blend": 0 }
- Construction source: src/radio-journey.ts:25-40; src/phone-radio.ts:65-71

**00:47.367–00:47.467 · send-radio:** Begin eased1.4-unit push toward phone while photo-linked packet emission continues.
**Sampling:** Output frames 1421–1423.
- Foreground: Photo-linked numbered cards, phone until4.5, then destination mast.
- Background: Reflective floor, framed city street and shared blended sky.
- Camera: Use continuous-radio-journey camera: transformed phone view→cubic bridge4.5–5.5→tower opening pose.
- Light: Blend q=ease(step(tt,4.1,5.5)); reset intensities before applying fade.
- Continuity: tt is exact local time; following logical tower uses internal origin45.167, differing.0003333333s.
- Evaluated recipe sample: {   "native": 47.416666667,   "local": 2.25,   "journey_tt": 2.25,   "phone_visible": true,   "travel_pulse_visible": false,   "light_blend": 0 }
- Construction source: src/radio-journey.ts:25-40; src/phone-radio.ts:65-71

**00:47.467–00:47.867 · send-radio:** Three radio shells fade in around the phone; near camera push proceeds.
**Sampling:** Output frames 1424–1435.
- Foreground: Photo-linked numbered cards, phone until4.5, then destination mast.
- Background: Reflective floor, framed city street and shared blended sky.
- Camera: Use continuous-radio-journey camera: transformed phone view→cubic bridge4.5–5.5→tower opening pose.
- Light: Blend q=ease(step(tt,4.1,5.5)); reset intensities before applying fade.
- Continuity: tt is exact local time; following logical tower uses internal origin45.167, differing.0003333333s.
- Evaluated recipe sample: {   "native": 47.666666667,   "local": 2.5,   "journey_tt": 2.5,   "phone_visible": true,   "travel_pulse_visible": false,   "light_blend": 0 }
- Construction source: src/radio-journey.ts:25-40; src/phone-radio.ts:65-71

**00:47.867–00:48.000 · send-radio:** Radio shells sustain expanding one-third phase offsets; finish phone push.
**Sampling:** Output frames 1436–1439.
- Foreground: Photo-linked numbered cards, phone until4.5, then destination mast.
- Background: Reflective floor, framed city street and shared blended sky.
- Camera: Use continuous-radio-journey camera: transformed phone view→cubic bridge4.5–5.5→tower opening pose.
- Light: Blend q=ease(step(tt,4.1,5.5)); reset intensities before applying fade.
- Continuity: tt is exact local time; following logical tower uses internal origin45.167, differing.0003333333s.
- Evaluated recipe sample: {   "native": 47.933333333,   "local": 2.766666667,   "journey_tt": 2.7666667,   "phone_visible": true,   "travel_pulse_visible": false,   "light_blend": 0 }
- Construction source: src/radio-journey.ts:25-40; src/phone-radio.ts:65-71

**Clock / handoff shot-10:** origin 45.166666666666664s; active local range 1.8333333333333357–2.8000000000000043s; reset key 45.166666666666664; {   "enter": false,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 1410,
    "shot": "shot-10",
    "local": 1.8333333333333357,
    "eye": [
      -88.5,
      13.2,
      -2.9999999999999822
    ],
    "direction": [
      0.9941577225110843,
      -0.10793712415834622,
      -3.3306690738754706e-16
    ],
    "quaternion": [
      -0.03821739619896896,
      -0.7060732473531134,
      -0.03821739619896895,
      0.7060732473531136
    ],
    "fov": 46,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 1439,
    "shot": "shot-10",
    "local": 2.8000000000000043,
    "eye": [
      -87.46296296296295,
      13.2,
      -2.9999999999999822
    ],
    "direction": [
      0.993405999201052,
      -0.11464955626324855,
      -2.2204460492503136e-16
    ],
    "quaternion": [
      -0.040601726561034814,
      -0.7059401531293307,
      -0.04060172656103481,
      0.7059401531293308
    ],
    "fov": 46,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 00:47.000–00:48.000. No separately asserted effect onset.

**Measured mix:** -16.237 dBFS RMS; -3.963 dBFS peak. Source samples per channel 2256000–2304000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 00:48.000–00:49.000 · frames 1440–1469

**Shots:** shot-10
**Narration:** radio waves traveling
**Captions:** as radio waves / traveling through the air
**Visible overlay layers:** elapsed, captions

**00:48.000–00:48.267 · send-radio:** Radio shells sustain expanding one-third phase offsets; finish phone push.
**Sampling:** Output frames 1440–1447.
- Foreground: Photo-linked numbered cards, phone until4.5, then destination mast.
- Background: Reflective floor, framed city street and shared blended sky.
- Camera: Use continuous-radio-journey camera: transformed phone view→cubic bridge4.5–5.5→tower opening pose.
- Light: Blend q=ease(step(tt,4.1,5.5)); reset intensities before applying fade.
- Continuity: tt is exact local time; following logical tower uses internal origin45.167, differing.0003333333s.
- Evaluated recipe sample: {   "native": 48.133333333,   "local": 2.966666667,   "journey_tt": 2.9666667,   "phone_visible": true,   "travel_pulse_visible": false,   "light_blend": 0 }
- Construction source: src/radio-journey.ts:25-40; src/phone-radio.ts:65-71

**00:48.267–00:48.367 · send-radio:** Camera starts outbound street flight at60% time rate; cards continue on full update clock.
**Sampling:** Output frames 1448–1450.
- Foreground: Photo-linked numbered cards, phone until4.5, then destination mast.
- Background: Reflective floor, framed city street and shared blended sky.
- Camera: Use continuous-radio-journey camera: transformed phone view→cubic bridge4.5–5.5→tower opening pose.
- Light: Blend q=ease(step(tt,4.1,5.5)); reset intensities before applying fade.
- Continuity: tt is exact local time; following logical tower uses internal origin45.167, differing.0003333333s.
- Evaluated recipe sample: {   "native": 48.316666667,   "local": 3.15,   "journey_tt": 3.15,   "phone_visible": true,   "travel_pulse_visible": false,   "light_blend": 0 }
- Construction source: src/radio-journey.ts:25-40; src/phone-radio.ts:65-71

**00:48.367–00:48.867 · send-radio:** Gold practical pulse travels along Bézier toward tower; phone shells fade away while camera follows through street.
**Sampling:** Output frames 1451–1465.
- Foreground: Photo-linked numbered cards, phone until4.5, then destination mast.
- Background: Reflective floor, framed city street and shared blended sky.
- Camera: Use continuous-radio-journey camera: transformed phone view→cubic bridge4.5–5.5→tower opening pose.
- Light: Blend q=ease(step(tt,4.1,5.5)); reset intensities before applying fade.
- Continuity: tt is exact local time; following logical tower uses internal origin45.167, differing.0003333333s.
- Evaluated recipe sample: {   "native": 48.616666667,   "local": 3.45,   "journey_tt": 3.45,   "phone_visible": true,   "travel_pulse_visible": true,   "light_blend": 0 }
- Construction source: src/radio-journey.ts:25-40; src/phone-radio.ts:65-71

**00:48.867–00:49.000 · send-radio:** Shells now invisible; travel pulse proceeds toward tower and near frame remains.
**Sampling:** Output frames 1466–1469.
- Foreground: Photo-linked numbered cards, phone until4.5, then destination mast.
- Background: Reflective floor, framed city street and shared blended sky.
- Camera: Use continuous-radio-journey camera: transformed phone view→cubic bridge4.5–5.5→tower opening pose.
- Light: Blend q=ease(step(tt,4.1,5.5)); reset intensities before applying fade.
- Continuity: tt is exact local time; following logical tower uses internal origin45.167, differing.0003333333s.
- Evaluated recipe sample: {   "native": 48.933333333,   "local": 3.766666667,   "journey_tt": 3.7666667,   "phone_visible": true,   "travel_pulse_visible": true,   "light_blend": 0 }
- Construction source: src/radio-journey.ts:25-40; src/phone-radio.ts:65-71

**Clock / handoff shot-10:** origin 45.166666666666664s; active local range 2.8333333333333357–3.8000000000000043s; reset key 45.166666666666664; {   "enter": false,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 1440,
    "shot": "shot-10",
    "local": 2.8333333333333357,
    "eye": [
      -87.3958898541889,
      13.2,
      -2.999999999999984
    ],
    "direction": [
      0.9933524765904252,
      -0.11511236793528548,
      -1.1102230246251563e-16
    ],
    "quaternion": [
      -0.04076617289363418,
      -0.7059306758794424,
      -0.04076617289363417,
      0.7059306758794425
    ],
    "fov": 46,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 1469,
    "shot": "shot-10",
    "local": 3.8000000000000043,
    "eye": [
      -82.45609656014649,
      12.968167066965192,
      -2.7102088337064743
    ],
    "direction": [
      0.995484447786444,
      -0.09482530392129701,
      -0.004344646309248023
    ],
    "quaternion": [
      -0.03363680043750971,
      -0.7047668000847537,
      -0.03349031788885092,
      0.7078493637507404
    ],
    "fov": 46,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 00:48.000–00:49.000. No separately asserted effect onset.

**Measured mix:** -17.216 dBFS RMS; -3.133 dBFS peak. Source samples per channel 2304000–2352000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 00:49.000–00:50.000 · frames 1470–1499

**Shots:** shot-10
**Narration:** traveling through the air into a
**Captions:** traveling through the air / into a cell tower
**Visible overlay layers:** elapsed, captions

**00:49.000–00:49.167 · send-radio:** Shells now invisible; travel pulse proceeds toward tower and near frame remains.
**Sampling:** Output frames 1470–1474.
- Foreground: Photo-linked numbered cards, phone until4.5, then destination mast.
- Background: Reflective floor, framed city street and shared blended sky.
- Camera: Use continuous-radio-journey camera: transformed phone view→cubic bridge4.5–5.5→tower opening pose.
- Light: Blend q=ease(step(tt,4.1,5.5)); reset intensities before applying fade.
- Continuity: tt is exact local time; following logical tower uses internal origin45.167, differing.0003333333s.
- Evaluated recipe sample: {   "native": 49.083333333,   "local": 3.916666667,   "journey_tt": 3.9166667,   "phone_visible": true,   "travel_pulse_visible": true,   "light_blend": 0 }
- Construction source: src/radio-journey.ts:25-40; src/phone-radio.ts:65-71

**00:49.167–00:49.267 · send-radio:** Near window frame hides, exposing street flight toward tower.
**Sampling:** Output frames 1475–1477.
- Foreground: Photo-linked numbered cards, phone until4.5, then destination mast.
- Background: Reflective floor, framed city street and shared blended sky.
- Camera: Use continuous-radio-journey camera: transformed phone view→cubic bridge4.5–5.5→tower opening pose.
- Light: Blend q=ease(step(tt,4.1,5.5)); reset intensities before applying fade.
- Continuity: tt is exact local time; following logical tower uses internal origin45.167, differing.0003333333s.
- Evaluated recipe sample: {   "native": 49.216666667,   "local": 4.05,   "journey_tt": 4.05,   "phone_visible": true,   "travel_pulse_visible": true,   "light_blend": 0 }
- Construction source: src/radio-journey.ts:25-40; src/phone-radio.ts:65-71

**00:49.267–00:49.667 · send-radio:** Phone-stage lighting fades down while destination-tower lighting fades up; moving pulse and camera approach continue.
**Sampling:** Output frames 1478–1489.
- Foreground: Photo-linked numbered cards, phone until4.5, then destination mast.
- Background: Reflective floor, framed city street and shared blended sky.
- Camera: Use continuous-radio-journey camera: transformed phone view→cubic bridge4.5–5.5→tower opening pose.
- Light: Blend q=ease(step(tt,4.1,5.5)); reset intensities before applying fade.
- Continuity: tt is exact local time; following logical tower uses internal origin45.167, differing.0003333333s.
- Evaluated recipe sample: {   "native": 49.466666667,   "local": 4.3,   "journey_tt": 4.3,   "phone_visible": true,   "travel_pulse_visible": true,   "light_blend": 0.0553936 }
- Construction source: src/radio-journey.ts:25-40; src/phone-radio.ts:65-71

**00:49.667–00:50.000 · send-radio:** Hide Phone3D; switch eye onto one-second cubic camera bridge and turn look toward tower top.
**Sampling:** Output frames 1490–1499.
- Foreground: Photo-linked numbered cards, phone until4.5, then destination mast.
- Background: Reflective floor, framed city street and shared blended sky.
- Camera: Use continuous-radio-journey camera: transformed phone view→cubic bridge4.5–5.5→tower opening pose.
- Light: Blend q=ease(step(tt,4.1,5.5)); reset intensities before applying fade.
- Continuity: tt is exact local time; following logical tower uses internal origin45.167, differing.0003333333s.
- Evaluated recipe sample: {   "native": 49.833333333,   "local": 4.666666667,   "journey_tt": 4.6666667,   "phone_visible": false,   "travel_pulse_visible": true,   "light_blend": 0.3588705 }
- Construction source: src/radio-journey.ts:25-40; src/phone-radio.ts:65-71

**Clock / handoff shot-10:** origin 45.166666666666664s; active local range 3.8333333333333357–4.800000000000004s; reset key 45.166666666666664; {   "enter": false,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 1470,
    "shot": "shot-10",
    "local": 3.8333333333333357,
    "eye": [
      -82.03322627345437,
      12.947056537832356,
      -2.6838206722904294
    ],
    "direction": [
      0.9956691387145845,
      -0.09284724293479163,
      -0.004728180492049594
    ],
    "quaternion": [
      -0.03293989793349063,
      -0.7046636593993665,
      -0.032783846108411466,
      0.7080178738424369
    ],
    "fov": 46,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 1499,
    "shot": "shot-10",
    "local": 4.800000000000004,
    "eye": [
      -48.687903614929056,
      10.033124862828249,
      2.1677722894647675
    ],
    "direction": [
      0.9951871981413916,
      0.06721473409561472,
      -0.07130652267459558
    ],
    "quaternion": [
      0.02461244723363629,
      -0.6809852906663063,
      0.022912030021569395,
      0.7315246408820338
    ],
    "fov": 46,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 00:49.000–00:50.000. No separately asserted effect onset.

**Measured mix:** -15.94 dBFS RMS; -3.557 dBFS peak. Source samples per channel 2352000–2400000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 00:50.000–00:51.000 · frames 1500–1529

**Shots:** shot-10
**Narration:** a cell tower a few hundred
**Captions:** into a cell tower / a few hundred meters away.
**Visible overlay layers:** elapsed, captions

**00:50.000–00:50.100 · send-radio:** Hide Phone3D; switch eye onto one-second cubic camera bridge and turn look toward tower top.
**Sampling:** Output frames 1500–1502.
- Foreground: Photo-linked numbered cards, phone until4.5, then destination mast.
- Background: Reflective floor, framed city street and shared blended sky.
- Camera: Use continuous-radio-journey camera: transformed phone view→cubic bridge4.5–5.5→tower opening pose.
- Light: Blend q=ease(step(tt,4.1,5.5)); reset intensities before applying fade.
- Continuity: tt is exact local time; following logical tower uses internal origin45.167, differing.0003333333s.
- Evaluated recipe sample: {   "native": 50.049833333,   "local": 4.883166667,   "journey_tt": 4.8831667,   "phone_visible": false,   "travel_pulse_visible": true,   "light_blend": 0.5886879 }
- Construction source: src/radio-journey.ts:25-40; src/phone-radio.ts:65-71

**00:50.100–00:50.567 · send-radio:** Cell tower label appears in shared world; approach path and light-rig blend continue as gold pulse reaches destination.
**Sampling:** Output frames 1503–1516.
- Foreground: Photo-linked numbered cards, phone until4.5, then destination mast.
- Background: Reflective floor, framed city street and shared blended sky.
- Camera: Use continuous-radio-journey camera: transformed phone view→cubic bridge4.5–5.5→tower opening pose.
- Light: Blend q=ease(step(tt,4.1,5.5)); reset intensities before applying fade.
- Continuity: tt is exact local time; following logical tower uses internal origin45.167, differing.0003333333s.
- Evaluated recipe sample: {   "native": 50.333166667,   "local": 5.1665,   "journey_tt": 5.1665,   "phone_visible": false,   "travel_pulse_visible": true,   "light_blend": 0.8567973 }
- Construction source: src/radio-journey.ts:25-40; src/phone-radio.ts:65-71

**00:50.567–00:50.667 · send-radio:** Travel pulse holds flight endpoint while camera/light blend finishes at tower view.
**Sampling:** Output frames 1517–1519.
- Foreground: Photo-linked numbered cards, phone until4.5, then destination mast.
- Background: Reflective floor, framed city street and shared blended sky.
- Camera: Use continuous-radio-journey camera: transformed phone view→cubic bridge4.5–5.5→tower opening pose.
- Light: Blend q=ease(step(tt,4.1,5.5)); reset intensities before applying fade.
- Continuity: tt is exact local time; following logical tower uses internal origin45.167, differing.0003333333s.
- Evaluated recipe sample: {   "native": 50.616666667,   "local": 5.45,   "journey_tt": 5.45,   "phone_visible": false,   "travel_pulse_visible": true,   "light_blend": 0.9962646 }
- Construction source: src/radio-journey.ts:25-40; src/phone-radio.ts:65-71

**00:50.667–00:51.000 · send-radio:** Travel pulse hides; camera holds tower opening pose with negative tower subclock; destination flash remains suppressed until tower shot begins.
**Sampling:** Output frames 1520–1529.
- Foreground: Photo-linked numbered cards, phone until4.5, then destination mast.
- Background: Reflective floor, framed city street and shared blended sky.
- Camera: Use continuous-radio-journey camera: transformed phone view→cubic bridge4.5–5.5→tower opening pose.
- Light: Blend q=ease(step(tt,4.1,5.5)); reset intensities before applying fade.
- Continuity: tt is exact local time; following logical tower uses internal origin45.167, differing.0003333333s.
- Evaluated recipe sample: {   "native": 50.833333333,   "local": 5.666666667,   "journey_tt": 5.6666667,   "phone_visible": false,   "travel_pulse_visible": false,   "light_blend": 1 }
- Construction source: src/radio-journey.ts:25-40; src/phone-radio.ts:65-71

**Clock / handoff shot-10:** origin 45.166666666666664s; active local range 4.833333333333336–5.800000000000004s; reset key 45.166666666666664; {   "enter": false,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 1500,
    "shot": "shot-10",
    "local": 4.833333333333336,
    "eye": [
      -44.55268053605863,
      9.542672478259307,
      3.4044338776115732
    ],
    "direction": [
      0.991924852944135,
      0.08159368914719849,
      -0.09709560238809267
    ],
    "quaternion": [
      0.0302454756692313,
      -0.6712208354986424,
      0.027429421388217197,
      0.7401320341914367
    ],
    "fov": 46,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 1529,
    "shot": "shot-10",
    "local": 5.800000000000004,
    "eye": [
      3.6,
      4,
      20
    ],
    "direction": [
      -0.16256508296378164,
      0.3973813139114662,
      -0.903139349798787
    ],
    "quaternion": [
      0.20210788889235165,
      0.08707885132501111,
      -0.018044712939500156,
      0.9753174166569182
    ],
    "fov": 46,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 00:50.000–00:51.000. No separately asserted effect onset.

**Measured mix:** -17.439 dBFS RMS; -3.081 dBFS peak. Source samples per channel 2400000–2448000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 00:51.000–00:52.000 · frames 1530–1559

**Shots:** shot-10, shot-11
**Narration:** hundred meters away. The
**Captions:** a few hundred meters away.
**Visible overlay layers:** elapsed, captions

**00:51.000–00:51.333 · send-radio:** Travel pulse hides; camera holds tower opening pose with negative tower subclock; destination flash remains suppressed until tower shot begins.
**Sampling:** Output frames 1530–1539.
- Foreground: Photo-linked numbered cards, phone until4.5, then destination mast.
- Background: Reflective floor, framed city street and shared blended sky.
- Camera: Use continuous-radio-journey camera: transformed phone view→cubic bridge4.5–5.5→tower opening pose.
- Light: Blend q=ease(step(tt,4.1,5.5)); reset intensities before applying fade.
- Continuity: tt is exact local time; following logical tower uses internal origin45.167, differing.0003333333s.
- Evaluated recipe sample: {   "native": 51.1665,   "local": 5.999833333,   "journey_tt": 5.9998333,   "phone_visible": false,   "travel_pulse_visible": false,   "light_blend": 1 }
- Construction source: src/radio-journey.ts:25-40; src/phone-radio.ts:65-71

**00:51.333–00:52.000 · tower:** Tower arrival flash pulses at the upper receiver while opening camera holds the full mast.
**Sampling:** Output frames 1540–1559.
- Foreground: Blue lattice, orange panels, cabinet, attached cable carrier.
- Background: District windows,fence,ground cutaway.
- Camera: Tower camera keyframes plus Hermite override afteru2.20, fov46.
- Light: Warm pulse, transient arrival flash, and cabinet-vent material response against blue studio.
- Continuity: Shared u=native-51.333 continues into ground; do not reset tower animation.
- Evaluated recipe sample: {   "native": 51.6665,   "local": 0.3335,   "tower_u": 0.3335,   "route_segment": "disabled",   "upper_vent_on": 0,   "lower_vent_on": 0,   "tail": 3.5 }
- Construction source: src/tower-light.ts:65-96; src/radio-journey.ts:33-40

**Clock / handoff shot-10:** origin 45.166666666666664s; active local range 5.833333333333336–6.133333333333333s; reset key 45.166666666666664; {   "enter": false,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }
**Clock / handoff shot-11:** origin 51.333s; active local range 0.0003333333333372934–0.6336666666666702s; reset key 51.333; {   "enter": false,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 1530,
    "shot": "shot-10",
    "local": 5.833333333333336,
    "eye": [
      3.6,
      4,
      20
    ],
    "direction": [
      -0.16256508296378164,
      0.3973813139114662,
      -0.903139349798787
    ],
    "quaternion": [
      0.20210788889235165,
      0.08707885132501111,
      -0.018044712939500156,
      0.9753174166569182
    ],
    "fov": 46,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 1559,
    "shot": "shot-11",
    "local": 0.6336666666666702,
    "eye": [
      3.6,
      4,
      20
    ],
    "direction": [
      -0.16256508296378164,
      0.3973813139114662,
      -0.903139349798787
    ],
    "quaternion": [
      0.20210788889235165,
      0.08707885132501111,
      -0.018044712939500156,
      0.9753174166569182
    ],
    "fov": 46,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 00:51.000–00:52.000. No separately asserted effect onset.

**Measured mix:** -17.52 dBFS RMS; -3.902 dBFS peak. Source samples per channel 2448000–2496000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 00:52.000–00:53.000 · frames 1560–1589

**Shots:** shot-11
**Narration:** The tower converts radio
**Captions:** a few hundred meters away. / The tower converts
**Visible overlay layers:** elapsed, captions

**00:52.000–00:52.083 · tower:** Tower arrival flash pulses at the upper receiver while opening camera holds the full mast.
**Sampling:** Output frames 1560–1562.
- Foreground: Blue lattice, orange panels, cabinet, attached cable carrier.
- Background: District windows,fence,ground cutaway.
- Camera: Tower camera keyframes plus Hermite override afteru2.20, fov46.
- Light: Warm pulse, transient arrival flash, and cabinet-vent material response against blue studio.
- Continuity: Shared u=native-51.333 continues into ground; do not reset tower animation.
- Evaluated recipe sample: {   "native": 52.0415,   "local": 0.7085,   "tower_u": 0.7085,   "route_segment": "disabled",   "upper_vent_on": 0,   "lower_vent_on": 0,   "tail": 3.5 }
- Construction source: src/tower-light.ts:65-96; src/radio-journey.ts:33-40

**00:52.083–00:52.200 · tower:** Arrival flash fades; hold the mast composition before the upward camera move.
**Sampling:** Output frames 1563–1565.
- Foreground: Blue lattice, orange panels, cabinet, attached cable carrier.
- Background: District windows,fence,ground cutaway.
- Camera: Tower camera keyframes plus Hermite override afteru2.20, fov46.
- Light: Warm pulse, transient arrival flash, and cabinet-vent material response against blue studio.
- Continuity: Shared u=native-51.333 continues into ground; do not reset tower animation.
- Evaluated recipe sample: {   "native": 52.1415,   "local": 0.8085,   "tower_u": 0.8085,   "route_segment": "disabled",   "upper_vent_on": 0,   "lower_vent_on": 0,   "tail": 3.5 }
- Construction source: src/tower-light.ts:65-96; src/radio-journey.ts:33-40

**00:52.200–00:52.233 · tower:** Camera cranes rapidly into antenna panels; arrival flash finishes fading.
**Sampling:** Output frames 1566–1566.
- Foreground: Blue lattice, orange panels, cabinet, attached cable carrier.
- Background: District windows,fence,ground cutaway.
- Camera: Tower camera keyframes plus Hermite override afteru2.20, fov46.
- Light: Warm pulse, transient arrival flash, and cabinet-vent material response against blue studio.
- Continuity: Shared u=native-51.333 continues into ground; do not reset tower animation.
- Evaluated recipe sample: {   "native": 52.2165,   "local": 0.8835,   "tower_u": 0.8835,   "route_segment": "disabled",   "upper_vent_on": 0,   "lower_vent_on": 0,   "tail": 3.5 }
- Construction source: src/tower-light.ts:65-96; src/radio-journey.ts:33-40

**00:52.233–00:52.573 · tower:** Cell tower label clears; crane reaches close antenna view.
**Sampling:** Output frames 1567–1577.
- Foreground: Blue lattice, orange panels, cabinet, attached cable carrier.
- Background: District windows,fence,ground cutaway.
- Camera: Tower camera keyframes plus Hermite override afteru2.20, fov46.
- Light: Warm pulse, transient arrival flash, and cabinet-vent material response against blue studio.
- Continuity: Shared u=native-51.333 continues into ground; do not reset tower animation.
- Evaluated recipe sample: {   "native": 52.403,   "local": 1.07,   "tower_u": 1.07,   "route_segment": "disabled",   "upper_vent_on": 0,   "lower_vent_on": 0,   "tail": 3.5 }
- Construction source: src/tower-light.ts:65-96; src/radio-journey.ts:33-40

**00:52.573–00:52.963 · tower:** Hold close view of receiver hardware; physical pulse is still disabled.
**Sampling:** Output frames 1578–1588.
- Foreground: Blue lattice, orange panels, cabinet, attached cable carrier.
- Background: District windows,fence,ground cutaway.
- Camera: Tower camera keyframes plus Hermite override afteru2.20, fov46.
- Light: Warm pulse, transient arrival flash, and cabinet-vent material response against blue studio.
- Continuity: Shared u=native-51.333 continues into ground; do not reset tower animation.
- Evaluated recipe sample: {   "native": 52.768,   "local": 1.435,   "tower_u": 1.435,   "route_segment": "disabled",   "upper_vent_on": 0,   "lower_vent_on": 0,   "tail": 3.5 }
- Construction source: src/tower-light.ts:65-96; src/radio-journey.ts:33-40

**00:52.963–00:52.973 · tower:** Enable gold pulse at route start; brief stationary interval precedes descent.
**Sampling:** Output frames 1589–1589.
- Foreground: Blue lattice, orange panels, cabinet, attached cable carrier.
- Background: District windows,fence,ground cutaway.
- Camera: Tower camera keyframes plus Hermite override afteru2.20, fov46.
- Light: Warm pulse, transient arrival flash, and cabinet-vent material response against blue studio.
- Continuity: Shared u=native-51.333 continues into ground; do not reset tower animation.
- Evaluated recipe sample: {   "native": 52.968,   "local": 1.635,   "tower_u": 1.635,   "route_segment": "mast",   "upper_vent_on": 0,   "lower_vent_on": 0,   "tail": 3.5 }
- Construction source: src/tower-light.ts:65-96; src/radio-journey.ts:33-40

**00:52.973–00:53.000 · tower:** Gold pulse descends internal mast route fromy17 toy3.65; camera follows downward toward cable carrier.
**Sampling:** Source-formula interval between sampled output frames; no additional frame displays this interval.
- Foreground: Blue lattice, orange panels, cabinet, attached cable carrier.
- Background: District windows,fence,ground cutaway.
- Camera: Tower camera keyframes plus Hermite override afteru2.20, fov46.
- Light: Warm pulse, transient arrival flash, and cabinet-vent material response against blue studio.
- Continuity: Shared u=native-51.333 continues into ground; do not reset tower animation.
- Evaluated recipe sample: {   "native": 52.9865,   "local": 1.6535,   "tower_u": 1.6535,   "route_segment": "mast",   "upper_vent_on": 0,   "lower_vent_on": 0,   "tail": 3.5 }
- Construction source: src/tower-light.ts:65-96; src/radio-journey.ts:33-40

**Clock / handoff shot-11:** origin 51.333s; active local range 0.6670000000000016–1.6336666666666702s; reset key 51.333; {   "enter": false,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 1560,
    "shot": "shot-11",
    "local": 0.6670000000000016,
    "eye": [
      3.6,
      4,
      20
    ],
    "direction": [
      -0.16256508296378164,
      0.3973813139114662,
      -0.903139349798787
    ],
    "quaternion": [
      0.20210788889235165,
      0.08707885132501111,
      -0.018044712939500156,
      0.9753174166569182
    ],
    "fov": 46,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 1589,
    "shot": "shot-11",
    "local": 1.6336666666666702,
    "eye": [
      2.2002224950907077,
      17.248510518976097,
      5.700135969222099
    ],
    "direction": [
      -0.25715809865913347,
      -0.14693743044188695,
      -0.955133029388658
    ],
    "quaternion": [
      -0.07303285141573658,
      0.13076577503214648,
      0.009659617249266188,
      0.988672446510434
    ],
    "fov": 46,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 00:52.000–00:53.000. No separately asserted effect onset.

**Measured mix:** -16.997 dBFS RMS; -2.88 dBFS peak. Source samples per channel 2496000–2544000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 00:53.000–00:54.000 · frames 1590–1619

**Shots:** shot-11
**Narration:** radio waves into light
**Captions:** The tower converts / radio waves into light
**Visible overlay layers:** elapsed, captions

**00:53.000–00:53.533 · tower:** Gold pulse descends internal mast route fromy17 toy3.65; camera follows downward toward cable carrier.
**Sampling:** Output frames 1590–1605.
- Foreground: Blue lattice, orange panels, cabinet, attached cable carrier.
- Background: District windows,fence,ground cutaway.
- Camera: Tower camera keyframes plus Hermite override afteru2.20, fov46.
- Light: Warm pulse, transient arrival flash, and cabinet-vent material response against blue studio.
- Continuity: Shared u=native-51.333 continues into ground; do not reset tower animation.
- Evaluated recipe sample: {   "native": 53.2665,   "local": 1.9335,   "tower_u": 1.9335,   "route_segment": "mast",   "upper_vent_on": 0,   "lower_vent_on": 0,   "tail": 3.5 }
- Construction source: src/tower-light.ts:65-96; src/radio-journey.ts:33-40

**00:53.533–00:53.903 · tower:** Pulse turns across overhead carrier toward cabinet inlet; Hermite camera override frames the cabinet approach.
**Sampling:** Output frames 1606–1617.
- Foreground: Blue lattice, orange panels, cabinet, attached cable carrier.
- Background: District windows,fence,ground cutaway.
- Camera: Tower camera keyframes plus Hermite override afteru2.20, fov46.
- Light: Warm pulse, transient arrival flash, and cabinet-vent material response against blue studio.
- Continuity: Shared u=native-51.333 continues into ground; do not reset tower animation.
- Evaluated recipe sample: {   "native": 53.718,   "local": 2.385,   "tower_u": 2.385,   "route_segment": "carrier",   "upper_vent_on": 0,   "lower_vent_on": 0,   "tail": 3.5 }
- Construction source: src/tower-light.ts:65-96; src/radio-journey.ts:33-40

**00:53.903–00:54.000 · tower:** Pulse enters cabinet; route tail shortens3.5→.28 and intensity drops28→24.
**Sampling:** Output frames 1618–1619.
- Foreground: Blue lattice, orange panels, cabinet, attached cable carrier.
- Background: District windows,fence,ground cutaway.
- Camera: Tower camera keyframes plus Hermite override afteru2.20, fov46.
- Light: Warm pulse, transient arrival flash, and cabinet-vent material response against blue studio.
- Continuity: Shared u=native-51.333 continues into ground; do not reset tower animation.
- Evaluated recipe sample: {   "native": 53.9515,   "local": 2.6185,   "tower_u": 2.6185,   "route_segment": "cabinet",   "upper_vent_on": 0,   "lower_vent_on": 0,   "tail": 3.0890263 }
- Construction source: src/tower-light.ts:65-96; src/radio-journey.ts:33-40

**Clock / handoff shot-11:** origin 51.333s; active local range 1.6670000000000016–2.63366666666667s; reset key 51.333; {   "enter": false,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 1590,
    "shot": "shot-11",
    "local": 1.6670000000000016,
    "eye": [
      2.221768809836227,
      17.104269911929702,
      5.713303161566583
    ],
    "direction": [
      -0.25780252449893304,
      -0.14633456834558825,
      -0.9550518585234455
    ],
    "quaternion": [
      -0.07272844279320764,
      0.13109021453622072,
      0.00964341993426688,
      0.9886520792036468
    ],
    "fov": 46,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 1619,
    "shot": "shot-11",
    "local": 2.63366666666667,
    "eye": [
      -1.7563248240796927,
      2.9114171666511504,
      15.474216777728783
    ],
    "direction": [
      0.28317001547823384,
      -0.060261686777765194,
      -0.9571746295429875
    ],
    "quaternion": [
      -0.029833331714989666,
      -0.14325731236935044,
      -0.0043203895529888795,
      0.9892262880684097
    ],
    "fov": 46,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 00:53.000–00:54.000. No separately asserted effect onset.

**Measured mix:** -15.975 dBFS RMS; -2.07 dBFS peak. Source samples per channel 2544000–2592000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 00:54.000–00:55.000 · frames 1620–1649

**Shots:** shot-11, shot-12
**Narration:** light and sends that
**Captions:** radio waves into light / and sends that light
**Visible overlay layers:** elapsed, captions

**00:54.000–00:54.033 · tower:** Pulse enters cabinet; route tail shortens3.5→.28 and intensity drops28→24.
**Sampling:** Output frames 1620–1620.
- Foreground: Blue lattice, orange panels, cabinet, attached cable carrier.
- Background: District windows,fence,ground cutaway.
- Camera: Tower camera keyframes plus Hermite override afteru2.20, fov46.
- Light: Warm pulse, transient arrival flash, and cabinet-vent material response against blue studio.
- Continuity: Shared u=native-51.333 continues into ground; do not reset tower animation.
- Evaluated recipe sample: {   "native": 54.0165,   "local": 2.6835,   "tower_u": 2.6835,   "route_segment": "cabinet",   "upper_vent_on": 0,   "lower_vent_on": 0,   "tail": 2.5382368 }
- Construction source: src/tower-light.ts:65-96; src/radio-journey.ts:33-40

**00:54.033–00:54.203 · tower:** Upper cabinet vent trim warms progressively to gold as pulse descends inside.
**Sampling:** Output frames 1621–1626.
- Foreground: Blue lattice, orange panels, cabinet, attached cable carrier.
- Background: District windows,fence,ground cutaway.
- Camera: Tower camera keyframes plus Hermite override afteru2.20, fov46.
- Light: Warm pulse, transient arrival flash, and cabinet-vent material response against blue studio.
- Continuity: Shared u=native-51.333 continues into ground; do not reset tower animation.
- Evaluated recipe sample: {   "native": 54.118,   "local": 2.785,   "tower_u": 2.785,   "route_segment": "cabinet",   "upper_vent_on": 0.5,   "lower_vent_on": 0,   "tail": 1.6781579 }
- Construction source: src/tower-light.ts:65-96; src/radio-journey.ts:33-40

**00:54.203–00:54.267 · tower:** Upper vent glow settled; camera reaches low frontal cabinet composition, tail continues shrinking.
**Sampling:** Output frames 1627–1628.
- Foreground: Blue lattice, orange panels, cabinet, attached cable carrier.
- Background: District windows,fence,ground cutaway.
- Camera: Tower camera keyframes plus Hermite override afteru2.20, fov46.
- Light: Warm pulse, transient arrival flash, and cabinet-vent material response against blue studio.
- Continuity: Shared u=native-51.333 continues into ground; do not reset tower animation.
- Evaluated recipe sample: {   "native": 54.235,   "local": 2.902,   "tower_u": 2.902,   "route_segment": "cabinet",   "upper_vent_on": 1,   "lower_vent_on": 0,   "tail": 0.6867368 }
- Construction source: src/tower-light.ts:65-96; src/radio-journey.ts:33-40

**00:54.267–00:54.300 · tower:** Camera transitions toward ground cutaway; cabinet pulse continues downward and tail settles at.28.
**Sampling:** Source-formula interval between sampled output frames; no additional frame displays this interval.
- Foreground: Blue lattice, orange panels, cabinet, attached cable carrier.
- Background: District windows,fence,ground cutaway.
- Camera: Tower camera keyframes plus Hermite override afteru2.20, fov46.
- Light: Warm pulse, transient arrival flash, and cabinet-vent material response against blue studio.
- Continuity: Shared u=native-51.333 continues into ground; do not reset tower animation.
- Evaluated recipe sample: {   "native": 54.2835,   "local": 2.9505,   "tower_u": 2.9505,   "route_segment": "cabinet",   "upper_vent_on": 1,   "lower_vent_on": 0,   "tail": 0.28 }
- Construction source: src/tower-light.ts:65-96; src/radio-journey.ts:33-40

**00:54.300–00:54.500 · ground:** Cross logical cut with cabinet pulse already descending; camera glides into exposed earth composition.
**Sampling:** Output frames 1629–1634.
- Foreground: Cabinet bottom and soil initially; then narrow fiber rings/ribbons and glowing core.
- Background: Quiet utility tubes/soil backing stay behind the hero axis; exterior falls outside view during entry.
- Camera: u=native-51.333; Hermite camera to4.567, fiberEntry quintic offsets4.567–5.37, then eye[pulseX-.65,-1.08,2.4].
- Light: Warm routed pulse; dive4.9–5.27 reduces outer emitter to.1% light and sprite.012; internal ribbon shader remains additive.
- Continuity: The logical ground start is u2.967, not new route start0.
- Evaluated recipe sample: {   "native": 54.4,   "local": 0.1,   "tower_u": 3.067,   "route_segment": "cabinet",   "upper_vent_on": 1,   "lower_vent_on": 0,   "tail": 0.28 }
- Construction source: src/tower-light.ts:74-96; src/fiber-entry.ts:22-25

**00:54.500–00:54.503 · ground:** Camera reaches lower cabinet/soil anchor; lower vents remain at pre-warm color.
**Sampling:** Output frames 1635–1635.
- Foreground: Cabinet bottom and soil initially; then narrow fiber rings/ribbons and glowing core.
- Background: Quiet utility tubes/soil backing stay behind the hero axis; exterior falls outside view during entry.
- Camera: u=native-51.333; Hermite camera to4.567, fiberEntry quintic offsets4.567–5.37, then eye[pulseX-.65,-1.08,2.4].
- Light: Warm routed pulse; dive4.9–5.27 reduces outer emitter to.1% light and sprite.012; internal ribbon shader remains additive.
- Continuity: The logical ground start is u2.967, not new route start0.
- Evaluated recipe sample: {   "native": 54.5015,   "local": 0.2015,   "tower_u": 3.1685,   "route_segment": "cabinet",   "upper_vent_on": 1,   "lower_vent_on": 0,   "tail": 0.28 }
- Construction source: src/tower-light.ts:74-96; src/fiber-entry.ts:22-25

**00:54.503–00:54.703 · ground:** Lower vent trim warms as pulse reaches cabinet base; camera continues low tracking move.
**Sampling:** Output frames 1636–1641.
- Foreground: Cabinet bottom and soil initially; then narrow fiber rings/ribbons and glowing core.
- Background: Quiet utility tubes/soil backing stay behind the hero axis; exterior falls outside view during entry.
- Camera: u=native-51.333; Hermite camera to4.567, fiberEntry quintic offsets4.567–5.37, then eye[pulseX-.65,-1.08,2.4].
- Light: Warm routed pulse; dive4.9–5.27 reduces outer emitter to.1% light and sprite.012; internal ribbon shader remains additive.
- Continuity: The logical ground start is u2.967, not new route start0.
- Evaluated recipe sample: {   "native": 54.603,   "local": 0.303,   "tower_u": 3.27,   "route_segment": "cabinet",   "upper_vent_on": 1,   "lower_vent_on": 0.5,   "tail": 0.28 }
- Construction source: src/tower-light.ts:74-96; src/fiber-entry.ts:22-25

**00:54.703–00:54.803 · ground:** Both vent groups remain warm; gold pulse completes cabinet descent.
**Sampling:** Output frames 1642–1644.
- Foreground: Cabinet bottom and soil initially; then narrow fiber rings/ribbons and glowing core.
- Background: Quiet utility tubes/soil backing stay behind the hero axis; exterior falls outside view during entry.
- Camera: u=native-51.333; Hermite camera to4.567, fiberEntry quintic offsets4.567–5.37, then eye[pulseX-.65,-1.08,2.4].
- Light: Warm routed pulse; dive4.9–5.27 reduces outer emitter to.1% light and sprite.012; internal ribbon shader remains additive.
- Continuity: The logical ground start is u2.967, not new route start0.
- Evaluated recipe sample: {   "native": 54.753,   "local": 0.453,   "tower_u": 3.42,   "route_segment": "cabinet",   "upper_vent_on": 1,   "lower_vent_on": 1,   "tail": 0.28 }
- Construction source: src/tower-light.ts:74-96; src/fiber-entry.ts:22-25

**00:54.803–00:55.000 · ground:** Pulse follows curved underground inlet; camera lowers to show cutaway layers and quiet utilities beneath.
**Sampling:** Output frames 1645–1649.
- Foreground: Cabinet bottom and soil initially; then narrow fiber rings/ribbons and glowing core.
- Background: Quiet utility tubes/soil backing stay behind the hero axis; exterior falls outside view during entry.
- Camera: u=native-51.333; Hermite camera to4.567, fiberEntry quintic offsets4.567–5.37, then eye[pulseX-.65,-1.08,2.4].
- Light: Warm routed pulse; dive4.9–5.27 reduces outer emitter to.1% light and sprite.012; internal ribbon shader remains additive.
- Continuity: The logical ground start is u2.967, not new route start0.
- Evaluated recipe sample: {   "native": 54.9015,   "local": 0.6015,   "tower_u": 3.5685,   "route_segment": "buried bend",   "upper_vent_on": 1,   "lower_vent_on": 1,   "tail": 0.28 }
- Construction source: src/tower-light.ts:74-96; src/fiber-entry.ts:22-25

**Clock / handoff shot-11:** origin 51.333s; active local range 2.6670000000000016–2.9336666666666673s; reset key 51.333; {   "enter": false,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }
**Clock / handoff shot-12:** origin 54.3s; active local range 0.0–0.6666666666666714s; reset key 54.3; {   "enter": false,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 1620,
    "shot": "shot-11",
    "local": 2.6670000000000016,
    "eye": [
      -2.0000000000000098,
      2.71399999999999,
      15.95600000000002
    ],
    "direction": [
      0.29590008776235205,
      -0.0588980912053893,
      -0.9534013598241794
    ],
    "quaternion": [
      -0.029128945594848375,
      -0.14983599239315884,
      -0.004416360372435469,
      0.9882718126472851
    ],
    "fov": 46,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 1649,
    "shot": "shot-12",
    "local": 0.6666666666666714,
    "eye": [
      0.4582503255453094,
      0.2240338659697743,
      14.898678103271147
    ],
    "direction": [
      0.3646885399267282,
      -0.04148328385777309,
      -0.9302050343910673
    ],
    "quaternion": [
      -0.020385129610534174,
      -0.18569310513648077,
      -0.003853238332861842,
      0.982388756933773
    ],
    "fov": 46,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 00:54.000–00:55.000. No separately asserted effect onset.

**Measured mix:** -15.952 dBFS RMS; -1.728 dBFS peak. Source samples per channel 2592000–2640000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 00:55.000–00:56.000 · frames 1650–1679

**Shots:** shot-12
**Narration:** that light into a fiber
**Captions:** and sends that light / into a fiber optic cable.
**Visible overlay layers:** elapsed, captions

**00:55.000–00:55.133 · ground:** Pulse follows curved underground inlet; camera lowers to show cutaway layers and quiet utilities beneath.
**Sampling:** Output frames 1650–1653.
- Foreground: Cabinet bottom and soil initially; then narrow fiber rings/ribbons and glowing core.
- Background: Quiet utility tubes/soil backing stay behind the hero axis; exterior falls outside view during entry.
- Camera: u=native-51.333; Hermite camera to4.567, fiberEntry quintic offsets4.567–5.37, then eye[pulseX-.65,-1.08,2.4].
- Light: Warm routed pulse; dive4.9–5.27 reduces outer emitter to.1% light and sprite.012; internal ribbon shader remains additive.
- Continuity: The logical ground start is u2.967, not new route start0.
- Evaluated recipe sample: {   "native": 55.0665,   "local": 0.7665,   "tower_u": 3.7335,   "route_segment": "buried bend",   "upper_vent_on": 1,   "lower_vent_on": 1,   "tail": 0.28 }
- Construction source: src/tower-light.ts:74-96; src/fiber-entry.ts:22-25

**00:55.133–00:55.233 · ground:** Pulse sprite shrinks1.9→1.25 and point intensity drops24→22; reach buried horizontal fiber.
**Sampling:** Output frames 1654–1656.
- Foreground: Cabinet bottom and soil initially; then narrow fiber rings/ribbons and glowing core.
- Background: Quiet utility tubes/soil backing stay behind the hero axis; exterior falls outside view during entry.
- Camera: u=native-51.333; Hermite camera to4.567, fiberEntry quintic offsets4.567–5.37, then eye[pulseX-.65,-1.08,2.4].
- Light: Warm routed pulse; dive4.9–5.27 reduces outer emitter to.1% light and sprite.012; internal ribbon shader remains additive.
- Continuity: The logical ground start is u2.967, not new route start0.
- Evaluated recipe sample: {   "native": 55.183,   "local": 0.883,   "tower_u": 3.85,   "route_segment": "buried bend",   "upper_vent_on": 1,   "lower_vent_on": 1,   "tail": 0.28 }
- Construction source: src/tower-light.ts:74-96; src/fiber-entry.ts:22-25

**00:55.233–00:55.500 · ground:** Track pulse alongx in horizontal underground fiber; soil silhouette and parallel utilities separate depth.
**Sampling:** Output frames 1657–1664.
- Foreground: Cabinet bottom and soil initially; then narrow fiber rings/ribbons and glowing core.
- Background: Quiet utility tubes/soil backing stay behind the hero axis; exterior falls outside view during entry.
- Camera: u=native-51.333; Hermite camera to4.567, fiberEntry quintic offsets4.567–5.37, then eye[pulseX-.65,-1.08,2.4].
- Light: Warm routed pulse; dive4.9–5.27 reduces outer emitter to.1% light and sprite.012; internal ribbon shader remains additive.
- Continuity: The logical ground start is u2.967, not new route start0.
- Evaluated recipe sample: {   "native": 55.3665,   "local": 1.0665,   "tower_u": 4.0335,   "route_segment": "horizontal fiber",   "upper_vent_on": 1,   "lower_vent_on": 1,   "tail": 0.28 }
- Construction source: src/tower-light.ts:74-96; src/fiber-entry.ts:22-25

**00:55.500–00:55.583 · ground:** Camera recovers from lowest authored position as horizontal pulse travel continues.
**Sampling:** Output frames 1665–1667.
- Foreground: Cabinet bottom and soil initially; then narrow fiber rings/ribbons and glowing core.
- Background: Quiet utility tubes/soil backing stay behind the hero axis; exterior falls outside view during entry.
- Camera: u=native-51.333; Hermite camera to4.567, fiberEntry quintic offsets4.567–5.37, then eye[pulseX-.65,-1.08,2.4].
- Light: Warm routed pulse; dive4.9–5.27 reduces outer emitter to.1% light and sprite.012; internal ribbon shader remains additive.
- Continuity: The logical ground start is u2.967, not new route start0.
- Evaluated recipe sample: {   "native": 55.5415,   "local": 1.2415,   "tower_u": 4.2085,   "route_segment": "horizontal fiber",   "upper_vent_on": 1,   "lower_vent_on": 1,   "tail": 0.28 }
- Construction source: src/tower-light.ts:74-96; src/fiber-entry.ts:22-25

**00:55.583–00:55.633 · ground:** Fiber interior geometry becomes visible; still view it from exterior approach.
**Sampling:** Output frames 1668–1668.
- Foreground: Cabinet bottom and soil initially; then narrow fiber rings/ribbons and glowing core.
- Background: Quiet utility tubes/soil backing stay behind the hero axis; exterior falls outside view during entry.
- Camera: u=native-51.333; Hermite camera to4.567, fiberEntry quintic offsets4.567–5.37, then eye[pulseX-.65,-1.08,2.4].
- Light: Warm routed pulse; dive4.9–5.27 reduces outer emitter to.1% light and sprite.012; internal ribbon shader remains additive.
- Continuity: The logical ground start is u2.967, not new route start0.
- Evaluated recipe sample: {   "native": 55.608,   "local": 1.308,   "tower_u": 4.275,   "route_segment": "horizontal fiber",   "upper_vent_on": 1,   "lower_vent_on": 1,   "tail": 0.28 }
- Construction source: src/tower-light.ts:74-96; src/fiber-entry.ts:22-25

**00:55.633–00:55.900 · ground:** Fiber optic cable label appears beneath route; camera approaches the continuous tunnel entry handoff.
**Sampling:** Output frames 1669–1676.
- Foreground: Cabinet bottom and soil initially; then narrow fiber rings/ribbons and glowing core.
- Background: Quiet utility tubes/soil backing stay behind the hero axis; exterior falls outside view during entry.
- Camera: u=native-51.333; Hermite camera to4.567, fiberEntry quintic offsets4.567–5.37, then eye[pulseX-.65,-1.08,2.4].
- Light: Warm routed pulse; dive4.9–5.27 reduces outer emitter to.1% light and sprite.012; internal ribbon shader remains additive.
- Continuity: The logical ground start is u2.967, not new route start0.
- Evaluated recipe sample: {   "native": 55.7665,   "local": 1.4665,   "tower_u": 4.4335,   "route_segment": "horizontal fiber",   "upper_vent_on": 1,   "lower_vent_on": 1,   "tail": 0.28 }
- Construction source: src/tower-light.ts:74-96; src/fiber-entry.ts:22-25

**00:55.900–00:56.000 · ground:** Camera leaves Hermite path and begins quintic-eased relative offsets into actual.063-radius fiber; aim turns down axis.
**Sampling:** Output frames 1677–1679.
- Foreground: Cabinet bottom and soil initially; then narrow fiber rings/ribbons and glowing core.
- Background: Quiet utility tubes/soil backing stay behind the hero axis; exterior falls outside view during entry.
- Camera: u=native-51.333; Hermite camera to4.567, fiberEntry quintic offsets4.567–5.37, then eye[pulseX-.65,-1.08,2.4].
- Light: Warm routed pulse; dive4.9–5.27 reduces outer emitter to.1% light and sprite.012; internal ribbon shader remains additive.
- Continuity: The logical ground start is u2.967, not new route start0.
- Evaluated recipe sample: {   "native": 55.95,   "local": 1.65,   "tower_u": 4.617,   "route_segment": "horizontal fiber",   "upper_vent_on": 1,   "lower_vent_on": 1,   "tail": 0.28 }
- Construction source: src/tower-light.ts:74-96; src/fiber-entry.ts:22-25

**Clock / handoff shot-12:** origin 54.3s; active local range 0.7000000000000028–1.6666666666666714s; reset key 54.3; {   "enter": false,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 1650,
    "shot": "shot-12",
    "local": 0.7000000000000028,
    "eye": [
      0.4781951622334437,
      0.15880393349553593,
      14.8208210375391
    ],
    "direction": [
      0.36663807300378326,
      -0.03786434887889832,
      -0.9295928218892665
    ],
    "quaternion": [
      -0.01860249813454983,
      -0.18670173035759688,
      -0.0035359375581660436,
      0.9822341411752179
    ],
    "fov": 46,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 1679,
    "shot": "shot-12",
    "local": 1.6666666666666714,
    "eye": [
      13.688027133259858,
      1.275226750026218,
      13.714697854890757
    ],
    "direction": [
      -0.05810972236739319,
      -0.09853262581411402,
      -0.9934357461942671
    ],
    "quaternion": [
      -0.049305310326856915,
      0.029173845760180287,
      0.0014407933932172989,
      0.9983565481387555
    ],
    "fov": 46,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 00:55.000–00:56.000. No separately asserted effect onset.

**Measured mix:** -16.7 dBFS RMS; -2.171 dBFS peak. Source samples per channel 2640000–2688000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 00:56.000–00:57.000 · frames 1680–1709

**Shots:** shot-12, shot-13
**Narration:** fiber optic cable. This
**Captions:** into a fiber optic cable.
**Visible overlay layers:** elapsed, captions

**00:56.000–00:56.233 · ground:** Camera leaves Hermite path and begins quintic-eased relative offsets into actual.063-radius fiber; aim turns down axis.
**Sampling:** Output frames 1680–1686.
- Foreground: Cabinet bottom and soil initially; then narrow fiber rings/ribbons and glowing core.
- Background: Quiet utility tubes/soil backing stay behind the hero axis; exterior falls outside view during entry.
- Camera: u=native-51.333; Hermite camera to4.567, fiberEntry quintic offsets4.567–5.37, then eye[pulseX-.65,-1.08,2.4].
- Light: Warm routed pulse; dive4.9–5.27 reduces outer emitter to.1% light and sprite.012; internal ribbon shader remains additive.
- Continuity: The logical ground start is u2.967, not new route start0.
- Evaluated recipe sample: {   "native": 56.1165,   "local": 1.8165,   "tower_u": 4.7835,   "route_segment": "horizontal fiber",   "upper_vent_on": 1,   "lower_vent_on": 1,   "tail": 0.28 }
- Construction source: src/tower-light.ts:74-96; src/fiber-entry.ts:22-25

**00:56.233–00:56.300 · ground:** Emitter begins shrinking/dimming for microscopic scale; axis aim settles and label reaches final visible interval.
**Sampling:** Output frames 1687–1688.
- Foreground: Cabinet bottom and soil initially; then narrow fiber rings/ribbons and glowing core.
- Background: Quiet utility tubes/soil backing stay behind the hero axis; exterior falls outside view during entry.
- Camera: u=native-51.333; Hermite camera to4.567, fiberEntry quintic offsets4.567–5.37, then eye[pulseX-.65,-1.08,2.4].
- Light: Warm routed pulse; dive4.9–5.27 reduces outer emitter to.1% light and sprite.012; internal ribbon shader remains additive.
- Continuity: The logical ground start is u2.967, not new route start0.
- Evaluated recipe sample: {   "native": 56.2665,   "local": 1.9665,   "tower_u": 4.9335,   "route_segment": "horizontal fiber",   "upper_vent_on": 1,   "lower_vent_on": 1,   "tail": 0.28 }
- Construction source: src/tower-light.ts:74-96; src/fiber-entry.ts:22-25

**00:56.300–00:56.533 · ground:** Label hides; eye enters fiber as tunnel rings/ribbons grow in perspective; outer pulse light nearly disappears.
**Sampling:** Output frames 1689–1695.
- Foreground: Cabinet bottom and soil initially; then narrow fiber rings/ribbons and glowing core.
- Background: Quiet utility tubes/soil backing stay behind the hero axis; exterior falls outside view during entry.
- Camera: u=native-51.333; Hermite camera to4.567, fiberEntry quintic offsets4.567–5.37, then eye[pulseX-.65,-1.08,2.4].
- Light: Warm routed pulse; dive4.9–5.27 reduces outer emitter to.1% light and sprite.012; internal ribbon shader remains additive.
- Continuity: The logical ground start is u2.967, not new route start0.
- Evaluated recipe sample: {   "native": 56.4165,   "local": 2.1165,   "tower_u": 5.0835,   "route_segment": "horizontal fiber",   "upper_vent_on": 1,   "lower_vent_on": 1,   "tail": 0.28 }
- Construction source: src/tower-light.ts:74-96; src/fiber-entry.ts:22-25

**00:56.533–00:56.603 · ground:** Interior end-marker circle, gold glow and white core appear directly ahead of camera; emitter dive finishes.
**Sampling:** Output frames 1696–1698.
- Foreground: Cabinet bottom and soil initially; then narrow fiber rings/ribbons and glowing core.
- Background: Quiet utility tubes/soil backing stay behind the hero axis; exterior falls outside view during entry.
- Camera: u=native-51.333; Hermite camera to4.567, fiberEntry quintic offsets4.567–5.37, then eye[pulseX-.65,-1.08,2.4].
- Light: Warm routed pulse; dive4.9–5.27 reduces outer emitter to.1% light and sprite.012; internal ribbon shader remains additive.
- Continuity: The logical ground start is u2.967, not new route start0.
- Evaluated recipe sample: {   "native": 56.568,   "local": 2.268,   "tower_u": 5.235,   "route_segment": "horizontal fiber",   "upper_vent_on": 1,   "lower_vent_on": 1,   "tail": 0.28 }
- Construction source: src/tower-light.ts:74-96; src/fiber-entry.ts:22-25

**00:56.603–00:56.703 · ground:** Microscopic emission state settled; camera completes relative entry path.
**Sampling:** Output frames 1699–1701.
- Foreground: Cabinet bottom and soil initially; then narrow fiber rings/ribbons and glowing core.
- Background: Quiet utility tubes/soil backing stay behind the hero axis; exterior falls outside view during entry.
- Camera: u=native-51.333; Hermite camera to4.567, fiberEntry quintic offsets4.567–5.37, then eye[pulseX-.65,-1.08,2.4].
- Light: Warm routed pulse; dive4.9–5.27 reduces outer emitter to.1% light and sprite.012; internal ribbon shader remains additive.
- Continuity: The logical ground start is u2.967, not new route start0.
- Evaluated recipe sample: {   "native": 56.653,   "local": 2.353,   "tower_u": 5.32,   "route_segment": "horizontal fiber",   "upper_vent_on": 1,   "lower_vent_on": 1,   "tail": 0.28 }
- Construction source: src/tower-light.ts:74-96; src/fiber-entry.ts:22-25

**00:56.703–00:56.933 · ground:** Camera rides.65 units behind moving pulse down the fiber axis; rings and luminous ribbons supply depth toward next network-intro cut.
**Sampling:** Output frames 1702–1707.
- Foreground: Cabinet bottom and soil initially; then narrow fiber rings/ribbons and glowing core.
- Background: Quiet utility tubes/soil backing stay behind the hero axis; exterior falls outside view during entry.
- Camera: u=native-51.333; Hermite camera to4.567, fiberEntry quintic offsets4.567–5.37, then eye[pulseX-.65,-1.08,2.4].
- Light: Warm routed pulse; dive4.9–5.27 reduces outer emitter to.1% light and sprite.012; internal ribbon shader remains additive.
- Continuity: The logical ground start is u2.967, not new route start0.
- Evaluated recipe sample: {   "native": 56.818,   "local": 2.518,   "tower_u": 5.485,   "route_segment": "horizontal fiber",   "upper_vent_on": 1,   "lower_vent_on": 1,   "tail": 0.28 }
- Construction source: src/tower-light.ts:74-96; src/fiber-entry.ts:22-25

**00:56.933–00:57.000 · network-intro:** Hold static28-node cyan graph with25 connecting lines in room; nodeRoot is visible. Gold head and packet objects are hidden.
**Sampling:** Output frames 1708–1709.
- Foreground: Cyan glow sprites and small torus rings at world z=-5.
- Background: Room wall, floor, bed, pillow, desk/frame and warm lamp; studio sky/dust.
- Camera: eye[.2,3,14-local*.025],look[0,3,-2],fov47; very slow forward drift.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Studio wide lights plus warm room lamp intensity4,environment.25,fog#040b25 .004.
- Continuity: This is roomScene(network-intro), not the later terrain network. Exit optical blur grows over last.2s.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/scenes.ts:39 buildScene

**Clock / handoff shot-12:** origin 54.3s; active local range 1.7000000000000028–2.6000000000000014s; reset key 54.3; {   "enter": false,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }
**Clock / handoff shot-13:** origin 56.933s; active local range 0.000333333333330188–0.03366666666666873s; reset key 56.933; {   "enter": false,   "exit": true,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 1680,
    "shot": "shot-12",
    "local": 1.7000000000000028,
    "eye": [
      13.833458326769156,
      1.2211343375614638,
      13.53245910595567
    ],
    "direction": [
      -0.024308407759410313,
      -0.1025503991394169,
      -0.9944307502026215
    ],
    "quaternion": [
      -0.05133908330226006,
      0.012203418552720044,
      0.0006273865723852877,
      0.9986065198502359
    ],
    "fov": 46,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 1709,
    "shot": "shot-13",
    "local": 0.03366666666666873,
    "eye": [
      0.2,
      3,
      13.999158333333334
    ],
    "direction": [
      -0.012499680984501266,
      0,
      -0.9999218759359582
    ],
    "quaternion": [
      0,
      0.006249962561561568,
      0,
      0.9999804687932556
    ],
    "fov": 47,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 00:56.000–00:57.000. No separately asserted effect onset.

**Measured mix:** -19.4 dBFS RMS; -3.0 dBFS peak. Source samples per channel 2688000–2736000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 00:57.000–00:58.000 · frames 1710–1739

**Shots:** shot-13
**Narration:** This next part is the
**Captions:** into a fiber optic cable. / This next part / is the most impressive part.
**Visible overlay layers:** elapsed, captions

**00:57.000–00:57.100 · network-intro:** Hold static28-node cyan graph with25 connecting lines in room; nodeRoot is visible. Gold head and packet objects are hidden.
**Sampling:** Output frames 1710–1712.
- Foreground: Cyan glow sprites and small torus rings at world z=-5.
- Background: Room wall, floor, bed, pillow, desk/frame and warm lamp; studio sky/dust.
- Camera: eye[.2,3,14-local*.025],look[0,3,-2],fov47; very slow forward drift.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Studio wide lights plus warm room lamp intensity4,environment.25,fog#040b25 .004.
- Continuity: This is roomScene(network-intro), not the later terrain network. Exit optical blur grows over last.2s.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/scenes.ts:39 buildScene

**00:57.100–00:57.700 · network-intro:** Hold static28-node cyan graph with25 connecting lines in room; nodeRoot is visible. Gold head and packet objects are hidden.
**Sampling:** Output frames 1713–1730.
- Foreground: Cyan glow sprites and small torus rings at world z=-5.
- Background: Room wall, floor, bed, pillow, desk/frame and warm lamp; studio sky/dust.
- Camera: eye[.2,3,14-local*.025],look[0,3,-2],fov47; very slow forward drift.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Studio wide lights plus warm room lamp intensity4,environment.25,fog#040b25 .004.
- Continuity: This is roomScene(network-intro), not the later terrain network. Exit optical blur grows over last.2s.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/scenes.ts:39 buildScene

**00:57.700–00:58.000 · network-intro:** Hold static28-node cyan graph with25 connecting lines in room; nodeRoot is visible. Gold head and packet objects are hidden.
**Sampling:** Output frames 1731–1739.
- Foreground: Cyan glow sprites and small torus rings at world z=-5.
- Background: Room wall, floor, bed, pillow, desk/frame and warm lamp; studio sky/dust.
- Camera: eye[.2,3,14-local*.025],look[0,3,-2],fov47; very slow forward drift.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Studio wide lights plus warm room lamp intensity4,environment.25,fog#040b25 .004.
- Continuity: This is roomScene(network-intro), not the later terrain network. Exit optical blur grows over last.2s.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/scenes.ts:39 buildScene

**Clock / handoff shot-13:** origin 56.933s; active local range 0.06700000000000017–1.0336666666666687s; reset key 56.933; {   "enter": false,   "exit": true,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 1710,
    "shot": "shot-13",
    "local": 0.06700000000000017,
    "eye": [
      0.2,
      3,
      13.998325
    ],
    "direction": [
      -0.012500331975977797,
      0,
      -0.9999218677979247
    ],
    "quaternion": [
      0,
      0.006250288076374041,
      0,
      0.9999804667587076
    ],
    "fov": 47,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 1739,
    "shot": "shot-13",
    "local": 1.0336666666666687,
    "eye": [
      0.2,
      3,
      13.974158333333333
    ],
    "direction": [
      -0.012519240267628868,
      0,
      -0.9999216312407295
    ],
    "quaternion": [
      0,
      0.006259742777084569,
      0,
      0.9999804076182517
    ],
    "fov": 47,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 00:57.000–00:58.000. No separately asserted effect onset.

**Measured mix:** -15.531 dBFS RMS; -2.509 dBFS peak. Source samples per channel 2736000–2784000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 00:58.000–00:59.000 · frames 1740–1769

**Shots:** shot-13
**Narration:** most impressive part.
**Captions:** is the most impressive part.
**Visible overlay layers:** elapsed, captions

**00:58.000–00:58.767 · network-intro:** Hold static28-node cyan graph with25 connecting lines in room; nodeRoot is visible. Gold head and packet objects are hidden.
**Sampling:** Output frames 1740–1763.
- Foreground: Cyan glow sprites and small torus rings at world z=-5.
- Background: Room wall, floor, bed, pillow, desk/frame and warm lamp; studio sky/dust.
- Camera: eye[.2,3,14-local*.025],look[0,3,-2],fov47; very slow forward drift.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Studio wide lights plus warm room lamp intensity4,environment.25,fog#040b25 .004.
- Continuity: This is roomScene(network-intro), not the later terrain network. Exit optical blur grows over last.2s.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/scenes.ts:39 buildScene

**00:58.767–00:58.967 · network-intro:** Hold static28-node cyan graph with25 connecting lines in room; nodeRoot is visible. Gold head and packet objects are hidden.
**Sampling:** Output frames 1764–1769.
- Foreground: Cyan glow sprites and small torus rings at world z=-5.
- Background: Room wall, floor, bed, pillow, desk/frame and warm lamp; studio sky/dust.
- Camera: eye[.2,3,14-local*.025],look[0,3,-2],fov47; very slow forward drift.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Studio wide lights plus warm room lamp intensity4,environment.25,fog#040b25 .004.
- Continuity: This is roomScene(network-intro), not the later terrain network. Exit optical blur grows over last.2s.
Optical picture outgoing p=ease(step(local,duration-.2,duration)); scale=1+p*0.32,blur=p*9px,origin50%47%; typography stays sharp/unscaled.
- Construction source: src/index.tsx:22 SHOTS; src/scenes.ts:39 buildScene

**00:58.967–00:59.000 · network:** Packet #0847 follows main curve q=mix(.13,.44,ease(step(local,0,4.8))); gold route reveals to q.25 blue background halos circulate at local*.055.
**Sampling:** Source-formula interval between sampled output frames; no additional frame displays this interval.
- Foreground: Small gold packet width.69; main tip at scale.6 and following warm spill; close rack scale.73; Los Angeles label visible. Shanghai label visible.
- Background: Undulating260x260 navy terrain,56 small cloned rack nodes and ground-following blue links; studio sky/dust.
- Camera: rise=ease(step(local,.2,2.1)), approach=ease(step(local,3.45,5)); eye[mix(0,4.5,approach),mix(mix(6.3,10.8,rise),6.8,approach),mix(23,12,approach)]; look[0,mix(0,.6,approach),mix(-22,-4,approach)],fov51. Hold initial framing before rise.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Studio direct lights*.65; environment.16,fog#060d24 .004. Warm point spill intensity7,distance5,decay2 follows route.
- Continuity: Question disappears exactly as camera approach begins; Shanghai disappears.15s later. Must pass native global<69.
Optical picture incoming p=1-ease(step(local,0,.23)); scale=1+p*0.32,blur=p*9px,origin50%47%; typography stays sharp/unscaled.
- Construction source: src/index.tsx:22 SHOTS; src/network-shots.ts:82 update

**Clock / handoff shot-13:** origin 56.933s; active local range 1.0670000000000002–2.0336666666666687s; reset key 56.933; {   "enter": false,   "exit": true,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 1740,
    "shot": "shot-13",
    "local": 1.0670000000000002,
    "eye": [
      0.2,
      3,
      13.973324999999999
    ],
    "direction": [
      -0.012519893297913021,
      0,
      -0.9999216230644324
    ],
    "quaternion": [
      0,
      0.0062600693114205274,
      0,
      0.9999804055741375
    ],
    "fov": 47,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 1769,
    "shot": "shot-13",
    "local": 2.0336666666666687,
    "eye": [
      0.2,
      3,
      13.949158333333333
    ],
    "direction": [
      -0.012538860853921113,
      0,
      -0.9999213853941149
    ],
    "quaternion": [
      0,
      0.006269553647793712,
      0,
      0.999980346155392
    ],
    "fov": 47,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 00:58.000–00:59.000. No separately asserted effect onset.

**Measured mix:** -17.505 dBFS RMS; -3.187 dBFS peak. Source samples per channel 2784000–2832000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.

**Measured candidate cue (identity unconfirmed):** id: measured-transient-2
timeSeconds: 58.433
nearestVideoFrame: 1753
onsetResolutionSeconds: 0.011609977324263039
description: Mixed-spectrum transient
centroidHz: 714
estimatedDurationSeconds: 0.267
speechMaskActive: True
coincidentVisualBeats: network-intro-04
relationship: Temporal coexistence with these visual actions; causation or intended synchronization is not asserted.
identityStatus: Acoustic measurement; effect identity unconfirmed. This can include music/speech attacks.

### 00:59.000–01:00.000 · frames 1770–1799

**Shots:** shot-14
**Narration:** No machine knows
**Captions:** is the most impressive part. / No machine knows
**Visible overlay layers:** elapsed, captions

**00:59.000–00:59.167 · network:** Packet #0847 follows main curve q=mix(.13,.44,ease(step(local,0,4.8))); gold route reveals to q.25 blue background halos circulate at local*.055.
**Sampling:** Output frames 1770–1775.
- Foreground: Small gold packet width.69; main tip at scale.6 and following warm spill; close rack scale.73; Los Angeles label visible. Shanghai label visible.
- Background: Undulating260x260 navy terrain,56 small cloned rack nodes and ground-following blue links; studio sky/dust.
- Camera: rise=ease(step(local,.2,2.1)), approach=ease(step(local,3.45,5)); eye[mix(0,4.5,approach),mix(mix(6.3,10.8,rise),6.8,approach),mix(23,12,approach)]; look[0,mix(0,.6,approach),mix(-22,-4,approach)],fov51. Hold initial framing before rise.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Studio direct lights*.65; environment.16,fog#060d24 .004. Warm point spill intensity7,distance5,decay2 follows route.
- Continuity: Question disappears exactly as camera approach begins; Shanghai disappears.15s later. Must pass native global<69.
Optical picture incoming p=1-ease(step(local,0,.23)); scale=1+p*0.32,blur=p*9px,origin50%47%; typography stays sharp/unscaled.
- Construction source: src/index.tsx:22 SHOTS; src/network-shots.ts:82 update

**00:59.167–00:59.197 · network:** Packet #0847 follows main curve q=mix(.13,.44,ease(step(local,0,4.8))); gold route reveals to q.25 blue background halos circulate at local*.055.
**Sampling:** Source-formula interval between sampled output frames; no additional frame displays this interval.
- Foreground: Small gold packet width.69; main tip at scale.6 and following warm spill; close rack scale.73; Los Angeles label visible. Shanghai label visible.
- Background: Undulating260x260 navy terrain,56 small cloned rack nodes and ground-following blue links; studio sky/dust.
- Camera: rise=ease(step(local,.2,2.1)), approach=ease(step(local,3.45,5)); eye[mix(0,4.5,approach),mix(mix(6.3,10.8,rise),6.8,approach),mix(23,12,approach)]; look[0,mix(0,.6,approach),mix(-22,-4,approach)],fov51. Crane up from6.3 to10.8.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Studio direct lights*.65; environment.16,fog#060d24 .004. Warm point spill intensity7,distance5,decay2 follows route.
- Continuity: Question disappears exactly as camera approach begins; Shanghai disappears.15s later. Must pass native global<69.
Optical picture incoming p=1-ease(step(local,0,.23)); scale=1+p*0.32,blur=p*9px,origin50%47%; typography stays sharp/unscaled.
- Construction source: src/index.tsx:22 SHOTS; src/network-shots.ts:82 update

**00:59.197–00:59.500 · network:** Packet #0847 follows main curve q=mix(.13,.44,ease(step(local,0,4.8))); gold route reveals to q.25 blue background halos circulate at local*.055.
**Sampling:** Output frames 1776–1784.
- Foreground: Small gold packet width.69; main tip at scale.6 and following warm spill; close rack scale.73; Los Angeles label visible. Shanghai label visible.
- Background: Undulating260x260 navy terrain,56 small cloned rack nodes and ground-following blue links; studio sky/dust.
- Camera: rise=ease(step(local,.2,2.1)), approach=ease(step(local,3.45,5)); eye[mix(0,4.5,approach),mix(mix(6.3,10.8,rise),6.8,approach),mix(23,12,approach)]; look[0,mix(0,.6,approach),mix(-22,-4,approach)],fov51. Crane up from6.3 to10.8.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Studio direct lights*.65; environment.16,fog#060d24 .004. Warm point spill intensity7,distance5,decay2 follows route.
- Continuity: Question disappears exactly as camera approach begins; Shanghai disappears.15s later. Must pass native global<69.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/network-shots.ts:82 update

**00:59.500–01:00.000 · network:** Packet #0847 follows main curve q=mix(.13,.44,ease(step(local,0,4.8))); gold route reveals to q.25 blue background halos circulate at local*.055.
**Sampling:** Output frames 1785–1799.
- Foreground: Small gold packet width.69; main tip at scale.6 and following warm spill; close rack scale.73; Los Angeles label visible. Shanghai label visible.
- Background: Undulating260x260 navy terrain,56 small cloned rack nodes and ground-following blue links; studio sky/dust.
- Camera: rise=ease(step(local,.2,2.1)), approach=ease(step(local,3.45,5)); eye[mix(0,4.5,approach),mix(mix(6.3,10.8,rise),6.8,approach),mix(23,12,approach)]; look[0,mix(0,.6,approach),mix(-22,-4,approach)],fov51. Crane up from6.3 to10.8.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Studio direct lights*.65; environment.16,fog#060d24 .004. Warm point spill intensity7,distance5,decay2 follows route.
- Continuity: Question disappears exactly as camera approach begins; Shanghai disappears.15s later. Must pass native global<69.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/network-shots.ts:82 update

**Clock / handoff shot-14:** origin 58.967s; active local range 0.03300000000000125–0.9996666666666698s; reset key 58.967; {   "enter": true,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 1770,
    "shot": "shot-14",
    "local": 0.03300000000000125,
    "eye": [
      0,
      6.3,
      23
    ],
    "direction": [
      0,
      -0.1386478445344062,
      -0.9903417466743302
    ],
    "quaternion": [
      -0.06949191796773867,
      0,
      0,
      0.9975825145506336
    ],
    "fov": 51,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 1799,
    "shot": "shot-14",
    "local": 0.9996666666666698,
    "eye": [
      0,
      8.02037912965934,
      23
    ],
    "direction": [
      0,
      -0.17546550223326254,
      -0.9844855801513951
    ],
    "quaternion": [
      -0.08807502440705006,
      0,
      0,
      0.9961138439333616
    ],
    "fov": 51,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 00:59.000–01:00.000. No separately asserted effect onset.

**Measured mix:** -15.456 dBFS RMS; -3.628 dBFS peak. Source samples per channel 2832000–2880000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 01:00.000–01:01.000 · frames 1800–1829

**Shots:** shot-14
**Narration:** knows the complete path
**Captions:** No machine knows / the complete path
**Visible overlay layers:** elapsed, captions

**01:00.000–01:00.067 · network:** Packet #0847 follows main curve q=mix(.13,.44,ease(step(local,0,4.8))); gold route reveals to q.25 blue background halos circulate at local*.055.
**Sampling:** Output frames 1800–1802.
- Foreground: Small gold packet width.69; main tip at scale.6 and following warm spill; close rack scale.73; Los Angeles label visible. Shanghai label visible.
- Background: Undulating260x260 navy terrain,56 small cloned rack nodes and ground-following blue links; studio sky/dust.
- Camera: rise=ease(step(local,.2,2.1)), approach=ease(step(local,3.45,5)); eye[mix(0,4.5,approach),mix(mix(6.3,10.8,rise),6.8,approach),mix(23,12,approach)]; look[0,mix(0,.6,approach),mix(-22,-4,approach)],fov51. Crane up from6.3 to10.8.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Studio direct lights*.65; environment.16,fog#060d24 .004. Warm point spill intensity7,distance5,decay2 follows route.
- Continuity: Question disappears exactly as camera approach begins; Shanghai disappears.15s later. Must pass native global<69.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/network-shots.ts:82 update

**01:00.067–01:00.400 · network:** Packet #0847 follows main curve q=mix(.13,.44,ease(step(local,0,4.8))); gold route reveals to q.25 blue background halos circulate at local*.055.
**Sampling:** Output frames 1803–1811.
- Foreground: Small gold packet width.69; main tip at scale.6 and following warm spill; close rack scale.73; Los Angeles label visible. Shanghai label visible. Large question mark visible.
- Background: Undulating260x260 navy terrain,56 small cloned rack nodes and ground-following blue links; studio sky/dust.
- Camera: rise=ease(step(local,.2,2.1)), approach=ease(step(local,3.45,5)); eye[mix(0,4.5,approach),mix(mix(6.3,10.8,rise),6.8,approach),mix(23,12,approach)]; look[0,mix(0,.6,approach),mix(-22,-4,approach)],fov51. Crane up from6.3 to10.8.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Studio direct lights*.65; environment.16,fog#060d24 .004. Warm point spill intensity7,distance5,decay2 follows route.
- Continuity: Question disappears exactly as camera approach begins; Shanghai disappears.15s later. Must pass native global<69.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/network-shots.ts:82 update

**01:00.400–01:00.667 · network:** Packet #0847 follows main curve q=mix(.13,.44,ease(step(local,0,4.8))); gold route reveals to q.25 blue background halos circulate at local*.055.
**Sampling:** Output frames 1812–1820.
- Foreground: Small gold packet width.69; main tip at scale.6 and following warm spill; close rack scale.73; Los Angeles label visible. Shanghai label visible. Large question mark visible.
- Background: Undulating260x260 navy terrain,56 small cloned rack nodes and ground-following blue links; studio sky/dust.
- Camera: rise=ease(step(local,.2,2.1)), approach=ease(step(local,3.45,5)); eye[mix(0,4.5,approach),mix(mix(6.3,10.8,rise),6.8,approach),mix(23,12,approach)]; look[0,mix(0,.6,approach),mix(-22,-4,approach)],fov51. Crane up from6.3 to10.8.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Studio direct lights*.65; environment.16,fog#060d24 .004. Warm point spill intensity7,distance5,decay2 follows route.
- Continuity: Question disappears exactly as camera approach begins; Shanghai disappears.15s later. Must pass native global<69.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/network-shots.ts:82 update

**01:00.667–01:01.000 · network:** Packet #0847 follows main curve q=mix(.13,.44,ease(step(local,0,4.8))); gold route reveals to q.25 blue background halos circulate at local*.055.
**Sampling:** Output frames 1821–1829.
- Foreground: Small gold packet width.69; main tip at scale.6 and following warm spill; close rack scale.73; Los Angeles label visible. Shanghai label visible. Large question mark visible.
- Background: Undulating260x260 navy terrain,56 small cloned rack nodes and ground-following blue links; studio sky/dust.
- Camera: rise=ease(step(local,.2,2.1)), approach=ease(step(local,3.45,5)); eye[mix(0,4.5,approach),mix(mix(6.3,10.8,rise),6.8,approach),mix(23,12,approach)]; look[0,mix(0,.6,approach),mix(-22,-4,approach)],fov51. Crane up from6.3 to10.8.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Studio direct lights*.65; environment.16,fog#060d24 .004. Warm point spill intensity7,distance5,decay2 follows route.
- Continuity: Question disappears exactly as camera approach begins; Shanghai disappears.15s later. Must pass native global<69.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/network-shots.ts:82 update

**Clock / handoff shot-14:** origin 58.967s; active local range 1.0330000000000013–1.9996666666666698s; reset key 58.967; {   "enter": true,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 1800,
    "shot": "shot-14",
    "local": 1.0330000000000013,
    "eye": [
      0,
      8.13644365315644,
      23
    ],
    "direction": [
      0,
      -0.17792487031653478,
      -0.9840440744818518
    ],
    "quaternion": [
      -0.08931944222325901,
      0,
      0,
      0.9960030307388256
    ],
    "fov": 51,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 1829,
    "shot": "shot-14",
    "local": 1.9996666666666698,
    "eye": [
      0,
      10.76367946498518,
      23
    ],
    "direction": [
      0,
      -0.23263065708391767,
      -0.9725651532852206
    ],
    "quaternion": [
      -0.11712140435202134,
      0,
      0,
      0.9931176046383481
    ],
    "fov": 51,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 01:00.000–01:01.000. No separately asserted effect onset.

**Measured mix:** -16.159 dBFS RMS; -4.233 dBFS peak. Source samples per channel 2880000–2928000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 01:01.000–01:02.000 · frames 1830–1859

**Shots:** shot-14
**Narration:** path that the packet will take.
**Captions:** the complete path / that the packet will take.
**Visible overlay layers:** elapsed, captions

**01:01.000–01:01.067 · network:** Packet #0847 follows main curve q=mix(.13,.44,ease(step(local,0,4.8))); gold route reveals to q.25 blue background halos circulate at local*.055.
**Sampling:** Output frames 1830–1832.
- Foreground: Small gold packet width.69; main tip at scale.6 and following warm spill; close rack scale.73; Los Angeles label visible. Shanghai label visible. Large question mark visible.
- Background: Undulating260x260 navy terrain,56 small cloned rack nodes and ground-following blue links; studio sky/dust.
- Camera: rise=ease(step(local,.2,2.1)), approach=ease(step(local,3.45,5)); eye[mix(0,4.5,approach),mix(mix(6.3,10.8,rise),6.8,approach),mix(23,12,approach)]; look[0,mix(0,.6,approach),mix(-22,-4,approach)],fov51. Crane up from6.3 to10.8.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Studio direct lights*.65; environment.16,fog#060d24 .004. Warm point spill intensity7,distance5,decay2 follows route.
- Continuity: Question disappears exactly as camera approach begins; Shanghai disappears.15s later. Must pass native global<69.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/network-shots.ts:82 update

**01:01.067–01:01.200 · network:** Packet #0847 follows main curve q=mix(.13,.44,ease(step(local,0,4.8))); gold route reveals to q.25 blue background halos circulate at local*.055.
**Sampling:** Output frames 1833–1835.
- Foreground: Small gold packet width.69; main tip at scale.6 and following warm spill; close rack scale.73; Los Angeles label visible. Shanghai label visible. Large question mark visible.
- Background: Undulating260x260 navy terrain,56 small cloned rack nodes and ground-following blue links; studio sky/dust.
- Camera: rise=ease(step(local,.2,2.1)), approach=ease(step(local,3.45,5)); eye[mix(0,4.5,approach),mix(mix(6.3,10.8,rise),6.8,approach),mix(23,12,approach)]; look[0,mix(0,.6,approach),mix(-22,-4,approach)],fov51. Hold high overview.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Studio direct lights*.65; environment.16,fog#060d24 .004. Warm point spill intensity7,distance5,decay2 follows route.
- Continuity: Question disappears exactly as camera approach begins; Shanghai disappears.15s later. Must pass native global<69.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/network-shots.ts:82 update

**01:01.200–01:02.000 · network:** Packet #0847 follows main curve q=mix(.13,.44,ease(step(local,0,4.8))); gold route reveals to q.25 blue background halos circulate at local*.055.
**Sampling:** Output frames 1836–1859.
- Foreground: Small gold packet width.69; main tip at scale.6 and following warm spill; close rack scale.73; Los Angeles label visible. Shanghai label visible. Large question mark visible.
- Background: Undulating260x260 navy terrain,56 small cloned rack nodes and ground-following blue links; studio sky/dust.
- Camera: rise=ease(step(local,.2,2.1)), approach=ease(step(local,3.45,5)); eye[mix(0,4.5,approach),mix(mix(6.3,10.8,rise),6.8,approach),mix(23,12,approach)]; look[0,mix(0,.6,approach),mix(-22,-4,approach)],fov51. Hold high overview.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Studio direct lights*.65; environment.16,fog#060d24 .004. Warm point spill intensity7,distance5,decay2 follows route.
- Continuity: Question disappears exactly as camera approach begins; Shanghai disappears.15s later. Must pass native global<69.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/network-shots.ts:82 update

**Clock / handoff shot-14:** origin 58.967s; active local range 2.0330000000000013–2.99966666666667s; reset key 58.967; {   "enter": true,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 1830,
    "shot": "shot-14",
    "local": 2.0330000000000013,
    "eye": [
      0,
      10.783607525441028,
      23
    ],
    "direction": [
      0,
      -0.23303798420583727,
      -0.9724676333520206
    ],
    "quaternion": [
      -0.11732937962841916,
      0,
      0,
      0.9930930553961248
    ],
    "fov": 51,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 1859,
    "shot": "shot-14",
    "local": 2.99966666666667,
    "eye": [
      0,
      10.8,
      23
    ],
    "direction": [
      0,
      -0.2333729524753242,
      -0.9723873019805175
    ],
    "quaternion": [
      -0.11750042131729259,
      0,
      0,
      0.993072832671531
    ],
    "fov": 51,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 01:01.000–01:02.000. No separately asserted effect onset.

**Measured mix:** -19.574 dBFS RMS; -2.721 dBFS peak. Source samples per channel 2928000–2976000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 01:02.000–01:03.000 · frames 1860–1889

**Shots:** shot-14
**Narration:** The packet moves through
**Captions:** that the packet will take. / The packet moves / through a chain of routers
**Visible overlay layers:** elapsed, captions

**01:02.000–01:02.200 · network:** Packet #0847 follows main curve q=mix(.13,.44,ease(step(local,0,4.8))); gold route reveals to q.25 blue background halos circulate at local*.055.
**Sampling:** Output frames 1860–1865.
- Foreground: Small gold packet width.69; main tip at scale.6 and following warm spill; close rack scale.73; Los Angeles label visible. Shanghai label visible. Large question mark visible.
- Background: Undulating260x260 navy terrain,56 small cloned rack nodes and ground-following blue links; studio sky/dust.
- Camera: rise=ease(step(local,.2,2.1)), approach=ease(step(local,3.45,5)); eye[mix(0,4.5,approach),mix(mix(6.3,10.8,rise),6.8,approach),mix(23,12,approach)]; look[0,mix(0,.6,approach),mix(-22,-4,approach)],fov51. Hold high overview.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Studio direct lights*.65; environment.16,fog#060d24 .004. Warm point spill intensity7,distance5,decay2 follows route.
- Continuity: Question disappears exactly as camera approach begins; Shanghai disappears.15s later. Must pass native global<69.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/network-shots.ts:82 update

**01:02.200–01:02.417 · network:** Packet #0847 follows main curve q=mix(.13,.44,ease(step(local,0,4.8))); gold route reveals to q.25 blue background halos circulate at local*.055.
**Sampling:** Output frames 1866–1872.
- Foreground: Small gold packet width.69; main tip at scale.6 and following warm spill; close rack scale.73; Los Angeles label visible. Shanghai label visible. Large question mark visible.
- Background: Undulating260x260 navy terrain,56 small cloned rack nodes and ground-following blue links; studio sky/dust.
- Camera: rise=ease(step(local,.2,2.1)), approach=ease(step(local,3.45,5)); eye[mix(0,4.5,approach),mix(mix(6.3,10.8,rise),6.8,approach),mix(23,12,approach)]; look[0,mix(0,.6,approach),mix(-22,-4,approach)],fov51. Hold high overview.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Studio direct lights*.65; environment.16,fog#060d24 .004. Warm point spill intensity7,distance5,decay2 follows route.
- Continuity: Question disappears exactly as camera approach begins; Shanghai disappears.15s later. Must pass native global<69.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/network-shots.ts:82 update

**01:02.417–01:02.567 · network:** Packet #0847 follows main curve q=mix(.13,.44,ease(step(local,0,4.8))); gold route reveals to q.25 blue background halos circulate at local*.055.
**Sampling:** Output frames 1873–1877.
- Foreground: Small gold packet width.69; main tip at scale.6 and following warm spill; close rack scale.73; Los Angeles label visible. Shanghai label visible.
- Background: Undulating260x260 navy terrain,56 small cloned rack nodes and ground-following blue links; studio sky/dust.
- Camera: rise=ease(step(local,.2,2.1)), approach=ease(step(local,3.45,5)); eye[mix(0,4.5,approach),mix(mix(6.3,10.8,rise),6.8,approach),mix(23,12,approach)]; look[0,mix(0,.6,approach),mix(-22,-4,approach)],fov51. Approach and lower toward close rack.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Studio direct lights*.65; environment.16,fog#060d24 .004. Warm point spill intensity7,distance5,decay2 follows route.
- Continuity: Question disappears exactly as camera approach begins; Shanghai disappears.15s later. Must pass native global<69.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/network-shots.ts:82 update

**01:02.567–01:02.667 · network:** Packet #0847 follows main curve q=mix(.13,.44,ease(step(local,0,4.8))); gold route reveals to q.25 blue background halos circulate at local*.055.
**Sampling:** Output frames 1878–1880.
- Foreground: Small gold packet width.69; main tip at scale.6 and following warm spill; close rack scale.73; Los Angeles label visible.
- Background: Undulating260x260 navy terrain,56 small cloned rack nodes and ground-following blue links; studio sky/dust.
- Camera: rise=ease(step(local,.2,2.1)), approach=ease(step(local,3.45,5)); eye[mix(0,4.5,approach),mix(mix(6.3,10.8,rise),6.8,approach),mix(23,12,approach)]; look[0,mix(0,.6,approach),mix(-22,-4,approach)],fov51. Approach and lower toward close rack.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Studio direct lights*.65; environment.16,fog#060d24 .004. Warm point spill intensity7,distance5,decay2 follows route.
- Continuity: Question disappears exactly as camera approach begins; Shanghai disappears.15s later. Must pass native global<69.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/network-shots.ts:82 update

**01:02.667–01:02.900 · network:** Packet #0847 follows main curve q=mix(.13,.44,ease(step(local,0,4.8))); gold route reveals to q.25 blue background halos circulate at local*.055.
**Sampling:** Output frames 1881–1886.
- Foreground: Small gold packet width.69; main tip at scale.6 and following warm spill; close rack scale.73; Los Angeles label visible.
- Background: Undulating260x260 navy terrain,56 small cloned rack nodes and ground-following blue links; studio sky/dust.
- Camera: rise=ease(step(local,.2,2.1)), approach=ease(step(local,3.45,5)); eye[mix(0,4.5,approach),mix(mix(6.3,10.8,rise),6.8,approach),mix(23,12,approach)]; look[0,mix(0,.6,approach),mix(-22,-4,approach)],fov51. Approach and lower toward close rack.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Studio direct lights*.65; environment.16,fog#060d24 .004. Warm point spill intensity7,distance5,decay2 follows route.
- Continuity: Question disappears exactly as camera approach begins; Shanghai disappears.15s later. Must pass native global<69.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/network-shots.ts:82 update

**01:02.900–01:03.000 · network:** Packet #0847 follows main curve q=mix(.13,.44,ease(step(local,0,4.8))); gold route reveals to q.25 blue background halos circulate at local*.055.
**Sampling:** Output frames 1887–1889.
- Foreground: Small gold packet width.69; main tip at scale.6 and following warm spill; close rack scale.73; Los Angeles label visible.
- Background: Undulating260x260 navy terrain,56 small cloned rack nodes and ground-following blue links; studio sky/dust.
- Camera: rise=ease(step(local,.2,2.1)), approach=ease(step(local,3.45,5)); eye[mix(0,4.5,approach),mix(mix(6.3,10.8,rise),6.8,approach),mix(23,12,approach)]; look[0,mix(0,.6,approach),mix(-22,-4,approach)],fov51. Approach and lower toward close rack.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Studio direct lights*.65; environment.16,fog#060d24 .004. Warm point spill intensity7,distance5,decay2 follows route.
- Continuity: Question disappears exactly as camera approach begins; Shanghai disappears.15s later. Must pass native global<69.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/network-shots.ts:82 update

**Clock / handoff shot-14:** origin 58.967s; active local range 3.0330000000000013–3.99966666666667s; reset key 58.967; {   "enter": true,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 1860,
    "shot": "shot-14",
    "local": 3.0330000000000013,
    "eye": [
      0,
      10.8,
      23
    ],
    "direction": [
      0,
      -0.2333729524753242,
      -0.9723873019805175
    ],
    "quaternion": [
      -0.11750042131729259,
      0,
      0,
      0.993072832671531
    ],
    "fov": 51,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 1889,
    "shot": "shot-14",
    "local": 3.99966666666667,
    "eye": [
      1.2963614985286505,
      9.647678667974533,
      19.831116336929966
    ],
    "direction": [
      -0.03422924547260394,
      -0.25017427490280764,
      -0.9675955719882305
    ],
    "quaternion": [
      -0.12607386420952083,
      0.017538379889947702,
      0.002229270215909602,
      0.9918633052736752
    ],
    "fov": 51,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 01:02.000–01:03.000. No separately asserted effect onset.

**Measured mix:** -15.976 dBFS RMS; -2.759 dBFS peak. Source samples per channel 2976000–3024000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 01:03.000–01:04.000 · frames 1890–1919

**Shots:** shot-14
**Narration:** a chain of routers
**Captions:** through a chain of routers
**Visible overlay layers:** elapsed, captions

**01:03.000–01:03.767 · network:** Packet #0847 follows main curve q=mix(.13,.44,ease(step(local,0,4.8))); gold route reveals to q.25 blue background halos circulate at local*.055.
**Sampling:** Output frames 1890–1913.
- Foreground: Small gold packet width.69; main tip at scale.6 and following warm spill; close rack scale.73; Los Angeles label visible.
- Background: Undulating260x260 navy terrain,56 small cloned rack nodes and ground-following blue links; studio sky/dust.
- Camera: rise=ease(step(local,.2,2.1)), approach=ease(step(local,3.45,5)); eye[mix(0,4.5,approach),mix(mix(6.3,10.8,rise),6.8,approach),mix(23,12,approach)]; look[0,mix(0,.6,approach),mix(-22,-4,approach)],fov51. Approach and lower toward close rack.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Studio direct lights*.65; environment.16,fog#060d24 .004. Warm point spill intensity7,distance5,decay2 follows route.
- Continuity: Question disappears exactly as camera approach begins; Shanghai disappears.15s later. Must pass native global<69.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/network-shots.ts:82 update

**01:03.767–01:03.967 · network:** Packet #0847 follows main curve q=mix(.13,.44,ease(step(local,0,4.8))); gold route reveals to q. Packet/route now hold q=.44.25 blue background halos circulate at local*.055.
**Sampling:** Output frames 1914–1919.
- Foreground: Small gold packet width.69; main tip at scale.6 and following warm spill; close rack scale.73; Los Angeles label visible.
- Background: Undulating260x260 navy terrain,56 small cloned rack nodes and ground-following blue links; studio sky/dust.
- Camera: rise=ease(step(local,.2,2.1)), approach=ease(step(local,3.45,5)); eye[mix(0,4.5,approach),mix(mix(6.3,10.8,rise),6.8,approach),mix(23,12,approach)]; look[0,mix(0,.6,approach),mix(-22,-4,approach)],fov51. Approach and lower toward close rack.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Studio direct lights*.65; environment.16,fog#060d24 .004. Warm point spill intensity7,distance5,decay2 follows route.
- Continuity: Question disappears exactly as camera approach begins; Shanghai disappears.15s later. Must pass native global<69.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/network-shots.ts:82 update

**01:03.967–01:04.000 · network:** Packet #0847 follows main curve q=mix(.13,.44,ease(step(local,0,4.8))); gold route reveals to q. Packet/route now hold q=.44.25 blue background halos circulate at local*.055.
**Sampling:** Source-formula interval between sampled output frames; no additional frame displays this interval.
- Foreground: Small gold packet width.69; main tip at scale.6 and following warm spill; close rack scale.73; Los Angeles label visible.
- Background: Undulating260x260 navy terrain,56 small cloned rack nodes and ground-following blue links; studio sky/dust.
- Camera: rise=ease(step(local,.2,2.1)), approach=ease(step(local,3.45,5)); eye[mix(0,4.5,approach),mix(mix(6.3,10.8,rise),6.8,approach),mix(23,12,approach)]; look[0,mix(0,.6,approach),mix(-22,-4,approach)],fov51. Camera at approach end.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Studio direct lights*.65; environment.16,fog#060d24 .004. Warm point spill intensity7,distance5,decay2 follows route.
- Continuity: Question disappears exactly as camera approach begins; Shanghai disappears.15s later. Must pass native global<69.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/network-shots.ts:82 update

**Clock / handoff shot-14:** origin 58.967s; active local range 4.033000000000001–4.99966666666667s; reset key 58.967; {   "enter": true,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 1890,
    "shot": "shot-14",
    "local": 4.033000000000001,
    "eye": [
      1.430977071464541,
      9.528020380920408,
      19.50205604753112
    ],
    "direction": [
      -0.03867071609556067,
      -0.25232907213840106,
      -0.9668684579974828
    ],
    "quaternion": [
      -0.12717230816701572,
      0.019823597976457122,
      0.002542165393143943,
      0.9916792658888535
    ],
    "fov": 51,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 1919,
    "shot": "shot-14",
    "local": 4.99966666666667,
    "eye": [
      4.499999375739877,
      6.800000554897887,
      12.00000152596919
    ],
    "direction": [
      -0.25367104144346964,
      -0.34950240822348483,
      -0.9019418325917532
    ],
    "quaternion": [
      -0.17590741138624452,
      0.13448295923095224,
      0.02426622825162969,
      0.9748754107383755
    ],
    "fov": 51,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 01:03.000–01:04.000. No separately asserted effect onset.

**Measured mix:** -15.59 dBFS RMS; -2.168 dBFS peak. Source samples per channel 3024000–3072000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 01:04.000–01:05.000 · frames 1920–1949

**Shots:** shot-15
**Narration:** routers and each router does only
**Captions:** through a chain of routers / and each router / does only one thing,
**Visible overlay layers:** elapsed, captions

**01:04.000–01:04.100 · router:** Card hidden before.6. enter=ease(step(local,.6,1.6)),leave=ease(step(local,3.5,4.25)); x=mix(-1.6,-.4,enter)+1.7*leave;scale=enter*(1-leave),Yscale*.84;rotationY=-.16.
**Sampling:** Output frames 1920–1922.
- Foreground: Full detailed rack at[0,0,0], Router label; visible card when.6<local<4.25 shows To Los Angeles/#0847.
- Background: Terrain and blue links remain;56 background rack nodes and25 halo sprites explicitly hidden.
- Camera: eye[mix(-2.15,-1.9,ease(step(local,0,5))),2.7,6.2],look[0,2.5,0],fov46; slight lateral camera shift for entire shot.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Studio direct lights*.65; environment.16,fog#060d24 .004. Tip and moving spill hidden; no red fault.
- Continuity: No optical handoff on this source shot; dark hardware stays as card appears/disappears.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/network-shots.ts:82 update

**01:04.100–01:04.333 · router:** Card hidden before.6. enter=ease(step(local,.6,1.6)),leave=ease(step(local,3.5,4.25)); x=mix(-1.6,-.4,enter)+1.7*leave;scale=enter*(1-leave),Yscale*.84;rotationY=-.16.
**Sampling:** Output frames 1923–1929.
- Foreground: Full detailed rack at[0,0,0], Router label; visible card when.6<local<4.25 shows To Los Angeles/#0847.
- Background: Terrain and blue links remain;56 background rack nodes and25 halo sprites explicitly hidden.
- Camera: eye[mix(-2.15,-1.9,ease(step(local,0,5))),2.7,6.2],look[0,2.5,0],fov46; slight lateral camera shift for entire shot.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Studio direct lights*.65; environment.16,fog#060d24 .004. Tip and moving spill hidden; no red fault.
- Continuity: No optical handoff on this source shot; dark hardware stays as card appears/disappears.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/network-shots.ts:82 update

**01:04.333–01:04.600 · router:** Card hidden before.6. enter=ease(step(local,.6,1.6)),leave=ease(step(local,3.5,4.25)); x=mix(-1.6,-.4,enter)+1.7*leave;scale=enter*(1-leave),Yscale*.84;rotationY=-.16.
**Sampling:** Output frames 1930–1937.
- Foreground: Full detailed rack at[0,0,0], Router label; visible card when.6<local<4.25 shows To Los Angeles/#0847.
- Background: Terrain and blue links remain;56 background rack nodes and25 halo sprites explicitly hidden.
- Camera: eye[mix(-2.15,-1.9,ease(step(local,0,5))),2.7,6.2],look[0,2.5,0],fov46; slight lateral camera shift for entire shot.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Studio direct lights*.65; environment.16,fog#060d24 .004. Tip and moving spill hidden; no red fault.
- Continuity: No optical handoff on this source shot; dark hardware stays as card appears/disappears.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/network-shots.ts:82 update

**01:04.600–01:04.800 · router:** Card enters, scales up and slides toward rack during.6-1.6. enter=ease(step(local,.6,1.6)),leave=ease(step(local,3.5,4.25)); x=mix(-1.6,-.4,enter)+1.7*leave;scale=enter*(1-leave),Yscale*.84;rotationY=-.16.
**Sampling:** Output frames 1938–1943.
- Foreground: Full detailed rack at[0,0,0], Router label; visible card when.6<local<4.25 shows To Los Angeles/#0847.
- Background: Terrain and blue links remain;56 background rack nodes and25 halo sprites explicitly hidden.
- Camera: eye[mix(-2.15,-1.9,ease(step(local,0,5))),2.7,6.2],look[0,2.5,0],fov46; slight lateral camera shift for entire shot.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Studio direct lights*.65; environment.16,fog#060d24 .004. Tip and moving spill hidden; no red fault.
- Continuity: No optical handoff on this source shot; dark hardware stays as card appears/disappears.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/network-shots.ts:82 update

**01:04.800–01:05.000 · router:** Card enters, scales up and slides toward rack during.6-1.6. enter=ease(step(local,.6,1.6)),leave=ease(step(local,3.5,4.25)); x=mix(-1.6,-.4,enter)+1.7*leave;scale=enter*(1-leave),Yscale*.84;rotationY=-.16.
**Sampling:** Output frames 1944–1949.
- Foreground: Full detailed rack at[0,0,0], Router label; visible card when.6<local<4.25 shows To Los Angeles/#0847.
- Background: Terrain and blue links remain;56 background rack nodes and25 halo sprites explicitly hidden.
- Camera: eye[mix(-2.15,-1.9,ease(step(local,0,5))),2.7,6.2],look[0,2.5,0],fov46; slight lateral camera shift for entire shot.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Studio direct lights*.65; environment.16,fog#060d24 .004. Tip and moving spill hidden; no red fault.
- Continuity: No optical handoff on this source shot; dark hardware stays as card appears/disappears.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/network-shots.ts:82 update

**Clock / handoff shot-15:** origin 64s; active local range 0.0–0.9666666666666686s; reset key 64; {   "enter": false,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 1920,
    "shot": "shot-15",
    "local": 0,
    "eye": [
      -2.15,
      2.7,
      6.2
    ],
    "direction": [
      0.3274818458722655,
      -0.030463427523001466,
      -0.9443662532130448
    ],
    "quaternion": [
      -0.015021806812323249,
      -0.16610604658943293,
      -0.002530667019649973,
      0.9859902242572984
    ],
    "fov": 46,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 1949,
    "shot": "shot-15",
    "local": 0.9666666666666686,
    "eye": [
      -2.125579851851852,
      2.7,
      6.2
    ],
    "direction": [
      0.32415508897944223,
      -0.030500391570519588,
      -0.9455121386861064
    ],
    "quaternion": [
      -0.015044474725072905,
      -0.16437029669984007,
      -0.0025072624518260073,
      0.9862807830319167
    ],
    "fov": 46,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 01:04.000–01:05.000. No separately asserted effect onset.

**Measured mix:** -16.629 dBFS RMS; -2.82 dBFS peak. Source samples per channel 3072000–3120000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 01:05.000–01:06.000 · frames 1950–1979

**Shots:** shot-15
**Narration:** only one thing,
**Captions:** does only one thing,
**Visible overlay layers:** elapsed, captions

**01:05.000–01:05.600 · router:** Card enters, scales up and slides toward rack during.6-1.6. enter=ease(step(local,.6,1.6)),leave=ease(step(local,3.5,4.25)); x=mix(-1.6,-.4,enter)+1.7*leave;scale=enter*(1-leave),Yscale*.84;rotationY=-.16.
**Sampling:** Output frames 1950–1967.
- Foreground: Full detailed rack at[0,0,0], Router label; visible card when.6<local<4.25 shows To Los Angeles/#0847.
- Background: Terrain and blue links remain;56 background rack nodes and25 halo sprites explicitly hidden.
- Camera: eye[mix(-2.15,-1.9,ease(step(local,0,5))),2.7,6.2],look[0,2.5,0],fov46; slight lateral camera shift for entire shot.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Studio direct lights*.65; environment.16,fog#060d24 .004. Tip and moving spill hidden; no red fault.
- Continuity: No optical handoff on this source shot; dark hardware stays as card appears/disappears.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/network-shots.ts:82 update

**01:05.600–01:06.000 · router:** Card held at[-.4,2.10,1.34],scale[1,.84,1]. enter=ease(step(local,.6,1.6)),leave=ease(step(local,3.5,4.25)); x=mix(-1.6,-.4,enter)+1.7*leave;scale=enter*(1-leave),Yscale*.84;rotationY=-.16.
**Sampling:** Output frames 1968–1979.
- Foreground: Full detailed rack at[0,0,0], Router label; visible card when.6<local<4.25 shows To Los Angeles/#0847.
- Background: Terrain and blue links remain;56 background rack nodes and25 halo sprites explicitly hidden.
- Camera: eye[mix(-2.15,-1.9,ease(step(local,0,5))),2.7,6.2],look[0,2.5,0],fov46; slight lateral camera shift for entire shot.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Studio direct lights*.65; environment.16,fog#060d24 .004. Tip and moving spill hidden; no red fault.
- Continuity: No optical handoff on this source shot; dark hardware stays as card appears/disappears.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/network-shots.ts:82 update

**Clock / handoff shot-15:** origin 64s; active local range 1.0–1.9666666666666686s; reset key 64; {   "enter": false,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 1950,
    "shot": "shot-15",
    "local": 1,
    "eye": [
      -2.124,
      2.7,
      6.2
    ],
    "direction": [
      0.3239394493620087,
      -0.030502773009605366,
      -0.9455859632977655
    ],
    "quaternion": [
      -0.015045935448920618,
      -0.16425784053610398,
      -0.0025057427958742867,
      0.9862994995952922
    ],
    "fov": 46,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 1979,
    "shot": "shot-15",
    "local": 1.9666666666666686,
    "eye": [
      -2.064393185185185,
      2.7,
      6.2
    ],
    "direction": [
      0.31576676892034106,
      -0.030591727504856652,
      -0.9483435526505555
    ],
    "quaternion": [
      -0.015100526402197835,
      -0.16000061805224025,
      -0.0024479205120138472,
      0.9869983708246152
    ],
    "fov": 46,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 01:05.000–01:06.000. No separately asserted effect onset.

**Measured mix:** -16.326 dBFS RMS; -4.61 dBFS peak. Source samples per channel 3120000–3168000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 01:06.000–01:07.000 · frames 1980–2009

**Shots:** shot-15
**Narration:** which is to read the address
**Captions:** does only one thing, / which is to read the address
**Visible overlay layers:** elapsed, captions

**01:06.000–01:06.200 · router:** Card held at[-.4,2.10,1.34],scale[1,.84,1]. enter=ease(step(local,.6,1.6)),leave=ease(step(local,3.5,4.25)); x=mix(-1.6,-.4,enter)+1.7*leave;scale=enter*(1-leave),Yscale*.84;rotationY=-.16.
**Sampling:** Output frames 1980–1985.
- Foreground: Full detailed rack at[0,0,0], Router label; visible card when.6<local<4.25 shows To Los Angeles/#0847.
- Background: Terrain and blue links remain;56 background rack nodes and25 halo sprites explicitly hidden.
- Camera: eye[mix(-2.15,-1.9,ease(step(local,0,5))),2.7,6.2],look[0,2.5,0],fov46; slight lateral camera shift for entire shot.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Studio direct lights*.65; environment.16,fog#060d24 .004. Tip and moving spill hidden; no red fault.
- Continuity: No optical handoff on this source shot; dark hardware stays as card appears/disappears.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/network-shots.ts:82 update

**01:06.200–01:06.333 · router:** Card held at[-.4,2.10,1.34],scale[1,.84,1]. enter=ease(step(local,.6,1.6)),leave=ease(step(local,3.5,4.25)); x=mix(-1.6,-.4,enter)+1.7*leave;scale=enter*(1-leave),Yscale*.84;rotationY=-.16.
**Sampling:** Output frames 1986–1989.
- Foreground: Full detailed rack at[0,0,0], Router label; visible card when.6<local<4.25 shows To Los Angeles/#0847.
- Background: Terrain and blue links remain;56 background rack nodes and25 halo sprites explicitly hidden.
- Camera: eye[mix(-2.15,-1.9,ease(step(local,0,5))),2.7,6.2],look[0,2.5,0],fov46; slight lateral camera shift for entire shot.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Studio direct lights*.65; environment.16,fog#060d24 .004. Tip and moving spill hidden; no red fault.
- Continuity: No optical handoff on this source shot; dark hardware stays as card appears/disappears.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/network-shots.ts:82 update

**01:06.333–01:07.000 · router:** Card held at[-.4,2.10,1.34],scale[1,.84,1]. enter=ease(step(local,.6,1.6)),leave=ease(step(local,3.5,4.25)); x=mix(-1.6,-.4,enter)+1.7*leave;scale=enter*(1-leave),Yscale*.84;rotationY=-.16.
**Sampling:** Output frames 1990–2009.
- Foreground: Full detailed rack at[0,0,0], Router label; visible card when.6<local<4.25 shows To Los Angeles/#0847.
- Background: Terrain and blue links remain;56 background rack nodes and25 halo sprites explicitly hidden.
- Camera: eye[mix(-2.15,-1.9,ease(step(local,0,5))),2.7,6.2],look[0,2.5,0],fov46; slight lateral camera shift for entire shot.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Studio direct lights*.65; environment.16,fog#060d24 .004. Tip and moving spill hidden; no red fault.
- Continuity: No optical handoff on this source shot; dark hardware stays as card appears/disappears.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/network-shots.ts:82 update

**Clock / handoff shot-15:** origin 64s; active local range 2.0–2.9666666666666686s; reset key 64; {   "enter": false,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 1980,
    "shot": "shot-15",
    "local": 2,
    "eye": [
      -2.062,
      2.7,
      6.2
    ],
    "direction": [
      0.31543715263029043,
      -0.030595262136788627,
      -0.9484531262404465
    ],
    "quaternion": [
      -0.015102696722091913,
      -0.159829113216264,
      -0.002445579250346031,
      0.9870261304860948
    ],
    "fov": 46,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 2009,
    "shot": "shot-15",
    "local": 2.9666666666666686,
    "eye": [
      -1.9904065185185182,
      2.7,
      6.2
    ],
    "direction": [
      0.30552398294208816,
      -0.030699656587689774,
      -0.951689354218382
    ],
    "quaternion": [
      -0.015166835588535616,
      -0.1546780203811758,
      -0.002374840738978876,
      0.9878456545638369
    ],
    "fov": 46,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 01:06.000–01:07.000. No separately asserted effect onset.

**Measured mix:** -16.456 dBFS RMS; -2.978 dBFS peak. Source samples per channel 3168000–3216000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 01:07.000–01:08.000 · frames 2010–2039

**Shots:** shot-15
**Narration:** address on a packet and
**Captions:** which is to read the address / on a packet
**Visible overlay layers:** elapsed, captions

**01:07.000–01:07.300 · router:** Card held at[-.4,2.10,1.34],scale[1,.84,1]. enter=ease(step(local,.6,1.6)),leave=ease(step(local,3.5,4.25)); x=mix(-1.6,-.4,enter)+1.7*leave;scale=enter*(1-leave),Yscale*.84;rotationY=-.16.
**Sampling:** Output frames 2010–2018.
- Foreground: Full detailed rack at[0,0,0], Router label; visible card when.6<local<4.25 shows To Los Angeles/#0847.
- Background: Terrain and blue links remain;56 background rack nodes and25 halo sprites explicitly hidden.
- Camera: eye[mix(-2.15,-1.9,ease(step(local,0,5))),2.7,6.2],look[0,2.5,0],fov46; slight lateral camera shift for entire shot.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Studio direct lights*.65; environment.16,fog#060d24 .004. Tip and moving spill hidden; no red fault.
- Continuity: No optical handoff on this source shot; dark hardware stays as card appears/disappears.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/network-shots.ts:82 update

**01:07.300–01:07.500 · router:** Card held at[-.4,2.10,1.34],scale[1,.84,1]. enter=ease(step(local,.6,1.6)),leave=ease(step(local,3.5,4.25)); x=mix(-1.6,-.4,enter)+1.7*leave;scale=enter*(1-leave),Yscale*.84;rotationY=-.16.
**Sampling:** Output frames 2019–2024.
- Foreground: Full detailed rack at[0,0,0], Router label; visible card when.6<local<4.25 shows To Los Angeles/#0847.
- Background: Terrain and blue links remain;56 background rack nodes and25 halo sprites explicitly hidden.
- Camera: eye[mix(-2.15,-1.9,ease(step(local,0,5))),2.7,6.2],look[0,2.5,0],fov46; slight lateral camera shift for entire shot.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Studio direct lights*.65; environment.16,fog#060d24 .004. Tip and moving spill hidden; no red fault.
- Continuity: No optical handoff on this source shot; dark hardware stays as card appears/disappears.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/network-shots.ts:82 update

**01:07.500–01:08.000 · router:** Card scales away and moves right during3.5-4.25. enter=ease(step(local,.6,1.6)),leave=ease(step(local,3.5,4.25)); x=mix(-1.6,-.4,enter)+1.7*leave;scale=enter*(1-leave),Yscale*.84;rotationY=-.16.
**Sampling:** Output frames 2025–2039.
- Foreground: Full detailed rack at[0,0,0], Router label; visible card when.6<local<4.25 shows To Los Angeles/#0847.
- Background: Terrain and blue links remain;56 background rack nodes and25 halo sprites explicitly hidden.
- Camera: eye[mix(-2.15,-1.9,ease(step(local,0,5))),2.7,6.2],look[0,2.5,0],fov46; slight lateral camera shift for entire shot.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Studio direct lights*.65; environment.16,fog#060d24 .004. Tip and moving spill hidden; no red fault.
- Continuity: No optical handoff on this source shot; dark hardware stays as card appears/disappears.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/network-shots.ts:82 update

**Clock / handoff shot-15:** origin 64s; active local range 3.0–3.9666666666666686s; reset key 64; {   "enter": false,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 2010,
    "shot": "shot-15",
    "local": 3,
    "eye": [
      -1.988,
      2.7,
      6.2
    ],
    "direction": [
      0.30518901107349516,
      -0.0307031198263074,
      -0.9517967146155285
    ],
    "quaternion": [
      -0.015168964659607941,
      -0.15450419153987832,
      -0.0023724395988562277,
      0.9878728302965487
    ],
    "fov": 46,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 2039,
    "shot": "shot-15",
    "local": 3.9666666666666686,
    "eye": [
      -1.9276198518518517,
      2.7,
      6.2
    ],
    "direction": [
      0.2967475883638342,
      -0.03078901559130043,
      -0.9544594833303125
    ],
    "quaternion": [
      -0.01522179675718427,
      -0.15012846245241682,
      -0.002311701767683989,
      0.9885466087646518
    ],
    "fov": 46,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 01:07.000–01:08.000. No separately asserted effect onset.

**Measured mix:** -16.89 dBFS RMS; -2.695 dBFS peak. Source samples per channel 3216000–3264000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 01:08.000–01:09.000 · frames 2040–2069

**Shots:** shot-15
**Narration:** and pass that packet on
**Captions:** and pass that packet on
**Visible overlay layers:** elapsed, captions

**01:08.000–01:08.250 · router:** Card scales away and moves right during3.5-4.25. enter=ease(step(local,.6,1.6)),leave=ease(step(local,3.5,4.25)); x=mix(-1.6,-.4,enter)+1.7*leave;scale=enter*(1-leave),Yscale*.84;rotationY=-.16.
**Sampling:** Output frames 2040–2047.
- Foreground: Full detailed rack at[0,0,0], Router label; visible card when.6<local<4.25 shows To Los Angeles/#0847.
- Background: Terrain and blue links remain;56 background rack nodes and25 halo sprites explicitly hidden.
- Camera: eye[mix(-2.15,-1.9,ease(step(local,0,5))),2.7,6.2],look[0,2.5,0],fov46; slight lateral camera shift for entire shot.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Studio direct lights*.65; environment.16,fog#060d24 .004. Tip and moving spill hidden; no red fault.
- Continuity: No optical handoff on this source shot; dark hardware stays as card appears/disappears.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/network-shots.ts:82 update

**01:08.250–01:09.000 · router:** Card hidden; hold rack and label. enter=ease(step(local,.6,1.6)),leave=ease(step(local,3.5,4.25)); x=mix(-1.6,-.4,enter)+1.7*leave;scale=enter*(1-leave),Yscale*.84;rotationY=-.16.
**Sampling:** Output frames 2048–2069.
- Foreground: Full detailed rack at[0,0,0], Router label; visible card when.6<local<4.25 shows To Los Angeles/#0847.
- Background: Terrain and blue links remain;56 background rack nodes and25 halo sprites explicitly hidden.
- Camera: eye[mix(-2.15,-1.9,ease(step(local,0,5))),2.7,6.2],look[0,2.5,0],fov46; slight lateral camera shift for entire shot.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Studio direct lights*.65; environment.16,fog#060d24 .004. Tip and moving spill hidden; no red fault.
- Continuity: No optical handoff on this source shot; dark hardware stays as card appears/disappears.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/network-shots.ts:82 update

**Clock / handoff shot-15:** origin 64s; active local range 4.0–4.966666666666669s; reset key 64; {   "enter": false,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 2040,
    "shot": "shot-15",
    "local": 4,
    "eye": [
      -1.926,
      2.7,
      6.2
    ],
    "direction": [
      0.29652015405474147,
      -0.030791293255944097,
      -0.9545300909342663
    ],
    "quaternion": [
      -0.015223198380037611,
      -0.15001069549851714,
      -0.002310059332128488,
      0.9885644688602838
    ],
    "fov": 46,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 2069,
    "shot": "shot-15",
    "local": 4.966666666666669,
    "eye": [
      -1.900033185185185,
      2.7,
      6.2
    ],
    "direction": [
      0.2928674277076901,
      -0.030827611853436784,
      -0.9556559674565397
    ],
    "quaternion": [
      -0.015245552862749546,
      -0.14812018562518509,
      -0.0022836384832140557,
      0.9888492143514843
    ],
    "fov": 46,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 01:08.000–01:09.000. No separately asserted effect onset.

**Measured mix:** -17.332 dBFS RMS; -2.793 dBFS peak. Source samples per channel 3264000–3312000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 01:09.000–01:10.000 · frames 2070–2099

**Shots:** shot-16
**Narration:** on to a nearby router
**Captions:** and pass that packet on / to a nearby router
**Visible overlay layers:** elapsed, captions

**01:09.000–01:09.200 · network:** Native global>=69 branch: packet #0847/main reveal qPath=mix(.44,.94,ease(step(local,0,3.3))); flies into deep rack field;25 background halos circulate.
**Sampling:** Output frames 2070–2075.
- Foreground: Small packet width.69, close rack scale.73, Los Angeles label; no question or Shanghai; tip scale.6.
- Background: Undulating260x260 navy terrain,56 small cloned rack nodes and ground-following blue links; studio sky/dust.
- Camera: q=ease(step(local,0,3.3)); eye[mix(0,1.3,q),9.3,mix(19,8,q)],look[0,.2,mix(-18,-27,q)],fov51.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Studio direct lights*.65; environment.16,fog#060d24 .004. Warm point spill intensity7 follows route; no fault.
- Continuity: New scene instance begins at main fraction.44, continuing conceptual travel after router insert; native global>=69 is essential.
Optical picture incoming p=1-ease(step(local,0,.23)); scale=1+p*0.32,blur=p*9px,origin50%47%; typography stays sharp/unscaled.
- Construction source: src/index.tsx:22 SHOTS; src/network-shots.ts:82 update

**01:09.200–01:09.230 · network:** Native global>=69 branch: packet #0847/main reveal qPath=mix(.44,.94,ease(step(local,0,3.3))); flies into deep rack field;25 background halos circulate.
**Sampling:** Output frames 2076–2076.
- Foreground: Small packet width.69, close rack scale.73, Los Angeles label; no question or Shanghai; tip scale.6.
- Background: Undulating260x260 navy terrain,56 small cloned rack nodes and ground-following blue links; studio sky/dust.
- Camera: q=ease(step(local,0,3.3)); eye[mix(0,1.3,q),9.3,mix(19,8,q)],look[0,.2,mix(-18,-27,q)],fov51.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Studio direct lights*.65; environment.16,fog#060d24 .004. Warm point spill intensity7 follows route; no fault.
- Continuity: New scene instance begins at main fraction.44, continuing conceptual travel after router insert; native global>=69 is essential.
Optical picture incoming p=1-ease(step(local,0,.23)); scale=1+p*0.32,blur=p*9px,origin50%47%; typography stays sharp/unscaled.
- Construction source: src/index.tsx:22 SHOTS; src/network-shots.ts:82 update

**01:09.230–01:10.000 · network:** Native global>=69 branch: packet #0847/main reveal qPath=mix(.44,.94,ease(step(local,0,3.3))); flies into deep rack field;25 background halos circulate.
**Sampling:** Output frames 2077–2099.
- Foreground: Small packet width.69, close rack scale.73, Los Angeles label; no question or Shanghai; tip scale.6.
- Background: Undulating260x260 navy terrain,56 small cloned rack nodes and ground-following blue links; studio sky/dust.
- Camera: q=ease(step(local,0,3.3)); eye[mix(0,1.3,q),9.3,mix(19,8,q)],look[0,.2,mix(-18,-27,q)],fov51.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Studio direct lights*.65; environment.16,fog#060d24 .004. Warm point spill intensity7 follows route; no fault.
- Continuity: New scene instance begins at main fraction.44, continuing conceptual travel after router insert; native global>=69 is essential.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/network-shots.ts:82 update

**Clock / handoff shot-16:** origin 69s; active local range 0.0–0.9666666666666686s; reset key 69; {   "enter": true,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 2070,
    "shot": "shot-16",
    "local": 0,
    "eye": [
      0,
      9.3,
      19
    ],
    "direction": [
      0,
      -0.23882869224747172,
      -0.9710617157314784
    ],
    "quaternion": [
      -0.12028774723246269,
      0,
      0,
      0.9927390683687929
    ],
    "fov": 51,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 2099,
    "shot": "shot-16",
    "local": 0.9666666666666686,
    "eye": [
      0.2692970929579449,
      9.3,
      16.72133229035585
    ],
    "direction": [
      -0.007142893289316034,
      -0.24137033273852224,
      -0.9704067917884502
    ],
    "quaternion": [
      -0.1215864295006481,
      0.003652980571921724,
      0.00044747580881950976,
      0.9925740252795383
    ],
    "fov": 51,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 01:09.000–01:10.000. No separately asserted effect onset.

**Measured mix:** -15.287 dBFS RMS; -2.653 dBFS peak. Source samples per channel 3312000–3360000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 01:10.000–01:11.000 · frames 2100–2129

**Shots:** shot-16
**Narration:** router that is closer to
**Captions:** to a nearby router / that is closer
**Visible overlay layers:** elapsed, captions

**01:10.000–01:10.200 · network:** Native global>=69 branch: packet #0847/main reveal qPath=mix(.44,.94,ease(step(local,0,3.3))); flies into deep rack field;25 background halos circulate.
**Sampling:** Output frames 2100–2105.
- Foreground: Small packet width.69, close rack scale.73, Los Angeles label; no question or Shanghai; tip scale.6.
- Background: Undulating260x260 navy terrain,56 small cloned rack nodes and ground-following blue links; studio sky/dust.
- Camera: q=ease(step(local,0,3.3)); eye[mix(0,1.3,q),9.3,mix(19,8,q)],look[0,.2,mix(-18,-27,q)],fov51.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Studio direct lights*.65; environment.16,fog#060d24 .004. Warm point spill intensity7 follows route; no fault.
- Continuity: New scene instance begins at main fraction.44, continuing conceptual travel after router insert; native global>=69 is essential.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/network-shots.ts:82 update

**01:10.200–01:11.000 · network:** Native global>=69 branch: packet #0847/main reveal qPath=mix(.44,.94,ease(step(local,0,3.3))); flies into deep rack field;25 background halos circulate.
**Sampling:** Output frames 2106–2129.
- Foreground: Small packet width.69, close rack scale.73, Los Angeles label; no question or Shanghai; tip scale.6.
- Background: Undulating260x260 navy terrain,56 small cloned rack nodes and ground-following blue links; studio sky/dust.
- Camera: q=ease(step(local,0,3.3)); eye[mix(0,1.3,q),9.3,mix(19,8,q)],look[0,.2,mix(-18,-27,q)],fov51.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Studio direct lights*.65; environment.16,fog#060d24 .004. Warm point spill intensity7 follows route; no fault.
- Continuity: New scene instance begins at main fraction.44, continuing conceptual travel after router insert; native global>=69 is essential.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/network-shots.ts:82 update

**Clock / handoff shot-16:** origin 69s; active local range 1.0–1.9666666666666686s; reset key 69; {   "enter": true,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 2100,
    "shot": "shot-16",
    "local": 1,
    "eye": [
      0.28577788908367424,
      9.3,
      16.58187940006122
    ],
    "direction": [
      -0.0075849590065649,
      -0.24152717756107084,
      -0.9703644113920562
    ],
    "quaternion": [
      -0.12166653715504913,
      0.0038791804122717353,
      0.000475502599960276,
      0.9925633378244964
    ],
    "fov": 51,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 2129,
    "shot": "shot-16",
    "local": 1.9666666666666686,
    "eye": [
      0.8348238017353427,
      9.3,
      11.936106293008638
    ],
    "direction": [
      -0.02264470780848236,
      -0.24683872288839848,
      -0.9687919601705481
    ],
    "quaternion": [
      -0.12437684787882135,
      0.011593947837319147,
      0.0014534042923065504,
      0.9921662500313327
    ],
    "fov": 51,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 01:10.000–01:11.000. No separately asserted effect onset.

**Measured mix:** -16.892 dBFS RMS; -2.459 dBFS peak. Source samples per channel 3360000–3408000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 01:11.000–01:12.000 · frames 2130–2159

**Shots:** shot-16
**Narration:** to the destination.
**Captions:** to the destination.
**Visible overlay layers:** elapsed, captions

**01:11.000–01:11.667 · network:** Native global>=69 branch: packet #0847/main reveal qPath=mix(.44,.94,ease(step(local,0,3.3))); flies into deep rack field;25 background halos circulate.
**Sampling:** Output frames 2130–2150.
- Foreground: Small packet width.69, close rack scale.73, Los Angeles label; no question or Shanghai; tip scale.6.
- Background: Undulating260x260 navy terrain,56 small cloned rack nodes and ground-following blue links; studio sky/dust.
- Camera: q=ease(step(local,0,3.3)); eye[mix(0,1.3,q),9.3,mix(19,8,q)],look[0,.2,mix(-18,-27,q)],fov51.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Studio direct lights*.65; environment.16,fog#060d24 .004. Warm point spill intensity7 follows route; no fault.
- Continuity: New scene instance begins at main fraction.44, continuing conceptual travel after router insert; native global>=69 is essential.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/network-shots.ts:82 update

**01:11.667–01:12.000 · network:** Native global>=69 branch: packet #0847/main reveal qPath=mix(.44,.94,ease(step(local,0,3.3))); flies into deep rack field;25 background halos circulate.
**Sampling:** Output frames 2151–2159.
- Foreground: Small packet width.69, close rack scale.73, Los Angeles label; no question or Shanghai; tip scale.6.
- Background: Undulating260x260 navy terrain,56 small cloned rack nodes and ground-following blue links; studio sky/dust.
- Camera: q=ease(step(local,0,3.3)); eye[mix(0,1.3,q),9.3,mix(19,8,q)],look[0,.2,mix(-18,-27,q)],fov51.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Studio direct lights*.65; environment.16,fog#060d24 .004. Warm point spill intensity7 follows route; no fault.
- Continuity: New scene instance begins at main fraction.44, continuing conceptual travel after router insert; native global>=69 is essential.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/network-shots.ts:82 update

**Clock / handoff shot-16:** origin 69s; active local range 2.0–2.9666666666666686s; reset key 69; {   "enter": true,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 2130,
    "shot": "shot-16",
    "local": 2,
    "eye": [
      0.8537162256170521,
      9.3,
      11.776247321701867
    ],
    "direction": [
      -0.023174595360975384,
      -0.2470244929835427,
      -0.9687320775096068
    ],
    "quaternion": [
      -0.12447154645726204,
      0.011865722385690869,
      0.001488628901429687,
      0.9921511088230449
    ],
    "fov": 51,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 2159,
    "shot": "shot-16",
    "local": 2.9666666666666686,
    "eye": [
      1.262887728421858,
      9.3,
      8.31402691335351
    ],
    "direction": [
      -0.03484700318952698,
      -0.25109732392519385,
      -0.9673343890745927
    ],
    "quaternion": [
      -0.12654598130318923,
      0.017858333592935392,
      0.0022785908099309544,
      0.9917973596260565
    ],
    "fov": 51,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 01:11.000–01:12.000. No separately asserted effect onset.

**Measured mix:** -18.288 dBFS RMS; -3.507 dBFS peak. Source samples per channel 3408000–3456000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 01:12.000–01:13.000 · frames 2160–2189

**Shots:** shot-16, shot-17
**Narration:** If one connection
**Captions:** to the destination. / If one connection is broken
**Visible overlay layers:** elapsed, captions

**01:12.000–01:12.300 · network:** Native global>=69 branch: packet #0847/main reveal qPath=mix(.44,.94,ease(step(local,0,3.3))); flies into deep rack field;25 background halos circulate.
**Sampling:** Output frames 2160–2168.
- Foreground: Small packet width.69, close rack scale.73, Los Angeles label; no question or Shanghai; tip scale.6.
- Background: Undulating260x260 navy terrain,56 small cloned rack nodes and ground-following blue links; studio sky/dust.
- Camera: q=ease(step(local,0,3.3)); eye[mix(0,1.3,q),9.3,mix(19,8,q)],look[0,.2,mix(-18,-27,q)],fov51.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Studio direct lights*.65; environment.16,fog#060d24 .004. Warm point spill intensity7 follows route; no fault.
- Continuity: New scene instance begins at main fraction.44, continuing conceptual travel after router insert; native global>=69 is essential.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/network-shots.ts:82 update

**01:12.300–01:12.400 · reroute:** Main gold route fixed at.43. qPath=ease(step(local,1.8,3.75)); alternate reveal and packet follow qPath; packet y extra=.18*(1-qPath),z extra=1.3*(1-step(qPath,0,.15)),rotationY=.2. Packet waits at alternate origin with elevated/forward offset.
**Sampling:** Output frames 2169–2171.
- Foreground: Header packet width.69; close rack full scale; no location/question/router labels; gold tip scale.7.
- Background: Undulating260x260 navy terrain,56 small cloned rack nodes and ground-following blue links; studio sky/dust.
- Camera: qCam=ease(step(local,1.65,3.8)); eye[mix(4.2,3,qCam),mix(5.5,9,qCam),mix(9.5,15,qCam)];look[mix(.1,4,qCam),.8,mix(-2,-12,qCam)],fov51. Camera holds.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Studio direct lights*.65; environment.16,fog#060d24 .004. Red fault/blocked route hidden. Warm spill follows alternate at intensity7; blue background halos circulate.
- Continuity: Packet motion begins.15s after camera starts; red warning is gone before either move. Final optical exit starts local3.667 while traversal continues until3.75.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/network-shots.ts:82 update

**01:12.400–01:12.650 · reroute:** Main gold route fixed at.43. qPath=ease(step(local,1.8,3.75)); alternate reveal and packet follow qPath; packet y extra=.18*(1-qPath),z extra=1.3*(1-step(qPath,0,.15)),rotationY=.2. Packet waits at alternate origin with elevated/forward offset.
**Sampling:** Output frames 2172–2179.
- Foreground: Header packet width.69; close rack full scale; no location/question/router labels; gold tip scale.7.
- Background: Undulating260x260 navy terrain,56 small cloned rack nodes and ground-following blue links; studio sky/dust.
- Camera: qCam=ease(step(local,1.65,3.8)); eye[mix(4.2,3,qCam),mix(5.5,9,qCam),mix(9.5,15,qCam)];look[mix(.1,4,qCam),.8,mix(-2,-12,qCam)],fov51. Camera holds.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Studio direct lights*.65; environment.16,fog#060d24 .004. Red fault/blocked route hidden. Warm spill follows alternate at intensity7; blue background halos circulate.
- Continuity: Packet motion begins.15s after camera starts; red warning is gone before either move. Final optical exit starts local3.667 while traversal continues until3.75.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/network-shots.ts:82 update

**01:12.650–01:13.000 · reroute:** Main gold route fixed at.43. qPath=ease(step(local,1.8,3.75)); alternate reveal and packet follow qPath; packet y extra=.18*(1-qPath),z extra=1.3*(1-step(qPath,0,.15)),rotationY=.2. Packet waits at alternate origin with elevated/forward offset.
**Sampling:** Output frames 2180–2189.
- Foreground: Header packet width.69; close rack full scale; no location/question/router labels; gold tip scale.7. Red blocked route and red fault sprite at[2,h(2,-8)+.10,-8].
- Background: Undulating260x260 navy terrain,56 small cloned rack nodes and ground-following blue links; studio sky/dust.
- Camera: qCam=ease(step(local,1.65,3.8)); eye[mix(4.2,3,qCam),mix(5.5,9,qCam),mix(9.5,15,qCam)];look[mix(.1,4,qCam),.8,mix(-2,-12,qCam)],fov51. Camera holds.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Studio direct lights*.65; environment.16,fog#060d24 .004. Fault opacity 1. Warm spill follows alternate at intensity7; blue background halos circulate.
- Continuity: Packet motion begins.15s after camera starts; red warning is gone before either move. Final optical exit starts local3.667 while traversal continues until3.75.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/network-shots.ts:82 update

**Clock / handoff shot-16:** origin 69s; active local range 3.0–3.2666666666666657s; reset key 69; {   "enter": true,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }
**Clock / handoff shot-17:** origin 72.3s; active local range 0.0–0.6666666666666714s; reset key 72.3; {   "enter": false,   "exit": true,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 2160,
    "shot": "shot-16",
    "local": 3,
    "eye": [
      1.2697220135236666,
      9.3,
      8.256198347107437
    ],
    "direction": [
      -0.03504518655929934,
      -0.2511661562869168,
      -0.9673093594270036
    ],
    "quaternion": [
      -0.12658101029823526,
      0.017960181468355926,
      0.0022922348275464517,
      0.9917910190019856
    ],
    "fov": 51,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 2189,
    "shot": "shot-17",
    "local": 0.6666666666666714,
    "eye": [
      4.2,
      5.5,
      9.5
    ],
    "direction": [
      -0.31339741141518895,
      -0.3592604472320458,
      -0.8790415198230908
    ],
    "quaternion": [
      -0.1800334823263255,
      0.1675326395957256,
      0.031133192914504147,
      0.9687886684981888
    ],
    "fov": 51,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 01:12.000–01:13.000. No separately asserted effect onset.

**Measured mix:** -17.217 dBFS RMS; -3.284 dBFS peak. Source samples per channel 3456000–3504000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 01:13.000–01:14.000 · frames 2190–2219

**Shots:** shot-17
**Narration:** connection is broken, the router
**Captions:** If one connection is broken / the router sends the packet
**Visible overlay layers:** elapsed, captions

**01:13.000–01:13.400 · reroute:** Main gold route fixed at.43. qPath=ease(step(local,1.8,3.75)); alternate reveal and packet follow qPath; packet y extra=.18*(1-qPath),z extra=1.3*(1-step(qPath,0,.15)),rotationY=.2. Packet waits at alternate origin with elevated/forward offset.
**Sampling:** Output frames 2190–2201.
- Foreground: Header packet width.69; close rack full scale; no location/question/router labels; gold tip scale.7. Red blocked route and red fault sprite at[2,h(2,-8)+.10,-8].
- Background: Undulating260x260 navy terrain,56 small cloned rack nodes and ground-following blue links; studio sky/dust.
- Camera: qCam=ease(step(local,1.65,3.8)); eye[mix(4.2,3,qCam),mix(5.5,9,qCam),mix(9.5,15,qCam)];look[mix(.1,4,qCam),.8,mix(-2,-12,qCam)],fov51. Camera holds.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Studio direct lights*.65; environment.16,fog#060d24 .004. Fault opacity 1. Warm spill follows alternate at intensity7; blue background halos circulate.
- Continuity: Packet motion begins.15s after camera starts; red warning is gone before either move. Final optical exit starts local3.667 while traversal continues until3.75.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/network-shots.ts:82 update

**01:13.400–01:13.667 · reroute:** Main gold route fixed at.43. qPath=ease(step(local,1.8,3.75)); alternate reveal and packet follow qPath; packet y extra=.18*(1-qPath),z extra=1.3*(1-step(qPath,0,.15)),rotationY=.2. Packet waits at alternate origin with elevated/forward offset.
**Sampling:** Output frames 2202–2210.
- Foreground: Header packet width.69; close rack full scale; no location/question/router labels; gold tip scale.7. Red blocked route and red fault sprite at[2,h(2,-8)+.10,-8].
- Background: Undulating260x260 navy terrain,56 small cloned rack nodes and ground-following blue links; studio sky/dust.
- Camera: qCam=ease(step(local,1.65,3.8)); eye[mix(4.2,3,qCam),mix(5.5,9,qCam),mix(9.5,15,qCam)];look[mix(.1,4,qCam),.8,mix(-2,-12,qCam)],fov51. Camera holds.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Studio direct lights*.65; environment.16,fog#060d24 .004. Fault opacity fades1-step(local,1.1,1.5). Warm spill follows alternate at intensity7; blue background halos circulate.
- Continuity: Packet motion begins.15s after camera starts; red warning is gone before either move. Final optical exit starts local3.667 while traversal continues until3.75.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/network-shots.ts:82 update

**01:13.667–01:13.700 · reroute:** Main gold route fixed at.43. qPath=ease(step(local,1.8,3.75)); alternate reveal and packet follow qPath; packet y extra=.18*(1-qPath),z extra=1.3*(1-step(qPath,0,.15)),rotationY=.2. Packet waits at alternate origin with elevated/forward offset.
**Sampling:** Source-formula interval between sampled output frames; no additional frame displays this interval.
- Foreground: Header packet width.69; close rack full scale; no location/question/router labels; gold tip scale.7. Red blocked route and red fault sprite at[2,h(2,-8)+.10,-8].
- Background: Undulating260x260 navy terrain,56 small cloned rack nodes and ground-following blue links; studio sky/dust.
- Camera: qCam=ease(step(local,1.65,3.8)); eye[mix(4.2,3,qCam),mix(5.5,9,qCam),mix(9.5,15,qCam)];look[mix(.1,4,qCam),.8,mix(-2,-12,qCam)],fov51. Camera holds.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Studio direct lights*.65; environment.16,fog#060d24 .004. Fault opacity fades1-step(local,1.1,1.5). Warm spill follows alternate at intensity7; blue background halos circulate.
- Continuity: Packet motion begins.15s after camera starts; red warning is gone before either move. Final optical exit starts local3.667 while traversal continues until3.75.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/network-shots.ts:82 update

**01:13.700–01:13.800 · reroute:** Main gold route fixed at.43. qPath=ease(step(local,1.8,3.75)); alternate reveal and packet follow qPath; packet y extra=.18*(1-qPath),z extra=1.3*(1-step(qPath,0,.15)),rotationY=.2. Packet waits at alternate origin with elevated/forward offset.
**Sampling:** Output frames 2211–2213.
- Foreground: Header packet width.69; close rack full scale; no location/question/router labels; gold tip scale.7. Red blocked route and red fault sprite at[2,h(2,-8)+.10,-8].
- Background: Undulating260x260 navy terrain,56 small cloned rack nodes and ground-following blue links; studio sky/dust.
- Camera: qCam=ease(step(local,1.65,3.8)); eye[mix(4.2,3,qCam),mix(5.5,9,qCam),mix(9.5,15,qCam)];look[mix(.1,4,qCam),.8,mix(-2,-12,qCam)],fov51. Camera holds.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Studio direct lights*.65; environment.16,fog#060d24 .004. Fault opacity fades1-step(local,1.1,1.5). Warm spill follows alternate at intensity7; blue background halos circulate.
- Continuity: Packet motion begins.15s after camera starts; red warning is gone before either move. Final optical exit starts local3.667 while traversal continues until3.75.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/network-shots.ts:82 update

**01:13.800–01:13.950 · reroute:** Main gold route fixed at.43. qPath=ease(step(local,1.8,3.75)); alternate reveal and packet follow qPath; packet y extra=.18*(1-qPath),z extra=1.3*(1-step(qPath,0,.15)),rotationY=.2. Packet waits at alternate origin with elevated/forward offset.
**Sampling:** Output frames 2214–2218.
- Foreground: Header packet width.69; close rack full scale; no location/question/router labels; gold tip scale.7.
- Background: Undulating260x260 navy terrain,56 small cloned rack nodes and ground-following blue links; studio sky/dust.
- Camera: qCam=ease(step(local,1.65,3.8)); eye[mix(4.2,3,qCam),mix(5.5,9,qCam),mix(9.5,15,qCam)];look[mix(.1,4,qCam),.8,mix(-2,-12,qCam)],fov51. Camera holds.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Studio direct lights*.65; environment.16,fog#060d24 .004. Red fault/blocked route hidden. Warm spill follows alternate at intensity7; blue background halos circulate.
- Continuity: Packet motion begins.15s after camera starts; red warning is gone before either move. Final optical exit starts local3.667 while traversal continues until3.75.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/network-shots.ts:82 update

**01:13.950–01:14.000 · reroute:** Main gold route fixed at.43. qPath=ease(step(local,1.8,3.75)); alternate reveal and packet follow qPath; packet y extra=.18*(1-qPath),z extra=1.3*(1-step(qPath,0,.15)),rotationY=.2. Packet waits at alternate origin with elevated/forward offset.
**Sampling:** Output frames 2219–2219.
- Foreground: Header packet width.69; close rack full scale; no location/question/router labels; gold tip scale.7.
- Background: Undulating260x260 navy terrain,56 small cloned rack nodes and ground-following blue links; studio sky/dust.
- Camera: qCam=ease(step(local,1.65,3.8)); eye[mix(4.2,3,qCam),mix(5.5,9,qCam),mix(9.5,15,qCam)];look[mix(.1,4,qCam),.8,mix(-2,-12,qCam)],fov51. Camera rises/backs away and tracks alternate branch.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Studio direct lights*.65; environment.16,fog#060d24 .004. Red fault/blocked route hidden. Warm spill follows alternate at intensity7; blue background halos circulate.
- Continuity: Packet motion begins.15s after camera starts; red warning is gone before either move. Final optical exit starts local3.667 while traversal continues until3.75.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/network-shots.ts:82 update

**Clock / handoff shot-17:** origin 72.3s; active local range 0.7000000000000028–1.6666666666666714s; reset key 72.3; {   "enter": false,   "exit": true,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 2190,
    "shot": "shot-17",
    "local": 0.7000000000000028,
    "eye": [
      4.2,
      5.5,
      9.5
    ],
    "direction": [
      -0.31339741141518895,
      -0.3592604472320458,
      -0.8790415198230908
    ],
    "quaternion": [
      -0.1800334823263255,
      0.1675326395957256,
      0.031133192914504147,
      0.9687886684981888
    ],
    "fov": 51,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 2219,
    "shot": "shot-17",
    "local": 1.6666666666666714,
    "eye": [
      4.199784784847735,
      5.500627710860773,
      9.500986402781214
    ],
    "direction": [
      -0.31327044250836605,
      -0.35924300239820783,
      -0.8790939057225535
    ],
    "quaternion": [
      -0.18002671535649345,
      0.16746172367641304,
      0.03111839514560462,
      0.9688026622304663
    ],
    "fov": 51,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 01:13.000–01:14.000. No separately asserted effect onset.

**Measured mix:** -15.899 dBFS RMS; -2.25 dBFS peak. Source samples per channel 3504000–3552000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 01:14.000–01:15.000 · frames 2220–2249

**Shots:** shot-17
**Narration:** router sends the packet through a
**Captions:** the router sends the packet / through a different connection.
**Visible overlay layers:** elapsed, captions

**01:14.000–01:14.100 · reroute:** Main gold route fixed at.43. qPath=ease(step(local,1.8,3.75)); alternate reveal and packet follow qPath; packet y extra=.18*(1-qPath),z extra=1.3*(1-step(qPath,0,.15)),rotationY=.2. Packet waits at alternate origin with elevated/forward offset.
**Sampling:** Output frames 2220–2222.
- Foreground: Header packet width.69; close rack full scale; no location/question/router labels; gold tip scale.7.
- Background: Undulating260x260 navy terrain,56 small cloned rack nodes and ground-following blue links; studio sky/dust.
- Camera: qCam=ease(step(local,1.65,3.8)); eye[mix(4.2,3,qCam),mix(5.5,9,qCam),mix(9.5,15,qCam)];look[mix(.1,4,qCam),.8,mix(-2,-12,qCam)],fov51. Camera rises/backs away and tracks alternate branch.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Studio direct lights*.65; environment.16,fog#060d24 .004. Red fault/blocked route hidden. Warm spill follows alternate at intensity7; blue background halos circulate.
- Continuity: Packet motion begins.15s after camera starts; red warning is gone before either move. Final optical exit starts local3.667 while traversal continues until3.75.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/network-shots.ts:82 update

**01:14.100–01:14.577 · reroute:** Main gold route fixed at.43. qPath=ease(step(local,1.8,3.75)); alternate reveal and packet follow qPath; packet y extra=.18*(1-qPath),z extra=1.3*(1-step(qPath,0,.15)),rotationY=.2. Packet travels alternate branch.
**Sampling:** Output frames 2223–2237.
- Foreground: Header packet width.69; close rack full scale; no location/question/router labels; gold tip scale.7.
- Background: Undulating260x260 navy terrain,56 small cloned rack nodes and ground-following blue links; studio sky/dust.
- Camera: qCam=ease(step(local,1.65,3.8)); eye[mix(4.2,3,qCam),mix(5.5,9,qCam),mix(9.5,15,qCam)];look[mix(.1,4,qCam),.8,mix(-2,-12,qCam)],fov51. Camera rises/backs away and tracks alternate branch.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Studio direct lights*.65; environment.16,fog#060d24 .004. Red fault/blocked route hidden. Warm spill follows alternate at intensity7; blue background halos circulate.
- Continuity: Packet motion begins.15s after camera starts; red warning is gone before either move. Final optical exit starts local3.667 while traversal continues until3.75.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/network-shots.ts:82 update

**01:14.577–01:14.800 · reroute:** Main gold route fixed at.43. qPath=ease(step(local,1.8,3.75)); alternate reveal and packet follow qPath; packet y extra=.18*(1-qPath),z extra=1.3*(1-step(qPath,0,.15)),rotationY=.2. Packet travels alternate branch.
**Sampling:** Output frames 2238–2243.
- Foreground: Header packet width.69; close rack full scale; no location/question/router labels; gold tip scale.7.
- Background: Undulating260x260 navy terrain,56 small cloned rack nodes and ground-following blue links; studio sky/dust.
- Camera: qCam=ease(step(local,1.65,3.8)); eye[mix(4.2,3,qCam),mix(5.5,9,qCam),mix(9.5,15,qCam)];look[mix(.1,4,qCam),.8,mix(-2,-12,qCam)],fov51. Camera rises/backs away and tracks alternate branch.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Studio direct lights*.65; environment.16,fog#060d24 .004. Red fault/blocked route hidden. Warm spill follows alternate at intensity7; blue background halos circulate.
- Continuity: Packet motion begins.15s after camera starts; red warning is gone before either move. Final optical exit starts local3.667 while traversal continues until3.75.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/network-shots.ts:82 update

**01:14.800–01:15.000 · reroute:** Main gold route fixed at.43. qPath=ease(step(local,1.8,3.75)); alternate reveal and packet follow qPath; packet y extra=.18*(1-qPath),z extra=1.3*(1-step(qPath,0,.15)),rotationY=.2. Packet travels alternate branch.
**Sampling:** Output frames 2244–2249.
- Foreground: Header packet width.69; close rack full scale; no location/question/router labels; gold tip scale.7.
- Background: Undulating260x260 navy terrain,56 small cloned rack nodes and ground-following blue links; studio sky/dust.
- Camera: qCam=ease(step(local,1.65,3.8)); eye[mix(4.2,3,qCam),mix(5.5,9,qCam),mix(9.5,15,qCam)];look[mix(.1,4,qCam),.8,mix(-2,-12,qCam)],fov51. Camera rises/backs away and tracks alternate branch.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Studio direct lights*.65; environment.16,fog#060d24 .004. Red fault/blocked route hidden. Warm spill follows alternate at intensity7; blue background halos circulate.
- Continuity: Packet motion begins.15s after camera starts; red warning is gone before either move. Final optical exit starts local3.667 while traversal continues until3.75.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/network-shots.ts:82 update

**Clock / handoff shot-17:** origin 72.3s; active local range 1.7000000000000028–2.6666666666666714s; reset key 72.3; {   "enter": false,   "exit": true,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 2220,
    "shot": "shot-17",
    "local": 1.7000000000000028,
    "eye": [
      4.198083187643856,
      5.5055907027054225,
      9.508785389965665
    ],
    "direction": [
      -0.31226797927030875,
      -0.35910505665815595,
      -0.879506831926268
    ],
    "quaternion": [
      -0.17997313193779943,
      0.16690193473224157,
      0.03100161241445949,
      0.9689129558380556
    ],
    "fov": 51,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 2249,
    "shot": "shot-17",
    "local": 2.6666666666666714,
    "eye": [
      3.648789275018408,
      7.107697947862977,
      12.026382489498964
    ],
    "direction": [
      -0.08903591273855913,
      -0.31957790531609853,
      -0.9433676741740659
    ],
    "quaternion": [
      -0.1617466986914248,
      0.04641301945998049,
      0.007615978713320931,
      0.9857108267414287
    ],
    "fov": 51,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 01:14.000–01:15.000. No separately asserted effect onset.

**Measured mix:** -16.805 dBFS RMS; -2.473 dBFS peak. Source samples per channel 3552000–3600000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 01:15.000–01:16.000 · frames 2250–2279

**Shots:** shot-17
**Narration:** a different connection.
**Captions:** through a different connection.
**Visible overlay layers:** elapsed, captions

**01:15.000–01:15.333 · reroute:** Main gold route fixed at.43. qPath=ease(step(local,1.8,3.75)); alternate reveal and packet follow qPath; packet y extra=.18*(1-qPath),z extra=1.3*(1-step(qPath,0,.15)),rotationY=.2. Packet travels alternate branch.
**Sampling:** Output frames 2250–2259.
- Foreground: Header packet width.69; close rack full scale; no location/question/router labels; gold tip scale.7.
- Background: Undulating260x260 navy terrain,56 small cloned rack nodes and ground-following blue links; studio sky/dust.
- Camera: qCam=ease(step(local,1.65,3.8)); eye[mix(4.2,3,qCam),mix(5.5,9,qCam),mix(9.5,15,qCam)];look[mix(.1,4,qCam),.8,mix(-2,-12,qCam)],fov51. Camera rises/backs away and tracks alternate branch.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Studio direct lights*.65; environment.16,fog#060d24 .004. Red fault/blocked route hidden. Warm spill follows alternate at intensity7; blue background halos circulate.
- Continuity: Packet motion begins.15s after camera starts; red warning is gone before either move. Final optical exit starts local3.667 while traversal continues until3.75.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/network-shots.ts:82 update

**01:15.333–01:15.967 · reroute:** Main gold route fixed at.43. qPath=ease(step(local,1.8,3.75)); alternate reveal and packet follow qPath; packet y extra=.18*(1-qPath),z extra=1.3*(1-step(qPath,0,.15)),rotationY=.2. Packet travels alternate branch.
**Sampling:** Output frames 2260–2279.
- Foreground: Header packet width.69; close rack full scale; no location/question/router labels; gold tip scale.7.
- Background: Undulating260x260 navy terrain,56 small cloned rack nodes and ground-following blue links; studio sky/dust.
- Camera: qCam=ease(step(local,1.65,3.8)); eye[mix(4.2,3,qCam),mix(5.5,9,qCam),mix(9.5,15,qCam)];look[mix(.1,4,qCam),.8,mix(-2,-12,qCam)],fov51. Camera rises/backs away and tracks alternate branch.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Studio direct lights*.65; environment.16,fog#060d24 .004. Red fault/blocked route hidden. Warm spill follows alternate at intensity7; blue background halos circulate.
- Continuity: Packet motion begins.15s after camera starts; red warning is gone before either move. Final optical exit starts local3.667 while traversal continues until3.75.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/network-shots.ts:82 update

**01:15.967–01:16.000 · reroute:** Main gold route fixed at.43. qPath=ease(step(local,1.8,3.75)); alternate reveal and packet follow qPath; packet y extra=.18*(1-qPath),z extra=1.3*(1-step(qPath,0,.15)),rotationY=.2. Packet travels alternate branch.
**Sampling:** Source-formula interval between sampled output frames; no additional frame displays this interval.
- Foreground: Header packet width.69; close rack full scale; no location/question/router labels; gold tip scale.7.
- Background: Undulating260x260 navy terrain,56 small cloned rack nodes and ground-following blue links; studio sky/dust.
- Camera: qCam=ease(step(local,1.65,3.8)); eye[mix(4.2,3,qCam),mix(5.5,9,qCam),mix(9.5,15,qCam)];look[mix(.1,4,qCam),.8,mix(-2,-12,qCam)],fov51. Camera rises/backs away and tracks alternate branch.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Studio direct lights*.65; environment.16,fog#060d24 .004. Red fault/blocked route hidden. Warm spill follows alternate at intensity7; blue background halos circulate.
- Continuity: Packet motion begins.15s after camera starts; red warning is gone before either move. Final optical exit starts local3.667 while traversal continues until3.75.
Optical picture outgoing p=ease(step(local,duration-.2,duration)); scale=1+p*0.32,blur=p*9px,origin50%47%; typography stays sharp/unscaled.
- Construction source: src/index.tsx:22 SHOTS; src/network-shots.ts:82 update

**Clock / handoff shot-17:** origin 72.3s; active local range 2.700000000000003–3.6666666666666714s; reset key 72.3; {   "enter": false,   "exit": true,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 2250,
    "shot": "shot-17",
    "local": 2.700000000000003,
    "eye": [
      3.6209264593054673,
      7.188964493692387,
      12.154087061516607
    ],
    "direction": [
      -0.08156704364822688,
      -0.3179675618936561,
      -0.9445863893651508
    ],
    "quaternion": [
      -0.16093818332309287,
      0.04249360500224901,
      0.006935771743673811,
      0.9860248930695893
    ],
    "fov": 51,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 2279,
    "shot": "shot-17",
    "local": 3.6666666666666714,
    "eye": [
      3.0132729053905796,
      8.961287359277476,
      14.939165850293177
    ],
    "direction": [
      0.03362961986159502,
      -0.29086885960585274,
      -0.9561717184583297
    ],
    "quaternion": [
      -0.14700971066162985,
      -0.017386366555983312,
      -0.002584448290696146,
      0.9889788571330521
    ],
    "fov": 51,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 01:15.000–01:16.000. No separately asserted effect onset.

**Measured mix:** -19.343 dBFS RMS; -4.972 dBFS peak. Source samples per channel 3600000–3648000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 01:16.000–01:17.000 · frames 2280–2309

**Shots:** shot-17, shot-18
**Narration:** At 20 milliseconds,
**Captions:** through a different connection. / At 20 milliseconds,
**Visible overlay layers:** elapsed, captions

**01:16.167–01:16.397 · landing:** Enter Shanghai landing facility with optical scale/blur settling; start bright signal at foreground cable.
**Sampling:** Output frames 2286–2291.
- Foreground: Landing building,louvers,vent cabinet and curved cable.
- Background: Shanghai skyline,water and chain fence.
- Camera: eye[.3-.12t,7.3,19-.65t],look[-.8,1,-8],fov48.
- Light: Cool pole light170,warm wall120;signal point45 over metallic cable.
- Continuity: Cut to earlier marine seabed track at79.333; no shared numeric position between worlds.
- Evaluated recipe sample: {   "native": 76.282,   "local": 0.115,   "path_arc_fraction": 0.0038527,   "eye": [     0.2862,     7.3,     18.92525   ],   "pulse_position": [     -0.9916936,     0.17,     19.6457463   ] }
- Construction source: src/infrastructure.ts:26-49

**01:16.397–01:17.000 · landing:** Pulse advances along cable toward the facility; overhead view keeps foreground run and building legible.
**Sampling:** Output frames 2292–2309.
- Foreground: Landing building,louvers,vent cabinet and curved cable.
- Background: Shanghai skyline,water and chain fence.
- Camera: eye[.3-.12t,7.3,19-.65t],look[-.8,1,-8],fov48.
- Light: Cool pole light170,warm wall120;signal point45 over metallic cable.
- Continuity: Cut to earlier marine seabed track at79.333; no shared numeric position between worlds.
- Evaluated recipe sample: {   "native": 76.6985,   "local": 0.5315,   "path_arc_fraction": 0.0749085,   "eye": [     0.23622,     7.3,     18.654525   ],   "pulse_position": [     -0.7105458,     0.17,     13.1087041   ] }
- Construction source: src/infrastructure.ts:26-49

**01:16.000–01:16.050 · reroute:** Main gold route fixed at.43. qPath=ease(step(local,1.8,3.75)); alternate reveal and packet follow qPath; packet y extra=.18*(1-qPath),z extra=1.3*(1-step(qPath,0,.15)),rotationY=.2. Packet travels alternate branch.
**Sampling:** Output frames 2280–2281.
- Foreground: Header packet width.69; close rack full scale; no location/question/router labels; gold tip scale.7.
- Background: Undulating260x260 navy terrain,56 small cloned rack nodes and ground-following blue links; studio sky/dust.
- Camera: qCam=ease(step(local,1.65,3.8)); eye[mix(4.2,3,qCam),mix(5.5,9,qCam),mix(9.5,15,qCam)];look[mix(.1,4,qCam),.8,mix(-2,-12,qCam)],fov51. Camera rises/backs away and tracks alternate branch.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Studio direct lights*.65; environment.16,fog#060d24 .004. Red fault/blocked route hidden. Warm spill follows alternate at intensity7; blue background halos circulate.
- Continuity: Packet motion begins.15s after camera starts; red warning is gone before either move. Final optical exit starts local3.667 while traversal continues until3.75.
Optical picture outgoing p=ease(step(local,duration-.2,duration)); scale=1+p*0.32,blur=p*9px,origin50%47%; typography stays sharp/unscaled.
- Construction source: src/index.tsx:22 SHOTS; src/network-shots.ts:82 update

**01:16.050–01:16.100 · reroute:** Main gold route fixed at.43. qPath=ease(step(local,1.8,3.75)); alternate reveal and packet follow qPath; packet y extra=.18*(1-qPath),z extra=1.3*(1-step(qPath,0,.15)),rotationY=.2. Packet at alternate endpoint; hold.
**Sampling:** Output frames 2282–2282.
- Foreground: Header packet width.69; close rack full scale; no location/question/router labels; gold tip scale.7.
- Background: Undulating260x260 navy terrain,56 small cloned rack nodes and ground-following blue links; studio sky/dust.
- Camera: qCam=ease(step(local,1.65,3.8)); eye[mix(4.2,3,qCam),mix(5.5,9,qCam),mix(9.5,15,qCam)];look[mix(.1,4,qCam),.8,mix(-2,-12,qCam)],fov51. Camera rises/backs away and tracks alternate branch.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Studio direct lights*.65; environment.16,fog#060d24 .004. Red fault/blocked route hidden. Warm spill follows alternate at intensity7; blue background halos circulate.
- Continuity: Packet motion begins.15s after camera starts; red warning is gone before either move. Final optical exit starts local3.667 while traversal continues until3.75.
Optical picture outgoing p=ease(step(local,duration-.2,duration)); scale=1+p*0.32,blur=p*9px,origin50%47%; typography stays sharp/unscaled.
- Construction source: src/index.tsx:22 SHOTS; src/network-shots.ts:82 update

**01:16.100–01:16.167 · reroute:** Main gold route fixed at.43. qPath=ease(step(local,1.8,3.75)); alternate reveal and packet follow qPath; packet y extra=.18*(1-qPath),z extra=1.3*(1-step(qPath,0,.15)),rotationY=.2. Packet at alternate endpoint; hold.
**Sampling:** Output frames 2283–2285.
- Foreground: Header packet width.69; close rack full scale; no location/question/router labels; gold tip scale.7.
- Background: Undulating260x260 navy terrain,56 small cloned rack nodes and ground-following blue links; studio sky/dust.
- Camera: qCam=ease(step(local,1.65,3.8)); eye[mix(4.2,3,qCam),mix(5.5,9,qCam),mix(9.5,15,qCam)];look[mix(.1,4,qCam),.8,mix(-2,-12,qCam)],fov51. Camera settled.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Studio direct lights*.65; environment.16,fog#060d24 .004. Red fault/blocked route hidden. Warm spill follows alternate at intensity7; blue background halos circulate.
- Continuity: Packet motion begins.15s after camera starts; red warning is gone before either move. Final optical exit starts local3.667 while traversal continues until3.75.
Optical picture outgoing p=ease(step(local,duration-.2,duration)); scale=1+p*0.32,blur=p*9px,origin50%47%; typography stays sharp/unscaled.
- Construction source: src/index.tsx:22 SHOTS; src/network-shots.ts:82 update

**Clock / handoff shot-17:** origin 72.3s; active local range 3.700000000000003–3.8666666666666742s; reset key 72.3; {   "enter": false,   "exit": true,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }
**Clock / handoff shot-18:** origin 76.167s; active local range 0.03300000000000125–0.799666666666667s; reset key 76.167; {   "enter": true,   "exit": true,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 2280,
    "shot": "shot-17",
    "local": 3.700000000000003,
    "eye": [
      3.0075465053391524,
      8.977989359427474,
      14.965411850528886
    ],
    "direction": [
      0.03440331066273861,
      -0.2906725467132492,
      -0.9562038918571067
    ],
    "quaternion": [
      -0.14690719753937254,
      -0.017785651030381502,
      -0.0026419362203887924,
      0.9889868381841899
    ],
    "fov": 51,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 2309,
    "shot": "shot-18",
    "local": 0.799666666666667,
    "eye": [
      0.20403999999999994,
      7.3,
      18.480216666666667
    ],
    "direction": [
      -0.036861952738855334,
      -0.23129586695230125,
      -0.9721848684129278
    ],
    "quaternion": [
      -0.11641908523595533,
      0.01881920259627035,
      0.002206315716849453,
      0.9930194189326921
    ],
    "fov": 48,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 01:16.000–01:17.000. No separately asserted effect onset.

**Measured mix:** -17.787 dBFS RMS; -3.385 dBFS peak. Source samples per channel 3648000–3696000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 01:17.000–01:18.000 · frames 2310–2339

**Shots:** shot-18
**Narration:** the light enters
**Captions:** At 20 milliseconds, / the light enters a cable
**Visible overlay layers:** elapsed, captions

**01:17.000–01:17.167 · landing:** Pulse advances along cable toward the facility; overhead view keeps foreground run and building legible.
**Sampling:** Output frames 2310–2315.
- Foreground: Landing building,louvers,vent cabinet and curved cable.
- Background: Shanghai skyline,water and chain fence.
- Camera: eye[.3-.12t,7.3,19-.65t],look[-.8,1,-8],fov48.
- Light: Cool pole light170,warm wall120;signal point45 over metallic cable.
- Continuity: Cut to earlier marine seabed track at79.333; no shared numeric position between worlds.
- Evaluated recipe sample: {   "native": 77.0835,   "local": 0.9165,   "path_arc_fraction": 0.2024318,   "eye": [     0.19002,     7.3,     18.404275   ],   "pulse_position": [     -3.0331368,     1.6453396,     2.2685571   ] }
- Construction source: src/infrastructure.ts:26-49

**01:17.167–01:18.000 · landing:** Eased signal moves through the facility route and turns toward shoreline; camera continues slow forward drift.
**Sampling:** Output frames 2316–2339.
- Foreground: Landing building,louvers,vent cabinet and curved cable.
- Background: Shanghai skyline,water and chain fence.
- Camera: eye[.3-.12t,7.3,19-.65t],look[-.8,1,-8],fov48.
- Light: Cool pole light170,warm wall120;signal point45 over metallic cable.
- Continuity: Cut to earlier marine seabed track at79.333; no shared numeric position between worlds.
- Evaluated recipe sample: {   "native": 77.5835,   "local": 1.4165,   "path_arc_fraction": 0.4205685,   "eye": [     0.13002,     7.3,     18.079275   ],   "pulse_position": [     -0.0620675,     -0.5506241,     -16.6586985   ] }
- Construction source: src/infrastructure.ts:26-49

**Clock / handoff shot-18:** origin 76.167s; active local range 0.8329999999999984–1.799666666666667s; reset key 76.167; {   "enter": true,   "exit": true,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 2310,
    "shot": "shot-18",
    "local": 0.8329999999999984,
    "eye": [
      0.2000400000000002,
      7.3,
      18.458550000000002
    ],
    "direction": [
      -0.0367437114846934,
      -0.23147612330863593,
      -0.9721464416456683
    ],
    "quaternion": [
      -0.11651121256989805,
      0.01875943822873899,
      0.0022010709172702266,
      0.9930097563013424
    ],
    "fov": 48,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 2339,
    "shot": "shot-18",
    "local": 1.799666666666667,
    "eye": [
      0.08403999999999995,
      7.3,
      17.830216666666665
    ],
    "direction": [
      -0.033231965347107144,
      -0.23682342618747454,
      -0.9709841920896521
    ],
    "quaternion": [
      -0.11924547928180611,
      0.01698292159866151,
      0.002039992977586835,
      0.9927174494655957
    ],
    "fov": 48,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 01:17.000–01:18.000. No separately asserted effect onset.

**Measured mix:** -18.181 dBFS RMS; -2.594 dBFS peak. Source samples per channel 3696000–3744000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.

**Measured candidate cue (identity unconfirmed):** id: measured-transient-3
timeSeconds: 77.23
nearestVideoFrame: 2317
onsetResolutionSeconds: 0.011609977324263039
description: Low-frequency short transient with a tail
centroidHz: 185
estimatedDurationSeconds: 0.163
speechMaskActive: False
coincidentVisualBeats: landing-069
relationship: Temporal coexistence with these visual actions; causation or intended synchronization is not asserted.
identityStatus: Acoustic measurement; effect identity unconfirmed. This can include music/speech attacks.

### 01:18.000–01:19.000 · frames 2340–2369

**Shots:** shot-18
**Narration:** enters a cable that runs
**Captions:** the light enters a cable / that runs along the bottom
**Visible overlay layers:** elapsed, captions

**01:18.000–01:18.167 · landing:** Eased signal moves through the facility route and turns toward shoreline; camera continues slow forward drift.
**Sampling:** Output frames 2340–2345.
- Foreground: Landing building,louvers,vent cabinet and curved cable.
- Background: Shanghai skyline,water and chain fence.
- Camera: eye[.3-.12t,7.3,19-.65t],look[-.8,1,-8],fov48.
- Light: Cool pole light170,warm wall120;signal point45 over metallic cable.
- Continuity: Cut to earlier marine seabed track at79.333; no shared numeric position between worlds.
- Evaluated recipe sample: {   "native": 78.0835,   "local": 1.9165,   "path_arc_fraction": 0.654574,   "eye": [     0.07002,     7.3,     17.754275   ],   "pulse_position": [     0.217055,     -0.8212694,     -38.196578   ] }
- Construction source: src/infrastructure.ts:26-49

**01:18.167–01:19.000 · landing:** Signal travels offshore along the continuous cable, city skyline behind the landing hardware.
**Sampling:** Output frames 2346–2369.
- Foreground: Landing building,louvers,vent cabinet and curved cable.
- Background: Shanghai skyline,water and chain fence.
- Camera: eye[.3-.12t,7.3,19-.65t],look[-.8,1,-8],fov48.
- Light: Cool pole light170,warm wall120;signal point45 over metallic cable.
- Continuity: Cut to earlier marine seabed track at79.333; no shared numeric position between worlds.
- Evaluated recipe sample: {   "native": 78.5835,   "local": 2.4165,   "path_arc_fraction": 0.8573599,   "eye": [     0.01002,     7.3,     17.429275   ],   "pulse_position": [     0.0670827,     -0.7938716,     -56.8683899   ] }
- Construction source: src/infrastructure.ts:26-49

**Clock / handoff shot-18:** origin 76.167s; active local range 1.8329999999999984–2.799666666666667s; reset key 76.167; {   "enter": true,   "exit": true,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 2340,
    "shot": "shot-18",
    "local": 1.8329999999999984,
    "eye": [
      0.0800400000000002,
      7.3,
      17.80855
    ],
    "direction": [
      -0.033107948907062396,
      -0.2370120427645255,
      -0.97094240576038
    ],
    "quaternion": [
      -0.11934197223955495,
      0.016920129484828673,
      0.0020341165609535057,
      0.9927069382501598
    ],
    "fov": 48,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 2369,
    "shot": "shot-18",
    "local": 2.799666666666667,
    "eye": [
      -0.03596000000000005,
      7.3,
      17.180216666666666
    ],
    "direction": [
      -0.029422801343175875,
      -0.24260987443328624,
      -0.9696776513814191
    ],
    "quaternion": [
      -0.12220718743506402,
      0.015052496420911266,
      0.001853631744744976,
      0.9923887291480413
    ],
    "fov": 48,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 01:18.000–01:19.000. No separately asserted effect onset.

**Measured mix:** -16.809 dBFS RMS; -2.573 dBFS peak. Source samples per channel 3744000–3792000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 01:19.000–01:20.000 · frames 2370–2399

**Shots:** shot-18, shot-19
**Narration:** runs along the bottom of the
**Captions:** that runs along the bottom / of the Pacific.
**Visible overlay layers:** elapsed, captions

**01:19.000–01:19.133 · landing:** Signal travels offshore along the continuous cable, city skyline behind the landing hardware.
**Sampling:** Output frames 2370–2373.
- Foreground: Landing building,louvers,vent cabinet and curved cable.
- Background: Shanghai skyline,water and chain fence.
- Camera: eye[.3-.12t,7.3,19-.65t],look[-.8,1,-8],fov48.
- Light: Cool pole light170,warm wall120;signal point45 over metallic cable.
- Continuity: Cut to earlier marine seabed track at79.333; no shared numeric position between worlds.
- Evaluated recipe sample: {   "native": 79.0665,   "local": 2.8995,   "path_arc_fraction": 0.9793984,   "eye": [     -0.04794,     7.3,     17.115325   ],   "pulse_position": [     0.0019641,     -0.7940146,     -68.1059749   ] }
- Construction source: src/infrastructure.ts:26-49

**01:19.133–01:19.333 · landing:** Outgoing optical scale/blur grows while route continues offshore; route3.17s endpoint is just beyond shot cut.
**Sampling:** Output frames 2374–2379.
- Foreground: Landing building,louvers,vent cabinet and curved cable.
- Background: Shanghai skyline,water and chain fence.
- Camera: eye[.3-.12t,7.3,19-.65t],look[-.8,1,-8],fov48.
- Light: Cool pole light170,warm wall120;signal point45 over metallic cable.
- Continuity: Cut to earlier marine seabed track at79.333; no shared numeric position between worlds.
- Evaluated recipe sample: {   "native": 79.233,   "local": 3.066,   "path_arc_fraction": 0.9968416,   "eye": [     -0.06792,     7.3,     17.0071   ],   "pulse_position": [     4.76e-05,     -0.7989273,     -69.7128981   ] }
- Construction source: src/infrastructure.ts:26-49

**01:19.333–01:19.563 · seabed:** Enter seabed with optical handoff; bright pulse already rests on armored cable and begins forward track.
**Sampling:** Output frames 2380–2386.
- Foreground: Cable armor and gold pulse over fine seabed.
- Background: Saturated low banks and fixed dust.
- Camera: eye[4.2,4.6,10-4t],look[0,.34,-18-4t],fov51,offset[-58,77].
- Light: Pulse100,scale.67; base lights frozen set.update(0).
- Continuity: Seabed profile has no repeater lift; next hose comparison uses separate macro set.
- Evaluated recipe sample: {   "native": 79.448,   "local": 0.115,   "pulse_z": -18.46,   "eye_z": 9.54 }
- Construction source: src/marine-shots.ts:34-55

**01:19.563–01:20.000 · seabed:** Track alongside pulse at matching4units/s camera/pulse travel; reveal cable armor and shallow canyon.
**Sampling:** Output frames 2387–2399.
- Foreground: Cable armor and gold pulse over fine seabed.
- Background: Saturated low banks and fixed dust.
- Camera: eye[4.2,4.6,10-4t],look[0,.34,-18-4t],fov51,offset[-58,77].
- Light: Pulse100,scale.67; base lights frozen set.update(0).
- Continuity: Seabed profile has no repeater lift; next hose comparison uses separate macro set.
- Evaluated recipe sample: {   "native": 79.7815,   "local": 0.4485,   "pulse_z": -19.794,   "eye_z": 8.206 }
- Construction source: src/marine-shots.ts:34-55

**Clock / handoff shot-18:** origin 76.167s; active local range 2.8329999999999984–3.1329999999999956s; reset key 76.167; {   "enter": true,   "exit": true,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }
**Clock / handoff shot-19:** origin 79.333s; active local range 0.000333333333330188–0.6336666666666702s; reset key 79.333; {   "enter": true,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 2370,
    "shot": "shot-18",
    "local": 2.8329999999999984,
    "eye": [
      -0.03995999999999983,
      7.3,
      17.15855
    ],
    "direction": [
      -0.029292595070546486,
      -0.24280741664181202,
      -0.969632147929184
    ],
    "quaternion": [
      -0.12230835017835412,
      0.014986444276652676,
      0.0018470467983239508,
      0.9923772782479034
    ],
    "fov": 48,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 2399,
    "shot": "shot-19",
    "local": 0.6336666666666702,
    "eye": [
      4.2,
      4.6,
      7.465333333333319
    ],
    "direction": [
      -0.14668936140320746,
      -0.14878492370896756,
      -0.977929076021383
    ],
    "quaternion": [
      -0.07439371064119568,
      0.0741689814298575,
      0.005548491642662071,
      0.9944514831057284
    ],
    "fov": 51,
    "view": {
      "enabled": true,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -58,
      "offsetY": 77,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 01:19.000–01:20.000. No separately asserted effect onset.

**Measured mix:** -15.789 dBFS RMS; -3.184 dBFS peak. Source samples per channel 3792000–3840000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 01:20.000–01:21.000 · frames 2400–2429

**Shots:** shot-19
**Narration:** the Pacific. That
**Captions:** of the Pacific.
**Visible overlay layers:** elapsed, captions

**01:20.000–01:20.333 · seabed:** Track alongside pulse at matching4units/s camera/pulse travel; reveal cable armor and shallow canyon.
**Sampling:** Output frames 2400–2409.
- Foreground: Cable armor and gold pulse over fine seabed.
- Background: Saturated low banks and fixed dust.
- Camera: eye[4.2,4.6,10-4t],look[0,.34,-18-4t],fov51,offset[-58,77].
- Light: Pulse100,scale.67; base lights frozen set.update(0).
- Continuity: Seabed profile has no repeater lift; next hose comparison uses separate macro set.
- Evaluated recipe sample: {   "native": 80.1665,   "local": 0.8335,   "pulse_z": -21.334,   "eye_z": 6.666 }
- Construction source: src/marine-shots.ts:34-55

**01:20.333–01:21.000 · seabed:** Continue matched cable track past terrain detail; repeater remains hidden and pulse stays bright.
**Sampling:** Output frames 2410–2429.
- Foreground: Cable armor and gold pulse over fine seabed.
- Background: Saturated low banks and fixed dust.
- Camera: eye[4.2,4.6,10-4t],look[0,.34,-18-4t],fov51,offset[-58,77].
- Light: Pulse100,scale.67; base lights frozen set.update(0).
- Continuity: Seabed profile has no repeater lift; next hose comparison uses separate macro set.
- Evaluated recipe sample: {   "native": 80.6665,   "local": 1.3335,   "pulse_z": -23.334,   "eye_z": 4.666 }
- Construction source: src/marine-shots.ts:34-55

**Clock / handoff shot-19:** origin 79.333s; active local range 0.6670000000000016–1.6336666666666702s; reset key 79.333; {   "enter": true,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 2400,
    "shot": "shot-19",
    "local": 0.6670000000000016,
    "eye": [
      4.2,
      4.6,
      7.331999999999994
    ],
    "direction": [
      -0.14668936140320746,
      -0.14878492370896756,
      -0.977929076021383
    ],
    "quaternion": [
      -0.07439371064119568,
      0.0741689814298575,
      0.005548491642662071,
      0.9944514831057284
    ],
    "fov": 51,
    "view": {
      "enabled": true,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -58,
      "offsetY": 77,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 2429,
    "shot": "shot-19",
    "local": 1.6336666666666702,
    "eye": [
      4.2,
      4.6,
      3.4653333333333194
    ],
    "direction": [
      -0.14668936140320746,
      -0.14878492370896756,
      -0.977929076021383
    ],
    "quaternion": [
      -0.07439371064119568,
      0.0741689814298575,
      0.005548491642662071,
      0.9944514831057284
    ],
    "fov": 51,
    "view": {
      "enabled": true,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -58,
      "offsetY": 77,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 01:20.000–01:21.000. No separately asserted effect onset.

**Measured mix:** -21.78 dBFS RMS; -3.94 dBFS peak. Source samples per channel 3840000–3888000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 01:21.000–01:22.000 · frames 2430–2459

**Shots:** shot-19, shot-20
**Narration:** That cable is only
**Captions:** That cable is only
**Visible overlay layers:** elapsed, cable-label, captions

**01:21.000–01:21.500 · seabed:** Continue matched cable track past terrain detail; repeater remains hidden and pulse stays bright.
**Sampling:** Output frames 2430–2444.
- Foreground: Cable armor and gold pulse over fine seabed.
- Background: Saturated low banks and fixed dust.
- Camera: eye[4.2,4.6,10-4t],look[0,.34,-18-4t],fov51,offset[-58,77].
- Light: Pulse100,scale.67; base lights frozen set.update(0).
- Continuity: Seabed profile has no repeater lift; next hose comparison uses separate macro set.
- Evaluated recipe sample: {   "native": 81.25,   "local": 1.917,   "pulse_z": -25.668,   "eye_z": 2.332 }
- Construction source: src/marine-shots.ts:34-55

**01:21.500–01:22.000 · hose:** Inspect armored cable alongside a similarly thick green garden hose and brass coupling; common assembly begins a subtle Y turn.
**Sampling:** Output frames 2445–2459.
- Foreground: Hose:steel and green rubber parallel. Fiber:fixed nested cylindrical layers and8 fine splays.
- Background: Ripple-textured floor and100 low rocks;fog.007.
- Camera: Hose eye[.6,8.8,9.3-.18t]/fov43;fiber eye[.2,9.6,10.4-.25t]/fov44;look around[0,.3,0].
- Light: Studio blue light;steel env1.8;fiber adds local cyan practical8.
- Continuity: No animated layer removal exists in active builder.
- Evaluated recipe sample: {   "native": 81.75,   "local": 0.25,   "assembly_yaw": -0.0338556,   "assembly_z": 0.08,   "eye_z": 9.255 }
- Construction source: src/cable-macro.ts:16-33

**Clock / handoff shot-19:** origin 79.333s; active local range 1.6670000000000016–2.13366666666667s; reset key 79.333; {   "enter": true,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }
**Clock / handoff shot-20:** origin 81.5s; active local range 0.0–0.46666666666666856s; reset key 81.5; {   "enter": false,   "exit": true,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 2430,
    "shot": "shot-19",
    "local": 1.6670000000000016,
    "eye": [
      4.2,
      4.6,
      3.3319999999999936
    ],
    "direction": [
      -0.14668936140320746,
      -0.14878492370896756,
      -0.977929076021383
    ],
    "quaternion": [
      -0.07439371064119568,
      0.0741689814298575,
      0.005548491642662071,
      0.9944514831057284
    ],
    "fov": 51,
    "view": {
      "enabled": true,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -58,
      "offsetY": 77,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 2459,
    "shot": "shot-20",
    "local": 0.46666666666666856,
    "eye": [
      0.6,
      8.8,
      9.216000000000001
    ],
    "direction": [
      -0.047802368147143615,
      -0.6772002154178678,
      -0.7342443747401258
    ],
    "quaternion": [
      -0.3632644581643612,
      0.03027781472448344,
      0.01181251116241572,
      0.9311190321060464
    ],
    "fov": 43,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -58,
      "offsetY": 77,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 01:21.000–01:22.000. No separately asserted effect onset.

**Measured mix:** -16.224 dBFS RMS; -2.746 dBFS peak. Source samples per channel 3888000–3936000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 01:22.000–01:23.000 · frames 2460–2489

**Shots:** shot-20
**Narration:** only about as thick as
**Captions:** That cable is only / about as thick
**Visible overlay layers:** elapsed, cable-label, captions

**01:22.000–01:22.500 · hose:** Inspect armored cable alongside a similarly thick green garden hose and brass coupling; common assembly begins a subtle Y turn.
**Sampling:** Output frames 2460–2474.
- Foreground: Hose:steel and green rubber parallel. Fiber:fixed nested cylindrical layers and8 fine splays.
- Background: Ripple-textured floor and100 low rocks;fog.007.
- Camera: Hose eye[.6,8.8,9.3-.18t]/fov43;fiber eye[.2,9.6,10.4-.25t]/fov44;look around[0,.3,0].
- Light: Studio blue light;steel env1.8;fiber adds local cyan practical8.
- Continuity: No animated layer removal exists in active builder.
- Evaluated recipe sample: {   "native": 82.25,   "local": 0.75,   "assembly_yaw": -0.0257964,   "assembly_z": 0.08,   "eye_z": 9.165 }
- Construction source: src/cable-macro.ts:16-33

**01:22.500–01:23.000 · hose:** Continue restrained comparison push; steel helix and hose weave remain static geometry while perspective changes.
**Sampling:** Output frames 2475–2489.
- Foreground: Hose:steel and green rubber parallel. Fiber:fixed nested cylindrical layers and8 fine splays.
- Background: Ripple-textured floor and100 low rocks;fog.007.
- Camera: Hose eye[.6,8.8,9.3-.18t]/fov43;fiber eye[.2,9.6,10.4-.25t]/fov44;look around[0,.3,0].
- Light: Studio blue light;steel env1.8;fiber adds local cyan practical8.
- Continuity: No animated layer removal exists in active builder.
- Evaluated recipe sample: {   "native": 82.75,   "local": 1.25,   "assembly_yaw": -0.0124779,   "assembly_z": 0.08,   "eye_z": 9.075 }
- Construction source: src/cable-macro.ts:16-33

**Clock / handoff shot-20:** origin 81.5s; active local range 0.5–1.4666666666666686s; reset key 81.5; {   "enter": false,   "exit": true,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 2460,
    "shot": "shot-20",
    "local": 0.5,
    "eye": [
      0.6,
      8.8,
      9.21
    ],
    "direction": [
      -0.04781914948973906,
      -0.6774379511046369,
      -0.7340239446674949
    ],
    "quaternion": [
      -0.36341464787486555,
      0.0302955669403968,
      0.011825077329742348,
      0.9310596865292219
    ],
    "fov": 43,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -58,
      "offsetY": 77,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 2489,
    "shot": "shot-20",
    "local": 1.4666666666666686,
    "eye": [
      0.6,
      8.8,
      9.036
    ],
    "direction": [
      -0.048308725273597176,
      -0.6843736080426267,
      -0.7275294026203735
    ],
    "quaternion": [
      -0.3678117032805497,
      0.030819630427281128,
      0.012198113043493134,
      0.9293093711721434
    ],
    "fov": 43,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -58,
      "offsetY": 77,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 01:22.000–01:23.000. No separately asserted effect onset.

**Measured mix:** -17.058 dBFS RMS; -3.702 dBFS peak. Source samples per channel 3936000–3984000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 01:23.000–01:24.000 · frames 2490–2519

**Shots:** shot-20
**Narration:** as a garden hose, and
**Captions:** as a garden hose
**Visible overlay layers:** elapsed, cable-label, captions

**01:23.000–01:23.800 · hose:** Continue restrained comparison push; steel helix and hose weave remain static geometry while perspective changes.
**Sampling:** Output frames 2490–2513.
- Foreground: Hose:steel and green rubber parallel. Fiber:fixed nested cylindrical layers and8 fine splays.
- Background: Ripple-textured floor and100 low rocks;fog.007.
- Camera: Hose eye[.6,8.8,9.3-.18t]/fov43;fiber eye[.2,9.6,10.4-.25t]/fov44;look around[0,.3,0].
- Light: Studio blue light;steel env1.8;fiber adds local cyan practical8.
- Continuity: No animated layer removal exists in active builder.
- Evaluated recipe sample: {   "native": 83.4,   "local": 1.9,   "assembly_yaw": 0.0078937,   "assembly_z": 0.08,   "eye_z": 8.958 }
- Construction source: src/cable-macro.ts:16-33

**01:23.800–01:24.000 · hose:** Outgoing optical scale/blur prepares exposed fiber section while comparison rotation continues.
**Sampling:** Output frames 2514–2519.
- Foreground: Hose:steel and green rubber parallel. Fiber:fixed nested cylindrical layers and8 fine splays.
- Background: Ripple-textured floor and100 low rocks;fog.007.
- Camera: Hose eye[.6,8.8,9.3-.18t]/fov43;fiber eye[.2,9.6,10.4-.25t]/fov44;look around[0,.3,0].
- Light: Studio blue light;steel env1.8;fiber adds local cyan practical8.
- Continuity: No animated layer removal exists in active builder.
- Evaluated recipe sample: {   "native": 83.9,   "local": 2.4,   "assembly_yaw": 0.0222201,   "assembly_z": 0.08,   "eye_z": 8.868 }
- Construction source: src/cable-macro.ts:16-33

**Clock / handoff shot-20:** origin 81.5s; active local range 1.5–2.4666666666666686s; reset key 81.5; {   "enter": false,   "exit": true,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 2490,
    "shot": "shot-20",
    "local": 1.5,
    "eye": [
      0.6,
      8.8,
      9.030000000000001
    ],
    "direction": [
      -0.0483257071801612,
      -0.6846141850522839,
      -0.7273018930614263
    ],
    "quaternion": [
      -0.367964766768629,
      0.03083802662615252,
      0.012211279840519961,
      0.929247992290201
    ],
    "fov": 43,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -58,
      "offsetY": 77,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 2519,
    "shot": "shot-20",
    "local": 2.4666666666666686,
    "eye": [
      0.6,
      8.8,
      8.856
    ],
    "direction": [
      -0.04882104590121443,
      -0.6916314836005377,
      -0.720598637501925
    ],
    "quaternion": [
      -0.37244582922671826,
      0.031381292845574976,
      0.012602283583061397,
      0.9274375996256863
    ],
    "fov": 43,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -58,
      "offsetY": 77,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 01:23.000–01:24.000. No separately asserted effect onset.

**Measured mix:** -18.988 dBFS RMS; -3.271 dBFS peak. Source samples per channel 3984000–4032000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 01:24.000–01:25.000 · frames 2520–2549

**Shots:** shot-21
**Narration:** and the glass fiber inside
**Captions:** and the glass fiber / inside the cable
**Visible overlay layers:** elapsed, captions

**01:24.000–01:24.230 · fiber:** Incoming optical blur/scale settles on an already exposed stepped cable section.
**Sampling:** Output frames 2520–2526.
- Foreground: Hose:steel and green rubber parallel. Fiber:fixed nested cylindrical layers and8 fine splays.
- Background: Ripple-textured floor and100 low rocks;fog.007.
- Camera: Hose eye[.6,8.8,9.3-.18t]/fov43;fiber eye[.2,9.6,10.4-.25t]/fov44;look around[0,.3,0].
- Light: Studio blue light;steel env1.8;fiber adds local cyan practical8.
- Continuity: No animated layer removal exists in active builder.
- Evaluated recipe sample: {   "native": 84.115,   "local": 0.115,   "assembly_yaw": -0.0347509,   "assembly_z": -0.5,   "eye_z": 10.37125 }
- Construction source: src/cable-macro.ts:25-33

**01:24.230–01:25.000 · fiber:** Inspect jacket,armor,buffer,copper and fine glass fibers; slow yaw and camera push reveal radial layering.
**Sampling:** Output frames 2527–2549.
- Foreground: Hose:steel and green rubber parallel. Fiber:fixed nested cylindrical layers and8 fine splays.
- Background: Ripple-textured floor and100 low rocks;fog.007.
- Camera: Hose eye[.6,8.8,9.3-.18t]/fov43;fiber eye[.2,9.6,10.4-.25t]/fov44;look around[0,.3,0].
- Light: Studio blue light;steel env1.8;fiber adds local cyan practical8.
- Continuity: No animated layer removal exists in active builder.
- Evaluated recipe sample: {   "native": 84.615,   "local": 0.615,   "assembly_yaw": -0.0286126,   "assembly_z": -0.5,   "eye_z": 10.24625 }
- Construction source: src/cable-macro.ts:25-33

**Clock / handoff shot-21:** origin 84s; active local range 0.0–0.9666666666666686s; reset key 84; {   "enter": true,   "exit": true,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 2520,
    "shot": "shot-21",
    "local": 0,
    "eye": [
      0.2,
      9.6,
      10.4
    ],
    "direction": [
      -0.014181544164215434,
      -0.6594418036360177,
      -0.7516218407034181
    ],
    "quaternion": [
      -0.35229412093064094,
      0.00882791062471059,
      0.003323233702443885,
      0.9358418009842625
    ],
    "fov": 44,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -58,
      "offsetY": 77,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 2549,
    "shot": "shot-21",
    "local": 0.9666666666666686,
    "eye": [
      0.2,
      9.6,
      10.158333333333333
    ],
    "direction": [
      -0.01436564141045148,
      -0.6680023255859936,
      -0.7440205113829662
    ],
    "quaternion": [
      -0.3576429621846457,
      0.009014205916717671,
      0.003452385863948247,
      0.9338085118070671
    ],
    "fov": 44,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -58,
      "offsetY": 77,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 01:24.000–01:25.000. No separately asserted effect onset.

**Measured mix:** -16.042 dBFS RMS; -3.027 dBFS peak. Source samples per channel 4032000–4080000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 01:25.000–01:26.000 · frames 2550–2579

**Shots:** shot-21
**Narration:** inside the cable is as thin
**Captions:** inside the cable / is as thin as a human hair.
**Visible overlay layers:** elapsed, captions

**01:25.000–01:25.500 · fiber:** Inspect jacket,armor,buffer,copper and fine glass fibers; slow yaw and camera push reveal radial layering.
**Sampling:** Output frames 2550–2564.
- Foreground: Hose:steel and green rubber parallel. Fiber:fixed nested cylindrical layers and8 fine splays.
- Background: Ripple-textured floor and100 low rocks;fog.007.
- Camera: Hose eye[.6,8.8,9.3-.18t]/fov43;fiber eye[.2,9.6,10.4-.25t]/fov44;look around[0,.3,0].
- Light: Studio blue light;steel env1.8;fiber adds local cyan practical8.
- Continuity: No animated layer removal exists in active builder.
- Evaluated recipe sample: {   "native": 85.25,   "local": 1.25,   "assembly_yaw": -0.0124779,   "assembly_z": -0.5,   "eye_z": 10.0875 }
- Construction source: src/cable-macro.ts:25-33

**01:25.500–01:26.000 · fiber:** Continue section inspection; glowing splays stay fixed while the whole assembly turns toward +.035rad yaw.
**Sampling:** Output frames 2565–2579.
- Foreground: Hose:steel and green rubber parallel. Fiber:fixed nested cylindrical layers and8 fine splays.
- Background: Ripple-textured floor and100 low rocks;fog.007.
- Camera: Hose eye[.6,8.8,9.3-.18t]/fov43;fiber eye[.2,9.6,10.4-.25t]/fov44;look around[0,.3,0].
- Light: Studio blue light;steel env1.8;fiber adds local cyan practical8.
- Continuity: No animated layer removal exists in active builder.
- Evaluated recipe sample: {   "native": 85.75,   "local": 1.75,   "assembly_yaw": 0.0031779,   "assembly_z": -0.5,   "eye_z": 9.9625 }
- Construction source: src/cable-macro.ts:25-33

**Clock / handoff shot-21:** origin 84s; active local range 1.0–1.9666666666666686s; reset key 84; {   "enter": true,   "exit": true,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 2550,
    "shot": "shot-21",
    "local": 1,
    "eye": [
      0.2,
      9.6,
      10.15
    ],
    "direction": [
      -0.014372040808109658,
      -0.6682998975770988,
      -0.7437531118196746
    ],
    "quaternion": [
      -0.3578296658864108,
      0.009020770575863382,
      0.0034569687762252372,
      0.9337369036707917
    ],
    "fov": 44,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -58,
      "offsetY": 77,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 2579,
    "shot": "shot-21",
    "local": 1.9666666666666686,
    "eye": [
      0.2,
      9.6,
      9.908333333333333
    ],
    "direction": [
      -0.014559094879176886,
      -0.6769979118817251,
      -0.7358409203517315
    ],
    "quaternion": [
      -0.36331063297921923,
      0.00921541037465611,
      0.0035938178081221656,
      0.9316155562513048
    ],
    "fov": 44,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -58,
      "offsetY": 77,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 01:25.000–01:26.000. No separately asserted effect onset.

**Measured mix:** -17.628 dBFS RMS; -2.508 dBFS peak. Source samples per channel 4080000–4128000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 01:26.000–01:27.000 · frames 2580–2609

**Shots:** shot-21
**Narration:** thin as a human hair.
**Captions:** is as thin as a human hair.
**Visible overlay layers:** elapsed, captions

**01:26.000–01:27.000 · fiber:** Continue section inspection; glowing splays stay fixed while the whole assembly turns toward +.035rad yaw.
**Sampling:** Output frames 2580–2609.
- Foreground: Hose:steel and green rubber parallel. Fiber:fixed nested cylindrical layers and8 fine splays.
- Background: Ripple-textured floor and100 low rocks;fog.007.
- Camera: Hose eye[.6,8.8,9.3-.18t]/fov43;fiber eye[.2,9.6,10.4-.25t]/fov44;look around[0,.3,0].
- Light: Studio blue light;steel env1.8;fiber adds local cyan practical8.
- Continuity: No animated layer removal exists in active builder.
- Evaluated recipe sample: {   "native": 86.5,   "local": 2.5,   "assembly_yaw": 0.024653,   "assembly_z": -0.5,   "eye_z": 9.775 }
- Construction source: src/cable-macro.ts:25-33

**Clock / handoff shot-21:** origin 84s; active local range 2.0–2.9666666666666686s; reset key 84; {   "enter": true,   "exit": true,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 2580,
    "shot": "shot-21",
    "local": 2,
    "eye": [
      0.2,
      9.6,
      9.9
    ],
    "direction": [
      -0.014565595475290525,
      -0.6773001896010094,
      -0.7355625715021714
    ],
    "quaternion": [
      -0.36350194488600307,
      0.009222272659569595,
      0.003598676415035679,
      0.9315408392975296
    ],
    "fov": 44,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -58,
      "offsetY": 77,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 2609,
    "shot": "shot-21",
    "local": 2.9666666666666686,
    "eye": [
      0.2,
      9.6,
      9.658333333333333
    ],
    "direction": [
      -0.0147555579160402,
      -0.6861334430958691,
      -0.7273260422781479
    ],
    "quaternion": [
      -0.3691180464823169,
      0.009425848609234618,
      0.003743838451453632,
      0.9293271785613091
    ],
    "fov": 44,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -58,
      "offsetY": 77,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 01:26.000–01:27.000. No separately asserted effect onset.

**Measured mix:** -15.992 dBFS RMS; -5.64 dBFS peak. Source samples per channel 4128000–4176000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 01:27.000–01:28.000 · frames 2610–2639

**Shots:** shot-21, shot-22
**Narration:** About 600
**Captions:** is as thin as a human hair. / About 600 cables like this
**Visible overlay layers:** elapsed, cable-quantity, captions

**01:27.000–01:27.167 · fiber:** Continue section inspection; glowing splays stay fixed while the whole assembly turns toward +.035rad yaw.
**Sampling:** Output frames 2610–2615.
- Foreground: Hose:steel and green rubber parallel. Fiber:fixed nested cylindrical layers and8 fine splays.
- Background: Ripple-textured floor and100 low rocks;fog.007.
- Camera: Hose eye[.6,8.8,9.3-.18t]/fov43;fiber eye[.2,9.6,10.4-.25t]/fov44;look around[0,.3,0].
- Light: Studio blue light;steel env1.8;fiber adds local cyan practical8.
- Continuity: No animated layer removal exists in active builder.
- Evaluated recipe sample: {   "native": 87.0835,   "local": 3.0835,   "assembly_yaw": 0.0341357,   "assembly_z": -0.5,   "eye_z": 9.629125 }
- Construction source: src/cable-macro.ts:25-33

**01:27.167–01:27.300 · fiber:** Outgoing optical scale/blur starts as yaw completes3.3s ease.
**Sampling:** Output frames 2616–2618.
- Foreground: Hose:steel and green rubber parallel. Fiber:fixed nested cylindrical layers and8 fine splays.
- Background: Ripple-textured floor and100 low rocks;fog.007.
- Camera: Hose eye[.6,8.8,9.3-.18t]/fov43;fiber eye[.2,9.6,10.4-.25t]/fov44;look around[0,.3,0].
- Light: Studio blue light;steel env1.8;fiber adds local cyan practical8.
- Continuity: No animated layer removal exists in active builder.
- Evaluated recipe sample: {   "native": 87.2335,   "local": 3.2335,   "assembly_yaw": 0.0349159,   "assembly_z": -0.5,   "eye_z": 9.591625 }
- Construction source: src/cable-macro.ts:25-33

**01:27.300–01:27.367 · fiber:** Yaw is settled at+.035; camera push and outgoing optical handoff continue into Earth cable map.
**Sampling:** Output frames 2619–2621.
- Foreground: Hose:steel and green rubber parallel. Fiber:fixed nested cylindrical layers and8 fine splays.
- Background: Ripple-textured floor and100 low rocks;fog.007.
- Camera: Hose eye[.6,8.8,9.3-.18t]/fov43;fiber eye[.2,9.6,10.4-.25t]/fov44;look around[0,.3,0].
- Light: Studio blue light;steel env1.8;fiber adds local cyan practical8.
- Continuity: No animated layer removal exists in active builder.
- Evaluated recipe sample: {   "native": 87.3335,   "local": 3.3335,   "assembly_yaw": 0.035,   "assembly_z": -0.5,   "eye_z": 9.566625 }
- Construction source: src/cable-macro.ts:25-33

**01:27.367–01:27.400 · earth-web:** Draw-wave grows from Shanghai: progress=local/2.8 clamped. Cyan/white pulses travel continuously using nativeTime.
**Sampling:** Source-formula interval between sampled output frames; no additional frame displays this interval.
- Foreground: CableWeb608 illustrative cables+315 landing points; no single-route highlight or location tags. Metric at22%: 600 / cables (cyan).
- Background: Unit Earth with photographic day/night maps, blue atmosphere and8100 seeded stars incl. milky haze; no fog.
- Camera: q=ease(step(local,0,3.3)); lat25,lon=mix(145,159,q),distance=mix(3.05,2.84,q); look origin,fov46,roll-.08,viewOffset[0,-205]. Camera moves eastward and closer.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Earth shader day.32/night1.06/air1, no sun, no physical-light animation. Native-frame star twinkle continues.
- Continuity: Optical entry from fiber; camera keeps moving .5s beyond reveal completion.
Optical picture incoming p=1-ease(step(local,0,.23)); scale=1+p*0.32,blur=p*9px,origin50%47%; typography stays sharp/unscaled.
- Construction source: src/index.tsx:22 SHOTS; src/globe-shot.tsx:10-22 GlobeShot

**01:27.400–01:27.597 · earth-web:** Draw-wave grows from Shanghai: progress=local/2.8 clamped. Cyan/white pulses travel continuously using nativeTime.
**Sampling:** Output frames 2622–2627.
- Foreground: CableWeb608 illustrative cables+315 landing points; no single-route highlight or location tags. Metric at22%: 600 / cables (cyan).
- Background: Unit Earth with photographic day/night maps, blue atmosphere and8100 seeded stars incl. milky haze; no fog.
- Camera: q=ease(step(local,0,3.3)); lat25,lon=mix(145,159,q),distance=mix(3.05,2.84,q); look origin,fov46,roll-.08,viewOffset[0,-205]. Camera moves eastward and closer.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Earth shader day.32/night1.06/air1, no sun, no physical-light animation. Native-frame star twinkle continues.
- Continuity: Optical entry from fiber; camera keeps moving .5s beyond reveal completion.
Optical picture incoming p=1-ease(step(local,0,.23)); scale=1+p*0.32,blur=p*9px,origin50%47%; typography stays sharp/unscaled.
- Construction source: src/index.tsx:22 SHOTS; src/globe-shot.tsx:10-22 GlobeShot

**01:27.597–01:28.000 · earth-web:** Draw-wave grows from Shanghai: progress=local/2.8 clamped. Cyan/white pulses travel continuously using nativeTime.
**Sampling:** Output frames 2628–2639.
- Foreground: CableWeb608 illustrative cables+315 landing points; no single-route highlight or location tags. Metric at22%: 600 / cables (cyan).
- Background: Unit Earth with photographic day/night maps, blue atmosphere and8100 seeded stars incl. milky haze; no fog.
- Camera: q=ease(step(local,0,3.3)); lat25,lon=mix(145,159,q),distance=mix(3.05,2.84,q); look origin,fov46,roll-.08,viewOffset[0,-205]. Camera moves eastward and closer.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Earth shader day.32/night1.06/air1, no sun, no physical-light animation. Native-frame star twinkle continues.
- Continuity: Optical entry from fiber; camera keeps moving .5s beyond reveal completion.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/globe-shot.tsx:10-22 GlobeShot

**Clock / handoff shot-21:** origin 84s; active local range 3.0–3.36666666666666s; reset key 84; {   "enter": true,   "exit": true,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }
**Clock / handoff shot-22:** origin 87.367s; active local range 0.03300000000000125–0.5996666666666641s; reset key 87.367; {   "enter": true,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 2610,
    "shot": "shot-21",
    "local": 3,
    "eye": [
      0.2,
      9.6,
      9.65
    ],
    "direction": [
      -0.014762157808714586,
      -0.6864403381052282,
      -0.7270362720791933
    ],
    "quaternion": [
      -0.36931406946818857,
      0.009433029908219268,
      0.0037489950510335864,
      0.9292492028921542
    ],
    "fov": 44,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -58,
      "offsetY": 77,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 2639,
    "shot": "shot-22",
    "local": 0.5996666666666641,
    "eye": [
      -2.2837733335830372,
      1.2812589265758707,
      -1.5277638196442762
    ],
    "direction": [
      0.7532937304312103,
      -0.42261826174069955,
      0.5039269396810423
    ],
    "quaternion": [
      0.06745904063291241,
      0.864530362495967,
      0.2091523453374244,
      -0.45198653364822006
    ],
    "fov": 46,
    "view": {
      "enabled": true,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 0,
      "offsetY": -205,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 01:27.000–01:28.000. No separately asserted effect onset.

**Measured mix:** -18.128 dBFS RMS; -2.126 dBFS peak. Source samples per channel 4176000–4224000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 01:28.000–01:29.000 · frames 2640–2669

**Shots:** shot-22
**Narration:** cables like this carry
**Captions:** About 600 cables like this
**Visible overlay layers:** elapsed, cable-quantity, captions

**01:28.000–01:29.000 · earth-web:** Draw-wave grows from Shanghai: progress=local/2.8 clamped. Cyan/white pulses travel continuously using nativeTime.
**Sampling:** Output frames 2640–2669.
- Foreground: CableWeb608 illustrative cables+315 landing points; no single-route highlight or location tags. Metric at22%: 600 / cables (cyan).
- Background: Unit Earth with photographic day/night maps, blue atmosphere and8100 seeded stars incl. milky haze; no fog.
- Camera: q=ease(step(local,0,3.3)); lat25,lon=mix(145,159,q),distance=mix(3.05,2.84,q); look origin,fov46,roll-.08,viewOffset[0,-205]. Camera moves eastward and closer.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Earth shader day.32/night1.06/air1, no sun, no physical-light animation. Native-frame star twinkle continues.
- Continuity: Optical entry from fiber; camera keeps moving .5s beyond reveal completion.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/globe-shot.tsx:10-22 GlobeShot

**Clock / handoff shot-22:** origin 87.367s; active local range 0.6329999999999956–1.5996666666666641s; reset key 87.367; {   "enter": true,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 2640,
    "shot": "shot-22",
    "local": 0.6329999999999956,
    "eye": [
      -2.285745396465783,
      1.2804420138790822,
      -1.521652665950955
    ],
    "direction": [
      0.7544252186084537,
      -0.42261826174069955,
      0.5022314151572527
    ],
    "quaternion": [
      0.06769420275905307,
      0.8640215289513581,
      0.2090763512118824,
      -0.45295846585012556
    ],
    "fov": 46,
    "view": {
      "enabled": true,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 0,
      "offsetY": -205,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 2669,
    "shot": "shot-22",
    "local": 1.5996666666666641,
    "eye": [
      -2.3534470401777745,
      1.2466406396455902,
      -1.2682713466937776
    ],
    "direction": [
      0.7978319217168188,
      -0.4226182617406996,
      0.4299511943615436
    ],
    "quaternion": [
      -0.07734595009232081,
      -0.84201734019264,
      -0.20570131192477698,
      0.49265746020095325
    ],
    "fov": 46,
    "view": {
      "enabled": true,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 0,
      "offsetY": -205,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 01:28.000–01:29.000. No separately asserted effect onset.

**Measured mix:** -18.48 dBFS RMS; -2.773 dBFS peak. Source samples per channel 4224000–4272000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 01:29.000–01:30.000 · frames 2670–2699

**Shots:** shot-22
**Narration:** carry 99 %
**Captions:** About 600 cables like this / carry 99%
**Visible overlay layers:** elapsed, cable-quantity, captions

**01:29.000–01:29.100 · earth-web:** Draw-wave grows from Shanghai: progress=local/2.8 clamped. Cyan/white pulses travel continuously using nativeTime.
**Sampling:** Output frames 2670–2672.
- Foreground: CableWeb608 illustrative cables+315 landing points; no single-route highlight or location tags. Metric at22%: 600 / cables (cyan).
- Background: Unit Earth with photographic day/night maps, blue atmosphere and8100 seeded stars incl. milky haze; no fog.
- Camera: q=ease(step(local,0,3.3)); lat25,lon=mix(145,159,q),distance=mix(3.05,2.84,q); look origin,fov46,roll-.08,viewOffset[0,-205]. Camera moves eastward and closer.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Earth shader day.32/night1.06/air1, no sun, no physical-light animation. Native-frame star twinkle continues.
- Continuity: Optical entry from fiber; camera keeps moving .5s beyond reveal completion.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/globe-shot.tsx:10-22 GlobeShot

**01:29.100–01:30.000 · earth-web:** Draw-wave grows from Shanghai: progress=local/2.8 clamped. Cyan/white pulses travel continuously using nativeTime.
**Sampling:** Output frames 2673–2699.
- Foreground: CableWeb608 illustrative cables+315 landing points; no single-route highlight or location tags. Metric at22%: 99% / of data between continents (white).
- Background: Unit Earth with photographic day/night maps, blue atmosphere and8100 seeded stars incl. milky haze; no fog.
- Camera: q=ease(step(local,0,3.3)); lat25,lon=mix(145,159,q),distance=mix(3.05,2.84,q); look origin,fov46,roll-.08,viewOffset[0,-205]. Camera moves eastward and closer.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Earth shader day.32/night1.06/air1, no sun, no physical-light animation. Native-frame star twinkle continues.
- Continuity: Optical entry from fiber; camera keeps moving .5s beyond reveal completion.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/globe-shot.tsx:10-22 GlobeShot

**Clock / handoff shot-22:** origin 87.367s; active local range 1.6329999999999956–2.599666666666664s; reset key 87.367; {   "enter": true,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 2670,
    "shot": "shot-22",
    "local": 1.6329999999999956,
    "eye": [
      -2.3555817565629886,
      1.2452965507393987,
      -1.2581956315935812
    ],
    "direction": [
      0.7994175096330793,
      -0.4226182617406994,
      0.42699584322955086
    ],
    "quaternion": [
      -0.07772642109514932,
      -0.8411043485076718,
      -0.20555784876038588,
      0.49421457809156827
    ],
    "fov": 46,
    "view": {
      "enabled": true,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 0,
      "offsetY": -205,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 2699,
    "shot": "shot-22",
    "local": 2.599666666666664,
    "eye": [
      -2.3962281304586934,
      1.2105307173445445,
      -0.9986303716615216
    ],
    "direction": [
      0.8365667658975928,
      -0.42261826174069944,
      0.3486400020636066
    ],
    "quaternion": [
      -0.08747139113354241,
      -0.8164978608453094,
      -0.20160402142918932,
      0.5338874577209842
    ],
    "fov": 46,
    "view": {
      "enabled": true,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 0,
      "offsetY": -205,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 01:29.000–01:30.000. No separately asserted effect onset.

**Measured mix:** -14.77 dBFS RMS; -4.603 dBFS peak. Source samples per channel 4272000–4320000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 01:30.000–01:31.000 · frames 2700–2729

**Shots:** shot-22
**Narration:** % of all the data that
**Captions:** carry 99% / of all the data / that travels
**Visible overlay layers:** elapsed, cable-quantity, captions

**01:30.000–01:30.167 · earth-web:** Draw-wave grows from Shanghai: progress=local/2.8 clamped. Cyan/white pulses travel continuously using nativeTime.
**Sampling:** Output frames 2700–2705.
- Foreground: CableWeb608 illustrative cables+315 landing points; no single-route highlight or location tags. Metric at22%: 99% / of data between continents (white).
- Background: Unit Earth with photographic day/night maps, blue atmosphere and8100 seeded stars incl. milky haze; no fog.
- Camera: q=ease(step(local,0,3.3)); lat25,lon=mix(145,159,q),distance=mix(3.05,2.84,q); look origin,fov46,roll-.08,viewOffset[0,-205]. Camera moves eastward and closer.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Earth shader day.32/night1.06/air1, no sun, no physical-light animation. Native-frame star twinkle continues.
- Continuity: Optical entry from fiber; camera keeps moving .5s beyond reveal completion.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/globe-shot.tsx:10-22 GlobeShot

**01:30.167–01:30.300 · earth-web:** Web reveal complete; all source routes present. Cyan/white pulses travel continuously using nativeTime.
**Sampling:** Output frames 2706–2708.
- Foreground: CableWeb608 illustrative cables+315 landing points; no single-route highlight or location tags. Metric at22%: 99% / of data between continents (white).
- Background: Unit Earth with photographic day/night maps, blue atmosphere and8100 seeded stars incl. milky haze; no fog.
- Camera: q=ease(step(local,0,3.3)); lat25,lon=mix(145,159,q),distance=mix(3.05,2.84,q); look origin,fov46,roll-.08,viewOffset[0,-205]. Camera moves eastward and closer.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Earth shader day.32/night1.06/air1, no sun, no physical-light animation. Native-frame star twinkle continues.
- Continuity: Optical entry from fiber; camera keeps moving .5s beyond reveal completion.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/globe-shot.tsx:10-22 GlobeShot

**01:30.300–01:30.667 · earth-web:** Web reveal complete; all source routes present. Cyan/white pulses travel continuously using nativeTime.
**Sampling:** Output frames 2709–2720.
- Foreground: CableWeb608 illustrative cables+315 landing points; no single-route highlight or location tags. Metric at22%: 99% / of data between continents (white).
- Background: Unit Earth with photographic day/night maps, blue atmosphere and8100 seeded stars incl. milky haze; no fog.
- Camera: q=ease(step(local,0,3.3)); lat25,lon=mix(145,159,q),distance=mix(3.05,2.84,q); look origin,fov46,roll-.08,viewOffset[0,-205]. Camera moves eastward and closer.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Earth shader day.32/night1.06/air1, no sun, no physical-light animation. Native-frame star twinkle continues.
- Continuity: Optical entry from fiber; camera keeps moving .5s beyond reveal completion.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/globe-shot.tsx:10-22 GlobeShot

**01:30.667–01:30.900 · earth-web:** Web reveal complete; all source routes present. Cyan/white pulses travel continuously using nativeTime.
**Sampling:** Output frames 2721–2726.
- Foreground: CableWeb608 illustrative cables+315 landing points; no single-route highlight or location tags. Metric at22%: 99% / of data between continents (white).
- Background: Unit Earth with photographic day/night maps, blue atmosphere and8100 seeded stars incl. milky haze; no fog.
- Camera: q=ease(step(local,0,3.3)); lat25,lon=mix(145,159,q),distance=mix(3.05,2.84,q); look origin,fov46,roll-.08,viewOffset[0,-205]. Camera settled.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Earth shader day.32/night1.06/air1, no sun, no physical-light animation. Native-frame star twinkle continues.
- Continuity: Optical entry from fiber; camera keeps moving .5s beyond reveal completion.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/globe-shot.tsx:10-22 GlobeShot

**01:30.900–01:31.000 · earth-web:** Web reveal complete; all source routes present. Cyan/white pulses travel continuously using nativeTime.
**Sampling:** Output frames 2727–2729.
- Foreground: CableWeb608 illustrative cables+315 landing points; no single-route highlight or location tags. Metric at22%: 99% / of data between continents (white).
- Background: Unit Earth with photographic day/night maps, blue atmosphere and8100 seeded stars incl. milky haze; no fog.
- Camera: q=ease(step(local,0,3.3)); lat25,lon=mix(145,159,q),distance=mix(3.05,2.84,q); look origin,fov46,roll-.08,viewOffset[0,-205]. Camera settled.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Earth shader day.32/night1.06/air1, no sun, no physical-light animation. Native-frame star twinkle continues.
- Continuity: Optical entry from fiber; camera keeps moving .5s beyond reveal completion.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/globe-shot.tsx:10-22 GlobeShot

**Clock / handoff shot-22:** origin 87.367s; active local range 2.6329999999999956–3.599666666666664s; reset key 87.367; {   "enter": true,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 2700,
    "shot": "shot-22",
    "local": 2.6329999999999956,
    "eye": [
      -2.396899462281859,
      1.2096472902228346,
      -0.9920746628355097
    ],
    "direction": [
      0.8374122709192133,
      -0.42261826174069944,
      0.34660423159158865
    ],
    "quaternion": [
      -0.08771650228643699,
      -0.8158479827899483,
      -0.20149749613802065,
      0.5348800269726977
    ],
    "fov": 46,
    "view": {
      "enabled": true,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 0,
      "offsetY": -205,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 2729,
    "shot": "shot-22",
    "local": 3.599666666666664,
    "eye": [
      -2.4029558374207256,
      1.2002358633435863,
      -0.9224083237642279
    ],
    "direction": [
      0.8461112103594106,
      -0.4226182617406995,
      0.32479166329726344
    ],
    "quaternion": [
      -0.09031962345620571,
      -0.8088499225859893,
      -0.20034418220149885,
      0.5454047827159025
    ],
    "fov": 46,
    "view": {
      "enabled": true,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 0,
      "offsetY": -205,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 01:30.000–01:31.000. No separately asserted effect onset.

**Measured mix:** -16.581 dBFS RMS; -4.374 dBFS peak. Source samples per channel 4320000–4368000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 01:31.000–01:32.000 · frames 2730–2759

**Shots:** shot-22
**Narration:** that travels between continents.
**Captions:** that travels / between continents.
**Visible overlay layers:** elapsed, cable-quantity, captions

**01:31.000–01:31.600 · earth-web:** Web reveal complete; all source routes present. Cyan/white pulses travel continuously using nativeTime.
**Sampling:** Output frames 2730–2747.
- Foreground: CableWeb608 illustrative cables+315 landing points; no single-route highlight or location tags. Metric at22%: 99% / of data between continents (white).
- Background: Unit Earth with photographic day/night maps, blue atmosphere and8100 seeded stars incl. milky haze; no fog.
- Camera: q=ease(step(local,0,3.3)); lat25,lon=mix(145,159,q),distance=mix(3.05,2.84,q); look origin,fov46,roll-.08,viewOffset[0,-205]. Camera settled.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Earth shader day.32/night1.06/air1, no sun, no physical-light animation. Native-frame star twinkle continues.
- Continuity: Optical entry from fiber; camera keeps moving .5s beyond reveal completion.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/globe-shot.tsx:10-22 GlobeShot

**01:31.600–01:32.000 · earth-web:** Web reveal complete; all source routes present. Cyan/white pulses travel continuously using nativeTime.
**Sampling:** Output frames 2748–2759.
- Foreground: CableWeb608 illustrative cables+315 landing points; no single-route highlight or location tags. Metric at22%: 99% / of data between continents (white).
- Background: Unit Earth with photographic day/night maps, blue atmosphere and8100 seeded stars incl. milky haze; no fog.
- Camera: q=ease(step(local,0,3.3)); lat25,lon=mix(145,159,q),distance=mix(3.05,2.84,q); look origin,fov46,roll-.08,viewOffset[0,-205]. Camera settled.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Earth shader day.32/night1.06/air1, no sun, no physical-light animation. Native-frame star twinkle continues.
- Continuity: Optical entry from fiber; camera keeps moving .5s beyond reveal completion.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/globe-shot.tsx:10-22 GlobeShot

**Clock / handoff shot-22:** origin 87.367s; active local range 3.6329999999999956–4.599666666666664s; reset key 87.367; {   "enter": true,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 2730,
    "shot": "shot-22",
    "local": 3.6329999999999956,
    "eye": [
      -2.4029558374207256,
      1.2002358633435863,
      -0.9224083237642279
    ],
    "direction": [
      0.8461112103594106,
      -0.4226182617406995,
      0.32479166329726344
    ],
    "quaternion": [
      -0.09031962345620571,
      -0.8088499225859893,
      -0.20034418220149885,
      0.5454047827159025
    ],
    "fov": 46,
    "view": {
      "enabled": true,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 0,
      "offsetY": -205,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 2759,
    "shot": "shot-22",
    "local": 4.599666666666664,
    "eye": [
      -2.4029558374207256,
      1.2002358633435863,
      -0.9224083237642279
    ],
    "direction": [
      0.8461112103594106,
      -0.4226182617406995,
      0.32479166329726344
    ],
    "quaternion": [
      -0.09031962345620571,
      -0.8088499225859893,
      -0.20034418220149885,
      0.5454047827159025
    ],
    "fov": 46,
    "view": {
      "enabled": true,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 0,
      "offsetY": -205,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 01:31.000–01:32.000. No separately asserted effect onset.

**Measured mix:** -18.525 dBFS RMS; -3.743 dBFS peak. Source samples per channel 4368000–4416000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 01:32.000–01:33.000 · frames 2760–2789

**Shots:** shot-22, shot-23
**Narration:** continents. Most people
**Captions:** between continents. / Most people assume
**Visible overlay layers:** elapsed, cable-quantity, captions

**01:32.000–01:32.700 · earth-web:** Web reveal complete; all source routes present. Cyan/white pulses travel continuously using nativeTime.
**Sampling:** Output frames 2760–2780.
- Foreground: CableWeb608 illustrative cables+315 landing points; no single-route highlight or location tags. Metric at22%: 99% / of data between continents (white).
- Background: Unit Earth with photographic day/night maps, blue atmosphere and8100 seeded stars incl. milky haze; no fog.
- Camera: q=ease(step(local,0,3.3)); lat25,lon=mix(145,159,q),distance=mix(3.05,2.84,q); look origin,fov46,roll-.08,viewOffset[0,-205]. Camera settled.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Earth shader day.32/night1.06/air1, no sun, no physical-light animation. Native-frame star twinkle continues.
- Continuity: Optical entry from fiber; camera keeps moving .5s beyond reveal completion.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/globe-shot.tsx:10-22 GlobeShot

**01:32.700–01:32.800 · satellite:** Satellite group at[0,3,0] rotates Euler[.2,local*.07,.2] continuously.
**Sampling:** Output frames 2781–2783.
- Foreground: Metal rectangular bus, paired blue solar-panel wings with16 thin cell lines total, shallow top dish and two struts.
- Background: Procedural studio sky and dust only; no Earth, no Stars.
- Camera: eye[5,7,15-local*.1],look[0,3,0],fov45; slow forward drift.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Default studio lights and PMREM.25,FogExp2#040b25 .004; fixed lighting.
- Continuity: Hard cut from globe to isolated hardware silhouette; no CSS handoff on satellite.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/scenes.ts:38 satellite

**01:32.800–01:33.000 · satellite:** Satellite group at[0,3,0] rotates Euler[.2,local*.07,.2] continuously.
**Sampling:** Output frames 2784–2789.
- Foreground: Metal rectangular bus, paired blue solar-panel wings with16 thin cell lines total, shallow top dish and two struts.
- Background: Procedural studio sky and dust only; no Earth, no Stars.
- Camera: eye[5,7,15-local*.1],look[0,3,0],fov45; slow forward drift.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Default studio lights and PMREM.25,FogExp2#040b25 .004; fixed lighting.
- Continuity: Hard cut from globe to isolated hardware silhouette; no CSS handoff on satellite.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/scenes.ts:38 satellite

**Clock / handoff shot-22:** origin 87.367s; active local range 4.632999999999996–5.299666666666667s; reset key 87.367; {   "enter": true,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }
**Clock / handoff shot-23:** origin 92.7s; active local range 0.0–0.2666666666666657s; reset key 92.7; {   "enter": false,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 2760,
    "shot": "shot-22",
    "local": 4.632999999999996,
    "eye": [
      -2.4029558374207256,
      1.2002358633435863,
      -0.9224083237642279
    ],
    "direction": [
      0.8461112103594106,
      -0.4226182617406995,
      0.32479166329726344
    ],
    "quaternion": [
      -0.09031962345620571,
      -0.8088499225859893,
      -0.20034418220149885,
      0.5454047827159025
    ],
    "fov": 46,
    "view": {
      "enabled": true,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 0,
      "offsetY": -205,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 2789,
    "shot": "shot-23",
    "local": 0.2666666666666657,
    "eye": [
      5,
      7,
      14.973333333333333
    ],
    "direction": [
      -0.3070313076043559,
      -0.2456250460834847,
      -0.9194564225058444
    ],
    "quaternion": [
      -0.12216065344303517,
      0.1592123220653746,
      0.019857434071197687,
      0.9794559171116533
    ],
    "fov": 45,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 0,
      "offsetY": -205,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 01:32.000–01:33.000. No separately asserted effect onset.

**Measured mix:** -19.151 dBFS RMS; -4.068 dBFS peak. Source samples per channel 4416000–4464000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 01:33.000–01:34.000 · frames 2790–2819

**Shots:** shot-23
**Narration:** people assume that satellites carry
**Captions:** Most people assume / that satellites
**Visible overlay layers:** elapsed, captions

**01:33.000–01:33.500 · satellite:** Satellite group at[0,3,0] rotates Euler[.2,local*.07,.2] continuously.
**Sampling:** Output frames 2790–2804.
- Foreground: Metal rectangular bus, paired blue solar-panel wings with16 thin cell lines total, shallow top dish and two struts.
- Background: Procedural studio sky and dust only; no Earth, no Stars.
- Camera: eye[5,7,15-local*.1],look[0,3,0],fov45; slow forward drift.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Default studio lights and PMREM.25,FogExp2#040b25 .004; fixed lighting.
- Continuity: Hard cut from globe to isolated hardware silhouette; no CSS handoff on satellite.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/scenes.ts:38 satellite

**01:33.500–01:34.000 · satellite:** Satellite group at[0,3,0] rotates Euler[.2,local*.07,.2] continuously.
**Sampling:** Output frames 2805–2819.
- Foreground: Metal rectangular bus, paired blue solar-panel wings with16 thin cell lines total, shallow top dish and two struts.
- Background: Procedural studio sky and dust only; no Earth, no Stars.
- Camera: eye[5,7,15-local*.1],look[0,3,0],fov45; slow forward drift.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Default studio lights and PMREM.25,FogExp2#040b25 .004; fixed lighting.
- Continuity: Hard cut from globe to isolated hardware silhouette; no CSS handoff on satellite.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/scenes.ts:38 satellite

**Clock / handoff shot-23:** origin 92.7s; active local range 0.29999999999999716–1.2666666666666657s; reset key 92.7; {   "enter": false,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 2790,
    "shot": "shot-23",
    "local": 0.29999999999999716,
    "eye": [
      5,
      7,
      14.97
    ],
    "direction": [
      -0.3070891011690125,
      -0.24567128093521004,
      -0.9194247689000234
    ],
    "quaternion": [
      -0.12218334725981236,
      0.15924460807944638,
      0.019865317656736367,
      0.9794476778288917
    ],
    "fov": 45,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 0,
      "offsetY": -205,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 2819,
    "shot": "shot-23",
    "local": 1.2666666666666657,
    "eye": [
      5,
      7,
      14.873333333333333
    ],
    "direction": [
      -0.308773750868771,
      -0.2470190006950168,
      -0.918498984250971
    ],
    "quaternion": [
      -0.12284476352062956,
      0.16018636630523558,
      0.020095917919314466,
      0.9792066412195466
    ],
    "fov": 45,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 0,
      "offsetY": -205,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 01:33.000–01:34.000. No separately asserted effect onset.

**Measured mix:** -15.466 dBFS RMS; -2.674 dBFS peak. Source samples per channel 4464000–4512000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 01:34.000–01:35.000 · frames 2820–2849

**Shots:** shot-23
**Narration:** carry this data, but
**Captions:** that satellites / carry this data / but the cables actually do.
**Visible overlay layers:** elapsed, captions

**01:34.000–01:34.100 · satellite:** Satellite group at[0,3,0] rotates Euler[.2,local*.07,.2] continuously.
**Sampling:** Output frames 2820–2822.
- Foreground: Metal rectangular bus, paired blue solar-panel wings with16 thin cell lines total, shallow top dish and two struts.
- Background: Procedural studio sky and dust only; no Earth, no Stars.
- Camera: eye[5,7,15-local*.1],look[0,3,0],fov45; slow forward drift.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Default studio lights and PMREM.25,FogExp2#040b25 .004; fixed lighting.
- Continuity: Hard cut from globe to isolated hardware silhouette; no CSS handoff on satellite.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/scenes.ts:38 satellite

**01:34.100–01:34.900 · satellite:** Satellite group at[0,3,0] rotates Euler[.2,local*.07,.2] continuously.
**Sampling:** Output frames 2823–2846.
- Foreground: Metal rectangular bus, paired blue solar-panel wings with16 thin cell lines total, shallow top dish and two struts.
- Background: Procedural studio sky and dust only; no Earth, no Stars.
- Camera: eye[5,7,15-local*.1],look[0,3,0],fov45; slow forward drift.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Default studio lights and PMREM.25,FogExp2#040b25 .004; fixed lighting.
- Continuity: Hard cut from globe to isolated hardware silhouette; no CSS handoff on satellite.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/scenes.ts:38 satellite

**01:34.900–01:35.000 · satellite:** Satellite group at[0,3,0] rotates Euler[.2,local*.07,.2] continuously.
**Sampling:** Output frames 2847–2849.
- Foreground: Metal rectangular bus, paired blue solar-panel wings with16 thin cell lines total, shallow top dish and two struts.
- Background: Procedural studio sky and dust only; no Earth, no Stars.
- Camera: eye[5,7,15-local*.1],look[0,3,0],fov45; slow forward drift.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Default studio lights and PMREM.25,FogExp2#040b25 .004; fixed lighting.
- Continuity: Hard cut from globe to isolated hardware silhouette; no CSS handoff on satellite.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/scenes.ts:38 satellite

**Clock / handoff shot-23:** origin 92.7s; active local range 1.2999999999999972–2.2666666666666657s; reset key 92.7; {   "enter": false,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 2820,
    "shot": "shot-23",
    "local": 1.2999999999999972,
    "eye": [
      5,
      7,
      14.870000000000001
    ],
    "direction": [
      -0.3088321414336536,
      -0.24706571314692288,
      -0.9184667886236859
    ],
    "quaternion": [
      -0.12286768511516076,
      0.16021903021363856,
      0.02010393831741339,
      0.9791982567263754
    ],
    "fov": 45,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 0,
      "offsetY": -205,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 2849,
    "shot": "shot-23",
    "local": 2.2666666666666657,
    "eye": [
      5,
      7,
      14.773333333333333
    ],
    "direction": [
      -0.3105342218601052,
      -0.24842737748808422,
      -0.9175251141893241
    ],
    "quaternion": [
      -0.12353574891529924,
      0.16117183887166572,
      0.02033855006908127,
      0.9789529613192605
    ],
    "fov": 45,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 0,
      "offsetY": -205,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 01:34.000–01:35.000. No separately asserted effect onset.

**Measured mix:** -17.196 dBFS RMS; -3.219 dBFS peak. Source samples per channel 4512000–4560000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 01:35.000–01:36.000 · frames 2850–2879

**Shots:** shot-23
**Narration:** but the cables actually do.
**Captions:** but the cables actually do.
**Visible overlay layers:** elapsed, captions

**01:35.000–01:36.000 · satellite:** Satellite group at[0,3,0] rotates Euler[.2,local*.07,.2] continuously.
**Sampling:** Output frames 2850–2879.
- Foreground: Metal rectangular bus, paired blue solar-panel wings with16 thin cell lines total, shallow top dish and two struts.
- Background: Procedural studio sky and dust only; no Earth, no Stars.
- Camera: eye[5,7,15-local*.1],look[0,3,0],fov45; slow forward drift.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Default studio lights and PMREM.25,FogExp2#040b25 .004; fixed lighting.
- Continuity: Hard cut from globe to isolated hardware silhouette; no CSS handoff on satellite.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/scenes.ts:38 satellite

**Clock / handoff shot-23:** origin 92.7s; active local range 2.299999999999997–3.2666666666666657s; reset key 92.7; {   "enter": false,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 2850,
    "shot": "shot-23",
    "local": 2.299999999999997,
    "eye": [
      5,
      7,
      14.77
    ],
    "direction": [
      -0.3105932175639652,
      -0.24847457405117207,
      -0.9174923646839531
    ],
    "quaternion": [
      -0.123558901188845,
      0.16120488700727623,
      0.02034671032272784,
      0.978944428310933
    ],
    "fov": 45,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 0,
      "offsetY": -205,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 2879,
    "shot": "shot-23",
    "local": 3.2666666666666657,
    "eye": [
      5,
      7,
      14.673333333333334
    ],
    "direction": [
      -0.31231296643964557,
      -0.24985037315171643,
      -0.9165344521782129
    ],
    "quaternion": [
      -0.12423369715076193,
      0.1621689316828174,
      0.020585422973760634,
      0.9786947769606712
    ],
    "fov": 45,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 0,
      "offsetY": -205,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 01:35.000–01:36.000. No separately asserted effect onset.

**Measured mix:** -16.98 dBFS RMS; -3.288 dBFS peak. Source samples per channel 4560000–4608000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 01:36.000–01:37.000 · frames 2880–2909

**Shots:** shot-23, shot-24
**Narration:** do. Light fades
**Captions:** but the cables actually do. / Light fades
**Visible overlay layers:** elapsed, captions

**01:36.100–01:37.000 · fade:** Pulse begins atz-3 withscale.40/light95 and travels toward repeater; camera starts lowering and pushing in.
**Sampling:** Output frames 2883–2909.
- Foreground: Dim shrinking pulse on lifted cable approaching metal housing.
- Background: Same low-bank seabed profile as next repeater.
- Camera: Eased eye[3.8,5.2,12]→[5.4,2.4,-5],look[0,.5,-20],fov49,offset[-15,20].
- Light: Signal95→12,scale.40→.23;rim hidden;opaque repeater.
- Continuity: Pulse state matches repeater local0.
- Evaluated recipe sample: {   "native": 96.55,   "local": 0.45,   "pulse_z": -3.759375,   "intensity": 89.95775,   "scale": 0.3896725 }
- Construction source: src/marine-shots.ts:34-55

**01:36.000–01:36.100 · satellite:** Satellite group at[0,3,0] rotates Euler[.2,local*.07,.2] continuously.
**Sampling:** Output frames 2880–2882.
- Foreground: Metal rectangular bus, paired blue solar-panel wings with16 thin cell lines total, shallow top dish and two struts.
- Background: Procedural studio sky and dust only; no Earth, no Stars.
- Camera: eye[5,7,15-local*.1],look[0,3,0],fov45; slow forward drift.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Default studio lights and PMREM.25,FogExp2#040b25 .004; fixed lighting.
- Continuity: Hard cut from globe to isolated hardware silhouette; no CSS handoff on satellite.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/scenes.ts:38 satellite

**Clock / handoff shot-23:** origin 92.7s; active local range 3.299999999999997–3.36666666666666s; reset key 92.7; {   "enter": false,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }
**Clock / handoff shot-24:** origin 96.1s; active local range 0.0–0.8666666666666742s; reset key 96.1; {   "enter": false,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 2880,
    "shot": "shot-23",
    "local": 3.299999999999997,
    "eye": [
      5,
      7,
      14.67
    ],
    "direction": [
      -0.31237257553855646,
      -0.24989806043084523,
      -0.9165011366301247
    ],
    "quaternion": [
      -0.12425708303806197,
      0.16220237051230113,
      0.020593726206602027,
      0.9786860920417692
    ],
    "fov": 45,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 0,
      "offsetY": -205,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 2909,
    "shot": "shot-24",
    "local": 0.8666666666666742,
    "eye": [
      4.123441426611802,
      4.633977503429347,
      8.563434842249604
    ],
    "direction": [
      -0.14143600661043984,
      -0.1417973990679141,
      -0.9797394315080241
    ],
    "quaternion": [
      -0.07089592682599041,
      0.07144264696574268,
      0.00509091080520904,
      0.9949089397433242
    ],
    "fov": 49,
    "view": {
      "enabled": true,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -15,
      "offsetY": 20,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 01:36.000–01:37.000. No separately asserted effect onset.

**Measured mix:** -19.81 dBFS RMS; -3.233 dBFS peak. Source samples per channel 4608000–4656000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 01:37.000–01:38.000 · frames 2910–2939

**Shots:** shot-24
**Narration:** fades as it travels through
**Captions:** Light fades / as it travels / through the glass
**Visible overlay layers:** elapsed, captions

**01:37.000–01:37.100 · fade:** Pulse begins atz-3 withscale.40/light95 and travels toward repeater; camera starts lowering and pushing in.
**Sampling:** Output frames 2910–2912.
- Foreground: Dim shrinking pulse on lifted cable approaching metal housing.
- Background: Same low-bank seabed profile as next repeater.
- Camera: Eased eye[3.8,5.2,12]→[5.4,2.4,-5],look[0,.5,-20],fov49,offset[-15,20].
- Light: Signal95→12,scale.40→.23;rim hidden;opaque repeater.
- Continuity: Pulse state matches repeater local0.
- Evaluated recipe sample: {   "native": 97.05,   "local": 0.95,   "pulse_z": -5.9665509,   "intensity": 75.3021019,   "scale": 0.3596549 }
- Construction source: src/marine-shots.ts:34-55

**01:37.100–01:38.000 · fade:** Signal continues approaching while luminosity and size decay; camera moves closer to metal repeater.
**Sampling:** Output frames 2913–2939.
- Foreground: Dim shrinking pulse on lifted cable approaching metal housing.
- Background: Same low-bank seabed profile as next repeater.
- Camera: Eased eye[3.8,5.2,12]→[5.4,2.4,-5],look[0,.5,-20],fov49,offset[-15,20].
- Light: Signal95→12,scale.40→.23;rim hidden;opaque repeater.
- Continuity: Pulse state matches repeater local0.
- Evaluated recipe sample: {   "native": 97.55,   "local": 1.45,   "pulse_z": -8.9376157,   "intensity": 55.5742315,   "scale": 0.3192484 }
- Construction source: src/marine-shots.ts:34-55

**Clock / handoff shot-24:** origin 96.1s; active local range 0.9000000000000057–1.8666666666666742s; reset key 96.1; {   "enter": false,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 2910,
    "shot": "shot-24",
    "local": 0.9000000000000057,
    "eye": [
      4.1456000000000035,
      4.595199999999993,
      8.32799999999996
    ],
    "direction": [
      -0.14334152212628481,
      -0.14159885213516987,
      -0.979491180720134
    ],
    "quaternion": [
      -0.07079118457580498,
      0.07240868612457581,
      0.005152451157478981,
      0.9948462406860353
    ],
    "fov": 49,
    "view": {
      "enabled": true,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -15,
      "offsetY": 20,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 2939,
    "shot": "shot-24",
    "local": 1.8666666666666742,
    "eye": [
      4.887490809327852,
      3.296891083676259,
      0.445410150891572
    ],
    "direction": [
      -0.23046896775540046,
      -0.13188702058506754,
      -0.9641005490626764
    ],
    "quaternion": [
      -0.06563366836578892,
      0.11679874590727173,
      0.007735906824971409,
      0.9909543028197283
    ],
    "fov": 49,
    "view": {
      "enabled": true,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -15,
      "offsetY": 20,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 01:37.000–01:38.000. No separately asserted effect onset.

**Measured mix:** -17.396 dBFS RMS; -2.376 dBFS peak. Source samples per channel 4656000–4704000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 01:38.000–01:39.000 · frames 2940–2969

**Shots:** shot-24
**Narration:** through the glass, so every few
**Captions:** through the glass / so every few dozen kilometers
**Visible overlay layers:** elapsed, captions

**01:38.000–01:38.100 · fade:** Signal continues approaching while luminosity and size decay; camera moves closer to metal repeater.
**Sampling:** Output frames 2940–2942.
- Foreground: Dim shrinking pulse on lifted cable approaching metal housing.
- Background: Same low-bank seabed profile as next repeater.
- Camera: Eased eye[3.8,5.2,12]→[5.4,2.4,-5],look[0,.5,-20],fov49,offset[-15,20].
- Light: Signal95→12,scale.40→.23;rim hidden;opaque repeater.
- Continuity: Pulse state matches repeater local0.
- Evaluated recipe sample: {   "native": 98.05,   "local": 1.95,   "pulse_z": -11.978125,   "intensity": 35.38525,   "scale": 0.2778975 }
- Construction source: src/marine-shots.ts:34-55

**01:38.100–01:39.000 · fade:** Complete attenuation toscale.23/light12 atz-15.5; camera reaches[5.4,2.4,-5] and establishes next shot handoff.
**Sampling:** Output frames 2943–2969.
- Foreground: Dim shrinking pulse on lifted cable approaching metal housing.
- Background: Same low-bank seabed profile as next repeater.
- Camera: Eased eye[3.8,5.2,12]→[5.4,2.4,-5],look[0,.5,-20],fov49,offset[-15,20].
- Light: Signal95→12,scale.40→.23;rim hidden;opaque repeater.
- Continuity: Pulse state matches repeater local0.
- Evaluated recipe sample: {   "native": 98.55,   "local": 2.45,   "pulse_z": -14.3936343,   "intensity": 19.3462685,   "scale": 0.2450466 }
- Construction source: src/marine-shots.ts:34-55

**Clock / handoff shot-24:** origin 96.1s; active local range 1.9000000000000057–2.8666666666666742s; reset key 96.1; {   "enter": false,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 2940,
    "shot": "shot-24",
    "local": 1.9000000000000057,
    "eye": [
      4.912414814814819,
      3.2532740740740667,
      0.18059259259254823
    ],
    "direction": [
      -0.23446513784305184,
      -0.13141129355579712,
      -0.9632015215219665
    ],
    "quaternion": [
      -0.0653798228682942,
      0.11884745685426905,
      0.007842956339611943,
      0.9907266266719785
    ],
    "fov": 49,
    "view": {
      "enabled": true,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -15,
      "offsetY": 20,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 2969,
    "shot": "shot-24",
    "local": 2.8666666666666742,
    "eye": [
      5.390799451303156,
      2.416100960219477,
      -4.902244170096033
    ],
    "direction": [
      -0.3338904444729678,
      -0.11867772248661672,
      -0.9351110999635464
    ],
    "quaternion": [
      -0.058572182240537105,
      0.1703342287557264,
      0.01014328132900426,
      0.9835917160212634
    ],
    "fov": 49,
    "view": {
      "enabled": true,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -15,
      "offsetY": 20,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 01:38.000–01:39.000. No separately asserted effect onset.

**Measured mix:** -16.949 dBFS RMS; -3.121 dBFS peak. Source samples per channel 4704000–4752000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 01:39.000–01:40.000 · frames 2970–2999

**Shots:** shot-24, shot-25
**Narration:** few dozen kilometers,
**Captions:** so every few dozen kilometers
**Visible overlay layers:** elapsed, captions

**01:39.000–01:39.100 · fade:** Complete attenuation toscale.23/light12 atz-15.5; camera reaches[5.4,2.4,-5] and establishes next shot handoff.
**Sampling:** Output frames 2970–2972.
- Foreground: Dim shrinking pulse on lifted cable approaching metal housing.
- Background: Same low-bank seabed profile as next repeater.
- Camera: Eased eye[3.8,5.2,12]→[5.4,2.4,-5],look[0,.5,-20],fov49,offset[-15,20].
- Light: Signal95→12,scale.40→.23;rim hidden;opaque repeater.
- Continuity: Pulse state matches repeater local0.
- Evaluated recipe sample: {   "native": 99.05,   "local": 2.95,   "pulse_z": -15.4896991,   "intensity": 12.0683981,   "scale": 0.2301401 }
- Construction source: src/marine-shots.ts:34-55

**01:39.100–01:40.000 · repeater:** Weak incoming pulse moves fromz-15.5 toward repeater; casing is fully opaque and labels hidden.
**Sampling:** Output frames 2973–2999.
- Foreground: Bolted repeater,connected cable,visible inner assembly only during reveal.
- Background: Static base seabed/shadows,low bank capped3.5.
- Camera: Slow eased eye[8,3.1,-12]→[7.5,3.3,-14],look[0,.65,-20],fov49,offset[-12,-25].
- Light: Weak12→strong100 withgain ease1.4–3.1;rim30+12reveal,casing1-.84reveal.
- Continuity: At103.6 cut preserve bright pulse position into crossing.
- Evaluated recipe sample: {   "native": 99.55,   "local": 0.45,   "pulse_z": -15.822,   "intensity": 12,   "scale": 0.23,   "casing_opacity": 1 }
- Construction source: src/marine-shots.ts:34-55

**Clock / handoff shot-24:** origin 96.1s; active local range 2.9000000000000057–2.9666666666666686s; reset key 96.1; {   "enter": false,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }
**Clock / handoff shot-25:** origin 99.1s; active local range 0.0–0.8666666666666742s; reset key 99.1; {   "enter": false,   "exit": true,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 2970,
    "shot": "shot-24",
    "local": 2.9000000000000057,
    "eye": [
      5.394785185185186,
      2.4091259259259252,
      -4.944592592592599
    ],
    "direction": [
      -0.33494820208156506,
      -0.11853267080814103,
      -0.9347511475646425
    ],
    "quaternion": [
      -0.05849463063660343,
      0.17088828047694232,
      0.010163748584607498,
      0.9835000111830352
    ],
    "fov": 49,
    "view": {
      "enabled": true,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -15,
      "offsetY": 20,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 2999,
    "shot": "shot-25",
    "local": 0.8666666666666742,
    "eye": [
      7.951505766397398,
      3.119397693441041,
      -12.193976934410408
    ],
    "direction": [
      -0.6967012133470046,
      -0.2163656066913911,
      -0.6839541969765796
    ],
    "quaternion": [
      -0.10035174844646742,
      0.3846458476253801,
      0.042110817961585945,
      0.9166263019894727
    ],
    "fov": 49,
    "view": {
      "enabled": true,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -12,
      "offsetY": -25,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 01:39.000–01:40.000. No separately asserted effect onset.

**Measured mix:** -16.672 dBFS RMS; -3.378 dBFS peak. Source samples per channel 4752000–4800000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 01:40.000–01:41.000 · frames 3000–3029

**Shots:** shot-25
**Narration:** a device called a repeater,
**Captions:** so every few dozen kilometers / a device called a repeater
**Visible overlay layers:** elapsed, captions

**01:40.000–01:40.500 · repeater:** Weak incoming pulse moves fromz-15.5 toward repeater; casing is fully opaque and labels hidden.
**Sampling:** Output frames 3000–3014.
- Foreground: Bolted repeater,connected cable,visible inner assembly only during reveal.
- Background: Static base seabed/shadows,low bank capped3.5.
- Camera: Slow eased eye[8,3.1,-12]→[7.5,3.3,-14],look[0,.65,-20],fov49,offset[-12,-25].
- Light: Weak12→strong100 withgain ease1.4–3.1;rim30+12reveal,casing1-.84reveal.
- Continuity: At103.6 cut preserve bright pulse position into crossing.
- Evaluated recipe sample: {   "native": 100.25,   "local": 1.15,   "pulse_z": -17.3692785,   "intensity": 12,   "scale": 0.23,   "casing_opacity": 1 }
- Construction source: src/marine-shots.ts:34-55

**01:40.500–01:40.600 · repeater:** Amplification starts before casing reveal; scale/light begin rising while pulse advances.
**Sampling:** Output frames 3015–3017.
- Foreground: Bolted repeater,connected cable,visible inner assembly only during reveal.
- Background: Static base seabed/shadows,low bank capped3.5.
- Camera: Slow eased eye[8,3.1,-12]→[7.5,3.3,-14],look[0,.65,-20],fov49,offset[-12,-25].
- Light: Weak12→strong100 withgain ease1.4–3.1;rim30+12reveal,casing1-.84reveal.
- Continuity: At103.6 cut preserve bright pulse position into crossing.
- Evaluated recipe sample: {   "native": 100.55,   "local": 1.45,   "pulse_z": -18.3125624,   "intensity": 12.2238958,   "scale": 0.2311195,   "casing_opacity": 1 }
- Construction source: src/marine-shots.ts:34-55

**01:40.600–01:40.900 · repeater:** Casing fades toward transparency, exposing inner cyan core and gold conduits; amplification grows.
**Sampling:** Output frames 3018–3026.
- Foreground: Bolted repeater,connected cable,visible inner assembly only during reveal.
- Background: Static base seabed/shadows,low bank capped3.5.
- Camera: Slow eased eye[8,3.1,-12]→[7.5,3.3,-14],look[0,.65,-20],fov49,offset[-12,-25].
- Light: Weak12→strong100 withgain ease1.4–3.1;rim30+12reveal,casing1-.84reveal.
- Continuity: At103.6 cut preserve bright pulse position into crossing.
- Evaluated recipe sample: {   "native": 100.75,   "local": 1.65,   "pulse_z": -19.0045185,   "intensity": 17.1496031,   "scale": 0.255748,   "casing_opacity": 0.7342187 }
- Construction source: src/marine-shots.ts:34-55

**01:40.900–01:41.000 · repeater:** Repeater and every80–100km labels appear while casing reveal reaches maximum.
**Sampling:** Output frames 3027–3029.
- Foreground: Bolted repeater,connected cable,visible inner assembly only during reveal.
- Background: Static base seabed/shadows,low bank capped3.5.
- Camera: Slow eased eye[8,3.1,-12]→[7.5,3.3,-14],look[0,.65,-20],fov49,offset[-12,-25].
- Light: Weak12→strong100 withgain ease1.4–3.1;rim30+12reveal,casing1-.84reveal.
- Continuity: At103.6 cut preserve bright pulse position into crossing.
- Evaluated recipe sample: {   "native": 100.95,   "local": 1.85,   "pulse_z": -19.7328203,   "intensity": 27.2338693,   "scale": 0.3061693,   "casing_opacity": 0.1960938 }
- Construction source: src/marine-shots.ts:34-55

**Clock / handoff shot-25:** origin 99.1s; active local range 0.9000000000000057–1.8666666666666742s; reset key 99.1; {   "enter": false,   "exit": true,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 3000,
    "shot": "shot-25",
    "local": 0.9000000000000057,
    "eye": [
      7.9479999999999995,
      3.1208000000000005,
      -12.208000000000002
    ],
    "direction": [
      -0.6971103258206268,
      -0.21671114658248686,
      -0.6834277376439761
    ],
    "quaternion": [
      -0.10049964797745667,
      0.3849492848862292,
      0.042212979930475264,
      0.9164780047264514
    ],
    "fov": 49,
    "view": {
      "enabled": true,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -12,
      "offsetY": -25,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 3029,
    "shot": "shot-25",
    "local": 1.8666666666666742,
    "eye": [
      7.813270741248792,
      3.174691703500483,
      -12.74691703500483
    ],
    "direction": [
      -0.7131661470155072,
      -0.230444421320498,
      -0.6620343007981663
    ],
    "quaternion": [
      -0.10633164713487628,
      0.39708491587883443,
      0.04637711045476235,
      0.9104209542980378
    ],
    "fov": 49,
    "view": {
      "enabled": true,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -12,
      "offsetY": -25,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 01:40.000–01:41.000. No separately asserted effect onset.

**Measured mix:** -17.478 dBFS RMS; -2.932 dBFS peak. Source samples per channel 4800000–4848000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 01:41.000–01:42.000 · frames 3030–3059

**Shots:** shot-25
**Narration:** repeater, makes the light strong
**Captions:** a device called a repeater / makes the light strong again.
**Visible overlay layers:** elapsed, captions

**01:41.000–01:41.800 · repeater:** Hold casing at.16opacity and inner geometry visible; pulse crosses through exposed amplification structure.
**Sampling:** Output frames 3030–3053.
- Foreground: Bolted repeater,connected cable,visible inner assembly only during reveal.
- Background: Static base seabed/shadows,low bank capped3.5.
- Camera: Slow eased eye[8,3.1,-12]→[7.5,3.3,-14],look[0,.65,-20],fov49,offset[-12,-25].
- Light: Weak12→strong100 withgain ease1.4–3.1;rim30+12reveal,casing1-.84reveal.
- Continuity: At103.6 cut preserve bright pulse position into crossing.
- Evaluated recipe sample: {   "native": 101.4,   "local": 2.3,   "pulse_z": -21.4416351,   "intensity": 59.877875,   "scale": 0.4693894,   "casing_opacity": 0.16 }
- Construction source: src/marine-shots.ts:34-55

**01:41.800–01:42.000 · repeater:** Casing closes over inner core as pulse amplification finishes atscale.67/light100.
**Sampling:** Output frames 3054–3059.
- Foreground: Bolted repeater,connected cable,visible inner assembly only during reveal.
- Background: Static base seabed/shadows,low bank capped3.5.
- Camera: Slow eased eye[8,3.1,-12]→[7.5,3.3,-14],look[0,.65,-20],fov49,offset[-12,-25].
- Light: Weak12→strong100 withgain ease1.4–3.1;rim30+12reveal,casing1-.84reveal.
- Continuity: At103.6 cut preserve bright pulse position into crossing.
- Evaluated recipe sample: {   "native": 101.9,   "local": 2.8,   "pulse_z": -23.3163402,   "intensity": 92.7457765,   "scale": 0.6337289,   "casing_opacity": 0.29125 }
- Construction source: src/marine-shots.ts:34-55

**Clock / handoff shot-25:** origin 99.1s; active local range 1.9000000000000057–2.8666666666666742s; reset key 99.1; {   "enter": false,   "exit": true,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 3030,
    "shot": "shot-25",
    "local": 1.9000000000000057,
    "eye": [
      7.80786282578875,
      3.1768548696844996,
      -12.768548696844997
    ],
    "direction": [
      -0.71382385729422,
      -0.23101446966297856,
      -0.6611261721970578
    ],
    "quaternion": [
      -0.10657171925459101,
      0.397591979995311,
      0.04655439101439075,
      0.9101624991043127
    ],
    "fov": 49,
    "view": {
      "enabled": true,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -12,
      "offsetY": -25,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 3059,
    "shot": "shot-25",
    "local": 2.8666666666666742,
    "eye": [
      7.6497956612305025,
      3.240081735507799,
      -13.40081735507799
    ],
    "direction": [
      -0.7334678448497346,
      -0.24833887761937734,
      -0.6327343221560164
    ],
    "quaternion": [
      -0.11378635619914258,
      0.41314102200690944,
      0.0521157990079322,
      0.9020261108037687
    ],
    "fov": 49,
    "view": {
      "enabled": true,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -12,
      "offsetY": -25,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 01:41.000–01:42.000. No separately asserted effect onset.

**Measured mix:** -16.804 dBFS RMS; -2.466 dBFS peak. Source samples per channel 4848000–4896000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 01:42.000–01:43.000 · frames 3060–3089

**Shots:** shot-25
**Narration:** strong again.
**Captions:** makes the light strong again.
**Visible overlay layers:** elapsed, captions

**01:42.000–01:42.200 · repeater:** Casing closes over inner core as pulse amplification finishes atscale.67/light100.
**Sampling:** Output frames 3060–3065.
- Foreground: Bolted repeater,connected cable,visible inner assembly only during reveal.
- Background: Static base seabed/shadows,low bank capped3.5.
- Camera: Slow eased eye[8,3.1,-12]→[7.5,3.3,-14],look[0,.65,-20],fov49,offset[-12,-25].
- Light: Weak12→strong100 withgain ease1.4–3.1;rim30+12reveal,casing1-.84reveal.
- Continuity: At103.6 cut preserve bright pulse position into crossing.
- Evaluated recipe sample: {   "native": 102.1,   "local": 3,   "pulse_z": -24.0185185,   "intensity": 99.1223285,   "scale": 0.6656116,   "casing_opacity": 0.86875 }
- Construction source: src/marine-shots.ts:34-55

**01:42.200–01:43.000 · repeater:** Opaque repeater restored; bright pulse exits towardz-27 while explanatory labels remain.
**Sampling:** Output frames 3066–3089.
- Foreground: Bolted repeater,connected cable,visible inner assembly only during reveal.
- Background: Static base seabed/shadows,low bank capped3.5.
- Camera: Slow eased eye[8,3.1,-12]→[7.5,3.3,-14],look[0,.65,-20],fov49,offset[-12,-25].
- Light: Weak12→strong100 withgain ease1.4–3.1;rim30+12reveal,casing1-.84reveal.
- Continuity: At103.6 cut preserve bright pulse position into crossing.
- Evaluated recipe sample: {   "native": 102.6,   "local": 3.5,   "pulse_z": -25.5486968,   "intensity": 100,   "scale": 0.67,   "casing_opacity": 1 }
- Construction source: src/marine-shots.ts:34-55

**Clock / handoff shot-25:** origin 99.1s; active local range 2.9000000000000057–3.8666666666666742s; reset key 99.1; {   "enter": false,   "exit": true,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 3060,
    "shot": "shot-25",
    "local": 2.9000000000000057,
    "eye": [
      7.644680384087791,
      3.2421278463648835,
      -13.421278463648838
    ],
    "direction": [
      -0.7341163466732123,
      -0.24892125361371248,
      -0.631752640711975
    ],
    "quaternion": [
      -0.11402603437189138,
      0.41366863928684844,
      0.052308699593871896,
      0.9017428238155187
    ],
    "fov": 49,
    "view": {
      "enabled": true,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -12,
      "offsetY": -25,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 3089,
    "shot": "shot-25",
    "local": 3.8666666666666742,
    "eye": [
      7.526924147741705,
      3.289230340903318,
      -13.892303409033179
    ],
    "direction": [
      -0.7492385876355906,
      -0.2627119888881412,
      -0.6079670629995203
    ],
    "quaternion": [
      -0.11964363587133714,
      0.42626502190037446,
      0.05699343302126566,
      0.8948381306651001
    ],
    "fov": 49,
    "view": {
      "enabled": true,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -12,
      "offsetY": -25,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 01:42.000–01:43.000. No separately asserted effect onset.

**Measured mix:** -20.815 dBFS RMS; -4.337 dBFS peak. Source samples per channel 4896000–4944000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 01:43.000–01:44.000 · frames 3090–3119

**Shots:** shot-25, shot-26
**Narration:** With that
**Captions:** makes the light strong again. / With that help
**Visible overlay layers:** elapsed, crossing-distance, captions

**01:43.000–01:43.400 · repeater:** Opaque repeater restored; bright pulse exits towardz-27 while explanatory labels remain.
**Sampling:** Output frames 3090–3101.
- Foreground: Bolted repeater,connected cable,visible inner assembly only during reveal.
- Background: Static base seabed/shadows,low bank capped3.5.
- Camera: Slow eased eye[8,3.1,-12]→[7.5,3.3,-14],look[0,.65,-20],fov49,offset[-12,-25].
- Light: Weak12→strong100 withgain ease1.4–3.1;rim30+12reveal,casing1-.84reveal.
- Continuity: At103.6 cut preserve bright pulse position into crossing.
- Evaluated recipe sample: {   "native": 103.2,   "local": 4.1,   "pulse_z": -26.743561,   "intensity": 100,   "scale": 0.67,   "casing_opacity": 1 }
- Construction source: src/marine-shots.ts:34-55

**01:43.400–01:43.600 · repeater:** Outgoing optical scale/blur grows; pulse reaches crossing handoff statez-27,scale.67,light100.
**Sampling:** Output frames 3102–3107.
- Foreground: Bolted repeater,connected cable,visible inner assembly only during reveal.
- Background: Static base seabed/shadows,low bank capped3.5.
- Camera: Slow eased eye[8,3.1,-12]→[7.5,3.3,-14],look[0,.65,-20],fov49,offset[-12,-25].
- Light: Weak12→strong100 withgain ease1.4–3.1;rim30+12reveal,casing1-.84reveal.
- Continuity: At103.6 cut preserve bright pulse position into crossing.
- Evaluated recipe sample: {   "native": 103.5,   "local": 4.4,   "pulse_z": -26.9832154,   "intensity": 100,   "scale": 0.67,   "casing_opacity": 1 }
- Construction source: src/marine-shots.ts:34-55

**01:43.600–01:43.830 · crossing:** Incoming optical scale/blur settles; bright regenerated pulse leaves repeater and distance12,000km is shown.
**Sampling:** Output frames 3108–3114.
- Foreground: Regenerated golden pulse and armored cable.
- Background: Repeater falls behind;rough seabed banks and fixed dust.
- Camera: eye[4.7,2.2,-9.8-3.7t],look[0,.4,-27-3.7t],fov53,offset[-8,0].
- Light: Constant pulse100,scale.67;repeater rim12,no reveal or labels.
- Continuity: Strict overlay condition global>108.1,not >=108.1.
- Evaluated recipe sample: {   "native": 103.715,   "local": 0.115,   "pulse_z": -27.575,   "eye_z": -10.2255,   "distance_metric_km": 12000,   "latency_metric_visible": false }
- Construction source: src/marine-shots.ts:34-55; src/index.tsx:44

**01:43.830–01:44.000 · crossing:** Travel onward along cable; pulse moves5units/s while camera moves3.7units/s, gradually extending separation.
**Sampling:** Output frames 3115–3119.
- Foreground: Regenerated golden pulse and armored cable.
- Background: Repeater falls behind;rough seabed banks and fixed dust.
- Camera: eye[4.7,2.2,-9.8-3.7t],look[0,.4,-27-3.7t],fov53,offset[-8,0].
- Light: Constant pulse100,scale.67;repeater rim12,no reveal or labels.
- Continuity: Strict overlay condition global>108.1,not >=108.1.
- Evaluated recipe sample: {   "native": 103.915,   "local": 0.315,   "pulse_z": -28.575,   "eye_z": -10.9655,   "distance_metric_km": 12000,   "latency_metric_visible": false }
- Construction source: src/marine-shots.ts:34-55; src/index.tsx:44

**Clock / handoff shot-25:** origin 99.1s; active local range 3.9000000000000057–4.466666666666669s; reset key 99.1; {   "enter": false,   "exit": true,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }
**Clock / handoff shot-26:** origin 103.6s; active local range 0.0–0.36666666666667425s; reset key 103.6; {   "enter": true,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 3090,
    "shot": "shot-25",
    "local": 3.9000000000000057,
    "eye": [
      7.524296296296296,
      3.2902814814814816,
      -13.902814814814816
    ],
    "direction": [
      -0.7495799405698274,
      -0.26302819001833877,
      -0.6074093215871903
    ],
    "quaternion": [
      -0.11977109014304699,
      0.4265562391670657,
      0.05710351806713414,
      0.8946752757386065
    ],
    "fov": 49,
    "view": {
      "enabled": true,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -12,
      "offsetY": -25,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 3119,
    "shot": "shot-26",
    "local": 0.36666666666667425,
    "eye": [
      4.7,
      2.2,
      -11.156666666666695
    ],
    "direction": [
      -0.2622589825944764,
      -0.10043961035533143,
      -0.9597562767287221
    ],
    "quaternion": [
      -0.0498368540589226,
      0.13280869554795202,
      0.00668653319226427,
      0.9898653588434287
    ],
    "fov": 53,
    "view": {
      "enabled": true,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -8,
      "offsetY": 0,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 01:43.000–01:44.000. No separately asserted effect onset.

**Measured mix:** -20.312 dBFS RMS; -2.201 dBFS peak. Source samples per channel 4944000–4992000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 01:44.000–01:45.000 · frames 3120–3149

**Shots:** shot-26
**Narration:** help, the light travels
**Captions:** With that help / the light travels across
**Visible overlay layers:** elapsed, crossing-distance, captions

**01:44.000–01:45.000 · crossing:** Travel onward along cable; pulse moves5units/s while camera moves3.7units/s, gradually extending separation.
**Sampling:** Output frames 3120–3149.
- Foreground: Regenerated golden pulse and armored cable.
- Background: Repeater falls behind;rough seabed banks and fixed dust.
- Camera: eye[4.7,2.2,-9.8-3.7t],look[0,.4,-27-3.7t],fov53,offset[-8,0].
- Light: Constant pulse100,scale.67;repeater rim12,no reveal or labels.
- Continuity: Strict overlay condition global>108.1,not >=108.1.
- Evaluated recipe sample: {   "native": 104.5,   "local": 0.9,   "pulse_z": -31.5,   "eye_z": -13.13,   "distance_metric_km": 12000,   "latency_metric_visible": false }
- Construction source: src/marine-shots.ts:34-55; src/index.tsx:44

**Clock / handoff shot-26:** origin 103.6s; active local range 0.4000000000000057–1.3666666666666742s; reset key 103.6; {   "enter": true,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 3120,
    "shot": "shot-26",
    "local": 0.4000000000000057,
    "eye": [
      4.7,
      2.2,
      -11.280000000000022
    ],
    "direction": [
      -0.2622589825944764,
      -0.10043961035533143,
      -0.9597562767287221
    ],
    "quaternion": [
      -0.0498368540589226,
      0.13280869554795202,
      0.00668653319226427,
      0.9898653588434287
    ],
    "fov": 53,
    "view": {
      "enabled": true,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -8,
      "offsetY": 0,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 3149,
    "shot": "shot-26",
    "local": 1.3666666666666742,
    "eye": [
      4.7,
      2.2,
      -14.856666666666696
    ],
    "direction": [
      -0.26225898259447644,
      -0.10043961035533143,
      -0.9597562767287221
    ],
    "quaternion": [
      -0.0498368540589226,
      0.13280869554795205,
      0.006686533192264274,
      0.9898653588434287
    ],
    "fov": 53,
    "view": {
      "enabled": true,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -8,
      "offsetY": 0,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 01:44.000–01:45.000. No separately asserted effect onset.

**Measured mix:** -16.98 dBFS RMS; -2.595 dBFS peak. Source samples per channel 4992000–5040000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 01:45.000–01:46.000 · frames 3150–3179

**Shots:** shot-26
**Narration:** travels across 12 ,000
**Captions:** the light travels across / 12,000 kilometers
**Visible overlay layers:** elapsed, crossing-distance, captions

**01:45.000–01:45.600 · crossing:** Travel onward along cable; pulse moves5units/s while camera moves3.7units/s, gradually extending separation.
**Sampling:** Output frames 3150–3167.
- Foreground: Regenerated golden pulse and armored cable.
- Background: Repeater falls behind;rough seabed banks and fixed dust.
- Camera: eye[4.7,2.2,-9.8-3.7t],look[0,.4,-27-3.7t],fov53,offset[-8,0].
- Light: Constant pulse100,scale.67;repeater rim12,no reveal or labels.
- Continuity: Strict overlay condition global>108.1,not >=108.1.
- Evaluated recipe sample: {   "native": 105.3,   "local": 1.7,   "pulse_z": -35.5,   "eye_z": -16.09,   "distance_metric_km": 12000,   "latency_metric_visible": false }
- Construction source: src/marine-shots.ts:34-55; src/index.tsx:44

**01:45.600–01:46.000 · crossing:** Sustain cable journey with distance metric and full pulse intensity; repeater recedes behind.
**Sampling:** Output frames 3168–3179.
- Foreground: Regenerated golden pulse and armored cable.
- Background: Repeater falls behind;rough seabed banks and fixed dust.
- Camera: eye[4.7,2.2,-9.8-3.7t],look[0,.4,-27-3.7t],fov53,offset[-8,0].
- Light: Constant pulse100,scale.67;repeater rim12,no reveal or labels.
- Continuity: Strict overlay condition global>108.1,not >=108.1.
- Evaluated recipe sample: {   "native": 105.8,   "local": 2.2,   "pulse_z": -38,   "eye_z": -17.94,   "distance_metric_km": 12000,   "latency_metric_visible": false }
- Construction source: src/marine-shots.ts:34-55; src/index.tsx:44

**Clock / handoff shot-26:** origin 103.6s; active local range 1.4000000000000057–2.3666666666666742s; reset key 103.6; {   "enter": true,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 3150,
    "shot": "shot-26",
    "local": 1.4000000000000057,
    "eye": [
      4.7,
      2.2,
      -14.980000000000022
    ],
    "direction": [
      -0.2622589825944764,
      -0.10043961035533143,
      -0.9597562767287221
    ],
    "quaternion": [
      -0.0498368540589226,
      0.13280869554795202,
      0.00668653319226427,
      0.9898653588434287
    ],
    "fov": 53,
    "view": {
      "enabled": true,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -8,
      "offsetY": 0,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 3179,
    "shot": "shot-26",
    "local": 2.3666666666666742,
    "eye": [
      4.7,
      2.2,
      -18.556666666666693
    ],
    "direction": [
      -0.26225898259447633,
      -0.1004396103553314,
      -0.9597562767287221
    ],
    "quaternion": [
      -0.04983685405892259,
      0.132808695547952,
      0.006686533192264268,
      0.9898653588434287
    ],
    "fov": 53,
    "view": {
      "enabled": true,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -8,
      "offsetY": 0,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 01:45.000–01:46.000. No separately asserted effect onset.

**Measured mix:** -17.408 dBFS RMS; -2.013 dBFS peak. Source samples per channel 5040000–5088000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 01:46.000–01:47.000 · frames 3180–3209

**Shots:** shot-26
**Narration:** ,000 kilometers of
**Captions:** 12,000 kilometers
**Visible overlay layers:** elapsed, crossing-distance, captions

**01:46.000–01:47.000 · crossing:** Sustain cable journey with distance metric and full pulse intensity; repeater recedes behind.
**Sampling:** Output frames 3180–3209.
- Foreground: Regenerated golden pulse and armored cable.
- Background: Repeater falls behind;rough seabed banks and fixed dust.
- Camera: eye[4.7,2.2,-9.8-3.7t],look[0,.4,-27-3.7t],fov53,offset[-8,0].
- Light: Constant pulse100,scale.67;repeater rim12,no reveal or labels.
- Continuity: Strict overlay condition global>108.1,not >=108.1.
- Evaluated recipe sample: {   "native": 106.5,   "local": 2.9,   "pulse_z": -41.5,   "eye_z": -20.53,   "distance_metric_km": 12000,   "latency_metric_visible": false }
- Construction source: src/marine-shots.ts:34-55; src/index.tsx:44

**Clock / handoff shot-26:** origin 103.6s; active local range 2.4000000000000057–3.3666666666666742s; reset key 103.6; {   "enter": true,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 3180,
    "shot": "shot-26",
    "local": 2.4000000000000057,
    "eye": [
      4.7,
      2.2,
      -18.68000000000002
    ],
    "direction": [
      -0.26225898259447633,
      -0.1004396103553314,
      -0.9597562767287221
    ],
    "quaternion": [
      -0.04983685405892259,
      0.132808695547952,
      0.006686533192264268,
      0.9898653588434287
    ],
    "fov": 53,
    "view": {
      "enabled": true,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -8,
      "offsetY": 0,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 3209,
    "shot": "shot-26",
    "local": 3.3666666666666742,
    "eye": [
      4.7,
      2.2,
      -22.256666666666696
    ],
    "direction": [
      -0.26225898259447644,
      -0.10043961035533143,
      -0.9597562767287221
    ],
    "quaternion": [
      -0.0498368540589226,
      0.13280869554795205,
      0.006686533192264274,
      0.9898653588434287
    ],
    "fov": 53,
    "view": {
      "enabled": true,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -8,
      "offsetY": 0,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 01:46.000–01:47.000. No separately asserted effect onset.

**Measured mix:** -16.638 dBFS RMS; -3.117 dBFS peak. Source samples per channel 5088000–5136000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 01:47.000–01:48.000 · frames 3210–3239

**Shots:** shot-26
**Narration:** of dark ocean floor in
**Captions:** of dark ocean floor
**Visible overlay layers:** elapsed, crossing-distance, captions

**01:47.000–01:48.000 · crossing:** Sustain cable journey with distance metric and full pulse intensity; repeater recedes behind.
**Sampling:** Output frames 3210–3239.
- Foreground: Regenerated golden pulse and armored cable.
- Background: Repeater falls behind;rough seabed banks and fixed dust.
- Camera: eye[4.7,2.2,-9.8-3.7t],look[0,.4,-27-3.7t],fov53,offset[-8,0].
- Light: Constant pulse100,scale.67;repeater rim12,no reveal or labels.
- Continuity: Strict overlay condition global>108.1,not >=108.1.
- Evaluated recipe sample: {   "native": 107.5,   "local": 3.9,   "pulse_z": -46.5,   "eye_z": -24.23,   "distance_metric_km": 12000,   "latency_metric_visible": false }
- Construction source: src/marine-shots.ts:34-55; src/index.tsx:44

**Clock / handoff shot-26:** origin 103.6s; active local range 3.4000000000000057–4.366666666666674s; reset key 103.6; {   "enter": true,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 3210,
    "shot": "shot-26",
    "local": 3.4000000000000057,
    "eye": [
      4.7,
      2.2,
      -22.380000000000024
    ],
    "direction": [
      -0.26225898259447644,
      -0.10043961035533143,
      -0.9597562767287221
    ],
    "quaternion": [
      -0.0498368540589226,
      0.13280869554795205,
      0.006686533192264274,
      0.9898653588434287
    ],
    "fov": 53,
    "view": {
      "enabled": true,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -8,
      "offsetY": 0,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 3239,
    "shot": "shot-26",
    "local": 4.366666666666674,
    "eye": [
      4.7,
      2.2,
      -25.956666666666695
    ],
    "direction": [
      -0.2622589825944764,
      -0.10043961035533143,
      -0.9597562767287221
    ],
    "quaternion": [
      -0.0498368540589226,
      0.13280869554795202,
      0.00668653319226427,
      0.9898653588434287
    ],
    "fov": 53,
    "view": {
      "enabled": true,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -8,
      "offsetY": 0,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 01:47.000–01:48.000. No separately asserted effect onset.

**Measured mix:** -18.056 dBFS RMS; -2.901 dBFS peak. Source samples per channel 5136000–5184000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 01:48.000–01:49.000 · frames 3240–3269

**Shots:** shot-26
**Narration:** in only 60 milliseconds.
**Captions:** of dark ocean floor / in only 60 milliseconds.
**Visible overlay layers:** elapsed, crossing-distance, crossing-time, captions

**01:48.000–01:48.100 · crossing:** Sustain cable journey with distance metric and full pulse intensity; repeater recedes behind.
**Sampling:** Output frames 3240–3242.
- Foreground: Regenerated golden pulse and armored cable.
- Background: Repeater falls behind;rough seabed banks and fixed dust.
- Camera: eye[4.7,2.2,-9.8-3.7t],look[0,.4,-27-3.7t],fov53,offset[-8,0].
- Light: Constant pulse100,scale.67;repeater rim12,no reveal or labels.
- Continuity: Strict overlay condition global>108.1,not >=108.1.
- Evaluated recipe sample: {   "native": 108.05,   "local": 4.45,   "pulse_z": -49.25,   "eye_z": -26.265,   "distance_metric_km": 12000,   "latency_metric_visible": false }
- Construction source: src/marine-shots.ts:34-55; src/index.tsx:44

**01:48.100–01:49.000 · crossing:** 60ms metric appears only afterglobal108.1; keep distance metric and advancing bright signal through end of crossing.
**Sampling:** Output frames 3243–3269.
- Foreground: Regenerated golden pulse and armored cable.
- Background: Repeater falls behind;rough seabed banks and fixed dust.
- Camera: eye[4.7,2.2,-9.8-3.7t],look[0,.4,-27-3.7t],fov53,offset[-8,0].
- Light: Constant pulse100,scale.67;repeater rim12,no reveal or labels.
- Continuity: Strict overlay condition global>108.1,not >=108.1.
- Evaluated recipe sample: {   "native": 108.55,   "local": 4.95,   "pulse_z": -51.75,   "eye_z": -28.115,   "distance_metric_km": 12000,   "latency_metric_visible": true }
- Construction source: src/marine-shots.ts:34-55; src/index.tsx:44

**Clock / handoff shot-26:** origin 103.6s; active local range 4.400000000000006–5.366666666666674s; reset key 103.6; {   "enter": true,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 3240,
    "shot": "shot-26",
    "local": 4.400000000000006,
    "eye": [
      4.7,
      2.2,
      -26.080000000000023
    ],
    "direction": [
      -0.2622589825944764,
      -0.10043961035533143,
      -0.9597562767287221
    ],
    "quaternion": [
      -0.0498368540589226,
      0.13280869554795202,
      0.00668653319226427,
      0.9898653588434287
    ],
    "fov": 53,
    "view": {
      "enabled": true,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -8,
      "offsetY": 0,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 3269,
    "shot": "shot-26",
    "local": 5.366666666666674,
    "eye": [
      4.7,
      2.2,
      -29.656666666666695
    ],
    "direction": [
      -0.26225898259447633,
      -0.1004396103553314,
      -0.9597562767287221
    ],
    "quaternion": [
      -0.04983685405892259,
      0.132808695547952,
      0.006686533192264268,
      0.9898653588434287
    ],
    "fov": 53,
    "view": {
      "enabled": true,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -8,
      "offsetY": 0,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 01:48.000–01:49.000. No separately asserted effect onset.

**Measured mix:** -15.657 dBFS RMS; -1.723 dBFS peak. Source samples per channel 5184000–5232000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 01:49.000–01:50.000 · frames 3270–3299

**Shots:** shot-26
**Narration:** milliseconds. At
**Captions:** in only 60 milliseconds.
**Visible overlay layers:** elapsed, crossing-distance, crossing-time, captions

**01:49.000–01:50.000 · crossing:** 60ms metric appears only afterglobal108.1; keep distance metric and advancing bright signal through end of crossing.
**Sampling:** Output frames 3270–3299.
- Foreground: Regenerated golden pulse and armored cable.
- Background: Repeater falls behind;rough seabed banks and fixed dust.
- Camera: eye[4.7,2.2,-9.8-3.7t],look[0,.4,-27-3.7t],fov53,offset[-8,0].
- Light: Constant pulse100,scale.67;repeater rim12,no reveal or labels.
- Continuity: Strict overlay condition global>108.1,not >=108.1.
- Evaluated recipe sample: {   "native": 109.5,   "local": 5.9,   "pulse_z": -56.5,   "eye_z": -31.63,   "distance_metric_km": 12000,   "latency_metric_visible": true }
- Construction source: src/marine-shots.ts:34-55; src/index.tsx:44

**Clock / handoff shot-26:** origin 103.6s; active local range 5.400000000000006–6.366666666666674s; reset key 103.6; {   "enter": true,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 3270,
    "shot": "shot-26",
    "local": 5.400000000000006,
    "eye": [
      4.7,
      2.2,
      -29.780000000000022
    ],
    "direction": [
      -0.26225898259447644,
      -0.10043961035533143,
      -0.9597562767287221
    ],
    "quaternion": [
      -0.0498368540589226,
      0.13280869554795205,
      0.006686533192264274,
      0.9898653588434287
    ],
    "fov": 53,
    "view": {
      "enabled": true,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -8,
      "offsetY": 0,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 3299,
    "shot": "shot-26",
    "local": 6.366666666666674,
    "eye": [
      4.7,
      2.2,
      -33.3566666666667
    ],
    "direction": [
      -0.26225898259447633,
      -0.1004396103553314,
      -0.9597562767287221
    ],
    "quaternion": [
      -0.04983685405892259,
      0.132808695547952,
      0.006686533192264268,
      0.9898653588434287
    ],
    "fov": 53,
    "view": {
      "enabled": true,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -8,
      "offsetY": 0,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 01:49.000–01:50.000. No separately asserted effect onset.

**Measured mix:** -19.64 dBFS RMS; -3.553 dBFS peak. Source samples per channel 5232000–5280000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 01:50.000–01:51.000 · frames 3300–3329

**Shots:** shot-26, shot-27
**Narration:** At 150 milliseconds,
**Captions:** in only 60 milliseconds. / At 150 milliseconds
**Visible overlay layers:** elapsed, crossing-distance, crossing-time, captions

**01:50.000–01:50.100 · crossing:** 60ms metric appears only afterglobal108.1; keep distance metric and advancing bright signal through end of crossing.
**Sampling:** Output frames 3300–3302.
- Foreground: Regenerated golden pulse and armored cable.
- Background: Repeater falls behind;rough seabed banks and fixed dust.
- Camera: eye[4.7,2.2,-9.8-3.7t],look[0,.4,-27-3.7t],fov53,offset[-8,0].
- Light: Constant pulse100,scale.67;repeater rim12,no reveal or labels.
- Continuity: Strict overlay condition global>108.1,not >=108.1.
- Evaluated recipe sample: {   "native": 110.05,   "local": 6.45,   "pulse_z": -59.25,   "eye_z": -33.665,   "distance_metric_km": 12000,   "latency_metric_visible": true }
- Construction source: src/marine-shots.ts:34-55; src/index.tsx:44

**01:50.100–01:51.000 · la:** Signal begins near water foreground,z24,and moves toward the Los Angeles shoreline; warm water shimmer follows it.
**Sampling:** Output frames 3303–3329.
- Foreground: Waterfront signal,parallel palms and low building edges.
- Background: Offset LA skylinex-34,z-120;street carries cable toward-70.
- Camera: eye[0,3.4,22-2.2t],look[0,3,-55],fov51.
- Light: Golden water glint source follows signal atheight5;signal glow4.5 andpoint45.
- Continuity: Pulse travel uses getPointAt eased arc fraction; narrative stage labels are approximate spatial phases, formula is authority.
- Evaluated recipe sample: {   "native": 110.55,   "local": 0.45,   "path_arc_fraction": 0.0407774,   "eye_z": 21.01,   "pulse_position": [     0,     -0.3,     20.1660633   ] }
- Construction source: src/infrastructure.ts:26-49

**Clock / handoff shot-26:** origin 103.6s; active local range 6.400000000000006–6.466666666666669s; reset key 103.6; {   "enter": true,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }
**Clock / handoff shot-27:** origin 110.1s; active local range 0.0–0.8666666666666742s; reset key 110.1; {   "enter": false,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 3300,
    "shot": "shot-26",
    "local": 6.400000000000006,
    "eye": [
      4.7,
      2.2,
      -33.48000000000002
    ],
    "direction": [
      -0.26225898259447633,
      -0.1004396103553314,
      -0.9597562767287221
    ],
    "quaternion": [
      -0.04983685405892259,
      0.132808695547952,
      0.006686533192264268,
      0.9898653588434287
    ],
    "fov": 53,
    "view": {
      "enabled": true,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -8,
      "offsetY": 0,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 3329,
    "shot": "shot-27",
    "local": 0.8666666666666742,
    "eye": [
      0,
      3.4,
      20.093333333333316
    ],
    "direction": [
      0,
      -0.005326628977687699,
      -0.9999858134112374
    ],
    "quaternion": [
      -0.002663323934730951,
      0,
      0,
      0.99999645334652
    ],
    "fov": 51,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -8,
      "offsetY": 0,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 01:50.000–01:51.000. No separately asserted effect onset.

**Measured mix:** -17.224 dBFS RMS; -2.626 dBFS peak. Source samples per channel 5280000–5328000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 01:51.000–01:52.000 · frames 3330–3359

**Shots:** shot-27
**Narration:** milliseconds, the light reaches
**Captions:** At 150 milliseconds / the light reaches
**Visible overlay layers:** elapsed, captions

**01:51.000–01:51.100 · la:** Signal begins near water foreground,z24,and moves toward the Los Angeles shoreline; warm water shimmer follows it.
**Sampling:** Output frames 3330–3332.
- Foreground: Waterfront signal,parallel palms and low building edges.
- Background: Offset LA skylinex-34,z-120;street carries cable toward-70.
- Camera: eye[0,3.4,22-2.2t],look[0,3,-55],fov51.
- Light: Golden water glint source follows signal atheight5;signal glow4.5 andpoint45.
- Continuity: Pulse travel uses getPointAt eased arc fraction; narrative stage labels are approximate spatial phases, formula is authority.
- Evaluated recipe sample: {   "native": 111.05,   "local": 0.95,   "path_arc_fraction": 0.1639192,   "eye_z": 19.91,   "pulse_position": [     0,     -0.3,     8.5885277   ] }
- Construction source: src/infrastructure.ts:26-49

**01:51.100–01:52.000 · la:** Eased pulse traverses toward shore, then rises through the cable bend around z-22; camera pushes forward between palm-lined street edges.
**Sampling:** Output frames 3333–3359.
- Foreground: Waterfront signal,parallel palms and low building edges.
- Background: Offset LA skylinex-34,z-120;street carries cable toward-70.
- Camera: eye[0,3.4,22-2.2t],look[0,3,-55],fov51.
- Light: Golden water glint source follows signal atheight5;signal glow4.5 andpoint45.
- Continuity: Pulse travel uses getPointAt eased arc fraction; narrative stage labels are approximate spatial phases, formula is authority.
- Evaluated recipe sample: {   "native": 111.55,   "local": 1.45,   "path_arc_fraction": 0.3403648,   "eye_z": 18.81,   "pulse_position": [     0,     -0.3858577,     -8.0015646   ] }
- Construction source: src/infrastructure.ts:26-49

**Clock / handoff shot-27:** origin 110.1s; active local range 0.9000000000000057–1.8666666666666742s; reset key 110.1; {   "enter": false,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 3330,
    "shot": "shot-27",
    "local": 0.9000000000000057,
    "eye": [
      0,
      3.4,
      20.01999999999999
    ],
    "direction": [
      0,
      -0.005331835700682521,
      -0.9999857856630068
    ],
    "quaternion": [
      -0.0026659273239554387,
      0,
      0,
      0.9999964464094376
    ],
    "fov": 51,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -8,
      "offsetY": 0,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 3359,
    "shot": "shot-27",
    "local": 1.8666666666666742,
    "eye": [
      0,
      3.4,
      17.893333333333317
    ],
    "direction": [
      0,
      -0.005487387657810541,
      -0.9999849441750075
    ],
    "quaternion": [
      -0.0027437041561071073,
      0,
      0,
      0.9999962360366682
    ],
    "fov": 51,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -8,
      "offsetY": 0,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 01:51.000–01:52.000. No separately asserted effect onset.

**Measured mix:** -16.63 dBFS RMS; -2.289 dBFS peak. Source samples per channel 5328000–5376000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.

**Measured candidate cue (identity unconfirmed):** id: measured-transient-4
timeSeconds: 111.607
nearestVideoFrame: 3348
onsetResolutionSeconds: 0.011609977324263039
description: Short bright transient
centroidHz: 6375
estimatedDurationSeconds: 0.081
speechMaskActive: False
coincidentVisualBeats: la-122
relationship: Temporal coexistence with these visual actions; causation or intended synchronization is not asserted.
identityStatus: Acoustic measurement; effect identity unconfirmed. This can include music/speech attacks.

### 01:52.000–01:53.000 · frames 3360–3389

**Shots:** shot-27
**Narration:** reaches Los Angeles,
**Captions:** the light reaches / Los Angeles,
**Visible overlay layers:** elapsed, captions

**01:52.000–01:52.100 · la:** Eased pulse traverses toward shore, then rises through the cable bend around z-22; camera pushes forward between palm-lined street edges.
**Sampling:** Output frames 3360–3362.
- Foreground: Waterfront signal,parallel palms and low building edges.
- Background: Offset LA skylinex-34,z-120;street carries cable toward-70.
- Camera: eye[0,3.4,22-2.2t],look[0,3,-55],fov51.
- Light: Golden water glint source follows signal atheight5;signal glow4.5 andpoint45.
- Continuity: Pulse travel uses getPointAt eased arc fraction; narrative stage labels are approximate spatial phases, formula is authority.
- Evaluated recipe sample: {   "native": 112.05,   "local": 1.95,   "path_arc_fraction": 0.5405011,   "eye_z": 17.71,   "pulse_position": [     0,     0.2403902,     -26.7947942   ] }
- Construction source: src/infrastructure.ts:26-49

**01:52.100–01:53.000 · la:** Signal has reached the elevated street section past the shoreline bend and advances toward the distant endpoint; moving warm water reflection continues following its xz source.
**Sampling:** Output frames 3363–3389.
- Foreground: Waterfront signal,parallel palms and low building edges.
- Background: Offset LA skylinex-34,z-120;street carries cable toward-70.
- Camera: eye[0,3.4,22-2.2t],look[0,3,-55],fov51.
- Light: Golden water glint source follows signal atheight5;signal glow4.5 andpoint45.
- Continuity: Pulse travel uses getPointAt eased arc fraction; narrative stage labels are approximate spatial phases, formula is authority.
- Evaluated recipe sample: {   "native": 112.55,   "local": 2.45,   "path_arc_fraction": 0.7347146,   "eye_z": 16.61,   "pulse_position": [     0,     0.2460373,     -45.0573905   ] }
- Construction source: src/infrastructure.ts:26-49

**Clock / handoff shot-27:** origin 110.1s; active local range 1.9000000000000057–2.8666666666666742s; reset key 110.1; {   "enter": false,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 3360,
    "shot": "shot-27",
    "local": 1.9000000000000057,
    "eye": [
      0,
      3.4,
      17.819999999999986
    ],
    "direction": [
      0,
      -0.005492913561310123,
      -0.999984913836508
    ],
    "quaternion": [
      -0.0027464671390876666,
      0,
      0,
      0.9999962284520145
    ],
    "fov": 51,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -8,
      "offsetY": 0,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 3389,
    "shot": "shot-27",
    "local": 2.8666666666666742,
    "eye": [
      0,
      3.4,
      15.693333333333317
    ],
    "direction": [
      0,
      -0.005658151598635179,
      -0.9999839925321239
    ],
    "quaternion": [
      -0.002829087120970545,
      0,
      0,
      0.9999959981250236
    ],
    "fov": 51,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -8,
      "offsetY": 0,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 01:52.000–01:53.000. No separately asserted effect onset.

**Measured mix:** -15.689 dBFS RMS; -4.236 dBFS peak. Source samples per channel 5376000–5424000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 01:53.000–01:54.000 · frames 3390–3419

**Shots:** shot-27, shot-28
**Narration:** Angeles, where it converts back
**Captions:** Los Angeles, / where it converts back
**Visible overlay layers:** elapsed, captions

**01:53.000–01:53.100 · la:** Signal has reached the elevated street section past the shoreline bend and advances toward the distant endpoint; moving warm water reflection continues following its xz source.
**Sampling:** Output frames 3390–3392.
- Foreground: Waterfront signal,parallel palms and low building edges.
- Background: Offset LA skylinex-34,z-120;street carries cable toward-70.
- Camera: eye[0,3.4,22-2.2t],look[0,3,-55],fov51.
- Light: Golden water glint source follows signal atheight5;signal glow4.5 andpoint45.
- Continuity: Pulse travel uses getPointAt eased arc fraction; narrative stage labels are approximate spatial phases, formula is authority.
- Evaluated recipe sample: {   "native": 113.05,   "local": 2.95,   "path_arc_fraction": 0.8933923,   "eye_z": 15.51,   "pulse_position": [     0,     0.1679124,     -59.9775534   ] }
- Construction source: src/infrastructure.ts:26-49

**01:53.100–01:53.800 · la:** Pulse approaches far route endpointz-70; continue city approach with Los Angeles label and coast behind.
**Sampling:** Output frames 3393–3413.
- Foreground: Waterfront signal,parallel palms and low building edges.
- Background: Offset LA skylinex-34,z-120;street carries cable toward-70.
- Camera: eye[0,3.4,22-2.2t],look[0,3,-55],fov51.
- Light: Golden water glint source follows signal atheight5;signal glow4.5 andpoint45.
- Continuity: Pulse travel uses getPointAt eased arc fraction; narrative stage labels are approximate spatial phases, formula is authority.
- Evaluated recipe sample: {   "native": 113.45,   "local": 3.35,   "path_arc_fraction": 0.9748485,   "eye_z": 14.63,   "pulse_position": [     0,     0.1420273,     -67.6371348   ] }
- Construction source: src/infrastructure.ts:26-49

**01:53.800–01:54.000 · receive-radio:** Four staggered radio shells expand from receiver mast; the oldest shell fades toward its first reset.
**Sampling:** Output frames 3414–3419.
- Foreground: Receiver mast with expanding fade-out shells;no visible phone or packet field.
- Background: Road bars,cool roadside points and LA buildings.
- Camera: Static eye[13,15,15],look[3,11,-11],fov46.
- Light: Four amber Fresnel sphere rims plus red beacon12; city/studio blue fill.
- Continuity: Shell reset times are local .9259259,1.8518519,2.7777778; next packet-arrival shot has independent builder.
- Evaluated recipe sample: {   "native": 113.9,   "local": 0.1,   "shell_phase": [     0.027,     0.277,     0.527,     0.777   ],   "shell_radius": [     1.024,     4.024,     7.024,     10.024   ] }
- Construction source: src/infrastructure.ts:50-66

**Clock / handoff shot-27:** origin 110.1s; active local range 2.9000000000000057–3.6666666666666714s; reset key 110.1; {   "enter": false,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }
**Clock / handoff shot-28:** origin 113.8s; active local range 0.0–0.1666666666666714s; reset key 113.8; {   "enter": false,   "exit": true,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 3390,
    "shot": "shot-27",
    "local": 2.9000000000000057,
    "eye": [
      0,
      3.4,
      15.619999999999987
    ],
    "direction": [
      0,
      -0.0056640269570697385,
      -0.9999839592706623
    ],
    "quaternion": [
      -0.002832024835493607,
      0,
      0,
      0.9999959898096248
    ],
    "fov": 51,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -8,
      "offsetY": 0,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 3419,
    "shot": "shot-28",
    "local": 0.1666666666666714,
    "eye": [
      13,
      15,
      15
    ],
    "direction": [
      -0.3553345272593508,
      -0.14213381090374033,
      -0.9238697708743119
    ],
    "quaternion": [
      -0.07005066476695165,
      0.18209343461133418,
      0.013006843195718504,
      0.9806965419880085
    ],
    "fov": 46,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -8,
      "offsetY": 0,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 01:53.000–01:54.000. No separately asserted effect onset.

**Measured mix:** -17.146 dBFS RMS; -3.224 dBFS peak. Source samples per channel 5424000–5472000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 01:54.000–01:55.000 · frames 3420–3449

**Shots:** shot-28
**Narration:** back into radio waves
**Captions:** where it converts back / into radio waves
**Visible overlay layers:** elapsed, captions

**01:54.000–01:54.726 · receive-radio:** Four staggered radio shells expand from receiver mast; the oldest shell fades toward its first reset.
**Sampling:** Output frames 3420–3441.
- Foreground: Receiver mast with expanding fade-out shells;no visible phone or packet field.
- Background: Road bars,cool roadside points and LA buildings.
- Camera: Static eye[13,15,15],look[3,11,-11],fov46.
- Light: Four amber Fresnel sphere rims plus red beacon12; city/studio blue fill.
- Continuity: Shell reset times are local .9259259,1.8518519,2.7777778; next packet-arrival shot has independent builder.
- Evaluated recipe sample: {   "native": 114.362962963,   "local": 0.562962963,   "shell_phase": [     0.152,     0.402,     0.652,     0.902   ],   "shell_radius": [     2.524,     5.524,     8.524,     11.524   ] }
- Construction source: src/infrastructure.ts:50-66

**01:54.726–01:55.000 · receive-radio:** Oldest shell restarts small and bright; remaining shells continue expansion and fade.
**Sampling:** Output frames 3442–3449.
- Foreground: Receiver mast with expanding fade-out shells;no visible phone or packet field.
- Background: Road bars,cool roadside points and LA buildings.
- Camera: Static eye[13,15,15],look[3,11,-11],fov46.
- Light: Four amber Fresnel sphere rims plus red beacon12; city/studio blue fill.
- Continuity: Shell reset times are local .9259259,1.8518519,2.7777778; next packet-arrival shot has independent builder.
- Evaluated recipe sample: {   "native": 114.862962963,   "local": 1.062962963,   "shell_phase": [     0.287,     0.537,     0.787,     0.037   ],   "shell_radius": [     4.144,     7.144,     10.144,     1.144   ] }
- Construction source: src/infrastructure.ts:50-66

**Clock / handoff shot-28:** origin 113.8s; active local range 0.20000000000000284–1.1666666666666714s; reset key 113.8; {   "enter": false,   "exit": true,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 3420,
    "shot": "shot-28",
    "local": 0.20000000000000284,
    "eye": [
      13,
      15,
      15
    ],
    "direction": [
      -0.3553345272593508,
      -0.14213381090374033,
      -0.9238697708743119
    ],
    "quaternion": [
      -0.07005066476695165,
      0.18209343461133418,
      0.013006843195718504,
      0.9806965419880085
    ],
    "fov": 46,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -8,
      "offsetY": 0,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 3449,
    "shot": "shot-28",
    "local": 1.1666666666666714,
    "eye": [
      13,
      15,
      15
    ],
    "direction": [
      -0.3553345272593508,
      -0.14213381090374033,
      -0.9238697708743119
    ],
    "quaternion": [
      -0.07005066476695165,
      0.18209343461133418,
      0.013006843195718504,
      0.9806965419880085
    ],
    "fov": 46,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -8,
      "offsetY": 0,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 01:54.000–01:55.000. No separately asserted effect onset.

**Measured mix:** -15.613 dBFS RMS; -2.799 dBFS peak. Source samples per channel 5472000–5520000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 01:55.000–01:56.000 · frames 3450–3479

**Shots:** shot-28
**Narration:** waves that travel through the air
**Captions:** into radio waves / that travel through the air
**Visible overlay layers:** elapsed, captions

**01:55.000–01:55.652 · receive-radio:** Oldest shell restarts small and bright; remaining shells continue expansion and fade.
**Sampling:** Output frames 3450–3469.
- Foreground: Receiver mast with expanding fade-out shells;no visible phone or packet field.
- Background: Road bars,cool roadside points and LA buildings.
- Camera: Static eye[13,15,15],look[3,11,-11],fov46.
- Light: Four amber Fresnel sphere rims plus red beacon12; city/studio blue fill.
- Continuity: Shell reset times are local .9259259,1.8518519,2.7777778; next packet-arrival shot has independent builder.
- Evaluated recipe sample: {   "native": 115.325925926,   "local": 1.525925926,   "shell_phase": [     0.412,     0.662,     0.912,     0.162   ],   "shell_radius": [     5.644,     8.644,     11.644,     2.644   ] }
- Construction source: src/infrastructure.ts:50-66

**01:55.652–01:56.000 · receive-radio:** Second shell resets while phased broadcast continues around fixed tower.
**Sampling:** Output frames 3470–3479.
- Foreground: Receiver mast with expanding fade-out shells;no visible phone or packet field.
- Background: Road bars,cool roadside points and LA buildings.
- Camera: Static eye[13,15,15],look[3,11,-11],fov46.
- Light: Four amber Fresnel sphere rims plus red beacon12; city/studio blue fill.
- Continuity: Shell reset times are local .9259259,1.8518519,2.7777778; next packet-arrival shot has independent builder.
- Evaluated recipe sample: {   "native": 115.825925926,   "local": 2.025925926,   "shell_phase": [     0.547,     0.797,     0.047,     0.297   ],   "shell_radius": [     7.264,     10.264,     1.264,     4.264   ] }
- Construction source: src/infrastructure.ts:50-66

**Clock / handoff shot-28:** origin 113.8s; active local range 1.2000000000000028–2.1666666666666714s; reset key 113.8; {   "enter": false,   "exit": true,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 3450,
    "shot": "shot-28",
    "local": 1.2000000000000028,
    "eye": [
      13,
      15,
      15
    ],
    "direction": [
      -0.3553345272593508,
      -0.14213381090374033,
      -0.9238697708743119
    ],
    "quaternion": [
      -0.07005066476695165,
      0.18209343461133418,
      0.013006843195718504,
      0.9806965419880085
    ],
    "fov": 46,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -8,
      "offsetY": 0,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 3479,
    "shot": "shot-28",
    "local": 2.1666666666666714,
    "eye": [
      13,
      15,
      15
    ],
    "direction": [
      -0.3553345272593508,
      -0.14213381090374033,
      -0.9238697708743119
    ],
    "quaternion": [
      -0.07005066476695165,
      0.18209343461133418,
      0.013006843195718504,
      0.9806965419880085
    ],
    "fov": 46,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -8,
      "offsetY": 0,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 01:55.000–01:56.000. No separately asserted effect onset.

**Measured mix:** -16.537 dBFS RMS; -3.195 dBFS peak. Source samples per channel 5520000–5568000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 01:56.000–01:57.000 · frames 3480–3509

**Shots:** shot-28, shot-29
**Narration:** to your phone.
**Captions:** that travel through the air / to your phone.
**Visible overlay layers:** elapsed, arrival-count, captions

**01:56.000–01:56.578 · receive-radio:** Second shell resets while phased broadcast continues around fixed tower.
**Sampling:** Output frames 3480–3497.
- Foreground: Receiver mast with expanding fade-out shells;no visible phone or packet field.
- Background: Road bars,cool roadside points and LA buildings.
- Camera: Static eye[13,15,15],look[3,11,-11],fov46.
- Light: Four amber Fresnel sphere rims plus red beacon12; city/studio blue fill.
- Continuity: Shell reset times are local .9259259,1.8518519,2.7777778; next packet-arrival shot has independent builder.
- Evaluated recipe sample: {   "native": 116.288888889,   "local": 2.488888889,   "shell_phase": [     0.672,     0.922,     0.172,     0.422   ],   "shell_radius": [     8.764,     11.764,     2.764,     5.764   ] }
- Construction source: src/infrastructure.ts:50-66

**01:56.578–01:56.633 · receive-radio:** Third shell resets; four-phase radio propagation continues before optical handoff.
**Sampling:** Output frames 3498–3498.
- Foreground: Receiver mast with expanding fade-out shells;no visible phone or packet field.
- Background: Road bars,cool roadside points and LA buildings.
- Camera: Static eye[13,15,15],look[3,11,-11],fov46.
- Light: Four amber Fresnel sphere rims plus red beacon12; city/studio blue fill.
- Continuity: Shell reset times are local .9259259,1.8518519,2.7777778; next packet-arrival shot has independent builder.
- Evaluated recipe sample: {   "native": 116.605388889,   "local": 2.805388889,   "shell_phase": [     0.757455,     0.007455,     0.257455,     0.507455   ],   "shell_radius": [     9.78946,     0.78946,     3.78946,     6.78946   ] }
- Construction source: src/infrastructure.ts:50-66

**01:56.633–01:56.833 · receive-radio:** Outgoing optical scale/blur builds toward packet arrival; receiver shells continue normal phase updates.
**Sampling:** Output frames 3499–3504.
- Foreground: Receiver mast with expanding fade-out shells;no visible phone or packet field.
- Background: Road bars,cool roadside points and LA buildings.
- Camera: Static eye[13,15,15],look[3,11,-11],fov46.
- Light: Four amber Fresnel sphere rims plus red beacon12; city/studio blue fill.
- Continuity: Shell reset times are local .9259259,1.8518519,2.7777778; next packet-arrival shot has independent builder.
- Evaluated recipe sample: {   "native": 116.733,   "local": 2.933,   "shell_phase": [     0.79191,     0.04191,     0.29191,     0.54191   ],   "shell_radius": [     10.20292,     1.20292,     4.20292,     7.20292   ] }
- Construction source: src/infrastructure.ts:50-66

**01:56.833–01:57.000 · arrival:** Begin dropping 1,497 visible packets into scrambled slots while the counter holds at zero.
**Sampling:** Output frames 3505–3509.
- Foreground: Gold numbered tiles begin 5–20 units above the board; three missing identities stay hidden.
- Background: Wide cool studio, navy board base, and cyan network paths below the board.
- Camera: Before local 2.6: eye [0, 17, 23], look [0, 0, -1]. After 2.6: interpolate eye [0, 22, 22]→[-4, 4.5, 10] through local 5, with look [0, 0, 1]. FOV 48.
- Light: Gold emissive packet bodies and unlit number faces; the wide key light casts board shadows.
- Continuity: The incoming picture handoff lasts 0.23 seconds. The counter starts after 0.3 seconds.
- Construction source: src/extensions.ts:11-16; src/index.tsx:45; src/camera-edit.ts:4-10

**Clock / handoff shot-28:** origin 113.8s; active local range 2.200000000000003–3.0s; reset key 113.8; {   "enter": false,   "exit": true,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }
**Clock / handoff shot-29:** origin 116.833s; active local range 0.000333333333330188–0.13366666666667015s; reset key 116.833; {   "enter": true,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 3480,
    "shot": "shot-28",
    "local": 2.200000000000003,
    "eye": [
      13,
      15,
      15
    ],
    "direction": [
      -0.3553345272593508,
      -0.14213381090374033,
      -0.9238697708743119
    ],
    "quaternion": [
      -0.07005066476695165,
      0.18209343461133418,
      0.013006843195718504,
      0.9806965419880085
    ],
    "fov": 46,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -8,
      "offsetY": 0,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 3509,
    "shot": "shot-29",
    "local": 0.13366666666667015,
    "eye": [
      0,
      17,
      23
    ],
    "direction": [
      0,
      -0.5780173407803391,
      -0.816024481101655
    ],
    "quaternion": [
      -0.30329483914035277,
      0,
      0,
      0.9528967627979579
    ],
    "fov": 48,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -8,
      "offsetY": 0,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 01:56.000–01:57.000. No separately asserted effect onset.

**Measured mix:** -19.563 dBFS RMS; -4.77 dBFS peak. Source samples per channel 5568000–5616000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 01:57.000–01:58.000 · frames 3510–3539

**Shots:** shot-29
**Narration:** The packets arrive in the wrong
**Captions:** The packets arrive / in the wrong order
**Visible overlay layers:** elapsed, arrival-count, captions

**01:57.000–01:57.133 · arrival:** Begin dropping 1,497 visible packets into scrambled slots while the counter holds at zero.
**Sampling:** Output frames 3510–3513.
- Foreground: Gold numbered tiles begin 5–20 units above the board; three missing identities stay hidden.
- Background: Wide cool studio, navy board base, and cyan network paths below the board.
- Camera: Before local 2.6: eye [0, 17, 23], look [0, 0, -1]. After 2.6: interpolate eye [0, 22, 22]→[-4, 4.5, 10] through local 5, with look [0, 0, 1]. FOV 48.
- Light: Gold emissive packet bodies and unlit number faces; the wide key light casts board shadows.
- Continuity: The incoming picture handoff lasts 0.23 seconds. The counter starts after 0.3 seconds.
- Construction source: src/extensions.ts:11-16; src/index.tsx:45; src/camera-edit.ts:4-10

**01:57.133–01:58.000 · arrival:** Increase the counter from zero to 1,497 while the packet falls remain staggered.
**Sampling:** Output frames 3514–3539.
- Foreground: Numbered tiles descend toward their permuted board positions.
- Background: Wide cool studio, navy board base, and cyan network paths below the board.
- Camera: Before local 2.6: eye [0, 17, 23], look [0, 0, -1]. After 2.6: interpolate eye [0, 22, 22]→[-4, 4.5, 10] through local 5, with look [0, 0, 1]. FOV 48.
- Light: Gold emissive packet bodies and unlit number faces; the wide key light casts board shadows.
- Continuity: The counter is round(1497 * step(local, 0.3, 1.8)); the physical falls are not complete when it reaches 1,497.
- Construction source: src/extensions.ts:11-16; src/index.tsx:45; src/camera-edit.ts:4-10

**Clock / handoff shot-29:** origin 116.833s; active local range 0.1670000000000016–1.1336666666666702s; reset key 116.833; {   "enter": true,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 3510,
    "shot": "shot-29",
    "local": 0.1670000000000016,
    "eye": [
      0,
      17,
      23
    ],
    "direction": [
      0,
      -0.5780173407803391,
      -0.816024481101655
    ],
    "quaternion": [
      -0.30329483914035277,
      0,
      0,
      0.9528967627979579
    ],
    "fov": 48,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -8,
      "offsetY": 0,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 3539,
    "shot": "shot-29",
    "local": 1.1336666666666702,
    "eye": [
      0,
      17,
      23
    ],
    "direction": [
      0,
      -0.5780173407803391,
      -0.816024481101655
    ],
    "quaternion": [
      -0.30329483914035277,
      0,
      0,
      0.9528967627979579
    ],
    "fov": 48,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -8,
      "offsetY": 0,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 01:57.000–01:58.000. No separately asserted effect onset.

**Measured mix:** -16.096 dBFS RMS; -2.811 dBFS peak. Source samples per channel 5616000–5664000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 01:58.000–01:59.000 · frames 3540–3569

**Shots:** shot-29
**Narration:** order, and three packets were
**Captions:** in the wrong order / and three packets were lost
**Visible overlay layers:** elapsed, arrival-count, captions

**01:58.000–01:58.633 · arrival:** Increase the counter from zero to 1,497 while the packet falls remain staggered.
**Sampling:** Output frames 3540–3558.
- Foreground: Numbered tiles descend toward their permuted board positions.
- Background: Wide cool studio, navy board base, and cyan network paths below the board.
- Camera: Before local 2.6: eye [0, 17, 23], look [0, 0, -1]. After 2.6: interpolate eye [0, 22, 22]→[-4, 4.5, 10] through local 5, with look [0, 0, 1]. FOV 48.
- Light: Gold emissive packet bodies and unlit number faces; the wide key light casts board shadows.
- Continuity: The counter is round(1497 * step(local, 0.3, 1.8)); the physical falls are not complete when it reaches 1,497.
- Construction source: src/extensions.ts:11-16; src/index.tsx:45; src/camera-edit.ts:4-10

**01:58.633–01:59.000 · arrival:** Hold the counter at 1,497 while the latest packets finish landing.
**Sampling:** Output frames 3559–3569.
- Foreground: The scrambled tiles settle level with the board; three holes remain unlabeled.
- Background: Wide cool studio, navy board base, and cyan network paths below the board.
- Camera: Before local 2.6: eye [0, 17, 23], look [0, 0, -1]. After 2.6: interpolate eye [0, 22, 22]→[-4, 4.5, 10] through local 5, with look [0, 0, 1]. FOV 48.
- Light: Gold emissive packet bodies and unlit number faces; the wide key light casts board shadows.
- Continuity: All arrival endpoints are at or before local 2.6 seconds. The packets are not sorted yet.
- Construction source: src/extensions.ts:11-16; src/index.tsx:45; src/camera-edit.ts:4-10

**Clock / handoff shot-29:** origin 116.833s; active local range 1.1670000000000016–2.13366666666667s; reset key 116.833; {   "enter": true,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 3540,
    "shot": "shot-29",
    "local": 1.1670000000000016,
    "eye": [
      0,
      17,
      23
    ],
    "direction": [
      0,
      -0.5780173407803391,
      -0.816024481101655
    ],
    "quaternion": [
      -0.30329483914035277,
      0,
      0,
      0.9528967627979579
    ],
    "fov": 48,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -8,
      "offsetY": 0,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 3569,
    "shot": "shot-29",
    "local": 2.13366666666667,
    "eye": [
      0,
      17,
      23
    ],
    "direction": [
      0,
      -0.5780173407803391,
      -0.816024481101655
    ],
    "quaternion": [
      -0.30329483914035277,
      0,
      0,
      0.9528967627979579
    ],
    "fov": 48,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -8,
      "offsetY": 0,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 01:58.000–01:59.000. No separately asserted effect onset.

**Measured mix:** -17.478 dBFS RMS; -2.785 dBFS peak. Source samples per channel 5664000–5712000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 01:59.000–02:00.000 · frames 3570–3599

**Shots:** shot-29
**Narration:** were lost during the trip.
**Captions:** and three packets were lost / during the trip.
**Visible overlay layers:** elapsed, arrival-count, captions

**01:59.000–01:59.433 · arrival:** Hold the counter at 1,497 while the latest packets finish landing.
**Sampling:** Output frames 3570–3582.
- Foreground: The scrambled tiles settle level with the board; three holes remain unlabeled.
- Background: Wide cool studio, navy board base, and cyan network paths below the board.
- Camera: Before local 2.6: eye [0, 17, 23], look [0, 0, -1]. After 2.6: interpolate eye [0, 22, 22]→[-4, 4.5, 10] through local 5, with look [0, 0, 1]. FOV 48.
- Light: Gold emissive packet bodies and unlit number faces; the wide key light casts board shadows.
- Continuity: All arrival endpoints are at or before local 2.6 seconds. The packets are not sorted yet.
- Construction source: src/extensions.ts:11-16; src/index.tsx:45; src/camera-edit.ts:4-10

**01:59.433–02:00.000 · arrival:** Switch the camera to its higher start position, then descend and move left toward the board.
**Sampling:** Output frames 3583–3599.
- Foreground: An increasingly close oblique view shows scrambled packet labels.
- Background: Wide cool studio, navy board base, and cyan network paths below the board.
- Camera: Before local 2.6: eye [0, 17, 23], look [0, 0, -1]. After 2.6: interpolate eye [0, 22, 22]→[-4, 4.5, 10] through local 5, with look [0, 0, 1]. FOV 48.
- Light: Gold emissive packet bodies and unlit number faces; the wide key light casts board shadows.
- Continuity: At local > 2.6, the eye jumps from [0, 17, 23] to [0, 22, 22] and look Z changes from -1 to 1 before interpolation continues.
- Construction source: src/extensions.ts:11-16; src/index.tsx:45; src/camera-edit.ts:4-10

**Clock / handoff shot-29:** origin 116.833s; active local range 2.1670000000000016–3.13366666666667s; reset key 116.833; {   "enter": true,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 3570,
    "shot": "shot-29",
    "local": 2.1670000000000016,
    "eye": [
      0,
      17,
      23
    ],
    "direction": [
      0,
      -0.5780173407803391,
      -0.816024481101655
    ],
    "quaternion": [
      -0.30329483914035277,
      0,
      0,
      0.9528967627979579
    ],
    "fov": 48,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -8,
      "offsetY": 0,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 3599,
    "shot": "shot-29",
    "local": 3.13366666666667,
    "eye": [
      -0.8894444444444501,
      18.10868055555553,
      19.33166666666665
    ],
    "direction": [
      0.03449726103392283,
      -0.7023483973696766,
      -0.7109969533643616
    ],
    "quaternion": [
      -0.37947156990055936,
      -0.02242433845231732,
      -0.009200485611490792,
      0.9248858457921677
    ],
    "fov": 48,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -8,
      "offsetY": 0,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 01:59.000–02:00.000. No separately asserted effect onset.

**Measured mix:** -17.465 dBFS RMS; -3.763 dBFS peak. Source samples per channel 5712000–5760000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 02:00.000–02:01.000 · frames 3600–3629

**Shots:** shot-29
**Narration:** This is where the packet
**Captions:** during the trip. / This is where / the packet numbers matter.
**Visible overlay layers:** elapsed, arrival-count, captions

**02:00.000–02:01.000 · arrival:** Switch the camera to its higher start position, then descend and move left toward the board.
**Sampling:** Output frames 3600–3629.
- Foreground: An increasingly close oblique view shows scrambled packet labels.
- Background: Wide cool studio, navy board base, and cyan network paths below the board.
- Camera: Before local 2.6: eye [0, 17, 23], look [0, 0, -1]. After 2.6: interpolate eye [0, 22, 22]→[-4, 4.5, 10] through local 5, with look [0, 0, 1]. FOV 48.
- Light: Gold emissive packet bodies and unlit number faces; the wide key light casts board shadows.
- Continuity: At local > 2.6, the eye jumps from [0, 17, 23] to [0, 22, 22] and look Z changes from -1 to 1 before interpolation continues.
- Construction source: src/extensions.ts:11-16; src/index.tsx:45; src/camera-edit.ts:4-10

**Clock / handoff shot-29:** origin 116.833s; active local range 3.1670000000000016–4.13366666666667s; reset key 116.833; {   "enter": true,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 3600,
    "shot": "shot-29",
    "local": 3.1670000000000016,
    "eye": [
      -0.9450000000000025,
      17.865624999999987,
      19.164999999999992
    ],
    "direction": [
      0.03706478610598698,
      -0.7007254701320332,
      -0.7124675551484142
    ],
    "quaternion": [
      -0.37840156123647717,
      -0.02405162945809654,
      -0.009836164511884652,
      0.9252767301958382
    ],
    "fov": 48,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -8,
      "offsetY": 0,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 3629,
    "shot": "shot-29",
    "local": 4.13366666666667,
    "eye": [
      -2.5561111111111168,
      10.817013888888864,
      14.33166666666665
    ],
    "direction": [
      0.14726458010183668,
      -0.6231978732765294,
      -0.7680739249519154
    ],
    "quaternion": [
      -0.32862325295046557,
      -0.08927370914382704,
      -0.031219518197724443,
      0.9397139480498624
    ],
    "fov": 48,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -8,
      "offsetY": 0,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 02:00.000–02:01.000. No separately asserted effect onset.

**Measured mix:** -17.28 dBFS RMS; -2.89 dBFS peak. Source samples per channel 5760000–5808000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 02:01.000–02:02.000 · frames 3630–3659

**Shots:** shot-29, shot-30
**Narration:** numbers matter.
**Captions:** the packet numbers matter.
**Visible overlay layers:** elapsed, arrival-count, captions

**02:01.000–02:01.833 · arrival:** Switch the camera to its higher start position, then descend and move left toward the board.
**Sampling:** Output frames 3630–3654.
- Foreground: An increasingly close oblique view shows scrambled packet labels.
- Background: Wide cool studio, navy board base, and cyan network paths below the board.
- Camera: Before local 2.6: eye [0, 17, 23], look [0, 0, -1]. After 2.6: interpolate eye [0, 22, 22]→[-4, 4.5, 10] through local 5, with look [0, 0, 1]. FOV 48.
- Light: Gold emissive packet bodies and unlit number faces; the wide key light casts board shadows.
- Continuity: At local > 2.6, the eye jumps from [0, 17, 23] to [0, 22, 22] and look Z changes from -1 to 1 before interpolation continues.
- Construction source: src/extensions.ts:11-16; src/index.tsx:45; src/camera-edit.ts:4-10

**02:01.833–02:01.900 · arrival:** Hold the low board view for the final 0.067 seconds.
**Sampling:** Output frames 3655–3656.
- Foreground: The scrambled board is ready for the sorting action.
- Background: Wide cool studio, navy board base, and cyan network paths below the board.
- Camera: Before local 2.6: eye [0, 17, 23], look [0, 0, -1]. After 2.6: interpolate eye [0, 22, 22]→[-4, 4.5, 10] through local 5, with look [0, 0, 1]. FOV 48.
- Light: Gold emissive packet bodies and unlit number faces; the wide key light casts board shadows.
- Continuity: The next shot starts from eye [-4, 4.5, 10], but changes look Z from 1 back to -1.
- Construction source: src/extensions.ts:11-16; src/index.tsx:45; src/camera-edit.ts:4-10

**02:01.900–02:02.000 · sort:** Crane the camera upward while the tiles hold their shuffled positions for 0.8 seconds.
**Sampling:** Output frames 3657–3659.
- Foreground: There are 1,497 tiles and three unlabeled gaps.
- Background: Navy board base, cyan paths below it, and a cool studio background.
- Camera: Ease eye [-4, 4.5, 10]→[0, 23, 21] over local 0–2, then hold. Look [0, 0, -1], FOV 48.
- Light: Static wide cool lights, gold packet tiles, and red labels for the missing identities.
- Continuity: The counter remains 1,497 / 1,500. The permutation matches arrival.
- Construction source: src/extensions.ts:11-16; src/index.tsx:45

**Clock / handoff shot-29:** origin 116.833s; active local range 4.167000000000002–5.033666666666662s; reset key 116.833; {   "enter": true,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }
**Clock / handoff shot-30:** origin 121.9s; active local range 0.0–0.06666666666666288s; reset key 121.9; {   "enter": false,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 3630,
    "shot": "shot-29",
    "local": 4.167000000000002,
    "eye": [
      -2.6116666666666695,
      10.573958333333321,
      14.164999999999992
    ],
    "direction": [
      0.15285020247158376,
      -0.6188506721797395,
      -0.77049377748758
    ],
    "quaternion": [
      -0.3259151434901339,
      -0.09237115621239912,
      -0.03201549988755992,
      0.9403307378315034
    ],
    "fov": 48,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -8,
      "offsetY": 0,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 3659,
    "shot": "shot-30",
    "local": 0.06666666666666288,
    "eye": [
      -3.9869629629629646,
      4.56029629629629,
      10.035851851851849
    ],
    "direction": [
      0.31670283628738644,
      -0.3622453443296043,
      -0.8766285553180728
    ],
    "quaternion": [
      -0.18151701439499723,
      -0.16952078287363465,
      -0.03178337645213864,
      0.9681446661735725
    ],
    "fov": 48,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -8,
      "offsetY": 0,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 02:01.000–02:02.000. No separately asserted effect onset.

**Measured mix:** -16.896 dBFS RMS; -3.788 dBFS peak. Source samples per channel 5808000–5856000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 02:02.000–02:03.000 · frames 3660–3689

**Shots:** shot-30
**Narration:** Your phone uses
**Captions:** the packet numbers matter. / Your phone uses the number
**Visible overlay layers:** elapsed, arrival-count, captions

**02:02.000–02:02.700 · sort:** Crane the camera upward while the tiles hold their shuffled positions for 0.8 seconds.
**Sampling:** Output frames 3660–3680.
- Foreground: There are 1,497 tiles and three unlabeled gaps.
- Background: Navy board base, cyan paths below it, and a cool studio background.
- Camera: Ease eye [-4, 4.5, 10]→[0, 23, 21] over local 0–2, then hold. Look [0, 0, -1], FOV 48.
- Light: Static wide cool lights, gold packet tiles, and red labels for the missing identities.
- Continuity: The counter remains 1,497 / 1,500. The permutation matches arrival.
- Construction source: src/extensions.ts:11-16; src/index.tsx:45

**02:02.700–02:03.000 · sort:** Start the earliest sorting arches, with all remaining tiles starting by local 1.5 seconds.
**Sampling:** Output frames 3681–3689.
- Foreground: Gold numbered tiles move laterally and lift above the board.
- Background: Navy board base, cyan paths below it, and a cool studio background.
- Camera: Ease eye [-4, 4.5, 10]→[0, 23, 21] over local 0–2, then hold. Look [0, 0, -1], FOV 48.
- Light: Static wide cool lights, gold packet tiles, and red labels for the missing identities.
- Continuity: Start = 0.8 + 0.7 * rand(i); arch height = 0.4 + 1.5 * rand(i).
- Construction source: src/extensions.ts:11-16; src/index.tsx:45

**Clock / handoff shot-30:** origin 121.9s; active local range 0.09999999999999432–1.0666666666666629s; reset key 121.9; {   "enter": false,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 3660,
    "shot": "shot-30",
    "local": 0.09999999999999432,
    "eye": [
      -3.971000000000003,
      4.634124999999985,
      10.079749999999992
    ],
    "direction": [
      0.3139303905102586,
      -0.36635423594141175,
      -0.8759179663198267
    ],
    "quaternion": [
      -0.1836930775398248,
      -0.16821970783482712,
      -0.031923743111893596,
      0.9679565371366832
    ],
    "fov": 48,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -8,
      "offsetY": 0,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 3689,
    "shot": "shot-30",
    "local": 1.0666666666666629,
    "eye": [
      -1.8002962962963074,
      14.673629629629579,
      16.049185185185156
    ],
    "direction": [
      0.07977861465416934,
      -0.6502495429272084,
      -0.7555202873297437
    ],
    "quaternion": [
      -0.3461322497805632,
      -0.049318576591118664,
      -0.018224131822260764,
      0.9367112813904809
    ],
    "fov": 48,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -8,
      "offsetY": 0,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 02:02.000–02:03.000. No separately asserted effect onset.

**Measured mix:** -16.645 dBFS RMS; -2.545 dBFS peak. Source samples per channel 5856000–5904000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 02:03.000–02:04.000 · frames 3690–3719

**Shots:** shot-30
**Narration:** the number to put the packets
**Captions:** Your phone uses the number / to put the packets
**Visible overlay layers:** elapsed, arrival-count, captions

**02:03.000–02:03.400 · sort:** Start the earliest sorting arches, with all remaining tiles starting by local 1.5 seconds.
**Sampling:** Output frames 3690–3701.
- Foreground: Gold numbered tiles move laterally and lift above the board.
- Background: Navy board base, cyan paths below it, and a cool studio background.
- Camera: Ease eye [-4, 4.5, 10]→[0, 23, 21] over local 0–2, then hold. Look [0, 0, -1], FOV 48.
- Light: Static wide cool lights, gold packet tiles, and red labels for the missing identities.
- Continuity: Start = 0.8 + 0.7 * rand(i); arch height = 0.4 + 1.5 * rand(i).
- Construction source: src/extensions.ts:11-16; src/index.tsx:45

**02:03.400–02:03.900 · sort:** Continue all sorting motions as the camera finishes its upward move.
**Sampling:** Output frames 3702–3716.
- Foreground: Packet arcs cross above the grid.
- Background: Navy board base, cyan paths below it, and a cool studio background.
- Camera: Ease eye [-4, 4.5, 10]→[0, 23, 21] over local 0–2, then hold. Look [0, 0, -1], FOV 48.
- Light: Static wide cool lights, gold packet tiles, and red labels for the missing identities.
- Continuity: The camera reaches its final position at native 123.9.
- Construction source: src/extensions.ts:11-16; src/index.tsx:45

**02:03.900–02:04.000 · sort:** Settle the packets into their ordered target slots.
**Sampling:** Output frames 3717–3719.
- Foreground: The numbered 30 × 50 array becomes ordered.
- Background: Navy board base, cyan paths below it, and a cool studio background.
- Camera: Ease eye [-4, 4.5, 10]→[0, 23, 21] over local 0–2, then hold. Look [0, 0, -1], FOV 48.
- Light: Static wide cool lights, gold packet tiles, and red labels for the missing identities.
- Continuity: Every sort progress value reaches 1 by local 2.7 seconds.
- Construction source: src/extensions.ts:11-16; src/index.tsx:45

**Clock / handoff shot-30:** origin 121.9s; active local range 1.0999999999999943–2.066666666666663s; reset key 121.9; {   "enter": false,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 3690,
    "shot": "shot-30",
    "local": 1.0999999999999943,
    "eye": [
      -1.701000000000017,
      15.132874999999922,
      16.322249999999954
    ],
    "direction": [
      0.07375063830921415,
      -0.6561194536763857,
      -0.7510446763384885
    ],
    "quaternion": [
      -0.34982549198892393,
      -0.04582343271147604,
      -0.01713477037756454,
      0.935536604208169
    ],
    "fov": 48,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -8,
      "offsetY": 0,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 3719,
    "shot": "shot-30",
    "local": 2.066666666666663,
    "eye": [
      0,
      23,
      21
    ],
    "direction": [
      0,
      -0.7226418571476991,
      -0.6912226459673644
    ],
    "quaternion": [
      -0.3929232457062293,
      0,
      0,
      0.9195712712909653
    ],
    "fov": 48,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -8,
      "offsetY": 0,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 02:03.000–02:04.000. No separately asserted effect onset.

**Measured mix:** -18.001 dBFS RMS; -2.418 dBFS peak. Source samples per channel 5904000–5952000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 02:04.000–02:05.000 · frames 3720–3749

**Shots:** shot-30
**Narration:** packets back into order,
**Captions:** to put the packets / back into order,
**Visible overlay layers:** elapsed, arrival-count, captions

**02:04.000–02:04.600 · sort:** Settle the packets into their ordered target slots.
**Sampling:** Output frames 3720–3737.
- Foreground: The numbered 30 × 50 array becomes ordered.
- Background: Navy board base, cyan paths below it, and a cool studio background.
- Camera: Ease eye [-4, 4.5, 10]→[0, 23, 21] over local 0–2, then hold. Look [0, 0, -1], FOV 48.
- Light: Static wide cool lights, gold packet tiles, and red labels for the missing identities.
- Continuity: Every sort progress value reaches 1 by local 2.7 seconds.
- Construction source: src/extensions.ts:11-16; src/index.tsx:45

**02:04.600–02:05.000 · sort:** Hold the ordered grid and its three gaps without labels.
**Sampling:** Output frames 3738–3749.
- Foreground: The missing positions correspond to #0213, #0847, and #1439.
- Background: Navy board base, cyan paths below it, and a cool studio background.
- Camera: Ease eye [-4, 4.5, 10]→[0, 23, 21] over local 0–2, then hold. Look [0, 0, -1], FOV 48.
- Light: Static wide cool lights, gold packet tiles, and red labels for the missing identities.
- Continuity: The red tags require local > 4.
- Construction source: src/extensions.ts:11-16; src/index.tsx:45

**Clock / handoff shot-30:** origin 121.9s; active local range 2.0999999999999943–3.066666666666663s; reset key 121.9; {   "enter": false,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 3720,
    "shot": "shot-30",
    "local": 2.0999999999999943,
    "eye": [
      0,
      23,
      21
    ],
    "direction": [
      0,
      -0.7226418571476991,
      -0.6912226459673644
    ],
    "quaternion": [
      -0.3929232457062293,
      0,
      0,
      0.9195712712909653
    ],
    "fov": 48,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -8,
      "offsetY": 0,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 3749,
    "shot": "shot-30",
    "local": 3.066666666666663,
    "eye": [
      0,
      23,
      21
    ],
    "direction": [
      0,
      -0.7226418571476991,
      -0.6912226459673644
    ],
    "quaternion": [
      -0.3929232457062293,
      0,
      0,
      0.9195712712909653
    ],
    "fov": 48,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -8,
      "offsetY": 0,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 02:04.000–02:05.000. No separately asserted effect onset.

**Measured mix:** -17.985 dBFS RMS; -1.879 dBFS peak. Source samples per channel 5952000–6000000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 02:05.000–02:06.000 · frames 3750–3779

**Shots:** shot-30
**Narration:** which shows your phone
**Captions:** back into order, / which shows your phone
**Visible overlay layers:** elapsed, arrival-count, captions

**02:05.000–02:05.900 · sort:** Hold the ordered grid and its three gaps without labels.
**Sampling:** Output frames 3750–3776.
- Foreground: The missing positions correspond to #0213, #0847, and #1439.
- Background: Navy board base, cyan paths below it, and a cool studio background.
- Camera: Ease eye [-4, 4.5, 10]→[0, 23, 21] over local 0–2, then hold. Look [0, 0, -1], FOV 48.
- Light: Static wide cool lights, gold packet tiles, and red labels for the missing identities.
- Continuity: The red tags require local > 4.
- Construction source: src/extensions.ts:11-16; src/index.tsx:45

**02:05.900–02:06.000 · sort:** Make the red missing-packet tags visible above the three holes.
**Sampling:** Output frames 3777–3779.
- Foreground: Labels #0213, #0847, and #1439 appear at height 3.2 with X rotation -0.8.
- Background: Navy board base, cyan paths below it, and a cool studio background.
- Camera: Ease eye [-4, 4.5, 10]→[0, 23, 21] over local 0–2, then hold. Look [0, 0, -1], FOV 48.
- Light: Static wide cool lights, gold packet tiles, and red labels for the missing identities.
- Continuity: This is a visibility change, not a tag-rise animation.
- Construction source: src/extensions.ts:11-16; src/index.tsx:45

**Clock / handoff shot-30:** origin 121.9s; active local range 3.0999999999999943–4.066666666666663s; reset key 121.9; {   "enter": false,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 3750,
    "shot": "shot-30",
    "local": 3.0999999999999943,
    "eye": [
      0,
      23,
      21
    ],
    "direction": [
      0,
      -0.7226418571476991,
      -0.6912226459673644
    ],
    "quaternion": [
      -0.3929232457062293,
      0,
      0,
      0.9195712712909653
    ],
    "fov": 48,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -8,
      "offsetY": 0,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 3779,
    "shot": "shot-30",
    "local": 4.066666666666663,
    "eye": [
      0,
      23,
      21
    ],
    "direction": [
      0,
      -0.7226418571476991,
      -0.6912226459673644
    ],
    "quaternion": [
      -0.3929232457062293,
      0,
      0,
      0.9195712712909653
    ],
    "fov": 48,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -8,
      "offsetY": 0,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 02:05.000–02:06.000. No separately asserted effect onset.

**Measured mix:** -16.794 dBFS RMS; -4.06 dBFS peak. Source samples per channel 6000000–6048000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 02:06.000–02:07.000 · frames 3780–3809

**Shots:** shot-30
**Narration:** phone exactly which three
**Captions:** which shows your phone / exactly which three packets
**Visible overlay layers:** elapsed, arrival-count, captions

**02:06.000–02:07.000 · sort:** Make the red missing-packet tags visible above the three holes.
**Sampling:** Output frames 3780–3809.
- Foreground: Labels #0213, #0847, and #1439 appear at height 3.2 with X rotation -0.8.
- Background: Navy board base, cyan paths below it, and a cool studio background.
- Camera: Ease eye [-4, 4.5, 10]→[0, 23, 21] over local 0–2, then hold. Look [0, 0, -1], FOV 48.
- Light: Static wide cool lights, gold packet tiles, and red labels for the missing identities.
- Continuity: This is a visibility change, not a tag-rise animation.
- Construction source: src/extensions.ts:11-16; src/index.tsx:45

**Clock / handoff shot-30:** origin 121.9s; active local range 4.099999999999994–5.066666666666663s; reset key 121.9; {   "enter": false,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 3780,
    "shot": "shot-30",
    "local": 4.099999999999994,
    "eye": [
      0,
      23,
      21
    ],
    "direction": [
      0,
      -0.7226418571476991,
      -0.6912226459673644
    ],
    "quaternion": [
      -0.3929232457062293,
      0,
      0,
      0.9195712712909653
    ],
    "fov": 48,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -8,
      "offsetY": 0,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 3809,
    "shot": "shot-30",
    "local": 5.066666666666663,
    "eye": [
      0,
      23,
      21
    ],
    "direction": [
      0,
      -0.7226418571476991,
      -0.6912226459673644
    ],
    "quaternion": [
      -0.3929232457062293,
      0,
      0,
      0.9195712712909653
    ],
    "fov": 48,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -8,
      "offsetY": 0,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 02:06.000–02:07.000. No separately asserted effect onset.

**Measured mix:** -17.519 dBFS RMS; -3.267 dBFS peak. Source samples per channel 6048000–6096000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 02:07.000–02:08.000 · frames 3810–3839

**Shots:** shot-30, shot-31
**Narration:** three packets are missing, and
**Captions:** exactly which three packets / are missing, / and your phone asks
**Visible overlay layers:** elapsed, arrival-count, captions

**02:07.000–02:07.900 · sort:** Make the red missing-packet tags visible above the three holes.
**Sampling:** Output frames 3810–3836.
- Foreground: Labels #0213, #0847, and #1439 appear at height 3.2 with X rotation -0.8.
- Background: Navy board base, cyan paths below it, and a cool studio background.
- Camera: Ease eye [-4, 4.5, 10]→[0, 23, 21] over local 0–2, then hold. Look [0, 0, -1], FOV 48.
- Light: Static wide cool lights, gold packet tiles, and red labels for the missing identities.
- Continuity: This is a visibility change, not a tag-rise animation.
- Construction source: src/extensions.ts:11-16; src/index.tsx:45

**02:07.900–02:08.000 · retransmit:** Hold the ordered board with three red tags while the globe route begins drawing.
**Sampling:** Output frames 3837–3839.
- Foreground: The missing identities are #0213, #0847, and #1439; the counter shows 1,497.
- Background: The board sits in front of an Earth group at [0, 7, -9], scale 3.1, rotation [0.5, -2.1, -0.2], with a growing cyan web route.
- Camera: Fixed eye [0, 17, 23], look [0, 0, -1], FOV 48.
- Light: Wide cool studio; Earth day strength 0.38 and night strength 0.92; route color #88dfff with glow 1.
- Continuity: A new retransmit camera is fixed above the board. The Earth group sits behind it.
- Construction source: src/extensions.ts:11-16; src/index.tsx:25,45

**Clock / handoff shot-30:** origin 121.9s; active local range 5.099999999999994–5.966666666666654s; reset key 121.9; {   "enter": false,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }
**Clock / handoff shot-31:** origin 127.9s; active local range 0.0–0.06666666666666288s; reset key 127.9; {   "enter": false,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 3810,
    "shot": "shot-30",
    "local": 5.099999999999994,
    "eye": [
      0,
      23,
      21
    ],
    "direction": [
      0,
      -0.7226418571476991,
      -0.6912226459673644
    ],
    "quaternion": [
      -0.3929232457062293,
      0,
      0,
      0.9195712712909653
    ],
    "fov": 48,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -8,
      "offsetY": 0,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 3839,
    "shot": "shot-31",
    "local": 0.06666666666666288,
    "eye": [
      0,
      17,
      23
    ],
    "direction": [
      0,
      -0.5780173407803391,
      -0.816024481101655
    ],
    "quaternion": [
      -0.30329483914035277,
      0,
      0,
      0.9528967627979579
    ],
    "fov": 48,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -8,
      "offsetY": 0,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 02:07.000–02:08.000. No separately asserted effect onset.

**Measured mix:** -18.852 dBFS RMS; -3.073 dBFS peak. Source samples per channel 6096000–6144000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 02:08.000–02:09.000 · frames 3840–3869

**Shots:** shot-31
**Narration:** and your phone asks your mom's
**Captions:** and your phone asks / your mom's phone
**Visible overlay layers:** elapsed, arrival-count, captions

**02:08.000–02:08.800 · retransmit:** Hold the ordered board with three red tags while the globe route begins drawing.
**Sampling:** Output frames 3840–3863.
- Foreground: The missing identities are #0213, #0847, and #1439; the counter shows 1,497.
- Background: The board sits in front of an Earth group at [0, 7, -9], scale 3.1, rotation [0.5, -2.1, -0.2], with a growing cyan web route.
- Camera: Fixed eye [0, 17, 23], look [0, 0, -1], FOV 48.
- Light: Wide cool studio; Earth day strength 0.38 and night strength 0.92; route color #88dfff with glow 1.
- Continuity: A new retransmit camera is fixed above the board. The Earth group sits behind it.
- Construction source: src/extensions.ts:11-16; src/index.tsx:25,45

**02:08.800–02:09.000 · retransmit:** Show #0213 just after local 0.9 seconds and drop it nine units toward its target.
**Sampling:** Output frames 3864–3869.
- Foreground: The counter shows 1,498 and the first red tag is hidden.
- Background: The board sits in front of an Earth group at [0, 7, -9], scale 3.1, rotation [0.5, -2.1, -0.2], with a growing cyan web route.
- Camera: Fixed eye [0, 17, 23], look [0, 0, -1], FOV 48.
- Light: Wide cool studio; Earth day strength 0.38 and night strength 0.92; route color #88dfff with glow 1.
- Continuity: At the threshold the metric increments and tag hides; the tile visibility test uses strictly greater than 0.9.
- Construction source: src/extensions.ts:11-16; src/index.tsx:25,45

**Clock / handoff shot-31:** origin 127.9s; active local range 0.09999999999999432–1.0666666666666629s; reset key 127.9; {   "enter": false,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 3840,
    "shot": "shot-31",
    "local": 0.09999999999999432,
    "eye": [
      0,
      17,
      23
    ],
    "direction": [
      0,
      -0.5780173407803391,
      -0.816024481101655
    ],
    "quaternion": [
      -0.30329483914035277,
      0,
      0,
      0.9528967627979579
    ],
    "fov": 48,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -8,
      "offsetY": 0,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 3869,
    "shot": "shot-31",
    "local": 1.0666666666666629,
    "eye": [
      0,
      17,
      23
    ],
    "direction": [
      0,
      -0.5780173407803391,
      -0.816024481101655
    ],
    "quaternion": [
      -0.30329483914035277,
      0,
      0,
      0.9528967627979579
    ],
    "fov": 48,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -8,
      "offsetY": 0,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 02:08.000–02:09.000. No separately asserted effect onset.

**Measured mix:** -16.544 dBFS RMS; -2.625 dBFS peak. Source samples per channel 6144000–6192000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 02:09.000–02:10.000 · frames 3870–3899

**Shots:** shot-31
**Narration:** mom's phone to send those three
**Captions:** your mom's phone / to send those three again.
**Visible overlay layers:** elapsed, arrival-count, captions

**02:09.000–02:09.400 · retransmit:** Show #0213 just after local 0.9 seconds and drop it nine units toward its target.
**Sampling:** Output frames 3870–3881.
- Foreground: The counter shows 1,498 and the first red tag is hidden.
- Background: The board sits in front of an Earth group at [0, 7, -9], scale 3.1, rotation [0.5, -2.1, -0.2], with a growing cyan web route.
- Camera: Fixed eye [0, 17, 23], look [0, 0, -1], FOV 48.
- Light: Wide cool studio; Earth day strength 0.38 and night strength 0.92; route color #88dfff with glow 1.
- Continuity: At the threshold the metric increments and tag hides; the tile visibility test uses strictly greater than 0.9.
- Construction source: src/extensions.ts:11-16; src/index.tsx:25,45

**02:09.400–02:09.700 · retransmit:** Hold after the first repaired packet lands.
**Sampling:** Output frames 3882–3890.
- Foreground: The board has 1,498 assembled packets and two red missing tags.
- Background: The board sits in front of an Earth group at [0, 7, -9], scale 3.1, rotation [0.5, -2.1, -0.2], with a growing cyan web route.
- Camera: Fixed eye [0, 17, 23], look [0, 0, -1], FOV 48.
- Light: Wide cool studio; Earth day strength 0.38 and night strength 0.92; route color #88dfff with glow 1.
- Continuity: The first fall ends at local 1.5 seconds; the globe route continues growing.
- Construction source: src/extensions.ts:11-16; src/index.tsx:25,45

**02:09.700–02:10.000 · retransmit:** Drop the second missing packet, #0847, into its target.
**Sampling:** Output frames 3891–3899.
- Foreground: The counter shows 1,499 as #0847 descends; #1439 remains missing.
- Background: The board sits in front of an Earth group at [0, 7, -9], scale 3.1, rotation [0.5, -2.1, -0.2], with a growing cyan web route.
- Camera: Fixed eye [0, 17, 23], look [0, 0, -1], FOV 48.
- Light: Wide cool studio; Earth day strength 0.38 and night strength 0.92; route color #88dfff with glow 1.
- Continuity: The second fall runs from local 1.8–2.4 seconds.
- Construction source: src/extensions.ts:11-16; src/index.tsx:25,45

**Clock / handoff shot-31:** origin 127.9s; active local range 1.0999999999999943–2.066666666666663s; reset key 127.9; {   "enter": false,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 3870,
    "shot": "shot-31",
    "local": 1.0999999999999943,
    "eye": [
      0,
      17,
      23
    ],
    "direction": [
      0,
      -0.5780173407803391,
      -0.816024481101655
    ],
    "quaternion": [
      -0.30329483914035277,
      0,
      0,
      0.9528967627979579
    ],
    "fov": 48,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -8,
      "offsetY": 0,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 3899,
    "shot": "shot-31",
    "local": 2.066666666666663,
    "eye": [
      0,
      17,
      23
    ],
    "direction": [
      0,
      -0.5780173407803391,
      -0.816024481101655
    ],
    "quaternion": [
      -0.30329483914035277,
      0,
      0,
      0.9528967627979579
    ],
    "fov": 48,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -8,
      "offsetY": 0,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 02:09.000–02:10.000. No separately asserted effect onset.

**Measured mix:** -16.2 dBFS RMS; -2.966 dBFS peak. Source samples per channel 6192000–6240000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 02:10.000–02:11.000 · frames 3900–3929

**Shots:** shot-31
**Narration:** three again. Once
**Captions:** to send those three again. / Once all 1,500 packets arrive,
**Visible overlay layers:** elapsed, arrival-count, captions

**02:10.000–02:10.300 · retransmit:** Drop the second missing packet, #0847, into its target.
**Sampling:** Output frames 3900–3908.
- Foreground: The counter shows 1,499 as #0847 descends; #1439 remains missing.
- Background: The board sits in front of an Earth group at [0, 7, -9], scale 3.1, rotation [0.5, -2.1, -0.2], with a growing cyan web route.
- Camera: Fixed eye [0, 17, 23], look [0, 0, -1], FOV 48.
- Light: Wide cool studio; Earth day strength 0.38 and night strength 0.92; route color #88dfff with glow 1.
- Continuity: The second fall runs from local 1.8–2.4 seconds.
- Construction source: src/extensions.ts:11-16; src/index.tsx:25,45

**02:10.300–02:10.600 · retransmit:** Hold after the second repaired packet lands.
**Sampling:** Output frames 3909–3917.
- Foreground: Only the #1439 red tag remains above the board.
- Background: The board sits in front of an Earth group at [0, 7, -9], scale 3.1, rotation [0.5, -2.1, -0.2], with a growing cyan web route.
- Camera: Fixed eye [0, 17, 23], look [0, 0, -1], FOV 48.
- Light: Wide cool studio; Earth day strength 0.38 and night strength 0.92; route color #88dfff with glow 1.
- Continuity: The third launch begins at local 2.7 seconds.
- Construction source: src/extensions.ts:11-16; src/index.tsx:25,45

**02:10.600–02:10.700 · retransmit:** Start the #1439 fall, hide its tag, and increase the counter to 1,500.
**Sampling:** Output frames 3918–3920.
- Foreground: All 1,500 instances are visible, although #1439 is still above its slot.
- Background: The board sits in front of an Earth group at [0, 7, -9], scale 3.1, rotation [0.5, -2.1, -0.2], with a growing cyan web route.
- Camera: Fixed eye [0, 17, 23], look [0, 0, -1], FOV 48.
- Light: Wide cool studio; Earth day strength 0.38 and night strength 0.92; route color #88dfff with glow 1.
- Continuity: The globe route finishes at local 2.8 seconds.
- Construction source: src/extensions.ts:11-16; src/index.tsx:25,45

**02:10.700–02:10.967 · retransmit:** Continue the final packet descent until the cut to unlock.
**Sampling:** Output frames 3921–3929.
- Foreground: The counter shows 1,500 while #1439 has not yet fully landed.
- Background: The board sits in front of an Earth group at [0, 7, -9], scale 3.1, rotation [0.5, -2.1, -0.2], with a growing cyan web route.
- Camera: Fixed eye [0, 17, 23], look [0, 0, -1], FOV 48.
- Light: Wide cool studio; Earth day strength 0.38 and night strength 0.92; route color #88dfff with glow 1.
- Continuity: The shot ends at local 3.067, before the final fall would finish at 3.3.
- Construction source: src/extensions.ts:11-16; src/index.tsx:25,45

**02:10.967–02:11.000 · unlock:** Cut from the packet board to a closed padlock on a binary-pattern floor.
**Sampling:** Source-formula interval between sampled output frames; no additional frame displays this interval.
- Foreground: The lock is at [0, 3.3, -1], scale 1.3, with hoop Y = 0.45.
- Background: Procedural binary-pattern floor and cool studio. Legacy photo-tile, scissors, and lens objects remain hidden.
- Camera: Fixed underlay eye [0, 11, 17], look [0, 1, 0], FOV 44. DOM photo perspective is 1000 pixels.
- Light: Cool studio lights on the metallic padlock. The DOM photo is unlit and sits above Finish.
- Continuity: This uses the legacy lockField implementation, distinct from the earlier dataJourney set.
- Construction source: src/scenes.ts:28-29; src/index.tsx:32,49; src/camera-edit.ts:4-10

**Clock / handoff shot-31:** origin 127.9s; active local range 2.0999999999999943–3.066666666666663s; reset key 127.9; {   "enter": false,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 3900,
    "shot": "shot-31",
    "local": 2.0999999999999943,
    "eye": [
      0,
      17,
      23
    ],
    "direction": [
      0,
      -0.5780173407803391,
      -0.816024481101655
    ],
    "quaternion": [
      -0.30329483914035277,
      0,
      0,
      0.9528967627979579
    ],
    "fov": 48,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -8,
      "offsetY": 0,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 3929,
    "shot": "shot-31",
    "local": 3.066666666666663,
    "eye": [
      0,
      17,
      23
    ],
    "direction": [
      0,
      -0.5780173407803391,
      -0.816024481101655
    ],
    "quaternion": [
      -0.30329483914035277,
      0,
      0,
      0.9528967627979579
    ],
    "fov": 48,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -8,
      "offsetY": 0,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 02:10.000–02:11.000. No separately asserted effect onset.

**Measured mix:** -18.53 dBFS RMS; -5.109 dBFS peak. Source samples per channel 6240000–6288000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 02:11.000–02:12.000 · frames 3930–3959

**Shots:** shot-32
**Narration:** Once all 1500 packets
**Captions:** Once all 1,500 packets arrive,
**Visible overlay layers:** elapsed, captions

**02:11.000–02:12.000 · unlock:** Cut from the packet board to a closed padlock on a binary-pattern floor.
**Sampling:** Output frames 3930–3959.
- Foreground: The lock is at [0, 3.3, -1], scale 1.3, with hoop Y = 0.45.
- Background: Procedural binary-pattern floor and cool studio. Legacy photo-tile, scissors, and lens objects remain hidden.
- Camera: Fixed underlay eye [0, 11, 17], look [0, 1, 0], FOV 44. DOM photo perspective is 1000 pixels.
- Light: Cool studio lights on the metallic padlock. The DOM photo is unlit and sits above Finish.
- Continuity: This uses the legacy lockField implementation, distinct from the earlier dataJourney set.
- Construction source: src/scenes.ts:28-29; src/index.tsx:32,49; src/camera-edit.ts:4-10

**Clock / handoff shot-32:** origin 130.967s; active local range 0.03299999999998704–0.9996666666666556s; reset key 130.967; {   "enter": false,   "exit": true,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 3930,
    "shot": "shot-32",
    "local": 0.03299999999998704,
    "eye": [
      0,
      11,
      17
    ],
    "direction": [
      0,
      -0.5070201265633938,
      -0.8619342151577696
    ],
    "quaternion": [
      -0.2627411129250906,
      0,
      0,
      0.9648663677312443
    ],
    "fov": 44,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -8,
      "offsetY": 0,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 3959,
    "shot": "shot-32",
    "local": 0.9996666666666556,
    "eye": [
      0,
      11,
      17
    ],
    "direction": [
      0,
      -0.5070201265633938,
      -0.8619342151577696
    ],
    "quaternion": [
      -0.2627411129250906,
      0,
      0,
      0.9648663677312443
    ],
    "fov": 44,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -8,
      "offsetY": 0,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 02:11.000–02:12.000. No separately asserted effect onset.

**Measured mix:** -15.728 dBFS RMS; -2.64 dBFS peak. Source samples per channel 6288000–6336000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 02:12.000–02:13.000 · frames 3960–3989

**Shots:** shot-32
**Narration:** packets arrive, your phone
**Captions:** Once all 1,500 packets arrive, / your phone decrypts them
**Visible overlay layers:** elapsed, captions

**02:12.000–02:12.167 · unlock:** Cut from the packet board to a closed padlock on a binary-pattern floor.
**Sampling:** Output frames 3960–3965.
- Foreground: The lock is at [0, 3.3, -1], scale 1.3, with hoop Y = 0.45.
- Background: Procedural binary-pattern floor and cool studio. Legacy photo-tile, scissors, and lens objects remain hidden.
- Camera: Fixed underlay eye [0, 11, 17], look [0, 1, 0], FOV 44. DOM photo perspective is 1000 pixels.
- Light: Cool studio lights on the metallic padlock. The DOM photo is unlit and sits above Finish.
- Continuity: This uses the legacy lockField implementation, distinct from the earlier dataJourney set.
- Construction source: src/scenes.ts:28-29; src/index.tsx:32,49; src/camera-edit.ts:4-10

**02:12.167–02:12.967 · unlock:** Raise the shackle by 0.7 units over 0.8 seconds to open the lock.
**Sampling:** Output frames 3966–3989.
- Foreground: Hoop Y changes from 0.45 to 1.15.
- Background: Procedural binary-pattern floor and cool studio. Legacy photo-tile, scissors, and lens objects remain hidden.
- Camera: Fixed underlay eye [0, 11, 17], look [0, 1, 0], FOV 44. DOM photo perspective is 1000 pixels.
- Light: Cool studio lights on the metallic padlock. The DOM photo is unlit and sits above Finish.
- Continuity: The opening uses step(local, 1.2, 2). Lock yaw remains -0.3 + 0.055 * local.
- Construction source: src/scenes.ts:28-29; src/index.tsx:32,49; src/camera-edit.ts:4-10

**02:12.967–02:13.000 · unlock:** Hold the open lock before the photo assembly begins.
**Sampling:** Source-formula interval between sampled output frames; no additional frame displays this interval.
- Foreground: The open lock remains over the static binary pattern; legacy 3D photo tiles are hidden.
- Background: Procedural binary-pattern floor and cool studio. Legacy photo-tile, scissors, and lens objects remain hidden.
- Camera: Fixed underlay eye [0, 11, 17], look [0, 1, 0], FOV 44. DOM photo perspective is 1000 pixels.
- Light: Cool studio lights on the metallic padlock. The DOM photo is unlit and sits above Finish.
- Continuity: The DOM photo begins at global 133.7 seconds.
- Construction source: src/scenes.ts:28-29; src/index.tsx:32,49; src/camera-edit.ts:4-10

**Clock / handoff shot-32:** origin 130.967s; active local range 1.032999999999987–1.9996666666666556s; reset key 130.967; {   "enter": false,   "exit": true,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 3960,
    "shot": "shot-32",
    "local": 1.032999999999987,
    "eye": [
      0,
      11,
      17
    ],
    "direction": [
      0,
      -0.5070201265633938,
      -0.8619342151577696
    ],
    "quaternion": [
      -0.2627411129250906,
      0,
      0,
      0.9648663677312443
    ],
    "fov": 44,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -8,
      "offsetY": 0,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 3989,
    "shot": "shot-32",
    "local": 1.9996666666666556,
    "eye": [
      0,
      11,
      17
    ],
    "direction": [
      0,
      -0.5070201265633938,
      -0.8619342151577696
    ],
    "quaternion": [
      -0.2627411129250906,
      0,
      0,
      0.9648663677312443
    ],
    "fov": 44,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -8,
      "offsetY": 0,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 02:12.000–02:13.000. No separately asserted effect onset.

**Measured mix:** -18.259 dBFS RMS; -3.142 dBFS peak. Source samples per channel 6336000–6384000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 02:13.000–02:14.000 · frames 3990–4019

**Shots:** shot-32
**Narration:** decrypts them and puts
**Captions:** your phone decrypts them / and puts the photo
**Visible overlay layers:** elapsed, photo-reassembly, captions

**02:13.000–02:13.700 · unlock:** Hold the open lock before the photo assembly begins.
**Sampling:** Output frames 3990–4010.
- Foreground: The open lock remains over the static binary pattern; legacy 3D photo tiles are hidden.
- Background: Procedural binary-pattern floor and cool studio. Legacy photo-tile, scissors, and lens objects remain hidden.
- Camera: Fixed underlay eye [0, 11, 17], look [0, 1, 0], FOV 44. DOM photo perspective is 1000 pixels.
- Light: Cool studio lights on the metallic padlock. The DOM photo is unlit and sits above Finish.
- Continuity: The DOM photo begins at global 133.7 seconds.
- Construction source: src/scenes.ts:28-29; src/index.tsx:32,49; src/camera-edit.ts:4-10

**02:13.700–02:13.924 · unlock:** Start the DOM photo assembly from the left columns, then start successive columns.
**Sampling:** Output frames 4011–4017.
- Foreground: CSS photo tiles approach from dispersed positions and depth -600 while rotating from 160 degrees toward zero.
- Background: Procedural binary-pattern floor and cool studio. Legacy photo-tile, scissors, and lens objects remain hidden.
- Camera: Fixed underlay eye [0, 11, 17], look [0, 1, 0], FOV 44. DOM photo perspective is 1000 pixels.
- Light: Cool studio lights on the metallic padlock. The DOM photo is unlit and sits above Finish.
- Continuity: Column starts are staggered by 0.016 seconds. The rightmost starts at 133.924.
- Construction source: src/scenes.ts:28-29; src/index.tsx:32,49; src/camera-edit.ts:4-10

**02:13.924–02:14.000 · unlock:** Continue assembling all columns into the 660-pixel square photo.
**Sampling:** Output frames 4018–4019.
- Foreground: The image straightens and fills in, increasingly covering the open lock.
- Background: Procedural binary-pattern floor and cool studio. Legacy photo-tile, scissors, and lens objects remain hidden.
- Camera: Fixed underlay eye [0, 11, 17], look [0, 1, 0], FOV 44. DOM photo perspective is 1000 pixels.
- Light: Cool studio lights on the metallic padlock. The DOM photo is unlit and sits above Finish.
- Continuity: Each column ends at native 134.8 + 0.01 * column.
- Construction source: src/scenes.ts:28-29; src/index.tsx:32,49; src/camera-edit.ts:4-10

**Clock / handoff shot-32:** origin 130.967s; active local range 2.032999999999987–2.9996666666666556s; reset key 130.967; {   "enter": false,   "exit": true,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 3990,
    "shot": "shot-32",
    "local": 2.032999999999987,
    "eye": [
      0,
      11,
      17
    ],
    "direction": [
      0,
      -0.5070201265633938,
      -0.8619342151577696
    ],
    "quaternion": [
      -0.2627411129250906,
      0,
      0,
      0.9648663677312443
    ],
    "fov": 44,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -8,
      "offsetY": 0,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 4019,
    "shot": "shot-32",
    "local": 2.9996666666666556,
    "eye": [
      0,
      11,
      17
    ],
    "direction": [
      0,
      -0.5070201265633938,
      -0.8619342151577696
    ],
    "quaternion": [
      -0.2627411129250906,
      0,
      0,
      0.9648663677312443
    ],
    "fov": 44,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -8,
      "offsetY": 0,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 02:13.000–02:14.000. Design annotations: id: photo.reassemble
frame: 4011
label: Photo pieces return to their image positions
status: proposed design annotation; mixed master is playback authority

**Measured mix:** -17.124 dBFS RMS; -2.338 dBFS peak. Source samples per channel 6384000–6432000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 02:14.000–02:15.000 · frames 4020–4049

**Shots:** shot-32
**Narration:** puts the photo back together.
**Captions:** and puts the photo / back together.
**Visible overlay layers:** elapsed, photo-reassembly, captions

**02:14.000–02:14.767 · unlock:** Continue assembling all columns into the 660-pixel square photo.
**Sampling:** Output frames 4020–4043.
- Foreground: The image straightens and fills in, increasingly covering the open lock.
- Background: Procedural binary-pattern floor and cool studio. Legacy photo-tile, scissors, and lens objects remain hidden.
- Camera: Fixed underlay eye [0, 11, 17], look [0, 1, 0], FOV 44. DOM photo perspective is 1000 pixels.
- Light: Cool studio lights on the metallic padlock. The DOM photo is unlit and sits above Finish.
- Continuity: Each column ends at native 134.8 + 0.01 * column.
- Construction source: src/scenes.ts:28-29; src/index.tsx:32,49; src/camera-edit.ts:4-10

**02:14.767–02:14.940 · unlock:** Blur and enlarge the underlying unlock picture while the DOM photo finishes assembling.
**Sampling:** Output frames 4044–4048.
- Foreground: The photo remains sharp above the moving picture.
- Background: Procedural binary-pattern floor and cool studio. Legacy photo-tile, scissors, and lens objects remain hidden.
- Camera: Fixed underlay eye [0, 11, 17], look [0, 1, 0], FOV 44. DOM photo perspective is 1000 pixels.
- Light: Cool studio lights on the metallic padlock. The DOM photo is unlit and sits above Finish.
- Continuity: Column zero finishes at 134.8; column fourteen finishes at 134.94.
- Construction source: src/scenes.ts:28-29; src/index.tsx:32,49; src/camera-edit.ts:4-10

**02:14.940–02:14.967 · unlock:** Hold the complete photo before the dedicated photo shot begins.
**Sampling:** Output frames 4049–4049.
- Foreground: The 225 overlapping CSS tiles form one 660 × 660 image.
- Background: Procedural binary-pattern floor and cool studio. Legacy photo-tile, scissors, and lens objects remain hidden.
- Camera: Fixed underlay eye [0, 11, 17], look [0, 1, 0], FOV 44. DOM photo perspective is 1000 pixels.
- Light: Cool studio lights on the metallic padlock. The DOM photo is unlit and sits above Finish.
- Continuity: The assembly is already complete before the SHOTS boundary at 134.967.
- Construction source: src/scenes.ts:28-29; src/index.tsx:32,49; src/camera-edit.ts:4-10

**02:14.967–02:15.000 · photo:** Begin the dedicated photo shot with the photo already assembled.
**Sampling:** Source-formula interval between sampled output frames; no additional frame displays this interval.
- Foreground: The complete 660 × 660 image remains at screen position [30, 190].
- Background: The reset unlock scene is largely covered by the photo.
- Camera: Fixed DOM photo layout. Underlying camera eye [0, 11, 17], look [0, 1, 0], FOV 44.
- Light: The DOM photo is outside scene lighting and Finish; the underlay retains cool studio lighting.
- Continuity: The new Physical mount resets the underlying unlock scene to local zero and a closed hoop. The DOM photo retains global progress.
- Construction source: src/index.tsx:32,49; src/scenes.ts:28-29

**Clock / handoff shot-32:** origin 130.967s; active local range 3.032999999999987–3.9996666666666556s; reset key 130.967; {   "enter": false,   "exit": true,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 4020,
    "shot": "shot-32",
    "local": 3.032999999999987,
    "eye": [
      0,
      11,
      17
    ],
    "direction": [
      0,
      -0.5070201265633938,
      -0.8619342151577696
    ],
    "quaternion": [
      -0.2627411129250906,
      0,
      0,
      0.9648663677312443
    ],
    "fov": 44,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -8,
      "offsetY": 0,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 4049,
    "shot": "shot-32",
    "local": 3.9996666666666556,
    "eye": [
      0,
      11,
      17
    ],
    "direction": [
      0,
      -0.5070201265633938,
      -0.8619342151577696
    ],
    "quaternion": [
      -0.2627411129250906,
      0,
      0,
      0.9648663677312443
    ],
    "fov": 44,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -8,
      "offsetY": 0,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 02:14.000–02:15.000. No separately asserted effect onset.

**Measured mix:** -18.559 dBFS RMS; -3.868 dBFS peak. Source samples per channel 6432000–6480000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 02:15.000–02:16.000 · frames 4050–4079

**Shots:** shot-33
**Narration:** Your screen lights
**Captions:** back together. / Your screen lights up
**Visible overlay layers:** elapsed, photo-reassembly, captions

**02:15.000–02:15.197 · photo:** Begin the dedicated photo shot with the photo already assembled.
**Sampling:** Output frames 4050–4055.
- Foreground: The complete 660 × 660 image remains at screen position [30, 190].
- Background: The reset unlock scene is largely covered by the photo.
- Camera: Fixed DOM photo layout. Underlying camera eye [0, 11, 17], look [0, 1, 0], FOV 44.
- Light: The DOM photo is outside scene lighting and Finish; the underlay retains cool studio lighting.
- Continuity: The new Physical mount resets the underlying unlock scene to local zero and a closed hoop. The DOM photo retains global progress.
- Construction source: src/index.tsx:32,49; src/scenes.ts:28-29

**02:15.197–02:15.967 · photo:** Hold the complete photo until the return to the bedside scene.
**Sampling:** Output frames 4056–4079.
- Foreground: The photo remains static while the mostly covered lock stays closed through its local one-second duration.
- Background: The reset unlock scene is largely covered by the photo.
- Camera: Fixed DOM photo layout. Underlying camera eye [0, 11, 17], look [0, 1, 0], FOV 44.
- Light: The DOM photo is outside scene lighting and Finish; the underlay retains cool studio lighting.
- Continuity: The overlay ends at global 135.967. The next bedside scene starts with notification progress zero.
- Construction source: src/index.tsx:32,49; src/scenes.ts:28-29

**02:15.967–02:16.000 · bedside-return:** The returning bedside shot starts again with no notification for 0.35 seconds.
**Sampling:** Source-formula interval between sampled output frames; no additional frame displays this interval.
- Foreground: The phone again shows 4:02 and Thursday, October 8 beside the same props.
- Background: Wood tabletop, translucent glass on the left, modeled lamp on the right, and a curving charger cable.
- Camera: Eye [mix(0.45, 0.1, step(local, 0, 5)), 9, 6], look [0, 0, 0.2], FOV 48.
- Light: Cool studio lights and the phone point light. Phone intensity is 2.2 * (0.55 + 0.45 * notif). The modeled lamp has no dedicated light.
- Continuity: A new Physical mount starts local time at zero at native 135.967. It does not retain the first notification state.
- Construction source: src/scenes.ts:34; src/index.tsx:25; src/kit/phone.tsx:281-346

**Clock / handoff shot-33:** origin 134.967s; active local range 0.03299999999998704–0.9996666666666556s; reset key 134.967; {   "enter": true,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 4050,
    "shot": "shot-33",
    "local": 0.03299999999998704,
    "eye": [
      0,
      11,
      17
    ],
    "direction": [
      0,
      -0.5070201265633938,
      -0.8619342151577696
    ],
    "quaternion": [
      -0.2627411129250906,
      0,
      0,
      0.9648663677312443
    ],
    "fov": 44,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -8,
      "offsetY": 0,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 4079,
    "shot": "shot-33",
    "local": 0.9996666666666556,
    "eye": [
      0,
      11,
      17
    ],
    "direction": [
      0,
      -0.5070201265633938,
      -0.8619342151577696
    ],
    "quaternion": [
      -0.2627411129250906,
      0,
      0,
      0.9648663677312443
    ],
    "fov": 44,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -8,
      "offsetY": 0,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 02:15.000–02:16.000. No separately asserted effect onset.

**Measured mix:** -17.224 dBFS RMS; -2.153 dBFS peak. Source samples per channel 6480000–6528000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 02:16.000–02:17.000 · frames 4080–4109

**Shots:** shot-34
**Narration:** lights up 200 milliseconds
**Captions:** Your screen lights up / 200 milliseconds
**Visible overlay layers:** elapsed, captions

**02:16.000–02:16.317 · bedside-return:** The returning bedside shot starts again with no notification for 0.35 seconds.
**Sampling:** Output frames 4080–4089.
- Foreground: The phone again shows 4:02 and Thursday, October 8 beside the same props.
- Background: Wood tabletop, translucent glass on the left, modeled lamp on the right, and a curving charger cable.
- Camera: Eye [mix(0.45, 0.1, step(local, 0, 5)), 9, 6], look [0, 0, 0.2], FOV 48.
- Light: Cool studio lights and the phone point light. Phone intensity is 2.2 * (0.55 + 0.45 * notif). The modeled lamp has no dedicated light.
- Continuity: A new Physical mount starts local time at zero at native 135.967. It does not retain the first notification state.
- Construction source: src/scenes.ts:34; src/index.tsx:25; src/kit/phone.tsx:281-346

**02:16.317–02:17.000 · bedside-return:** The Mom notification repeats its upward slide, scale change, and fade.
**Sampling:** Output frames 4090–4109.
- Foreground: The same contact, attachment text, and photo thumbnail become visible.
- Background: Wood tabletop, translucent glass on the left, modeled lamp on the right, and a curving charger cable.
- Camera: Eye [mix(0.45, 0.1, step(local, 0, 5)), 9, 6], look [0, 0, 0.2], FOV 48.
- Light: Cool studio lights and the phone point light. Phone intensity is 2.2 * (0.55 + 0.45 * notif). The modeled lamp has no dedicated light.
- Continuity: notif = step(local, 0.35, 1.1), with the same cubic screen animation and increasing screen light.
- Construction source: src/scenes.ts:34; src/index.tsx:25; src/kit/phone.tsx:281-346

**Clock / handoff shot-34:** origin 135.967s; active local range 0.03299999999998704–0.9996666666666556s; reset key 135.967; {   "enter": false,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 4080,
    "shot": "shot-34",
    "local": 0.03299999999998704,
    "eye": [
      0.4476900000000009,
      9,
      6
    ],
    "direction": [
      -0.04177630215912821,
      -0.8398372075144704,
      -0.5412284226204362
    ],
    "quaternion": [
      -0.4777466623267485,
      0.03382181729939467,
      0.018410756222421627,
      0.8776532660256764
    ],
    "fov": 48,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -8,
      "offsetY": 0,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 4109,
    "shot": "shot-34",
    "local": 0.9996666666666556,
    "eye": [
      0.3800233333333341,
      9,
      6
    ],
    "direction": [
      -0.03547062127082271,
      -0.8400420801461412,
      -0.5413604516497356
    ],
    "quaternion": [
      -0.4780111583054836,
      0.028724670765425717,
      0.015643176537277013,
      0.877744562417046
    ],
    "fov": 48,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -8,
      "offsetY": 0,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 02:16.000–02:17.000. No separately asserted effect onset.

**Measured mix:** -14.49 dBFS RMS; -2.782 dBFS peak. Source samples per channel 6528000–6576000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 02:17.000–02:18.000 · frames 4110–4139

**Shots:** shot-34
**Narration:** milliseconds after your mom
**Captions:** 200 milliseconds / after your mom pressed send.
**Visible overlay layers:** elapsed, captions

**02:17.000–02:17.067 · bedside-return:** The Mom notification repeats its upward slide, scale change, and fade.
**Sampling:** Output frames 4110–4112.
- Foreground: The same contact, attachment text, and photo thumbnail become visible.
- Background: Wood tabletop, translucent glass on the left, modeled lamp on the right, and a curving charger cable.
- Camera: Eye [mix(0.45, 0.1, step(local, 0, 5)), 9, 6], look [0, 0, 0.2], FOV 48.
- Light: Cool studio lights and the phone point light. Phone intensity is 2.2 * (0.55 + 0.45 * notif). The modeled lamp has no dedicated light.
- Continuity: notif = step(local, 0.35, 1.1), with the same cubic screen animation and increasing screen light.
- Construction source: src/scenes.ts:34; src/index.tsx:25; src/kit/phone.tsx:281-346

**02:17.067–02:18.000 · bedside-return:** Hold the complete notification until the historical ship cut.
**Sampling:** Output frames 4113–4139.
- Foreground: The phone and tabletop props remain still while the camera drifts laterally.
- Background: Wood tabletop, translucent glass on the left, modeled lamp on the right, and a curving charger cable.
- Camera: Eye [mix(0.45, 0.1, step(local, 0, 5)), 9, 6], look [0, 0, 0.2], FOV 48.
- Light: Cool studio lights and the phone point light. Phone intensity is 2.2 * (0.55 + 0.45 * notif). The modeled lamp has no dedicated light.
- Continuity: This instance ends at local 3.2 seconds. The five-second camera path remains incomplete.
- Construction source: src/scenes.ts:34; src/index.tsx:25; src/kit/phone.tsx:281-346

**Clock / handoff shot-34:** origin 135.967s; active local range 1.032999999999987–1.9996666666666556s; reset key 135.967; {   "enter": false,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 4110,
    "shot": "shot-34",
    "local": 1.032999999999987,
    "eye": [
      0.3776900000000009,
      9,
      6
    ],
    "direction": [
      -0.0352531040821179,
      -0.840048549707592,
      -0.5413646209226703
    ],
    "quaternion": [
      -0.47801951558667977,
      0.02854876979732846,
      0.015547603288403494,
      0.8777474480129929
    ],
    "fov": 48,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -8,
      "offsetY": 0,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 4139,
    "shot": "shot-34",
    "local": 1.9996666666666556,
    "eye": [
      0.3100233333333341,
      9,
      6
    ],
    "direction": [
      -0.02894305115633678,
      -0.8402188880633622,
      -0.5414743945297222
    ],
    "quaternion": [
      -0.47823966434438947,
      0.02344410763720003,
      0.012772388086049023,
      0.8778234807564904
    ],
    "fov": 48,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -8,
      "offsetY": 0,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 02:17.000–02:18.000. No separately asserted effect onset.

**Measured mix:** -16.367 dBFS RMS; -3.17 dBFS peak. Source samples per channel 6576000–6624000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 02:18.000–02:19.000 · frames 4140–4169

**Shots:** shot-34
**Narration:** mom pressed send. In
**Captions:** after your mom pressed send.
**Visible overlay layers:** elapsed, captions

**02:18.000–02:19.000 · bedside-return:** Hold the complete notification until the historical ship cut.
**Sampling:** Output frames 4140–4169.
- Foreground: The phone and tabletop props remain still while the camera drifts laterally.
- Background: Wood tabletop, translucent glass on the left, modeled lamp on the right, and a curving charger cable.
- Camera: Eye [mix(0.45, 0.1, step(local, 0, 5)), 9, 6], look [0, 0, 0.2], FOV 48.
- Light: Cool studio lights and the phone point light. Phone intensity is 2.2 * (0.55 + 0.45 * notif). The modeled lamp has no dedicated light.
- Continuity: This instance ends at local 3.2 seconds. The five-second camera path remains incomplete.
- Construction source: src/scenes.ts:34; src/index.tsx:25; src/kit/phone.tsx:281-346

**Clock / handoff shot-34:** origin 135.967s; active local range 2.032999999999987–2.9996666666666556s; reset key 135.967; {   "enter": false,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 4140,
    "shot": "shot-34",
    "local": 2.032999999999987,
    "eye": [
      0.3076900000000009,
      9,
      6
    ],
    "direction": [
      -0.02872539705659543,
      -0.840224165586656,
      -0.5414777956002893
    ],
    "quaternion": [
      -0.47824648845707796,
      0.023267971083215603,
      0.012676575443160566,
      0.8778258382134685
    ],
    "fov": 48,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -8,
      "offsetY": 0,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 4169,
    "shot": "shot-34",
    "local": 2.9996666666666556,
    "eye": [
      0.24002333333333414,
      9,
      6
    ],
    "direction": [
      -0.022411776159604123,
      -0.8403599043277866,
      -0.5415652716779069
    ],
    "quaternion": [
      -0.4784220746794548,
      0.0181571644386658,
      0.009895115362692561,
      0.877886508912691
    ],
    "fov": 48,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -8,
      "offsetY": 0,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 02:18.000–02:19.000. No separately asserted effect onset.

**Measured mix:** -19.464 dBFS RMS; -3.577 dBFS peak. Source samples per channel 6624000–6672000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 02:19.000–02:20.000 · frames 4170–4199

**Shots:** shot-34, shot-35
**Narration:** In 1858,
**Captions:** after your mom pressed send. / In 1858
**Visible overlay layers:** elapsed, history-date, captions

**02:19.167–02:20.000 · ship:** Reveal two sailing vessels under moonlight with1858 title; foreground hull starts bob/roll as camera glides forward-left.
**Sampling:** Output frames 4176–4199.
- Foreground: Normalized13-unit-long hero ship,yaw-.52,waterline-.75.
- Background: Second ship68% scale at[-13,-.1,-38],moon[-18,25,-100],open sea.
- Camera: eye[14-.55t,6.3,20-.8t],look[-2,4.5,-4],fov48.
- Light: Warm studio and practical8;moon sphere drives ocean reflected glint;env.48.
- Continuity: Model-derived boats; next Earth-Atlantic builder outside this family.
- Evaluated recipe sample: {   "native": 139.5835,   "local": 0.4165,   "hero_y": 0.0327069,   "hero_roll": 0.004906,   "hero_pitch": 0.0054408,   "far_roll": 0.014025,   "camera_eye": [     13.770925,     6.3,     19.6668   ] }
- Construction source: src/production-scenes.ts:72-81

**02:19.000–02:19.167 · bedside-return:** Hold the complete notification until the historical ship cut.
**Sampling:** Output frames 4170–4175.
- Foreground: The phone and tabletop props remain still while the camera drifts laterally.
- Background: Wood tabletop, translucent glass on the left, modeled lamp on the right, and a curving charger cable.
- Camera: Eye [mix(0.45, 0.1, step(local, 0, 5)), 9, 6], look [0, 0, 0.2], FOV 48.
- Light: Cool studio lights and the phone point light. Phone intensity is 2.2 * (0.55 + 0.45 * notif). The modeled lamp has no dedicated light.
- Continuity: This instance ends at local 3.2 seconds. The five-second camera path remains incomplete.
- Construction source: src/scenes.ts:34; src/index.tsx:25; src/kit/phone.tsx:281-346

**Clock / handoff shot-34:** origin 135.967s; active local range 3.032999999999987–3.1996666666666442s; reset key 135.967; {   "enter": false,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }
**Clock / handoff shot-35:** origin 139.167s; active local range 0.03299999999998704–0.799666666666667s; reset key 139.167; {   "enter": false,   "exit": true,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 4170,
    "shot": "shot-34",
    "local": 3.032999999999987,
    "eye": [
      0.23769000000000096,
      9,
      6
    ],
    "direction": [
      -0.022194012917466147,
      -0.8403639877874316,
      -0.5415679032407892
    ],
    "quaternion": [
      -0.4784273589381636,
      0.01798083977624339,
      0.009799111505378447,
      0.877888335173728
    ],
    "fov": 48,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -8,
      "offsetY": 0,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 4199,
    "shot": "shot-35",
    "local": 0.799666666666667,
    "eye": [
      13.560183333333333,
      6.3,
      19.360266666666668
    ],
    "direction": [
      -0.5532349682685702,
      -0.06399814973581672,
      -0.8305632466677455
    ],
    "quaternion": [
      -0.030643599342034967,
      0.2894466211333138,
      0.009271527335689846,
      0.9566585922442428
    ],
    "fov": 48,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -8,
      "offsetY": 0,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 02:19.000–02:20.000. No separately asserted effect onset.

**Measured mix:** -17.535 dBFS RMS; -2.927 dBFS peak. Source samples per channel 6672000–6720000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 02:20.000–02:21.000 · frames 4200–4229

**Shots:** shot-35
**Narration:** 1858, the first telegraph
**Captions:** In 1858 / the first telegraph cable
**Visible overlay layers:** history-date, captions

**02:20.000–02:20.167 · ship:** Reveal two sailing vessels under moonlight with1858 title; foreground hull starts bob/roll as camera glides forward-left.
**Sampling:** Output frames 4200–4205.
- Foreground: Normalized13-unit-long hero ship,yaw-.52,waterline-.75.
- Background: Second ship68% scale at[-13,-.1,-38],moon[-18,25,-100],open sea.
- Camera: eye[14-.55t,6.3,20-.8t],look[-2,4.5,-4],fov48.
- Light: Warm studio and practical8;moon sphere drives ocean reflected glint;env.48.
- Continuity: Model-derived boats; next Earth-Atlantic builder outside this family.
- Evaluated recipe sample: {   "native": 140.0835,   "local": 0.9165,   "hero_y": 0.0669251,   "hero_roll": 0.0100388,   "hero_pitch": 0.0114972,   "far_roll": 0.0149051,   "camera_eye": [     13.495925,     6.3,     19.2668   ] }
- Construction source: src/production-scenes.ts:72-81

**02:20.167–02:21.000 · ship:** Maintain historical tableau; hero pitch and roll evolve independently while second vessel gives distance scale.
**Sampling:** Output frames 4206–4229.
- Foreground: Normalized13-unit-long hero ship,yaw-.52,waterline-.75.
- Background: Second ship68% scale at[-13,-.1,-38],moon[-18,25,-100],open sea.
- Camera: eye[14-.55t,6.3,20-.8t],look[-2,4.5,-4],fov48.
- Light: Warm studio and practical8;moon sphere drives ocean reflected glint;env.48.
- Continuity: Model-derived boats; next Earth-Atlantic builder outside this family.
- Evaluated recipe sample: {   "native": 140.5835,   "local": 1.4165,   "hero_y": 0.0905773,   "hero_roll": 0.0135866,   "hero_pitch": 0.0165267,   "far_roll": 0.0148585,   "camera_eye": [     13.220925,     6.3,     18.8668   ] }
- Construction source: src/production-scenes.ts:72-81

**Clock / handoff shot-35:** origin 139.167s; active local range 0.8329999999999984–1.799666666666667s; reset key 139.167; {   "enter": false,   "exit": true,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 4200,
    "shot": "shot-35",
    "local": 0.8329999999999984,
    "eye": [
      13.54185,
      6.3,
      19.3336
    ],
    "direction": [
      -0.5532182786362804,
      -0.06407170970928847,
      -0.8305686920403631
    ],
    "quaternion": [
      -0.03067893621048373,
      0.2894381744912228,
      0.009281935156910868,
      0.9566599143373389
    ],
    "fov": 48,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -8,
      "offsetY": 0,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 4229,
    "shot": "shot-35",
    "local": 1.799666666666667,
    "eye": [
      13.010183333333334,
      6.3,
      18.560266666666667
    ],
    "direction": [
      -0.5527155411874908,
      -0.0662808675979407,
      -0.8307300266153159
    ],
    "quaternion": [
      -0.03174031804650233,
      0.2891842646179922,
      0.009594240818639604,
      0.9566989933363428
    ],
    "fov": 48,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -8,
      "offsetY": 0,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 02:20.000–02:21.000. No separately asserted effect onset.

**Measured mix:** -18.125 dBFS RMS; -3.568 dBFS peak. Source samples per channel 6720000–6768000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 02:21.000–02:22.000 · frames 4230–4259

**Shots:** shot-35
**Narration:** telegraph cable across an ocean
**Captions:** the first telegraph cable
**Visible overlay layers:** history-date, captions

**02:21.000–02:21.167 · ship:** Maintain historical tableau; hero pitch and roll evolve independently while second vessel gives distance scale.
**Sampling:** Output frames 4230–4235.
- Foreground: Normalized13-unit-long hero ship,yaw-.52,waterline-.75.
- Background: Second ship68% scale at[-13,-.1,-38],moon[-18,25,-100],open sea.
- Camera: eye[14-.55t,6.3,20-.8t],look[-2,4.5,-4],fov48.
- Light: Warm studio and practical8;moon sphere drives ocean reflected glint;env.48.
- Continuity: Model-derived boats; next Earth-Atlantic builder outside this family.
- Evaluated recipe sample: {   "native": 141.0835,   "local": 1.9165,   "hero_y": 0.0999293,   "hero_roll": 0.0149894,   "hero_pitch": 0.0200799,   "far_roll": 0.0138881,   "camera_eye": [     12.945925,     6.3,     18.4668   ] }
- Construction source: src/production-scenes.ts:72-81

**02:21.167–02:21.800 · ship:** Continue low-amplitude vessel motion and moving sea glint toward transatlantic geography cut.
**Sampling:** Output frames 4236–4253.
- Foreground: Normalized13-unit-long hero ship,yaw-.52,waterline-.75.
- Background: Second ship68% scale at[-13,-.1,-38],moon[-18,25,-100],open sea.
- Camera: eye[14-.55t,6.3,20-.8t],look[-2,4.5,-4],fov48.
- Light: Warm studio and practical8;moon sphere drives ocean reflected glint;env.48.
- Continuity: Model-derived boats; next Earth-Atlantic builder outside this family.
- Evaluated recipe sample: {   "native": 141.4835,   "local": 2.3165,   "hero_y": 0.0960388,   "hero_roll": 0.0144058,   "hero_pitch": 0.021641,   "far_roll": 0.0124853,   "camera_eye": [     12.725925,     6.3,     18.1468   ] }
- Construction source: src/production-scenes.ts:72-81

**02:21.800–02:22.000 · ship:** Outgoing optical zoom/blur grows over vessels; moonlit sea and1858 overlay remain through shot end.
**Sampling:** Output frames 4254–4259.
- Foreground: Normalized13-unit-long hero ship,yaw-.52,waterline-.75.
- Background: Second ship68% scale at[-13,-.1,-38],moon[-18,25,-100],open sea.
- Camera: eye[14-.55t,6.3,20-.8t],look[-2,4.5,-4],fov48.
- Light: Warm studio and practical8;moon sphere drives ocean reflected glint;env.48.
- Continuity: Model-derived boats; next Earth-Atlantic builder outside this family.
- Evaluated recipe sample: {   "native": 141.9,   "local": 2.733,   "hero_y": 0.0816425,   "hero_roll": 0.0122464,   "hero_pitch": 0.0219476,   "far_roll": 0.0104967,   "camera_eye": [     12.49685,     6.3,     17.8136   ] }
- Construction source: src/production-scenes.ts:72-81

**Clock / handoff shot-35:** origin 139.167s; active local range 1.8329999999999984–2.799666666666667s; reset key 139.167; {   "enter": false,   "exit": true,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 4230,
    "shot": "shot-35",
    "local": 1.8329999999999984,
    "eye": [
      12.991850000000001,
      6.3,
      18.5336
    ],
    "direction": [
      -0.5526975336008114,
      -0.06635975950142646,
      -0.8307357092785242
    ],
    "quaternion": [
      -0.03177822650741138,
      0.2891751885635791,
      0.00960538426075876,
      0.9567003664849645
    ],
    "fov": 48,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -8,
      "offsetY": 0,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 4259,
    "shot": "shot-35",
    "local": 2.799666666666667,
    "eye": [
      12.460183333333333,
      6.3,
      17.760266666666666
    ],
    "direction": [
      -0.552154301874623,
      -0.0687320292186928,
      -0.8309040468554891
    ],
    "quaternion": [
      -0.03291829623461762,
      0.28890199436013847,
      0.009940163617847633,
      0.9567409349322287
    ],
    "fov": 48,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": -8,
      "offsetY": 0,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 02:21.000–02:22.000. No separately asserted effect onset.

**Measured mix:** -17.385 dBFS RMS; -3.385 dBFS peak. Source samples per channel 6768000–6816000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 02:22.000–02:23.000 · frames 4260–4289

**Shots:** shot-36
**Narration:** ocean took 16 hours
**Captions:** the first telegraph cable / took 16 hours
**Visible overlay layers:** historical-time, captions

**02:22.000–02:22.200 · earth-atlantic:** Atlantic cyan highlight progress=step(local,0,2.5).Head sprite follows highlighted endpoint on route curve.
**Sampling:** Output frames 4260–4265.
- Foreground: Billboard Newfoundland/Ireland, full dim route and growing cyan route.16 hours metric at42%.
- Background: Unit Earth with photographic day/night maps, blue atmosphere and8100 seeded stars incl. milky haze; no fog.
- Camera: q=ease(step(local,0,3.8)); eye=over(lat36.76,lon-32.43,mix(2.84,2.69,q)); look origin,fov46,roll-.0039,viewOffset[5.9,88.3].
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Earth shader day.32/night1.06/air1, no sun, no physical-light animation. Native-frame star twinkle continues.
- Continuity: Route and camera have independent duration; keep metric gates in native time.
Optical picture incoming p=1-ease(step(local,0,.23)); scale=1+p*0.32,blur=p*9px,origin50%47%; typography stays sharp/unscaled.
- Construction source: src/index.tsx:22 SHOTS; src/globe-shot.tsx:10-25 GlobeShot

**02:22.200–02:22.230 · earth-atlantic:** Atlantic cyan highlight progress=step(local,0,2.5).Head sprite follows highlighted endpoint on route curve.
**Sampling:** Output frames 4266–4266.
- Foreground: Billboard Newfoundland/Ireland, full dim route and growing cyan route.16 hours metric at42%.
- Background: Unit Earth with photographic day/night maps, blue atmosphere and8100 seeded stars incl. milky haze; no fog.
- Camera: q=ease(step(local,0,3.8)); eye=over(lat36.76,lon-32.43,mix(2.84,2.69,q)); look origin,fov46,roll-.0039,viewOffset[5.9,88.3].
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Earth shader day.32/night1.06/air1, no sun, no physical-light animation. Native-frame star twinkle continues.
- Continuity: Route and camera have independent duration; keep metric gates in native time.
Optical picture incoming p=1-ease(step(local,0,.23)); scale=1+p*0.32,blur=p*9px,origin50%47%; typography stays sharp/unscaled.
- Construction source: src/index.tsx:22 SHOTS; src/globe-shot.tsx:10-25 GlobeShot

**02:22.230–02:23.000 · earth-atlantic:** Atlantic cyan highlight progress=step(local,0,2.5).Head sprite follows highlighted endpoint on route curve.
**Sampling:** Output frames 4267–4289.
- Foreground: Billboard Newfoundland/Ireland, full dim route and growing cyan route.16 hours metric at42%.
- Background: Unit Earth with photographic day/night maps, blue atmosphere and8100 seeded stars incl. milky haze; no fog.
- Camera: q=ease(step(local,0,3.8)); eye=over(lat36.76,lon-32.43,mix(2.84,2.69,q)); look origin,fov46,roll-.0039,viewOffset[5.9,88.3].
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Earth shader day.32/night1.06/air1, no sun, no physical-light animation. Native-frame star twinkle continues.
- Continuity: Route and camera have independent duration; keep metric gates in native time.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/globe-shot.tsx:10-25 GlobeShot

**Clock / handoff shot-36:** origin 142s; active local range 0.0–0.9666666666666686s; reset key 142; {   "enter": true,   "exit": true,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 4260,
    "shot": "shot-36",
    "local": 0,
    "eye": [
      1.920430511151996,
      1.699639000025509,
      1.2201532368636208
    ],
    "direction": [
      -0.6762079264619705,
      -0.5984644366287003,
      -0.42963142143085253
    ],
    "quaternion": [
      -0.27724539727750885,
      0.4564200685476155,
      0.15021101651525368,
      0.8320170438355697
    ],
    "fov": 46,
    "view": {
      "enabled": true,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 5.9,
      "offsetY": 88.3,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 4289,
    "shot": "shot-36",
    "local": 0.9666666666666686,
    "eye": [
      1.9040784953507894,
      1.685166972204991,
      1.2097639179618298
    ],
    "direction": [
      -0.6762079264619704,
      -0.5984644366287004,
      -0.42963142143085253
    ],
    "quaternion": [
      -0.2772453972775089,
      0.4564200685476155,
      0.15021101651525373,
      0.8320170438355696
    ],
    "fov": 46,
    "view": {
      "enabled": true,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 5.9,
      "offsetY": 88.3,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 02:22.000–02:23.000. No separately asserted effect onset.

**Measured mix:** -16.615 dBFS RMS; -1.267 dBFS peak. Source samples per channel 6816000–6864000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 02:23.000–02:24.000 · frames 4290–4319

**Shots:** shot-36
**Narration:** hours to send a message
**Captions:** took 16 hours / to send a message
**Visible overlay layers:** historical-time, historical-words, captions

**02:23.000–02:23.400 · earth-atlantic:** Atlantic cyan highlight progress=step(local,0,2.5).Head sprite follows highlighted endpoint on route curve.
**Sampling:** Output frames 4290–4301.
- Foreground: Billboard Newfoundland/Ireland, full dim route and growing cyan route.16 hours metric at42%.
- Background: Unit Earth with photographic day/night maps, blue atmosphere and8100 seeded stars incl. milky haze; no fog.
- Camera: q=ease(step(local,0,3.8)); eye=over(lat36.76,lon-32.43,mix(2.84,2.69,q)); look origin,fov46,roll-.0039,viewOffset[5.9,88.3].
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Earth shader day.32/night1.06/air1, no sun, no physical-light animation. Native-frame star twinkle continues.
- Continuity: Route and camera have independent duration; keep metric gates in native time.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/globe-shot.tsx:10-25 GlobeShot

**02:23.400–02:23.500 · earth-atlantic:** Atlantic cyan highlight progress=step(local,0,2.5).Head sprite follows highlighted endpoint on route curve.
**Sampling:** Output frames 4302–4304.
- Foreground: Billboard Newfoundland/Ireland, full dim route and growing cyan route.16 hours metric at42%.98 words metric at53%.
- Background: Unit Earth with photographic day/night maps, blue atmosphere and8100 seeded stars incl. milky haze; no fog.
- Camera: q=ease(step(local,0,3.8)); eye=over(lat36.76,lon-32.43,mix(2.84,2.69,q)); look origin,fov46,roll-.0039,viewOffset[5.9,88.3].
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Earth shader day.32/night1.06/air1, no sun, no physical-light animation. Native-frame star twinkle continues.
- Continuity: Route and camera have independent duration; keep metric gates in native time.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/globe-shot.tsx:10-25 GlobeShot

**02:23.500–02:24.000 · earth-atlantic:** Atlantic cyan highlight progress=step(local,0,2.5).Head sprite follows highlighted endpoint on route curve.
**Sampling:** Output frames 4305–4319.
- Foreground: Billboard Newfoundland/Ireland, full dim route and growing cyan route.16 hours metric at42%.98 words metric at53%.
- Background: Unit Earth with photographic day/night maps, blue atmosphere and8100 seeded stars incl. milky haze; no fog.
- Camera: q=ease(step(local,0,3.8)); eye=over(lat36.76,lon-32.43,mix(2.84,2.69,q)); look origin,fov46,roll-.0039,viewOffset[5.9,88.3].
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Earth shader day.32/night1.06/air1, no sun, no physical-light animation. Native-frame star twinkle continues.
- Continuity: Route and camera have independent duration; keep metric gates in native time.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/globe-shot.tsx:10-25 GlobeShot

**Clock / handoff shot-36:** origin 142s; active local range 1.0–1.9666666666666686s; reset key 142; {   "enter": true,   "exit": true,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 4290,
    "shot": "shot-36",
    "local": 1,
    "eye": [
      1.9030545602788478,
      1.6842607587431342,
      1.2091133567021994
    ],
    "direction": [
      -0.6762079264619704,
      -0.5984644366287003,
      -0.42963142143085253
    ],
    "quaternion": [
      -0.27724539727750885,
      0.4564200685476155,
      0.15021101651525368,
      0.8320170438355696
    ],
    "fov": 46,
    "view": {
      "enabled": true,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 5.9,
      "offsetY": 88.3,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 4319,
    "shot": "shot-36",
    "local": 1.9666666666666686,
    "eye": [
      1.8670467702629814,
      1.6523927771315612,
      1.1862356627241915
    ],
    "direction": [
      -0.6762079264619704,
      -0.5984644366287003,
      -0.42963142143085253
    ],
    "quaternion": [
      -0.27724539727750885,
      0.4564200685476155,
      0.15021101651525368,
      0.8320170438355696
    ],
    "fov": 46,
    "view": {
      "enabled": true,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 5.9,
      "offsetY": 88.3,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 02:23.000–02:24.000. No separately asserted effect onset.

**Measured mix:** -17.0 dBFS RMS; -4.525 dBFS peak. Source samples per channel 6864000–6912000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 02:24.000–02:25.000 · frames 4320–4349

**Shots:** shot-36
**Narration:** message of 98 words.
**Captions:** to send a message / of 98 words.
**Visible overlay layers:** historical-time, historical-words, captions

**02:24.000–02:24.200 · earth-atlantic:** Atlantic cyan highlight progress=step(local,0,2.5).Head sprite follows highlighted endpoint on route curve.
**Sampling:** Output frames 4320–4325.
- Foreground: Billboard Newfoundland/Ireland, full dim route and growing cyan route.16 hours metric at42%.98 words metric at53%.
- Background: Unit Earth with photographic day/night maps, blue atmosphere and8100 seeded stars incl. milky haze; no fog.
- Camera: q=ease(step(local,0,3.8)); eye=over(lat36.76,lon-32.43,mix(2.84,2.69,q)); look origin,fov46,roll-.0039,viewOffset[5.9,88.3].
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Earth shader day.32/night1.06/air1, no sun, no physical-light animation. Native-frame star twinkle continues.
- Continuity: Route and camera have independent duration; keep metric gates in native time.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/globe-shot.tsx:10-25 GlobeShot

**02:24.200–02:24.500 · earth-atlantic:** Atlantic cyan highlight progress=step(local,0,2.5).Head sprite follows highlighted endpoint on route curve.
**Sampling:** Output frames 4326–4334.
- Foreground: Billboard Newfoundland/Ireland, full dim route and growing cyan route.16 hours metric at42%.98 words metric at53%.
- Background: Unit Earth with photographic day/night maps, blue atmosphere and8100 seeded stars incl. milky haze; no fog.
- Camera: q=ease(step(local,0,3.8)); eye=over(lat36.76,lon-32.43,mix(2.84,2.69,q)); look origin,fov46,roll-.0039,viewOffset[5.9,88.3].
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Earth shader day.32/night1.06/air1, no sun, no physical-light animation. Native-frame star twinkle continues.
- Continuity: Route and camera have independent duration; keep metric gates in native time.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/globe-shot.tsx:10-25 GlobeShot

**02:24.500–02:25.000 · earth-atlantic:** Atlantic cyan highlight progress=step(local,0,2.5). Highlight endpoint reached; hold completed line.
**Sampling:** Output frames 4335–4349.
- Foreground: Billboard Newfoundland/Ireland, full dim route and growing cyan route.16 hours metric at42%.98 words metric at53%.
- Background: Unit Earth with photographic day/night maps, blue atmosphere and8100 seeded stars incl. milky haze; no fog.
- Camera: q=ease(step(local,0,3.8)); eye=over(lat36.76,lon-32.43,mix(2.84,2.69,q)); look origin,fov46,roll-.0039,viewOffset[5.9,88.3].
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Earth shader day.32/night1.06/air1, no sun, no physical-light animation. Native-frame star twinkle continues.
- Continuity: Route and camera have independent duration; keep metric gates in native time.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/globe-shot.tsx:10-25 GlobeShot

**Clock / handoff shot-36:** origin 142s; active local range 2.0–2.9666666666666686s; reset key 142; {   "enter": true,   "exit": true,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 4320,
    "shot": "shot-36",
    "local": 2,
    "eye": [
      1.8657147509557,
      1.65121389981718,
      1.1853893589085072
    ],
    "direction": [
      -0.6762079264619706,
      -0.5984644366287005,
      -0.4296314214308523
    ],
    "quaternion": [
      -0.2772453972775089,
      0.45642006854761563,
      0.15021101651525373,
      0.8320170438355696
    ],
    "fov": 46,
    "view": {
      "enabled": true,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 5.9,
      "offsetY": 88.3,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 4349,
    "shot": "shot-36",
    "local": 2.9666666666666686,
    "eye": [
      1.8314938495048023,
      1.6209273685502483,
      1.1636469717556097
    ],
    "direction": [
      -0.6762079264619704,
      -0.5984644366287005,
      -0.4296314214308524
    ],
    "quaternion": [
      -0.27724539727750896,
      0.4564200685476155,
      0.15021101651525376,
      0.8320170438355696
    ],
    "fov": 46,
    "view": {
      "enabled": true,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 5.9,
      "offsetY": 88.3,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 02:24.000–02:25.000. No separately asserted effect onset.

**Measured mix:** -17.247 dBFS RMS; -3.567 dBFS peak. Source samples per channel 6912000–6960000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 02:25.000–02:26.000 · frames 4350–4379

**Shots:** shot-36, shot-37
**Narration:** words. Today,
**Captions:** of 98 words. / Today a photo
**Visible overlay layers:** historical-time, historical-words, captions

**02:25.000–02:25.600 · earth-atlantic:** Atlantic cyan highlight progress=step(local,0,2.5). Highlight endpoint reached; hold completed line.
**Sampling:** Output frames 4350–4367.
- Foreground: Billboard Newfoundland/Ireland, full dim route and growing cyan route.16 hours metric at42%.98 words metric at53%.
- Background: Unit Earth with photographic day/night maps, blue atmosphere and8100 seeded stars incl. milky haze; no fog.
- Camera: q=ease(step(local,0,3.8)); eye=over(lat36.76,lon-32.43,mix(2.84,2.69,q)); look origin,fov46,roll-.0039,viewOffset[5.9,88.3].
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Earth shader day.32/night1.06/air1, no sun, no physical-light animation. Native-frame star twinkle continues.
- Continuity: Route and camera have independent duration; keep metric gates in native time.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/globe-shot.tsx:10-25 GlobeShot

**02:25.600–02:25.800 · earth-atlantic:** Atlantic cyan highlight progress=step(local,0,2.5). Highlight endpoint reached; hold completed line.
**Sampling:** Output frames 4368–4373.
- Foreground: Billboard Newfoundland/Ireland, full dim route and growing cyan route.16 hours metric at42%.98 words metric at53%.
- Background: Unit Earth with photographic day/night maps, blue atmosphere and8100 seeded stars incl. milky haze; no fog.
- Camera: q=ease(step(local,0,3.8)); eye=over(lat36.76,lon-32.43,mix(2.84,2.69,q)); look origin,fov46,roll-.0039,viewOffset[5.9,88.3].
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Earth shader day.32/night1.06/air1, no sun, no physical-light animation. Native-frame star twinkle continues.
- Continuity: Route and camera have independent duration; keep metric gates in native time.
Optical picture outgoing p=ease(step(local,duration-.2,duration)); scale=1+p*0.32,blur=p*9px,origin50%47%; typography stays sharp/unscaled.
- Construction source: src/index.tsx:22 SHOTS; src/globe-shot.tsx:10-25 GlobeShot

**02:25.800–02:26.000 · earth-pacific-return:** Pacific gold highlight progress=.20+.80*step(local,0,2.53).Head sprite follows highlighted endpoint on route curve.
**Sampling:** Output frames 4374–4379.
- Foreground: Billboard Shanghai/Los Angeles, full dim route and gold route.
- Background: Unit Earth with photographic day/night maps, blue atmosphere and8100 seeded stars incl. milky haze; no fog.
- Camera: q=ease(step(local,0,3.3)); eye=over(lat42.5,lon=mix(160,162,q),distance=mix(3.36,3.50,q)); look origin,fov46,roll-.582,viewOffset[2,9.4].
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Earth shader day.32/night1.06/air1, no sun, no physical-light animation. Native-frame star twinkle continues.
- Continuity: Route and camera have independent duration; keep metric gates in native time.
Optical picture incoming p=1-ease(step(local,0,.23)); scale=1+p*0.32,blur=p*9px,origin50%47%; typography stays sharp/unscaled.
- Construction source: src/index.tsx:22 SHOTS; src/globe-shot.tsx:10-25 GlobeShot

**Clock / handoff shot-36:** origin 142s; active local range 3.0–3.76666666666668s; reset key 142; {   "enter": true,   "exit": true,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }
**Clock / handoff shot-37:** origin 145.8s; active local range 0.0–0.1666666666666572s; reset key 145.8; {   "enter": true,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 4350,
    "shot": "shot-36",
    "local": 3,
    "eye": [
      1.8305931481269966,
      1.6201302206294013,
      1.1630747075184007
    ],
    "direction": [
      -0.6762079264619705,
      -0.5984644366287003,
      -0.42963142143085253
    ],
    "quaternion": [
      -0.27724539727750885,
      0.4564200685476155,
      0.15021101651525368,
      0.8320170438355697
    ],
    "fov": 46,
    "view": {
      "enabled": true,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 5.9,
      "offsetY": 88.3,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 4379,
    "shot": "shot-37",
    "local": 0.1666666666666572,
    "eye": [
      -2.328791207337035,
      2.2706825009308353,
      -0.8469300031335024
    ],
    "direction": [
      0.6928791385908839,
      -0.6755902076156601,
      0.2519848620044145
    ],
    "quaternion": [
      0.019841089050803312,
      -0.7909480148451511,
      -0.4377882088567321,
      0.4270234808342594
    ],
    "fov": 46,
    "view": {
      "enabled": true,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 02:25.000–02:26.000. No separately asserted effect onset.

**Measured mix:** -22.632 dBFS RMS; -2.823 dBFS peak. Source samples per channel 6960000–7008000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 02:26.000–02:27.000 · frames 4380–4409

**Shots:** shot-37
**Narration:** Today, a photo crosses the
**Captions:** Today a photo / crosses the Pacific
**Visible overlay layers:** captions

**02:26.000–02:26.030 · earth-pacific-return:** Pacific gold highlight progress=.20+.80*step(local,0,2.53).Head sprite follows highlighted endpoint on route curve.
**Sampling:** Output frames 4380–4380.
- Foreground: Billboard Shanghai/Los Angeles, full dim route and gold route.
- Background: Unit Earth with photographic day/night maps, blue atmosphere and8100 seeded stars incl. milky haze; no fog.
- Camera: q=ease(step(local,0,3.3)); eye=over(lat42.5,lon=mix(160,162,q),distance=mix(3.36,3.50,q)); look origin,fov46,roll-.582,viewOffset[2,9.4].
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Earth shader day.32/night1.06/air1, no sun, no physical-light animation. Native-frame star twinkle continues.
- Continuity: Route and camera have independent duration; keep metric gates in native time.
Optical picture incoming p=1-ease(step(local,0,.23)); scale=1+p*0.32,blur=p*9px,origin50%47%; typography stays sharp/unscaled.
- Construction source: src/index.tsx:22 SHOTS; src/globe-shot.tsx:10-25 GlobeShot

**02:26.030–02:26.500 · earth-pacific-return:** Pacific gold highlight progress=.20+.80*step(local,0,2.53).Head sprite follows highlighted endpoint on route curve.
**Sampling:** Output frames 4381–4394.
- Foreground: Billboard Shanghai/Los Angeles, full dim route and gold route.
- Background: Unit Earth with photographic day/night maps, blue atmosphere and8100 seeded stars incl. milky haze; no fog.
- Camera: q=ease(step(local,0,3.3)); eye=over(lat42.5,lon=mix(160,162,q),distance=mix(3.36,3.50,q)); look origin,fov46,roll-.582,viewOffset[2,9.4].
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Earth shader day.32/night1.06/air1, no sun, no physical-light animation. Native-frame star twinkle continues.
- Continuity: Route and camera have independent duration; keep metric gates in native time.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/globe-shot.tsx:10-25 GlobeShot

**02:26.500–02:27.000 · earth-pacific-return:** Pacific gold highlight progress=.20+.80*step(local,0,2.53).Head sprite follows highlighted endpoint on route curve.
**Sampling:** Output frames 4395–4409.
- Foreground: Billboard Shanghai/Los Angeles, full dim route and gold route.
- Background: Unit Earth with photographic day/night maps, blue atmosphere and8100 seeded stars incl. milky haze; no fog.
- Camera: q=ease(step(local,0,3.3)); eye=over(lat42.5,lon=mix(160,162,q),distance=mix(3.36,3.50,q)); look origin,fov46,roll-.582,viewOffset[2,9.4].
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Earth shader day.32/night1.06/air1, no sun, no physical-light animation. Native-frame star twinkle continues.
- Continuity: Route and camera have independent duration; keep metric gates in native time.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/globe-shot.tsx:10-25 GlobeShot

**Clock / handoff shot-37:** origin 145.8s; active local range 0.19999999999998863–1.1666666666666572s; reset key 145.8; {   "enter": true,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 4380,
    "shot": "shot-37",
    "local": 0.19999999999998863,
    "eye": [
      -2.329193615104876,
      2.2709832199985343,
      -0.8467836707977721
    ],
    "direction": [
      0.6929071003909879,
      -0.6755902076156602,
      0.2519079625608978
    ],
    "quaternion": [
      0.01981679546859416,
      -0.7909243174272774,
      -0.43778930919571746,
      0.4270673711178221
    ],
    "fov": 46,
    "view": {
      "enabled": true,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 4409,
    "shot": "shot-37",
    "local": 1.1666666666666572,
    "eye": [
      -2.364111581069904,
      2.297089241754057,
      -0.8337794723910038
    ],
    "direction": [
      0.6953019520747937,
      -0.6755902076156604,
      0.24522044534420584
    ],
    "quaternion": [
      0.01770759673383987,
      -0.7888578222278173,
      -0.43787969311971897,
      0.43087254691065857
    ],
    "fov": 46,
    "view": {
      "enabled": true,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 02:26.000–02:27.000. No separately asserted effect onset.

**Measured mix:** -16.297 dBFS RMS; -2.709 dBFS peak. Source samples per channel 7008000–7056000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 02:27.000–02:28.000 · frames 4410–4439

**Shots:** shot-37
**Narration:** the Pacific in 0 .2
**Captions:** crosses the Pacific / in 0.2 seconds.
**Visible overlay layers:** modern-time, captions

**02:27.000–02:27.500 · earth-pacific-return:** Pacific gold highlight progress=.20+.80*step(local,0,2.53).Head sprite follows highlighted endpoint on route curve.
**Sampling:** Output frames 4410–4424.
- Foreground: Billboard Shanghai/Los Angeles, full dim route and gold route.
- Background: Unit Earth with photographic day/night maps, blue atmosphere and8100 seeded stars incl. milky haze; no fog.
- Camera: q=ease(step(local,0,3.3)); eye=over(lat42.5,lon=mix(160,162,q),distance=mix(3.36,3.50,q)); look origin,fov46,roll-.582,viewOffset[2,9.4].
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Earth shader day.32/night1.06/air1, no sun, no physical-light animation. Native-frame star twinkle continues.
- Continuity: Route and camera have independent duration; keep metric gates in native time.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/globe-shot.tsx:10-25 GlobeShot

**02:27.500–02:28.000 · earth-pacific-return:** Pacific gold highlight progress=.20+.80*step(local,0,2.53).Head sprite follows highlighted endpoint on route curve.
**Sampling:** Output frames 4425–4439.
- Foreground: Billboard Shanghai/Los Angeles, full dim route and gold route. Yellow0.2 s metric at61%.
- Background: Unit Earth with photographic day/night maps, blue atmosphere and8100 seeded stars incl. milky haze; no fog.
- Camera: q=ease(step(local,0,3.3)); eye=over(lat42.5,lon=mix(160,162,q),distance=mix(3.36,3.50,q)); look origin,fov46,roll-.582,viewOffset[2,9.4].
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Earth shader day.32/night1.06/air1, no sun, no physical-light animation. Native-frame star twinkle continues.
- Continuity: Route and camera have independent duration; keep metric gates in native time.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/globe-shot.tsx:10-25 GlobeShot

**Clock / handoff shot-37:** origin 145.8s; active local range 1.1999999999999886–2.166666666666657s; reset key 145.8; {   "enter": true,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 4410,
    "shot": "shot-37",
    "local": 1.1999999999999886,
    "eye": [
      -2.3658740742760274,
      2.2984076292388638,
      -0.8331069623073994
    ],
    "direction": [
      0.6954211849540194,
      -0.6755902076156604,
      0.24488210814793399
    ],
    "quaternion": [
      0.017601068189004254,
      -0.7887529755712958,
      -0.43788398809195306,
      0.43106444866019655
    ],
    "fov": 46,
    "view": {
      "enabled": true,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 4439,
    "shot": "shot-37",
    "local": 2.166666666666657,
    "eye": [
      -2.4197696495210814,
      2.3387610088338926,
      -0.8117881558252245
    ],
    "direction": [
      0.6989909074622034,
      -0.6755902076156602,
      0.23449857709375288
    ],
    "quaternion": [
      0.014339954492923135,
      -0.7855212627625158,
      -0.43800291133033414,
      0.4369258073395014
    ],
    "fov": 46,
    "view": {
      "enabled": true,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 02:27.000–02:28.000. No separately asserted effect onset.

**Measured mix:** -16.577 dBFS RMS; -3.762 dBFS peak. Source samples per channel 7056000–7104000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 02:28.000–02:29.000 · frames 4440–4469

**Shots:** shot-37
**Narration:** .2 seconds.
**Captions:** in 0.2 seconds.
**Visible overlay layers:** modern-time, captions

**02:28.000–02:28.330 · earth-pacific-return:** Pacific gold highlight progress=.20+.80*step(local,0,2.53).Head sprite follows highlighted endpoint on route curve.
**Sampling:** Output frames 4440–4449.
- Foreground: Billboard Shanghai/Los Angeles, full dim route and gold route. Yellow0.2 s metric at61%.
- Background: Unit Earth with photographic day/night maps, blue atmosphere and8100 seeded stars incl. milky haze; no fog.
- Camera: q=ease(step(local,0,3.3)); eye=over(lat42.5,lon=mix(160,162,q),distance=mix(3.36,3.50,q)); look origin,fov46,roll-.582,viewOffset[2,9.4].
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Earth shader day.32/night1.06/air1, no sun, no physical-light animation. Native-frame star twinkle continues.
- Continuity: Route and camera have independent duration; keep metric gates in native time.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/globe-shot.tsx:10-25 GlobeShot

**02:28.330–02:29.000 · earth-pacific-return:** Pacific gold highlight progress=.20+.80*step(local,0,2.53). Highlight endpoint reached; hold completed line.
**Sampling:** Output frames 4450–4469.
- Foreground: Billboard Shanghai/Los Angeles, full dim route and gold route. Yellow0.2 s metric at61%.
- Background: Unit Earth with photographic day/night maps, blue atmosphere and8100 seeded stars incl. milky haze; no fog.
- Camera: q=ease(step(local,0,3.3)); eye=over(lat42.5,lon=mix(160,162,q),distance=mix(3.36,3.50,q)); look origin,fov46,roll-.582,viewOffset[2,9.4].
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Earth shader day.32/night1.06/air1, no sun, no physical-light animation. Native-frame star twinkle continues.
- Continuity: Route and camera have independent duration; keep metric gates in native time.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/globe-shot.tsx:10-25 GlobeShot

**Clock / handoff shot-37:** origin 145.8s; active local range 2.1999999999999886–3.166666666666657s; reset key 145.8; {   "enter": true,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 4440,
    "shot": "shot-37",
    "local": 2.1999999999999886,
    "eye": [
      -2.42148180700811,
      2.340044304304316,
      -0.8110868383055031
    ],
    "direction": [
      0.6991018903894248,
      -0.6755902076156604,
      0.23416750036621614
    ],
    "quaternion": [
      0.014236232387477454,
      -0.78541777409893,
      -0.43800629483617853,
      0.4371118112117016
    ],
    "fov": 46,
    "view": {
      "enabled": true,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 4469,
    "shot": "shot-37",
    "local": 3.166666666666657,
    "eye": [
      -2.4535729788910148,
      2.3641149892256244,
      -0.7976654496601684
    ],
    "direction": [
      0.7011545063432434,
      -0.6755902076156601,
      0.22794786598780042
    ],
    "quaternion": [
      0.012290582443454018,
      -0.7834684898431468,
      -0.4380652077167374,
      0.44059611981290947
    ],
    "fov": 46,
    "view": {
      "enabled": true,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 02:28.000–02:29.000. No separately asserted effect onset.

**Measured mix:** -18.445 dBFS RMS; -4.49 dBFS peak. Source samples per channel 7104000–7152000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 02:29.000–02:30.000 · frames 4470–4499

**Shots:** shot-37, shot-38
**Narration:** No country owns
**Captions:** in 0.2 seconds. / No country owns the internet
**Visible overlay layers:** modern-time, captions

**02:29.000–02:29.067 · earth-pacific-return:** Pacific gold highlight progress=.20+.80*step(local,0,2.53). Highlight endpoint reached; hold completed line.
**Sampling:** Output frames 4470–4472.
- Foreground: Billboard Shanghai/Los Angeles, full dim route and gold route. Yellow0.2 s metric at61%.
- Background: Unit Earth with photographic day/night maps, blue atmosphere and8100 seeded stars incl. milky haze; no fog.
- Camera: q=ease(step(local,0,3.3)); eye=over(lat42.5,lon=mix(160,162,q),distance=mix(3.36,3.50,q)); look origin,fov46,roll-.582,viewOffset[2,9.4].
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Earth shader day.32/night1.06/air1, no sun, no physical-light animation. Native-frame star twinkle continues.
- Continuity: Route and camera have independent duration; keep metric gates in native time.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/globe-shot.tsx:10-25 GlobeShot

**02:29.067–02:29.300 · earth-web-ending:** Entire baked web present from first frame. Cyan/white pulses travel continuously using nativeTime.
**Sampling:** Output frames 4473–4478.
- Foreground: CableWeb608 illustrative cables+315 landing points; no single-route highlight or location tags.
- Background: Unit Earth with photographic day/night maps, blue atmosphere and8100 seeded stars incl. milky haze; no fog.
- Camera: q=ease(step(local,0,6.2)); lat25,lon=mix(145,159,q),distance=mix(3.05,2.84,q); look origin,fov46,roll-.08,viewOffset[0,-205]. Camera moves eastward and closer.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Earth shader day.32/night1.06/air1, no sun, no physical-light animation. Native-frame star twinkle continues.
- Continuity: Ending web restarts camera at lon145 but uses fully drawn web and continuous global pulse phase.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/globe-shot.tsx:10-22 GlobeShot

**02:29.300–02:30.000 · earth-web-ending:** Entire baked web present from first frame. Cyan/white pulses travel continuously using nativeTime.
**Sampling:** Output frames 4479–4499.
- Foreground: CableWeb608 illustrative cables+315 landing points; no single-route highlight or location tags.
- Background: Unit Earth with photographic day/night maps, blue atmosphere and8100 seeded stars incl. milky haze; no fog.
- Camera: q=ease(step(local,0,6.2)); lat25,lon=mix(145,159,q),distance=mix(3.05,2.84,q); look origin,fov46,roll-.08,viewOffset[0,-205]. Camera moves eastward and closer.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Earth shader day.32/night1.06/air1, no sun, no physical-light animation. Native-frame star twinkle continues.
- Continuity: Ending web restarts camera at lon145 but uses fully drawn web and continuous global pulse phase.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/globe-shot.tsx:10-22 GlobeShot

**Clock / handoff shot-37:** origin 145.8s; active local range 3.1999999999999886–3.2666666666666515s; reset key 145.8; {   "enter": true,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }
**Clock / handoff shot-38:** origin 149.067s; active local range 0.03299999999998704–0.8996666666666613s; reset key 149.067; {   "enter": false,   "exit": true,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 4470,
    "shot": "shot-37",
    "local": 3.1999999999999886,
    "eye": [
      -2.453833351481436,
      2.364310432250174,
      -0.7975544001995571
    ],
    "direction": [
      0.7011709464073286,
      -0.6755902076156602,
      0.2278972910942128
    ],
    "quaternion": [
      0.012274783605591033,
      -0.7834525992263618,
      -0.43806565069192943,
      0.4406243753320395
    ],
    "fov": 46,
    "view": {
      "enabled": true,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 2,
      "offsetY": 9.4,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 4499,
    "shot": "shot-38",
    "local": 0.8996666666666613,
    "eye": [
      -2.277234312942213,
      1.2839218316591443,
      -1.5476760633081275
    ],
    "direction": [
      0.7495789721623898,
      -0.42261826174069944,
      0.5094361288083573
    ],
    "quaternion": [
      0.06669188766087109,
      0.866181422407805,
      0.2093982278900371,
      -0.44881434664272213
    ],
    "fov": 46,
    "view": {
      "enabled": true,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 0,
      "offsetY": -205,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 02:29.000–02:30.000. No separately asserted effect onset.

**Measured mix:** -18.109 dBFS RMS; -3.417 dBFS peak. Source samples per channel 7152000–7200000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 02:30.000–02:31.000 · frames 4500–4529

**Shots:** shot-38
**Narration:** owns the internet, and no
**Captions:** No country owns the internet / and no company
**Visible overlay layers:** captions

**02:30.000–02:30.800 · earth-web-ending:** Entire baked web present from first frame. Cyan/white pulses travel continuously using nativeTime.
**Sampling:** Output frames 4500–4523.
- Foreground: CableWeb608 illustrative cables+315 landing points; no single-route highlight or location tags.
- Background: Unit Earth with photographic day/night maps, blue atmosphere and8100 seeded stars incl. milky haze; no fog.
- Camera: q=ease(step(local,0,6.2)); lat25,lon=mix(145,159,q),distance=mix(3.05,2.84,q); look origin,fov46,roll-.08,viewOffset[0,-205]. Camera moves eastward and closer.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Earth shader day.32/night1.06/air1, no sun, no physical-light animation. Native-frame star twinkle continues.
- Continuity: Ending web restarts camera at lon145 but uses fully drawn web and continuous global pulse phase.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/globe-shot.tsx:10-22 GlobeShot

**02:30.800–02:31.000 · earth-web-ending:** Entire baked web present from first frame. Cyan/white pulses travel continuously using nativeTime.
**Sampling:** Output frames 4524–4529.
- Foreground: CableWeb608 illustrative cables+315 landing points; no single-route highlight or location tags.
- Background: Unit Earth with photographic day/night maps, blue atmosphere and8100 seeded stars incl. milky haze; no fog.
- Camera: q=ease(step(local,0,6.2)); lat25,lon=mix(145,159,q),distance=mix(3.05,2.84,q); look origin,fov46,roll-.08,viewOffset[0,-205]. Camera moves eastward and closer.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Earth shader day.32/night1.06/air1, no sun, no physical-light animation. Native-frame star twinkle continues.
- Continuity: Ending web restarts camera at lon145 but uses fully drawn web and continuous global pulse phase.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/globe-shot.tsx:10-22 GlobeShot

**Clock / handoff shot-38:** origin 149.067s; active local range 0.9329999999999927–1.8996666666666613s; reset key 149.067; {   "enter": false,   "exit": true,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 4500,
    "shot": "shot-38",
    "local": 0.9329999999999927,
    "eye": [
      -2.278129671748525,
      1.2835612504655531,
      -1.5449805515673436
    ],
    "direction": [
      0.7500843466138197,
      -0.4226182617406995,
      0.508691731609812
    ],
    "quaternion": [
      0.066795819731295,
      0.8659585349607279,
      0.20936509783075713,
      -0.44924424315222056
    ],
    "fov": 46,
    "view": {
      "enabled": true,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 0,
      "offsetY": -205,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 4529,
    "shot": "shot-38",
    "local": 1.8996666666666613,
    "eye": [
      -2.3114904718050653,
      1.269095982953647,
      -1.4366758000859103
    ],
    "direction": [
      0.76974326476938,
      -0.4226182617406994,
      0.47842356880221315
    ],
    "quaternion": [
      0.07095136604089708,
      0.856841693697288,
      0.20799358014176492,
      -0.4663977768157828
    ],
    "fov": 46,
    "view": {
      "enabled": true,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 0,
      "offsetY": -205,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 02:30.000–02:31.000. No separately asserted effect onset.

**Measured mix:** -17.689 dBFS RMS; -5.744 dBFS peak. Source samples per channel 7200000–7248000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 02:31.000–02:32.000 · frames 4530–4559

**Shots:** shot-38
**Narration:** no company owns it either.
**Captions:** and no company / owns it either.
**Visible overlay layers:** captions

**02:31.000–02:31.600 · earth-web-ending:** Entire baked web present from first frame. Cyan/white pulses travel continuously using nativeTime.
**Sampling:** Output frames 4530–4547.
- Foreground: CableWeb608 illustrative cables+315 landing points; no single-route highlight or location tags.
- Background: Unit Earth with photographic day/night maps, blue atmosphere and8100 seeded stars incl. milky haze; no fog.
- Camera: q=ease(step(local,0,6.2)); lat25,lon=mix(145,159,q),distance=mix(3.05,2.84,q); look origin,fov46,roll-.08,viewOffset[0,-205]. Camera moves eastward and closer.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Earth shader day.32/night1.06/air1, no sun, no physical-light animation. Native-frame star twinkle continues.
- Continuity: Ending web restarts camera at lon145 but uses fully drawn web and continuous global pulse phase.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/globe-shot.tsx:10-22 GlobeShot

**02:31.600–02:32.000 · earth-web-ending:** Entire baked web present from first frame. Cyan/white pulses travel continuously using nativeTime.
**Sampling:** Output frames 4548–4559.
- Foreground: CableWeb608 illustrative cables+315 landing points; no single-route highlight or location tags.
- Background: Unit Earth with photographic day/night maps, blue atmosphere and8100 seeded stars incl. milky haze; no fog.
- Camera: q=ease(step(local,0,6.2)); lat25,lon=mix(145,159,q),distance=mix(3.05,2.84,q); look origin,fov46,roll-.08,viewOffset[0,-205]. Camera moves eastward and closer.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Earth shader day.32/night1.06/air1, no sun, no physical-light animation. Native-frame star twinkle continues.
- Continuity: Ending web restarts camera at lon145 but uses fully drawn web and continuous global pulse phase.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/globe-shot.tsx:10-22 GlobeShot

**Clock / handoff shot-38:** origin 149.067s; active local range 1.9329999999999927–2.8996666666666613s; reset key 149.067; {   "enter": false,   "exit": true,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 4530,
    "shot": "shot-38",
    "local": 1.9329999999999927,
    "eye": [
      -2.312790751238392,
      1.2684846126982527,
      -1.4320927839883426
    ],
    "direction": [
      0.7705474684310156,
      -0.42261826174069944,
      0.47712724061598377
    ],
    "quaternion": [
      0.07112639088200085,
      0.8564488641057869,
      0.20793379293265196,
      -0.467118740202798
    ],
    "fov": 46,
    "view": {
      "enabled": true,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 0,
      "offsetY": -205,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 4559,
    "shot": "shot-38",
    "local": 2.8996666666666613,
    "eye": [
      -2.349752788066563,
      1.2489062969195786,
      -1.285258534364155
    ],
    "direction": [
      0.7951344638604214,
      -0.4226182617406996,
      0.43491952039965975
    ],
    "quaternion": [
      0.07670401220440272,
      0.8435497938542672,
      0.2059415456749925,
      -0.49002889666341626
    ],
    "fov": 46,
    "view": {
      "enabled": true,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 0,
      "offsetY": -205,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 02:31.000–02:32.000. No separately asserted effect onset.

**Measured mix:** -17.672 dBFS RMS; -4.491 dBFS peak. Source samples per channel 7248000–7296000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 02:32.000–02:33.000 · frames 4560–4589

**Shots:** shot-38
**Narration:** either. The internet is
**Captions:** owns it either. / The internet is
**Visible overlay layers:** captions

**02:32.000–02:32.500 · earth-web-ending:** Entire baked web present from first frame. Cyan/white pulses travel continuously using nativeTime.
**Sampling:** Output frames 4560–4574.
- Foreground: CableWeb608 illustrative cables+315 landing points; no single-route highlight or location tags.
- Background: Unit Earth with photographic day/night maps, blue atmosphere and8100 seeded stars incl. milky haze; no fog.
- Camera: q=ease(step(local,0,6.2)); lat25,lon=mix(145,159,q),distance=mix(3.05,2.84,q); look origin,fov46,roll-.08,viewOffset[0,-205]. Camera moves eastward and closer.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Earth shader day.32/night1.06/air1, no sun, no physical-light animation. Native-frame star twinkle continues.
- Continuity: Ending web restarts camera at lon145 but uses fully drawn web and continuous global pulse phase.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/globe-shot.tsx:10-22 GlobeShot

**02:32.500–02:33.000 · earth-web-ending:** Entire baked web present from first frame. Cyan/white pulses travel continuously using nativeTime.
**Sampling:** Output frames 4575–4589.
- Foreground: CableWeb608 illustrative cables+315 landing points; no single-route highlight or location tags.
- Background: Unit Earth with photographic day/night maps, blue atmosphere and8100 seeded stars incl. milky haze; no fog.
- Camera: q=ease(step(local,0,6.2)); lat25,lon=mix(145,159,q),distance=mix(3.05,2.84,q); look origin,fov46,roll-.08,viewOffset[0,-205]. Camera moves eastward and closer.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Earth shader day.32/night1.06/air1, no sun, no physical-light animation. Native-frame star twinkle continues.
- Continuity: Ending web restarts camera at lon145 but uses fully drawn web and continuous global pulse phase.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/globe-shot.tsx:10-22 GlobeShot

**Clock / handoff shot-38:** origin 149.067s; active local range 2.9329999999999927–3.8996666666666613s; reset key 149.067; {   "enter": false,   "exit": true,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 4560,
    "shot": "shot-38",
    "local": 2.9329999999999927,
    "eye": [
      -2.3509286888002743,
      1.2481930917075896,
      -1.2799107636604627
    ],
    "direction": [
      0.7959869370674812,
      -0.4226182617406995,
      0.4333573593019963
    ],
    "quaternion": [
      0.0769061683028025,
      0.8430682777379179,
      0.2058661385469674,
      -0.490856856271523
    ],
    "fov": 46,
    "view": {
      "enabled": true,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 0,
      "offsetY": -205,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 4589,
    "shot": "shot-38",
    "local": 3.8996666666666613,
    "eye": [
      -2.379501012842983,
      1.2278213967132046,
      -1.1274042581583423
    ],
    "direction": [
      0.819028390081745,
      -0.42261826174069955,
      0.3880545078766315
    ],
    "quaternion": [
      -0.08264841655929403,
      -0.8289731558853742,
      -0.20362874296989503,
      0.5143034912366282
    ],
    "fov": 46,
    "view": {
      "enabled": true,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 0,
      "offsetY": -205,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 02:32.000–02:33.000. No separately asserted effect onset.

**Measured mix:** -17.292 dBFS RMS; -5.561 dBFS peak. Source samples per channel 7296000–7344000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 02:33.000–02:34.000 · frames 4590–4619

**Shots:** shot-38
**Narration:** is billions of machine
**Captions:** The internet is / billions of machines
**Visible overlay layers:** captions

**02:33.000–02:33.200 · earth-web-ending:** Entire baked web present from first frame. Cyan/white pulses travel continuously using nativeTime.
**Sampling:** Output frames 4590–4595.
- Foreground: CableWeb608 illustrative cables+315 landing points; no single-route highlight or location tags.
- Background: Unit Earth with photographic day/night maps, blue atmosphere and8100 seeded stars incl. milky haze; no fog.
- Camera: q=ease(step(local,0,6.2)); lat25,lon=mix(145,159,q),distance=mix(3.05,2.84,q); look origin,fov46,roll-.08,viewOffset[0,-205]. Camera moves eastward and closer.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Earth shader day.32/night1.06/air1, no sun, no physical-light animation. Native-frame star twinkle continues.
- Continuity: Ending web restarts camera at lon145 but uses fully drawn web and continuous global pulse phase.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/globe-shot.tsx:10-22 GlobeShot

**02:33.200–02:34.000 · earth-web-ending:** Entire baked web present from first frame. Cyan/white pulses travel continuously using nativeTime.
**Sampling:** Output frames 4596–4619.
- Foreground: CableWeb608 illustrative cables+315 landing points; no single-route highlight or location tags.
- Background: Unit Earth with photographic day/night maps, blue atmosphere and8100 seeded stars incl. milky haze; no fog.
- Camera: q=ease(step(local,0,6.2)); lat25,lon=mix(145,159,q),distance=mix(3.05,2.84,q); look origin,fov46,roll-.08,viewOffset[0,-205]. Camera moves eastward and closer.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Earth shader day.32/night1.06/air1, no sun, no physical-light animation. Native-frame star twinkle continues.
- Continuity: Ending web restarts camera at lon145 but uses fully drawn web and continuous global pulse phase.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/globe-shot.tsx:10-22 GlobeShot

**Clock / handoff shot-38:** origin 149.067s; active local range 3.9329999999999927–4.899666666666661s; reset key 149.067; {   "enter": false,   "exit": true,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 4590,
    "shot": "shot-38",
    "local": 3.9329999999999927,
    "eye": [
      -2.380272536558197,
      1.2271553106498303,
      -1.1224294307897968
    ],
    "direction": [
      0.8197386534037489,
      -0.4226182617406996,
      0.38655186580726586
    ],
    "quaternion": [
      -0.08283509596002972,
      -0.8285012249724955,
      -0.20355287421343587,
      0.5150633888132763
    ],
    "fov": 46,
    "view": {
      "enabled": true,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 0,
      "offsetY": -205,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 4619,
    "shot": "shot-38",
    "local": 4.899666666666661,
    "eye": [
      -2.396397589731313,
      1.2103099054907915,
      -0.9969915323746993
    ],
    "direction": [
      0.8367785632566278,
      -0.4226182617406995,
      0.34813135583776905
    ],
    "quaternion": [
      -0.08753266859730426,
      -0.816335537537794,
      -0.20157742346674806,
      0.5341356236290766
    ],
    "fov": 46,
    "view": {
      "enabled": true,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 0,
      "offsetY": -205,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 02:33.000–02:34.000. No separately asserted effect onset.

**Measured mix:** -15.5 dBFS RMS; -4.046 dBFS peak. Source samples per channel 7344000–7392000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 02:34.000–02:35.000 · frames 4620–4649

**Shots:** shot-38
**Narration:** machine whose owner have never
**Captions:** billions of machines / whose owners have never met
**Visible overlay layers:** captions

**02:34.000–02:34.200 · earth-web-ending:** Entire baked web present from first frame. Cyan/white pulses travel continuously using nativeTime.
**Sampling:** Output frames 4620–4625.
- Foreground: CableWeb608 illustrative cables+315 landing points; no single-route highlight or location tags.
- Background: Unit Earth with photographic day/night maps, blue atmosphere and8100 seeded stars incl. milky haze; no fog.
- Camera: q=ease(step(local,0,6.2)); lat25,lon=mix(145,159,q),distance=mix(3.05,2.84,q); look origin,fov46,roll-.08,viewOffset[0,-205]. Camera moves eastward and closer.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Earth shader day.32/night1.06/air1, no sun, no physical-light animation. Native-frame star twinkle continues.
- Continuity: Ending web restarts camera at lon145 but uses fully drawn web and continuous global pulse phase.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/globe-shot.tsx:10-22 GlobeShot

**02:34.200–02:35.000 · earth-web-ending:** Entire baked web present from first frame. Cyan/white pulses travel continuously using nativeTime.
**Sampling:** Output frames 4626–4649.
- Foreground: CableWeb608 illustrative cables+315 landing points; no single-route highlight or location tags.
- Background: Unit Earth with photographic day/night maps, blue atmosphere and8100 seeded stars incl. milky haze; no fog.
- Camera: q=ease(step(local,0,6.2)); lat25,lon=mix(145,159,q),distance=mix(3.05,2.84,q); look origin,fov46,roll-.08,viewOffset[0,-205]. Camera moves eastward and closer.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Earth shader day.32/night1.06/air1, no sun, no physical-light animation. Native-frame star twinkle continues.
- Continuity: Ending web restarts camera at lon145 but uses fully drawn web and continuous global pulse phase.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/globe-shot.tsx:10-22 GlobeShot

**Clock / handoff shot-38:** origin 149.067s; active local range 4.932999999999993–5.899666666666661s; reset key 149.067; {   "enter": false,   "exit": true,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 4620,
    "shot": "shot-38",
    "local": 4.932999999999993,
    "eye": [
      -2.396754610018166,
      1.2098398926812404,
      -0.9935036972950446
    ],
    "direction": [
      0.8372283582582775,
      -0.4226182617406995,
      0.3470482401214838
    ],
    "quaternion": [
      -0.08766307484328584,
      -0.8159897703830375,
      -0.20152074591038666,
      0.5346636970161517
    ],
    "fov": 46,
    "view": {
      "enabled": true,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 0,
      "offsetY": -205,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 4649,
    "shot": "shot-38",
    "local": 5.899666666666661,
    "eye": [
      -2.402626767450464,
      1.200840446408605,
      -0.926873506267641
    ],
    "direction": [
      0.8455694102479346,
      -0.42261826174069944,
      0.32619959732689674
    ],
    "quaternion": [
      -0.09015285189898142,
      -0.8093035660108812,
      -0.20041928304865897,
      0.5447314130090288
    ],
    "fov": 46,
    "view": {
      "enabled": true,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 0,
      "offsetY": -205,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 02:34.000–02:35.000. No separately asserted effect onset.

**Measured mix:** -15.615 dBFS RMS; -3.808 dBFS peak. Source samples per channel 7392000–7440000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 02:35.000–02:36.000 · frames 4650–4679

**Shots:** shot-38, shot-39
**Narration:** never met, and every one
**Captions:** whose owners have never met / and every one
**Visible overlay layers:** captions

**02:35.000–02:35.100 · earth-web-ending:** Entire baked web present from first frame. Cyan/white pulses travel continuously using nativeTime.
**Sampling:** Output frames 4650–4652.
- Foreground: CableWeb608 illustrative cables+315 landing points; no single-route highlight or location tags.
- Background: Unit Earth with photographic day/night maps, blue atmosphere and8100 seeded stars incl. milky haze; no fog.
- Camera: q=ease(step(local,0,6.2)); lat25,lon=mix(145,159,q),distance=mix(3.05,2.84,q); look origin,fov46,roll-.08,viewOffset[0,-205]. Camera moves eastward and closer.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Earth shader day.32/night1.06/air1, no sun, no physical-light animation. Native-frame star twinkle continues.
- Continuity: Ending web restarts camera at lon145 but uses fully drawn web and continuous global pulse phase.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/globe-shot.tsx:10-22 GlobeShot

**02:35.100–02:35.267 · earth-web-ending:** Entire baked web present from first frame. Cyan/white pulses travel continuously using nativeTime.
**Sampling:** Output frames 4653–4658.
- Foreground: CableWeb608 illustrative cables+315 landing points; no single-route highlight or location tags.
- Background: Unit Earth with photographic day/night maps, blue atmosphere and8100 seeded stars incl. milky haze; no fog.
- Camera: q=ease(step(local,0,6.2)); lat25,lon=mix(145,159,q),distance=mix(3.05,2.84,q); look origin,fov46,roll-.08,viewOffset[0,-205]. Camera moves eastward and closer.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Earth shader day.32/night1.06/air1, no sun, no physical-light animation. Native-frame star twinkle continues.
- Continuity: Ending web restarts camera at lon145 but uses fully drawn web and continuous global pulse phase.
Optical picture outgoing p=ease(step(local,duration-.2,duration)); scale=1+p*0.32,blur=p*9px,origin50%47%; typography stays sharp/unscaled.
- Construction source: src/index.tsx:22 SHOTS; src/globe-shot.tsx:10-22 GlobeShot

**02:35.267–02:35.300 · earth-web-ending:** Entire baked web present from first frame. Cyan/white pulses travel continuously using nativeTime.
**Sampling:** Source-formula interval between sampled output frames; no additional frame displays this interval.
- Foreground: CableWeb608 illustrative cables+315 landing points; no single-route highlight or location tags.
- Background: Unit Earth with photographic day/night maps, blue atmosphere and8100 seeded stars incl. milky haze; no fog.
- Camera: q=ease(step(local,0,6.2)); lat25,lon=mix(145,159,q),distance=mix(3.05,2.84,q); look origin,fov46,roll-.08,viewOffset[0,-205]. Camera settled.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Earth shader day.32/night1.06/air1, no sun, no physical-light animation. Native-frame star twinkle continues.
- Continuity: Ending web restarts camera at lon145 but uses fully drawn web and continuous global pulse phase.
Optical picture outgoing p=ease(step(local,duration-.2,duration)); scale=1+p*0.32,blur=p*9px,origin50%47%; typography stays sharp/unscaled.
- Construction source: src/index.tsx:22 SHOTS; src/globe-shot.tsx:10-22 GlobeShot

**02:35.300–02:35.530 · final-network:** Hold static curved infrastructure world; one practical breathes sinusoidally while camera glides. No moving packet or route reveal.
**Sampling:** Output frames 4659–4665.
- Foreground: Six hex pads: one rack, three towers, a four-cabinet server cluster, a four-antenna router; cyan connector ring.
- Background: Curved R150 terrain with procedurally painted city-light texture,56 thin route segments and studio sky/dust.
- Camera: q=ease(step(local,0,6.86)); eye[mix(4,1,q),mix(28,24,q),mix(40,36,q)],look[0,2,-5],fov47. Glide down/forward/left.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Studio wide lighting,environment.45,fog.001; practical at[-5,1,-4] intensity=32+12*sin(local*.7),distance30,glow2.1.
- Continuity: Source final has optical entrance only; ending does not fade. Last caption leaves161.7, image holds until end.
Optical picture incoming p=1-ease(step(local,0,.23)); scale=1+p*0.32,blur=p*9px,origin50%47%; typography stays sharp/unscaled.
- Construction source: src/index.tsx:22 SHOTS; src/infrastructure.ts:68 infrastructureWorld

**02:35.530–02:35.600 · final-network:** Hold static curved infrastructure world; one practical breathes sinusoidally while camera glides. No moving packet or route reveal.
**Sampling:** Output frames 4666–4667.
- Foreground: Six hex pads: one rack, three towers, a four-cabinet server cluster, a four-antenna router; cyan connector ring.
- Background: Curved R150 terrain with procedurally painted city-light texture,56 thin route segments and studio sky/dust.
- Camera: q=ease(step(local,0,6.86)); eye[mix(4,1,q),mix(28,24,q),mix(40,36,q)],look[0,2,-5],fov47. Glide down/forward/left.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Studio wide lighting,environment.45,fog.001; practical at[-5,1,-4] intensity=32+12*sin(local*.7),distance30,glow2.1.
- Continuity: Source final has optical entrance only; ending does not fade. Last caption leaves161.7, image holds until end.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/infrastructure.ts:68 infrastructureWorld

**02:35.600–02:36.000 · final-network:** Hold static curved infrastructure world; one practical breathes sinusoidally while camera glides. No moving packet or route reveal.
**Sampling:** Output frames 4668–4679.
- Foreground: Six hex pads: one rack, three towers, a four-cabinet server cluster, a four-antenna router; cyan connector ring.
- Background: Curved R150 terrain with procedurally painted city-light texture,56 thin route segments and studio sky/dust.
- Camera: q=ease(step(local,0,6.86)); eye[mix(4,1,q),mix(28,24,q),mix(40,36,q)],look[0,2,-5],fov47. Glide down/forward/left.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Studio wide lighting,environment.45,fog.001; practical at[-5,1,-4] intensity=32+12*sin(local*.7),distance30,glow2.1.
- Continuity: Source final has optical entrance only; ending does not fade. Last caption leaves161.7, image holds until end.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/infrastructure.ts:68 infrastructureWorld

**Clock / handoff shot-38:** origin 149.067s; active local range 5.932999999999993–6.199666666666673s; reset key 149.067; {   "enter": false,   "exit": true,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }
**Clock / handoff shot-39:** origin 155.3s; active local range 0.0–0.6666666666666572s; reset key 155.3; {   "enter": true,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 4650,
    "shot": "shot-38",
    "local": 5.932999999999993,
    "eye": [
      -2.4026954691173534,
      1.200715460958086,
      -0.9259502990178391
    ],
    "direction": [
      0.8456816087305105,
      -0.4226182617406996,
      0.32590860911955893
    ],
    "quaternion": [
      -0.09018733370539414,
      -0.8092098302658535,
      -0.20040376883274938,
      0.5448706496755449
    ],
    "fov": 46,
    "view": {
      "enabled": true,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 0,
      "offsetY": -205,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 4679,
    "shot": "shot-39",
    "local": 0.6666666666666572,
    "eye": [
      3.9205082763040813,
      27.894011035072108,
      39.89401103507211
    ],
    "direction": [
      -0.07543146731073806,
      -0.49820663783351665,
      -0.8637709417189098
    ],
    "quaternion": [
      -0.257574893653722,
      0.04206784163489879,
      0.011225400736257319,
      0.9652768831986837
    ],
    "fov": 47,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 0,
      "offsetY": -205,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 02:35.000–02:36.000. No separately asserted effect onset.

**Measured mix:** -17.012 dBFS RMS; -3.616 dBFS peak. Source samples per channel 7440000–7488000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 02:36.000–02:37.000 · frames 4680–4709

**Shots:** shot-39
**Narration:** one of those machine follows the exact
**Captions:** of those machines / follows the exact same agreement:
**Visible overlay layers:** captions

**02:36.000–02:36.700 · final-network:** Hold static curved infrastructure world; one practical breathes sinusoidally while camera glides. No moving packet or route reveal.
**Sampling:** Output frames 4680–4700.
- Foreground: Six hex pads: one rack, three towers, a four-cabinet server cluster, a four-antenna router; cyan connector ring.
- Background: Curved R150 terrain with procedurally painted city-light texture,56 thin route segments and studio sky/dust.
- Camera: q=ease(step(local,0,6.86)); eye[mix(4,1,q),mix(28,24,q),mix(40,36,q)],look[0,2,-5],fov47. Glide down/forward/left.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Studio wide lighting,environment.45,fog.001; practical at[-5,1,-4] intensity=32+12*sin(local*.7),distance30,glow2.1.
- Continuity: Source final has optical entrance only; ending does not fade. Last caption leaves161.7, image holds until end.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/infrastructure.ts:68 infrastructureWorld

**02:36.700–02:37.000 · final-network:** Hold static curved infrastructure world; one practical breathes sinusoidally while camera glides. No moving packet or route reveal.
**Sampling:** Output frames 4701–4709.
- Foreground: Six hex pads: one rack, three towers, a four-cabinet server cluster, a four-antenna router; cyan connector ring.
- Background: Curved R150 terrain with procedurally painted city-light texture,56 thin route segments and studio sky/dust.
- Camera: q=ease(step(local,0,6.86)); eye[mix(4,1,q),mix(28,24,q),mix(40,36,q)],look[0,2,-5],fov47. Glide down/forward/left.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Studio wide lighting,environment.45,fog.001; practical at[-5,1,-4] intensity=32+12*sin(local*.7),distance30,glow2.1.
- Continuity: Source final has optical entrance only; ending does not fade. Last caption leaves161.7, image holds until end.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/infrastructure.ts:68 infrastructureWorld

**Clock / handoff shot-39:** origin 155.3s; active local range 0.6999999999999886–1.6666666666666572s; reset key 155.3; {   "enter": true,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 4680,
    "shot": "shot-39",
    "local": 0.6999999999999886,
    "eye": [
      3.9126639410449755,
      27.883551921393302,
      39.8835519213933
    ],
    "direction": [
      -0.07530203564156843,
      -0.4981475993551834,
      -0.8638162841049616
    ],
    "quaternion": [
      -0.25754289033489114,
      0.041994256577172935,
      0.01120423380552935,
      0.9652888724093488
    ],
    "fov": 47,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 0,
      "offsetY": -205,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 4709,
    "shot": "shot-39",
    "local": 1.6666666666666572,
    "eye": [
      3.554803669030687,
      27.406404892040914,
      39.40640489204092
    ],
    "direction": [
      -0.0693160088343254,
      -0.4954058648266669,
      -0.8658916329510422
    ],
    "quaternion": [
      -0.25605562130882636,
      0.03859666203999866,
      0.01023246393065002,
      0.9658370013399927
    ],
    "fov": 47,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 0,
      "offsetY": -205,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 02:36.000–02:37.000. No separately asserted effect onset.

**Measured mix:** -15.508 dBFS RMS; -2.32 dBFS peak. Source samples per channel 7488000–7536000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 02:37.000–02:38.000 · frames 4710–4739

**Shots:** shot-39
**Narration:** exact same agreement.
**Captions:** follows the exact same agreement:
**Visible overlay layers:** captions

**02:37.000–02:37.544 · final-network:** Hold static curved infrastructure world; one practical breathes sinusoidally while camera glides. No moving packet or route reveal.
**Sampling:** Output frames 4710–4726.
- Foreground: Six hex pads: one rack, three towers, a four-cabinet server cluster, a four-antenna router; cyan connector ring.
- Background: Curved R150 terrain with procedurally painted city-light texture,56 thin route segments and studio sky/dust.
- Camera: q=ease(step(local,0,6.86)); eye[mix(4,1,q),mix(28,24,q),mix(40,36,q)],look[0,2,-5],fov47. Glide down/forward/left.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Studio wide lighting,environment.45,fog.001; practical at[-5,1,-4] intensity=32+12*sin(local*.7),distance30,glow2.1.
- Continuity: Source final has optical entrance only; ending does not fade. Last caption leaves161.7, image holds until end.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/infrastructure.ts:68 infrastructureWorld

**02:37.544–02:38.000 · final-network:** Hold static curved infrastructure world; one practical breathes sinusoidally while camera glides. No moving packet or route reveal.
**Sampling:** Output frames 4727–4739.
- Foreground: Six hex pads: one rack, three towers, a four-cabinet server cluster, a four-antenna router; cyan connector ring.
- Background: Curved R150 terrain with procedurally painted city-light texture,56 thin route segments and studio sky/dust.
- Camera: q=ease(step(local,0,6.86)); eye[mix(4,1,q),mix(28,24,q),mix(40,36,q)],look[0,2,-5],fov47. Glide down/forward/left.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Studio wide lighting,environment.45,fog.001; practical at[-5,1,-4] intensity=32+12*sin(local*.7),distance30,glow2.1.
- Continuity: Source final has optical entrance only; ending does not fade. Last caption leaves161.7, image holds until end.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/infrastructure.ts:68 infrastructureWorld

**Clock / handoff shot-39:** origin 155.3s; active local range 1.6999999999999886–2.666666666666657s; reset key 155.3; {   "enter": true,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 4710,
    "shot": "shot-39",
    "local": 1.6999999999999886,
    "eye": [
      3.538608159612602,
      27.38481087948347,
      39.38481087948347
    ],
    "direction": [
      -0.06904129068455814,
      -0.49527950760584416,
      -0.8659858598882104
    ],
    "quaternion": [
      -0.2559870304832249,
      0.03844099738918531,
      0.01018820308502615,
      0.9658618588918413
    ],
    "fov": 47,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 0,
      "offsetY": -205,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 4739,
    "shot": "shot-39",
    "local": 2.666666666666657,
    "eye": [
      2.992462364571833,
      26.65661648609578,
      38.65661648609578
    ],
    "direction": [
      -0.05957814332074353,
      -0.49089854836767804,
      -0.8691772316673737
    ],
    "quaternion": [
      -0.2536065018227293,
      0.03309269405097047,
      0.008681600099169276,
      0.9667022528438656
    ],
    "fov": 47,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 0,
      "offsetY": -205,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 02:37.000–02:38.000. No separately asserted effect onset.

**Measured mix:** -17.05 dBFS RMS; -2.557 dBFS peak. Source samples per channel 7536000–7584000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 02:38.000–02:39.000 · frames 4740–4769

**Shots:** shot-39
**Narration:** When a stranger's packets
**Captions:** follows the exact same agreement: / when a stranger's / packets arrive,
**Visible overlay layers:** captions

**02:38.000–02:38.200 · final-network:** Hold static curved infrastructure world; one practical breathes sinusoidally while camera glides. No moving packet or route reveal.
**Sampling:** Output frames 4740–4745.
- Foreground: Six hex pads: one rack, three towers, a four-cabinet server cluster, a four-antenna router; cyan connector ring.
- Background: Curved R150 terrain with procedurally painted city-light texture,56 thin route segments and studio sky/dust.
- Camera: q=ease(step(local,0,6.86)); eye[mix(4,1,q),mix(28,24,q),mix(40,36,q)],look[0,2,-5],fov47. Glide down/forward/left.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Studio wide lighting,environment.45,fog.001; practical at[-5,1,-4] intensity=32+12*sin(local*.7),distance30,glow2.1.
- Continuity: Source final has optical entrance only; ending does not fade. Last caption leaves161.7, image holds until end.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/infrastructure.ts:68 infrastructureWorld

**02:38.200–02:38.900 · final-network:** Hold static curved infrastructure world; one practical breathes sinusoidally while camera glides. No moving packet or route reveal.
**Sampling:** Output frames 4746–4766.
- Foreground: Six hex pads: one rack, three towers, a four-cabinet server cluster, a four-antenna router; cyan connector ring.
- Background: Curved R150 terrain with procedurally painted city-light texture,56 thin route segments and studio sky/dust.
- Camera: q=ease(step(local,0,6.86)); eye[mix(4,1,q),mix(28,24,q),mix(40,36,q)],look[0,2,-5],fov47. Glide down/forward/left.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Studio wide lighting,environment.45,fog.001; practical at[-5,1,-4] intensity=32+12*sin(local*.7),distance30,glow2.1.
- Continuity: Source final has optical entrance only; ending does not fade. Last caption leaves161.7, image holds until end.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/infrastructure.ts:68 infrastructureWorld

**02:38.900–02:39.000 · final-network:** Hold static curved infrastructure world; one practical breathes sinusoidally while camera glides. No moving packet or route reveal.
**Sampling:** Output frames 4767–4769.
- Foreground: Six hex pads: one rack, three towers, a four-cabinet server cluster, a four-antenna router; cyan connector ring.
- Background: Curved R150 terrain with procedurally painted city-light texture,56 thin route segments and studio sky/dust.
- Camera: q=ease(step(local,0,6.86)); eye[mix(4,1,q),mix(28,24,q),mix(40,36,q)],look[0,2,-5],fov47. Glide down/forward/left.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Studio wide lighting,environment.45,fog.001; practical at[-5,1,-4] intensity=32+12*sin(local*.7),distance30,glow2.1.
- Continuity: Source final has optical entrance only; ending does not fade. Last caption leaves161.7, image holds until end.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/infrastructure.ts:68 infrastructureWorld

**Clock / handoff shot-39:** origin 155.3s; active local range 2.6999999999999886–3.666666666666657s; reset key 155.3; {   "enter": true,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 4740,
    "shot": "shot-39",
    "local": 2.6999999999999886,
    "eye": [
      2.971632820828143,
      26.62884376110419,
      38.62884376110419
    ],
    "direction": [
      -0.05920942482434915,
      -0.49072673547108925,
      -0.8692994392646629
    ],
    "quaternion": [
      -0.25351305171706284,
      0.03288484418041812,
      0.008623606870223078,
      0.9667343756362857
    ],
    "fov": 47,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 0,
      "offsetY": -205,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 4769,
    "shot": "shot-39",
    "local": 3.666666666666657,
    "eye": [
      2.3449985579287245,
      25.793331410571632,
      37.79333141057163
    ],
    "direction": [
      -0.04783828017824291,
      -0.48538710207058033,
      -0.8729896105298804
    ],
    "quaternion": [
      -0.2506057587824386,
      0.026494308825444863,
      0.006861228304754091,
      0.9677022934823964
    ],
    "fov": 47,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 0,
      "offsetY": -205,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 02:38.000–02:39.000. No separately asserted effect onset.

**Measured mix:** -16.859 dBFS RMS; -2.53 dBFS peak. Source samples per channel 7584000–7632000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 02:39.000–02:40.000 · frames 4770–4799

**Shots:** shot-39
**Narration:** packets arrive, pass it
**Captions:** packets arrive, / pass it on
**Visible overlay layers:** captions

**02:39.000–02:39.788 · final-network:** Hold static curved infrastructure world; one practical breathes sinusoidally while camera glides. No moving packet or route reveal.
**Sampling:** Output frames 4770–4793.
- Foreground: Six hex pads: one rack, three towers, a four-cabinet server cluster, a four-antenna router; cyan connector ring.
- Background: Curved R150 terrain with procedurally painted city-light texture,56 thin route segments and studio sky/dust.
- Camera: q=ease(step(local,0,6.86)); eye[mix(4,1,q),mix(28,24,q),mix(40,36,q)],look[0,2,-5],fov47. Glide down/forward/left.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Studio wide lighting,environment.45,fog.001; practical at[-5,1,-4] intensity=32+12*sin(local*.7),distance30,glow2.1.
- Continuity: Source final has optical entrance only; ending does not fade. Last caption leaves161.7, image holds until end.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/infrastructure.ts:68 infrastructureWorld

**02:39.788–02:39.800 · final-network:** Hold static curved infrastructure world; one practical breathes sinusoidally while camera glides. No moving packet or route reveal.
**Sampling:** Source-formula interval between sampled output frames; no additional frame displays this interval.
- Foreground: Six hex pads: one rack, three towers, a four-cabinet server cluster, a four-antenna router; cyan connector ring.
- Background: Curved R150 terrain with procedurally painted city-light texture,56 thin route segments and studio sky/dust.
- Camera: q=ease(step(local,0,6.86)); eye[mix(4,1,q),mix(28,24,q),mix(40,36,q)],look[0,2,-5],fov47. Glide down/forward/left.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Studio wide lighting,environment.45,fog.001; practical at[-5,1,-4] intensity=32+12*sin(local*.7),distance30,glow2.1.
- Continuity: Source final has optical entrance only; ending does not fade. Last caption leaves161.7, image holds until end.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/infrastructure.ts:68 infrastructureWorld

**02:39.800–02:40.000 · final-network:** Hold static curved infrastructure world; one practical breathes sinusoidally while camera glides. No moving packet or route reveal.
**Sampling:** Output frames 4794–4799.
- Foreground: Six hex pads: one rack, three towers, a four-cabinet server cluster, a four-antenna router; cyan connector ring.
- Background: Curved R150 terrain with procedurally painted city-light texture,56 thin route segments and studio sky/dust.
- Camera: q=ease(step(local,0,6.86)); eye[mix(4,1,q),mix(28,24,q),mix(40,36,q)],look[0,2,-5],fov47. Glide down/forward/left.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Studio wide lighting,environment.45,fog.001; practical at[-5,1,-4] intensity=32+12*sin(local*.7),distance30,glow2.1.
- Continuity: Source final has optical entrance only; ending does not fade. Last caption leaves161.7, image holds until end.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/infrastructure.ts:68 infrastructureWorld

**Clock / handoff shot-39:** origin 155.3s; active local range 3.6999999999999886–4.666666666666657s; reset key 155.3; {   "enter": true,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 4770,
    "shot": "shot-39",
    "local": 3.6999999999999886,
    "eye": [
      2.3232521196928024,
      25.764336159590403,
      37.7643361595904
    ],
    "direction": [
      -0.047433764013625236,
      -0.48519568917191946,
      -0.8731180797810144
    ],
    "quaternion": [
      -0.2505014374489358,
      0.026267659688477937,
      0.006799465006273472,
      0.9677359180923977
    ],
    "fov": 47,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 0,
      "offsetY": -205,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 4799,
    "shot": "shot-39",
    "local": 4.666666666666657,
    "eye": [
      1.7239264441025668,
      24.96523525880342,
      36.965235258803425
    ],
    "direction": [
      -0.03601331273364829,
      -0.4797502829696645,
      -0.8766656758973032
    ],
    "quaternion": [
      -0.24753107756834342,
      0.01988787794620565,
      0.0050821291570924566,
      0.9686624850338132
    ],
    "fov": 47,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 0,
      "offsetY": -205,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 02:39.000–02:40.000. No separately asserted effect onset.

**Measured mix:** -19.359 dBFS RMS; -3.263 dBFS peak. Source samples per channel 7632000–7680000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 02:40.000–02:41.000 · frames 4800–4829

**Shots:** shot-39
**Narration:** it on to the next machine.
**Captions:** pass it on / to the next machine.
**Visible overlay layers:** captions

**02:40.000–02:40.200 · final-network:** Hold static curved infrastructure world; one practical breathes sinusoidally while camera glides. No moving packet or route reveal.
**Sampling:** Output frames 4800–4805.
- Foreground: Six hex pads: one rack, three towers, a four-cabinet server cluster, a four-antenna router; cyan connector ring.
- Background: Curved R150 terrain with procedurally painted city-light texture,56 thin route segments and studio sky/dust.
- Camera: q=ease(step(local,0,6.86)); eye[mix(4,1,q),mix(28,24,q),mix(40,36,q)],look[0,2,-5],fov47. Glide down/forward/left.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Studio wide lighting,environment.45,fog.001; practical at[-5,1,-4] intensity=32+12*sin(local*.7),distance30,glow2.1.
- Continuity: Source final has optical entrance only; ending does not fade. Last caption leaves161.7, image holds until end.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/infrastructure.ts:68 infrastructureWorld

**02:40.200–02:41.000 · final-network:** Hold static curved infrastructure world; one practical breathes sinusoidally while camera glides. No moving packet or route reveal.
**Sampling:** Output frames 4806–4829.
- Foreground: Six hex pads: one rack, three towers, a four-cabinet server cluster, a four-antenna router; cyan connector ring.
- Background: Curved R150 terrain with procedurally painted city-light texture,56 thin route segments and studio sky/dust.
- Camera: q=ease(step(local,0,6.86)); eye[mix(4,1,q),mix(28,24,q),mix(40,36,q)],look[0,2,-5],fov47. Glide down/forward/left.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Studio wide lighting,environment.45,fog.001; practical at[-5,1,-4] intensity=32+12*sin(local*.7),distance30,glow2.1.
- Continuity: Source final has optical entrance only; ending does not fade. Last caption leaves161.7, image holds until end.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/infrastructure.ts:68 infrastructureWorld

**Clock / handoff shot-39:** origin 155.3s; active local range 4.699999999999989–5.666666666666657s; reset key 155.3; {   "enter": true,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 4800,
    "shot": "shot-39",
    "local": 4.699999999999989,
    "eye": [
      1.7049802512077856,
      24.939973668277048,
      36.93997366827705
    ],
    "direction": [
      -0.035643540231189846,
      -0.47957263655602334,
      -0.8767779789128443
    ],
    "quaternion": [
      -0.24743409735024188,
      0.019681920944077433,
      0.0050273766872300715,
      0.9686917543471023
    ],
    "fov": 47,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 0,
      "offsetY": -205,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 4829,
    "shot": "shot-39",
    "local": 5.666666666666657,
    "eye": [
      1.2407602180945654,
      24.32101362412609,
      36.32101362412609
    ],
    "direction": [
      -0.026409955879179783,
      -0.47510951463049883,
      -0.8795302515195436
    ],
    "quaternion": [
      -0.24499620399865196,
      0.014551091590637914,
      0.0036774636818707623,
      0.9694078615426224
    ],
    "fov": 47,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 0,
      "offsetY": -205,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 02:40.000–02:41.000. No separately asserted effect onset.

**Measured mix:** -16.306 dBFS RMS; -3.443 dBFS peak. Source samples per channel 7680000–7728000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 02:41.000–02:42.000 · frames 4830–4859

**Shots:** shot-39
**Narration:** [No spoken words in transcript]
**Captions:** to the next machine.
**Visible overlay layers:** captions

**02:41.000–02:41.700 · final-network:** Hold static curved infrastructure world; one practical breathes sinusoidally while camera glides. No moving packet or route reveal.
**Sampling:** Output frames 4830–4850.
- Foreground: Six hex pads: one rack, three towers, a four-cabinet server cluster, a four-antenna router; cyan connector ring.
- Background: Curved R150 terrain with procedurally painted city-light texture,56 thin route segments and studio sky/dust.
- Camera: q=ease(step(local,0,6.86)); eye[mix(4,1,q),mix(28,24,q),mix(40,36,q)],look[0,2,-5],fov47. Glide down/forward/left.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Studio wide lighting,environment.45,fog.001; practical at[-5,1,-4] intensity=32+12*sin(local*.7),distance30,glow2.1.
- Continuity: Source final has optical entrance only; ending does not fade. Last caption leaves161.7, image holds until end.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/infrastructure.ts:68 infrastructureWorld

**02:41.700–02:42.000 · final-network:** Hold static curved infrastructure world; one practical breathes sinusoidally while camera glides. No moving packet or route reveal.
**Sampling:** Output frames 4851–4859.
- Foreground: Six hex pads: one rack, three towers, a four-cabinet server cluster, a four-antenna router; cyan connector ring.
- Background: Curved R150 terrain with procedurally painted city-light texture,56 thin route segments and studio sky/dust.
- Camera: q=ease(step(local,0,6.86)); eye[mix(4,1,q),mix(28,24,q),mix(40,36,q)],look[0,2,-5],fov47. Glide down/forward/left.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Studio wide lighting,environment.45,fog.001; practical at[-5,1,-4] intensity=32+12*sin(local*.7),distance30,glow2.1.
- Continuity: Source final has optical entrance only; ending does not fade. Last caption leaves161.7, image holds until end.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/infrastructure.ts:68 infrastructureWorld

**Clock / handoff shot-39:** origin 155.3s; active local range 5.699999999999989–6.666666666666657s; reset key 155.3; {   "enter": true,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 4830,
    "shot": "shot-39",
    "local": 5.699999999999989,
    "eye": [
      1.2283314103742988,
      24.304441880499066,
      36.30444188049906
    ],
    "direction": [
      -0.026158085691327895,
      -0.474987041021405,
      -0.8796039253065526
    ],
    "quaternion": [
      -0.24492926983037502,
      0.014411458187256605,
      0.0036411075173969267,
      0.9694269982774997
    ],
    "fov": 47,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 0,
      "offsetY": -205,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 4859,
    "shot": "shot-39",
    "local": 6.666666666666657,
    "eye": [
      1.0070140749059249,
      24.009352099874565,
      36.00935209987457
    ],
    "direction": [
      -0.0216315073979775,
      -0.4727793529773702,
      -0.880915297452593
    ],
    "quaternion": [
      -0.2437224349360233,
      0.011904872219363725,
      0.00299193870543981,
      0.9697673417006161
    ],
    "fov": 47,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 0,
      "offsetY": -205,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 02:41.000–02:42.000. No separately asserted effect onset.

**Measured mix:** -25.654 dBFS RMS; -9.237 dBFS peak. Source samples per channel 7728000–7776000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
### 02:42.000–02:42.167 · frames 4860–4864

**Shots:** shot-39
**Narration:** [No spoken words in transcript]
**Captions:** [None]
**Visible overlay layers:** captions

**02:42.000–02:42.032 · final-network:** Hold static curved infrastructure world; one practical breathes sinusoidally while camera glides. No moving packet or route reveal.
**Sampling:** Output frames 4860–4860.
- Foreground: Six hex pads: one rack, three towers, a four-cabinet server cluster, a four-antenna router; cyan connector ring.
- Background: Curved R150 terrain with procedurally painted city-light texture,56 thin route segments and studio sky/dust.
- Camera: q=ease(step(local,0,6.86)); eye[mix(4,1,q),mix(28,24,q),mix(40,36,q)],look[0,2,-5],fov47. Glide down/forward/left.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Studio wide lighting,environment.45,fog.001; practical at[-5,1,-4] intensity=32+12*sin(local*.7),distance30,glow2.1.
- Continuity: Source final has optical entrance only; ending does not fade. Last caption leaves161.7, image holds until end.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/infrastructure.ts:68 infrastructureWorld

**02:42.032–02:42.160 · final-network:** Hold static curved infrastructure world; one practical breathes sinusoidally while camera glides. No moving packet or route reveal.
**Sampling:** Output frames 4861–4864.
- Foreground: Six hex pads: one rack, three towers, a four-cabinet server cluster, a four-antenna router; cyan connector ring.
- Background: Curved R150 terrain with procedurally painted city-light texture,56 thin route segments and studio sky/dust.
- Camera: q=ease(step(local,0,6.86)); eye[mix(4,1,q),mix(28,24,q),mix(40,36,q)],look[0,2,-5],fov47. Glide down/forward/left.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Studio wide lighting,environment.45,fog.001; practical at[-5,1,-4] intensity=32+12*sin(local*.7),distance30,glow2.1.
- Continuity: Source final has optical entrance only; ending does not fade. Last caption leaves161.7, image holds until end.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/infrastructure.ts:68 infrastructureWorld

**02:42.160–02:42.167 · final-network:** Hold static curved infrastructure world; one practical breathes sinusoidally while camera glides. No moving packet or route reveal.
**Sampling:** Source-formula interval between sampled output frames; no additional frame displays this interval.
- Foreground: Six hex pads: one rack, three towers, a four-cabinet server cluster, a four-antenna router; cyan connector ring.
- Background: Curved R150 terrain with procedurally painted city-light texture,56 thin route segments and studio sky/dust.
- Camera: q=ease(step(local,0,6.86)); eye[mix(4,1,q),mix(28,24,q),mix(40,36,q)],look[0,2,-5],fov47. Camera settled for final fraction.
- Light: Global Finish bloom.7 grain.075 and fixed vignette; sharp DOM overlay above finish. Studio wide lighting,environment.45,fog.001; practical at[-5,1,-4] intensity=32+12*sin(local*.7),distance30,glow2.1.
- Continuity: Source final has optical entrance only; ending does not fade. Last caption leaves161.7, image holds until end.
Optical handoff inactive: picture scale1,no optical blur.
- Construction source: src/index.tsx:22 SHOTS; src/infrastructure.ts:68 infrastructureWorld

**Clock / handoff shot-39:** origin 155.3s; active local range 6.699999999999989–6.833333333333314s; reset key 155.3; {   "enter": true,   "exit": false,   "enterDuration": 0.23,   "exitDuration": 0.2,   "scaleGain": 0.32,   "blurGain": 9,   "origin": "50% 47%" }

**Measured replay camera (start / end of interval):**
```json
{
  "start": {
    "frame": 4860,
    "shot": "shot-39",
    "local": 6.699999999999989,
    "eye": [
      1.0048197921935462,
      24.006426389591397,
      36.0064263895914
    ],
    "direction": [
      -0.021586230798186043,
      -0.47275720759042494,
      -0.880928292945136
    ],
    "quaternion": [
      -0.24371032644768337,
      0.011879827868939643,
      0.002985485840142206,
      0.9697707117390513
    ],
    "fov": 47,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 0,
      "offsetY": -205,
      "width": 720,
      "height": 1280
    }
  },
  "end": {
    "frame": 4864,
    "shot": "shot-39",
    "local": 6.833333333333314,
    "eye": [
      1.0001356453161119,
      24.000180860421484,
      36.00018086042148
    ],
    "direction": [
      -0.021489552315643232,
      -0.47270991666756484,
      -0.8809560339911505
    ],
    "quaternion": [
      -0.2436844688998606,
      0.011826352836678973,
      0.0029717098046628193,
      0.9697779054692945
    ],
    "fov": 47,
    "view": {
      "enabled": false,
      "fullWidth": 720,
      "fullHeight": 1280,
      "offsetX": 0,
      "offsetY": -205,
      "width": 720,
      "height": 1280
    }
  }
}
```

**Sound:** continuous mixed master, native 02:42.000–02:42.167. No separately asserted effect onset.

**Measured mix:** -44.906 dBFS RMS; -32.28 dBFS peak. Source samples per channel 7776000–7784000 (end exclusive). Play this exact contiguous sample interval of the unchanged stereo mixed master; do not synthesize or layer guessed effects.
## Scene construction recipes

All construction recipes below are source-derived. Use their geometry/light/camera/action principles with a new storyboard; do not treat fixed A23 geography, payload, shot count or timing as requirements for a new film.

### marine / marine-shared-production-kit

**Active types**

landing
hose
fiber
la
receive-radio
ship
send-radio
tower
ground

**Sources**

path: src/production-kit.ts
function: studio / ocean / practical
lines: 6-38
path: src/kit/objects.ts
function: step / ease / rand / signal / glow / mat
lines: 7-24
path: src/index.tsx
function: Camera / Physical / Film
lines: 23,25,32
path: src/camera-edit.ts
function: pictureHandoff
lines: 5-12

**Geometry hierarchy**

studio: Root Group with HemisphereLight, three DirectionalLights, sky sphere radius 650 (32x16), 380 deterministic dust points over range 140.
wide=true changes key shadow camera left/right from ±20 to ±48; top32 bottom-20 near0.5 far130.
ocean: PlaneGeometry(size,size,180,180), rotateX(-PI/2), at [0,y,z]. Wave displacement in vertex shader: sin(v.z*.25+t*.65)*.13 + sin(v.x*.43+v.z*.13-t*.5)*.08.
Shader normal sums eight directional waves: k=i+1; d=[cos(k*1.73),sin(k*1.73)]; a=dot(p.xz,d)*(.5+k*.62)+t*(.6+k*.13); amp=.05/k^.23; slopes+=d*cos(a)*amp.
helpers: mat(color,m=.55,r=.4,e=0) sets emissive=color, emissiveIntensity=e. cyl uses CylinderGeometry(top,r,h,n=40) along local Y. tube uses CatmullRomCurve3 unless provided a Curve; TubeGeometry(n,r,8,false).
signal creates emissive tube radius r plus additive glow sprite and PointLight(color,45,20,1.7); at(q) uses getPointAt(clamp(q)), i.e. arc length. glow uses a shared 128² radial CanvasTexture and AdditiveBlending/depthWrite=false/toneMapped=false.

**Materials light**

studio: hemi: sky 0x8eacee (warm:0x96aaca), ground0x080d21,1.4
key: 0x8dbaff (warm:0xe5d5b9),3 at[-9,17,13]; shadow1024² bias-.0003 normalBias.028
rim: 0x294be5,2.1 at[15,6,-28]
fill: 0x365384,.65 at[0,5,20]
ocean: base(.012,.026,.053) + (.026,.048,.095)*fresnel^4 + glint*half-vector shine^80*2.8; mist=1-exp(-distance*.0018), blend to(.018,.03,.075). Defaults source[-15,25,-100],glint#a8b9e8.
practical: Group at position containing PointLight(color,intensity,distance,2) then glow(sprite,size,color); child order is used by animation.
physical: RoomEnvironment PMREM(.04), default environmentIntensity .25 overridden by each builder; ACESFilmicToneMapping exposure .85; ThreeCanvas720x1280,dpr1.5; Camera resets up, offset, near.01 far1500 every frame.

**Camera**

global: Builder eye/look are world positions, vertical fov in degrees; returned offset uses camera.setViewOffset(720,1280,x,y,720,1280).

**Animation**

deterministic_helpers: step(t,a,b)=clamp((t-a)/(b-a)); ease(q)=q²(3-2q); mix(a,b,q)=a+(b-a)q; rand(i)=fract(sin(i*127.1+31.7)*43758.5453). Ocean.update writes clock and eye every call.

**Clocks**

input: All scenes receive local t=frame/30-shotStart; ocean shader receives that local clock.

**Adjustable parameters**

Change size, color and source position together with camera composition. Counts and topology are native constants, not asserted quality limits. Native shadow-map/view-offset conventions must be retained for exact replay.

**Dependencies**

Three.js
kit/realism/shade weather/patch
Canvas2D texture creation
FilmCondensed font for labels

**Failure cases**

Do not substitute plain meshes for practical children without updating child-index animation.
Use true getPointAt for signal motion; replacing with getPoint changes speed.
Sky radius650 and per-scene fog matter; environment/tonemapping are outside builder root.

**Reuse principle**

Separate physical emitter, its visible glow and the surface that receives it; deterministic local time drives both world and shader.

### marine / undersea-terrain-and-cable

**Active types**

undersea
seabed
fade
repeater
crossing

**Sources**

path: src/undersea.ts
function: UNDERSEA / height / underseaScene
lines: 9-169
path: src/kit/realism/shapes.ts
function: rock
lines: source dependency
path: src/kit/realism/shade.ts
function: weather / patch
lines: source dependency
path: src/camera-edit.ts
function: pictureHandoff
lines: 5-12

**Geometry hierarchy**

root: Separate seabed mesh, 8 rock instance batches, near stones, 5 calibrated hero rocks, cable group, lights, pulse group, dust group, radius600 sky. This does not call studio().
terrain: Plane180x340, subdivisions320x560, rotated -PI/2. bank=max(0,abs(x)-8); rise=bank²*.0075*(1+.18*sin(z*.09)); y=(finite bankLimit?bankLimit*tanh(rise/bankLimit):rise)+.022*sin(z*9+sin(x*.3)*2)+.025*fbm2(x*.4,z*.3,620,3)-.025.
terrain_texture: 1024² gray:112+sin(y*.23+sin(x*.027)*1.1)*42+(rand(x+y*w)-.5)*40; repeat36x68; NoColorSpace. Shader albedo multiplier1+fbmAA(world*1.4,fwidth)*.65; normal ripple phase=z*16+sin(x*.62)*1.2+terrainNoise*3.5; slope=cos(phase)*(.34+.32*rzNoise(world*.5))*AA*rippleStrength. AA=1-smoothstep(.3,2,fwidth(phase)).
rocks: 8 variants of rock(seed71+variant,detail2,cuts7),340 each. x=(rand(i+723)-.5)*110,z=(rand(i+145)-.66)*230; abs(x)<.35 shifts x+.6; radius=.055+rand(i+472)^3.3*.58; y=height+r*.18. Near field:1600 rock(seed615,detail3,cuts4),x range26,z35-rand*135,r=.025+rand^4*.055,scale[r*1.4,r*.75,r].
hero_rocks: Five screen anchors [537,788,110],[669,719,107],[546,978,102],[565,1077,94],[203,962,32] projected from calibration camera at source local3.4: eye[2.64,1.32,12-(3.2*3.4+9*ease(step(3.4,accelerate,accelerationEnd)))],look32 ahead, FOV54, offset[21.6,49.92]. Ray y intersects ground0; radius=width*distance*2*tan(54*pi/360)/1280/1.7*.75. Seeds82+i,detail4,cuts5,rough.19,size[r*1.2,r*.8,r].
cable: Core radius.145,length360,24 radial segments,center[0,.17,-40],rotXPI/2. With repeaterAt: replace core with TubeGeometry(CatmullRom 721 centers z=140-i*.5, y=cableY(z)),720,.145,24. cableY=.17+.47*exp(-((z-repeaterAt)/5)^6). Twelve armor strands:6001 points each,z=80-i*.05,a=z*1.5+strand*2PI/12,xyz=[cos(a)*.149,cableY+sin(a)*.149,z],TubeGeometry6000,radius.034,10 radial segments.
pulse: Group at cable center: aura4.6 opacity.82 colorffc553; flare sprite scale[12,.20,1] colorffd270; hot glow1.65 fff3c6; PointLight ffc15b75 range18 decay2; white sphere.11(16x12)fff9e3.
particles: 520 sprites size .12+rand(i+209)^4*.36; x width55,y0..20,z20-rand*130; opacity.24+rand*.46; xScale*.45; rotation=rand*2-.8. Actual world depth/parallax.

**Materials light**

sand: MeshPhysical color2c3855 metal0 rough.94 specular.18,bump.075. customProgramCacheKey includes rippleStrength; required for coexistence of opening and marine profile.
rock: Base material white rough.93 specular.12; weather base#252c39,vary.55,scale.23,bump.014,bumpScale.06,rough[.72,.94],chip#485976 amount.25,wet.12.
cable: core192135 metal.85 rough.40; armorc2cde1 metal.91 rough.27 envMapIntensity3.5.
lighting: Hemi5975d4/020308,.78. Moon directional546bf5,3.2 at[-9,15,-12],shadow2048²,left/right±20 top/bottom±24 near.1 far90,bias-.00025,normalBias.018; target[0,0,-25]. Low rim1129ad,1.7 at[4,2,-45].
atmosphere: env.13 fogdensity.004 color020918; sky shader mixes(.012,.038,.050) to(.044,.08,.27) using exp(-((normalizedY+.015)*5)^2)*.8.

**Camera**

calibration: Hero rocks use a fixed independent calibration camera; changing timing changes their world positions at construction.

**Animation**

default_update: head position[0,.34,12-advance(t)-32], advance=3.2t+9*ease(step(t,accelerate,accelerationEnd)); moon z tracks rounded camera z in steps40/2048; flecks x+=sin(t*.17+i)*.07,y+=t*.02; hot opacity=.94+.06*sin(t*27).

**Clocks**

opening_profile: default bankLimit infinite,rippleStrength1,repeaterAt undefined; active OPENING_TIMING passed.
marine_profile: underseaScene(undefined,{bankLimit3.5,rippleStrength.48,repeaterAt:seabed?undefined:-20}); default timing2.5,4,2.5,3.25 used at construction. marineRun later calls set.update(0), freezing base dust and shadow tracking.

**Adjustable parameters**

Bank limit supports stable low canyon without removing ripple silhouette; keep central cable lane clear.
Ripple strength affects shader source and therefore cache key.
Changing cable radius requires armor center radius/wire radius/pulse height to remain coherent.

**Dependencies**

marine-shared-production-kit
fbm2/GLSL_NOISE
rock/patch/weather

**Failure cases**

Applying another dark base tint beneath weather multiplies away lit rock detail (source comment).
Changing clock without recalibrating landmark rays shifts measured composition.
marineRun intentionally freezes undersea dust/hot/shadow at t0; advancing set.update(t) changes native output.

**Reuse principle**

Build stable depth cues from true world geometry and calibrated landmarks; reserve sprites for light and fine particulate.

### marine / opening-track

**Active types**

undersea

**Sources**

path: src/undersea.ts
function: advance / update / camera
lines: 170-190
path: src/engine/reference-events.ts
function: OPENING_TIMING
lines: 25-33
path: src/engine/clock.ts
function: createClock
lines: 10-35
path: src/index.tsx
function: SHOTS / opening overlays
lines: 21-22,33-34,43
path: src/camera-edit.ts
function: pictureHandoff
lines: 5-12

**Geometry hierarchy**

scene: undersea-terrain-and-cable with native default profile; pulse remains32 world units ahead of camera.

**Materials light**

moving_light: Physical golden point at pulse with75 intensity; no fade. Moon shadow target quantized40/2048 in z each call.

**Camera**

eye: [2.64,1.32,12-3.2t-9*ease(step(t,2.5,4))]
look: [0,.34,eye.z-32]
fov: 54
offset: q=ease(step(t,2.5,3.25)); px=mix(.447,.470,q),py=mix(.527,.461,q); offset[(.5-px)*720,(.5-py)*1280].

**Animation**

phases: 0–2.5 local: linear3.2 units/s track; fixed screen pulse anchor(.447,.527).
2.5–3.25: acceleration and screen-anchor lift happen together.
3.25–4: camera pitch offset settled; additional9-unit eased advance completes.
4 onward: constant3.2 units/s with9-unit advanced offset.
overlays: Title native[0,2.6); Pacific Ocean/depth4000m [0,6.833); 200,000km/s native[4.666666666666667,6.4). Last.2s picture optical scale/blur outgoing.

**Clocks**

shot: 0
6.833
timing: accelerate: 2.5
accelerationEnd: 4
pitchAt: 2.5
pitchEnd: 3.25
speedAt: 4.666666666666667
speedEnd: 6.4
resolution: clock events round phrase times to30fps except pitchEnd uses clock.at directly: is traveling+.03=3.25. speed raw4.65 rounds to140/30.

**Adjustable parameters**

PulseDistance32,fov54 and offsets are authored screen anchors; changing any needs camera/landmark review.

**Dependencies**

undersea-terrain-and-cable
words.json
captions.json
reference-audio.wav

**Failure cases**

Do not round pitchEnd to3.2666666667; it is not event-frame quantized.
Opening title and speed metric are DOM overlays outside 3D builder.

**Reuse principle**

Coordinate travel acceleration, a small screen-anchor change and a quantity cue to make one action legible.

### marine / send-radio-phone-stage

**Active types**

send-radio

**Sources**

path: src/phone-radio.ts
function: sendingRadio / numbered / skyline
lines: 8-71
path: src/kit/phone.ts
function: phoneLayout / screenPoint
lines: dependency

**Geometry hierarchy**

root: studio(wide) with custom lighter blue sky; Reflector floor24x24 rotated-XPI/2 at[0,-.025,9],texture720x1280,color69758a,clipBias.003,multisample2; skyline group[0,-13,-140]scale[2,1.8,2]; 44 windows-textured blocks and 4 distinct tower silhouettes.
foreground: Frame columns atx-2.75/-4.2 and crossbeam y1.55; 4 buildings per side (arrival=true),width5.5,depth7,z=-26-i*13; heights i>=2?4:5+rand(i+side+183). Road25x56 at[0,-9.05,-38];13 pairs soft pool lights spaced4.
phone: position[-.8,2.4,0],rotation[-.025,.10,-.065],scale2.06; thread has sent photo,composer empty,brightness1,delivered1. Photo center and38 seeded source points derive from phoneLayout.lastPhoto and screenPoint(...,.14), transformed by phone matrix.
cards: 38 numbered blocks .53x.22x.035 with480x190 texture (#id FilmBody900); id=floor(rand(i+631)*1450).padStart(4).
waves: 3 sphere meshes radius1,48x24 at[-.8,3.2,-.25]; transparent,DoubleSide,depthWrite=false.
flight: CubicBezier(origin,[-.4,7,-4],[1.2,6,-50],[3,7.4,-75]); visible point practical ff bf29 intensity14 distance6 size.45.

**Materials light**

reflector: Shader five-tap texture blur: center*.5 plus four ±.0035 taps*.125; output(.012,.020,.044)+base*.17.
radio_shell: Fresnel alpha=(1-abs(dot(n,v)))^7*alpha; RGB(1,.61,.06).
surface: Sky replacements(.045,.065,.170) and(.045,.075,.21). Stage lighting later faded by radioJourney.

**Camera**

stage_camera: r=ease(step(s,3.1,5.65)),p=ease(step(s,2.2,3.1));eye[mix(0,4,r),mix(4.2,1,r),mix(13.5-1.4*p,-52,r)],look[mix(0,3,r),mix(2.3,3.5,r),mix(-4,-75,r)],fov46. radioJourney remaps s after3.1 and rigid-transforms world.

**Animation**

packets: q=(i/38+tt*.23)%1; up=ease(step(q,0,.43)),spread=ease(step(q,.16,.62)); target x=-.8+(rand(i+82)-.5)*3.6,y=5.2+rand(i+152)*1.5,z=-.3-rand(i+195)*1.4. Mix photo source to target; scale=(.76+rand(i+44)*.27)*step(q,0,.025)*(1-step(q,.95,1)); fixed seeded rotations.
waves: q=(tt*.75+i/3)%1;scale[1+1.7q,1.4+2q,1+1.7q];alpha=.28*(1-q)*step(tt,2.3,2.7)*(1-step(tt,3.2,3.7)).
pulse: visible3.2<=tt<5.5;position flight.getPoint(ease(step(tt,3.2,5.4))) (parameter-space, NOT getPointAt).
frame: visible tt<4; phoneStage mast and title forcibly hidden by journey.

**Clocks**

stage_time: phoneStage.update(tt) uses uncompressed journey time; only phoneCamera uses tt<=3.1?tt:3.1+(tt-3.1)*.6.

**Adjustable parameters**

Packet count/seed/labels are native evidence. For new card copy ensure text fits480x190 and plane.
Phone image sources must remain coupled to screenPoint/layout and phone pose.

**Dependencies**

marine-shared-production-kit
phone assets from usePhone(photo.jpg)
FilmBody font
Reflector

**Failure cases**

Substitute layout-independent emitters and particles start in empty screen space.
Camera time remap must not be applied to update clock.
Reflector includes phone and moving packets; flat floor removes this relationship.

**Reuse principle**

Emit data from measured image pixels, then turn one packet stream into a physical point traveling through a continuous city.

### marine / continuous-radio-journey

**Active types**

send-radio
tower
ground

**Sources**

path: src/radio-journey.ts
function: radioJourney / local / camera / update
lines: 7-42
path: src/tower-light.ts
function: towerLight
lines: 38-96

**Geometry hierarchy**

hierarchy: Root contains transformed sendingRadio(reference,true).root plus untransformed towerLight(tower,reference).root. Turn Y=-PI/2; offset=-R*[3,-9,-75]=[-75,9,-3]; transform(p)=R*p+offset. Phone pose quaternion premultiplied by turn, position transformed.
light_rig: Before transform, directional targets without parents are attached to phone root. Hemisphere world-direction compensated using (0,1,0)-offset then inverse turn. Tower sky hidden, phone sky shared with arrivalBlend uniform.

**Materials light**

blend: q=ease(step(tt,4.1,5.5)); cached original intensities reset each update, phone lights*(1-q),tower lights*q. Phone sky palettes interpolate to tower(.035,.045,.09)/(.045,.065,.18). Fog mixes .0025→.004. env.2,fog050d25.
arrival_flash: Before tt=6.166, tower wave PointLight intensity and sprite opacity forced0; thereafter tower update owns them.

**Camera**

phone: tt<=4.5 uses transformed phoneStage camera with post3.1 clock*.6.
approach: 4.5<tt<5.5: cubicBezier(start.eye,[-35,9,1],[-6,4,23],[3.6,4,20]); q=ease(step(tt,4.5,5.5)); look lerps start.look→[0,12.8,0] using ease(step(tt,4.5,4.93));fov46.
tower: tt>=5.5 uses tower.camera(tt-6.166), including negative tower-local time in last send shot.

**Animation**

visibility: phone returned only tt<4.5. title cell tower visible4.933<=tt<7.066 (overrides tower native title condition); quaternion aligned to active camera. mast/title of phone stage always hidden.
sky_center: phoneSky.position=(offset*(1-q)-offset) transformed by inverse turn; keeps shared environment coherent during move.

**Clocks**

input_adapters: send-radio: tt=native-45.166666666666664
tower: tt=(native-51.333)+(51.333-45.167)=native-45.167
ground: tt=(native-54.3)+(54.3-45.167)=native-45.167
tower_subclock: u=tt-(51.333-45.167); for tower+ground, u=native-51.333
precision: Preserve .000333333333336 local discontinuity at send→tower; exact source shot origin and internal45.167 differ.

**Adjustable parameters**

For new routes, rigid-transform both light targets and phone pose; preserve arrival endpoint and tower view at5.5.
Approach start/end4.5/5.5 and light blend4.1/5.5 are separate windows.

**Dependencies**

send-radio-phone-stage
tower-ground-route
fiber-entry-interior

**Failure cases**

Resetting cached intensities is essential for random-access seeks; repeated multiplicative fade causes drift.
Using local time zero independently for tower and ground restarts routing and camera.
Using SHOTS start45.1666667 as the internal45.167 constant alters exact baseline.

**Reuse principle**

A shared world with a spatial camera bridge and separate lighting blend lets logical shots behave as one causal sequence.

### marine / tower-ground-route

**Active types**

send-radio
tower
ground

**Sources**

path: src/tower-light.ts
function: blueMast / cabinet / district / towerLight / compose / progress
lines: 8-96
path: src/cutaway-ground.ts
function: cutawayGround
lines: 9-37

**Geometry hierarchy**

mast: height18; four legs radius.052 from square halfspan s(y)=1.5-y/18*1.15.14 braced levels, ladder rails±.18 and rungs every.25,4 vertical cable strands. Platforms at14/16.6 with8-sided decks/railings and three radial panel mounts. Orange panels heights.72 or1.46; dishes at8.4/10.4; beacon17.4.
site: 18 background buildings in2rows9 atz-10/-19; cabinet pad4.7x.25x2.9 centered[5.55,-.025,.2]. Hero cabinet atx4.75,h3.5,w1.75; secondx6.35,h2.6,w1.38. Cabinet7-vent groups at .24h and .78h; roofs, hinges, handles. Fencez-1.8,postsx-7..24 step2.2,diamond line pairs every.19.
cutaway: Slab42x.66x1.2 subdivisions280x4x2 at[12,-.60,1.42]. lower(x)=fbm2(x*5.8,.7,413,3)*.10; lower edge y displaced by lower*(1-(y+.33)/.66); front z displaced fbm2(x*8,y*12,62,3)*.020. 3x5000 rock instances seeds210–212,detail1,cuts3: first4000 size.018+.018rand,last1000 size.036+.04rand,flatten z*.42. Color scalar.60+.38rand. Recessed backing42x6.7x.35 at[12,-4.17,.12]. Four quiet utility tubes below route at nominal y -2.8,-2.98,-4.06,-4.23.
route_beziers: 0.3
17
0.52
0.3
12
0.52
0.3
5
0.52
0.3
3.65
0.52
0.3
3.65
0.52
2
3.65
0.52
4.05
3.4
0.52
4.1
3.45
0.52
4.1
3.45
0.52
4.75
3.45
0.8
4.75
2
0.8
4.75
0.02
0.8
4.75
0.02
0.8
4.75
-1.05
2.3
5
-1.08
2.4
6.2
-1.08
2.4
6.2
-1.08
2.4
11
-1.08
2.4
18
-1.08
2.4
26
-1.08
2.4
route: CurvePath five Beziers; seg=[0,...getCurveLengths()/total]. Outer cableTube radius.063 segments180. Additive inner pulse Tube radius.046 segments250. A practical PointLight+glow1.35 and extra white glow.22 travels getPointAt(q).

**Materials light**

mast: steel285ca0 m.50/r.35/e.025; edge649acd .78/.27/.025; orangef1a14d .25/.52/.12; dark101723 .65/.48.
cabinet: body53627e .40/.60,trim7f91ae .5/.48. Warm light alters individual cloned vent trim materials.
route: physical84adee/emissive204d8d intensity.15 metal.25 rough.22 opacity.45 depthWritefalse. Additive shader d=(q-uv.x)*routeLength; alpha=(exp(-(d/.12)^2)+step(0,d)*exp(-max(d,0)/tail)*.85)*enabled; RGB(1,.60,.08).
site_lights: studio wide plus practical[3,2,3]9ebfff intensity55 distance13 size.2 and[-2,17,1]8fbbff28 range8 size.22.
soil: weather base273143,vary.48,scale.065,rough.88–.99,bump.0015,bumpScale.018. Grain base414854,vary.32,scale.045,rough.84–.98,bump.0013,bumpScale.012; backing080f1c rough.91–1.

**Camera**

keyframes_u_eye_look: 0
3.6
4
20
0
12.8
0
0.867
3.6
4
20
0
12.8
0
1.24
2.2
17.25
5.7
0.8
16.45
0.5
1.63
2.2
17.25
5.7
0.8
16.45
0.5
2.2
4
5.2
6.8
2
4.5
0.5
2.65
3.8
2.2
8
3
1.7
0.4
3.15
6.8
1.3
13.8
5.8
0
0.4
3.8
6.8
1.3
13.8
5.8
0
0.4
5.6
6.8
1.3
13.8
5.8
0
0.4
base_interpolation: ease(step(u,key0,key1)) between eye/look keys;fov46. u>3.8 eye.x=max(5.8,pulseX-1.5)+1,look.x=max(5.8,pulseX-1.5).
override_hermite_keys: 2.2
4
5.2
6.8
2
4.5
0.5
2.667
-2
2.714
15.956
2.828
1.753
0.4
2.934
0.008
1.083
15.699
4.919
0.166
0.4
3.167
0.196
1.062
15.859
5.709
-0.264
0.4
4.167
2.543
-0.401
13.8
7.278
-0.426
0.4
4.567
dynamic x+1
1.3
13.8
dynamic x
0
0.4
compose_formula: On2.2<u<4.567, Hermite H00=2q³-3q²+1,H10=q³-2q²+q,H01=-2q³+3q²,H11=q³-q². First slope0; middle central neighbor slopes; last slopeX=(pulseX(4.568)-pulseX(4.566))/.002,others0. x=max(5.8,pulseX(4.567)-1.5). Then fiberEntry.camera overrides after4.567.

**Animation**

progress: Linear q knots in u:[[1.64,0],[2.20,seg1],[2.57,seg2],[3.47,seg3],[3.9,seg4],[5.7,1]]. Clamped step per segment; enabled u>=1.63 (stationary10ms before progress).
pulse: intensity28 before2.57,24 before3.8,else22; sprite1.9 before3.8 else1.25; tail=mix(3.5,.28,step(u,2.57,2.95)). fiber dive later reduces intensity by1-.999dive.
vents: For upper vents(y>2),on=step(u,2.70,2.87);lower on=step(u,3.17,3.37). Color lerp7f91ae→e6b557;emissiveffa624 intensity.65on.
labels: native tower title u<.9 but radioJourney overrides to4.933<=journey<7.066; fiber label4.3<u<4.967 at[activeLook.x,-1.6,2.4],faces camera.
arrival: flash=(1-step(u,.75,.9))*(.5+.5*cos(u*21))^8,light85*flash,sprite opacity.12flash at[0,15,2]. radioJourney suppresses for u<0.

**Clocks**

tower_subclock: u=native-51.333 across tower and ground. In preceding send, u=(native-45.166666666666664)-6.166. Active source towerLight kind is always tower; direct towerLight(ground) branch is not called by A23.

**Adjustable parameters**

Route times are tied to curve-segment normalized lengths; changing path requires re-evaluating camera and cabinet emission cues.
Ground backing and quiet utilities must stay below/behind hero axis[-1.08,2.4].

**Dependencies**

continuous-radio-journey
fiber-entry-interior
marine-shared-production-kit
rock/patch/weather/fbm2

**Failure cases**

Do not label camera base keyframes alone as final camera; Hermite override dominates2.2–4.567.
Moving geology in front of axis occludes the micro-entry.
Storing q incrementally breaks direct/backward seek.

**Reuse principle**

Attach the route to real structure, light only the hardware it reaches, then move the camera down through the same continuity.

### marine / fiber-entry-interior

**Active types**

ground

**Sources**

path: src/fiber-entry.ts
function: fiberEntry / camera / update
lines: 6-25
path: src/kit/realism/camera.ts
function: move
lines: 8-11

**Geometry hierarchy**

axis: x travel,axisY=-1.08,axisZ=2.4,radius.063. Open cylinders length54,64radial at[33.2,-1.08,2.4],rotateZ=-PI/2; shell and internal black wall(radius*.96).
rings: 146 RingGeometry(inner=.73r,outer=1.12r,96) instanced atx6.35+i*.37,rotYPI/2.
ribbons: 76 lanes around ring,84 segments each; radial r*(.77+rand(lane+118)*.10); x=6.25+j*.64+rand(seed+22)*.4;length=.12+rand(seed+203)*.5;width=.00018+rand(seed+76)*.00048; each6 vertices; local across=(u*2-1)*w*4. Blue unless lane%3==0 gold; brightness .8+rand*.8.
end_marker: Dark circle radius.037 rotatedYPI/2 and gold .12 / white .025 additive glow, attached in front of moving camera by x+1.5/1.49.

**Materials light**

shell: physical668bca/emissive244676 intensity.22,r.18,m.15,opacity.24,DoubleSide,depthWritefalse; back wall basic020613,BackSide,fogfalse,toneMappedfalse.
ring_shader: z=radius-.0583;alpha=(.62exp(-z²/.0000023)+.16exp(-z²/.000032))*(1-smoothstep(.2,2.4,depth)).RGB(.52,.73,1).
ribbon_shader: Soft core+halo across UV, fades depth1.5–3.5 and near.015–.055; longitudinal UV edges fade0–.14/.86–1; distant tint mixes to(1,.70,.30) via smoothstep(.28,1.2,depth)*.8; additive,toneMappedfalse.

**Camera**

move: m(u,a,b)=q³*(q*(6q-15)+10),q=clamp((u-a)/(b-a)); quintic bounded acceleration.
path: CatmullRom centripetal getPoint(m(u,4.567,5.37)) through relative offsets[[-.5,2.38,11.4],[-4.5,1.4,8],[-7,.8,4],[-6,.35,1.5],[-3,.08,.2],[-.65,0,0]]. eye=[pulseX+offset.x,axisY+offset.y,axisZ+offset.z].
aim: after4.567, mix original base look toward[pulseX+2,axisY,axisZ] with m(u,4.567,4.967). fov inherited46; exact Camera near.01 required.

**Animation**

visibility: Group u>4.25. Circle/core/tiny u>5.20. dive=m(u,4.9,5.27),gold opacity.9dive,tiny opacitydive. Source pulse sprite mix(base1.9/1.25,.012,dive),white core mix(.18,.003,dive),point intensity*(1-.999dive).

**Clocks**

input: u=native-51.333; entry motionnative55.9–56.703,aim settles56.3,light dive56.233–56.603,interior marker visible>56.533.

**Adjustable parameters**

Scale all radius/near-plane/ribbon widths as a unit for a different diameter.
The .063 axis is true scene scale, not a separate large tunnel set.

**Dependencies**

tower-ground-route
kit/realism/camera.move

**Failure cases**

Near plane above.01 can clip the tunnel; changing scale alone alters soft-depth fades.
getPoint must remain parameter-space; getPointAt changes authored trajectory.
Do not keep full outer pulse light during micro-entry; intensity reduction prevents clipping.

**Reuse principle**

Bridge exterior and microscopic scales on one geometric axis, using relative camera offsets and controlled emitter shrinkage.

### marine / coastal-cable-landing

**Active types**

landing
la

**Sources**

path: src/infrastructure.ts
function: cableLanding / litCity / ventCabinet
lines: 6-49
path: src/production-kit.ts
function: ocean
lines: 27-34
path: src/camera-edit.ts
function: pictureHandoff
lines: 5-12

**Geometry hierarchy**

shared: studio(wide),ocean size380 centerz-100 y-.45. Tile1024² noise1800flecks +4x4 grid,repeats3x3; floorBox thickness.5 at y-.26. Skyline litCity84 buildings14cols6rows; window512x1024,64rows28cols with seeded lights. Building width1.8+rand*1.6,height2+rand^1.5*(LA13:Shanghai19); z rows-7 plus jitter.
landing: floor32x30 atz4. Skylinez-68 scale.78 includes pearl sphere tower and financial/taper silhouettes. Facilitybox7x5x12 at[-6.6,2.5,-1],roof7.35x.24x12.35 at5;4 rooftop vent units; side louvers; standalone cabinet[4.5,0,1.2]2.6x3.8 yaw-.38; lamp post[4.1,0,-1]h8.5; fence atz-10.5. Title Shanghai[-11,15,-30]5x.9,sub cable landing[-11,13.9,-30]4x.6.
la: floor180x180 atz-110. Skylinez-120 scale.8,x-34.32 palms alternating sides z=-27-floor(i/2)*7.2,h7+rand*2;street lampsx±5.3,y3.7.24 low buildings alternating sides z=-25-floor(i/2)*8 with5 lit windows each. Title Los Angeles[-8,11,-30]5x.9.
landing_path: -1
0.17
20
-0.8
0.17
10
-1.8
0.17
6
-2.9
0.35
4
-3.02
2.1
1.3
-3.02
1.1
-5
-1
0.1
-8
0
-0.6
-18
0
-0.8
-70
la_path: 0
-0.3
24
0
-0.3
8
0
-0.3
-16
0
0.14
-22
0
0.14
-70
cables: Physical tube radius.105,segments120,7389b3 m.78/r.4. In LA negative-y cable vertices forced to-.68, while signal path remains-.30. signal radius.032 size2.7 landing or4.5 LA; LA hides pulseGroup mesh children (emissive path) while glow and light remain.
source_curve_lengths: landing: 92.06952595330138
la: 94.02033964012205

**Materials light**

floor: map,colorb0bdd5 rough.68 metal.16. City window material809ab7,emissivewhite,.48,r.64,m.18.
landing_lights: cold post practical[cabinet side lamp local-2.1,8.2,0],c3e8ff,170,distance21,size1.7;warm wall[-2.8,3.5,1.3],ffcd8c,120,d15,s1.4. Ocean glint657dba.
la_lights: Ocean glintefc14b; injected shimmer pulseLight=exp(-distance(p.xz,source.xz)*.065); c+=glint*pulseLight*(.07+shine*.6)*(.35+.65*abs(sin(p.z*9+dx*14))). Source follows pulse xz,y5.
atmosphere: env.38,fog.002(default color040b25 from Physical),studio wide.

**Camera**

landing: eye[.3-.12t,7.3,19-.65t],look[-.8,1,-8],fov48.
la: eye[0,3.4,22-2.2t],look[0,3,-55],fov51.

**Animation**

travel: pulse.at(ease(step(t,0,landing?3.17:3.7))); position is CatmullRom getPointAt arc length. LA uses same easing to update water source before sea.update(t,camera.eye).
handoffs: landing enters optical blur/scale0–.23 and exits last.2; LA no pictureHandoff.
curve_evaluation: pulse positions in beats evaluated with installed Three.js CatmullRomCurve3.getPointAt (source API) at analytic midpoint; no rendering.

**Clocks**

shots: 76.167
79.333
landing
110.1
113.8
la
landing_end_note: Shot length3.166 < route3.17; exact endpoint not reached before cut.

**Adjustable parameters**

For different geography change title/city silhouette in addition to route.
Route through cabinet and shoreline is one continuous curve; move contacts with facility geometry.

**Dependencies**

marine-shared-production-kit
kit/objects.palm
kit/objects.signal

**Failure cases**

Do not use production-scenes.coastal; dispatcher earlier cableLanding branch wins.
Do not reverse LA signal: active A23 path travels fromz24 toward-70.
LA hidden emissive mesh does not imply hidden glow or PointLight.

**Reuse principle**

Use a visible route through practical hardware and an animated water reflection to join city-scale geography to cable travel.

### marine / cable-macro-comparison-and-section

**Active types**

hose
fiber

**Sources**

path: src/cable-macro.ts
function: cableMacro
lines: 6-33
path: src/camera-edit.ts
function: pictureHandoff
lines: 5-12

**Geometry hierarchy**

root: studio(); floor90² at y-1.9,1024² drawn ripple texture repeat5²;100 deterministic rock(seed27,detail2,cuts5) instances across34² aty-1.8,scale s=.08+rand^3*.55 times[1.3,.6,1]. Assembly[0,.7,0]rotX=-PI/2; cylinders built along localY.
hose: cable groupx-.58; core r.46 h24;24 armor strands,301 points y=-12+j*.08,a=k/24*2PI+y*.72,center radius.46,tube radius.057,300segments. Garden hose groupx.62,z.2;rubber r.43 h18 center localY-6.5. Brass connector r.48h1.30 atY2.05;hex nut r.53h.35 atY2.37,6sides;thread rings r.505h.045 every.13 from1.5<2.8. Dark mouthr.39h.014 at2.83,torusR.45 tube.055 at2.84 rotatedXPI/2.
fiber: Jacket r.89h6.4 atY-4.1;22 steel helixes,141pts,y=-7.3+j*.045,a=k/22*2PI+y*.4,r.90,tuber.12. Nested stepped cylinders:coat r.78h5.5,Y-2.25;white r.64h4.7,Y-1.40;steel r.50h3.5,Y-.28;copper r.36h2.35,Y.95;white r.275h1.9,Y1.55. Eight fiber splays kPI/4 fromrad.09,Y2.15→rad.12,Y3.3→rad.35,Y4.8+rand(k)*.6,tube.014,40segments. Static section present from first frame, not an animated disassembly.

**Materials light**

steel: b5c5e2 m.86/r.34 env1.8
coat: 102851 .22/.5
copper: b9876c .65/.47
white: dae8fa .12/.5
glass: c5ffff .1/.2/emissive.9
garden_hose: weave512x1024 green24bb6a,256 slanted lines alternating158c50/5edd94 plus horizontal72e4a433 strokes every4px;rubber color a7ffc4 rough.48 bump.022; brassb88e3c .86/.29.
fiber_light: practical in local cable[0,2.1,.3],c6e3ff,intensity8,distance5,size.8.
environment: env.35 fogdensity.007; floor map,color7a91b5 rough.95 bump.055.

**Camera**

hose: eye[.6,8.8,9.3-.18t],look[0,.3,0],fov43
fiber: eye[.2,9.6,10.4-.25t],look[0,.3,-.2],fov44

**Animation**

rotation: each update assembly.rotation.z=hose?.08:-.50; rotation.y=mix(-.035,.035,ease(step(t,0,3.3))); x remains-PI/2. No layer movement.
handoffs: hose only outgoing last.2;fiber incoming0–.23 and outgoing last.2. Hose DOM Undersea cable atleft45 top205 size31 throughout.

**Clocks**

shots: 81.5
84
hose
84
87.367
fiber

**Adjustable parameters**

Native comparison radii.46 steel/.43 hose keep sizes visually comparable; new dimensions need consistent helix and fittings.
Rotate full assembly to preserve common comparison scale; do not animate nested section as removal unless authoring a new behavior.

**Dependencies**

marine-shared-production-kit
kit/realism/shapes.rock

**Failure cases**

Do not call production-scenes.cableSection; unreachable alternate has different labels, orientation and materials.
Wire and core radii intersect intentionally; crude low segment counts create visibly faceted silhouettes.

**Reuse principle**

Explain scale with a neighboring familiar object, then expose static nested layers under a restrained inspection move.

### marine / marine-run-repeater-continuity

**Active types**

seabed
fade
repeater
crossing

**Sources**

path: src/marine-shots.ts
function: marineRun / update / camera
lines: 6-58
path: src/camera-edit.ts
function: pictureHandoff
lines: 5-12

**Geometry hierarchy**

base: undersea-terrain-and-cable withbankLimit3.5,rippleStrength.48,repeaterAt=-20 except seabed. Repeater created even in seabed but hidden.
repeater: Group[0,.64,-20];outer shellr.60h3.7 rotXPI/2;casing cloned steel transparenttrue. Endrings atz±1.72,r.73h.16;16 hexbolts r.043h.08 each,radial.65,z side*.1 outside rim. Taper neck r.22 bottom/.49top,h.95 atz±2.25,rotationX=-sidePI/2;8 endrings r.22+i*.025,h.045,z=side*(2.70-i*.095),alternatingdark/edge. Beltsr.62h.10 atz±.95.
inner: Core r.28h3.5rotXPI/2 color62b8db and2 gold tube conduitsx±.30,points z-1.5/-1.1/1.1/1.5 with y0/.28/.30/0,r.025,32segments.
labels: Repeater1.15x.22 at[.2,1.9,-21.7],every80–100km1.55x.16 at[.2,1.62,-21.7]. Rim practical[-1.8,2,-19].

**Materials light**

metal: steelb3cbed m.88/r.23;edged3e3f7 .86/.24;dark254769 .74/.30;inner62b8db .54/.23/e.28;conduit e7b750 .78/.26/e.5.
pulse: PointLight colorffa52b; seabed/crossing100 and scale.67; fade scale.40→.23 and light95→12 over3s;repeater scale.23→.67 andlight12→100 using ease(step(t,1.4,3.1)).
casing: reveal=ease(step(t,1.5,1.9))*(1-ease(step(t,2.7,3.1)));opacity=1-.84reveal only repeater;inner.visible repeat&&reveal>.01. Rim repeater intensity30+12reveal;crossing12;hidden otherwise. Labels repeat&&t>1.8.

**Camera**

seabed: eye[4.2,4.6,10-4t],look[0,.34,-18-4t],fov51,offset[-58,77]
fade: q=ease(step(t,0,3));eye[mix(3.8,5.4,q),mix(5.2,2.4,q),mix(12,-5,q)],look[0,.5,-20],fov49,offset[-15,20]
repeater: q=ease(step(t,0,4.5));eye[mix(8,7.5,q),mix(3.1,3.3,q),mix(-12,-14,q)],look[0,.65,-20],fov49,offset[-12,-25]
crossing: eye[4.7,2.2,-9.8-3.7t],look[0,.4,-27-3.7t],fov53,offset[-8,0]

**Animation**

reset: Every update calls set.update(0), then assigns pulse position/color/scale/intensity/casing/visibility absolutely. Base hot flicker/dust are frozen at0.
z: seabed=-18-4t;fade=mix(-3,-15.5,ease(step(t,0,3)));repeater=mix(-15.5,-27,ease(step(t,0,4.5)));crossing=-27-5t.
y: seabed=.36;others=.36+.47*exp(-((z+20)/5)^6); shared cable lift avoids passing through sand at repeater.
continuity: fade end[-15.5,y,.23scale,12light] matches repeater start;repeater endz-27,scale.67,100light matches crossing start. Cameras cut. Seabed is an earlier independent segment.
metrics: crossing DOM12,000km all shot;60ms only global>108.1; crossing incoming0–.23, repeater outgoing last.2.

**Clocks**

shots: 79.333
81.5
seabed
96.1
99.1
fade
99.1
103.6
repeater
103.6
110.1
crossing

**Adjustable parameters**

RepeaterAt-20,base lift.47,width5 and repeater center.64 are coupled.
Opacity windows and gain window overlap but have different starts; keep them distinct for a new mechanism.
Crossing pulse5units/s versus camera3.7units/s means increasing distance; changing one changes perceived travel.

**Dependencies**

undersea-terrain-and-cable
marine-shared-production-kit

**Failure cases**

Replacing absolute assignments with tween accumulation breaks seeks.
Calling set.update(t) changes shadow/dust phase and native result.
Labels are only enabled after1.8 in repeater; not persistent through crossing.
The cable lift uses exp(-x^6), not a Gaussian exp(-x²).

**Reuse principle**

Show attenuation, reveal amplification inside a physical housing, and preserve pulse state across the next cut.

### marine / receiving-cell-radio

**Active types**

receive-radio

**Sources**

path: src/infrastructure.ts
function: cityRadio / litCity
lines: 50-66,6-20
path: src/kit/objects.ts
function: tower
lines: 32
path: src/camera-edit.ts
function: pictureHandoff
lines: 5-12

**Geometry hierarchy**

world: studio(wide),surface180 color111a36;litCity(la=true,z=-24). Two roads10x.035x100 atx±10,y-.01,z-30;26 lane bars6x.008x.055 each atz8-i*3.8 with lightsglow.45 atx±4,y.15.
mast: kit.tower at[4,0,-10],h17. Four steel legs from radius.9 bottom to.29top;10bracedlevels;two square platforms aty.65h/.9h;6 orange antenna panels each radius1.1;two dishes. Beacon[4,17.4,-10].
waves: 4 sphere meshes radius1,48x32 at[4,15,-10];DoubleSide transparent depthWritefalse Fresnel exponent3.8. Phone=null. No packet meshes constructed (kind receive).
hidden_route: A signal still constructed under hidden pathGroup (visible only ground or tower), so its point light is hidden with group; it does not contribute in receiver.

**Materials light**

beacon: practicalf07066 intensity12 range5 size.7
waves: RGB(1,.64,.11),opacity=.42*(1-q),fragmentalpha=(1-abs(dot(n,v)))^3.8*opacity.
atmosphere: env.35,fog.003,defaultfog040b25. Tower metal7a9abe .9/.22,orangeeeb468 .5/.4.

**Camera**

eye: 13
15
15
look: 3
11
-11
fov: 46
motion: Static camera throughout.

**Animation**

waves: fori0..3 q=(t*.27+i/4)%1;scale=.7+12q. Expand shells independently, fade before periodic reset. First within-shot reset i3 att=.25/.27=.9259259259; i2 att=.5/.27=1.8518518519; i1 att=.75/.27=2.7777777778.
end: Outgoing picture blur/scale begins atnative116.633,last.2s.

**Clocks**

shot: 113.8
116.833
period: 1/.27=3.7037037037s;four quarter-phase shells.

**Adjustable parameters**

For new broadcast beats keep staggered shell phases and fades so the full sphere does not read as a solid bubble.

**Dependencies**

marine-shared-production-kit
infrastructure.litCity
kit/objects.tower

**Failure cases**

Active receiver uses cityRadio, not radioJourney or generic radioScene.
No phone is on screen from this builder; phone data object exists internally but returned phone=null.

**Reuse principle**

Explain wireless reach with staggered fading Fresnel shells around a stable recognizable mast.

### marine / historical-sea-1858

**Active types**

ship

**Sources**

path: src/production-scenes.ts
function: historicalSea
lines: 72-81
path: src/ship-asset.ts
function: useShip
lines: 7-12
path: src/index.tsx
function: ship Metric
lines: 40
path: public/ship/ship_pinnace.gltf
function: asset JSON
lines: buffers/images/meshes/materials/nodes
path: src/camera-edit.ts
function: pictureHandoff
lines: 5-12

**Geometry hierarchy**

root: studio(warm=true,wide=true);ocean500 centerz-90,y0. Hero group[-2,0,-3],yaw-.52;loaded GLTF scene cloned recursively.
normalization: bounds=Box3(model),size,center. scale=13/max(size.x,size.z);copy.scale scalar;copy.position=[-center.x*scale,-bounds.min.y*scale-.75,-center.z*scale]. Every mesh castShadow=receiveShadow=true.
far_ship: Clone hero including model,position[-13,-.1,-38],scale.68 (retains yaw-.52).
moon: sphere2.3 basicf3e7ce at[-18,25,-100];glow14,b1bfd9 at same position. Practical warm light[2,2,1].
asset: public/ship/ship_pinnace.gltf loaded by GLTFLoader; useShip delayRender(CC0 sailing-vessel model),settle(handle) on success,cancelRender on error. Source historicalSea has no procedural fallback when model null.
asset_manifest: buffers: byteLength: 7127428
uri: ship_pinnace.bin
images: textures/ship_pinnace_aft_nor_gl_1k.jpg
textures/ship_pinnace_aft_diff_1k.jpg
textures/ship_pinnace_aft_arm_1k.jpg
textures/ship_pinnace_rigging_nor_gl_1k.jpg
textures/ship_pinnace_rigging_diff_1k.jpg
textures/ship_pinnace_rigging_arm_1k.jpg
textures/ship_pinnace_details_nor_gl_1k.jpg
textures/ship_pinnace_details_diff_1k.jpg
textures/ship_pinnace_details_arm_1k.jpg
textures/ship_pinnace_hull_nor_gl_1k.jpg
textures/ship_pinnace_hull_diff_1k.jpg
textures/ship_pinnace_hull_arm_1k.jpg
textures/ship_pinnace_deck_nor_gl_1k.jpg
textures/ship_pinnace_deck_diff_1k.jpg
textures/ship_pinnace_deck_arm_1k.jpg
textures/ship_pinnace_interior_nor_gl_1k.jpg
textures/ship_pinnace_interior_diff_1k.jpg
textures/ship_pinnace_interior_arm_1k.jpg
textures/ship_pinnace_sails_nor_gl_1k.jpg
textures/ship_pinnace_sails_diff_1k.jpg
textures/ship_pinnace_sails_arm_1k.jpg
mesh_names: Plane.041
Cylinder.042
Plane.046
Plane.498
Plane.057
Plane.043
Plane.002
node_count: 7
primitive_count: 7

**Materials light**

world: env.48,fog.0012,color080d1a;warmstudio keye5d5b9 hemi96aaca,blue rim persists.
sea: ocean.source copies moon position;glint defaults#a8b9e8;practicalffc883,intensity8,distance14,size.6.
model: Original GLTF materials kept; normalization does not override material maps.
gltf_materials: name: ship_pinnace_aft
doubleSided: True
pbrMetallicRoughness: baseColorTexture: index: 1
metallicRoughnessTexture: index: 2
normalTexture: index: 0
name: ship_pinnace_rigging
doubleSided: True
pbrMetallicRoughness: baseColorTexture: index: 4
metallicRoughnessTexture: index: 5
normalTexture: index: 3
name: ship_pinnace_details
doubleSided: True
pbrMetallicRoughness: baseColorTexture: index: 7
metallicRoughnessTexture: index: 8
normalTexture: index: 6
name: ship_pinnace_hull
doubleSided: True
pbrMetallicRoughness: baseColorTexture: index: 10
metallicRoughnessTexture: index: 11
normalTexture: index: 9
name: ship_pinnace_deck
doubleSided: True
pbrMetallicRoughness: baseColorTexture: index: 13
metallicFactor: 0
metallicRoughnessTexture: index: 14
normalTexture: index: 12
name: ship_pinnace_interior
doubleSided: True
pbrMetallicRoughness: baseColorTexture: index: 16
metallicFactor: 0
metallicRoughnessTexture: index: 17
normalTexture: index: 15
name: ship_pinnace_sails
doubleSided: True
pbrMetallicRoughness: baseColorTexture: index: 19
metallicRoughnessTexture: index: 20
normalTexture: index: 18

**Camera**

eye: [14-.55t,6.3,20-.8t]
look: -2
4.5
-4
fov: 48

**Animation**

hero: rollZ=sin(.8t)*.015;pitchX=sin(.6t)*.022;position.y=sin(.8t)*.1.
far: rollZ=sin(.5t+1)*.015;no update to far pitch/y after clone.
ocean: sea.update(t,camera.eye) each frame.
overlay: DOM1858,sub first transatlantic telegraph cable,top23%,size76;outgoing optical handofflast.2s.

**Clocks**

shot: 139.167
142

**Adjustable parameters**

For replacement ship normalize longest horizontal dimension to13 and lower minY by.75; adjust waterline after reviewing actual geometry.
Small roll/pitch amplitudes are native constants, not physically simulated wave coupling.

**Dependencies**

marine-shared-production-kit
ship/ship_pinnace.gltf and its referenced resources
useShip

**Failure cases**

Do not use generic procedural ship() in scenes.ts; dispatcher selects historicalSea(ship).
Null model yields empty hero and empty clone; readiness/load failure handling belongs to useShip.
Clones share material references; editing material in one may affect both.

**Reuse principle**

Normalize a reusable model by bounds, set one foreground and one distant scale cue, and animate low-amplitude motion against shader water.

### data / phone-model

**Sources**

src/kit/phone.tsx:56-64,97-126,190-349,355-422
src/index.tsx:25

**Geometry hierarchy**

hierarchy: A parent transform contains the beveled metal frame, black glass, rounded screen, additive glass sheen, five side buttons, and a screen point light.
dimensions: Width is 1. BH=147.6/71.6, TH=7.8/71.6, SW=65.1/71.6, SH=SW*852/393, SR=SW*55/393. The screen faces +Z at z=0. Its canvas measures 393 × 852 points; resolution 2 produces 786 × 1704 pixels.
construction: The body extrudes a rounded rectangle of [1-0.04,BH-0.04,R-0.02], where R=SR+(1-SW)/2. Depth is TH-0.04; bevel thickness and size are 0.02, with six bevel segments and twenty curve segments. Body translation Z=-TH+0.016. The glass is 0.958 × (BH-0.042); the screen is SW × SH. Screen UV=[x/SW+0.5,y/SH+0.5]. Left buttons are at x=-0.503, y=0.66/0.49/0.32; right buttons at x=0.503, y=0.42/-0.3.
threadLayout: Header height is 142, photo width 232, keyboard height 336. Keyboard progress defaults to zero. bottom=852-max(34,keyboard*336); fieldH=36+cubicEase(compose.photo)*138; field rectangle=[58,bottom-8-fieldH,319,fieldH]. The staged photo is 128 × 128 at field+[7,7]. Send center=[field.x+field.w-18,field.y+field.h-18], radius 14. Text is 17 pixels and wraps at 250 pixels. Messages stack upward from field.y-10, minus another 18 pixels whenever delivery progress is positive.
notification: Notification rectangle=[10,642+(1-cubicEase(n))*46,373,74], corner radius 24. Its photo thumbnail is 38 × 38 on the right. A23 shows 4:02, Thursday, October 8, contact Mom, and Attachment: 1 Image.

**Materials light**

body: Frame color #8b909c uses metalness 0.6, roughness 0.3, emissive #1b1e28. Glass #030305 uses metalness 0.2, roughness 0.16. The screen uses Basic with toneMapped=false, fog=false, polygon offset [-2,-2]. Additive sheen has opacity 0.07 and offset [-4,-4].
screenLight: The point light is at [0,0.1,0.55], distance 7, decay 2. Lock mode uses #8fb0ff and intensity 2.2*(0.55+0.45*notif). Thread mode uses #b9c8ff and intensity 2.2*(0.35+0.45*max(photoAppear,composePhoto,0)). A23 brightness is 1.

**Camera**

The host scene owns the camera. screenPoint maps a pixel to [(x/393-0.5)*SW,(0.5-y/852)*SH,lift].

**Animation**

thread: The photo uses cubicEase(appear) to move from the staged rectangle into a 232-pixel right-side message. Text bubbles scale by 0.6+0.4*e and translate Y by (1-e)*26. Delivered alpha equals delivery progress. At peak press, the send-arrow radius shrinks by 14%.
lock: The notification rises 46 pixels and scales by 0.94+0.06*e, where e=cubicEase(n). Alpha=min(1,1.6*e). Its background gradient runs #0b1a52→#060d2e→#01030c with blue, violet, and cyan radial pools.

**Clocks**

Default Physical state uses shot-local time; repeated bedside reinitializes identically. Canvas is redrawn every frame.

**Adjustable parameters**

name: Photo, contact, messages, date, and time
dependency: The same photo appears in the composer, message, notification, and final reconstruction.
name: Scale, pose, and screen resolution
dependency: Screen-coordinate targets and screen lighting scale with the parent. Resolution 3 supports closer views; A23 uses 2.

**Dependencies**

public/photo.jpg loaded by usePhone with delayRender; system UI/SF Pro font fallback; Phone3D; scene host

**Failure cases**

Do not animate state by mutable accumulated time; pass deterministic frame state.
Photo asset must be ready before screen drawing.
Do not substitute kit ease for phone cubic ease.
A positive Delivered value immediately reserves 18 pixels in the layout as well as fading the label.
Pinned-Chromium diagnostic: unchanged source produces different phone-thumbnail CanvasTexture pixels between forward/backward seeks at frames323/406. Forcing willReadFrequently=true on 2D canvases removes both differences in the focused test, but changes rasterization relative to the frozen native control; it is an experimental future-production choice, not an exact A23 acceptance pass. Explicit false retains the discrepancy. Keep rendering backend/context attributes in the production contract.

**Reuse principle**

Keep physical phone, screen layout and interaction state separate; replace content through state while preserving screen coordinate targets.

### data / sending

**Sources**

src/scenes.ts:35
src/index.tsx:25
src/production-kit.ts:5-20,46-48
src/camera-edit.ts:4-10

**Geometry hierarchy**

hierarchy: A warm studio contains a 100-unit surface, thirty bokeh sprites, thirty-five additional glows, and the Phone3D parent at [0,3,0], rotation [-0.10,-0.17,0.025], scale 3.
background: Bokeh positions use x=(rand(i+21)-0.5)*30, y=rand(i+400)*23-7, z=-18-rand(i+260)*14; size=1.8+rand(i+120)*3.8; opacity=0.2+rand(i+56)*0.25. The thirty-five additional glows use [(rand(i)-0.5)*25,rand(i+40)*16,-8-rand(i+90)*20], size=1+rand(i)*2.

**Materials light**

light: Use the warm studio. The ground is #090d1d. Bokeh colors are #dab786 except every third sprite, which is #6b96e8. Additional glows are #f5b66a every third instance, otherwise #adcaff. The phone adds its own screen point light.

**Camera**

Eye [0.2,3,11.5-0.15*local], look [0,3,0], FOV 43. The camera pushes forward throughout the 2.8-second shot.

**Animation**

screen: Thread mode shows time 7:02 and a blank contact name. The incoming message is Mom, what are you up to? The outgoing reply is Cooking. All your favorites. The final photo uses appear=step(local,1.65,2.15); compose.photo=1-appear; compose.pressed=1-abs(2*step(local,1.45,1.8)-1); delivered=step(local,2.15,2.5). There is no hand or finger geometry in the active sending scene.
handoff: The incoming picture zoom and blur settle during the first 0.23 seconds.

**Clocks**

Native interval 9.367–12.167; local=native-9.367. The builder update is empty; Physical owns the changing screen state.

**Adjustable parameters**

name: Message text and photo
dependency: Content affects the phone layout and composer-to-message route.
name: Press, send, and delivery timing
dependency: Photo appearance and composer removal should remain inverse. Delivery starts after the send movement finishes.
name: Camera start and speed
dependency: The phone parent scale of 3 defines its framing.

**Dependencies**

phone-model
studio({warm:true})
surface
bokeh
pictureHandoff

**Failure cases**

No inferred thumb tap or transmission particles: only UI press state exists.
Changing local origin changes press, sending and Delivered timing.

**Reuse principle**

Build an explicit UI state machine on a static physical phone; use camera and bokeh for depth.

### data / bedside

**Sources**

src/scenes.ts:34
src/index.tsx:19-25,32
src/kit/phone.tsx:281-346

**Geometry hierarchy**

hierarchy: A common studio contains an 11 × 0.5 × 13 desk at [0,-0.3,0], glass, lamp geometry, charger, and cable. Phone3D sits at [0,0.18,0.3], rotation [-π/2,0,0], scale 1.8.
props: The glass cylinder has radius 0.65 and height 2.1 at [-2,1.05,-2]. Its torus rim has radius 0.64 and tube radius 0.018 at [-2,2.1,-2], rotated π/2 around X. The lamp base has radius 1.2, height 0.12 at [2,0.01,-3]; pole radius 0.12, height 3 at [2,1.5,-3]; shade bottom radius 1.1, top radius 0.5, height 1.2 at [2,3.2,-3]. The charger is 0.21 × 0.10 × 0.33 at [0,0.06,2.52]. A radius-0.048 cable passes through [0,0.04,2.65],[0.1,0.04,3.3],[1.4,0.04,4.1],[3,0.04,5],[3.7,0.04,8].
wood: The 1024 × 1024 canvas starts with #242033. It draws 1,100 horizontal Bezier strokes with rgba(133,103,97,rand(i)*0.2), width 0.5+rand(i)*2, from [0,i] through [200,i+sin(i)*5] and [700,i-3] to [1024,i].

**Materials light**

materials: The desk uses the wood map with tint #8790ad and roughness 0.5. The glass is Physical #b8c8ed, opacity 0.16, roughness 0.12, metalness 0.1. The rim uses #bfcfe8, metalness 0.4, roughness 0.3. The shade uses #48547b, metalness 0.35, roughness 0.65.
light: Use the cool studio and phone screen light. The lamp is modeled geometry with no separate practical light in bedside().

**Camera**

Eye [mix(0.45,0.1,step(local,0,5)),9,6], look [0,0,0.2], FOV 48. Both shots end before the five-second camera endpoint.

**Animation**

screen: Lock mode shows time 4:02, contact Mom, date Thursday, October 8, brightness 1. Notification progress=step(local,0.35,1.1). Phone and props remain fixed, with the same thumbnail in both appearances.
twoInstances: The first interval is native 12.167–14.867, lasting 2.7 seconds. The return is 135.967–139.167, lasting 3.2 seconds. Both mount a new Physical keyed by their start time and repeat notification progress 0→1.

**Clocks**

First local=native-12.167; returning local=native-135.967. Camera and notification use these independent local clocks.

**Adjustable parameters**

name: Set geometry, wood, and glass
dependency: Keep the phone and cable in contact with the tabletop.
name: Notification onset 0.35 and duration 0.75
dependency: The screen light ramps with notification progress.
name: Return-shot state
dependency: Exact A23 replay restarts the animation; retaining an existing notification would be a deliberate variation.

**Dependencies**

phone-model
studio()
photo.jpg
Physical default state

**Failure cases**

Do not describe a warm lamp pool: bedside contains no lamp PointLight.
Do not continue local time between bedside appearances.
Cubic phone notification easing is additional to raw Physical step.

**Reuse principle**

Reuse a small prop stage with a fixed screen-facing plane and explicit per-instance UI reset.

### data / slowdown

**Sources**

src/extensions.ts:7-9
src/index.tsx:26-27,36-38
src/camera-edit.ts:4-10

**Geometry hierarchy**

hierarchy: The wide cool studio contains a bedroom. Back wall: 26 × 16 × 0.2 at [0,6,-7]. Floor: 26 × 0.2 × 24 at [0,-2,-1]. Bed: 7 × 1.1 × 7 at [1,-1,-2]. Headboard: 7.1 × 2.8 × 0.4 at [1,0.3,-5.6]. Pillow: 3 × 0.55 × 1.8 at [1,-0.25,-4]. Table: 3 × 0.1 × 2 at [-6,1,-4] with two legs. Framed art is at [-5,4,-6.8]. The lamp is at x=6, z=-4. The gold signal sprite has size 1.5.
inactive: roomScene constructs twenty-eight cyan nodes and twenty-five lines, but hides their group for slowdown. Packet #0847 exists but is hidden. No small packets are created for this type.

**Materials light**

materials: Wall #142345 uses metalness 0.08, roughness 0.9. Wood #181923 uses 0.15/0.8. Bed #1b2942 has roughness 0.96; pillow #526079 has roughness 0.9. Alongside the wide studio, the lamp adds a #ffcd91 point light with intensity 4, distance 10, decay 2 at [6,2.5,-4].

**Camera**

Eye [0.2,3,14-0.025*local], look [0,3,-2], FOV 47. The camera travels forward only 0.1375 units over 5.5 seconds.

**Animation**

head: The visible gold head uses position [mix(-6,5,step(local,0.5,5)),3.6,-1]. It holds on the left for 0.5 seconds, crosses in 4.5 seconds, then holds on the right for 0.5 seconds.
overlay: The large 200 ms timer remains throughout slowdown, at left 130, top 236, font size 92. Gold 750× appears at global 17.1, local 2.233, at right 130, top 236, font size 80. The outgoing picture zoom and blur occupy the final 0.2 seconds, starting at 20.167.

**Clocks**

Native interval 14.867–20.367; local=native-14.867.

**Adjustable parameters**

name: Head endpoints and travel window 0.5–5
dependency: Retain room framing and space for the overlays.
name: Practical light
dependency: Keep the light aligned with the lamp at x=6.

**Dependencies**

studio({wide:true})
glow
Physical default env/fog
Film timer/750×

**Failure cases**

This is one sprite translating horizontally, not a camera orbit or a packet trail.
Timer slowdown narrative does not actually retime local clock; all transforms remain direct functions.

**Reuse principle**

Freeze a recognizable room and slow a single moving signal to expose the explanation interval.

### data / data-journey

**Sources**

src/data-shots.ts:8-40,110-327
src/index.tsx:25,30-32,39
src/packet-depth.tsx:1-57

**Geometry hierarchy**

hierarchy: A warm wide studio contains the world group, photograph group, packet cloud, and a foreground group. The world contains detailed and coarse tile instances. The foreground contains the lock, gripper, lens, and address hero, with matrixAutoUpdate disabled for camera compensation.
photoSampling: photoValues draws [0, 0, photo.width, photo.height * 0.95] into a 192 × 180 canvas. Each value k is round(0.2126 * R + 0.7152 * G + 0.0722 * B). The detailed field contains 34,560 cells. Decimal and binary atlases are 4096 × 4096 with 16 × 16 cells of 256 pixels each. Decimal labels are 0–255. Binary labels use (k * 257).toString(2).padStart(16, 0), displayed as four rows of four bits.
nearField: For instance i, x = i % 192 - 95.5; z = (floor(i / 192) - 117) * 1.28. terrain = (sin(x * 0.22 + z * 0.065) + cos(z * 0.18 - x * 0.07) + 2) / 4. Height y = 0.10 + terrain * 0.48 + (k / 255) * 0.22 + rand(i + 240) * 0.32. Body geometry is [0.97, 1, 1.23], positioned at [x, (y + 0.01) / 2, z], scaled [1, y + 0.25, 1]. Rim geometry is [0.98, 0.075, 1.24] at y + 0.085. Faces are 0.91 × 1.17 at y + 0.13, rotated -π/2 around X. Atlas offset is [(k % 16) / 16, 1 - (floor(k / 16) + 1) / 16].
farField: The coarse field contains 128 × 140 = 17,920 cells. For row r, size = 1.5 + r * 0.022; z = -151 - r * 2.8; x = (column - 63.5) * size; y = 0.20 + rand(i + 355) * 0.65. The value is values[(i * 17) % values.length]. Body scale is [size, y + 0.25, 2.18]; face scale is [size, 2.18, 1]. A 900 × 0.1 × 950 far ground sits at [0, -0.22, -380]; the near floor is 160 × 0.2 × 220 at [0, -0.22, -30].
photoTiles: The photograph contains 16,384 faces of 0.248 × 0.248 and matching bodies of 0.248 × 0.248 × 0.12. Tile x = (column - 63.5) * 0.25; tile y = (63.5 - row) * 0.25. UV offset is [column / 128, 0.05 + (1 - (row + 1) / 128) * 0.95]; the face shader divides base UV by [128, 134.736842]. The intact plane is 32 × 32 at z = 0.16 and crops its vertical UV to 0.05–1.0.
lock: The kit padlock has hoop scale Y = 0.62. Its extra blue face is 0.97 × 0.76 × 0.05. The key rim radius is 0.245, back disk radius 0.222, keyhole disk radius 0.066, and stem 0.068 × 0.14. Four corner bolts have radius 0.027. The gripper and lens are separate recipes.
packetCloud: There are 1,500 rounded packet bodies of 1.8 × 0.83 × 0.15 with corner radius 0.055. Headers are 1.8 × 0.24 × 0.14, translated [0, 0.46, -0.005]. Subdivision planes are 1.8 × 0.83 at z = 0.084 and show a 6 × 3 grid from a 720 × 332 canvas. Seam faces duplicate those planes at z + 0.004. Packet origins form 30 columns and 50 rows: [(column - 14.5) * 7, 0.95, 50 - row * 5.2], then multiply by 0.5 and rotate Y by -0.13.
heroCard: The header is 5.5 × 3 with corner radius 0.33 in a group initially at [0, 2.30, -0.04]. Its address texture is 1100 × 600. The front is 5.5 × 3.45 with corner radius 0.31, extrusion depth 0.16 and bevel 0.025. It sits in a group at [0, 0.475, 0]. Address rows read From / Shanghai · Mom's phone and To / Los Angeles · Your phone. The #0847 number uses an 1100 × 460 texture on a 4.3 × 1.8 plane at z = 0.225.

**Materials light**

light: Multiply studio light intensities by 0.30, except the #294be5 rim, which uses 0.075. Add a #ffe6a2 point light with intensity 95, distance 100, decay 2 at [-3, 7, -19]. Add a #ffe8ad directional graze light with intensity 1.4 at [-12, 5, -24], aimed at [0, 0, -3]. Environment intensity is 0.30. Fog is #080e22 with density 0.004. The additional radius-400 sky computes h = exp(-((normalizedY - 0.02) * 7)^2) and mixes RGB [0.006, 0.010, 0.027] toward [0.035, 0.055, 0.135].
field: Bodies use #141a1e, metalness 0.58, roughness 0.43; rims use #302c1d, metalness 0.72, roughness 0.25. Number faces use map and emissiveMap, emissive #fff3c4 at intensity 1.1, color #c7bc94, roughness 0.84, metalness 0.10. A shader patch multiplies emitted light by instance color. Face brightness = (0.05 + sqrt(k / 255) * 0.15 + exp(-((x + 5)^2 / 100 + (z + 4)^2 / 210)) * 0.65 + rand(i + 583) * 0.11) * (0.28 + 0.72 * exp(-(z + 7)^2 / 3200)).
cloud: Packet body color changes from #f3a503 to #ffc20a while roughness changes 0.61→0.44 over native 37.4–38.0. The key point light is #ffdc55 at [-7 + sin((native - 37.4) * 0.7) * 1.4, 13, 8], rising to intensity 780, distance 55, decay 2. The rim is #ffc837 at [9, 5, 2], rising to intensity 580, distance 48, decay 2. Both body and header shaders multiply complete outgoingLight by a cloudFocus value that changes 1→0.21 over 39.45–40.2.
depth: For 37.4 ≤ native < 41.8, PacketDepth is active with aperture 0.00016 * blend(native, 37.4, 38.0), focus distance 32→18 over 39.45–40.2, and maxblur 0.012. Sky meshes render on layer 2 separately. The hero renders sharply on layer 1 after the blurred cloud and a depth clear.

**Camera**

baseline: All phases use FOV 50. Before 23.3: q = blend(native, 21.76, 22.30), s = blend(native, 22.3, 23.3); eye = [mix(0, mix(-2.3, 0, s), q), 7*q + 7*s, 92 - 83*q], look = [0, -8 + 8*q, -2*s], roll = mix(0, mix(-0.17, -0.10, s), q). From 23.3 to 27.8: q = blend(native, 25, 27.8); eye = [0, 14 + 6*q, 9 + 17*q], look = [0, 0, -2], roll = -0.10*(1-q). From 27.8 to 35: q = blend(native, 30.2, 31.6); eye = [1.5*q, 20 + 3*q, 26 - 3*q], look = [0, 2.5*q, -2*(1-q)], roll = -0.13*q. At and after 35: q = blend(native, 35, 36.8), fly = blend(native, 36.8, 37.4); eye = [1.5*(1-q), mix(23+6*q, 5, fly), 23+5*q], look = [0, 2.5+1.5*fly, -12*q], roll = -0.13*(1-q).
actualFieldCamera: Before 23.3, d = blend(native, 21.76, 22.30) * (1 - blend(native, 22.30, 23.30)). Interpolate baseline eye toward [-1.2, 2.4, 5.4] by 0.48*d, and roll toward 0.22 by d. After 23.3, wide = blend(native, 25, 27.8) * (1 - blend(native, 36.8, 37.4)); inspect = blend(native, 30.2, 31.6); pull = blend(native, 35, 36.8). Alternate eye = [1.5*inspect*(1-pull), mix(13+4*inspect, 21, pull), mix(35-6*inspect, 40, pull)]; look = [0, 2.5*inspect*(1-pull), -2-10*pull]; roll = mix(mix(-0.16, 0, blend(native, 27, 28.5)), 0.15, inspect)*(1-pull). Interpolate baseline eye/look/roll toward these alternate values by wide.
foregroundCompensation: The optical camera uses the baseline pose. Foreground.matrix = fieldCamera.matrixWorld * opticalCamera.matrixWorldInverse, with matrixAutoUpdate = false. Gripper and lens placement first uses baseline-camera pixel unprojection at depths 27 and 23, respectively. This matrix preserves their intended screen placement under the revised actual field camera.

**Animation**

photoToField: dive = blend(native, 21.76, 22.3); showData = blend(native, 22.72, 23.32). The intact plane is visible before 21.83; tile faces and bodies are visible from 21.83. The photograph group is visible before 23.34, with rotation X = -π/2 * dive and position Y = 0.4*dive. Tile wave = sin(x*0.14 + y*0.10 + native*1.5)*dive*0.12 + rand(i+950)*dive*0.055. Tile scale = (1-showData)*(1-dive*0.06). Faces sit at wave + 0.16; photo-face brightness changes 1→0.62 with dive.
field: The world is visible for 22.65 < native < 37.20. Opacity = blend(native, 22.65, 23.05) * (1 - blend(native, 36.83, 37.20)). Scale changes 1→0.5 and rotation Y changes 0→-0.13 over 25–27.4. The decimal mesh is visible before 24.63 and the binary mesh from 24.38. Cell switch cue = 24.38 + step(-z, -7, 14)*0.25. Before native 25, decimal scale is 1 before the cue and binary scale is 1 at or after it. At and after 25, complete binary poses are rewritten for direct seeking.
lockAndInspection: Lock rise is 27.1–28.4, close is 29.15–29.6, retreat is 29.6–31.6, and exit is 34.08–35.1. Let r = retreat blend, u = rise blend, e = exit blend. Lock scale = mix(2.9, 1.65, r)*(1-e), with negative X scale. Position = [mix(0.2, -5.5, r), mix(-3, mix(4.4, 7, r), u), mix(7, -4, r)]; rotation = [-0.25, -0.16, 0]. Hoop Y = 0.45 + 0.68*(1-blend(native, 29.15, 29.6)). Gripper and lens actions use their separate recipes.
packetFormation: For each packet row, cue = 36.48 + row*0.008; formed = blend(native, cue, cue+0.075); lift = blend(native, cue+0.16, cue+0.55); travel = blend(native, cue+0.23, 37.50+rand(i+80)*0.17). Source cells inside |x| < 105 and -207 < z < 52 shrink by retain = 1-blend(native, formationCue(z), formationCue(z)+0.075), where formationCue(z) = 36.48 + max(0, (50-z)/5.2)*0.008. Packet orientation slerps from Euler [-π/2, -0.13, 0] in YXZ order toward airTurn by lift. Temporary rise = sin(lift*π/2)*2.8*(1-travel). Subdivision alpha = 1-blend(native, cue+0.05, cue+0.18); seam alpha = 0.92*exp(-((native-cue-0.042)/0.022)^2).
cloudTargets: Near instances i < 96 use x = (rand(i+601)-0.5)*24, y = (rand(i+410)-0.5)*44+4, z = 14-rand(i+908)*24, size = 1.10+rand(i+207)*0.45. Middle instances 96–595 use X/Y spans 60/95, z = -12-rand(i+908)*43, size = 1+rand(i+207)*0.25. Far instances 596–1499 use spans 270/460, z = -55-rand(i+908)*175, size = 0.80+rand(i+207)*0.4. Over 37.4–38.1, middle and far X/Y spreads compress to 0.80 and 0.49. Near cards reduce scale to 0.62 and move toward projected frame edges. For near cards, depth = 28-z, hh = depth*tan(25°), hw = hh*720/1280, nx = (rand(i+601)-0.5)*2.8, ny = (rand(i+410)-0.5)*2.6. If sqrt(nx²+(ny-0.05)²) < 0.86, expand the offset by 0.86/max(0.08, radial). Target X = nx*hw; target Y = 5+ny*hh-depth*0.025. Position interpolates from origin to target by travel; Z additionally subtracts (native-38)*1.1*travel.
orientationColor: tumble = 1-blend(native, 37.02, 37.85); settled = blend(native, 37.4, 38.0). Air Euler components use rand offsets 23/70/92 minus 0.5, multiplied by [0.10, 0.18, 0.08] + settled*[0.30, 0.28, 0.27] + tumble*[4.4, 4, 4]. Instance X/Y scale = [mix(1.80, size, travel), mix(2.44, size, travel)] * formed * nearScale; Z scale stays 1. Base packet color intensity = (0.55+rand(i+660)*0.45)*(1-step(-z, 8, 150)*0.90), multiplied by mix(0.43, 1, lift)*mix(1, 0.24+rand(i+173)^2*0.76, settled).
heroReveal: The hero is visible from 39.8. Position = [0, 5.30+0.11*blend(native, 40.4, 41.7), 12]. Scale = mix(0.22, 0.91, blend(native, 39.8, 40.35))*(1+0.014*blend(native, 40.3, 41.7)); roll = 0.009*sin((native-40.3)*1.7)*focus. Header reveal = blend(native, 40.00, 40.23), controlling Y scale 0→1 and Y position 0.80→2.40. From opacity changes over 40.17–40.34; To opacity over 40.40–40.54; number visibility starts at 41.43. Front Y scale changes 2.5/3.45→1, front Y position 0→0.475, and body-map repeat Y 0.735→1. After 39.5, cloud instances with |x|<4, |y-5|<4, and z>-4 shift 22 units backward.

**Clocks**

Every action and camera phase uses global native time. The separate binary, encryption, and packets shots reconstruct this builder at 20.367, 29, and 36.3, then immediately evaluate the appropriate global state. The local argument only passes through camera helpers.

**Adjustable parameters**

name: Photo and cell grids
dependency: Changing the 192 × 180 value grid or 128 × 128 photo grid requires corresponding crop, UV divisor, tile-size, and scene-scale changes.
name: Conversion timing
dependency: Coordinate photo retirement, field opacity, and decimal-to-binary sweep.
name: Packet count and formation grid
dependency: Keep the count, 30 × 50 origin layout, and count overlay consistent.
name: Field camera
dependency: Preserve the baseline optical camera and foreground compensation when changing field framing.
name: Depth focus and cloud spacing
dependency: The near-card exclusion ring, lighting multiplier, and Z exclusion protect hero readability.

**Dependencies**

Warm wide studio
public/photo.jpg
Deterministic rand helper
data-gripper
inspection-lens
PacketDepth
Film PacketCount and grain controls
FilmBody and FilmCondensed fonts

**Failure cases**

Using shot-local time for this builder hides or mistimes most actions. Pass global native time.
Changing mesh dimensions without matching atlas UV divisors breaks tile crops.
Foreground compensation and lens optics must use the matching actual camera.
PacketDepth needs hero, sky, and light layers plus a depth clear. A single blurred pass changes the hero lettering.
The 1,500 packets are different from the 34,560 source cells.
Each fresh shot must reconstruct all relevant instance matrices from native time.

**Reuse principle**

Keep photo values, physical cells, inspected samples, and packet identities in separate editable layers. Coordinate them with one native clock and explicit camera-space compensation.

### data / data-gripper

**Sources**

src/data-shots.ts:44-88,281-294

**Geometry hierarchy**

hierarchy: The gripper contains a panel at [0, 0, 0.18] with a black 5.5 × 5.65 × 0.26 backing and a 5.23 × 5.25 face plane at z = 0.15. A carrier at z = -0.28 supports the two articulated arms, circular head, lower actuator, top clamp, links, and hose.
arms: Each side has pivots [side*0.77, 3.35, 0.25], [side*4.0, 1.30, 0.35], and [side*2.80, -0.12, 0.44]. Links have width/depth 0.64/0.43 and 0.56/0.45. Their length is distance(a,b), with a quaternion rotating +Y toward b-a. Front recess width is 0.40 times link width and length 0.70 times link length; the steel rail is 0.045 wide. Pivots have black radius 0.28, depth 0.53, and hex bolt radius 0.19. Jaws are 0.4 × 0.75 × 0.92 at [side*2.84, -0.23, 0.46]; four steel teeth sit at x = side*2.83, y = -0.50 + k*0.15, z = 0.94.
headAndSupport: The head is at [0, 3.45, -0.12] with a radius-1.18, depth-0.9 cylinder facing +Z. Stacked radii are 1.1, 0.93, 0.68, 0.53; depths 0.15, 0.32, 0.16, 0.20; Z positions 0.50, 0.68, 0.90, 1.01. Two torus rims use radii 1.05 and 0.66. Eight radius-0.075 bolts sit at radius 0.99. The main support runs from [0, 3.5, -0.7] to [9.8, 8.2, -1.2], width 1.08, depth 0.72. A radius-0.07 steel rod runs above it. A radius-0.09 black hose passes through [0,4,-0.4], [1.3,6,-0.9], [4.6,7.3,-1.3], [8.8,7.6,-1.4]. The lower actuator box is 2.3 × 2.8 × 0.48 at [0,-3.42,-0.16].
sample: The 1000 × 1000 canvas has 5 × 5 cells of 200 pixels. Original values: [130,177,161,39,16,138,103,206,87,214,165,182,75,67,187,21,179,173,200,3,97,199,153,134,127]. Encrypted values: [36,94,46,9,70,23,250,61,180,164,1,2,1,24,162,91,140,9,0,46,207,14,37,129,162]. These are fixed illustrative arrays.

**Materials light**

materials: Steel #aebcc9 uses metalness 0.96, roughness 0.16; blue #182844 uses 0.88/0.25; black #05090f uses 0.82/0.26. The sample face is Basic with toneMapped false. Cells use a #64501e→#242414 gradient, gold borders, and #fff2a0 Arial numerals at 96 pixels. Lighting comes from the data-journey set.

**Camera**

Gripper positions are authored as pixels in the baseline camera. atPixel(x,y,27) unprojects a ray, normalizes it, and multiplies its length by 27. The foreground matrix then compensates for the actual field camera.

**Animation**

pose: grasp = blend(native,30.75,31.9); settle = blend(native,31.95,32.35); exit = blend(native,34.08,35.1). Pixel X = mix(1020,mix(404,340,settle),grasp)+850*exit; pixel Y = mix(770,mix(650,526,settle),grasp)-260*exit. Rotation = [mix(-0.53,-0.73,settle), -0.10, mix(-0.34,-0.14,settle)]; scale = mix(1.23,1.17,settle). Carrier Y changes 0→-1.10 and Z changes 0→-0.65. Panel rotation X = -π/2*(1-blend(native,31.62,32.08)). Visibility is 30.75 ≤ native < 35.25.
encryption: Before 33.28, draw phase is zero. At or after 33.82, phase is six. Between them, phase = 1 + floor((native-33.28)/0.108). Intermediate values are floor(rand(i+phase*41)*256). Phase six uses the fixed encrypted array. A cached lastPhase avoids unnecessary texture redraws but redraws whenever a seek changes phase.

**Clocks**

Global native time drives the gripper and sample. The 25 sample values are fixed arrays, not read from photoValues.

**Adjustable parameters**

name: Original and encrypted values
dependency: The lens and sample must keep sharing the same texture.
name: Links, pivots, and jaws
dependency: Changing endpoints also requires matching bolt, jaw, and hose placement.
name: Pixel poses and depth
dependency: Preserve the baseline optical camera and foreground compensation.

**Dependencies**

data-journey foreground group
canvasTex
Arial and FilmBody fonts
inspection-lens

**Failure cases**

Do not describe the fixed illustrative matrix as actual extracted image bytes.
Do not replace seeded intermediate phases with unseeded randomness.
Panel rotation and carrier motion are independent transforms.

**Reuse principle**

Stage a mechanical carrier separately from its data face. Use discrete texture phases for the transformation and share that texture with the inspection optics.

### data / inspection-lens

**Sources**

src/data-shots.ts:91-108,291-294

**Geometry hierarchy**

hierarchy: Four concentric torus rings use radii 1.68, 1.67, 1.55, 1.49; tube radii 0.11, 0.044, 0.045, 0.015; Z offsets 0, 0.10, 0.12, 0.14. Eight radius-0.044 hex fasteners sit at radius 1.68. The optical circle has radius 1.50 at z = 0.065; the transparent glint circle has the same radius at z = 0.15. Handle rods run [-1.17,-1.17,0]→[-3.6,-3.6,0] with radius 0.15 and [-1.92,-1.92,0.015]→[-3.6,-3.6,0.015] with radius 0.20.
optics: Build a plane from the sample face world position and its transformed local +Z normal. Cast rays from the actual camera eye through every world-space lens vertex into that plane, then convert hits into sample-face local coordinates. Let center be the mapped optical-center point. UV = 0.5 + (center + (hit-center)/1.85) / [5.23,5.25]. This magnifies the shared sample texture by 1.85. UV samples outside 0–1 are replaced by RGB [0.012,0.018,0.021].

**Materials light**

materials: Steel #b9c9d6 uses metalness 0.96, roughness 0.13; dark #09131f uses 0.86/0.24; the fine gold ring #d1bc7b uses 0.83/0.20. The optical Basic material shares the sample texture and disables tone mapping. A transparent 512 × 512 glint texture adds a diagonal gradient and upper-left arc. Lighting comes from data-journey.

**Camera**

The lens follows the baseline camera quaternion and uses pixel unprojection at depth 23. Foreground compensation maps it to the actual field camera. Its optics are recomputed using the actual camera eye after both world matrices update.

**Animation**

pose: inspect = blend(native,32.02,32.26); scan = blend(native,32.40,33.8); exit = blend(native,34.02,34.24). Pixel X = mix(-270,mix(310,292,scan),inspect)-950*exit. Pixel Y = mix(448,562,scan)-100*exit. Scale changes 1.35→1.48 with scan. Visibility is 32.02 ≤ native < 34.24.

**Clocks**

Global native time drives the pose. updateOptics runs each visible frame.

**Adjustable parameters**

name: Magnification 1.85
dependency: Change the UV formula while preserving the sample texture identity.
name: Scan path and depth 23
dependency: Rays must intersect the sample plane and use matching foreground compensation.

**Dependencies**

data-gripper.userData.face and tx
Actual field camera
Foreground compensation matrix

**Failure cases**

An unrelated digit texture would break the optical match.
Update world matrices before ray intersections.
Changing sample dimensions requires changing the 5.23 and 5.25 UV denominators.

**Reuse principle**

A magnifier should reveal the surface beneath it through geometry-driven ray mapping, using the same texture as the original surface.

### data / packet-number

**Sources**

src/extensions.ts:8-9
src/numbered-packets.ts:4-44
src/packet-depth.tsx:1-57

**Geometry hierarchy**

hierarchy: The wide studio contains the bedroom stage, hero #0847 card and halo, twelve fixed room cards, and a separate cloud. The cloud contains 520 atlas planes, nineteen larger near cards, and a 150 × 200 dark backdrop at [0,3,-80].
card: The rounded shape is 2 × 1.16 with radius 0.10. Its rim extrudes 0.10 with a 0.012 bevel, two bevel segments, and position z = -0.12. The face is at z = 0.04. The number plane is 1.68 × 0.62 at [0,-0.14,0.06], using an 1100 × 380 texture with FilmBody weight 900, size 360. The face gradient is dark #1b1b29→#201b24 above 24%, then orange #ffbe0b→#f59d03 below it. Shader gold mask = 1-step(0.76,vMapUv.y); face RGB mixes toward [1,0.83,0.20] by pulse*0.80*mask, then multiplies by brightness.
roomCards: Each tuple is pixel X, pixel Y, width, ID, roll: [90,166,66,1303,-0.04], [586,380,73,1131,0.025], [106,636,150,0509,-0.12], [221,654,92,1126,0.08], [697,725,145,0489,-0.10], [31,861,104,0028,0.03], [568,842,128,0346,-0.06], [219,822,76,1143,0.13], [495,771,64,1008,0.03], [253,751,62,1442,-0.1], [83,1008,100,0094,0.06], [606,1025,84,0692,-0.03]. Their Z is -2-rand(i)*4 and brightness is 0.55.
cloud: A 2048 × 2048 atlas contains 128 IDs in 8 columns and 16 rows. Each cell is 256 × 128; ID = 1+floor(rand(i+730)*1499). The 520 planes are 2 × 1.16 with UV scale [0.125,0.0625] plus per-cell offset. The nineteen near-card tuples are source nearSpec in src/numbered-packets.ts:31. They include #0213 at pixel [39,426], width 153; #0847 remains the independent hero.
nearCards: Each tuple is pixel X, pixel Y, width, ID, roll: [143,15,130,0271,0.03], [536,45,132,0712,0.12], [193,130,95,1092,0.06], [27,275,130,0691,-0.02], [339,274,146,0725,0.05], [577,295,140,0533,0.09], [263,341,113,0198,0.08], [474,339,104,0556,0.06], [39,426,153,0213,0.1], [225,420,150,0344,0.10], [539,425,118,0880,-0.12], [697,413,127,1166,-0.04], [129,670,133,0637,0.09], [488,674,105,0370,0.08], [43,792,150,0002,-0.1], [367,802,152,0892,-0.11], [587,789,135,1237,0.11], [450,742,125,0145,-0.09], [97,1135,100,1097,0.03]. Their Z is -rand(i+61)*9. Brightness is 0.19 for #0533, 0.34 for #1237, 0.08 for #1097, otherwise 0.65+rand(i)*0.32.

**Materials light**

light: Use the wide studio and the room practical lamp. Face and number materials are Basic with toneMapped false. A gold additive halo of size 4.2 sits behind the hero at z = -0.15, opacity 0.13+0.34*pulse. The cloud backdrop uses Basic #10162e. At 44.7, depth focus activates with distance 14, aperture 0.000045, maxblur 0.007. The hero renders sharply on layer 1 and the studio sky separately on layer 2.

**Camera**

view: Fixed eye [0.2,3,14], look [0,3,-2], FOV 47.
pixelPlacement: place unprojects [x/720*2-1,1-y/1280*2,0.5], normalizes the ray from the camera eye, and computes distance = (z-eye.z)/ray.z. Position = eye + distance*ray. Scale = width/720*(14-z)*2*tan(47*π/360)*(720/1280)/2. The formula assumes a two-unit card width.

**Animation**

focus: t = 41.8+local; focus = blend(t,42.03,42.40); pulse = blend(t,42.4,42.94). Before 44.7, the room-mode hero moves from pixel [102,352] to [374,275], width 100→230, roll 0.065→0. Room-card roll is its stored tilt + sin(local*0.23+i)*0.009.
cloudSwitch: At t ≥ 44.7, hide the room stage and room cards, show the cloud, and activate depth focus. The hero instantly moves to [360,548], width 176, roll 0. For each deep card, z = -10-rand(i+930)*60; x = (rand(i+580)-0.5)*850+360; baseY = (rand(i+681)-0.5)*1600+640; y = baseY+(t-44.7)*8. Projected width = mix(63,14,(-z-10)/60). Yaw = (rand(i)-0.5)*0.22; roll = (rand(i+31)-0.5)*0.24. Brightness = (0.16+rand(i+887)*0.48)*mix(1,0.20,(-z-10)/60)*mix(1,0.14,step(baseY,850,1160)).

**Clocks**

The active interval is native 41.8–45.166666666666664. The updater derives native time as 41.8+local. It uses room mode, not cstack mode.

**Adjustable parameters**

name: Hero and context IDs
dependency: Update the number textures and atlas while retaining the desired positions.
name: Pixel placement
dependency: The projection assumes FOV 47, aspect 720/1280, and two-unit card width.
name: Cloud switch at 44.7
dependency: Coordinate the background switch, hero reframe, and depth activation.

**Dependencies**

Bedroom room() stage
Wide studio
PacketDepth
FilmBody font
Deterministic rand

**Failure cases**

Do not use cstack-mode positions or its To Los Angeles context label; A23 uses room mode.
The change at 44.7 is an instantaneous state switch, not a dissolve.
The clock uniform is assigned but unused by the current face shader; it does not create flicker.

**Reuse principle**

Emphasize one identity through explicit screen positions, then switch its surrounding context while keeping the selected card readable.

**Replay adapter**

parameters: heroLabel: four digits, default 0847
focusDelayFrames: integer -15..15, default 0
implementation: src/numbered-packets.ts configure() via production-script/scene-parameters.ts
timing: focus 42.03–42.40s and color pulse 42.40–42.94s shift together by frames/30; cloud switch stays 44.7s
failureCases: Do not shift the entire shot to change one cue; keep the cloud handoff and neighboring native clocks unchanged.

### data / packet-board

**Sources**

src/extensions.ts:11-16
src/index.tsx:25,45

**Geometry hierarchy**

hierarchy: The wide cool studio contains 1,500 packet bodies and 1,500 numbered top faces on a 30 × 50 board measuring 16 × 32. Three missing identities have black holes and red tags. Static cyan network paths sit below the board. Physical adds a separate Earth and route only for retransmit.
slots: N=1500, C=30, R=50, W=16, H=32. Body dimensions are [W/C-0.035,0.1,H/R-0.035]; top dimensions are [W/C-0.037,H/R-0.037]. Slot i = [(i%C+0.5)*W/C-W/2,0.08,(floor(i/C)+0.5)*H/R-H/2]. Top faces use body Y+0.053 and rotation X=-π/2. The board base is 16.4 × 0.18 × 32.4 at [0,-0.12,0].
labels: The 4096 × 4096 gold atlas uses background #d9a425, dark #35240d text, FilmBody weight 900 at 43 pixels, and IDs #0001–#1500. UV = baseUV*[1/30,1/50]+[column/30,1-(row+1)/50]. Missing zero-based indices [212,846,1438] correspond to #0213, #0847, #1439. Black gap boxes are 0.02 high. Tag groups sit at y=3.2; their red labels are 1.5 × 0.45. Radius-0.012 red rods extend from y=0.02 to 1.75.
background: The network group is at [0,-1,-15]. Its 25 paths use x=(rand(i)-0.5)*70 and z=(rand(i+11)-0.5)*60, joining [x,0,z]→[x+12,0,z-10]→[x+20,0,z+5], opacity 0.16, with size-0.22 cyan glows. In retransmit, the Earth group is at [0,7,-9], scale 3.1, rotation [0.5,-2.1,-0.2]. Earth day/night strengths are 0.38/0.92. Route uses webCable(0,1.01), width 0.002, color #88dfff, glow 1.

**Materials light**

light: Use the wide cool studio, environment intensity 0.25, and #040b25 fog at density 0.004. Bodies are #ddac29, metalness 0.35, roughness 0.44, emissive intensity 0.10. Top faces use Basic maps with toneMapped false. The board base is #1e3756 with metalness 0.6, roughness 0.35. Red tag labels use Basic materials.

**Camera**

arrival: For local ≤ 2.6: eye [0,17,23], look [0,0,-1], FOV 48. For local > 2.6: q=step(local,2.6,5); eye=[mix(0,-4,q),mix(22,4.5,q),mix(22,10,q)], look=[0,0,1]. This produces a code discontinuity immediately after 2.6, jumping to eye [0,22,22] and look Z=1 before the interpolation.
sort: q=ease(step(local,0,2)); eye=[-4+4*q,4.5+18.5*q,10+11*q], look=[0,0,-1], FOV 48.
retransmit: Fixed eye [0,17,23], look [0,0,-1], FOV 48.

**Animation**

permutation: Shuffled slot = slots[(i*997+271)%1500]. For arrival, q=0. For sort, q=ease(step(local,0.8+rand(i)*0.7,2.35+rand(i)*0.35)). For retransmit, q=1. Position interpolates shuffled→target by q, with added Y=sin(q*π)*(0.4+rand(i)*1.5).
arrival: arrive=ease(step(local,rand(i)*0.5,1.2+rand(i)*1.4)); added Y=(1-arrive)*(5+rand(i+5)*15). Missing identities stay hidden; the other 1,497 packets land in shuffled slots by local 2.6. Tags stay hidden. Counter=round(1497*step(local,0.3,1.8)). Before 2.6, the metric is centered at 27% with font size 87; afterward it is left-aligned at x=42, top 14%, size 52.
sort: The 1,497 packets arch from shuffled slots to ordered slots. Starts range 0.8–1.5; endpoints range 2.35–2.7. Tags are visible only when local > 4 and use X rotation -0.8. Missing holes persist. The metric stays 1,497 / 1,500.
retransmit: For missing-array index m=0,1,2, the packet is visible only if local > (m+1)*0.9. Let r=ease(step(local,(m+1)*0.9,(m+1)*0.9+0.6)); position=target+[0,9*(1-r),0]. The matching red tag is visible while local < (m+1)*0.9. Counter=1497+min(3,floor(local/0.9)). Globe-route progress=step(local,0,2.8). The final fall window is local 2.7–3.3 but the shot cuts at local 3.067.

**Clocks**

Each board shot starts its own local clock: arrival 116.833–121.9, sort 121.9–127.9, retransmit 127.9–130.967. All positions are recomputed from the permutation and target slots every frame.

**Adjustable parameters**

name: N, C, R, W, H
dependency: Keep atlas UVs, labels, slots, permutation, missing IDs, and counter consistent.
name: Missing indices
dependency: Tags display index+1. Retransmit order and count increments follow the missing-array order.
name: Arrival and sort timing
dependency: Allow enough duration for complete settling if a variation requires every packet to land.
name: Camera path
dependency: Preserve the local-2.6 arrival discontinuity for exact replay; changing it is a deliberate variation.

**Dependencies**

Wide studio
Canvas atlas and instance UV shader
Earth, Route, and webCable for retransmit
Film Metric
Arrival pictureHandoff

**Failure cases**

Arrival packets occupy permuted slots rather than numerical order.
The counter reaches 1,497 at local 1.8 before all physical falls end.
At exact retransmit thresholds the tag hides and metric increments, but tile visibility requires strictly greater time.
The last repaired packet remains above the board at the A23 cut.
Use extensions.packetBoard; the similarly named local function in scenes.ts is inactive.

**Reuse principle**

Give every identity a stable target slot. Share one permutation across arrival and sort, then repair explicitly listed missing identities.

### data / unlock

**Sources**

src/scenes.ts:28-29
src/kit/objects.ts:26
src/index.tsx:32,49
src/camera-edit.ts:5-10

**Geometry hierarchy**

hierarchy: A cool studio contains a 250-unit ground, a 100 × 140 horizontal binary-pattern plane at y=0.03, and a padlock at [0,3.3,-1], scale 1.3. Legacy 48 × 48 photo tiles, scissors, and a lens are constructed but hidden for unlock.
pattern: A 2048 × 2048 canvas contains 32 × 32 blocks of 64 pixels. Each block has two four-bit rows: ((x*41+y*79)%16) and ((x*17+y*31)%16), converted to binary. The texture repeats [2,3]. This is a procedural pattern, not the earlier photo-derived dataJourney field.
lock: The kit body is 1.3 × 1.05 × 0.5 in blue #0388c9, with a 0.68 × 0.7 × 0.08 dark #032949 inset, silver cylinder radius 0.15, and key rod radius 0.055. The hoop group starts at y=0.45. Its radius-0.12 tube follows [-0.45,0,0],[-0.45,0.95,0],[0,1.23,0],[0.45,0.95,0],[0.45,-0.7,0].

**Materials light**

light: Use the common cool studio, environment intensity 0.25, and fog density 0.004. The pattern material has map and emissiveMap, tint #e7cb86, emissive #d1a96b at intensity 0.35, roughness 0.55. Lock blue uses metalness 0.78, roughness 0.18; silver uses 0.96/0.19.

**Camera**

Fixed eye [0,11,17], look [0,1,0], FOV 44.

**Animation**

lock: The lock remains visible. Rotation Y=-0.3+local*0.055. Hoop Y=0.45+step(local,1.2,2)*0.7, opening linearly. At global 133.7, local 2.733, the DOM photo assembly begins covering the lock. The outgoing picture handoff begins at native 134.767.
visibility: Photo tile bodies and faces require kind === binary and local < 3.4, so they remain hidden for unlock. The lens and scissors require encryption, so they are also hidden. The visible photo reconstruction is the DOM overlay, not a 3D tile animation.

**Clocks**

Unlock runs at native 130.967–134.967, local=native-130.967. The following photo shot constructs a new unlock underlay with local time 0–1.

**Adjustable parameters**

name: Lock pose and shackle window
dependency: Opening finishes at local 2 before the global photo assembly starts at local 2.733.
name: Binary pattern
dependency: This pattern is independent of the earlier photo-derived field.
name: Photo overlay timing
dependency: Keep the overlay on global time so it survives the shot change.

**Dependencies**

Kit padlock
Studio
photo.jpg for the constructed but hidden legacy tiles
photo-assembly

**Failure cases**

The earlier dataJourney lock has different geometry and lighting; do not substitute it for unlock.
The lock rotation and hoop reset at the photo shot because the Physical key changes.
The DOM overlay performs the photo assembly; the old 2,304 tile mesh does not.

**Reuse principle**

Separate the opening-lock metaphor from the final image assembly and explicitly record which clock controls each layer.

### data / photo-assembly

**Sources**

src/index.tsx:32,49
src/camera-edit.ts:4-10
src/scenes.ts:28-29

**Geometry hierarchy**

hierarchy: A DOM container sits at left 30, top 190, width 660, height 660, perspective 1000, above the Finish picture. Its 225 absolute-positioned tiles form a 15 × 15 grid. Each is 44.3 × 44.3 pixels at left=44*x, top=44*y, with photo.jpg as a 660 × 660 background and backgroundPosition=[-44*x,-44*y]. The photo-shot underlay is a freshly constructed unlock scene.
parameters: For i=0…224, x=i%15 and y=floor(i/15). q=ease(step(global,133.7+x*0.016,134.8+x*0.01)). Opacity=q. CSS transform is translate3d((1-q)*(x-7)*35px,(1-q)*(y-7)*35px,(1-q)*-600px) rotateY((1-q)*160deg).

**Materials light**

light: The photo is an unlit CSS background, outside Finish and ThreeCanvas lighting or blur. The underlay retains the cool unlock studio.

**Camera**

The DOM image uses a fixed screen layout with perspective 1000 pixels. The 3D underlay uses eye [0,11,17], look [0,1,0], FOV 44.

**Animation**

timing: Visibility is global 133.7 ≤ t < 135.967. Column zero starts at 133.7 and ends at 134.8; column fourteen starts at 133.924 and ends at 134.94. All 225 tiles are fully assembled by 134.94 and hold until 135.967. The dedicated photo shot starts later, at 134.967. Its incoming handoff affects the underlay but leaves the DOM image sharp.
underlay: At native 134.967, Physical mounts a new unlock builder with local time zero. The hoop stays at y=0.45 throughout this one-second photo shot because opening would begin at local 1.2. Lock rotation Y resets to -0.3. The photo mostly covers this underlay.

**Clocks**

The DOM assembly uses global native time. The underlay resets local time at 134.967. Assembly overlaps the final 1.267 seconds of unlock and the entire one-second photo shot.

**Adjustable parameters**

name: Rows, columns, 44-pixel step, 0.3-pixel overlap
dependency: Match the 660-pixel container, background size, background offsets, and column timing.
name: Photo asset
dependency: Use the same asset as the phones and dataJourney.
name: Start, end, and column stagger
dependency: Retain a global clock across the shot boundary.

**Dependencies**

public/photo.jpg
Film DOM overlay
Unlock underlay
Photo pictureHandoff

**Failure cases**

Do not begin assembly at the photo shot boundary; it starts at 133.7.
Putting the tiles inside ThreeCanvas or Finish changes lighting, grain, and blur.
The stagger is by column, not by row.

**Reuse principle**

Use a column-staggered CSS mosaic with perspective for the final assembly, independently of the 3D scene switch.

### globe-network / active-dispatch-and-clocks

**Source**

src/index.tsx:21 SHOTS
src/index.tsx:25 Physical
src/index.tsx:32 Film
src/scenes.ts:39 buildScene
src/production-scenes.ts:13 re-export

**Geometry hierarchy**

dispatch: earth-*: GlobeShot from src/globe-shot.tsx
network-intro: roomScene(kind) from src/extensions.ts
network/router/reroute: routedNetwork(kind) from src/network-shots.ts
satellite: satellite() defined locally in src/scenes.ts
final-network: infrastructureWorld() from src/infrastructure.ts
canvas: 720x1280, dpr=1.5, shadows=percentage, antialias=true; three near=.01 far=1500. Physical keyed by shot origin remounts all constructed scene objects at each shot boundary; buildScene runs in useMemo([type,ship]).

**Materials light**

renderer: ACESFilmicToneMapping, exposure=.85, clearColor=#040a20 alpha=1
physical: PMREM RoomEnvironment blur=.04; default environmentIntensity=.25. Default fog#040b25,density.009 for network/final-network and.004 otherwise, overridden by assigned routedNetwork (.004,#060d24) and infrastructureWorld (.001,#040b25); globe clears fog.

**Camera**

Physical Camera clears view offset, resets up=(0,1,0), position/lookAt/roll/fov from builder, near=.01 far=1500, then applies optional pixel view offset; globe manages camera directly.

**Animation**

Film selects first SHOTS entry with start<=nativeTime<end, else last shot; original end duration 4865/30. built.update(localTime,nativeTime) and built.camera(localTime,nativeTime) must both get nativeTime.

**Clocks**

nativeFrame = sample offset + composition frame; nativeTime = nativeFrame/30; localTime = nativeTime - exact source SHOTS origin. step(t,a,b)=clamp((t-a)/(b-a),0,1); ease(p)=p*p*(3-2*p); mix(a,b,p)=a+(b-a)*p. Do not round shot origins to frame boundaries.

**Adjustable parameters**

Composition width/height/dpr
shot start/end and type
local/native/frame adapters

**Dependencies**

Fonts and media loading waits in original source
routedNetwork global>=69 onward branch
global fr drives star twinkle, CableWeb pulses, film grain

**Failure cases**

Inline Globe() at index.tsx:24 is unused by Film; its camera and Earth strengths differ.
network() at scenes.ts:31 is shadowed for assigned network shots.
networkHorizon() and extensions.finalNetwork() are shadowed by infrastructureWorld().
production-scenes.explanation() is not network-intro.
Calling update(t) with default global=59+t on second network shot selects first-journey logic.
Rounding 58.967 to 59 or 6.833 to a frame-aligned origin changes action phases.

**Reuse principle**

Treat a shot as a scene-builder identity plus exact clock adapter, rather than copying the first function with a matching name.

### globe-network / studio-lighting-and-object-primitives

**Source**

src/production-kit.ts:6 studio
src/production-kit.ts:36 practical
src/kit/objects.ts:7 math helpers
src/kit/objects.ts:10 mat
src/kit/objects.ts:11 box
src/kit/objects.ts:19 label
src/kit/objects.ts:22 glow
src/kit/objects.ts:25 packet

**Geometry hierarchy**

studio: root Group
HemisphereLight
key DirectionalLight and target
rim DirectionalLight
fill DirectionalLight
back-facing radius650 sphere sky shader (32x16)
380 deterministic dust points over range140
box: RoundedBoxGeometry(w,h,d,2,min(w,h,d)*round), round default=.04; cast/receiveShadow=true.
tube: CatmullRomCurve3 through supplied points, TubeGeometry(n,r,8,false); tube casts shadow.
label: 1200 px wide CanvasTexture; height=round(1200*h/w); FilmCondensed bold font at .84*H, draw center x=W/2,y=.55H,maxWidth=.94W. PlaneGeometry(w,h), double-sided transparent MeshBasicMaterial, toneMapped=false.
packet: Group -> gold rounded body [w,w*(header?.8:.43),.11]; for header, navy [w,.29w,.13] panel centered y=.26w,z=.02, white To Los Angeles label [ .9w,.13w ] at y=.26w,z=.10; brown #0847 label [.90w,.33w] at y=header?-.09w:0,z=.075.

**Materials light**

studio: Hemisphere sky=#8eacee ground=#080d21 intensity1.4; key=#8dbaff intensity3 at[-9,17,13], casts 1024^2 shadow, camera left/right=±48 wide or±20 normal, top32 bottom-20 near.5 far130, bias=-.0003 normalBias=.028; rim=#294be5 intensity2.1 at[15,6,-28]; fill=#365384 intensity.65 at[0,5,20].
sky: a=exp(-((normalize(p).y-.025)*9)^2); b=exp(-((normalize(p).y-.04)*30)^2); color=mix([.008,.015,.043],[.06,.11,.31],a)+[.015,.025,.045]*b. No texture.
mat: MeshStandardMaterial({color:c,metalness:m default .55,roughness:r default .4,emissive:c,emissiveIntensity:e default0}).
glow: 128x128 radial white canvas stops 0=#fff,.08=#fff9,.3=#fff2,1=#fff0; additive sprite, depthWrite=false, toneMapped=false, retains default depthTest. Scale is set explicitly.
packet: gold=#ffbf22 metalness .24 roughness .49 emissive .06; navy header=#112356 metalness .5 roughness .3; number=#402705.
practical: Group -> PointLight(color,intensity,distance,decay2) then glow sprite(size,color); infrastructure updates children[0].intensity.

**Camera**

Camera belongs to builder, not studio.

**Animation**

rand(i)=fract(sin(i*127.1+31.7)*43758.5453); procedural placements should be regenerated from same indices.

**Clocks**

No accumulating transforms or wall-clock animation; stock studio is static.

**Adjustable parameters**

studio wide/warm flags
light colors/intensities
shadow bounds
object physical dimensions
packet ID/header/address
label size/aspect/font

**Dependencies**

FilmCondensed must be loaded before construction to bake correct label texture.
Color hex, roughness, and emissive values interact with global ACES/exposure and Finish.

**Failure cases**

Replacing label canvas with DOM changes depth/occlusion and screen sizing.
Changing scale after construction can change apparent detail and lamp attenuation.
practical children order matters to final-world intensity update.

**Reuse principle**

Build scenes from stable semantic groups, use restrained emissive geometry plus a spatial light, and keep typography dimensions explicit.

### globe-network / globe-surface-stars-and-geographic-map

**Source**

src/globe-shot.tsx:7 GlobeShot
src/kit/globe.tsx:88 ll
src/kit/globe.tsx:93 arc
src/kit/globe.tsx:107 useEarth
src/kit/globe.tsx:142 SURFACE_FRAG
src/kit/globe.tsx:187 AIR_FRAG
src/kit/globe.tsx:202 Earth
src/kit/globe.tsx:276 Stars

**Geometry hierarchy**

hierarchy: Stars group renderOrder=-10: back-facing icosahedron haze plus points
Earth group: radius1 SphereGeometry(128,96) surface and radius1.2 SphereGeometry(64,48) atmospheric shell
either CableWeb OR route background+route highlight+tags
coordinates: phi=(90-lat)*pi/180, theta=(lon+180)*pi/180; ll(lat,lon,r)=[-r*sin(phi)*cos(theta),r*cos(phi),r*sin(phi)*sin(theta)]; over(loc,dist)=ll(loc,dist).
textures: public/earth_day.jpg and public/earth_night.jpg loaded using TextureLoader, colorSpace=SRGBColorSpace anisotropy=8. Source shader assumes4096x2048 equirectangular.
stars: count4500 -> round(count*1.8)=8100 deterministic stars, last3600 form milky band around normalized axis[-.365,-.756,-.543]. Haze is procedural 3-noise octaves at4,9,21 with transformed lattice.

**Materials light**

earth_active: day=.32, night=1.06, air=1, radius1, sun omitted => uSunOn=0. No physical lights required; shader uses camera-relative moon direction normalize([-.5,.6,.62]*mat3(viewMatrix)).
surface: day/night texels gamma-adjusted power .4545; land=smoothstep(-.03,.05,max(1.35*d.r,.9*d.g)-d.b); relief=smoothstep(.05,.95,dot(d,[.35,.45,.2])); shelf=smoothstep(.1,.52,d.b). Ocean base interpolates [.02,.062,.17] to [.036,.125,.29], land [.08,.125,.235] to [.18,.25,.41]. Light factor .4+.92*smoothstep(-.65,.95,dot(N,moon)); water spec exponent18, coefficient .36*(1-land). Warm city light strength uses L=clamp((n.r-.62*n.b-.03)/.4,0,1), power1.15 plus power5*.3 and derivatives-dependent boost (.95+.4*small)*night. Limb uses (1-max(dot(N,V),0))^4.5.
atmosphere: BackSide custom additive shell preserving destination alpha, depthWrite=false. Height h=max(length(closest ray point)-radius,0)/radius; glow [ .42,.7,1 ]*exp(-h/.009)*.85 + [.08,.26,1]*exp(-h/.04)*.2, modulated by moon-facing side and shell edge taper.
stars: Custom additive preserving alpha. Star size based on m=random(starmi), big=m^7; ordinary size1.5+1.5*m^2+3.6*big, band1.4+1.2*m; scales by dpr*height/1920. 10% twinkle; vCol=tint*opacity*(1-.45*(.5+.5*sin(fr*speed+phase))). No scene fog.

**Camera**

Earth remains at origin; each GlobeShot sets camera lat/lon/distance then lookAt origin, fixed roll and viewOffset; camera reset/derived right/up precede label position update.

**Animation**

Earth geometry stationary; apparent geography changes with camera longitude. Star directions use projection*rotation(view)*rotation(model) and are sent to far plane at c.w*.99999, so no camera-translation parallax. Twinkle is global frame phase.

**Clocks**

nativeFrame = sample offset + composition frame; nativeTime = nativeFrame/30; localTime = nativeTime - exact source SHOTS origin. step(t,a,b)=clamp((t-a)/(b-a),0,1); ease(p)=p*p*(3-2*p); mix(a,b,p)=a+(b-a)*p. Do not round shot origins to frame boundaries. Globe camera uses eased localTime; Stars(fr) uses nativeFrame.

**Adjustable parameters**

lat/lon/distance/roll/viewOffset
day/night/air strengths
sun is available but inactive
star count/tints
texture pair
globe radius

**Dependencies**

useEarth delayRender and Earth first-draw barrier
globe-web-data coordinates match ll mapping
camera.viewOffset uses720x1280 logical pixels

**Failure cases**

Do not use inline legacy Globe camera/day/night values.
No sun/terminator is active in A23 despite SUN_EXAMPLE export.
Using physical lights alone cannot recreate custom Earth shader.
Twinkle resets if replay fr is local; fog leaks if not cleared.
Changing texture dimensions affects derivative-based city-light scaling.

**Reuse principle**

Separate geographic coordinates, globe camera composition, unlit photographic shader, and global star phase so a different geography can reuse the same visual grammar.

### globe-network / globe-single-route-and-tags

**Source**

src/globe-shot.tsx:10-25 GlobeShot
src/globe-shot.tsx:29 photoLeader
src/kit/globe.tsx:447 Route
src/kit/globe.tsx:475 Dot
src/kit/objects.ts:19 label
src/index.tsx:41-42 photo inset
src/index.tsx:46-47 metrics

**Geometry hierarchy**

routes: Two co-located CatmullRomCurve3 tubes: dim complete route and narrow growing highlight. TubeGeometry(points.length*2,width,6); progress range=floor(geo.index.count*clamp(progress)/36)*36. Glow sheath radius3.4*width and same draw range; head Dot at curve.getPointAt(progress).
pacific_points: webCable(0,1.008) from baked illustrative Shanghai-Los Angeles route.
atlantic_points: arc({47,-53},{51,-10},radius1.012,lift.012,n100), 101 points; v=(va*sin((1-u)*w)+vb*sin(u*w))/sin(w), then multiply by radius*(1+lift*sin(pi*u)).
tags: Billboard labels at ll(location,1.019)+cameraRight*dx+cameraUp*dy. Shanghai loc[31.23,121.47] dx.065 dy-.043 w.29; Los Angeles[33.9,-118.4] dx-.15 dy.043 w.33; Newfoundland[47,-53] dx-.035 dy-.04 w.30; Ireland[51,-10] dx.02 dy-.04 w.29; height.050 all. depthTest=false, renderOrder100.

**Materials light**

background_route: #9fb4d0 width.00055 opacity.30, progress1 glow0 head0
highlight: #ffd02c Pacific or #8bdfff Atlantic, width.0011 opacity1 glow.85 head.08; MeshBasicMaterial toneMapped=false fog=false. Sheath opacity=.85*.2=.17 additive depthWrite=false; dot depthTest=false/fog=false/toneMapped=false.

**Camera**

pacific: q=ease(step(t,0,2.53)) for first Pacific; q=ease(step(t,0,3.3)) for return. eye=over({lat42.5,lon=mix(160,162,q)},mix(3.36,3.50,q)); roll=-.582; viewOffset[2,9.4].
atlantic: q=ease(step(t,0,3.8)); eye=over({lat36.76,lon-32.43},mix(2.84,2.69,q)); roll=-.0039; viewOffset[5.9,88.3].
all: fov46, up[0,1,0], lookAt[0,0,0].

**Animation**

highlight: Pacific progress=.20+.80*step(t,0,2.53); Atlantic progress=step(t,0,2.5). Camera eases independently from linear line reveal. Return starts at20% again rather than inheriting first Pacific endpoint.
photo_inset: First Pacific only, nativeTime>7.8: photo.jpg DOM inset left474 top551 width170 height170, border3px #ffd02c radius12, hidden overflow, shadow0 0 18px #ffd02c55. SVG stroke1.3 #ffd02c projected route tip to L534 551. Leader constructs same Pacific camera and projects curve.getPointAt(.2+.8*step(t,0,2.53)); projection maps x=(ndc.x+1)*360,y=(1-ndc.y)*640. Inset/leader are outside Finish and pictureHandoff.
atlantic_metrics: 16 hours starts with shot, top42%, size94; 98 words appears strictly local>1.4, top53%, size70.
return_metric: 0.2 s appears strictly nativeTime>147.5, top61%, #ffc82b, size94.

**Clocks**

nativeFrame = sample offset + composition frame; nativeTime = nativeFrame/30; localTime = nativeTime - exact source SHOTS origin. step(t,a,b)=clamp((t-a)/(b-a),0,1); ease(p)=p*p*(3-2*p); mix(a,b,p)=a+(b-a)*p. Do not round shot origins to frame boundaries.

**Adjustable parameters**

start/end geography and route points
route radius/lift/width
reveal duration/starting progress
tag offsets
camera composition
photo crop/leader endpoint
metric values and gates

**Dependencies**

globe-surface-stars-and-geographic-map
common screen Metric styling
global pictureHandoff scales underlying 3D without transforming SVG leader/inset

**Failure cases**

Photo leader must use same view offset/roll/lens as Pacific camera.
Line growth is linear in localTime; easing it changes endpoint timing.
Return camera q lasts3.3 but shot lasts3.267, so source never reaches its theoretical final camera pose.
Tags intentionally ignore depth; routing them through standard depth test changes visibility.
Metric gates use strict >: equality frame is still absent.
World-space route width is distinct from CableWeb screen-space line width.

**Reuse principle**

Use an unlit route core, additive sheath, separately projected leader, and billboarding to connect a geographic traversal to a readable photo or statistic.

### globe-network / globe-cable-web

**Source**

src/globe-shot.tsx:10-22 GlobeShot
src/kit/globe.tsx:320 web
src/kit/globe.tsx:373 LINE_VERT
src/kit/globe.tsx:388 LINE_FRAG
src/kit/globe.tsx:404 LAND_VERT
src/kit/globe.tsx:425 CableWeb
src/kit/globe-web-data.ts
src/index.tsx:36 web metrics

**Geometry hierarchy**

baked_data: 608 illustrative cables,315 landing points (source header and WEB arrays); geographic point values stored as hundredths of degrees. This is illustrative invented connectivity between actual coastal cities, not an authoritative cable database.
hierarchy: CableWeb group scale=1.003*radius -> ribbon mesh + landing-point Points, two draw calls with no separate single-route overlay or location tags in many/web mode.
geometry: For each cable segment create4 vertices and6 indices with position,other,info(side/profile/draw time/length along),seed; each cable starts at home-distance angle t0, angular length cumulatively summed; normalized draw time=(t0+along)/max(all cable t0+length). C0 seed0 always survives density; others .02+.98*random(cable index). Landing birth is angle(home)/tMax.

**Materials light**

defaults: color=#7fd8ff; radius1, opacity1,density1,pulses1. Custom additive material preserves alpha, depthWrite=false, lines DoubleSide. Earth occludes far side.
line_width: natural=.0034*pxPerUnit; width=clamp(natural,1.1,2)*uRes.y/1920; profile spans±5 half-width units; thin attenuation=clamp(natural/1.1,.4,1). Fade at limb=smoothstep(.02,.3,vFace).
line_reveal: discard when seed>density or drawTime>progress or progress<=0. Tip=smoothstep(.03,0,progress-drawTime)*step(progress,.9995), increasing intensity1+1.6*tip.
pulse: direction=step(.5,fract(seed*13.7))*2-1; ph=fract(direction*angularLength/.45 - nativeTime*(.22+.2*fract(seed*7.3)) + seed*31)-.96; head exp(-ph^2/.00012-x^2*.22)*1.5, tail step(ph,0)*exp(ph/.03-x^2*1.1)*.55. Pulse also whitens cyan toward[.93,.98,1].
landings: point size=clamp(.012*pxPerUnit,3,7.5)*uRes.y/1920 * (1+1.3*birthTip); radial exponential core and same limb fade.

**Camera**

q=ease(step(t,0,3.3)) for earth-web, q=ease(step(t,0,6.2)) for ending; eye=over({lat25,lon=mix(145,159,q)},mix(3.05,2.84,q)); fov46 lookAt origin roll-.08 viewOffset[0,-205].

**Animation**

web_reveal: earth-web progress=step(t,0,2.8); birth-wave travels from Shanghai along near-first network. earth-web-ending progress=1 for entire shot, so no re-draw.
web_metric: earth-web local<1.733: Metric top22%, 600 size94 cyan#85dbff with sub cables. local>=1.733:99% white with sub of data between continents. No corresponding metric in ending.
pulses: Global nativeFrame/fps, not localTime. Keep visible after camera settles. Stars continue global twinkle.

**Clocks**

nativeFrame = sample offset + composition frame; nativeTime = nativeFrame/30; localTime = nativeTime - exact source SHOTS origin. step(t,a,b)=clamp((t-a)/(b-a),0,1); ease(p)=p*p*(3-2*p); mix(a,b,p)=a+(b-a)*p. Do not round shot origins to frame boundaries. CableWeb uTime=fr/fps; global source frame is required.

**Adjustable parameters**

density
color
pulse strength/speed formula
baked route data
growth duration/origin
camera framing
stat copy

**Dependencies**

Earth for hidden far side and custom atmosphere
WEB cached per page
same pixel dimensions/dpr for ribbon widths
Metric outside 3D finish

**Failure cases**

Do not import or display highlighted cable0 on web shots: active component only renders CableWeb.
Using uniformly random nodes or direct straight chords loses source coastal paths.
Localizing fr restarts all pulse phases.
Do not claim 600 equals exact geometry count: source overlay600, baked geometry608.
Ending starts at lon145 again; it does not continue earlier web camera longitude.

**Reuse principle**

Separate a stored network topology from reveal-wave time and ongoing pulse time, so a new network can change content while retaining clarity at different globe scales.

### globe-network / network-room-introduction

**Source**

src/scenes.ts:39 buildScene
src/extensions.ts:7 base
src/extensions.ts:8 room
src/extensions.ts:9 roomScene

**Geometry hierarchy**

hierarchy: studio({wide:true}) -> room and nodeRoot[0,0,-4]. NodeRoot contains28 cyan glow sprites size.30 and28 TorusGeometry(.13,.014,6,24) rings at x=(rand(i+61)-.5)*21,y=rand(i+14)*12-1,z=-1;25 connecting Lines from node i to (i+3)%28. World node z=-5.
room: wall26x16x.2 at[0,6,-7]; floor26x.2x24 at[0,-2,-1]; bed7x1.1x7 at[1,-1,-2]; headboard7.1x2.8x.4 at[1,.3,-5.6]; pillow3x.55x1.8 at[1,-.25,-4]; desk3x.10x2 at[-6,1,-4] legs at x=-7,-5; frame3x2.2x.2 at[-5,4,-6.8], inner2.7x1.9x.05; lamp base radius.8 height.13 at[6,.05,-4], stem radius.07 height3, shade bottom1.1 top.6 height1.4 center[6,3,-4].

**Materials light**

room: wall mat#142345 metal.08 rough.9; wood#181923 metal.15 rough.8; bed#1b2942 metal.05 rough.96; pillow#526079 metal.1 rough.9. Lamp light#ffcd91 intensity4 distance10 decay2 at[6,2.5,-4]. Rings#80dfff metal.1 rough.8 emissive.6; linking lines cyan opacity.15. Default Physical environment.25 fog#040b25 .004.

**Camera**

eye[.2,3,14-localTime*.025], look[0,3,-2], fov47; only a very small linear dolly.

**Animation**

nodeRoot.visible=true for network-intro; nodes and edges are static. Head gold glow exists but head.visible=false because kind is not slowdown. The packet object exists but visible=false because kind is not packet-number. No network-node appearance/reveal animation.

**Clocks**

nativeFrame = sample offset + composition frame; nativeTime = nativeFrame/30; localTime = nativeTime - exact source SHOTS origin. step(t,a,b)=clamp((t-a)/(b-a),0,1); ease(p)=p*p*(3-2*p); mix(a,b,p)=a+(b-a)*p. Do not round shot origins to frame boundaries.

**Adjustable parameters**

room layout
node count/seed/connection step
ring size/line opacity
subtle camera creep
lamp placement

**Dependencies**

studio-lighting-and-object-primitives
pictureHandoff exit last.2s
timer and captions are outside scene wrapper

**Failure cases**

Avoid using unused production-scenes.explanation branch.
Do not describe packet travel or building reveals here; active room network is static.
The same roomScene factory returns numberedPacketBeat early for packet-number, which is unrelated to this shot.

**Reuse principle**

Overlay a simple graph at a consistent depth within a familiar room, then use the edit and caption to introduce a new scale.

### globe-network / routed-network-world-and-hardware

**Source**

src/network-shots.ts:6 ground
src/network-shots.ts:9 routingRack
src/network-shots.ts:43 routedNetwork
src/network-shots.ts:56 route helper
src/network-shots.ts:69 routes
src/network-shots.ts:80 reveal/follow

**Geometry hierarchy**

terrain: PlaneGeometry(260,260,100,100), rotateX(-pi/2), displace y=h(x,z)=.52*sin(.17x+.11z)+.30*cos(.27z-.08x); compute normals.
rack_body: routingRack Group body1.86x4.7x1.3 at[0,2.35,-.10]; side rails.11x4.6x.17 at x±.89,y2.35,z.65; eighteen mounting blocks/side .07x.105x.06 at x±.9,y.2+j*.25,z.76; upper/lower trim at y.7,3.96 has six small 13-point curved vents each.
rack_rows: 8 face rows at y1.48+row*.25; face1.64x.21x.14,z.66;12 ports per row at x=-.69+j*.125, size.085x.066x.04,z.75. detail=true adds96 tiny .014 indicators;23 patch cables detailed vs10 far. Patch cable endpoints use row=i%8,dest=(i*3+2)%8,x=-.69+(i*5%12)*.125,xx=-.69+((i*7+3)%12)*.125. Six control points route into ports, tube radius.0065 segments36. Base2.03x.10x1.55.
rack_field: 56 clones (8 rows x7 columns) of detail=false template. x=(c-3)*7+(r%2)*2.1+(rand(r*31+c)-.5)*2, z=-7-r*9+(rand(r*17+c+80)-.5)*3; y=h(x,z), scale=.55+rand(r*71+c)*.19, yRotation=(rand(r*7+c+100)-.5)*.45. Detailed close rack at[0,h(0,0),0], scale.73 in network or1 in router/reroute.
graph: 49 forward paths join row r,c to r+1,min(6,c+(r%2?0:1)), plus42 lateral paths. Forward .038 radius color#4d87c3 emission.5; lateral .021 #3b68a2 emission.4. Three extra routes cross close rack.
surface_fit: route helper accepts[x,z] controls, sets y=h+.055, computes CatmullRom, samples81 getPointAt samples and reprojects each y to h+.055, then tubes a new curve120 segments and8 radial segments.
main_path_xz: 0
14
0
7
0
1
0
0
2
-4
2
-9
0
-16
0
-26
alternate_path_xz: 0
0
4
-2
7
-6
9
-13
7
-22
blocked_path_xz: 0
0
3
-3
2
-8
labels: Los Angeles5.5x.85 at[0,2.6,-79]; Shanghai1.8x.35 at[1.8,.8,5]; question1.8x2.8 at[0,4.7,-9]; Router.49x.16 at[-1.10,4.12,1.02].
hero: packet #0847 width1.65 in router, .69 otherwise; header shown router and reroute, no header network. tip glow gold and PointLight are siblings;25 cyan halo sprites follow alternating forward paths.

**Materials light**

lighting: studio wide=true; multiply direct root light intensity by.65, so hemi.91,key1.95,rim1.365,fill.4225. Physical environment.16 FogExp2(#060d24,.004).
land: #030814 metal.10 rough.94
rack: dark#050b14 m.5 r.57; rail#22354d m.7 r.38; face#2a3e60 m.55 r.45; port black#02060d m.1 r.7; wire#4e99c5 m.25 r.48 emission.14.
hero_path: main radius.036, alternate.035 both #ffbf22 m.12 r.55 emission1.7; blocked.042 #ff315e emission.6.
tip_and_fault: tip initially scale.8, then network.6/reroute.7; PointLight gold intensity7 distance5 decay2 at path point+y.15. Fault size.8 red at[2,h(2,-8)+.10,-8]. Background halos scale.29 #9bddff.

**Camera**

Shot-specific formulas in routed-network-four-shot-action. All network map cameras fov51, router closeup46.

**Animation**

follow(path,q): packet at path.getPointAt(clamp(q))+[0,1.35,0]; tip at path point; spill y+.15. reveal(mesh,q): drawRange count=floor(clamp(q)*120)*48 (48 indices per8-sided tube segment). Background halo i at paths[2i].getPointAt((local*.055+rand(i+8))%1)+[0,.035,0].

**Clocks**

nativeFrame = sample offset + composition frame; nativeTime = nativeFrame/30; localTime = nativeTime - exact source SHOTS origin. step(t,a,b)=clamp((t-a)/(b-a),0,1); ease(p)=p*p*(3-2*p); mix(a,b,p)=a+(b-a)*p. Do not round shot origins to frame boundaries.

**Adjustable parameters**

field rows/columns/spacing/jitter
terrain h
port count and cable topology
path control points/radii
hero ID/header
lights/emission/fog

**Dependencies**

Shared template clone shares geometries/materials
all routes require terrain reprojection
labels use loaded FilmCondensed
exact native global time selects network interval

**Failure cases**

Terrain changes require both rack bases and every path y to be recomputed.
Adding main or alternate draw progress with wrong radial segments breaks reveal count.
Router hides rack nodes and halos but does not hide all background blue lines/terrain.
Main and alternate routes share gold but have distinct visibility/progress.
The detailed rack has scale reset by construction; router update moves close rack y from initial terrain .3 to0.

**Reuse principle**

Construct a network as physical endpoints plus ground-conforming paths; derive geometry, packet position, route reveal and local spill light from the same curve.

### globe-network / routed-network-four-shot-action

**Source**

src/network-shots.ts:82 update
src/network-shots.ts:101 camera
src/index.tsx:22 assigned shot origins

**Geometry hierarchy**

Uses routed-network-world-and-hardware. All objects are rebuilt for each shot because Physical key is the shot start. Visibility flags are assigned each update; router card is an address explanation, not a separate model.

**Materials light**

Shared network lights fixed; tip/spill hidden router. Fault visible only reroute local>.35 && local<1.5, opacity=1-step(local,1.1,1.5).

**Camera**

first_network: rise=ease(step(t,.2,2.1)); approach=ease(step(t,3.45,5)); eye=[mix(0,4.5,approach),mix(mix(6.3,10.8,rise),6.8,approach),mix(23,12,approach)]; look=[0,mix(0,.6,approach),mix(-22,-4,approach)],fov51.
router: eye=[mix(-2.15,-1.9,ease(step(t,0,5))),2.7,6.2],look[0,2.5,0],fov46.
onward_network: q=ease(step(t,0,3.3)); eye=[mix(0,1.3,q),9.3,mix(19,8,q)],look[0,.2,mix(-18,-27,q)],fov51.
reroute: qCam=ease(step(t,1.65,3.8)); eye=[mix(4.2,3,qCam),mix(5.5,9,qCam),mix(9.5,15,qCam)]; look=[mix(.1,4,qCam),.8,mix(-2,-12,qCam)],fov51.

**Animation**

58.967-64_network: qPath=mix(.13,.44,ease(step(t,0,4.8))). main visible/draw to q, alternate/blocked/fault/routerTag hidden. Shanghai label t<3.6; question t>1.1 && t<3.45; destination visible. Camera rises .2-2.1, holds high2.1-3.45, approaches rack3.45-5. Packet stops at q=.44 after4.8.
64-69_router: main/alternate/tip/spill hidden; routerTag on; nodes and halos hidden; close rack repositioned[0,0,0]. enter=ease(step(t,.6,1.6)),leave=ease(step(t,3.5,4.25)); heroPos=[mix(-1.6,-.4,enter)+1.7*leave,2.10,1.34], scale=[enter*(1-leave),enter*(1-leave)*.84,enter*(1-leave)],rotationY=-.16; visible strictly .6<t<4.25. Hold card1.6-3.5; scale/slide away3.5-4.25; no card rest.
69-72.3_network: Native global>=69 selects onward. qPath=mix(.44,.94,ease(step(t,0,3.3))); main visible/reveals, destination visible, question and Shanghai absent; close rack .73 scale; continue from .44 into deep field. Camera and packet share ease duration3.3.
72.3-76.167_reroute: main remains fixed reveal.43. alternate visible, qPath=ease(step(t,1.8,3.75)); follow alternate; packet y gets additional .18*(1-qPath), z additional1.3*(1-step(qPath,0,.15)), rotationY=.2. Until1.8 packet hovers at alternate start with offset. Fault appears>.35, fades1.1-1.5, absent1.5+. Camera starts backing/rising1.65. Alternate reveal/packet traversal1.8-3.75; qPath=.15 ends initial z offset. Camera settles3.8.

**Clocks**

nativeFrame = sample offset + composition frame; nativeTime = nativeFrame/30; localTime = nativeTime - exact source SHOTS origin. step(t,a,b)=clamp((t-a)/(b-a),0,1); ease(p)=p*p*(3-2*p); mix(a,b,p)=a+(b-a)*p. Do not round shot origins to frame boundaries.The second network is distinguished by global>=69, not by kind; native global must reach both update and camera.

**Adjustable parameters**

native shot origins
path fractions
camera rise/approach times
question label window
router enter/hold/leave phases
fault window
reroute motion onset

**Dependencies**

routed-network-world-and-hardware
pictureHandoff: network entry.23; reroute exit last.2; router no optical handoff

**Failure cases**

Using global=59+t default on onward would replay first network.
Do not describe rack model detecting a fault via deformation; fault is a red curve plus red sprite visibility.
Router card local1.6-3.5 is held while camera still slides; absence after4.25 is intended.
Reroute main fraction.43 differs from preceding network endpoint.94: this is an editorial reset, not one unbroken physical trajectory.

**Reuse principle**

Choose separate establishment, address-reading, onward-travel and reroute beats, while reusing one terrain/topology build and expressing all change as seek-safe parameter functions.

### globe-network / procedural-satellite

**Source**

src/scenes.ts:38 satellite
src/scenes.ts:39 buildScene
src/production-kit.ts:6 studio
src/index.tsx:25 Physical

**Geometry hierarchy**

hierarchy: studio() root -> satellite group at[0,3,0] -> metal body1.5x1.8x1.5; two struts to[side*4.2,0,0],radius.04; two solar panels3x.05x1.7 at[side*3,0,0];8 grid lines per panel at x=side*3-1.4+i*.4,y=.035,z from-.8 to.8; dish CylinderGeometry(top.25,bottom.6,height.10,40) at[0,1.1,0].
background: Default studio radius650 procedural navy sky and380 dust points; no Earth, no imported satellite asset, no Stars component.

**Materials light**

metal: #95a2b7 metalness.92 roughness.22
solar_panels: #123489 metalness.7 roughness.2
panel_lines: #7b91d1 opacity.4
lighting: Default studio lights (wide=false), Physical environmentIntensity.25 and fog#040b25 density.004; no animated practical.

**Camera**

eye=[5,7,15-local*.1], look[0,3,0], fov45.

**Animation**

satellite group rotation.set(.2,local*.07,.2), constant X/Z tilt and linear Y turn; group translation remains[0,3,0].

**Clocks**

nativeFrame = sample offset + composition frame; nativeTime = nativeFrame/30; localTime = nativeTime - exact source SHOTS origin. step(t,a,b)=clamp((t-a)/(b-a),0,1); ease(p)=p*p*(3-2*p); mix(a,b,p)=a+(b-a)*p. Do not round shot origins to frame boundaries.

**Adjustable parameters**

bus/panel/dish dimensions
panel divisions
rotation rate and starting tilt
camera distance/dolly rate

**Dependencies**

studio-lighting-and-object-primitives
global captions/timer

**Failure cases**

Do not add an Earth or spherical starfield from neighboring globe shots.
Do not map inactive cityRadio or globe route satellite assumptions to this scene.

**Reuse principle**

A simple procedural silhouette with a slow full-group turn is enough for a brief conceptual satellite insert; preserve consistent lighting and editorial context.

### globe-network / final-curved-infrastructure-world

**Source**

src/infrastructure.ts:68 infrastructureWorld
src/kit/objects.ts:27 rack
src/kit/objects.ts:32 tower
src/production-kit.ts:36 practical

**Geometry hierarchy**

hierarchy: studio wide=true -> curved world mesh,6 hardware pads+models,56 thin route lines,6 ring-connection tubes,1 practical glow group. No packet, no dynamic route reveal, no Earth map texture.
terrain: R150; h(x,z)=sqrt(max(0,R^2-x^2-z^2))-R. Plane220x220 with128x128 segments rotated horizontal and each y=h. Normal recalculation after displacing.
texture: Canvas2048^2 background#162443.360 deterministic city glow clusters centered x=rand(j+33)*w,y=rand(j+311)*h,r=8+rand(j+90)*42. Radial stops0 #f4dcbfa0,.15 #b8d2ff66,1 #7eaaff00.95 tiny1x1 lights per cluster at angle rand(i+j*133)*6.28, distance rand(i+j*203)^.7*r; color i%3?#b9d6ff:#ead8b1.
nodes: x: -6
z: 6
type: rack
x: 8
z: 3
type: tower
x: -4
z: -10
type: router
x: 5.5
z: -19
type: server
x: -8
z: -25
type: tower
x: 7
z: 23
type: tower
pads: Node group y=h. Hexagonal CylinderGeometry (n6), lower pad radius server5/router4/other3.3,height.26 at y.13; rim radius5.05/4.05/3.35,height.055 at y.08. Models remain vertical instead of tilting to sphere normals.
hardware: rack stock objects.rack scale1.35 with local y=.28; three stock towers h9,y=.28. Server node has4 cabinets at x=(i-1.5)*1.65,y=.3: body1.55x5.3x2,25 horizontal strips each1.3x.10x.045 at y=.24+j*.195,z1.04 and2 tiny LED boxes per strip. Router body5x.6x3.1 at y.62; dark top4.65x.06x2.8 at y.97;4 rods from[-1.95+i*1.3,.96,-1.1] to[-2.3+i*1.53,4.2,-1.8],radius.075;6 LED spheres radius.055 at[-1.3+i*.51,.62,1.59].
lines: 56 routes for i0..6,j0..7: x=(j-3.5)*13,z=(i-5)*14, three points[x,h+.12,z],[x+9,h(x+9,z-5)+.12,z-5],[x+13,h(x+13,z-14)+.12,z-14]. Six connecting tubes join each node to next cyclically,31 equally spaced linear XZ points with y=h+.18; tube radius.025 segments40.
stock_rack_detail: objects.rack: group uniform scale1.35. Dark body1.8x4.1x1.25 at y2.05; two rails.13x4.1x.15 at x±.91,z.66,24 mount holes/side. Eight rows y1.37+k*.215, face1.56x.18x.16 at z.69;12 ports/row .080x.057x.05 at x=-.67+j*.12,z.80, tiny silver contact.020x.008x.052 y+.036, two cyan LEDs per row. Fan panels y.47,3.60 each1.58x.4x.14, five fans radius.115 height.035 each, six blades/fan. Slatted panels y.9,3.26;29 seeded six-point patch curves radius.010 segments48 between ports. Base2.15x.12x1.75. Materials dark#030917 m.7 r.42, metal#213a65 m.75 r.34, cables#58b9e9 m.3 r.4 emit.5.
stock_tower_detail: objects.tower h9: four main rods radius.045 from radius.9 ground corners at angle k*pi/2+pi/4 to radius.29 top corners;10 vertical levels, each side cross-braced with two rods radius.025 using side(y)=.65*(1-y/h)+.22. Two2x.09x2 platforms at y=.65h and.9h; six antenna boxes .24x1.45x.13 around radius1.1 at y=platform+.55. Two dish cylinders radius.32 thickness.10 at[-.5,.45h+i*1.4,.7],rotationX=pi/2. Steel#7a9abe m.9 r.22, antenna/dish#eeb468 m.5 r.4.

**Materials light**

terrain: MeshStandardMaterial map/emissiveMap=procedural night texture, emissive#c0d7ff intensity.65, color#7796c9 roughness.74 metalness.06.
pads: base#0c152a metal.65 rough.4; edge#83a7db metal.45 rough.35 emissive.3.
server: body#0b1932 m.7 r.36; face bars#293e62 m.7 r.4; LEDs#b6d9ff m.1 r.5 emission1.
router: body#b8c8e2 m.36 r.33, top#0a142a m.3 r.5, antenna#0a1422, LEDs#9edfff m.1 r.6 emission2.
routes: thin Lines#a7d4ff opacity.6; connecting tubes#9edaff m.15 r.45 emissive.3.
world_lighting: studio wide=true unscaled; Physical fogDensity.001/default fogColor#040b25; environmentIntensity.45. Practical group at[-5,1,-4], color#c3ddff, distance30,glow size2.1; PointLight starts constructed42 then update sets32+12*sin(local*.7).

**Camera**

q=ease(step(local,0,6.86)); eye=[mix(4,1,q),mix(28,24,q),mix(40,36,q)], look[0,2,-5],fov47.

**Animation**

Camera glides slightly down/forward/left for6.86s then stays. Only geometry animation is none: practical intensity breathes32+12*sin(local*.7), with first maximum at local pi/1.4, midpoint baseline at pi/.7, minimum at3pi/1.4. Source scene remains fully built throughout.

**Clocks**

nativeFrame = sample offset + composition frame; nativeTime = nativeFrame/30; localTime = nativeTime - exact source SHOTS origin. step(t,a,b)=clamp((t-a)/(b-a),0,1); ease(p)=p*p*(3-2*p); mix(a,b,p)=a+(b-a)*p. Do not round shot origins to frame boundaries.

**Adjustable parameters**

R/h curvature
pad positions/types
procedural texture seed/density
hardware dimensions
connector layout
camera distance/ease duration
glow breathing frequency/intensity

**Dependencies**

objects.rack and objects.tower are active for final, distinct from routingRack used network middle.
all model bases/routes must use h
texture baked before capture

**Failure cases**

extensions.finalNetwork and production-scenes.networkHorizon are inactive alternatives with different movement.
Do not insert a traveling packet: active infrastructureWorld never constructs one.
Never substitute earth_night texture: source uses generated planar city-light texture.
Camera target fixed while eye moves; rotating world to fake travel changes parallax.

**Reuse principle**

End on a curved miniature collection of heterogeneous hardware, with one camera glide and a gentle light variation; let the narration connect the static components.

### globe-network / shared-optical-handoff-finish-and-typography

**Source**

src/camera-edit.ts:4-12 pictureHandoff
src/kit/finish.tsx:5 useGrain
src/kit/finish.tsx:23 Finish
src/index.tsx:28 Metric
src/index.tsx:31 Captions
src/index.tsx:32 Film
src/index.tsx:26-27 timerValue
src/captions.json
src/timer.json

**Geometry hierarchy**

layer_order: AbsoluteFill background#020615,fontFamily FilmCondensed Arial,color#fff -> Finish(fr,bloom.7,grain) containing pictureHandoff wrapper containing ThreeCanvas. Then DOM title/timer/metrics/inset/leader/photo mosaic; Captions last visual; Audio(reference-audio.wav). The captions and numerical metrics are outside bloom/grain/vignette/optical transform.
fonts: public/title.ttf FontFace FilmCondensed weight400; public/body.ttf FilmBody weight100 900; Promise.all loaded, document.fonts.add, then ready and settle frame. Scene label canvases bake after fonts loaded.
grain: 512x512 Canvas random(grain+i), gray128+(random-.5)*255, full alpha; CSS overlay blend; per-frame backgroundPosition floor(random(gx+fr)*512),floor(random(gy+fr)*512).
captions: source caption find first with start<=nativeTime<end; top907,left/right30,width660; FilmBody35 weight700,lineHeight1.08,center white;textShadow0 2px 3px black plus ±1px horizontal2px; WebkitTextStroke1px #0008; paintOrder stroke fill. regex-highlighted numeric phrases get#ffc52c.
metric: default top24%,left20/right20,center;font94,lineHeight.95,textShadow0 0 16px color77 +0 2px 4px #0009; unit font.3*size,marginLeft7; sub font26,marginTop12,#e7f5ff. leftAlign override left42/textAlign left.
caption_highlight_regex: (4,000|200,000|200 milliseconds|750 times|16 million|1,500|3 milliseconds|20 milliseconds|600|99%|12,000 kilometers|60 milliseconds|150 milliseconds|1858|16 hours|98 words|0.2 seconds)

**Materials light**

bloom: SVG film-bloom threshold approximation: channel2.6*c-1.62; blur9 and42; arithmetic mix .55*bloom and.75*bloom, then screen blend over source; active bloom=.7, coefficients .385/.525.
vignette: radial-gradient(ellipse78%62% at50%46%,transparent55%,black45% at100%).
grain: Default.075; only native37.4<=t<41.8 special mix(.075,.018,ease(step(t,37.4,38))) then returns .075. Assigned globe/network windows always .075.

**Camera**

Optical handoff is CSS scale/blur on picture wrapper, separate from camera. incoming=enterSet?1-ease(step(local,0,.23)):0; outgoing=exitSet?ease(step(local,duration-.2,duration)):0; p=max(incoming,outgoing); scale=1+p*(large?1.8:.32),blur=p*(large?20:9)px iff p>.001; transformOrigin50%47%; large only undersea/earth-pacific.

**Animation**

enter_set: earth-pacific
sending
binary
network
landing
seabed
fiber
earth-web
crossing
arrival
photo
earth-atlantic
earth-pacific-return
final-network
exit_set: undersea
earth-pacific
slowdown
network-intro
reroute
landing
hose
fiber
repeater
receive-radio
unlock
ship
earth-atlantic
earth-web-ending
assigned_handoffs: earth-pacific both; network-intro exit; both network entries; router none; reroute exit; earth-web entry; satellite none; Atlantic both; return entry; web-ending exit; final entry.
timer: Visible12.167<=t<139.167; assigned intro/network/web/satellite all use small timer top169,right44,size56,unit17,cyan#86dcff,textShadow0 0 14px #56bfff88. Value from latest observedTimer record timestamp<=t for20.367<=t<139.167; always padStart(3,0). No timer in first Pacific or any ending shots after142.
audio: Single mixed reference-audio.wav with startFrom=sample.offset or0 frames; no isolated stems recovered. No invented scene-specific sound-effect attribution.

**Clocks**

nativeFrame = sample offset + composition frame; nativeTime = nativeFrame/30; localTime = nativeTime - exact source SHOTS origin. step(t,a,b)=clamp((t-a)/(b-a),0,1); ease(p)=p*p*(3-2*p); mix(a,b,p)=a+(b-a)*p. Do not round shot origins to frame boundaries. Finish noise and caption/timer gates follow native frame/time; optical handoff follows exact local+duration.

**Adjustable parameters**

handoff enter/exit lists
blur/scale amplitude
grain/bloom amount
font files
caption copy/timing
highlight phrase regex
metric position/copy

**Dependencies**

Same outer-layer order
font loading delay
reference-audio.wav exact sample alignment
timer.json events override coarse TIMER interpolation

**Failure cases**

Scaling captions with scene changes source behavior.
Resetting grain frame on a shot changes finish.
Rendering optical handoff as crossfade is incorrect: only current picture is magnified/blurred.
The film-bloom id and SVG filter must exist in same document.
No final fade-out exists in active final-network; picture persists to cut, and last caption ends161.7.

**Reuse principle**

Keep story-critical typography crisp above the image finish; use a short optical scale handoff to bridge scale changes while maintaining exact frame-driven time.

## Exact layer recipes

These parameters are consumed by the replay. Dynamic layer implementations live in player.tsx; dimensions and formulas are documented by the shared optical/typography recipe.

### opening (static)
```json
{
  "id": "opening",
  "kind": "static",
  "start": 0,
  "end": 2.6,
  "style": {
    "position": "absolute",
    "top": 209,
    "left": 30,
    "right": 30,
    "textAlign": "center",
    "fontSize": 72,
    "lineHeight": 1.13,
    "fontWeight": 400,
    "transform": "scaleX(1.22)",
    "color": "#ffc82e",
    "textShadow": "0 0 18px #ffa60066"
  },
  "html": "THE PHOTO YOUR<br/>MOM JUST SENT<div style=\"color:#e9f8ff;font-family:FilmBody;font-weight:750;font-size:31px;line-height:1.2;margin-top:10px;text-shadow:0 0 10px #bfeaff88\">is 4,000 m under the Pacific right now</div>"
}
```

### pacific-depth (static)
```json
{
  "id": "pacific-depth",
  "kind": "static",
  "start": 0,
  "end": 6.833,
  "style": {
    "position": "absolute",
    "top": 805,
    "left": 46,
    "fontFamily": "FilmBody",
    "fontWeight": 750,
    "fontSize": 26,
    "textShadow": "0 0 9px #a1e4ff"
  },
  "html": "Pacific Ocean<div style=\"font-size:17px;color:#9ed9f0\">depth 4,000 m</div>"
}
```

### elapsed (timer)
```json
{
  "id": "elapsed",
  "kind": "timer",
  "start": 12.167,
  "end": 139.167,
  "smallAt": 20.367,
  "paleBefore": 15,
  "paleAfter": 135.9,
  "hold": [
    15,
    20.367
  ],
  "interpolate": [
    [
      45.167,
      76.167
    ],
    [
      103.6,
      135.967
    ]
  ],
  "samples": [
    [
      20.0,
      0
    ],
    [
      20.333,
      0
    ],
    [
      20.667,
      0
    ],
    [
      21.0,
      0
    ],
    [
      21.333,
      0
    ],
    [
      21.667,
      0
    ],
    [
      22.0,
      0
    ],
    [
      22.333,
      0
    ],
    [
      22.667,
      0
    ],
    [
      23.0,
      0
    ],
    [
      23.333,
      0
    ],
    [
      23.667,
      0
    ],
    [
      24.0,
      0
    ],
    [
      24.333,
      0
    ],
    [
      24.667,
      1
    ],
    [
      25.0,
      1
    ],
    [
      25.333,
      1
    ],
    [
      25.667,
      1
    ],
    [
      26.0,
      1
    ],
    [
      26.333,
      1
    ],
    [
      26.667,
      1
    ],
    [
      27.0,
      1
    ],
    [
      27.333,
      1
    ],
    [
      27.667,
      1
    ],
    [
      28.0,
      1
    ],
    [
      28.333,
      1
    ],
    [
      28.667,
      1
    ],
    [
      29.0,
      1
    ],
    [
      29.333,
      1
    ],
    [
      29.667,
      1
    ],
    [
      30.0,
      1
    ],
    [
      30.333,
      1
    ],
    [
      30.667,
      1
    ],
    [
      31.0,
      1
    ],
    [
      31.333,
      1
    ],
    [
      31.667,
      1
    ],
    [
      32.0,
      1
    ],
    [
      32.333,
      1
    ],
    [
      32.667,
      1
    ],
    [
      33.0,
      2
    ],
    [
      33.333,
      2
    ],
    [
      33.667,
      2
    ],
    [
      34.0,
      2
    ],
    [
      34.333,
      2
    ],
    [
      34.667,
      2
    ],
    [
      35.0,
      2
    ],
    [
      35.333,
      2
    ],
    [
      35.667,
      2
    ],
    [
      36.0,
      2
    ],
    [
      36.333,
      2
    ],
    [
      36.667,
      2
    ],
    [
      37.0,
      2
    ],
    [
      37.333,
      2
    ],
    [
      37.667,
      2
    ],
    [
      38.0,
      2
    ],
    [
      38.333,
      2
    ],
    [
      38.667,
      2
    ],
    [
      39.0,
      2
    ],
    [
      39.333,
      2
    ],
    [
      39.667,
      2
    ],
    [
      40.0,
      2
    ],
    [
      40.333,
      2
    ],
    [
      40.667,
      2
    ],
    [
      41.0,
      3
    ],
    [
      41.333,
      3
    ],
    [
      41.667,
      3
    ],
    [
      42.0,
      3
    ],
    [
      42.333,
      3
    ],
    [
      42.667,
      3
    ],
    [
      43.0,
      3
    ],
    [
      43.333,
      3
    ],
    [
      43.667,
      3
    ],
    [
      44.0,
      3
    ],
    [
      44.333,
      3
    ],
    [
      44.667,
      3
    ],
    [
      45.0,
      3
    ],
    [
      45.333,
      3
    ],
    [
      45.667,
      3
    ],
    [
      46.0,
      3
    ],
    [
      46.333,
      4
    ],
    [
      46.667,
      4
    ],
    [
      47.0,
      4
    ],
    [
      47.333,
      4
    ],
    [
      47.667,
      4
    ],
    [
      48.0,
      5
    ],
    [
      48.333,
      5
    ],
    [
      48.667,
      5
    ],
    [
      49.0,
      5
    ],
    [
      49.333,
      5
    ],
    [
      49.667,
      6
    ],
    [
      50.0,
      6
    ],
    [
      50.333,
      6
    ],
    [
      50.667,
      6
    ],
    [
      51.0,
      6
    ],
    [
      51.333,
      6
    ],
    [
      51.667,
      7
    ],
    [
      52.0,
      7
    ],
    [
      52.333,
      7
    ],
    [
      52.667,
      7
    ],
    [
      53.0,
      7
    ],
    [
      53.333,
      8
    ],
    [
      53.667,
      8
    ],
    [
      54.0,
      8
    ],
    [
      54.333,
      8
    ],
    [
      54.667,
      8
    ],
    [
      55.0,
      8
    ],
    [
      55.333,
      9
    ],
    [
      55.667,
      9
    ],
    [
      56.0,
      9
    ],
    [
      56.333,
      9
    ],
    [
      56.667,
      9
    ],
    [
      57.0,
      10
    ],
    [
      57.333,
      10
    ],
    [
      57.667,
      10
    ],
    [
      58.0,
      10
    ],
    [
      58.333,
      10
    ],
    [
      58.667,
      10
    ],
    [
      59.0,
      11
    ],
    [
      59.333,
      11
    ],
    [
      59.667,
      11
    ],
    [
      60.0,
      11
    ],
    [
      60.333,
      11
    ],
    [
      60.667,
      12
    ],
    [
      61.0,
      12
    ],
    [
      61.333,
      12
    ],
    [
      61.667,
      12
    ],
    [
      62.0,
      12
    ],
    [
      62.333,
      12
    ],
    [
      62.667,
      13
    ],
    [
      63.0,
      13
    ],
    [
      63.333,
      13
    ],
    [
      64.0,
      13
    ],
    [
      64.333,
      14
    ],
    [
      64.667,
      14
    ],
    [
      65.0,
      14
    ],
    [
      65.333,
      14
    ],
    [
      65.667,
      14
    ],
    [
      66.0,
      14
    ],
    [
      66.333,
      15
    ],
    [
      66.667,
      15
    ],
    [
      67.0,
      15
    ],
    [
      67.333,
      15
    ],
    [
      67.667,
      15
    ],
    [
      68.0,
      16
    ],
    [
      68.333,
      16
    ],
    [
      68.667,
      16
    ],
    [
      69.0,
      16
    ],
    [
      69.333,
      16
    ],
    [
      69.667,
      16
    ],
    [
      70.0,
      17
    ],
    [
      70.333,
      17
    ],
    [
      70.667,
      17
    ],
    [
      71.0,
      17
    ],
    [
      71.333,
      17
    ],
    [
      71.667,
      18
    ],
    [
      72.0,
      18
    ],
    [
      72.333,
      18
    ],
    [
      72.667,
      18
    ],
    [
      73.0,
      18
    ],
    [
      73.333,
      18
    ],
    [
      73.667,
      19
    ],
    [
      74.0,
      19
    ],
    [
      74.333,
      19
    ],
    [
      74.667,
      19
    ],
    [
      75.0,
      19
    ],
    [
      75.333,
      20
    ],
    [
      75.667,
      20
    ],
    [
      76.0,
      20
    ],
    [
      76.333,
      20
    ],
    [
      76.667,
      20
    ],
    [
      77.0,
      20
    ],
    [
      77.333,
      20
    ],
    [
      77.667,
      20
    ],
    [
      78.0,
      20
    ],
    [
      78.333,
      20
    ],
    [
      78.667,
      20
    ],
    [
      79.0,
      20
    ],
    [
      79.333,
      20
    ],
    [
      79.667,
      20
    ],
    [
      80.0,
      20
    ],
    [
      80.333,
      20
    ],
    [
      80.667,
      20
    ],
    [
      81.0,
      20
    ],
    [
      81.333,
      20
    ],
    [
      81.667,
      20
    ],
    [
      82.0,
      20
    ],
    [
      82.333,
      20
    ],
    [
      82.667,
      20
    ],
    [
      83.0,
      20
    ],
    [
      83.333,
      20
    ],
    [
      83.667,
      20
    ],
    [
      84.0,
      20
    ],
    [
      84.333,
      20
    ],
    [
      84.667,
      20
    ],
    [
      85.0,
      20
    ],
    [
      85.333,
      20
    ],
    [
      85.667,
      20
    ],
    [
      86.0,
      20
    ],
    [
      86.333,
      20
    ],
    [
      86.667,
      20
    ],
    [
      87.0,
      20
    ],
    [
      87.333,
      20
    ],
    [
      87.667,
      20
    ],
    [
      88.0,
      20
    ],
    [
      88.333,
      20
    ],
    [
      88.667,
      20
    ],
    [
      89.0,
      20
    ],
    [
      89.333,
      20
    ],
    [
      89.667,
      20
    ],
    [
      90.0,
      20
    ],
    [
      90.333,
      20
    ],
    [
      90.667,
      20
    ],
    [
      91.0,
      20
    ],
    [
      91.333,
      20
    ],
    [
      91.667,
      20
    ],
    [
      92.0,
      20
    ],
    [
      92.333,
      20
    ],
    [
      92.667,
      20
    ],
    [
      93.0,
      20
    ],
    [
      93.333,
      20
    ],
    [
      93.667,
      20
    ],
    [
      94.0,
      20
    ],
    [
      94.333,
      20
    ],
    [
      94.667,
      20
    ],
    [
      95.0,
      20
    ],
    [
      95.333,
      20
    ],
    [
      95.667,
      20
    ],
    [
      96.0,
      20
    ],
    [
      96.333,
      20
    ],
    [
      96.667,
      20
    ],
    [
      97.0,
      20
    ],
    [
      97.333,
      20
    ],
    [
      97.667,
      20
    ],
    [
      98.0,
      20
    ],
    [
      98.333,
      20
    ],
    [
      98.667,
      20
    ],
    [
      99.0,
      20
    ],
    [
      99.333,
      20
    ],
    [
      99.667,
      20
    ],
    [
      100.0,
      20
    ],
    [
      100.333,
      20
    ],
    [
      100.667,
      20
    ],
    [
      101.0,
      20
    ],
    [
      101.333,
      20
    ],
    [
      101.667,
      20
    ],
    [
      102.0,
      20
    ],
    [
      102.333,
      20
    ],
    [
      102.667,
      20
    ],
    [
      103.0,
      20
    ],
    [
      103.333,
      20
    ],
    [
      103.667,
      21
    ],
    [
      104.0,
      25
    ],
    [
      104.333,
      28
    ],
    [
      104.667,
      31
    ],
    [
      105.0,
      35
    ],
    [
      105.333,
      38
    ],
    [
      105.667,
      41
    ],
    [
      106.0,
      45
    ],
    [
      106.333,
      48
    ],
    [
      106.667,
      51
    ],
    [
      107.0,
      55
    ],
    [
      107.333,
      58
    ],
    [
      107.667,
      61
    ],
    [
      108.0,
      65
    ],
    [
      108.333,
      68
    ],
    [
      108.667,
      71
    ],
    [
      109.0,
      75
    ],
    [
      109.333,
      78
    ],
    [
      109.667,
      98
    ],
    [
      110.0,
      146
    ],
    [
      110.333,
      151
    ],
    [
      110.667,
      151
    ],
    [
      111.0,
      152
    ],
    [
      111.333,
      153
    ],
    [
      111.667,
      153
    ],
    [
      112.0,
      154
    ],
    [
      112.333,
      155
    ],
    [
      112.667,
      155
    ],
    [
      113.0,
      156
    ],
    [
      113.333,
      157
    ],
    [
      113.667,
      157
    ],
    [
      114.0,
      158
    ],
    [
      114.333,
      159
    ],
    [
      114.667,
      159
    ],
    [
      115.0,
      160
    ],
    [
      115.333,
      161
    ],
    [
      115.667,
      161
    ],
    [
      116.0,
      162
    ],
    [
      116.333,
      163
    ],
    [
      116.667,
      163
    ],
    [
      117.0,
      164
    ],
    [
      117.333,
      164
    ],
    [
      118.0,
      166
    ],
    [
      118.333,
      166
    ],
    [
      118.667,
      167
    ],
    [
      119.0,
      168
    ],
    [
      119.333,
      168
    ],
    [
      120.0,
      170
    ],
    [
      123.333,
      176
    ],
    [
      123.667,
      177
    ],
    [
      124.0,
      178
    ],
    [
      124.333,
      178
    ],
    [
      124.667,
      179
    ],
    [
      125.0,
      180
    ],
    [
      125.333,
      180
    ],
    [
      126.667,
      183
    ],
    [
      127.0,
      184
    ],
    [
      127.333,
      184
    ],
    [
      127.667,
      185
    ],
    [
      128.0,
      186
    ],
    [
      128.333,
      186
    ],
    [
      128.667,
      187
    ],
    [
      129.0,
      188
    ],
    [
      129.333,
      188
    ],
    [
      129.667,
      189
    ],
    [
      130.0,
      190
    ],
    [
      130.333,
      190
    ],
    [
      130.667,
      191
    ],
    [
      131.0,
      192
    ],
    [
      131.333,
      192
    ],
    [
      131.667,
      193
    ],
    [
      132.0,
      194
    ],
    [
      132.333,
      194
    ],
    [
      132.667,
      195
    ],
    [
      133.0,
      196
    ],
    [
      133.333,
      196
    ],
    [
      133.667,
      197
    ],
    [
      134.0,
      198
    ],
    [
      134.333,
      198
    ],
    [
      134.667,
      199
    ],
    [
      135.0,
      200
    ],
    [
      135.333,
      200
    ],
    [
      135.667,
      200
    ],
    [
      136.0,
      200
    ]
  ],
  "table": [
    [
      12.167,
      200
    ],
    [
      15,
      200
    ],
    [
      20.367,
      0
    ],
    [
      25.1,
      1
    ],
    [
      34.1,
      2
    ],
    [
      42.2,
      3
    ],
    [
      45.167,
      3
    ],
    [
      51.3,
      6
    ],
    [
      56.9,
      10
    ],
    [
      76.167,
      20
    ],
    [
      103.6,
      20
    ],
    [
      110.1,
      150
    ],
    [
      116.833,
      163
    ],
    [
      130.967,
      192
    ],
    [
      135.967,
      200
    ],
    [
      139.167,
      200
    ]
  ]
}
```

### cable-quantity (metric)
```json
{
  "id": "cable-quantity",
  "kind": "metric",
  "types": [
    "earth-web"
  ],
  "cases": [
    {
      "localEnd": 1.733,
      "props": {
        "top": "22%",
        "value": "600",
        "sub": "cables",
        "color": "#85dbff"
      }
    },
    {
      "localStart": 1.733,
      "props": {
        "top": "22%",
        "value": "99%",
        "sub": "of data between continents",
        "shadow": "0 0 16px #85dbff77,0 2px 4px #0009"
      }
    }
  ],
  "legacyStateNote": "Original Metric assigns invalid #fff77 text-shadow for white labels; Chrome retains preceding blue shadow in sequential playback. This explicit effective shadow reproduces that full-film appearance when seeking directly."
}
```

### slow-motion (static)
```json
{
  "id": "slow-motion",
  "kind": "static",
  "types": [
    "slowdown"
  ],
  "start": 17.1,
  "style": {
    "position": "absolute",
    "top": 236,
    "right": 130,
    "color": "#ffc52c",
    "fontSize": 80,
    "textShadow": "0 0 18px #ffc52c66"
  },
  "html": "750×"
}
```

### packet-quantity (packet-count)
```json
{
  "id": "packet-quantity",
  "kind": "packet-count",
  "types": [
    "packets"
  ],
  "start": 37.47,
  "end": 39.57,
  "enter": [
    37.47,
    37.72
  ],
  "opacityEnter": [
    37.47,
    37.53
  ],
  "exit": [
    39.43,
    39.57
  ],
  "value": "1,500",
  "unit": "packets"
}
```

### cable-label (static)
```json
{
  "id": "cable-label",
  "kind": "static",
  "types": [
    "hose"
  ],
  "style": {
    "position": "absolute",
    "left": 45,
    "top": 205,
    "fontSize": 31,
    "textShadow": "0 2px 5px #000"
  },
  "html": "Undersea cable"
}
```

### history-date (metric)
```json
{
  "id": "history-date",
  "kind": "metric",
  "types": [
    "ship"
  ],
  "props": {
    "top": "23%",
    "value": "1858",
    "sub": "first transatlantic telegraph cable",
    "size": 76
  }
}
```

### photo-leader (photo-leader)
```json
{
  "id": "photo-leader",
  "kind": "photo-leader",
  "types": [
    "earth-pacific"
  ],
  "after": 7.8,
  "stroke": "#ffd02c",
  "strokeWidth": 1.3
}
```

### photo-inset (image)
```json
{
  "id": "photo-inset",
  "kind": "image",
  "types": [
    "earth-pacific"
  ],
  "after": 7.8,
  "asset": "photo.jpg",
  "style": {
    "position": "absolute",
    "left": 474,
    "top": 551,
    "width": 170,
    "height": 170,
    "border": "3px solid #ffd02c",
    "borderRadius": 12,
    "overflow": "hidden",
    "boxShadow": "0 0 18px #ffd02c55"
  }
}
```

### light-speed (metric)
```json
{
  "id": "light-speed",
  "kind": "metric",
  "types": [
    "undersea"
  ],
  "start": 4.666666666666667,
  "end": 6.4,
  "props": {
    "top": "23%",
    "value": "200,000",
    "unit": "km/s",
    "color": "#ffc52c"
  }
}
```

### crossing-distance (metric)
```json
{
  "id": "crossing-distance",
  "kind": "metric",
  "types": [
    "crossing"
  ],
  "props": {
    "top": "23%",
    "value": "12,000",
    "unit": "km"
  }
}
```

### crossing-time (metric)
```json
{
  "id": "crossing-time",
  "kind": "metric",
  "types": [
    "crossing"
  ],
  "after": 108.1,
  "props": {
    "top": "36%",
    "value": "60",
    "unit": "ms",
    "color": "#88dcff"
  }
}
```

### arrival-count (arrival-count)
```json
{
  "id": "arrival-count",
  "kind": "arrival-count",
  "types": [
    "arrival",
    "sort",
    "retransmit"
  ],
  "settle": 2.6,
  "arrive": [
    0.3,
    1.8
  ],
  "received": 1497,
  "total": 1500,
  "retryEvery": 0.9,
  "retryCount": 3
}
```

### historical-time (metric)
```json
{
  "id": "historical-time",
  "kind": "metric",
  "types": [
    "earth-atlantic"
  ],
  "props": {
    "top": "42%",
    "value": "16",
    "unit": "hours"
  }
}
```

### historical-words (metric)
```json
{
  "id": "historical-words",
  "kind": "metric",
  "types": [
    "earth-atlantic"
  ],
  "localAfter": 1.4,
  "props": {
    "top": "53%",
    "value": "98",
    "unit": "words",
    "size": 70
  }
}
```

### modern-time (metric)
```json
{
  "id": "modern-time",
  "kind": "metric",
  "types": [
    "earth-pacific-return"
  ],
  "after": 147.5,
  "props": {
    "top": "61%",
    "value": "0.2",
    "unit": "s",
    "color": "#ffc82b"
  }
}
```

### photo-reassembly (photo-mosaic)
```json
{
  "id": "photo-reassembly",
  "kind": "photo-mosaic",
  "start": 133.7,
  "end": 135.967,
  "asset": "photo.jpg",
  "columns": 15,
  "rows": 15,
  "cell": 44,
  "cellSize": 44.3,
  "size": 660,
  "left": 30,
  "top": 190,
  "perspective": 1000,
  "revealStart": 133.7,
  "revealEnd": 134.8,
  "columnStartDelay": 0.016,
  "columnEndDelay": 0.01,
  "scatter": 35,
  "depth": -600,
  "rotation": 160
}
```

### captions (captions)
```json
{
  "id": "captions",
  "kind": "captions",
  "cues": [
    {
      "start": 0.0,
      "end": 1.5,
      "text": "Right now 4,000 meters"
    },
    {
      "start": 1.5,
      "end": 2.6,
      "text": "below the Pacific Ocean,"
    },
    {
      "start": 2.6,
      "end": 3.3,
      "text": "a beam of light"
    },
    {
      "start": 3.3,
      "end": 3.7,
      "text": "is traveling"
    },
    {
      "start": 3.7,
      "end": 4.6,
      "text": "towards Los Angeles"
    },
    {
      "start": 4.6,
      "end": 6.3,
      "text": "at 200,000 kilometers"
    },
    {
      "start": 6.3,
      "end": 7.0,
      "text": "per second."
    },
    {
      "start": 7.0,
      "end": 7.8,
      "text": "It is carrying a photo"
    },
    {
      "start": 7.8,
      "end": 9.3,
      "text": "that your mom just sent."
    },
    {
      "start": 9.3,
      "end": 10.0,
      "text": "From the moment"
    },
    {
      "start": 10.0,
      "end": 10.7,
      "text": "your mom's thumb"
    },
    {
      "start": 10.7,
      "end": 11.4,
      "text": "hit the send"
    },
    {
      "start": 11.4,
      "end": 11.8,
      "text": "to the moment"
    },
    {
      "start": 11.8,
      "end": 13.0,
      "text": "that your phone lights up,"
    },
    {
      "start": 13.0,
      "end": 15.0,
      "text": "only 200 milliseconds passes."
    },
    {
      "start": 15.0,
      "end": 16.1,
      "text": "Now let's slow down"
    },
    {
      "start": 16.1,
      "end": 17.3,
      "text": "that 200 milliseconds"
    },
    {
      "start": 17.3,
      "end": 18.4,
      "text": "750 times"
    },
    {
      "start": 18.4,
      "end": 19.3,
      "text": "so we can see everything"
    },
    {
      "start": 19.3,
      "end": 20.6,
      "text": "that happens to the photo."
    },
    {
      "start": 20.6,
      "end": 21.8,
      "text": "At 0 milliseconds,"
    },
    {
      "start": 21.8,
      "end": 22.9,
      "text": "the phone doesn't recognize"
    },
    {
      "start": 22.9,
      "end": 23.6,
      "text": "the photo."
    },
    {
      "start": 23.6,
      "end": 24.3,
      "text": "It only knows"
    },
    {
      "start": 24.3,
      "end": 25.6,
      "text": "ones and zeros."
    },
    {
      "start": 25.6,
      "end": 26.9,
      "text": "The phone converts the photo"
    },
    {
      "start": 26.9,
      "end": 28.0,
      "text": "into 16 million"
    },
    {
      "start": 28.0,
      "end": 28.8,
      "text": "ones and zeros"
    },
    {
      "start": 28.8,
      "end": 30.0,
      "text": "and encrypts its data."
    },
    {
      "start": 30.0,
      "end": 31.1,
      "text": "To anyone that tries"
    },
    {
      "start": 31.1,
      "end": 32.4,
      "text": "to intercept this data,"
    },
    {
      "start": 32.4,
      "end": 32.9,
      "text": "all they see"
    },
    {
      "start": 33.0,
      "end": 34.0,
      "text": "is random numbers."
    },
    {
      "start": 34.0,
      "end": 35.4,
      "text": "But this data is too big"
    },
    {
      "start": 35.4,
      "end": 36.5,
      "text": "to be sent in one go"
    },
    {
      "start": 36.5,
      "end": 37.2,
      "text": "so it is split"
    },
    {
      "start": 37.2,
      "end": 39.5,
      "text": "into 1,500 smaller packets"
    },
    {
      "start": 39.5,
      "end": 40.1,
      "text": "each labeled"
    },
    {
      "start": 40.1,
      "end": 40.7,
      "text": "with the address"
    },
    {
      "start": 40.7,
      "end": 41.9,
      "text": "and the packet's number."
    },
    {
      "start": 41.9,
      "end": 42.4,
      "text": "Remember those"
    },
    {
      "start": 42.4,
      "end": 43.1,
      "text": "packet numbers,"
    },
    {
      "start": 43.1,
      "end": 43.6,
      "text": "because your phone"
    },
    {
      "start": 43.6,
      "end": 44.2,
      "text": "is going to need them"
    },
    {
      "start": 44.2,
      "end": 44.967,
      "text": "at the end."
    },
    {
      "start": 45.167,
      "end": 46.4,
      "text": "At 3 milliseconds,"
    },
    {
      "start": 46.4,
      "end": 47.2,
      "text": "the packet leaves"
    },
    {
      "start": 47.2,
      "end": 47.8,
      "text": "your mom's phone"
    },
    {
      "start": 47.8,
      "end": 48.8,
      "text": "as radio waves"
    },
    {
      "start": 48.8,
      "end": 49.7,
      "text": "traveling through the air"
    },
    {
      "start": 49.7,
      "end": 50.7,
      "text": "into a cell tower"
    },
    {
      "start": 50.7,
      "end": 52.2,
      "text": "a few hundred meters away."
    },
    {
      "start": 52.2,
      "end": 53.1,
      "text": "The tower converts"
    },
    {
      "start": 53.1,
      "end": 54.4,
      "text": "radio waves into light"
    },
    {
      "start": 54.4,
      "end": 55.5,
      "text": "and sends that light"
    },
    {
      "start": 55.5,
      "end": 57.1,
      "text": "into a fiber optic cable."
    },
    {
      "start": 57.1,
      "end": 57.7,
      "text": "This next part"
    },
    {
      "start": 57.7,
      "end": 59.5,
      "text": "is the most impressive part."
    },
    {
      "start": 59.5,
      "end": 60.4,
      "text": "No machine knows"
    },
    {
      "start": 60.4,
      "end": 61.2,
      "text": "the complete path"
    },
    {
      "start": 61.2,
      "end": 62.2,
      "text": "that the packet will take."
    },
    {
      "start": 62.2,
      "end": 62.9,
      "text": "The packet moves"
    },
    {
      "start": 62.9,
      "end": 64.1,
      "text": "through a chain of routers"
    },
    {
      "start": 64.1,
      "end": 64.8,
      "text": "and each router"
    },
    {
      "start": 64.8,
      "end": 66.2,
      "text": "does only one thing,"
    },
    {
      "start": 66.2,
      "end": 67.3,
      "text": "which is to read the address"
    },
    {
      "start": 67.3,
      "end": 68.0,
      "text": "on a packet"
    },
    {
      "start": 68.0,
      "end": 69.2,
      "text": "and pass that packet on"
    },
    {
      "start": 69.2,
      "end": 70.2,
      "text": "to a nearby router"
    },
    {
      "start": 70.2,
      "end": 71.0,
      "text": "that is closer"
    },
    {
      "start": 71.0,
      "end": 72.4,
      "text": "to the destination."
    },
    {
      "start": 72.4,
      "end": 73.7,
      "text": "If one connection is broken"
    },
    {
      "start": 73.7,
      "end": 74.8,
      "text": "the router sends the packet"
    },
    {
      "start": 74.8,
      "end": 76.2,
      "text": "through a different connection."
    },
    {
      "start": 76.2,
      "end": 77.5,
      "text": "At 20 milliseconds,"
    },
    {
      "start": 77.5,
      "end": 78.8,
      "text": "the light enters a cable"
    },
    {
      "start": 78.8,
      "end": 79.8,
      "text": "that runs along the bottom"
    },
    {
      "start": 79.8,
      "end": 81.0,
      "text": "of the Pacific."
    },
    {
      "start": 81.0,
      "end": 82.2,
      "text": "That cable is only"
    },
    {
      "start": 82.2,
      "end": 83.0,
      "text": "about as thick"
    },
    {
      "start": 83.0,
      "end": 84.0,
      "text": "as a garden hose"
    },
    {
      "start": 84.0,
      "end": 84.9,
      "text": "and the glass fiber"
    },
    {
      "start": 84.9,
      "end": 85.7,
      "text": "inside the cable"
    },
    {
      "start": 85.7,
      "end": 87.4,
      "text": "is as thin as a human hair."
    },
    {
      "start": 87.4,
      "end": 89.1,
      "text": "About 600 cables like this"
    },
    {
      "start": 89.1,
      "end": 90.3,
      "text": "carry 99%"
    },
    {
      "start": 90.3,
      "end": 90.9,
      "text": "of all the data"
    },
    {
      "start": 90.9,
      "end": 91.6,
      "text": "that travels"
    },
    {
      "start": 91.6,
      "end": 92.8,
      "text": "between continents."
    },
    {
      "start": 92.8,
      "end": 93.5,
      "text": "Most people assume"
    },
    {
      "start": 93.5,
      "end": 94.1,
      "text": "that satellites"
    },
    {
      "start": 94.1,
      "end": 94.9,
      "text": "carry this data"
    },
    {
      "start": 94.9,
      "end": 96.5,
      "text": "but the cables actually do."
    },
    {
      "start": 96.5,
      "end": 97.3,
      "text": "Light fades"
    },
    {
      "start": 97.3,
      "end": 97.9,
      "text": "as it travels"
    },
    {
      "start": 97.9,
      "end": 98.5,
      "text": "through the glass"
    },
    {
      "start": 98.5,
      "end": 100.2,
      "text": "so every few dozen kilometers"
    },
    {
      "start": 100.2,
      "end": 101.3,
      "text": "a device called a repeater"
    },
    {
      "start": 101.3,
      "end": 103.6,
      "text": "makes the light strong again."
    },
    {
      "start": 103.6,
      "end": 104.4,
      "text": "With that help"
    },
    {
      "start": 104.4,
      "end": 105.6,
      "text": "the light travels across"
    },
    {
      "start": 105.6,
      "end": 107.0,
      "text": "12,000 kilometers"
    },
    {
      "start": 107.0,
      "end": 108.1,
      "text": "of dark ocean floor"
    },
    {
      "start": 108.1,
      "end": 110.2,
      "text": "in only 60 milliseconds."
    },
    {
      "start": 110.2,
      "end": 111.7,
      "text": "At 150 milliseconds"
    },
    {
      "start": 111.7,
      "end": 112.5,
      "text": "the light reaches"
    },
    {
      "start": 112.5,
      "end": 113.3,
      "text": "Los Angeles,"
    },
    {
      "start": 113.3,
      "end": 114.3,
      "text": "where it converts back"
    },
    {
      "start": 114.3,
      "end": 115.1,
      "text": "into radio waves"
    },
    {
      "start": 115.1,
      "end": 116.2,
      "text": "that travel through the air"
    },
    {
      "start": 116.2,
      "end": 117.0,
      "text": "to your phone."
    },
    {
      "start": 117.0,
      "end": 117.7,
      "text": "The packets arrive"
    },
    {
      "start": 117.7,
      "end": 118.4,
      "text": "in the wrong order"
    },
    {
      "start": 118.4,
      "end": 119.5,
      "text": "and three packets were lost"
    },
    {
      "start": 119.5,
      "end": 120.2,
      "text": "during the trip."
    },
    {
      "start": 120.2,
      "end": 120.7,
      "text": "This is where"
    },
    {
      "start": 120.7,
      "end": 122.2,
      "text": "the packet numbers matter."
    },
    {
      "start": 122.2,
      "end": 123.5,
      "text": "Your phone uses the number"
    },
    {
      "start": 123.5,
      "end": 124.4,
      "text": "to put the packets"
    },
    {
      "start": 124.4,
      "end": 125.2,
      "text": "back into order,"
    },
    {
      "start": 125.2,
      "end": 126.2,
      "text": "which shows your phone"
    },
    {
      "start": 126.2,
      "end": 127.4,
      "text": "exactly which three packets"
    },
    {
      "start": 127.4,
      "end": 127.9,
      "text": "are missing,"
    },
    {
      "start": 127.9,
      "end": 128.8,
      "text": "and your phone asks"
    },
    {
      "start": 128.8,
      "end": 129.5,
      "text": "your mom's phone"
    },
    {
      "start": 129.5,
      "end": 130.9,
      "text": "to send those three again."
    },
    {
      "start": 130.9,
      "end": 132.7,
      "text": "Once all 1,500 packets arrive,"
    },
    {
      "start": 132.7,
      "end": 133.6,
      "text": "your phone decrypts them"
    },
    {
      "start": 133.6,
      "end": 134.5,
      "text": "and puts the photo"
    },
    {
      "start": 134.5,
      "end": 135.4,
      "text": "back together."
    },
    {
      "start": 135.4,
      "end": 136.4,
      "text": "Your screen lights up"
    },
    {
      "start": 136.4,
      "end": 137.5,
      "text": "200 milliseconds"
    },
    {
      "start": 137.5,
      "end": 139.2,
      "text": "after your mom pressed send."
    },
    {
      "start": 139.2,
      "end": 140.3,
      "text": "In 1858"
    },
    {
      "start": 140.3,
      "end": 142.2,
      "text": "the first telegraph cable"
    },
    {
      "start": 142.2,
      "end": 143.5,
      "text": "took 16 hours"
    },
    {
      "start": 143.5,
      "end": 144.2,
      "text": "to send a message"
    },
    {
      "start": 144.2,
      "end": 145.8,
      "text": "of 98 words."
    },
    {
      "start": 145.8,
      "end": 146.5,
      "text": "Today a photo"
    },
    {
      "start": 146.5,
      "end": 147.5,
      "text": "crosses the Pacific"
    },
    {
      "start": 147.5,
      "end": 149.3,
      "text": "in 0.2 seconds."
    },
    {
      "start": 149.3,
      "end": 150.8,
      "text": "No country owns the internet"
    },
    {
      "start": 150.8,
      "end": 151.6,
      "text": "and no company"
    },
    {
      "start": 151.6,
      "end": 152.5,
      "text": "owns it either."
    },
    {
      "start": 152.5,
      "end": 153.2,
      "text": "The internet is"
    },
    {
      "start": 153.2,
      "end": 154.2,
      "text": "billions of machines"
    },
    {
      "start": 154.2,
      "end": 155.6,
      "text": "whose owners have never met"
    },
    {
      "start": 155.6,
      "end": 156.0,
      "text": "and every one"
    },
    {
      "start": 156.0,
      "end": 156.7,
      "text": "of those machines"
    },
    {
      "start": 156.7,
      "end": 158.2,
      "text": "follows the exact same agreement:"
    },
    {
      "start": 158.2,
      "end": 158.9,
      "text": "when a stranger's"
    },
    {
      "start": 158.9,
      "end": 159.8,
      "text": "packets arrive,"
    },
    {
      "start": 159.8,
      "end": 160.2,
      "text": "pass it on"
    },
    {
      "start": 160.2,
      "end": 161.7,
      "text": "to the next machine."
    }
  ],
  "highlight": "4,000|200,000|200 milliseconds|750 times|16 million|1,500|3 milliseconds|20 milliseconds|600|99%|12,000 kilometers|60 milliseconds|150 milliseconds|1858|16 hours|98 words|0.2 seconds"
}
```

## Render, media and provenance
```json
{
  "composition": {
    "id": "ProductionScriptReplay",
    "width": 720,
    "height": 1280,
    "fps": 30,
    "durationInFrames": 4865
  },
  "captureProfile": {
    "id": "a23-repeatable-angle-cpu2d-v1",
    "gl": "angle",
    "canvasProfile": "cpu-preserved",
    "workers": 1,
    "fromSurface": true,
    "browserSha256": "a6516527d27e69244beafc04f347fc90ef363c23598b951ae05fc96c999b7f54",
    "notes": "One sequential renderer page; all 2D contexts request willReadFrequently=true and WebGL2 contexts preserveDrawingBuffer=true. Authored scene code/clocks remain unchanged. Compare replay to repeated unchanged source under this declared profile; retain comparison to the original native-profile MP4 separately."
  },
  "render": {
    "dpr": 1.5,
    "fov": 46,
    "near": 0.01,
    "far": 1500,
    "exposure": 0.85,
    "clearColor": "#040a20",
    "background": "#020615",
    "environmentBlur": 0.04,
    "environmentIntensity": 0.25,
    "fogColor": 264997,
    "fogDensity": 0.004,
    "networkFogDensity": 0.009
  },
  "fonts": [
    {
      "family": "FilmCondensed",
      "asset": "title.ttf",
      "weight": "400"
    },
    {
      "family": "FilmBody",
      "asset": "body.ttf",
      "weight": "100 900"
    }
  ],
  "finish": {
    "bloom": 0.7,
    "grain": 0.075,
    "grainWindow": [
      37.4,
      41.8
    ],
    "grainRamp": [
      37.4,
      38
    ],
    "reducedGrain": 0.018
  },
  "audio": {
    "asset": "reference-audio.wav",
    "startFrame": 0,
    "gain": 1,
    "kind": "immutable mixed soundtrack",
    "stemsRecovered": false
  },
  "phone": {
    "photoAsset": "photo.jpg",
    "lockTime": "4:02",
    "chatTime": "7:02",
    "contact": "Mom",
    "date": "Thursday, October 8",
    "incoming": "Mom, what are you up to?",
    "outgoing": "Cooking. All your favorites.",
    "photoReveal": [
      1.65,
      2.15
    ],
    "press": [
      1.45,
      1.8
    ],
    "notification": [
      0.35,
      1.1
    ],
    "delivered": [
      2.15,
      2.5
    ]
  },
  "supplemental": {
    "retransmit": {
      "position": [
        0,
        7,
        -9
      ],
      "scale": 3.1,
      "rotation": [
        0.5,
        -2.1,
        -0.2
      ],
      "day": 0.38,
      "night": 0.92,
      "radius": 1.01,
      "width": 0.002,
      "progress": [
        0,
        2.8
      ],
      "color": "#88dfff",
      "glow": 1
    }
  },
  "referenceEvents": {
    "OPENING_TIMING": {
      "accelerate": 2.5,
      "accelerationEnd": 4,
      "pitchAt": 2.5,
      "pitchEnd": 3.25,
      "speedAt": 4.666666666666667,
      "speedEnd": 6.4
    },
    "EVENTS": [
      {
        "id": "undersea.bed",
        "what": "Deep underwater ambience",
        "sound": "underwater-deep",
        "gainDb": -27,
        "fr": 0,
        "dur": 205,
        "seconds": 0
      },
      {
        "id": "undersea.accelerate",
        "what": "Tracking camera and light accelerate",
        "sound": "light_zip",
        "gainDb": -20,
        "x": 0,
        "fr": 75,
        "dur": 45,
        "seconds": 2.5
      },
      {
        "id": "undersea.speed",
        "what": "Speed quantity appears and clears",
        "sound": "counter",
        "gainDb": -22,
        "fr": 140,
        "dur": 52,
        "seconds": 4.666666666666667
      },
      {
        "id": "globe.enter",
        "what": "Pull out from cable into Pacific route",
        "sound": "whoosh",
        "gainDb": -21,
        "fr": 205,
        "dur": 1,
        "seconds": 6.833333333333333
      },
      {
        "id": "phone.send",
        "what": "Photo leaves composer",
        "sound": "screen-tap",
        "gainDb": -20,
        "fr": 328,
        "dur": 1,
        "seconds": 10.933333333333334
      },
      {
        "id": "phone.receive",
        "what": "Receiver lock screen illuminates",
        "sound": "phone-vibrate-wood",
        "gainDb": -22,
        "fr": 365,
        "dur": 1,
        "seconds": 12.166666666666666
      },
      {
        "id": "time.slow",
        "what": "Time scale expands",
        "sound": "riser",
        "gainDb": -25,
        "fr": 459,
        "dur": 77,
        "seconds": 15.3
      },
      {
        "id": "photo.binary",
        "what": "Photo changes to individual bits",
        "sound": "data_chatter",
        "gainDb": -26,
        "fr": 611,
        "dur": 1,
        "seconds": 20.366666666666667
      },
      {
        "id": "data.lock",
        "what": "Lock engages",
        "sound": "padlock-close",
        "gainDb": -22,
        "fr": 870,
        "dur": 1,
        "seconds": 29
      },
      {
        "id": "data.split",
        "what": "Data divides into packets",
        "sound": "blade-slice",
        "gainDb": -22,
        "fr": 1093,
        "dur": 1,
        "seconds": 36.43333333333333
      },
      {
        "id": "packets.address",
        "what": "Address appears on packet",
        "sound": "rubber-stamp",
        "gainDb": -25,
        "fr": 1181,
        "dur": 1,
        "seconds": 39.36666666666667
      },
      {
        "id": "photo.reassemble",
        "what": "Photo pieces return to their image positions",
        "sound": "unscramble",
        "gainDb": -24,
        "fr": 4011,
        "dur": 35,
        "seconds": 133.7
      }
    ]
  },
  "assetManifest": [
    {
      "path": "Anton-OFL.txt",
      "sha256": "ee67e6ee22790b7929f1a3769ca2801d565c64b5a9096942c1adf5596de9c9e4",
      "bytes": 4484
    },
    {
      "path": "RobotoCondensed-OFL.txt",
      "sha256": "0e4cc6ece88573545be2ed25835363662a6182ba4a4c1b5c8feda52add30e8a6",
      "bytes": 4393
    },
    {
      "path": "body.ttf",
      "sha256": "dace262afcee68a5276f200d8026c57221735c0118ab5fda8c2c0d3dc409a8d0",
      "bytes": 371616
    },
    {
      "path": "caption.ttf",
      "sha256": "36958182a424e1e8a1307b2636a615a6323ce1bbfadda136735ab4fb3bd26ceb",
      "bytes": 212040
    },
    {
      "path": "earth_day.jpg",
      "sha256": "d2c7f0924a99a8a921c8534a0357c5f6b8a383a6669e74c2743a23555e9974a4",
      "bytes": 1021744
    },
    {
      "path": "earth_night.jpg",
      "sha256": "5180f849a47c6cb42e9c85b99544839491da2169954d44f4237e8319bc0ac958",
      "bytes": 591112
    },
    {
      "path": "photo.jpg",
      "sha256": "13ca3cebeed7eed27c2ab8e19585809d4d87f9f0cabb1e9235923bce21c7b13b",
      "bytes": 53122
    },
    {
      "path": "reference-audio.wav",
      "sha256": "160be1753d4a2babd50877e3daa4444e8f0b96261bb1d724bc73afd8e455a6c2",
      "bytes": 31136090
    },
    {
      "path": "ship/SOURCE.json",
      "sha256": "365d4bc564cb346042e137f4d3dc1c6ae39890d166903a096ca5cd2674d0ffaf",
      "bytes": 11619
    },
    {
      "path": "ship/ship_pinnace.bin",
      "sha256": "2066c551c756ca1bef9a03d8b2f7ee980b56f69eddf1682531899e9bcf2539db",
      "bytes": 7127428
    },
    {
      "path": "ship/ship_pinnace.gltf",
      "sha256": "668298cada1731ec93886bb7ec2f170bbbf45575d341b838a09580199fdf5ec5",
      "bytes": 17175
    },
    {
      "path": "ship/textures/ship_pinnace_aft_arm_1k.jpg",
      "sha256": "4ad6d2bf79e7e0aab89519543c65cf2a122ece1c940b7fd23846151131b1a061",
      "bytes": 553685
    },
    {
      "path": "ship/textures/ship_pinnace_aft_diff_1k.jpg",
      "sha256": "1f068682360f7f1a99bb8f6da817ef1264c8f648de505555eeff84d2c5b76c6a",
      "bytes": 659920
    },
    {
      "path": "ship/textures/ship_pinnace_aft_nor_gl_1k.jpg",
      "sha256": "927077bb68b306e5eac3c7aaabb5ea07b26d66b91b1efdfee2ea2c0ece4da053",
      "bytes": 728770
    },
    {
      "path": "ship/textures/ship_pinnace_deck_arm_1k.jpg",
      "sha256": "438d31dfa17b043242ec4984edbc719be217b5a42dfd05f28a670a862c123a9d",
      "bytes": 778067
    },
    {
      "path": "ship/textures/ship_pinnace_deck_diff_1k.jpg",
      "sha256": "24ff82bf815607a3f4376d0fdb8df2a70437e9d4df77a059da39d685de8837ec",
      "bytes": 739906
    },
    {
      "path": "ship/textures/ship_pinnace_deck_nor_gl_1k.jpg",
      "sha256": "1362d0b0e48a7ce8ebcb154fd1d366efff2ba62fbf6398e15a89240fa4c84c9f",
      "bytes": 530854
    },
    {
      "path": "ship/textures/ship_pinnace_details_arm_1k.jpg",
      "sha256": "e0f4f97183c5559fd549c3ef35385646d613acd666338c4062643d2890d3e73c",
      "bytes": 884789
    },
    {
      "path": "ship/textures/ship_pinnace_details_diff_1k.jpg",
      "sha256": "ef2359e86687fc4b5527ab622f9c7d787960cbe2d5ca56266b433ae42f678534",
      "bytes": 628000
    },
    {
      "path": "ship/textures/ship_pinnace_details_nor_gl_1k.jpg",
      "sha256": "d38b20a57225153d97214184893b4e785b9312f776556af2f297aa6a446fcb56",
      "bytes": 712283
    },
    {
      "path": "ship/textures/ship_pinnace_hull_arm_1k.jpg",
      "sha256": "938e234941aa39fc514f14025c4f1941fa5ab59f18b426f96b8e0057a7731c2b",
      "bytes": 686048
    },
    {
      "path": "ship/textures/ship_pinnace_hull_diff_1k.jpg",
      "sha256": "0fc6ae7bab8fb36aa3ae58bd5dc0d794854370b3be3ed72eb25c52f801877d00",
      "bytes": 602406
    },
    {
      "path": "ship/textures/ship_pinnace_hull_nor_gl_1k.jpg",
      "sha256": "0c303af6b5f28d0cd1d366e264cfbfb0021e4b297478e7f9948c0435ef7e2028",
      "bytes": 642694
    },
    {
      "path": "ship/textures/ship_pinnace_interior_arm_1k.jpg",
      "sha256": "0bd7db3c15984cd3abb63e3aa185f4e07132bc30a8e96d64a8070d4cff50e6f9",
      "bytes": 720399
    },
    {
      "path": "ship/textures/ship_pinnace_interior_diff_1k.jpg",
      "sha256": "82fcb97bf757f97ddba5a72e0ccee76a163a2f13e574b13f480d06bc1a8e8e57",
      "bytes": 720138
    },
    {
      "path": "ship/textures/ship_pinnace_interior_nor_gl_1k.jpg",
      "sha256": "47b7da411c5936c755e935f20f6480af0dd9e8bc6c47d1b16464014e15d733d9",
      "bytes": 365806
    },
    {
      "path": "ship/textures/ship_pinnace_rigging_arm_1k.jpg",
      "sha256": "86d7d6e3c8f2753db4fb22ad44cf52e361b858a4f3ad76c13435b8d385a2197e",
      "bytes": 700773
    },
    {
      "path": "ship/textures/ship_pinnace_rigging_diff_1k.jpg",
      "sha256": "8964c211b0462bc0546ad175cd492718b3a4019a47ae2c23c82eb824272c032a",
      "bytes": 669629
    },
    {
      "path": "ship/textures/ship_pinnace_rigging_nor_gl_1k.jpg",
      "sha256": "d6d895880d64043288771bfdf0db79511c2e5d4541fd60bc693a4464f826a763",
      "bytes": 713868
    },
    {
      "path": "ship/textures/ship_pinnace_sails_arm_1k.jpg",
      "sha256": "625a1a3e82d20ddba3ad6a05c5a9223ad0f1ab7690b04f1acec9be526a63a1df",
      "bytes": 531487
    },
    {
      "path": "ship/textures/ship_pinnace_sails_diff_1k.jpg",
      "sha256": "8aedb5c11ce8fec0ee9e2c369848e5fa3d41df299e1f886a25f0ae3b6587f5c0",
      "bytes": 593277
    },
    {
      "path": "ship/textures/ship_pinnace_sails_nor_gl_1k.jpg",
      "sha256": "f27589c79ebb986e865e4492506e4ce6633c2896a721f980734f159c13fd00ef",
      "bytes": 767155
    },
    {
      "path": "title.ttf",
      "sha256": "a4ba3a92350ebb031da0cb47630ac49eb265082ca1bc0450442f4a83ab947cab",
      "bytes": 170812
    }
  ],
  "documentationPolicy": {
    "camera": "Formula and source references in each recipe; captured per-frame camera track added after replay. Numeric coordinates are world units, offsets are delivered pixels.",
    "sound": "Immutable mixed soundtrack at exact native time. Named referenceEvents are proposed design cues, not claims of separated or audition-identified original effects. Full mixed sound remains replayable at every second.",
    "sources": "Construction described from active source; inactive alternatives are explicitly excluded in mapping evidence. Recipes plus pinned source define geometry, not prose alone."
  }
}
```
