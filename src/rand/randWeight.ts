import { binSearch } from "/arr/binSearch";
import { cumsum } from "/math/cumsum";

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
