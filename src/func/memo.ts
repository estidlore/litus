import type { Primitive } from "types";

import { unapply } from "./unapply";

export const memo = <T extends unknown[], R>(
  fn: (...args: T) => R,
  idFn: (arg: T) => Primitive = JSON.stringify,
  ttl = 0
): ((...args: T) => R) => {
  const cache = new Map<Primitive, { val: R; exp?: number }>();
  return unapply((args: T): R => {
    const key = idFn(args);
    const cached = cache.get(key);
    if (cached !== undefined) {
      if (cached.exp === undefined || Date.now() < cached.exp) {
        return cached.val;
      }
    }
    const val = fn.apply(this, args);
    const exp = ttl <= 0 ? undefined : Date.now() + ttl;
    cache.set(key, { exp, val });
    return val;
  });
};
