import { words } from "./_words";

/**
 * Converts a string to kebab-case
 * @param str String to convert
 * @returns kebab-case version of the input string
 */
export const kebab = (str: string): string => {
  return words(str)
    .map((str) => str.toLowerCase())
    .join("-");
};
