import { range } from "./range";

/**
 * Splits an array into multiple chunks of a specified size
 * @param arr Array to split
 * @param size Size of each chunk
 * @returns Array of chunks
 */
export const chunk = <T>(arr: T[], size: number): T[][] => {
  if (!Number.isInteger(size)) {
    throw new Error("Chunk size must be an integer");
  }
  return range(0, arr.length, size).map((i) => arr.slice(i, i + size));
};
