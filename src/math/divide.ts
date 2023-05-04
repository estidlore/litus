import { multiply } from "./multiply";

const divide = (arr: number[], n: number): number[] => {
  return multiply(arr, 1 / n);
};

export { divide };
