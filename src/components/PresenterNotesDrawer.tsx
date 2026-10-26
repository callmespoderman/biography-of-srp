import React, { useState, useEffect, useRef } from 'react';
import { SlideData } from '../types/presentation';
import { parseSpeechCues, estimateSpeakingDuration, formatTime } from '../utils/presentationLogic';
import { Play, Square, Timer, RotateCcw, Copy, Check, Sparkles, Volume2, X } from 'lucide-react';

interface PresenterNotesDrawerProps {
  currentSlide: SlideData;
  isOpen: boolean;
  onClose: () => void;
  fullSpeechRaw: string;
  timerSeconds: number;
  isTimerRunning: boolean;
  onToggleTimer: () => void;
  onResetTimer: () => void;
}

export const PresenterNotesDrawer: React.FC<PresenterNotesDrawerProps> = ({
  currentSlide,
  isOpen,
  onClose,
  fullSpeechRaw,
  timerSeconds,
  isTimerRunning,
  onToggleTimer,
  onResetTimer,
}) => {
  const [activeTab, setActiveTab] = useState<'slide' | 'full'>('slide');
  const [copied, setCopied] = useState<boolean>(false);

  // Speech synthesis practice
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [speechRate, setSpeechRate] = useState<number>(0.95);
  const synthRef = useRef<SpeechSynthesis | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      synthRef.current = window.speechSynthesis;
    }
  }, []);

  // Rehearsal Read Aloud
  const handleReadAloud = () => {
    if (!synthRef.current) return;

    if (isSpeaking) {
      synthRef.current.cancel();
      setIsSpeaking(false);
      return;
    }

    const textToRead = activeTab === 'slide' ? currentSlide.speechText : fullSpeechRaw;
    // Clean out stage instructions
    const cleanSpoken = textToRead.replace(/\[[^\]]+\]/g, ' ... ').trim();

    const utterance = new SpeechSynthesisUtterance(cleanSpoken);
    utterance.rate = speechRate;
    utterance.pitch = 1.0;

    utterance.onend = () => {
      setIsSpeaking(false);
    };
    utterance.onerror = () => {
      setIsSpeaking(false);
    };

    synthRef.current.cancel();
    synthRef.current.speak(utterance);
    setIsSpeaking(true);
  };

  const stopReadAloud = () => {
    if (synthRef.current) {
      synthRef.current.cancel();
    }
    setIsSpeaking(false);
  };

  const copyToClipboard = async () => {
    const text = activeTab === 'slide' ? currentSlide.speechText : fullSpeechRaw;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  const slideDuration = estimateSpeakingDuration(currentSlide.speechText);
  const fullDuration = estimateSpeakingDuration(fullSpeechRaw);
  const speechSegments = parseSpeechCues(currentSlide.speechText);

  if (!isOpen) return null;

  return (
    <aside
      className="fixed inset-y-0 right-0 w-full sm:w-[480px] lg:w-[540px] z-50 bg-stone-900/98 backdrop-blur-xl border-l border-stone-800 shadow-2xl flex flex-col text-stone-200 transition-all"
      aria-label="Presenter Notes & Rehearsal Companion"
    >
      {/* Header bar */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-stone-800 bg-stone-950/60">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-sm font-semibold text-stone-100">Presenter Notes & Rehearsal</h2>
            <p className="text-xs text-stone-400">Speech companion for tomorrow’s presentation</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-1.5 rounded-lg text-stone-400 hover:text-stone-100 hover:bg-stone-800 transition-colors"
          aria-label="Close presenter notes"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Presentation Stopwatch Ribbon */}
      <div className="flex items-center justify-between px-6 py-3 bg-stone-950/40 border-b border-stone-800/80">
        <div className="flex items-center gap-2 text-stone-300">
          <Timer className="w-4 h-4 text-amber-400" />
          <span className="text-xs text-stone-400 uppercase tracking-wider font-mono">Timer:</span>
          <span className="font-mono text-base font-bold text-amber-300 tabular-nums">
            {formatTime(timerSeconds)}
          </span>
          <span className="text-xs text-stone-500 font-mono">
            / est. {activeTab === 'slide' ? slideDuration.formattedDuration : fullDuration.formattedDuration}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onToggleTimer}
            className={`px-3 py-1 text-xs font-medium rounded-md transition-all flex items-center gap-1.5 ${
              isTimerRunning
                ? 'bg-amber-600 text-stone-950 font-semibold shadow-sm'
                : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
            }`}
          >
            {isTimerRunning ? <Square className="w-3 h-3 fill-current" /> : <Play className="w-3 h-3 fill-current" />}
            <span>{isTimerRunning ? 'Pause' : 'Start'}</span>
          </button>
          <button
            onClick={onResetTimer}
            className="p-1 text-xs text-stone-400 hover:text-stone-200 transition-colors"
            title="Reset stopwatch"
            aria-label="Reset stopwatch"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center justify-between px-6 pt-3 pb-2 border-b border-stone-800/60 bg-stone-900/60">
        <div className="flex items-center gap-1 p-0.5 bg-stone-950/60 rounded-lg border border-stone-800">
          <button
            onClick={() => setActiveTab('slide')}
            className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
              activeTab === 'slide'
                ? 'bg-amber-600/20 text-amber-300 border border-amber-600/30'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            Current Slide ({currentSlide.slideNumber}/6)
          </button>
          <button
            onClick={() => setActiveTab('full')}
            className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
              activeTab === 'full'
                ? 'bg-amber-600/20 text-amber-300 border border-amber-600/30'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            Complete Speech
          </button>
        </div>

        {/* Read Aloud Practice Button */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleReadAloud}
            className={`px-2.5 py-1 text-xs font-medium rounded-md border flex items-center gap-1.5 transition-all ${
              isSpeaking
                ? 'bg-rose-950/60 text-rose-300 border-rose-600 animate-pulse'
                : 'bg-stone-800/80 text-stone-300 border-stone-700 hover:border-stone-500'
            }`}
            title="Practice rehearsing with speech synthesis read-aloud"
          >
            <Volume2 className="w-3.5 h-3.5" />
            <span>{isSpeaking ? 'Stop Audio' : 'Rehearse Audio'}</span>
          </button>

          <button
            onClick={copyToClipboard}
            className="p-1.5 text-stone-400 hover:text-stone-200 transition-colors"
            title="Copy speech to clipboard"
            aria-label="Copy speech text"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto px-6 py-5 space-y-6">
        {activeTab === 'slide' ? (
          <>
            {/* Stage Guidance Card */}
            <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-800/40 space-y-2">
              <span className="text-xs uppercase tracking-wider text-amber-400 font-semibold">
                Stage Cues for Slide {currentSlide.slideNumber}
              </span>
              <ul className="space-y-1.5">
                {currentSlide.stageCues.map((cue, idx) => (
                  <li key={idx} className="text-xs text-stone-300 flex items-start gap-2">
                    <span className="text-amber-500 mt-0.5">•</span>
                    <span>{cue}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Script with Highlighted Stage Directions */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-stone-400">
                <span className="uppercase tracking-wider font-semibold">Spoken Script</span>
                <span>
                  Words: ~{slideDuration.wordSeconds > 0 ? Math.round(slideDuration.wordSeconds * 2.1) : 0} · Pause buffer:{' '}
                  {slideDuration.pauseSeconds}s
                </span>
              </div>

              <div className="p-4 rounded-xl bg-stone-950/60 border border-stone-800/80 space-y-3 leading-relaxed">
                {speechSegments.map((segment, idx) => {
                  if (segment.type === 'cue') {
                    const isSmile = segment.cueType === 'smile';
                    return (
                      <div
                        key={idx}
                        className={`inline-block my-1 px-2.5 py-1 rounded text-xs font-semibold ${
                          isSmile
                            ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                            : 'bg-sky-500/20 text-sky-300 border border-sky-500/40'
                        }`}
                      >
                        ⚡ [{segment.text}]
                      </div>
                    );
                  }
                  return (
                    <p key={idx} className="text-sm lg:text-base text-stone-100 font-serif leading-relaxed">
                      {segment.text}
                    </p>
                  );
                })}
              </div>
            </div>

            {/* Speaking Pacing Tips */}
            <div className="p-4 rounded-xl bg-stone-950/40 border border-stone-800/60 space-y-2 text-xs text-stone-400">
              <span className="font-semibold text-stone-300">💡 Presentation Day Tips</span>
              <p>
                Take a deep breath at every <span className="text-sky-300">[Pause]</span>. Look at different sections
                of the classroom. When describing the river ghat, soften your voice to create an authentic sense of
                peace.
              </p>
            </div>
          </>
        ) : (
          /* Full Transcript Tab */
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs text-stone-400">
              <span className="uppercase tracking-wider font-semibold">Full Speech Transcript</span>
              <span>Total Estimated Time: {fullDuration.formattedDuration}</span>
            </div>

            <div className="p-5 rounded-xl bg-stone-950/80 border border-stone-800 text-sm font-serif leading-loose text-stone-200 whitespace-pre-line space-y-4">
              {fullSpeechRaw}
            </div>
          </div>
        )}
      </div>

      {/* Audio speech speed slider if reading aloud */}
      {isSpeaking && (
        <div className="px-6 py-2 bg-stone-950/80 border-t border-stone-800 flex items-center justify-between text-xs text-stone-400">
          <span>Speed: {speechRate}x</span>
          <div className="flex items-center gap-2">
            {[0.8, 0.95, 1.1].map((rate) => (
              <button
                key={rate}
                onClick={() => setSpeechRate(rate)}
                className={`px-2 py-0.5 rounded text-xs ${
                  speechRate === rate ? 'bg-amber-600 text-stone-950 font-bold' : 'bg-stone-800 text-stone-300'
                }`}
              >
                {rate}x
              </button>
            ))}
          </div>
          <button onClick={stopReadAloud} className="text-rose-400 hover:underline">
            Stop Audio
          </button>
        </div>
      )}

      {/* Footer hint */}
      <div className="px-6 py-3 border-t border-stone-800 bg-stone-950/90 text-xs text-stone-500 flex items-center justify-between">
        <span>Press <kbd className="px-1.5 py-0.5 bg-stone-800 text-stone-300 rounded font-mono text-[10px]">P</kbd> to toggle notes</span>
        <span>Use <kbd className="px-1.5 py-0.5 bg-stone-800 text-stone-300 rounded font-mono text-[10px]">Space</kbd> or <kbd className="px-1.5 py-0.5 bg-stone-800 text-stone-300 rounded font-mono text-[10px]">ArrowRight</kbd> to advance</span>
      </div>
    </aside>
  );
};
