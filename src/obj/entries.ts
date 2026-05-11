import { keys } from "./keys";
import type { Entry } from "./types";

/**
 * Retrieves a strongly-typed array of the entries (key, value) of an object
 * @param obj Object whose entries are to be retrieved
 * @returns Array of key-value pairs from the object
 */
export const entries = <T extends object>(obj: T): Entry<T>[] => {
  const mKeys = keys(obj);
  const res: Entry<T>[] = new Array(mKeys.length);
  for (let i = 0; i < res.length; i++) {
    res[i] = [mKeys[i], obj[mKeys[i]]];
  }
  return res;
};
