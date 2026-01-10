import { findIdx } from "./findIdx";
import type { Predicate } from "./types";

/**
 * Finds the first element that matches the given predicate
 * @param arr Array to search in
 * @param predicate Function to test each element
 * @param from Start index (inclusive). Default: 0
 * @param to End index (exclusive). Default: arr.length
 * @returns First matching element, or undefined if none found
 */
export const find = <T>(
  arr: ArrayLike<T>,
  predicate: Predicate<T>,
  from = 0,
  to = arr.length
): T | undefined => {
  return arr[findIdx(arr, predicate, from, to)];
};
