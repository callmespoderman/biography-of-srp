import { SpeechSegment, StageCueType } from '../types/presentation';

/**
 * Calculates pure word count excluding stage directions in brackets
 */
export function calculateWordCount(text: string): number {
  if (!text) return 0;
  // Strip stage instructions like [Smile] or [Pause]
  const cleaned = text.replace(/\[[^\]]+\]/g, ' ').trim();
  const words = cleaned.split(/\s+/).filter(Boolean);
  return words.length;
}

/**
 * Estimates speaking duration in seconds based on words per minute (WPM)
 * and adding pause buffers for stage cues.
 * Default average presentation speech rate for students is 120-130 WPM.
 */
export function estimateSpeakingDuration(
  text: string,
  wordsPerMinute: number = 125
): {
  totalSeconds: number;
  wordSeconds: number;
  pauseSeconds: number;
  formattedDuration: string;
} {
  const wordCount = calculateWordCount(text);
  const wordSeconds = Math.round((wordCount / Math.max(wordCount > 0 ? 1 : 1, wordsPerMinute)) * 60);

  // Count [Pause] and [Smile] occurrences
  const pauseMatches = (text.match(/\[pause\]/gi) || []).length;
  const smileMatches = (text.match(/\[smile[^\]]*\]/gi) || []).length;

  const pauseSeconds = pauseMatches * 3 + smileMatches * 2;
  const totalSeconds = wordSeconds + pauseSeconds;

  return {
    totalSeconds,
    wordSeconds,
    pauseSeconds,
    formattedDuration: formatTime(totalSeconds),
  };
}

/**
 * Formats seconds into mm:ss
 */
export function formatTime(seconds: number): string {
  const safeSec = Math.max(0, Math.floor(seconds));
  const mins = Math.floor(safeSec / 60);
  const secs = safeSec % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

/**
 * Parses a speech transcript with bracketed cues [Pause], [Smile]
 * into structured text and cue segments for teleprompter rendering.
 */
export function parseSpeechCues(rawText: string): SpeechSegment[] {
  if (!rawText) return [];

  const segments: SpeechSegment[] = [];
  const regex = /\[(.*?)\]/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(rawText)) !== null) {
    // Add text preceding the cue
    if (match.index > lastIndex) {
      const textPiece = rawText.substring(lastIndex, match.index).trim();
      if (textPiece) {
        segments.push({ type: 'speech', text: textPiece });
      }
    }

    const cueContent = match[1].trim();
    const lower = cueContent.toLowerCase();
    let cueType: StageCueType = 'gesture';

    if (lower.includes('smile') || lower.includes('look')) {
      cueType = 'smile';
    } else if (lower.includes('pause')) {
      cueType = 'pause';
    }

    segments.push({
      type: 'cue',
      text: cueContent,
      cueType,
    });

    lastIndex = regex.lastIndex;
  }

  // Add remaining trailing text
  if (lastIndex < rawText.length) {
    const remaining = rawText.substring(lastIndex).trim();
    if (remaining) {
      segments.push({ type: 'speech', text: remaining });
    }
  }

  return segments;
}

/**
 * Calculate bounded next/prev slide indices
 */
export function getNextSlideIndex(current: number, total: number, loop: boolean = false): number {
  if (total <= 0) return 0;
  if (current >= total - 1) {
    return loop ? 0 : total - 1;
  }
  return current + 1;
}

export function getPrevSlideIndex(current: number, total: number, loop: boolean = false): number {
  if (total <= 0) return 0;
  if (current <= 0) {
    return loop ? total - 1 : 0;
  }
  return current - 1;
}
