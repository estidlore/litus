import type { Predicate } from "./types";

/**
 * Returns `true` if all the elements satisfy the predicate, false otherwise
 * @param arr - The array-like object to check
 * @param predicate - Function to test each element
 * @returns `true` if all the elements satisfy the predicate, otherwise `false`
 */
export const all = <T>(arr: ArrayLike<T>, predicate: Predicate<T>): boolean => {
  for (let i = 0; i < arr.length; i++) {
    if (predicate(arr[i], i, arr)) {
      continue;
    }
    return false;
  }
  return true;
};
