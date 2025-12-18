import type { Primitive } from "/types";

/**
 * Creates array of unique values from the input array, preserving their order
 * @param arr Array of primitive values
 * @returns Array of unique values
 */
export const unique = <T extends Primitive>(arr: T[]): T[] => {
  const set = new Set();
  const res: T[] = [];
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    if (!set.has(el)) {
      set.add(el);
      res.push(el);
    }
  }
  return res;
};
