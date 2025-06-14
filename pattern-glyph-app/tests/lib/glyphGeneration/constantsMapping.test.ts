import { getActiveConstantsForByte } from '../../../src/lib/glyphGeneration/constantsMapping';

describe('getActiveConstantsForByte', () => {
  it('should return correct active constants for a given byte', () => {
    const byte = 5;
    const active = getActiveConstantsForByte(byte);
    expect(active.length).toBe(2);
    expect(active.find(c => c.name === 'unity')).toBeDefined();
    expect(active.find(c => c.name === 'phi')).toBeDefined();
  });

  it('should return all constants if byte is 255 (all bits set)', () => {
    const active = getActiveConstantsForByte(255);
    expect(active.length).toBe(8);
  });

  it('should return no constants if byte is 0', () => {
    const active = getActiveConstantsForByte(0);
    expect(active.length).toBe(0);
  });
});
