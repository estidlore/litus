import { isArrLike } from "/arr";

describe("isArrLike", () => {
  it("returns true for array-like", () => {
    expect(isArrLike([])).toBe(true);
    expect(isArrLike([1, 2, 3])).toBe(true);
    expect(isArrLike({ length: 0 })).toBe(true);
    expect(isArrLike({ 0: 1, 1: 2, length: 2 })).toBe(true);
    expect(isArrLike("abc")).toBe(true);
    expect(isArrLike(new Uint8Array(5))).toBe(true);
  });

  it("returns false for objects without length", () => {
    expect(isArrLike({})).toBe(false);
    expect(isArrLike({ foo: "bar" })).toBe(false);
    expect(isArrLike(new Map())).toBe(false);
    expect(isArrLike(new Set())).toBe(false);
  });

  it("returns false for invalid length values", () => {
    expect(isArrLike({ length: -1 })).toBe(false);
    expect(isArrLike({ length: 3.5 })).toBe(false);
    expect(isArrLike({ length: "3" })).toBe(false);
    expect(isArrLike({ length: null })).toBe(false);
  });

  it("returns false for functions", () => {
    // eslint-disable-next-line no-empty-function
    expect(isArrLike(() => {})).toBe(false);
    // eslint-disable-next-line no-empty-function
    expect(isArrLike(function () {})).toBe(false);
  });

  it("returns false for primitives", () => {
    expect(isArrLike(123)).toBe(false);
    expect(isArrLike(true)).toBe(false);
    expect(isArrLike(null)).toBe(false);
    expect(isArrLike(undefined)).toBe(false);
  });
});
