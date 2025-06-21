import type { Predicate } from "./types";

/**
 * Finds indices of all elements that match the given predicate
 * @param arr Array to search
 * @param predicate Function to test each element
 * @param from Start index (inclusive). Default: 0
 * @param to End index (exclusive). Default: arr.length
 * @param limit Maximum number of indices to return. Default: arr.length
 * @returns Array of matching indices
 */
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
