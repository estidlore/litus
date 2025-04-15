export const inRange = (n: number, a: number, b = 0): boolean => {
  if (a > b) {
    return inRange(n, b, a);
  }
  return n >= a && n < b;
};
