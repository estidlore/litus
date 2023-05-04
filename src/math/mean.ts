import { sum } from "./sum";

const mean = (arr: number[]): number => {
  return sum(arr) / arr.length;
};

export { mean };
