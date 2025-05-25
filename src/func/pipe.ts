import type { PipedFn, PipeOps, UnaryFn } from "./types";

export const pipe = <T extends UnaryFn[]>(...fns: PipeOps<T>): PipedFn<T> => {
  return ((input) => {
    return fns.reduce((acc: unknown, fn: UnaryFn) => fn(acc), input);
  }) as PipedFn<T>;
};
