/**
 * Ensures the provided function is executed only once
 * Subsequent calls return the result of the first execution
 * @param fn Function to execute only once
 * @returns Function that invokes `fn` only once
 */
export const once = <T>(fn: () => T): (() => T) => {
  let call = true;
  let res: T;
  return (): T => {
    if (call) {
      res = fn();
      call = false;
    }
    return res;
  };
};
