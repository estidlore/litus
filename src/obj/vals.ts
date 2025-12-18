import type { Val } from "./types";

/**
 * Retrieves a strongly-typed array of the values of an object
 * @param obj Source object
 * @returns Array of the object's values
 */
export const vals = <T extends object>(obj: T): Val<T>[] => {
  if (Array.isArray(obj)) {
    const res: Val<T>[] = [];
    for (let i = 0; i < obj.length; i++) {
      if (Object.prototype.hasOwnProperty.call(obj, i)) {
        res.push(obj[i]);
      }
    }
    return res;
  }
  return Object.values(obj);
};
