export type Predicate<T, R = boolean> = (val: T, idx: number, arr: T[]) => R;

export type Tuple<
  T,
  N extends number,
  R extends T[] = []
> = R["length"] extends N ? R : Tuple<T, N, [...R, T]>;

export type ConvertTuple<T, ToType> = {
  [K in keyof T]: ToType;
};
