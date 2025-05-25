import { calc } from "./calc";

export const multiply = calc((...arr) => arr.reduce((acc, el) => acc * el, 1));
