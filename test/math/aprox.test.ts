import { aprox } from "/math";

describe("aprox", () => {
  it("returns comparison of aproximated values", () => {
    expect(aprox(3.14, Math.PI)).toBe(false);
    expect(aprox(3.14, Math.PI, 2)).toBe(true);
    expect(aprox(3.1416, Math.PI)).toBe(true);
  });
});
