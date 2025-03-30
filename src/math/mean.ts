import { sum } from "./sum";

export const mean = (arr: number[], weights?: number[]): number => {
  if (weights === undefined) {
    return sum(arr) / arr.length;
  }
  if (arr.length !== weights.length) {
    throw new Error("Nums and weights must have the same length");
  }
  return sum(arr.map((el, i) => el * weights[i])) / sum(weights);
};
