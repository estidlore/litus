import type { Key } from "./types";

/**
 * Retrieves a strongly-typed array of the keys of an object
 * @param obj Object whose keys are to be retrieved
 * @returns Array of the object's keys
 */
export const keys = <T extends object>(obj: T): Key<T>[] => {
  if (Array.isArray(obj)) {
    const res: string[] = [];
    for (let i = 0; i < obj.length; i++) {
      if (Object.prototype.hasOwnProperty.call(obj, i)) {
        res.push(String(i));
      }
    }
    return res as Key<T>[];
  }
  return Object.keys(obj) as Key<T>[];
};
