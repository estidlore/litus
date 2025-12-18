import { sum } from "./sum";

/**
 * Calculates the mean (average) of an array of numbers. Supports optional weighted mean
 * @param arr Array of numbers
 * @param weights Optional array of weights
 * @returns Mean of the numbers
 */
export const mean = (arr: number[], weights?: number[]): number => {
  if (weights === undefined) {
    return sum(arr) / arr.length;
  }
  if (arr.length !== weights.length) {
    throw new Error("Nums and weights must have the same length");
  }
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i] * weights[i];
  }
  return total / sum(weights);
};
