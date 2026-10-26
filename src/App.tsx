import React, { useState, useEffect, useCallback } from 'react';
import { SLIDES, FULL_SPEECH_RAW } from './data/presentationData';
import { getNextSlideIndex, getPrevSlideIndex } from './utils/presentationLogic';
import { PresentationHeader } from './components/PresentationHeader';
import { SlideCanvas } from './components/SlideCanvas';
import { PresenterNotesDrawer } from './components/PresenterNotesDrawer';
import { SlideSorterModal } from './components/SlideSorterModal';

export default function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [isNotesOpen, setIsNotesOpen] = useState<boolean>(false);
  const [isOverviewOpen, setIsOverviewOpen] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  // Global Presentation Stopwatch Timer (synced across bottom bar and presenter drawer)
  const [timerSeconds, setTimerSeconds] = useState<number>(0);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);

  // Text Display Mode: 'summary' (Key highlights) vs 'speech' (Prompter lines to read if you forget)
  const [textMode, setTextMode] = useState<'speech' | 'summary'>('summary');

  const currentSlide = SLIDES[currentSlideIndex];

  // Presentation stopwatch counter
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning]);

  const toggleTimer = useCallback(() => {
    setIsTimerRunning((prev) => !prev);
  }, []);

  const resetTimer = useCallback(() => {
    setIsTimerRunning(false);
    setTimerSeconds(0);
  }, []);

  const toggleTextMode = useCallback(() => {
    setTextMode((prev) => (prev === 'speech' ? 'summary' : 'speech'));
  }, []);

  const handleNext = useCallback(() => {
    setCurrentSlideIndex((prev) => getNextSlideIndex(prev, SLIDES.length, false));
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentSlideIndex((prev) => getPrevSlideIndex(prev, SLIDES.length, false));
  }, []);

  const handleSelectSlide = useCallback((index: number) => {
    if (index >= 0 && index < SLIDES.length) {
      setCurrentSlideIndex(index);
    }
  }, []);

  const toggleNotes = useCallback(() => {
    setIsNotesOpen((prev) => !prev);
  }, []);

  const toggleOverview = useCallback(() => {
    setIsOverviewOpen((prev) => !prev);
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
      setIsFullscreen(false);
    }
  }, []);

  // Listen for fullscreen change events
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  // Keyboard navigation shortcuts for presentation day
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      switch (e.key) {
        case 'ArrowRight':
        case ' ': // Spacebar
        case 'PageDown':
          e.preventDefault();
          handleNext();
          break;
        case 'ArrowLeft':
        case 'PageUp':
          e.preventDefault();
          handlePrev();
          break;
        case 's':
        case 'S':
          e.preventDefault();
          toggleTextMode();
          break;
        case 't':
        case 'T':
          e.preventDefault();
          toggleTimer();
          break;
        case 'p':
        case 'P':
          e.preventDefault();
          toggleNotes();
          break;
        case 'o':
        case 'O':
          e.preventDefault();
          toggleOverview();
          break;
        case 'f':
        case 'F':
          e.preventDefault();
          toggleFullscreen();
          break;
        case 'Escape':
          if (isOverviewOpen) setIsOverviewOpen(false);
          if (isNotesOpen) setIsNotesOpen(false);
          break;
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
          e.preventDefault();
          handleSelectSlide(parseInt(e.key, 10) - 1);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleNext, handlePrev, toggleNotes, toggleOverview, toggleFullscreen, toggleTextMode, toggleTimer, isOverviewOpen, isNotesOpen, handleSelectSlide]);

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col font-sans selection:bg-amber-600/30 selection:text-amber-200">
      {/* 3-Zone Header Contract */}
      <PresentationHeader
        currentSlideIndex={currentSlideIndex}
        onSelectSlide={handleSelectSlide}
        onToggleNotes={toggleNotes}
        isNotesOpen={isNotesOpen}
        onToggleOverview={toggleOverview}
        isFullscreen={isFullscreen}
        onToggleFullscreen={toggleFullscreen}
      />

      {/* Main Slide Deck Canvas */}
      <main className="flex-1 flex flex-col justify-center items-center w-full">
        <SlideCanvas
          currentSlide={currentSlide}
          currentIndex={currentSlideIndex}
          totalSlides={SLIDES.length}
          onNext={handleNext}
          onPrev={handlePrev}
          onSelectSlide={handleSelectSlide}
          isNotesOpen={isNotesOpen}
          onToggleNotes={toggleNotes}
          timerSeconds={timerSeconds}
          isTimerRunning={isTimerRunning}
          onToggleTimer={toggleTimer}
          onResetTimer={resetTimer}
          textMode={textMode}
          onToggleTextMode={toggleTextMode}
        />
      </main>

      {/* Presenter Notes & Speech Rehearsal Drawer */}
      <PresenterNotesDrawer
        currentSlide={currentSlide}
        isOpen={isNotesOpen}
        onClose={() => setIsNotesOpen(false)}
        fullSpeechRaw={FULL_SPEECH_RAW}
        timerSeconds={timerSeconds}
        isTimerRunning={isTimerRunning}
        onToggleTimer={toggleTimer}
        onResetTimer={resetTimer}
      />

      {/* Slide Sorter / Overview Modal */}
      <SlideSorterModal
        isOpen={isOverviewOpen}
        onClose={() => setIsOverviewOpen(false)}
        currentIndex={currentSlideIndex}
        onSelectSlide={handleSelectSlide}
      />
    </div>
  );
}
