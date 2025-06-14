import { LinguisticAnalysis, SemanticAnalysis, IntentAnalysis, EmotionalAnalysis, ContextAnalysis, PragmaticAnalysis, SemanticLayers } from '../types';

import { analyzeLinguistic } from './linguistic';
import { analyzeSemantic } from './semantic';
import { analyzeIntent } from './intent';
import { analyzeEmotional } from './emotional';
import { analyzeContext } from './context';
import { analyzePragmatic } from './pragmatic';

export {
  analyzeLinguistic,
  analyzeSemantic,
  analyzeIntent,
  analyzeEmotional,
  analyzeContext,
  analyzePragmatic,
};

export function analyzeSemanticLayers(text: string): SemanticLayers {
  return {
    linguistic: analyzeLinguistic(text),
    semantic: analyzeSemantic(text),
    intent: analyzeIntent(text),
    emotional: analyzeEmotional(text),
    context: analyzeContext(text),
    pragmatic: analyzePragmatic(text),
  };
}
