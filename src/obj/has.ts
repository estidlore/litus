const has = (obj: object, ...keys: PropertyKey[]): boolean => {
  return keys.every((key) => Object.prototype.hasOwnProperty.call(obj, key));
};

export { has };
