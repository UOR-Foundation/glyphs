import { LinguisticAnalysis } from '../types';

// Helper function (originally calculateComplexity)
function calculateTextComplexity(text: string): number {
  if (!text.trim()) return 0;
  const words = text.split(/\s+/);
  const avgLength = words.reduce((sum, w) => sum + w.length, 0) / Math.max(1, words.length);
  // Normalize complexity: 0 to 1 (e.g. considering an average word length of 10 as complex)
  return Math.min(1, avgLength / 10);
}

export function analyzeLinguistic(text: string): LinguisticAnalysis {
  const trimmedText = text.trim();
  const words = trimmedText ? trimmedText.split(/\s+/) : [];
  const sentences = trimmedText ? trimmedText.split(/[.!?]+/).filter(s => s.trim()) : [];

  return {
    length: trimmedText.length,
    words: words.length,
    sentences: sentences.length,
    avgWordLength: trimmedText.length / Math.max(1, words.length),
    complexity: calculateTextComplexity(trimmedText),
  };
}
