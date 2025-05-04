type Predicate<T, R = boolean> = (val: T, idx: number, arr: T[]) => R;

type Transpose<T extends unknown[][]> = T[number] extends infer U
  ? {
      [K in keyof U]: {
        [J in keyof T]: T[J][K & keyof T[J]];
      };
    }
  : never;

type Tuple<T, N extends number, R extends T[] = []> = R["length"] extends N
  ? R
  : Tuple<T, N, [...R, T]>;

type ConvertTuple<T extends unknown[], ToType> = {
  [K in keyof T]: ToType;
};

export type { ConvertTuple, Predicate, Transpose, Tuple };
