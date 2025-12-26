import { clamp } from "/math";

describe("clamp", () => {
  it("returns the number itself when within the range", () => {
    expect(clamp(5, 1, 10)).toBe(5);
    expect(clamp(-7, -10, -5)).toBe(-7);
  });

  it("returns the min when the number is below the range", () => {
    expect(clamp(-1, 0, 10)).toBe(0);
    expect(clamp(-10, -5, 5)).toBe(-5);
  });

  it("returns the max when the number is above the range", () => {
    expect(clamp(15, 0, 10)).toBe(10);
    expect(clamp(100, -5, 5)).toBe(5);
  });

  it("returns min when min and max are equal", () => {
    expect(clamp(5, 3, 3)).toBe(3);
    expect(clamp(2, 2, 2)).toBe(2);
  });

  it("returns NaN if any argument is NaN", () => {
    expect(clamp(NaN, 0, 10)).toBeNaN();
    expect(clamp(5, NaN, 10)).toBeNaN();
    expect(clamp(5, 0, NaN)).toBeNaN();
  });
});
