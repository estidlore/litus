import { words } from "./_words";
import { lower } from "./lower";

/**
 * Converts a string to snake_case
 * @param str String to convert
 * @returns snake_case version of the input string
 */
export const snake = (str: string): string => {
  return words(str).map(lower).join("_");
};
