export const has = <K extends PropertyKey>(
  obj: object,
  ...keys: K[]
): obj is Record<K, unknown> => {
  return keys.every((key) => Object.prototype.hasOwnProperty.call(obj, key));
};
