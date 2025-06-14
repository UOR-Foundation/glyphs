import { EmotionalAnalysis, EmotionalTone } from '../types';

export function analyzeEmotional(text: string): EmotionalAnalysis {
  const trimmedText = text.trim();
  if (!trimmedText) {
    return { tone: 'neutral', intensity: 0, valence: 0 };
  }

  const positiveRegex = /(happy|good|great|love|wonderful|amazing|beautiful|excellent|joy|positive|success)/ig;
  const negativeRegex = /(sad|bad|hate|terrible|awful|horrible|ugly|worst|fear|negative|failure)/ig;

  const positiveCount = (trimmedText.match(positiveRegex) || []).length;
  const negativeCount = (trimmedText.match(negativeRegex) || []).length;

  let tone: EmotionalTone = 'neutral';
  if (positiveCount > negativeCount) {
    tone = 'positive';
  } else if (negativeCount > positiveCount) {
    tone = 'negative';
  }

  const totalWords = Math.max(1, trimmedText.split(/\s+/).length);
  const intensity = (positiveCount + negativeCount) / totalWords;
  // Normalize intensity to be between 0 and 1, e.g. if 20% of words are emotional.
  const normalizedIntensity = Math.min(1, intensity / 0.2);

  const totalEmotionalWords = positiveCount + negativeCount;
  const valence = totalEmotionalWords === 0 ? 0 : (positiveCount - negativeCount) / totalEmotionalWords;

  return {
    tone,
    intensity: normalizedIntensity,
    valence,
  };
}
