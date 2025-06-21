import type { Primitive } from "/types";

import { sort } from "./sort";

/**
 * Creates array of unique values from the input array, preserving their order
 * @param arr Array of primitive values
 * @returns Array of unique values
 */
export const unique = <T extends Primitive>(arr: T[]): T[] => {
  const set = Array.from(new Set(arr));
  return sort(set, (el) => arr.indexOf(el));
};
