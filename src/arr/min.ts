import { max } from "./max";

/**
 * Returns the element with the minimum value based on the provided map function
 * @param arr Array to search
 * @param fn Function to extract the value for comparison
 * @returns Element with the minimum value
 */
export const min = <T>(arr: T[], fn: (val: T) => number): T => {
  return max(arr, (val) => -fn(val));
};
