import { ActiveConstantInfo } from '../types';
import { constantsArray } from '../constants'; // Using the array from constants.ts

export function getActiveConstantsForByte(byte: number): ActiveConstantInfo[] {
  const active: ActiveConstantInfo[] = [];
  for (let i = 0; i < 8; i++) { // Iterate through 8 bits of the byte
    if ((byte >> i) & 1) { // Check if the i-th bit is set
      if (constantsArray[i]) {
         active.push({
           index: constantsArray[i].index,
           value: constantsArray[i].value,
           name: constantsArray[i].name,
         });
      }
    }
  }
  return active;
}
