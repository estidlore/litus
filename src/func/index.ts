const apply = <T extends unknown[], R>(
  fn: (...args: T) => R
): ((arg: T) => R) => {
  return (arg: T): R => fn.apply(this, arg);
};

const unapply = <T extends unknown[], R>(
  fn: (arg: T) => R
): ((...args: T) => R) => {
  return (...args: T): R => fn(args);
};

export { apply, unapply };
