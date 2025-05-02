import { inRange } from "/math";

describe("inRange", () => {
  it("returns comparison of number is in range", () => {
    expect(inRange(3, 1, 5)).toBe(true);
    expect(inRange(3, 5, 1)).toBe(true);
    expect(inRange(3, 5)).toBe(true);

    expect(inRange(0, 0)).toBe(false);
    expect(inRange(0, 1)).toBe(true);

    expect(inRange(1, 0, 1)).toBe(false);
    expect(inRange(1, 1, 0)).toBe(false);
  });
});
