import { DecodedSemanticInfo, IntentPrimary, EmotionalTone } from '../types';

export function decodeSemanticBytes(bytes: Uint8Array): DecodedSemanticInfo {
  if (bytes.length < 8) {
    throw new Error("Semantic byte array must be at least 8 bytes long.");
  }

  const intentMap: IntentPrimary[] = ['question', 'command', 'statement', 'exclamation', 'neutral'];
  const toneMap: EmotionalTone[] = ['positive', 'negative', 'neutral'];

  const intentVal = (bytes[0] >> 4) & 0x0F;
  const toneVal = (bytes[0] >> 2) & 0x03;

  const contextFlagMap: string[] = ['temporal', 'spatial', 'personal', 'abstract'];
  const contextFlags: string[] = [];
  for (let i = 0; i < 4; i++) {
    if ((bytes[4] >> i) & 1) {
      contextFlags.push(contextFlagMap[i]);
    }
  }

  return {
    intent: intentMap[intentVal] || 'neutral',
    tone: toneMap[toneVal] || 'neutral',
    complexity: bytes[1] / 255,
    density: bytes[2] / 255,
    emotionalIntensity: (bytes[3] & 0x7F) / 127,
    // In original JS, valence was string 'positive'/'negative'. Here, it's based on the bit.
    emotionalValence: (bytes[3] & 0x80) ? 'positive' : 'negative',
    contextFlags,
    formality: (bytes[5] & 0x3F) / 63, // Original used 85, but encoding logic used 63. Aligning with encoding.
    directness: ((bytes[5] >> 6) & 0x03) / 3,
    certainty: (bytes[6] & 0x7F) / 127,
    urgent: !!(bytes[6] & 0x80),
    version: bytes[7] === 0xFF ? 'extended' : 'basic',
  };
}
