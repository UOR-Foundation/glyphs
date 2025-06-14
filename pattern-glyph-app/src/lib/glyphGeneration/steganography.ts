import { SemanticLayers, PatternStream, IntentPrimary, EmotionalTone } from '../types';

export function encodeSemanticsToBytes(semantics: SemanticLayers): Uint8Array {
  const bytes = new Uint8Array(8);

  const intentMap: Record<IntentPrimary, number> = { 'question': 0, 'command': 1, 'statement': 2, 'exclamation': 3, 'neutral': 4 };
  const toneMap: Record<EmotionalTone, number> = { 'positive': 0, 'negative': 1, 'neutral': 2 };

  bytes[0] = (intentMap[semantics.intent.primary] << 4) | (toneMap[semantics.emotional.tone] << 2);
  bytes[1] = Math.floor(semantics.linguistic.complexity * 255);
  bytes[2] = Math.floor(semantics.semantic.density * 255);
  bytes[3] = (Math.floor(semantics.emotional.intensity * 127) & 0x7F) |
             ((semantics.emotional.valence > 0 ? 1 : 0) << 7);
  bytes[4] = (semantics.context.temporal ? 1 : 0) |
             ((semantics.context.spatial ? 1 : 0) << 1) |
             ((semantics.context.personal ? 1 : 0) << 2) |
             ((semantics.context.abstract ? 1 : 0) << 3);
  bytes[5] = (Math.floor(semantics.pragmatic.formality * 63) & 0x3F) |
             ((Math.floor(semantics.pragmatic.directness * 3) & 0x03) << 6);
  bytes[6] = (Math.floor(semantics.pragmatic.certainty * 127) & 0x7F) |
             ((semantics.intent.urgency ? 1 : 0) << 7);
  bytes[7] = 0xFF;
  return bytes;
}
