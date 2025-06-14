import { analyzeSemanticLayers } from '../../../src/lib/semanticAnalysis'; // Uses index

describe('analyzeSemanticLayers', () => {
  it('should return all semantic layer analyses', () => {
    const text = "This is a test sentence. What is its meaning?";
    const layers = analyzeSemanticLayers(text);

    expect(layers).toHaveProperty('linguistic');
    expect(layers).toHaveProperty('semantic');
    expect(layers).toHaveProperty('intent');
    expect(layers).toHaveProperty('emotional');
    expect(layers).toHaveProperty('context');
    expect(layers).toHaveProperty('pragmatic');

    // Example check for one layer
    expect(layers.intent.primary).toBe('question');
  });
});
