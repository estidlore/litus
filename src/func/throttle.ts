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
