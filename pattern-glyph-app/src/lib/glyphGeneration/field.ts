import { PatternStream, SemanticLayers } from '../types';
import { getActiveConstantsForByte } from './constantsMapping';

export function generateResonanceField(
  patternStream: PatternStream,
  semanticLayers: SemanticLayers,
  width: number,
  height: number
): Float32Array {
  const field = new Float32Array(width * height);
  if (patternStream.length === 0) return field; // Handle empty stream

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let value = 0;

      // Layer 1: Linguistic encoding (base pattern)
      patternStream.forEach((byte, idx) => {
        const activeConstants = getActiveConstantsForByte(byte);
        activeConstants.forEach(constant => {
          const phase = (idx * constant.value * Math.PI) / patternStream.length;
          const freq = constant.value * 0.1; // Arbitrary scaling factor for frequency

          const dx = x - width / 2;
          const dy = y - height / 2;
          const r = Math.sqrt(dx * dx + dy * dy);

          value += Math.sin(r * freq + phase) * Math.exp(-r / (width * 0.3));
        });
      });

      // Layer 2: Semantic density modulation
      const semanticMod = semanticLayers.semantic.density;
      const semanticWave = Math.sin(x * semanticMod * 0.1) * Math.cos(y * semanticMod * 0.1);
      value += semanticWave * 0.3;

      // Layer 3: Intent vector field
      const intentStrength = semanticLayers.intent.strength;
      const intentAngleMap: { [key: string]: number } = {
        'question': 0,
        'command': Math.PI / 2,
        'statement': Math.PI,
        'exclamation': 3 * Math.PI / 2,
        'neutral': 0,
      };
      const intentAngle = intentAngleMap[semanticLayers.intent.primary] || 0;
      const intentX = Math.cos(intentAngle) * intentStrength;
      const intentY = Math.sin(intentAngle) * intentStrength;
      const intentField = Math.sin(x * intentX * 0.05) * Math.cos(y * intentY * 0.05);
      value += intentField * 0.2;

      // Layer 4: Emotional tone coloring (influence field, actual color applied in fieldToPixels)
      const emotionalVal = semanticLayers.emotional.valence;
      const emotionalIntensity = semanticLayers.emotional.intensity;
      const emotionalWave = Math.sin((x + y) * 0.02 * (1 + emotionalVal)) * emotionalIntensity;
      value += emotionalWave * 0.25;

      // Layer 5: Context embedding
      const contextActiveFlags = [
        semanticLayers.context.temporal,
        semanticLayers.context.spatial,
        semanticLayers.context.personal,
        semanticLayers.context.abstract,
      ].filter(Boolean).length;
      const contextPattern = Math.sin(x * y * contextActiveFlags * 0.0001) * 0.15;
      value += contextPattern;

      // Layer 6: Pragmatic modulation
      const formality = semanticLayers.pragmatic.formality;
      const certainty = semanticLayers.pragmatic.certainty;
      const dx2 = x - width / 2;
      const dy2 = y - height / 2;
      const r2 = Math.sqrt(dx2*dx2 + dy2*dy2);
      const pragmaticMod = Math.cos(r2 * formality * 0.01) * certainty;
      value += pragmaticMod * 0.1;

      field[y * width + x] = value / Math.max(1, patternStream.length);
    }
  }
  return field;
}
