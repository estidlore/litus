import { words } from "./_words";
import { capitalize } from "./capitalize";

/**
 * Converts a string to Title Case
 * @param str String to convert
 * @returns Title Case version of the input string
 */
export const title = (str: string): string => {
  return words(str).map(capitalize).join(" ");
};
