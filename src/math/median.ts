import { percentile } from "./percentile";

export const median = (arr: number[], weights?: number[]): number => {
  return percentile(arr, 50, weights);
};
