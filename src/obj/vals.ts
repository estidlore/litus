import type { Val } from "./types";

/**
 * Retrieves a strongly-typed array of the values of an object
 * @param obj Source object
 * @returns Array of the object's values
 */
export const vals: <T extends object>(obj: T) => Val<T>[] = Object.values;
