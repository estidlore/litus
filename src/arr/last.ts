export type Last<A extends readonly [] | readonly unknown[]> =
  A extends readonly [...unknown[], infer L]
    ? L
    : A extends readonly []
    ? undefined
    : A extends readonly [unknown, infer F, ...infer L]
    ? Last<[F, ...L]>
    : A[number];

/**
 * Gets the last element of an array
 * @param arr The array
 * @returns The last element
 */
export const last = <A extends readonly [] | readonly unknown[]>(
  arr: A
): Last<A> => {
  return arr[arr.length - 1] as Last<A>;
};
