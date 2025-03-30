import { sum } from "./sum";

export const mean = (arr: number[]): number => {
  return sum(arr) / arr.length;
};
