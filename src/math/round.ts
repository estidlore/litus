import { Quantity } from "./types";

const _round = (num: number, n: number): number => {
  const k = Math.pow(10, n);
  return Math.round(num * k) / k;
};

export const round = <T extends Quantity>(num: T, n = 0): T => {
  if (typeof num === "number") {
    return _round(num, n) as T;
  }
  return num.map((el) => _round(el, n)) as T;
};
