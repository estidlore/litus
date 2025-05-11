import { words } from "./_words";

export const snake = (str: string): string => {
  return words(str)
    .map((str) => str.toLowerCase())
    .join("_");
};
