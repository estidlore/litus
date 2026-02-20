const MAX_ARR_LENGTH = 2 ** 32 - 1;

export const isLength = (num: unknown): boolean => {
  return (
    Number.isInteger(num) &&
    (num as number) >= 0 &&
    (num as number) <= MAX_ARR_LENGTH
  );
};
