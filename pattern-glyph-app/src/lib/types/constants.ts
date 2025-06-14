export interface IConstant {
  name: string;
  value: number;
}

export interface IConstants {
  alpha: IConstant;
  beta: IConstant;
  gamma: IConstant;
  delta: IConstant;
  epsilon: IConstant;
  phi: IConstant;
  tau: IConstant;
  unity: IConstant;
  [key: string]: IConstant; // For dynamic access
}

export type ConstantName = 'alpha' | 'beta' | 'gamma' | 'delta' | 'epsilon' | 'phi' | 'tau' | 'unity';

export type ConstantsArrayItem = {
  index: number;
  value: number;
  name: ConstantName;
};
