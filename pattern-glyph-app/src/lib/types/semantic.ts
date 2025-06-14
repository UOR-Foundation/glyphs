export interface LinguisticAnalysis {
  length: number;
  words: number;
  sentences: number;
  avgWordLength: number;
  complexity: number; // 0-1
}

export interface SemanticAnalysis {
  density: number; // 0-1
  concepts: string[];
  abstraction: number; // 0-1
}

export type IntentPrimary = 'question' | 'command' | 'statement' | 'exclamation' | 'neutral';
export interface IntentAnalysis {
  primary: IntentPrimary;
  strength: number; // 0-1
  urgency: number; // 0 or 1
}

export type EmotionalTone = 'positive' | 'negative' | 'neutral';
export interface EmotionalAnalysis {
  tone: EmotionalTone;
  intensity: number; // 0-1 (overall emotional content)
  valence: number; // -1 to 1 (negativity/positivity balance)
}

export interface ContextAnalysis {
  temporal: boolean;
  spatial: boolean;
  personal: boolean;
  abstract: boolean;
}

export interface PragmaticAnalysis {
  formality: number; // 0-1
  directness: number; // 0-1
  certainty: number; // 0-1
}

export interface SemanticLayers {
  linguistic: LinguisticAnalysis;
  semantic: SemanticAnalysis;
  intent: IntentAnalysis;
  emotional: EmotionalAnalysis;
  context: ContextAnalysis;
  pragmatic: PragmaticAnalysis;
}
