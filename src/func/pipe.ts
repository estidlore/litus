import type { UnaryFn } from "./types";

type FirstFnArg<T> = T extends [(arg: infer A) => unknown, ...unknown[]]
  ? A
  : never;
type LastFnReturn<T> = T extends [...unknown[], (arg: unknown) => infer R]
  ? R
  : never;

type PipeOps<T extends UnaryFn[] = UnaryFn[]> = T extends [
  infer F1 extends UnaryFn,
  infer F2 extends UnaryFn,
  ...infer Rest extends UnaryFn[]
]
  ? F2 extends (arg: ReturnType<F1>) => unknown
    ? [F1, ...PipeOps<[F2, ...Rest]>]
    : []
  : T extends [UnaryFn]
  ? T
  : [];

export type PipedFn<T extends UnaryFn[]> = (
  arg: FirstFnArg<T>
) => LastFnReturn<T>;

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
