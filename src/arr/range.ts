import { from } from "./from";

/**
 * Creates an array of numbers from `a` up to `b` incremented by `step`
 * @param a Start of the range (inclusive)
 * @param b End of the range (exclusive)
 * @param step Step between elements (default is 1)
 * @returns Array of numbers in the specified range
 */
export const range = (a: number, b: number, step = 1): number[] => {
  if (step === 0) {
    throw new Error("Step cannot be 0");
  }
  const n = Math.ceil((b - a) / step);
  return from(n, (i) => a + step * i);
};
