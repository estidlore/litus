import type { Predicate } from "./types";

/**
 * Finds the index of the first element that matches the given predicate
 * @param arr Array to search in
 * @param predicate Function to test each element
 * @param from Start index (inclusive). Default: 0
 * @param to End index (exclusive). Default: arr.length
 * @returns Index of the first matching element, or -1 if none found
 */
export const findIdx = <T>(
  arr: ArrayLike<T>,
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
