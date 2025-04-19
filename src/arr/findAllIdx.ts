import type { Predicate } from "./types";

export const findAllIdx = <T>(
  arr: T[],
  predicate: Predicate<T>,
  from = 0,
  to = arr.length,
  limit = arr.length
): number[] => {
  const res: number[] = [];
  for (let i = from; i < to; i++) {
    if (predicate(arr[i], i, arr)) {
      res.push(i);
      if (res.length >= limit) {
        break;
      }
    }
  }
  return res;
};
