import React from 'react';
import { SLIDES } from '../data/presentationData';
import { AmbientAudioPlayer } from './AmbientAudioPlayer';
import { Maximize2, Minimize2, FileText, LayoutGrid } from 'lucide-react';

interface PresentationHeaderProps {
  currentSlideIndex: number;
  onSelectSlide: (index: number) => void;
  onToggleNotes: () => void;
  isNotesOpen: boolean;
  onToggleOverview: () => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
}

export const PresentationHeader: React.FC<PresentationHeaderProps> = ({
  currentSlideIndex,
  onSelectSlide,
  onToggleNotes,
  isNotesOpen,
  onToggleOverview,
  isFullscreen,
  onToggleFullscreen,
}) => {
  return (
    <header className="w-full flex items-center justify-between gap-6 px-6 py-3.5 border-b border-stone-800/80 bg-stone-950/70 backdrop-blur-md sticky top-0 z-40 select-none">
      {/* Zone 1: Brand Wordmark (Single text element) */}
      <div className="flex items-center gap-3 shrink-0">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            onSelectSlide(0);
          }}
          className="text-base sm:text-lg font-serif font-bold tracking-tight text-stone-100 hover:text-amber-400 transition-colors whitespace-nowrap"
        >
          Serampore
        </a>
        <span className="hidden md:inline text-xs text-stone-500 font-serif italic">
          — A Biography of Belonging
        </span>
      </div>

      {/* Zone 2: Navigation Links for Presentation Chapters */}
      <nav className="hidden lg:flex items-center gap-5 text-xs font-medium text-stone-400" aria-label="Slide Chapters">
        {SLIDES.map((slide, idx) => {
          const isActive = currentSlideIndex === idx;
          const shortNames = ['Prologue', 'Danish Era', 'Education & Press', 'Rath Yatra', 'River Ghat', 'Epilogue'];
          return (
            <button
              key={slide.id}
              onClick={() => onSelectSlide(idx)}
              className={`relative py-1 transition-colors whitespace-nowrap shrink-0 ${
                isActive ? 'text-amber-300 font-semibold' : 'hover:text-stone-200'
              }`}
            >
              <span>{shortNames[idx]}</span>
              {isActive && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-400 rounded-full" />
              )}
            </button>
          );
        })}
      </nav>

      {/* Zone 3: Presentation Controls */}
      <div className="flex items-center gap-2 sm:gap-3 shrink-0">
        {/* River ambient sound */}
        <AmbientAudioPlayer />

        {/* Slide Overview Sorter */}
        <button
          onClick={onToggleOverview}
          className="p-2 text-stone-400 hover:text-stone-200 hover:bg-stone-800/80 rounded-lg transition-colors"
          title="Slide Sorter / Grid Overview (O)"
          aria-label="View all slides in a grid"
        >
          <LayoutGrid className="w-4 h-4" />
        </button>

        {/* Fullscreen Button */}
        <button
          onClick={onToggleFullscreen}
          className="p-2 text-stone-400 hover:text-stone-200 hover:bg-stone-800/80 rounded-lg transition-colors hidden sm:inline-flex"
          title={isFullscreen ? 'Exit Fullscreen (F)' : 'Enter Fullscreen (F)'}
          aria-label={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
        >
          {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
        </button>

        {/* Primary CTA: Presenter Notes */}
        <button
          onClick={onToggleNotes}
          className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
            isNotesOpen
              ? 'bg-amber-600 text-stone-950 font-semibold shadow-md shadow-amber-600/20'
              : 'bg-stone-800 text-stone-200 hover:bg-stone-700 hover:text-stone-100'
          }`}
          aria-label="Toggle speaker notes and teleprompter"
        >
          <FileText className="w-3.5 h-3.5" />
          <span>{isNotesOpen ? 'Notes Open' : 'Speaker Notes'}</span>
        </button>
      </div>
    </header>
  );
};
