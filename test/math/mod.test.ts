import { mod } from "/math";

describe("mod", () => {
  it("returns mod operation of number", () => {
    const scalars = [-2, -1, 0, 1, 2];

    const m = 5;
    scalars.forEach((k) => {
      expect(mod(k * m, m)).toBe(0);
      expect(mod(k * m + 1, m)).toBe(1);
      expect(mod(k * m - 1, m)).toBe(m - 1);
    });
  });
});
