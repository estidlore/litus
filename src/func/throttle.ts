/**
 * Creates a throttled version of the given function that only executes once per specified interval
 * @param fn Function to throttle
 * @param interval Minimum time (ms) between calls. Default: 100
 * @returns Throttled function
 */
export const throttle = <A extends unknown[]>(
  fn: (...args: A) => void,
  interval = 100
): ((...args: A) => void) => {
  let wait = false;
  return (...args) => {
    if (wait) {
      return;
    }
    wait = true;
    fn.apply(undefined, args);
    setTimeout(() => {
      wait = false;
    }, interval);
  };
};
