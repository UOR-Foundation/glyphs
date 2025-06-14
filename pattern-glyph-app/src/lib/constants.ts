import { IConstants, ConstantName, ConstantsArrayItem } from './types';

// The 8 fundamental constants
export const constants: IConstants = {
  alpha: { name: 'alpha', value: 1.1750566516490533 },
  beta: { name: 'beta', value: 0.19968406830149554 },
  gamma: { name: 'gamma', value: 12.41605776553433 },
  delta: { name: 'delta', value: 0.0 },
  epsilon: { name: 'epsilon', value: 4.329953646807706 },
  phi: { name: 'phi', value: 1.618033988749895 },
  tau: { name: 'tau', value: 1.839286755214161 },
  unity: { name: 'unity', value: 1.0 },
};

// Convert constants to array for bit mapping (order is important as in original script)
export const constantsArray: ConstantsArrayItem[] = [
  { index: 0, name: 'unity', value: constants.unity.value },
  { index: 1, name: 'tau', value: constants.tau.value },
  { index: 2, name: 'phi', value: constants.phi.value },
  { index: 3, name: 'epsilon', value: constants.epsilon.value },
  { index: 4, name: 'delta', value: constants.delta.value },
  { index: 5, name: 'gamma', value: constants.gamma.value },
  { index: 6, name: 'beta', value: constants.beta.value },
  { index: 7, name: 'alpha', value: constants.alpha.value },
];

export const getConstantByName = (name: ConstantName): number => {
  return constants[name].value;
};
