import type { Transpose } from "./types";

/**
 * Transposes a 2D array (matrix), switching its rows and columns
 * @param matrix The 2D array to transpose
 * @returns Transposed matrix
 */
export const transpose = <T extends unknown[][]>(matrix: T): Transpose<T> => {
  const cols = matrix[0].length;
  const rows = matrix.length;
  for (let i = 1; i < rows; i++) {
    if (matrix[i].length !== cols) {
      throw new Error("Invalid matrix. Rows have different size");
    }
  }
  const res = Array(cols);
  for (let i = 0; i < cols; i++) {
    res[i] = Array(rows);
    for (let j = 0; j < rows; j++) {
      res[i][j] = matrix[j][i];
    }
  }
  return res as unknown as Transpose<T>;
};
