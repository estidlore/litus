import type { Primitive } from "types";
import { unapply } from "./unapply";

export const memo = <T extends unknown[], R>(
  fn: (...args: T) => R,
  idFn: (arg: T) => Primitive = JSON.stringify
): ((...args: T) => R) => {
  const cache = new Map<Primitive, R>();
  return unapply((args: T): R => {
    const key = idFn(args);
    if (cache.has(key)) {
      return cache.get(key) as R;
    }
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  });
};
