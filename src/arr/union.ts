import { unapply } from "func";

export const union = unapply(<T>(arrs: T[][]): Set<T> => {
  return new Set(arrs.flat(1));
});
