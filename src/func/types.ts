// eslint-disable-next-line @typescript-eslint/no-explicit-any
type UnaryFn = (arg: any) => unknown;

type CurryArgs<T extends unknown[]> = T extends [...infer Ti, unknown]
  ? CurryArgs<Ti> | T
  : [];

type CurryRest<T extends unknown[], A extends CurryArgs<T>> = T extends [
  unknown,
  ...infer Ti
]
  ? A extends [unknown, ...infer Ai extends CurryArgs<Ti>]
    ? CurryRest<Ti, Ai>
    : T
  : [];

type CurryFnRes<R, T extends unknown[], A extends CurryArgs<T>> = CurryRest<
  T,
  A
> extends []
  ? R
  : CurryFn<R, CurryRest<T, A>>;

type CurryFn<R, T extends unknown[]> = <A extends CurryArgs<T>>(
  ...args: A
) => CurryFnRes<R, T, A>;

type FirstFnArg<T> = T extends [(arg: infer A) => unknown, ...unknown[]]
  ? A
  : never;
type LastFnReturn<T> = T extends [...unknown[], (arg: unknown) => infer R]
  ? R
  : never;
type PipedFn<T extends UnaryFn[]> = (arg: FirstFnArg<T>) => LastFnReturn<T>;

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

export type {
  CurryArgs,
  CurryFn,
  CurryFnRes,
  CurryRest,
  PipeOps,
  PipedFn,
  UnaryFn
};
