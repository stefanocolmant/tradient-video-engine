// OpenAI text-to-speech (gpt-4o-mini-tts) and Whisper word timestamps. Needs OPENAI_API_KEY in .env.
import fs from 'node:fs';
import {loadEnv} from '../lib/env.mjs';

export const DEFAULT_VOICE = 'ash';
const INSTRUCT = 'Narrate like a sharp, warm documentary host on a short social video: natural, confident, conversational, clear emphasis on key words, no sing-song.';

export async function speak(text, {voice = DEFAULT_VOICE, speed = 1, instructions = INSTRUCT} = {}) {
  const key = loadEnv().OPENAI_API_KEY;
  if (!key) throw new Error('Add OPENAI_API_KEY=... to the .env file first.');
  const res = await fetch('https://api.openai.com/v1/audio/speech', {
    method: 'POST',
    headers: {Authorization: `Bearer ${key}`, 'Content-Type': 'application/json'},
    body: JSON.stringify({model: 'gpt-4o-mini-tts', voice, input: text, instructions, response_format: 'wav', ...(speed !== 1 ? {speed} : {})}),
  });
  if (!res.ok) throw new Error(`OpenAI said ${res.status}: ${(await res.text()).slice(0, 300)}`);
  return {wav: Buffer.from(await res.arrayBuffer()), label: `OpenAI gpt-4o-mini-tts ${voice}`, sent: text.length};
}

export async function transcribeWords(file) {
  const key = loadEnv().OPENAI_API_KEY;
  if (!key) return null;
  const form = new FormData();
  form.append('file', new Blob([fs.readFileSync(file)]), 'voice.wav');
  form.append('model', 'whisper-1');
  form.append('response_format', 'verbose_json');
  form.append('timestamp_granularities[]', 'word');
  const res = await fetch('https://api.openai.com/v1/audio/transcriptions', {method: 'POST', headers: {Authorization: `Bearer ${key}`}, body: form});
  if (!res.ok) throw new Error(`Whisper said ${res.status}: ${(await res.text()).slice(0, 200)}`);
  const j = await res.json();
  return (j.words ?? []).map((w) => ({word: w.word, start: w.start, end: w.end}));
}
