import { isLength } from "./_isLength";

/**
 * Splits an array into multiple chunks of a specified size
 * @param arr Array to split
 * @param size Size of each chunk
 * @returns Array of chunks
 */
export const chunk = <T>(arr: T[], size: number): T[][] => {
  if (!isLength(size)) {
    throw new Error("Chunk size must be a valid length");
  }
  const res = Array<T[]>(Math.ceil(arr.length / size));
  for (let i = 0; i < res.length; i++) {
    res[i] = arr.slice(i * size, (i + 1) * size);
  }
  return res;
};
