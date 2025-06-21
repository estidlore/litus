import { binSearch } from "/arr/binSearch";
import { range } from "/arr/range";
import { sort } from "/arr/sort";
import { transpose } from "/arr/transpose";

import { cumsum } from "./cumsum";
import { divide } from "./divide";
import { interp } from "./interp";
import type { Quantity, QuantityT } from "./types";

const _linear = (x: number[], p: number[]): number[] => {
  const Pnorm = divide(p, 100);
  const step = 1 / (x.length - 1);
  const xp = range(0, 1 + step, step);
  return interp(Pnorm, xp, x.sort());
};

const _weighted = (x: number[], p: number[], w: number[]): number[] => {
  if (w.length !== x.length) {
    throw new Error("Weights must be the same length as the array");
  } else if (w.some((v) => v < 0)) {
    throw new Error("Weights must be non-negative");
  }

  const X = sort(transpose([x, w]), (el) => el[0]);
  const [Xsorted, Wsorted] = transpose(X);
  const Wcum = cumsum(Wsorted);
  const Wtotal = Wcum[Wcum.length - 1];
  const Wnorm = divide(Wcum, Wtotal);
  const Pnorm = divide(p, 100);

  let i = 0;
  return Pnorm.map((pi) => {
    i = binSearch(Wnorm, pi, (el) => el, i);
    return Xsorted[i];
  });
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
  if (p.some((v) => v < 0 || v > 100)) {
    throw new Error("Percentiles must be between 0 and 100");
  }
  if (weights === undefined) {
    return _linear(x, p) as QuantityT<T>;
  }
  return _weighted(x, p, weights) as QuantityT<T>;
};
