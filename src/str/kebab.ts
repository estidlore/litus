import { words } from "./_words";
import { lower } from "./lower";

/**
 * Converts a string to kebab-case
 * @param str String to convert
 * @returns kebab-case version of the input string
 */
export const kebab = (str: string): string => {
  return words(str).map(lower).join("-");
};
