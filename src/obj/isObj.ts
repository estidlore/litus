export const isObj = (el: unknown): el is object => {
  return typeof el === "object" && el !== null;
};
