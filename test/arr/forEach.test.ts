import { forEach } from "/arr";

describe("forEach", () => {
  it("calls the callback for each element of an array", () => {
    const arr = [1, 2, 3];
    const fn = jest.fn();
    forEach(arr, fn);
    expect(fn).toHaveBeenCalledTimes(3);
    expect(fn).toHaveBeenNthCalledWith(1, 1, 0, arr);
    expect(fn).toHaveBeenNthCalledWith(2, 2, 1, arr);
    expect(fn).toHaveBeenNthCalledWith(3, 3, 2, arr);
  });

  it("works with array-like objects", () => {
    const obj = { 0: "a", 1: "b", length: 2 };
    const fn = jest.fn();
    forEach(obj, fn);
    expect(fn).toHaveBeenCalledTimes(2);
    expect(fn).toHaveBeenNthCalledWith(1, "a", 0, obj);
    expect(fn).toHaveBeenNthCalledWith(2, "b", 1, obj);
  });

  it("does not call callback for empty array", () => {
    const fn = jest.fn();
    forEach([], fn);
    expect(fn).not.toHaveBeenCalled();
  });

  it("works with strings (array-like)", () => {
    const str = "abc";
    const fn = jest.fn();
    forEach("abc", fn);
    expect(fn).toHaveBeenCalledTimes(3);
    expect(fn).toHaveBeenNthCalledWith(1, "a", 0, str);
    expect(fn).toHaveBeenNthCalledWith(2, "b", 1, str);
    expect(fn).toHaveBeenNthCalledWith(3, "c", 2, str);
  });
});
