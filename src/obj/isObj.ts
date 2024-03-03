const isObj = (el: unknown): boolean => {
  return typeof el === "object" && el !== null;
};

export { isObj };
