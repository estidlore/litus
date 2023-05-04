const sum = (arr: number[]): number => {
  return arr.reduce((acc, el) => acc + el, 0);
};

export { sum };
