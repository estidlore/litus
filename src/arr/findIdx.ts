import type { Predicate } from "./types";

export const findIdx = <T>(
  arr: T[],
  predicate: Predicate<T>,
  from = 0,
  to = arr.length
): number => {
  for (let i = from; i < to; i++) {
    if (predicate(arr[i], i, arr)) {
      return i;
    }
  }
  return -1;
};
