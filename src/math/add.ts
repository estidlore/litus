import { calc } from "./calc";

export const add = calc((...arr) => arr.reduce((acc, el) => acc + el, 0));
