import { unapply } from "func/unapply";

export const union = unapply(<T>(arrs: T[][]): Set<T> => {
  return new Set(arrs.flat(1));
});
