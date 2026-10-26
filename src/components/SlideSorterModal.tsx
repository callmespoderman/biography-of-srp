import React from 'react';
import { SLIDES } from '../data/presentationData';
import { X, Check, Camera } from 'lucide-react';

interface SlideSorterModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentIndex: number;
  onSelectSlide: (index: number) => void;
}

export const SlideSorterModal: React.FC<SlideSorterModalProps> = ({
  isOpen,
  onClose,
  currentIndex,
  onSelectSlide,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-5xl bg-stone-900 border border-stone-800 rounded-2xl shadow-2xl p-6 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-label="Slide Overview & Sorter"
      >
        <div className="flex items-center justify-between pb-4 border-b border-stone-800">
          <div>
            <h2 className="text-lg font-serif font-bold text-stone-100">Presentation Slide Overview</h2>
            <p className="text-xs text-stone-400">Authentic photographic deck of Serampore · Select any slide to jump</p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-stone-100 hover:bg-stone-800 transition-colors"
            aria-label="Close slide overview"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-6 pb-2 overflow-y-auto">
          {SLIDES.map((slide, idx) => {
            const isSelected = currentIndex === idx;
            return (
              <button
                key={slide.id}
                onClick={() => {
                  onSelectSlide(idx);
                  onClose();
                }}
                className={`group relative text-left rounded-xl p-3 border transition-all flex flex-col gap-2.5 ${
                  isSelected
                    ? 'bg-amber-950/30 border-amber-500 shadow-lg shadow-amber-500/10 ring-1 ring-amber-500/50'
                    : 'bg-stone-950/60 border-stone-800 hover:border-stone-700 hover:bg-stone-800/40'
                }`}
              >
                {/* Real Photo Thumbnail */}
                <div className="w-full h-32 sm:h-36 rounded-lg overflow-hidden bg-stone-950 relative border border-stone-800/60">
                  <img
                    src={slide.photoUrl}
                    alt={slide.photoCaption}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent pointer-events-none" />

                  <span className="absolute top-2 left-2 px-2 py-0.5 rounded bg-stone-900/90 text-[10px] font-mono font-bold text-amber-400 border border-stone-800 flex items-center gap-1">
                    <Camera className="w-2.5 h-2.5" />
                    <span>Slide {slide.slideNumber}</span>
                  </span>

                  {isSelected && (
                    <span className="absolute top-2 right-2 p-1 rounded-full bg-amber-500 text-stone-950 shadow">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </span>
                  )}

                  <div className="absolute bottom-2 left-2 right-2 text-[10px] text-stone-300 font-mono line-clamp-1">
                    {slide.photoCaption}
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-1">
                  <div className="text-[11px] uppercase tracking-wider text-amber-500 font-semibold">
                    {slide.chapter}
                  </div>
                  <h3 className="text-sm font-serif font-bold text-stone-200 line-clamp-1 group-hover:text-amber-300 transition-colors">
                    {slide.title}
                  </h3>
                  <p className="text-xs text-stone-400 line-clamp-2 leading-relaxed">
                    {slide.tagline}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        <div className="pt-4 border-t border-stone-800 flex items-center justify-between text-xs text-stone-500">
          <span>6 Slides · Real Archival Photography · Speaking Duration ~3.5 minutes</span>
          <span className="font-mono text-[11px]">Press Esc or O to close</span>
        </div>
      </div>
    </div>
  );
};
