import { from } from "./from";

/**
 * Creates array of size `n` filled with the specified value
 * @param n Array size
 * @param val Value to fill the array with
 * @returns Array containing `val` repeated `n` times
 */
export const fill = <T>(n: number, val: T): T[] => {
  return from(n, () => val);
};
