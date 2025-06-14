import { SemanticLayers, IntentPrimary, EmotionalTone } from './semantic';

export type PatternStream = number[]; // Array of byte values

export interface ActiveConstantInfo {
  index: number;
  value: number;
  name: string; // Or a more specific ConstantName type if preferred
}

export interface GlyphRenderOptions {
  width: number;
  height: number;
  semanticLayers: SemanticLayers;
}

// For data embedded in the glyph image
export interface EmbeddedGlyphData {
  textLength: number;
  semanticBytes: Uint8Array; // Assuming 8 bytes for encoded semantics
  patternStream: PatternStream;
}

// For decoded semantic information from bytes
export interface DecodedSemanticInfo {
  intent: IntentPrimary;
  tone: EmotionalTone;
  complexity: number;
  density: number;
  emotionalIntensity: number;
  emotionalValence: 'positive' | 'negative'; // Simplified from original for byte encoding
  contextFlags: string[];
  formality: number;
  directness: number;
  certainty: number;
  urgent: boolean;
  version: 'extended' | 'basic';
}
