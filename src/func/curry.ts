import type { CurryArgs, CurryFn, CurryFnRes, CurryRest } from "./types";
import { unapply } from "./unapply";

export const curry = <R, T extends unknown[]>(
  fn: (...args: T) => R,
  arity = fn.length
): CurryFn<R, T> => {
  return unapply(<A extends CurryArgs<T>>(args: A): CurryFnRes<R, T, A> => {
    const missing = arity - args.length;
    if (missing <= 0) {
      return fn.apply(this, args as unknown as T) as CurryFnRes<R, T, A>;
    }
    return curry(
      unapply(<Rest extends CurryRest<T, A>>(rArgs: Rest): R => {
        return fn.apply(this, (args as unknown[]).concat(rArgs) as T);
      }),
      missing
    ) as CurryFnRes<R, T, A>;
  });
};
