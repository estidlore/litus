const pow = (arr: number[], n: number): number[] => {
  return arr.map((el) => Math.pow(el, n));
};

export { pow };
