export type StageCueType = 'smile' | 'pause' | 'gesture' | 'look';

export interface StageCue {
  type: StageCueType;
  label: string;
  instruction: string;
}

export interface SpeechSegment {
  type: 'speech' | 'cue';
  text: string;
  cueType?: StageCueType;
}

export interface SlideData {
  id: string;
  slideNumber: number;
  chapter: string;
  era: string;
  title: string;
  subtitle: string;
  tagline: string;
  speechText: string;
  keyPoints: string[];
  historicalHighlights: {
    yearOrFact: string;
    description: string;
  }[];
  quoteSnippet: string;
  accentColor: string;
  bgGradient: string;
  artId: 'cover' | 'danish' | 'college' | 'festival' | 'ghat' | 'epilogue';
  photoUrl: string;
  photoCaption: string;
  photoCredit: string;
  stageCues: string[];
}
