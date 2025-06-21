import type { Key } from "./types";

/**
 * Retrieves a strongly-typed array of the keys of an object
 * @param obj Object whose keys are to be retrieved
 * @returns Array of the object's keys
 */
export const keys: <T extends object>(obj: T) => Key<T>[] = Object.keys;
