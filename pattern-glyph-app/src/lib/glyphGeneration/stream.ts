import { PatternStream } from '../types';

export function textToPatternStream(text: string): PatternStream {
  const stream: PatternStream = [];
  for (let i = 0; i < text.length; i++) {
    const charCode = text.charCodeAt(i);
    stream.push(charCode & 0xFF); // Keep only lower 8 bits
  }
  return stream;
}
