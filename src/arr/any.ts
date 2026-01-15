import type { Predicate } from "./types";

/**
 * Returns `true` if any element satisfies the predicate, `false` otherwise
 * @param arr - The array-like object to check
 * @param predicate - Function to test each element
 * @returns `true` if any element satisfies the predicate, otherwise `false`
 */
export const any = <T>(arr: ArrayLike<T>, predicate: Predicate<T>): boolean => {
  for (let i = 0; i < arr.length; i++) {
    if (predicate(arr[i], i, arr)) {
      return true;
    }
  }
  return false;
};
