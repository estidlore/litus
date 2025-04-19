import { unapply } from "func/unapply";

import { calc } from "./calc";

export const multiply = calc(
  unapply((arr: number[]) => arr.reduce((acc, el) => acc * el, 1))
);
