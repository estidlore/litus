import { from } from "./from";
import type { Transpose } from "./types";

export const transpose = <T extends unknown[][]>(matrix: T): Transpose<T> => {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const res = from(cols, (i) => from(rows, (j) => matrix[j][i]));
  return res as unknown as Transpose<T>;
};
