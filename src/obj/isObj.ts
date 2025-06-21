/**
 * Checks if the provided value is a non-null object
 * @param el Value to check
 * @returns True if `el` is a non-null object, otherwise false
 */
export const isObj = (el: unknown): el is object => {
  return typeof el === "object" && el !== null;
};
