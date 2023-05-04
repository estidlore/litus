const round = (arr: number[], n = 0): number[] => {
  return arr.map((el) => {
    const k = Math.pow(10, n);
    return Math.round(el * k) / k;
  });
};

export { round };
