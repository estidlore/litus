export type Split<
  S extends string,
  D extends string
> = S extends `${infer T}${D}${infer U}` ? [T, ...Split<U, D>] : [S];

/**
 * Splits a string by the specified delimiter and returns a typed array
 *
 * @param str - The string to split
 * @param delimiter - The delimiter to split by
 * @returns The array (tuple) of substrings
 */
export const split = <S extends string, D extends string>(
  str: S,
  delimiter: D
): Split<S, D> => {
  return str.split(delimiter) as Split<S, D>;
};
