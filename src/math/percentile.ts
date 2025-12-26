import { binSearch } from "/arr/binSearch";
import { range } from "/arr/range";
import { transpose } from "/arr/transpose";
import { identity } from "/func/identity";

import { cumsum } from "./cumsum";
import { interp } from "./interp";
import type { Quantity, QuantityT } from "./types";

const _linear = (x: number[], p: number[]): number[] => {
  const step = 100 / (x.length - 1);
  const xp = range(0, 100 + step, step);
  return interp(p, xp, x.slice().sort());
};

const _weighted = (x: number[], p: number[], w: number[]): number[] => {
  if (w.length !== x.length) {
    throw new Error("Weights must be the same length as the array");
  }
  for (let i = 0; i < w.length; i++) {
    if (w[i] < 0) {
      throw new Error("Weights must be non-negative");
    }
  }

  const X = transpose([x, w]).sort(([a], [b]) => a - b);
  const [Xsorted, Wsorted] = transpose(X);
  const Wnorm = cumsum(Wsorted);
  const Wtotal100th = Wnorm[Wnorm.length - 1] / 100;
  for (let i = 0; i < Wnorm.length; i++) {
    Wnorm[i] /= Wtotal100th;
  }
  const res = Array(p.length);
  for (let i = 0, j = 0; i < p.length; i++) {
    j = binSearch(Wnorm, p[i], identity, j);
    res[i] = Xsorted[j];
  }
  return res;
};

/**
 * Calculates the given percentile(s) of an array of numbers
 * Supports both linear interpolation and weighted percentiles
 * @param x Array of numbers
 * @param p Percentile(s) to compute (number or array of numbers, 0–100)
 * @param weights Optional array of weights (same length as x)
 * @returns Computed percentile value(s)
 */
export const percentile = <T extends Quantity>(
  x: number[],
  p: T,
  weights?: number[]
): QuantityT<T> => {
  if (typeof p === "number") {
    return percentile(x, [p], weights)[0] as QuantityT<T>;
  }
  for (let i = 0; i < p.length; i++) {
    if (p[i] < 0 || p[i] > 100) {
      throw new Error("Percentiles must be between 0 and 100");
    }
  }
  if (weights === undefined) {
    return _linear(x, p) as QuantityT<T>;
  }
  return _weighted(x, p, weights) as QuantityT<T>;
};
