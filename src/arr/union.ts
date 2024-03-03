import { unapply } from "func";

const union = unapply(<T>(arrs: T[][]): Set<T> => {
  return new Set(arrs.flat(1));
});

export { union };
