import { extractDataFromPixels, RawPixelData, DecodedGlyph } from '../../../src/lib/glyphDecoding/glyphReader';

describe('extractDataFromPixels', () => {
  it('should return null for invalid magic markers', () => {
    const pixelData: RawPixelData = {
      data: new Uint8ClampedArray(100), // dummy data
      width: 10,
      height: 1,
    };
    pixelData.data[2] = 0x00; // Invalid marker
    expect(extractDataFromPixels(pixelData)).toBeNull();
  });

  it('should correctly decode a simple glyph', () => {
    // This requires constructing a valid pixelData array based on the encoding logic.
    // For 'Hi' (72, 105)
    // Text length = 2
    const textLengthHigh = 0;
    const textLengthLow = 2;

    // Semantic bytes (dummy, similar to semanticDecoder.test.ts)
    const semanticBytes = [
      (2 << 4) | (0 << 2), 128, 204, (63 & 0x7F) | (1 << 7),
      1 | (1 << 2), (31 & 0x3F) | ((2 & 0x03) << 6), (95 & 0x7F) | (1 << 7), 0xFF,
    ];

    const data = new Uint8ClampedArray(100 * 4); // Enough space
    data[0] = textLengthHigh;
    data[1] = textLengthLow;
    data[2] = 0xAB; // Magic marker
    data[3] = 0; // Alpha
    data[4] = 0xCD; // Magic marker
    data[5] = 0; // Alpha
    data[6] = 0; // Alpha
    data[7] = 0; // Alpha


    for (let i = 0; i < 8; i++) {
      data[8 + i * 4] = semanticBytes[i]; // Store in R channel of pixels 2-9
    }

    // Embed 'H' (72 = 01001000) at pixel 10
    // R: (72 >> 6) & 0x03 = 01 = 1
    // G: (72 >> 4) & 0x03 = 00 = 0
    // B: 72 & 0x0F        = 1000 = 8
    const hPixelIdx = 10 * 4;
    data[hPixelIdx] = (data[hPixelIdx] & ~0x03) | 1;
    data[hPixelIdx + 1] = (data[hPixelIdx+1] & ~0x03) | 0;
    data[hPixelIdx + 2] = (data[hPixelIdx+2] & ~0x0F) | 8;

    // Embed 'i' (105 = 01101001) at pixel 11
    // R: (105 >> 6) & 0x03 = 01 = 1
    // G: (105 >> 4) & 0x03 = 10 = 2
    // B: 105 & 0x0F        = 1001 = 9
    const iPixelIdx = 11 * 4;
    data[iPixelIdx] = (data[iPixelIdx] & ~0x03) | 1;
    data[iPixelIdx + 1] = (data[iPixelIdx+1] & ~0x03) | 2;
    data[iPixelIdx + 2] = (data[iPixelIdx+2] & ~0x0F) | 9;

    const pixelData: RawPixelData = { data, width: 20, height: 5 };
    const result = extractDataFromPixels(pixelData);

    expect(result).not.toBeNull();
    if (result) {
      expect(result.text).toBe('Hi');
      expect(result.semanticInfo.intent).toBe('statement');
      expect(result.patternStream).toEqual([72, 105]);
    }
  });

  // Add more tests for edge cases: textLength out of bounds, etc.
});
