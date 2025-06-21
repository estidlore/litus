import { binSearch } from "/arr/binSearch";
import { cumsum } from "/math/cumsum";

/**
 * Selects a random index based on the provided weights
 * @param weights Array of non-negative weights
 * @returns Selected index
 */
export const randWeight = (weights: number[]): number => {
  if (weights.length === 0) {
    throw new Error("Weights array cannot be empty");
  }
  if (weights.some((w) => w < 0)) {
    throw new Error("Weights array cannot contain negative values");
  }
  const wAccum = cumsum(weights);
  const wTotal = wAccum[wAccum.length - 1];
  if (wTotal === 0) {
    throw new Error("Total weight must be greater than zero");
  }
  const r = Math.random() * wTotal;
  return binSearch(wAccum, r, (el) => el);
};
