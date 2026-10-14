from pathlib import Path
import json,sys,hashlib,subprocess
import numpy as np
from scipy.io import wavfile
r=Path(__file__).resolve().parents[2];sys.path.insert(0,str(r/'audio'))
from dsp import SR,put
import designed as fx
s=json.loads((r/'production-script/visual-direction-v5/film.production.json').read_text());n=round(s['composition']['durationInFrames']/30*SR)
assert hashlib.sha256((r/'audio/brian.mp3').read_bytes()).hexdigest()==s['voiceSha256']
rate,voice=wavfile.read(r/'audio/narration.wav');assert rate==SR
rate,music=wavfile.read(r/'audio/music.wav');assert rate==SR
v=np.zeros(n,dtype=np.float32);v[:min(n,len(voice))]=voice[:n];bed=np.zeros((n,2),dtype=np.float32);bed[:min(n,len(music))]=music[:n];eff=np.zeros_like(bed);cues=[]
events={e['id']:e for e in s['events']}
for i,cue in enumerate(s['visualDirection']['soundCues']):
 e=events[cue['event']];typ=cue['type'];fn={'tick':lambda:fx.tick(.65),'ready':lambda:fx.chime('C5',.55),'latch':lambda:fx.thud(150,.19),'servo':lambda:fx.whoosh(.43,140,1600,seed=180+i),'zip':lambda:fx.whoosh(.4,250,2800,seed=180+i),'fill':lambda:fx.thud(160,.23)}[typ]
 wav=fn();peak=cue['gain'];at=(e[cue['boundary']]+cue['offset'])/30;put(eff,wav/max(np.abs(wav).max(),1e-7),at,peak);cues.append(dict(event=e['id'],frame=round(at*30),sound=typ))
rms=np.sqrt(np.convolve(v[::480]**2,np.ones(17)/17,mode='same'));duck=np.interp(np.arange(n),np.arange(len(rms))*480,np.where(rms>.015,.65,1));eff*=duck[:,None]
folder=r/'audio/visual-direction-v5';folder.mkdir(exist_ok=True);wavfile.write(folder/'effects.wav',SR,eff);wavfile.write(folder/'mix.wav',SR,bed+eff+np.column_stack([v,v]));subprocess.run(['ffmpeg','-v','error','-n','-i',str(folder/'mix.wav'),'-af','loudnorm=I=-16:TP=-1.5:LRA=9','-ar',str(SR),'-c:a','pcm_s16le',str(r/'public/cinematic-master-v5.wav')],check=True)
(folder/'receipt.json').write_text(json.dumps(dict(voiceFile='audio/brian.mp3',voiceSha256=s['voiceSha256'],processedVoiceSha256=hashlib.sha256((r/'audio/narration.wav').read_bytes()).hexdigest(),unchangedVoice=True,pitch=1,rate=1,newSoundEvents=cues,masterSha256=hashlib.sha256((r/'public/cinematic-master-v5.wav').read_bytes()).hexdigest()),indent=2)+'\n');print('Mixed unchanged voice/music with',len(cues),'new visual-event cues')
