import { PatternStream, DecodedSemanticInfo } from '../types';
import { decodeSemanticBytes } from './semanticDecoder';

export interface RawPixelData {
  data: Uint8ClampedArray; // Similar to ImageData.data
  width: number;
  height: number;
}

export interface DecodedGlyph {
  text: string;
  semanticInfo: DecodedSemanticInfo;
  patternStream: PatternStream; // For potential further analysis or re-rendering
}

export function extractDataFromPixels(pixelData: RawPixelData): DecodedGlyph | null {
  const { data, width, height } = pixelData;

  // Check magic markers from original encoding logic
  if (data.length < 12 || data[2] !== 0xAB || data[4] !== 0xCD) { // Min length for header + a few data bytes
    console.error("Invalid glyph: Magic markers not found.");
    return null;
  }

  // Get text length from first 2 pixels (R and G channels of first pixel)
  const textLength = (data[0] << 8) | data[1];

  if (textLength === 0 || textLength > (width * height - 10)) { // Max possible length
    console.error("Invalid or corrupted glyph: Text length out of bounds.");
    return null;
  }

  // Extract semantic metadata (8 bytes from pixels 2-9, using R channel of each)
  const semanticBytes = new Uint8Array(8);
  for (let i = 0; i < 8; i++) {
    // Original encoding stored semanticBytes[i] in data[8 + i * 4] (R channel of pixel 2+i)
    semanticBytes[i] = data[8 + i * 4];
  }
  const decodedSemantics = decodeSemanticBytes(semanticBytes);

  // Extract pattern stream from subsequent pixels using LSB steganography
  const patternStream: PatternStream = [];
  for (let i = 0; i < textLength; i++) {
    const pixelIdx = (i + 10) * 4; // Start from data of pixel 10 (0-indexed)
    if (pixelIdx + 2 < data.length) { // Need R, G, B channels
      // Original LSB encoding:
      // R: bits 7-6 of charCode ((byte >> 6) & 0x03) -> data[pixelIdx] & 0x03
      // G: bits 5-4 of charCode ((byte >> 4) & 0x03) -> data[pixelIdx+1] & 0x03
      // B: bits 3-0 of charCode (byte & 0x0F)        -> data[pixelIdx+2] & 0x0F
      const rBits = (data[pixelIdx] & 0x03) << 6;
      const gBits = (data[pixelIdx + 1] & 0x03) << 4;
      const bBits = data[pixelIdx + 2] & 0x0F;
      const byte = rBits | gBits | bBits;
      patternStream.push(byte);
    } else {
      console.error("Corrupted glyph: Ran out of pixel data while reading pattern stream.");
      return null; // Data seems truncated
    }
  }

  const decodedText = patternStream.map(byte => String.fromCharCode(byte)).join('');

  return {
    text: decodedText,
    semanticInfo: decodedSemantics,
    patternStream,
  };
}
