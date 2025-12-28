import type { Entry } from "./types";

/**
 * Retrieves a strongly-typed array of the entries (key, value) of an object
 * @param obj Object whose entries are to be retrieved
 * @returns Array of key-value pairs from the object
 */
export const entries = <T extends object>(obj: T): Entry<T>[] => {
  if (Array.isArray(obj)) {
    const res: Entry<T>[] = [];
    for (let i = 0; i < obj.length; i++) {
      if (Object.prototype.hasOwnProperty.call(obj, i)) {
        res.push([String(i), obj[i]] as Entry<T>);
      }
    }
    return res;
  }
  return Object.entries(obj) as Entry<T>[];
};
