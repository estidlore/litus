import { range } from "./range";

export const chunk = <T>(arr: T[], size: number): T[][] => {
  if (!Number.isInteger(size)) {
    throw new Error("Chunk size must be an integer");
  }
  return range(0, arr.length, size).map((i) => arr.slice(i, i + size));
};
