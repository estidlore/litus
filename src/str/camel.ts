import { words } from "./_words";
import { capitalize } from "./capitalize";

export const camel = (str: string): string => {
  const w = words(str).map(capitalize);
  if (w.length === 0) {
    return "";
  }
  w[0] = w[0].toLowerCase();
  return w.join("");
};
