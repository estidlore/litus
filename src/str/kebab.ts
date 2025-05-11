import { words } from "./_words";

export const kebab = (str: string): string => {
  return words(str)
    .map((str) => str.toLowerCase())
    .join("-");
};
