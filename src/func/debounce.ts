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
