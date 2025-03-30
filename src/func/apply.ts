export const apply = <T extends unknown[], R>(
  fn: (...args: T) => R
): ((arg: T) => R) => {
  return (arg: T): R => fn.apply(this, arg);
};
