import { add } from "./add";

export const subtract = (arr: number[], n: number): number[] => {
  return add(arr, -n);
};
