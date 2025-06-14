import { analyzeLinguistic } from '../../../src/lib/semanticAnalysis/linguistic';

describe('analyzeLinguistic', () => {
  it('should analyze basic linguistic properties', () => {
    const result = analyzeLinguistic('Hello world. This is a test.');
    expect(result.length).toBe(28);
    expect(result.words).toBe(6);
    expect(result.sentences).toBe(2);
    // Add more assertions for avgWordLength and complexity
  });

  it('should handle empty strings', () => {
    const result = analyzeLinguistic('');
    expect(result.length).toBe(0);
    expect(result.words).toBe(0);
    expect(result.sentences).toBe(0);
    expect(result.complexity).toBe(0);
  });
});
