/**
 * Creates a debounced version of a function that delays invoking until after the specified delay.
 * Only the last call within the delay period is executed
 * @param fn Function to debounce
 * @param delay Delay in milliseconds. Default: 100
 * @returns Debounced function
 */
export const debounce = <A extends unknown[]>(
  fn: (...args: A) => void,
  delay = 100
): ((...args: A) => void) => {
  let timer: NodeJS.Timeout | undefined;
  return (...args: A): void => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(undefined, args);
    }, delay);
  };
};
