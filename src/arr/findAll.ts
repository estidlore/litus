import { findAllIdx } from "./findAllIdx";
import type { Predicate } from "./types";

export const findAll = <T>(
  arr: T[],
  predicate: Predicate<T>,
  from = 0,
  to = arr.length,
  limit = arr.length
): T[] => {
  return findAllIdx(arr, predicate, from, to, limit).map((i) => arr[i]);
};
