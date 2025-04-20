import { unapply } from "./unapply";

export const debounce = <A extends unknown[]>(
  fn: (...args: A) => void,
  delay = 100
): ((...args: A) => void) => {
  let timer: NodeJS.Timeout | undefined;
  return unapply((args: A): void => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  });
};
