import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SlideData } from '../types/presentation';
import { SlideArtwork } from './artwork/SlideArtworks';
import { formatTime } from '../utils/presentationLogic';
import {
  ChevronLeft,
  ChevronRight,
  Camera,
  Palette,
  Maximize2,
  X,
  BookOpen,
  ListFilter,
} from 'lucide-react';

interface SlideCanvasProps {
  currentSlide: SlideData;
  currentIndex: number;
  totalSlides: number;
  onNext: () => void;
  onPrev: () => void;
  onSelectSlide: (index: number) => void;
  isNotesOpen: boolean;
  onToggleNotes: () => void;
  timerSeconds: number;
  isTimerRunning: boolean;
  onToggleTimer: () => void;
  onResetTimer: () => void;
  textMode: 'speech' | 'summary';
  onToggleTextMode: () => void;
}

export const SlideCanvas: React.FC<SlideCanvasProps> = ({
  currentSlide,
  currentIndex,
  totalSlides,
  onNext,
  onPrev,
  onSelectSlide,
  timerSeconds,
  onToggleTimer,
  textMode,
  onToggleTextMode,
}) => {
  // Media view mode
  const [viewMode, setViewMode] = useState<'photo' | 'art'>('photo');
  const [isPhotoExpanded, setIsPhotoExpanded] = useState<boolean>(false);
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);

  // Clean the speech text of brackets for clean narrative display
  const cleanedSpeechParagraphs = currentSlide.speechText
    .split(/\n\s*\n/)
    .map((p) => p.replace(/\[[^\]]+\]/g, '').trim())
    .filter(Boolean);

  return (
    <div className="relative flex-1 flex flex-col justify-between p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto w-full select-none overflow-hidden">
      {/* Morphing Stage Card */}
      <motion.div
        layout
        layoutId="slide-card-stage"
        transition={{ type: 'spring', stiffness: 260, damping: 28 }}
        className="relative flex-1 flex flex-col justify-between bg-stone-900/90 border border-stone-800/80 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-xl overflow-hidden"
      >
        {/* Subtle decorative glow tied to current slide accent */}
        <div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-20 transition-all duration-700"
          style={{ backgroundColor: currentSlide.accentColor }}
        />
        <div
          className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-15 transition-all duration-700"
          style={{ backgroundColor: currentSlide.accentColor }}
        />

        {/* Top Metadata Strip */}
        <div className="flex items-center justify-between gap-4 pb-4 border-b border-stone-800/60 z-10">
          <div className="flex items-center gap-3 text-xs">
            {/* Morphing Slide Number Pill */}
            <motion.span
              layoutId="slide-number-badge"
              className="px-2.5 py-0.5 rounded-md bg-stone-800/90 text-amber-400 font-mono font-bold border border-stone-700/60"
            >
              0{currentSlide.slideNumber} / 0{totalSlides}
            </motion.span>
            <span className="text-stone-500 hidden sm:inline" aria-hidden="true">·</span>
            {/* Morphing Chapter & Era */}
            <motion.span
              layoutId="slide-chapter-tag"
              className="text-stone-300 uppercase tracking-widest font-semibold text-[11px]"
            >
              {currentSlide.chapter}
            </motion.span>
            <span className="text-stone-500 hidden md:inline" aria-hidden="true">·</span>
            <span className="text-stone-400 hidden md:inline font-mono text-[11px]">
              {currentSlide.era}
            </span>
          </div>

          {/* Presentation Mode Controls (Natural & Professional) */}
          <div className="flex items-center gap-2.5">
            {/* Natural View Toggle: Story narrative vs Highlights */}
            <div className="flex items-center p-0.5 rounded-lg bg-stone-950/80 border border-stone-800 text-xs">
              <button
                onClick={() => onToggleTextMode()}
                className={`px-2.5 py-1 rounded-md flex items-center gap-1.5 transition-all font-medium ${
                  textMode === 'summary'
                    ? 'bg-amber-600 text-stone-950 font-semibold shadow-sm'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
                title="View concise highlights"
                aria-label="View highlights"
              >
                <ListFilter className="w-3.5 h-3.5" />
                <span>Highlights</span>
              </button>
              <button
                onClick={() => onToggleTextMode()}
                className={`px-2.5 py-1 rounded-md flex items-center gap-1.5 transition-all font-medium ${
                  textMode === 'speech'
                    ? 'bg-amber-600 text-stone-950 font-semibold shadow-sm'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
                title="View full narrative story (Press S to toggle anytime)"
                aria-label="View story narrative"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Story</span>
              </button>
            </div>

            {/* Media Mode Toggle (Real Photo vs Art) */}
            <div className="hidden sm:flex items-center p-0.5 rounded-lg bg-stone-950/80 border border-stone-800 text-xs">
              <button
                onClick={() => setViewMode('photo')}
                className={`px-2 py-1 rounded-md flex items-center gap-1 transition-all font-medium ${
                  viewMode === 'photo'
                    ? 'bg-stone-800 text-stone-100 font-semibold'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
                title="View authentic real photo"
              >
                <Camera className="w-3.5 h-3.5" />
                <span className="hidden md:inline">Photo</span>
              </button>
              <button
                onClick={() => setViewMode('art')}
                className={`px-2 py-1 rounded-md flex items-center gap-1 transition-all font-medium ${
                  viewMode === 'art'
                    ? 'bg-stone-800 text-stone-100 font-semibold'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
                title="View artistic vector illustration"
              >
                <Palette className="w-3.5 h-3.5" />
                <span className="hidden md:inline">Art</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Content Split: Text Narrative (Left) + Media Container (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto py-4 z-10">
          {/* Left Column: Typography & Speech Narration (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-3"
              >
                {/* Headline */}
                <h1
                  className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-100 tracking-tight leading-tight"
                  style={{ textWrap: 'balance' }}
                >
                  {currentSlide.title}
                </h1>

                {/* Subtitle */}
                <p className="text-base sm:text-lg text-amber-400/90 font-serif italic">
                  {currentSlide.subtitle}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Dynamic View: Full Story Narrative (Read if you forget) OR Highlights View */}
            <AnimatePresence mode="wait">
              {textMode === 'speech' ? (
                /* FULL STORY NARRATIVE VIEW (Presents the exact speech words as an editorial narrative) */
                <motion.div
                  key={`speech-view-${currentSlide.id}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="p-5 rounded-2xl bg-stone-950/60 border border-stone-800/80 relative space-y-3"
                >
                  <div className="flex items-center justify-between text-xs text-amber-400/90 border-b border-stone-800/80 pb-2">
                    <span className="font-serif italic text-sm tracking-wide">
                      Narrative of Serampore
                    </span>
                    <span className="font-mono text-[11px] text-stone-500">
                      Oral Chronicle
                    </span>
                  </div>

                  {/* Clean, large, comfortable font-serif text that the presenter can read with a quick glance */}
                  <div className="space-y-3 max-h-[220px] overflow-y-auto pr-2">
                    {cleanedSpeechParagraphs.map((paragraph, idx) => (
                      <p
                        key={idx}
                        className="text-base sm:text-lg font-serif text-stone-100 leading-relaxed tracking-normal"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ) : (
                /* SUMMARY HIGHLIGHTS VIEW (Clean, executive presentation) */
                <motion.div
                  key={`summary-view-${currentSlide.id}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <p className="text-sm sm:text-base text-stone-300 leading-relaxed max-w-xl">
                    {currentSlide.tagline}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="space-y-2 pt-2 border-t border-stone-800/80">
                    {currentSlide.historicalHighlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm">
                        <span className="font-mono font-semibold text-amber-500 whitespace-nowrap min-w-[110px] pt-0.5">
                          {highlight.yearOrFact}
                        </span>
                        <span className="text-stone-300 leading-normal">
                          {highlight.description}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Speech Quote Card - Clean, no "Forgot Line" button */}
                  <motion.div
                    layout
                    layoutId="slide-speech-quote"
                    className="p-4 rounded-xl bg-stone-950/70 border border-stone-800/90 relative"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-xl text-amber-500/60 font-serif leading-none select-none">“</span>
                      <p className="text-xs sm:text-sm text-stone-200 font-serif italic leading-relaxed">
                        {currentSlide.quoteSnippet}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column: Media Container (Real Photo or Vector Art) (5 cols) */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <motion.div
              layout
              layoutId="slide-art-container"
              transition={{ type: 'spring', stiffness: 240, damping: 26 }}
              className="w-full aspect-[16/10] sm:aspect-[16/11] lg:aspect-[4/3] rounded-2xl overflow-hidden border border-stone-800/90 shadow-2xl relative group bg-stone-950"
            >
              <AnimatePresence mode="wait">
                {viewMode === 'photo' ? (
                  /* Real Photo View */
                  <motion.div
                    key={`photo-${currentSlide.id}`}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-full relative overflow-hidden"
                  >
                    <img
                      src={currentSlide.photoUrl}
                      alt={currentSlide.photoCaption}
                      referrerPolicy="no-referrer"
                      onLoad={() => setIsImageLoaded(true)}
                      className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${
                        isImageLoaded ? 'opacity-100' : 'opacity-80'
                      }`}
                    />

                    {/* Measured Scrim for Text Legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/30 to-transparent pointer-events-none" />

                    {/* Photo Tag & Zoom Button */}
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-md bg-stone-950/80 backdrop-blur-md text-[10px] font-mono font-semibold text-amber-400 border border-stone-700/80 shadow flex items-center gap-1.5">
                        <Camera className="w-3 h-3" />
                        <span>Real Photograph</span>
                      </span>
                    </div>

                    <button
                      onClick={() => setIsPhotoExpanded(true)}
                      className="absolute top-3 right-3 p-1.5 rounded-md bg-stone-950/80 backdrop-blur-md text-stone-300 hover:text-white border border-stone-700/80 opacity-0 group-hover:opacity-100 transition-opacity"
                      title="Expand photo to full size"
                      aria-label="Expand photo"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>

                    {/* Photo Caption & Archive Credit */}
                    <div className="absolute bottom-3 left-3 right-3 text-left pointer-events-none">
                      <p className="text-xs font-medium text-stone-100 line-clamp-1 drop-shadow-md">
                        {currentSlide.photoCaption}
                      </p>
                      <p className="text-[10px] font-mono text-stone-400 mt-0.5 drop-shadow">
                        {currentSlide.photoCredit}
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  /* Artistic Vector Illustration View */
                  <motion.div
                    key={`art-${currentSlide.artId}`}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.04 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-full relative"
                  >
                    <SlideArtwork artId={currentSlide.artId} className="w-full h-full" />
                    <div className="absolute bottom-2 right-3 px-2 py-0.5 rounded bg-stone-950/80 backdrop-blur-sm text-[10px] font-mono text-stone-400 border border-stone-800/60">
                      Illustration 0{currentSlide.slideNumber} · {currentSlide.chapter.split(':')[0]}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>

        {/* Bottom Slide Controller Bar (Clean, audience-ready presentation controls) */}
        <div className="flex items-center justify-between gap-4 pt-4 border-t border-stone-800/60 z-10">
          {/* Left: Slide Progress Dots */}
          <div className="flex items-center gap-2" role="tablist" aria-label="Slide Selector">
            {Array.from({ length: totalSlides }).map((_, idx) => {
              const isActive = currentIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => onSelectSlide(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    isActive ? 'w-8 bg-amber-500 shadow-sm shadow-amber-500/50' : 'w-2 bg-stone-700 hover:bg-stone-500'
                  }`}
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Jump to slide ${idx + 1}`}
                  title={`Slide ${idx + 1}`}
                />
              );
            })}
          </div>

          {/* Right: Navigation Action Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={onPrev}
              disabled={currentIndex === 0}
              className={`px-3.5 py-2 rounded-xl text-xs font-medium border flex items-center gap-1.5 transition-all ${
                currentIndex === 0
                  ? 'opacity-40 cursor-not-allowed border-stone-800 text-stone-600'
                  : 'bg-stone-800/90 text-stone-200 border-stone-700 hover:bg-stone-700 hover:text-stone-100 hover:border-stone-600'
              }`}
              aria-label="Previous slide"
              title="Previous slide (Left Arrow)"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            <button
              onClick={onNext}
              className={`px-5 py-2 rounded-xl text-xs font-semibold shadow-lg transition-all flex items-center gap-2 ${
                currentIndex === totalSlides - 1
                  ? 'bg-amber-600 text-stone-950 hover:bg-amber-500 shadow-amber-600/30'
                  : 'bg-stone-100 text-stone-900 hover:bg-white shadow-stone-900/50'
              }`}
              aria-label={currentIndex === totalSlides - 1 ? 'Finish presentation' : 'Next slide'}
              title="Next slide (Right Arrow or Space)"
            >
              <span>{currentIndex === totalSlides - 1 ? 'Conclude Speech' : 'Next Slide'}</span>
              <ChevronRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Clean Footer Bar With The Stealth Micro-Timer (Virtually invisible to audience, visible on close glance or hover) */}
      <div className="flex items-center justify-between text-[11px] text-stone-600 px-3 pt-3 select-none">
        <div className="font-serif italic text-stone-500">
          The Biography of a Place I Belong · Serampore
        </div>

        {/* ULTRA-STEALTH TIMER: blends into dark canvas (opacity-15), lights up when cursor hovers or clicked */}
        <div
          onClick={onToggleTimer}
          className="opacity-15 hover:opacity-100 transition-opacity duration-300 font-mono text-[10px] text-stone-500 hover:text-stone-300 flex items-center gap-1.5 cursor-pointer"
          title="Presenter timer: Click or press T to start/pause"
          aria-label="Stealth Presenter Stopwatch"
        >
          <span className="w-1 h-1 rounded-full bg-stone-600 inline-block" />
          <span>{formatTime(timerSeconds)}</span>
          <span className="text-stone-700">/ 3:30</span>
        </div>
      </div>

      {/* Photo Lightbox Dialog Modal */}
      {isPhotoExpanded && (
        <div
          className="fixed inset-0 z-50 bg-stone-950/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setIsPhotoExpanded(false)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsPhotoExpanded(false)}
              className="absolute -top-12 right-0 p-2 text-stone-400 hover:text-white rounded-lg hover:bg-stone-800 transition-colors"
              aria-label="Close photo preview"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={currentSlide.photoUrl}
              alt={currentSlide.photoCaption}
              className="max-w-full max-h-[75vh] object-contain rounded-xl border border-stone-800 shadow-2xl"
            />
            <div className="mt-4 text-center space-y-1">
              <h3 className="text-base font-serif font-bold text-stone-100">
                {currentSlide.photoCaption}
              </h3>
              <p className="text-xs font-mono text-stone-400">
                {currentSlide.photoCredit} · Slide {currentSlide.slideNumber}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
