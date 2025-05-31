export const randInt = (a = 1, b = 0): number => {
  if (a > b) {
    return randInt(b, a);
  }
  const low = Math.ceil(a);
  const range = Math.floor(b) - low + 1;
  return Math.floor(Math.random() * range + low);
};
