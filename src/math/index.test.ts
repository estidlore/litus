import * as math from ".";

describe("math", () => {
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
});
