import React, { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX, Sparkles } from "lucide-react";

export const AmbientMusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const intervalRef = useRef<number | null>(null);

  // Generative dreamy chords in D-major / F# minor pentatonic for romantic & mature atmosphere
  // Notes: D4, F#4, A4, C#5, E5, F#5, A5
  const frequencies = [293.66, 369.99, 440.0, 554.37, 659.25, 739.99, 880.0];

  const playTone = (freq: number, duration: number, delay: number = 0) => {
    if (!audioCtxRef.current) return;
    const ctx = audioCtxRef.current;

    setTimeout(() => {
      if (!audioCtxRef.current || audioCtxRef.current.state !== "running") return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      // Soft envelope
      gain.gain.setValueAtTime(0.0001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.045, ctx.currentTime + 0.6);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + duration + 0.1);
    }, delay * 1000);
  };

  const startChords = () => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioCtxRef.current = new AudioCtx();
    }

    if (audioCtxRef.current.state === "suspended") {
      audioCtxRef.current.resume();
    }

    // Play initial gentle arpeggio
    const chordPattern = [
      [293.66, 440.0, 554.37], // D major 7
      [246.94, 369.99, 440.0], // B min 7
      [369.99, 440.0, 659.25], // F# min 7
      [329.63, 440.0, 554.37], // A / E
    ];

    let chordIdx = 0;

    const playNext = () => {
      const chord = chordPattern[chordIdx % chordPattern.length];
      chord.forEach((freq, idx) => {
        playTone(freq, 4.5, idx * 0.4);
      });
      // occasional high star shimmer
      if (Math.random() > 0.4) {
        const starFreq = frequencies[Math.floor(Math.random() * frequencies.length)] * 1.5;
        playTone(starFreq, 3.0, 1.6);
      }
      chordIdx++;
    };

    playNext();
    intervalRef.current = window.setInterval(playNext, 4600);
  };

  const stopChords = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const toggleSound = () => {
    setHasInteracted(true);
    if (!isPlaying) {
      startChords();
      setIsPlaying(true);
    } else {
      stopChords();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    return () => {
      stopChords();
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {!hasInteracted && (
        <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-[#fae8c8]/70 bg-[#0c111a]/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#d4af37]/20 shadow-lg animate-pulse">
          <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" /> Sottofondo d'atmosfera
        </span>
      )}
      <button
        onClick={toggleSound}
        aria-label={isPlaying ? "Disattiva audio" : "Attiva audio d'atmosfera"}
        className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-[#0c111a]/90 text-[#fae8c8] border border-[#d4af37]/40 shadow-[0_4px_20px_rgba(0,0,0,0.6)] backdrop-blur-md hover:border-[#d4af37] hover:scale-105 active:scale-95 transition-all duration-300"
      >
        <span className="absolute inset-0 rounded-full bg-[#d4af37]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        {isPlaying ? (
          <Volume2 className="w-5 h-5 text-[#d4af37] animate-pulse" />
        ) : (
          <VolumeX className="w-5 h-5 text-[#9ba3b4] group-hover:text-[#fae8c8]" />
        )}
      </button>
    </div>
  );
};
