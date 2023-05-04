const unapply = <T extends unknown[], R>(
  fn: (arg: T) => R
): ((...args: T) => R) => {
  return (...args: T): R => fn(args);
};

export { unapply };
