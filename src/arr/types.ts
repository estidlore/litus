type Predicate<T, R = boolean> = (val: T, idx: number, arr: T[]) => R;

type Tuple<T, N extends number, R extends T[] = []> = R["length"] extends N
  ? R
  : Tuple<T, N, [...R, T]>;

type ConvertTuple<T extends unknown[], ToType> = {
  [K in keyof T]: ToType;
};

export type { ConvertTuple, Predicate, Tuple };
