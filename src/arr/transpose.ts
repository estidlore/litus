import { from } from "./from";
import type { Transpose } from "./types";

/**
 * Transposes a 2D array (matrix), switching its rows and columns
 * @param matrix The 2D array to transpose
 * @returns Transposed matrix
 */
export const transpose = <T extends unknown[][]>(matrix: T): Transpose<T> => {
  const rows = matrix.length;
  const cols = matrix[0].length;
  if (matrix.some((row) => row.length !== cols)) {
    throw new Error("Invalid matrix. Rows have different size");
  }
  const res = from(cols, (i) => from(rows, (j) => matrix[j][i]));
  return res as unknown as Transpose<T>;
};
