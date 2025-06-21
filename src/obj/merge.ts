import { copy } from "./copy";

/**
 * Creates a strongly-typed object from the shallow merge of deep copies of two objects
 * If both objects have the same property, the value from the second object overwrites the first
 * @param a First object to merge
 * @param b Second object to merge
 * @returns The merged object with properties from both a and b
 */
export const merge = <A extends object, B extends object>(
  a: A,
  b: B
): A & B => {
  return Object.assign(copy(a), copy(b));
};
