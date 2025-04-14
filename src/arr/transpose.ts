import { from } from "./from";

export const transpose = <T>(matrix: T[][]): T[][] => {
  const rows = matrix.length;
  const cols = matrix[0].length;
  return from(cols, (i) => from(rows, (j) => matrix[j][i]));
};
