import { findIdx } from "./findIdx";
import type { Predicate } from "./types";

export const find = <T>(
  arr: T[],
  predicate: Predicate<T>,
  from = 0,
  to = arr.length
): T | undefined => {
  return arr[findIdx(arr, predicate, from, to)];
};
