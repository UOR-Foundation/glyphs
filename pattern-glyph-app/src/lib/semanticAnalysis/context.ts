import { ContextAnalysis } from '../types';

export function analyzeContext(text: string): ContextAnalysis {
  const trimmedText = text.trim();
  return {
    temporal: /today|tomorrow|yesterday|now|then|soon|later|time|date|year|month|day|hour|minute|second/i.test(trimmedText),
    spatial: /here|there|where|above|below|near|far|location|place|space|position|map|area/i.test(trimmedText),
    personal: /I |me|my|you|your|we|our|they|their|he|she|him|her|his|hers|themselves|myself|yourself/i.test(trimmedText),
    abstract: /concept|idea|theory|meaning|purpose|reason|abstract|spiritual|metaphysical|philosophical/i.test(trimmedText),
  };
}
