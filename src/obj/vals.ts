import { keys } from "./keys";
import type { Val } from "./types";

/**
 * Retrieves a strongly-typed array of the values of an object
 * @param obj Source object
 * @returns Array of the object's values
 */
export const vals = <T extends object>(obj: T): Val<T>[] => {
  const mKeys = keys(obj);
  const res: Val<T>[] = new Array(mKeys.length);
  for (let i = 0; i < res.length; i++) {
    res[i] = obj[mKeys[i]];
  }
  return res;
};
