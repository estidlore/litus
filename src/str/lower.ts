/**
 * Converts a string to lowercase
 *
 * @param str String to convert
 * @returns lowercase version of the input string
 */
export const lower = <S extends string>(str: S): Lowercase<S> => {
  return str.toLowerCase() as Lowercase<S>;
};
