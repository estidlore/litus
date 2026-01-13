import type { Predicate } from "./types";

/**
 * Returns `true` if no element satisfies the predicate, false otherwise
 * @param arr - The array-like object to check
 * @param predicate - Function to test each element
 * @returns `true` if no element satisfies the predicate, otherwise `false`
 */
export const none = <T>(
  arr: ArrayLike<T>,
  predicate: Predicate<T>
): boolean => {
  for (let i = 0; i < arr.length; i++) {
    if (predicate(arr[i], i, arr)) {
      return false;
    }
  }
  return true;
};
