import { PragmaticAnalysis } from '../types';

// Helper (calculateFormality)
function calculateTextFormality(text: string): number {
  if (!text.trim()) return 0.5; // Neutral default
  const formalWords = /(therefore|however|furthermore|regarding|pursuant|henceforth|notwithstanding|shall|hereby)/ig;
  const informalWords = /(gonna|wanna|hey|yeah|ok|lol|btw| ASAP | FYI )/ig; // Added spaces for ASAP/FYI

  const formalCount = (text.match(formalWords) || []).length;
  const informalCount = (text.match(informalWords) || []).length;

  if (formalCount + informalCount === 0) return 0.5; // Neutral if no markers
  // More formal words shift towards 1, more informal towards 0
  return 0.5 + (formalCount - informalCount) / (formalCount + informalCount) * 0.5;
}

// Helper (calculateDirectness)
function calculateTextDirectness(text: string): number {
  if (!text.trim()) return 0.5; // Neutral default
  // Direct markers: imperative verbs, direct questions.
  const directMarkers = /^(do|give|show|tell|make|explain|answer( me)?)|\?$/ig;
  // Indirect markers: hedging, politeness phrases.
  const indirectMarkers = /(perhaps|maybe|could you|would you|might I suggest|if you don't mind|please consider)/ig;

  const directCount = (text.match(directMarkers) || []).length;
  const indirectCount = (text.match(indirectMarkers) || []).length;

  if (directCount + indirectCount === 0) return 0.5;
  return directCount / (directCount + indirectCount);
}

// Helper (calculateCertainty)
function calculateTextCertainty(text: string): number {
  if (!text.trim()) return 0.5; // Neutral default
  const certainWords = /(definitely|certainly|absolutely|clearly|obviously|undoubtedly|always|never|is|are|will)/ig;
  const uncertainWords = /(maybe|perhaps|possibly|might|could|probably|suggests|seems|appears|I think|I believe)/ig;

  const certainCount = (text.match(certainWords) || []).length;
  const uncertainCount = (text.match(uncertainWords) || []).length;

  if (certainCount + uncertainCount === 0) return 0.5;
  return 0.5 + (certainCount - uncertainCount) / (certainCount + uncertainCount) * 0.5;
}

export function analyzePragmatic(text: string): PragmaticAnalysis {
  const trimmedText = text.trim();
  return {
    formality: calculateTextFormality(trimmedText),
    directness: calculateTextDirectness(trimmedText),
    certainty: calculateTextCertainty(trimmedText),
  };
}
