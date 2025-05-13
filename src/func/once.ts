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
