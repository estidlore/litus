import { from } from "./from";

export const range = (a: number, b: number, step = 1): number[] => {
  const n = Math.ceil((b - a) / step);
  if (n <= 0) {
    throw Error("Invalid range");
  }
  return from(n, (i) => a + step * i);
};
