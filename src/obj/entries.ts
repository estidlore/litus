import type { Entry } from "./types";

/**
 * Retrieves a strongly-typed array of the entries (key, value) of an object
 * @param obj Object whose entries are to be retrieved
 * @returns Array of key-value pairs from the object
 */
export const entries: <T extends object>(obj: T) => Entry<T>[] = Object.entries;
