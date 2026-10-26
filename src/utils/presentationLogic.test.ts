import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateWordCount,
  estimateSpeakingDuration,
  formatTime,
  parseSpeechCues,
  getNextSlideIndex,
  getPrevSlideIndex,
} from './presentationLogic';

test('calculateWordCount strips bracketed cues and counts spoken words accurately', () => {
  assert.equal(calculateWordCount(''), 0);
  
  const textWithCues = '[Smile and look at the audience] Good morning respected teachers and my dear friends.';
  // "Good morning respected teachers and my dear friends." = 8 words
  assert.equal(calculateWordCount(textWithCues), 8);

  const textWithMultiplePauses = 'Today is a good day. [Pause] Serampore is beautiful. [Pause]';
  // "Today is a good day. Serampore is beautiful." = 8 words
  assert.equal(calculateWordCount(textWithMultiplePauses), 8);
});

test('estimateSpeakingDuration accounts for speaking rate and pauses', () => {
  // 125 words at 125 WPM should be 60 seconds with 0 cues
  const hundredWords = Array(125).fill('word').join(' ');
  const est = estimateSpeakingDuration(hundredWords, 125);
  assert.equal(est.wordSeconds, 60);
  assert.equal(est.pauseSeconds, 0);
  assert.equal(est.totalSeconds, 60);
  assert.equal(est.formattedDuration, '1:00');

  // Text with 2 pauses (2 * 3s = 6s) and 1 smile (2s) -> 8s total pause buffer
  const speechText = 'Hello everyone. [Pause] Thank you. [Pause] We did it. [Smile]';
  const estWithPauses = estimateSpeakingDuration(speechText, 125);
  assert.equal(estWithPauses.pauseSeconds, 8);
});

test('formatTime formats seconds into zero-padded mm:ss', () => {
  assert.equal(formatTime(0), '0:00');
  assert.equal(formatTime(9), '0:09');
  assert.equal(formatTime(65), '1:05');
  assert.equal(formatTime(215), '3:35');
});

test('parseSpeechCues correctly segments transcript into speech and stage directions', () => {
  const script = '[Smile and look at the audience] Good morning respected teachers. [Pause] Serampore is my home.';
  const segments = parseSpeechCues(script);

  assert.equal(segments.length, 4);
  assert.equal(segments[0].type, 'cue');
  assert.equal(segments[0].cueType, 'smile');
  assert.equal(segments[0].text, 'Smile and look at the audience');

  assert.equal(segments[1].type, 'speech');
  assert.equal(segments[1].text, 'Good morning respected teachers.');

  assert.equal(segments[2].type, 'cue');
  assert.equal(segments[2].cueType, 'pause');
  assert.equal(segments[2].text, 'Pause');

  assert.equal(segments[3].type, 'speech');
  assert.equal(segments[3].text, 'Serampore is my home.');
});

test('getNextSlideIndex and getPrevSlideIndex respect bounds and loop settings', () => {
  assert.equal(getNextSlideIndex(0, 6, false), 1);
  assert.equal(getNextSlideIndex(5, 6, false), 5); // clamped
  assert.equal(getNextSlideIndex(5, 6, true), 0);  // loop

  assert.equal(getPrevSlideIndex(0, 6, false), 0); // clamped
  assert.equal(getPrevSlideIndex(0, 6, true), 5);  // loop
  assert.equal(getPrevSlideIndex(3, 6, false), 2);
});
