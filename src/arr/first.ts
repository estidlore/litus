export type First<A extends readonly [] | readonly unknown[]> =
  A extends readonly [infer F, ...unknown[]]
    ? F
    : A extends readonly []
    ? undefined
    : A extends readonly [...infer F, infer L, unknown]
    ? First<[...F, L]>
    : A[number];

/**
 * Gets the first element of an array
 * @param arr The array
 * @returns The first element
 */
export const first = <A extends readonly [] | readonly unknown[]>(
  arr: A
): First<A> => {
  return arr[0] as First<A>;
};
