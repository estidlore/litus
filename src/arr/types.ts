export type Predicate<T, R = boolean> = (val: T, idx: number, arr: T[]) => R;

export type Transpose<T extends unknown[][]> = T[number] extends infer U
  ? {
      [K in keyof U]: {
        [J in keyof T]: T[J][K & keyof T[J]];
      };
    }
  : never;

export type Tuple<
  T,
  N extends number,
  R extends T[] = []
> = R["length"] extends N ? R : Tuple<T, N, [...R, T]>;

export type ConvertTuple<T, ToType> = {
  [K in keyof T]: ToType;
};
