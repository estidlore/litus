import { binSearch } from "/arr";

describe("binSearch", () => {
  const arr = [1, 3, 5, 7, 9, 11];
  const getVal = (x: number): number => x;

  it("returns index of first element >= target", () => {
    expect(binSearch(arr, 5, getVal)).toBe(2);
    expect(binSearch(arr, 6, getVal)).toBe(3);
    expect(binSearch(arr, 0, getVal)).toBe(0);
    expect(binSearch(arr, 12, getVal)).toBe(6);
    expect(binSearch(arr, 1, getVal)).toBe(0);
    expect(binSearch(arr, 11, getVal)).toBe(5);
  });

  it("works with custom getVal", () => {
    const objs = [{ v: 2 }, { v: 4 }, { v: 6 }];
    expect(binSearch(objs, 2, (el) => el.v)).toBe(0);
    expect(binSearch(objs, 5, (el) => el.v)).toBe(2);
    expect(binSearch(objs, 7, (el) => el.v)).toBe(3);
  });

  it("works with start and end arguments", () => {
    expect(binSearch(arr, 5, getVal, 1, 4)).toBe(2);
    expect(binSearch(arr, 8, getVal, 2, 5)).toBe(4);
    expect(binSearch(arr, 3, getVal, 2, 4)).toBe(2);
  });

  it("returns start when range is empty", () => {
    expect(binSearch(arr, 5, getVal, 3, 3)).toBe(3);
    expect(binSearch([], 1, getVal)).toBe(0);
  });

  it("throws when start/end are invalid", () => {
    expect(() => binSearch(arr, 2, getVal, -1, 3)).toThrow();
    expect(() => binSearch(arr, 2, getVal, 0, 7)).toThrow();
    expect(() => binSearch(arr, 2, getVal, 3, 2)).toThrow();
  });
});
