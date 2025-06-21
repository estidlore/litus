import { words } from "./_words";
import { capitalize } from "./capitalize";

/**
 * Converts a string to camelCase
 * @param str String to convert
 * @returns camelCase version of the input string
 */
export const camel = (str: string): string => {
  const w = words(str).map(capitalize);
  if (w.length === 0) {
    return "";
  }
  w[0] = w[0].toLowerCase();
  return w.join("");
};
