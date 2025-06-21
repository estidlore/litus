/**
 * Checks if an object has all specified properties
 * @param obj Object to check
 * @param keys Property keys to look for
 * @returns True if all keys exist on the object, false otherwise
 */
export const has = <K extends PropertyKey>(
  obj: object,
  ...keys: K[]
): obj is Record<K, unknown> => {
  return keys.every((key) => Object.prototype.hasOwnProperty.call(obj, key));
};
