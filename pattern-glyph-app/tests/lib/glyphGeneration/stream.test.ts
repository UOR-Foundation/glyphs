import { textToPatternStream } from '../../../src/lib/glyphGeneration/stream';

describe('textToPatternStream', () => {
  it('should convert text to a pattern stream', () => {
    const stream = textToPatternStream('Hi');
    expect(stream).toEqual([72, 105]);
  });

  it('should handle empty strings', () => {
    const stream = textToPatternStream('');
    expect(stream).toEqual([]);
  });

  it('should mask characters to 8 bits', () => {
    const stream = textToPatternStream(String.fromCharCode(256 + 65));
    expect(stream).toEqual([65]);
  });
});
