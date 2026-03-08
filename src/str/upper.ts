/**
 * Converts a string to UPPERCASE
 *
 * @param str String to convert
 * @returns UPPERCASE version of the input string
 */
export const upper = <S extends string>(str: S): Uppercase<S> => {
  return str.toUpperCase() as Uppercase<S>;
};
