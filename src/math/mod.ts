export const mod = (x: number, m: number): number => {
  return ((x % m) + m) % m;
};
