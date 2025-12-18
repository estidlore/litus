import type { PipedFn, PipeOps, UnaryFn } from "./types";

/**
 * Creates a function by composing multiple unary functions from left to right.
 * The output of each function is passed as the input to the next
 * @param fns Sequence of unary functions to compose
 * @returns Composed function from left to right
 */
export const pipe = <T extends UnaryFn[]>(...fns: PipeOps<T>): PipedFn<T> => {
  return ((input) => {
    let res: unknown = input;
    for (let i = 0; i < fns.length; i++) {
      res = (fns[i] as UnaryFn)(res);
    }
    return res;
  }) as PipedFn<T>;
};
