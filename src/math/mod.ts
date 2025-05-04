import { calc } from "./calc";

export const mod = calc((x, modulo) => {
  const m = Math.abs(modulo);
  return ((x % m) + m) % m;
});
