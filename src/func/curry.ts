import type { CurryArgs, CurryFn, CurryFnRes, CurryRest } from "./types";

/**
 * Creates a curried version of a function, allowing partial application of arguments
 * @param fn Function to curry
 * @param arity Number of arguments the function expects. Default: fn.length
 * @returns Curried function
 */
export const curry = <R, T extends unknown[]>(
  fn: (...args: T) => R,
  arity = fn.length
): CurryFn<R, T> => {
  return <A extends CurryArgs<T>>(...args: A): CurryFnRes<R, T, A> => {
    const missing = arity - args.length;
    if (missing <= 0) {
      return fn.apply(undefined, args as unknown as T) as CurryFnRes<R, T, A>;
    }
    return curry(<Rest extends CurryRest<T, A>>(...rArgs: Rest): R => {
      return fn.apply(undefined, (args as unknown[]).concat(rArgs) as T);
    }, missing) as CurryFnRes<R, T, A>;
  };
};
