import { size } from "/arr";

describe("size", () => {
  it("returns length for array-like", () => {
    expect(size([1, 2, 3])).toBe(3);
    expect(size("hello")).toBe(5);
    expect(size({ 0: "a", 1: "b", length: 2 })).toBe(2);
  });

  it("returns 0 for non-objects/primitives", () => {
    expect(size(42)).toBe(0);
    expect(size(undefined)).toBe(0);
    expect(size(null)).toBe(0);
    expect(size((a: number, b: number) => a + b)).toBe(0);
  });

  it("returns .size for Map, Set and other objects", () => {
    expect(size(new Map([[1, 2]]))).toBe(1);
    expect(size(new Set([1, 2, 3]))).toBe(3);
    expect(size({ a: 1, b: 2, size: 2 })).toBe(2);
  });

  it("returns number of keys for plain objects", () => {
    expect(size({ a: 1, b: 2 })).toBe(2);
  });

  it("falls back to keys when .size or .length is not valid", () => {
    expect(size({ a: 1, b: 2, length: -1, size: "5" })).toBe(4);
    expect(size({ a: 1, b: 2, length: "5", size: Infinity })).toBe(4);
    expect(size({ a: 1, b: 2, length: Infinity, size: -1 })).toBe(4);
  });
});
