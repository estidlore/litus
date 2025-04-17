export const interp = (x: number[], xp: number[], fp: number[]): number[] => {
  if (xp.length !== fp.length) {
    throw new Error("xp and fp must have the same length");
  }

  let lastI = 0;
  return x.map((xi) => {
    if (xi <= xp[0]) {
      return fp[0];
    }
    for (let i = lastI; i < xp.length; i++) {
      if (xi <= xp[i]) {
        lastI = i;
        const slope = (fp[i] - fp[i - 1]) / (xp[i] - xp[i - 1]);
        return fp[i - 1] + slope * (xi - xp[i - 1]);
      }
    }
    return fp[fp.length - 1];
  });
};
