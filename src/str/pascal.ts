import { words } from "./_words";
import { capitalize } from "./capitalize";

export const pascal = (str: string): string => {
  return words(str).map(capitalize).join("");
};
