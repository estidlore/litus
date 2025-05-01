import { from } from "./from";

export const range = (a: number, b: number, step = 1): number[] => {
  if (step === 0) {
    throw new Error("Step cannot be 0");
  }
  const n = Math.ceil((b - a) / step);
  return from(n, (i) => a + step * i);
};
