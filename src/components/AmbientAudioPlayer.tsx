import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export const AmbientAudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const timerRef = useRef<number | null>(null);

  const startRiverAmbient = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      // Master gain
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.04, ctx.currentTime);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // Pink/Brown noise generator for gentle water ripples
      const bufferSize = ctx.sampleRate * 2;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        output[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
        output[i] *= 0.11;
        b6 = white * 0.115926;
      }

      const whiteNoise = ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      // Bandpass filter to sculpt water waves
      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(380, ctx.currentTime);
      filter.Q.setValueAtTime(1.2, ctx.currentTime);

      // Low frequency oscillator for wave swells
      const lfo = ctx.createOscillator();
      lfo.frequency.setValueAtTime(0.18, ctx.currentTime); // Wave swell every ~5s
      const lfoGain = ctx.createGain();
      lfoGain.gain.setValueAtTime(140, ctx.currentTime);

      lfo.connect(lfoGain);
      lfoGain.connect(filter.frequency);

      whiteNoise.connect(filter);
      filter.connect(masterGain);

      whiteNoise.start();
      lfo.start();

      setIsPlaying(true);
    } catch {
      // AudioContext policy or fallback
      setIsPlaying(false);
    }
  };

  const stopRiverAmbient = () => {
    if (audioCtxRef.current) {
      if (gainNodeRef.current) {
        gainNodeRef.current.gain.setTargetAtTime(0, audioCtxRef.current.currentTime, 0.2);
      }
      setTimeout(() => {
        audioCtxRef.current?.close();
        audioCtxRef.current = null;
      }, 300);
    }
    if (timerRef.current) {
      window.clearInterval(timerRef.current);
    }
    setIsPlaying(false);
  };

  const toggleAudio = () => {
    if (isPlaying) {
      stopRiverAmbient();
    } else {
      startRiverAmbient();
    }
  };

  useEffect(() => {
    return () => {
      stopRiverAmbient();
    };
  }, []);

  return (
    <button
      onClick={toggleAudio}
      className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all flex items-center gap-1.5 shrink-0 ${
        isPlaying
          ? 'bg-amber-950/40 text-amber-300 border-amber-600/50'
          : 'bg-stone-800/80 text-stone-400 border-stone-700/60 hover:text-stone-200 hover:border-stone-600'
      }`}
      title={isPlaying ? 'Mute river water ambient audio' : 'Play peaceful Hooghly river water ambient sound'}
      aria-label={isPlaying ? 'Mute river ambient sound' : 'Play river ambient sound'}
    >
      {isPlaying ? <Volume2 className="w-3.5 h-3.5 text-amber-400" /> : <VolumeX className="w-3.5 h-3.5" />}
      <span className="hidden sm:inline">{isPlaying ? 'River Ambience' : 'Ambience'}</span>
    </button>
  );
};
