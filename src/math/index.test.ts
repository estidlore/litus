import * as math from ".";

describe("math", () => {
  it("add", () => {
    expect.assertions(1);

    const arr = [-4, 1, 0, 3, 2];
    const exp = [1, 6, 5, 8, 7];
    expect(math.add(arr, 5)).toStrictEqual(exp);
  });

  it("divide", () => {
    expect.assertions(1);

    const arr = [-4, 1, 0, 3, 2];
    const exp = [-2, 0.5, 0, 1.5, 1];
    expect(math.divide(arr, 2)).toStrictEqual(exp);
  });

  it("mean", () => {
    expect.assertions(1);

    expect(math.mean([-4, 1, 0, 3, 2])).toBe(2 / 5);
  });

  it("median", () => {
    expect.assertions(2);

    expect(math.median([-4, 1, 0, 3, 2])).toBe(1);
    expect(math.median([1, 0, 3, 2])).toBe(1.5);
  });

  it("mod", () => {
    const scalars = [-2, -1, 0, 1, 2];
    expect.assertions(scalars.length * 3);

    const m = 5;
    scalars.forEach((k) => {
      expect(math.mod(k * m, m)).toBe(0);
      expect(math.mod(k * m + 1, m)).toBe(1);
      expect(math.mod(k * m - 1, m)).toBe(m - 1);
    });
  });

  it("multiply", () => {
    expect.assertions(1);

    const arr = [-4, 1, 0, 3, 2];
    const exp = [-12, 3, 0, 9, 6];
    expect(math.multiply(arr, 3)).toStrictEqual(exp);
  });

  it("subtract", () => {
    expect.assertions(1);

    const arr = [-4, 1, 0, 3, 2];
    const exp = [-5, 0, -1, 2, 1];
    expect(math.subtract(arr, 1)).toStrictEqual(exp);
  });

  it("sum", () => {
    expect.assertions(1);

    const arr = [-4, 1, 0, 3, 2];
    expect(math.sum(arr)).toBe(2);
  });
});
