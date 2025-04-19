export type CurryArgs<T extends unknown[]> = T extends [...infer Ti, infer Tn]
  ? CurryArgs<Ti> | [...Ti, Tn]
  : [];

export type CurryRest<T extends unknown[], A extends CurryArgs<T>> = T extends [
  unknown,
  ...infer Ti
]
  ? A extends [unknown, ...infer Ai extends CurryArgs<Ti>]
    ? CurryRest<Ti, Ai>
    : T
  : [];

export type CurryFnRes<
  R,
  T extends unknown[],
  A extends CurryArgs<T>
> = CurryRest<T, A> extends [] ? R : CurryFn<R, CurryRest<T, A>>;

export type CurryFn<R, T extends unknown[]> = <A extends CurryArgs<T>>(
  ...args: A
) => CurryFnRes<R, T, A>;
