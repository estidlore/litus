export const union = <T>(...arrs: T[][]): Set<T> => {
  return new Set(arrs.flat(1));
};
