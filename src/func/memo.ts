import type { Primitive } from "/types";

/**
 * Creates a memoized version of a function, caching its output for faster repeated calls.
 * Optionally accepts a custom cache key generator and a TTL (time-to-live) in milliseconds
 * @param fn Function to memoize
 * @param idFn Function to generate a cache key from arguments. Default: JSON.stringify
 * @param ttl Optional cache expiration time in milliseconds. Default: 0 (no expiration)
 * @returns Memoized function
 */
export const memo = <T extends unknown[], R>(
  fn: (...args: T) => R,
  idFn: (arg: T) => Primitive = JSON.stringify,
  ttl = 0
): ((...args: T) => R) => {
  const cache = new Map<Primitive, { val: R; exp?: number }>();
  return (...args: T): R => {
    const key = idFn(args);
    const cached = cache.get(key);
    if (cached !== undefined) {
      if (cached.exp === undefined || Date.now() < cached.exp) {
        return cached.val;
      }
    }
    const val = fn.apply(undefined, args);
    const exp = ttl <= 0 ? undefined : Date.now() + ttl;
    cache.set(key, { exp, val });
    return val;
  };
};
