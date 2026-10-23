// ElevenLabs text-to-speech with character timestamps (exact word timings, no recogniser needed).
// Needs ELEVENLABS_API_KEY in .env. Voice: an ID from your ElevenLabs Voice Library.
import {loadEnv} from '../lib/env.mjs';

export const DEFAULT_VOICE = 'nPczCjzI2devNBz1zQrb'; // "Brian", a premade ElevenLabs voice (the house narrator)

export async function speak(text, {voice = DEFAULT_VOICE, model = 'eleven_multilingual_v2', speed = 1} = {}) {
  const key = loadEnv().ELEVENLABS_API_KEY;
  if (!key) throw new Error('Add ELEVENLABS_API_KEY=... to the .env file first (elevenlabs.io > Profile > API keys).');
  const res = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voice}/with-timestamps?output_format=mp3_44100_128`, {
    method: 'POST',
    headers: {'xi-api-key': key, 'Content-Type': 'application/json'},
    body: JSON.stringify({text, model_id: model, voice_settings: {stability: 0.45, similarity_boost: 0.8, style: 0.15, use_speaker_boost: true, speed}}),
  });
  if (!res.ok) throw new Error(`ElevenLabs said ${res.status}: ${(await res.text()).slice(0, 300)}`);
  const j = await res.json();
  const a = j.alignment ?? j.normalized_alignment;
  return {mp3: Buffer.from(j.audio_base64, 'base64'), chars: a.characters, starts: a.character_start_times_seconds, ends: a.character_end_times_seconds, label: `ElevenLabs ${voice} ${model}`, sent: text.length};
}

// Character timings -> word timings for the words of `text`.
export function charsToWords(chars, starts, ends) {
  const words = [];
  let cur = null;
  for (let i = 0; i < chars.length; i++) {
    const c = chars[i];
    if (/\s/.test(c)) { if (cur) { words.push(cur); cur = null; } continue; }
    if (!cur) cur = {word: '', start: starts[i], end: ends[i]};
    cur.word += c; cur.end = ends[i];
  }
  if (cur) words.push(cur);
  return words;
}
