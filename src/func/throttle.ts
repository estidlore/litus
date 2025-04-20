import { unapply } from "./unapply";

export const throttle = <A extends unknown[]>(
  fn: (...args: A) => void,
  interval = 100
): ((...args: A) => void) => {
  let wait = false;
  return unapply((args) => {
    if (wait) {
      return;
    }
    wait = true;
    fn.apply(this, args);
    setTimeout(() => {
      wait = false;
    }, interval);
  });
};
