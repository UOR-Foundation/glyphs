import { SemanticAnalysis } from '../types';

// Helper function (originally extractConcepts)
function extractTextConcepts(text: string): string[] {
  if (!text.trim()) return [];
  // Simplified concept extraction: look for capitalized words or words after 'the' (very naive)
  const properNouns = text.match(/\b[A-Z][a-z]+\b/g) || [];
  // Further refine or use a more sophisticated method if needed
  return Array.from(new Set(properNouns)).slice(0, 5); // Limit to 5 unique concepts
}

// Helper function (originally calculateAbstractionLevel)
function calculateTextAbstractionLevel(text: string): number {
  if (!text.trim()) return 0;
  const abstractWords = /(concept|idea|theory|principle|abstract|meta|pattern|system)/ig;
  const concreteWords = /(table|chair|car|house|tree|person|thing|object)/ig;

  const abstractCount = (text.match(abstractWords) || []).length;
  const concreteCount = (text.match(concreteWords) || []).length;

  if (abstractCount + concreteCount === 0) return 0.5; // Neutral if no keywords
  return abstractCount / Math.max(1, abstractCount + concreteCount);
}

export function analyzeSemantic(text: string): SemanticAnalysis {
  const trimmedText = text.trim();
  const words = trimmedText ? trimmedText.toLowerCase().split(/\s+/) : [];
  const uniqueWords = new Set(words);

  return {
    density: uniqueWords.size / Math.max(1, words.length),
    concepts: extractTextConcepts(trimmedText),
    abstraction: calculateTextAbstractionLevel(trimmedText),
  };
}
