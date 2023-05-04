import { add } from "./add";

const subtract = (arr: number[], n: number): number[] => {
  return add(arr, -n);
};

export { subtract };
