import { copy } from "./copy";

export const merge = <A extends object, B extends object>(
  a: A,
  b: B
): A & B => {
  return Object.assign(copy(a), copy(b));
};
