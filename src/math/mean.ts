import { multiply } from "./multiply";
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
  return sum(multiply(arr, weights)) / sum(weights);
};
