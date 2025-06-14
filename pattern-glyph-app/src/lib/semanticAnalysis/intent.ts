import { IntentAnalysis, IntentPrimary } from '../types';

// Helper function (originally calculateIntentStrength)
function calculateTextIntentStrength(text: string): number {
  if (!text.trim()) return 0;
  const strongMarkers = /!|must|need|urgent|important|critical|please/ig;
  // Normalize: e.g. 3 strong markers = full strength
  return Math.min(1, (text.match(strongMarkers) || []).length / 3);
}

// Helper function (originally calculateUrgency)
function calculateTextUrgency(text: string): number {
  if (!text.trim()) return 0;
  const urgentWords = /(now|immediately|urgent|asap|quick|hurry|fast)/ig;
  return (text.match(urgentWords) || []).length > 0 ? 1 : 0;
}

export function analyzeIntent(text: string): IntentAnalysis {
  const trimmedText = text.trim();
  let primary: IntentPrimary = 'neutral';

  if (/[?]|^(what|when|where|who|why|how|is|are|can|could|would)/i.test(trimmedText)) {
    primary = 'question';
  } else if (/^(please|do|make|create|show|tell|give)/i.test(trimmedText) || /!$/.test(trimmedText)) {
    // Simplified: ! at end is more likely exclamation, but original combined it.
    // For now, keeping similar logic: if it has an imperative verb or ends with !, it's a command.
    // This might need refinement as ! is ambiguous.
     if (!/!$/.test(trimmedText) || /^(please|do|make|create|show|tell|give)/i.test(trimmedText)) {
        primary = 'command';
     } else {
        primary = 'exclamation';
     }
  } else if (trimmedText.includes('!') && !(/^(please|do|make|create|show|tell|give)/i.test(trimmedText))) {
    primary = 'exclamation';
  } else if (trimmedText.length > 0) { // If not a question, command or exclamation, it's a statement
    primary = 'statement';
  }

  // If it was only an exclamation mark and no other strong indicators, set to exclamation.
  if (primary === 'command' && /!$/.test(trimmedText) && !(/^(please|do|make|create|show|tell|give)/i.test(trimmedText))) {
      primary = 'exclamation';
  }


  return {
    primary,
    strength: calculateTextIntentStrength(trimmedText),
    urgency: calculateTextUrgency(trimmedText),
  };
}
