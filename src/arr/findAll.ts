import { findAllIdx } from "./findAllIdx";
import type { Predicate } from "./types";

/**
 * Finds all elements that match the given predicate
 * @param arr Array to search
 * @param predicate Function to test each element
 * @param from Start index (inclusive). Default: 0
 * @param to End index (exclusive). Default: arr.length
 * @param limit Maximum number of matches to return. Default: arr.length
 * @returns Array of matching elements
 */
export const findAll = <T>(
  arr: T[],
  predicate: Predicate<T>,
  from = 0,
  to = arr.length,
  limit = arr.length
): T[] => {
  return findAllIdx(arr, predicate, from, to, limit).map((i) => arr[i]);
};
