import { range } from "./range";

export const chunk = <T>(arr: T[], size: number): T[][] => {
  if (size <= 0) {
    throw new Error("Size must be greater than 0");
  }
  return range(0, arr.length, size).map((i) => arr.slice(i, i + size));
};
