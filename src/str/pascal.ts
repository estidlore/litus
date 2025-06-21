import { words } from "./_words";
import { capitalize } from "./capitalize";

/**
 * Converts a string to PascalCase
 * @param str String to convert
 * @returns PascalCase version of the input string
 */
export const pascal = (str: string): string => {
  return words(str).map(capitalize).join("");
};
