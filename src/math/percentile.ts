import { findIdx } from "arr/findIdx";
import { range } from "arr/range";
import { sort } from "arr/sort";
import { transpose } from "arr/transpose";

import { cumsum } from "./cumsum";
import { interp } from "./interp";
import { Quantity, QuantityT } from "./types";

const _linear = (x: number[], p: number[]): number[] => {
  const Pnorm = p.map((el) => el / 100);
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
  const Wnorm = Wcum.map((el) => el / Wtotal);
  const Pnorm = p.map((el) => el / 100);

  let i = 0;
  return Pnorm.map((pi) => {
    i = findIdx(Wnorm, (el) => el >= pi, i);
    return Xsorted[i];
  });
};

export const percentile = <T extends Quantity>(
  x: number[],
  p: T,
  w?: number[]
): QuantityT<T> => {
  if (typeof p === "number") {
    return percentile(x, [p], w)[0] as QuantityT<T>;
  }
  if (p.some((v) => v < 0 || v > 100)) {
    throw new Error("Percentiles must be between 0 and 100");
  }
  if (w === undefined) {
    return _linear(x, p) as QuantityT<T>;
  }
  return _weighted(x, p, w) as QuantityT<T>;
};
