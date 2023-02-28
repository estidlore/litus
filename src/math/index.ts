import type { LitusMath } from "./types";

const math: LitusMath = {
  mod: (x, m): number => ((x % m) + m) % m
};

export { math };
