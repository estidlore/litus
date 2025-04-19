import { max } from "./max";

export const min = <T>(arr: T[], fn: (val: T) => number): T => {
  return max(arr, (val) => -fn(val));
};
