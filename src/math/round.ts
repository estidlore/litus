import type { Quantity } from "./types";

const _round = (n: number, p: number): number => {
  const k = Math.pow(10, p);
  return Math.round((n + Number.EPSILON) * k) / k;
};

/**
 * Rounds a quantity (vector or scalar) to the specified number of decimal places
 * @param q Quantity to round
 * @param precision Number of decimal places to round to. Default: 0
 * @returns Rounded quantity
 */
export const round = <T extends Quantity>(q: T, precision = 0): T => {
  if (typeof q === "number") {
    return _round(q, precision) as T;
  }
  return q.map((el) => _round(el, precision)) as T;
};
