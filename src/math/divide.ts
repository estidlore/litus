import { multiply } from "./multiply";

export const divide = (arr: number[], n: number): number[] => {
  return multiply(arr, 1 / n);
};
