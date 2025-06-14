import { encodeSemanticsToBytes } from '../../../src/lib/glyphGeneration/steganography';
import { SemanticLayers, LinguisticAnalysis, SemanticAnalysis, IntentAnalysis, EmotionalAnalysis, ContextAnalysis, PragmaticAnalysis } from '../../../src/lib/types';

describe('encodeSemanticsToBytes', () => {
  it('should encode semantic layers into 8 bytes', () => {
    const mockSemantics: SemanticLayers = {
      linguistic: { length: 10, words: 2, sentences: 1, avgWordLength: 5, complexity: 0.5 } as LinguisticAnalysis,
      semantic: { density: 0.8, concepts: ['test'], abstraction: 0.6 } as SemanticAnalysis,
      intent: { primary: 'statement', strength: 0.7, urgency: 0 } as IntentAnalysis,
      emotional: { tone: 'positive', intensity: 0.4, valence: 0.9 } as EmotionalAnalysis,
      context: { temporal: true, spatial: false, personal: true, abstract: false } as ContextAnalysis,
      pragmatic: { formality: 0.3, directness: 0.9, certainty: 0.75 } as PragmaticAnalysis,
    };
    const bytes = encodeSemanticsToBytes(mockSemantics);
    expect(bytes).toBeInstanceOf(Uint8Array);
    expect(bytes.length).toBe(8);
    expect(bytes[7]).toBe(0xFF);
  });
});
