import { percentile } from "./percentile";

/**
 * Calculates the median of an array of numbers
 * @param arr Array of numbers
 * @param weights Optional array of weights
 * @returns Median of the given numbers
 */
export const median = (arr: number[], weights?: number[]): number => {
  return percentile(arr, 50, weights);
};
