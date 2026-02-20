import { isLength } from "/arr/_isLength";

describe("isLength", () => {
  it("returns true for valid array lengths", () => {
    expect(isLength(0)).toBe(true);
    expect(isLength(1)).toBe(true);
    expect(isLength(100)).toBe(true);
    expect(isLength(2 ** 32 - 1)).toBe(true);
  });

  it("returns false for negative numbers", () => {
    expect(isLength(-1)).toBe(false);
    expect(isLength(-100)).toBe(false);
  });

  it("returns false for numbers exceeding MAX_ARR_LENGTH", () => {
    expect(isLength(2 ** 32)).toBe(false);
    expect(isLength(Number.MAX_SAFE_INTEGER)).toBe(false);
  });

  it("returns false for non-integer numbers", () => {
    expect(isLength(1.5)).toBe(false);
    expect(isLength(0.1)).toBe(false);
    expect(isLength(Infinity)).toBe(false);
    expect(isLength(NaN)).toBe(false);
  });

  it("returns false for non-numeric values", () => {
    expect(isLength("123")).toBe(false);
    expect(isLength(null)).toBe(false);
    expect(isLength(undefined)).toBe(false);
    expect(isLength({})).toBe(false);
    expect(isLength([])).toBe(false);
    expect(isLength(true)).toBe(false);
  });
});
