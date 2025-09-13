import { last } from "/arr";

describe("last", () => {
  it("returns the last element of a non-empty array", () => {
    expect(last([1, 2, 3])).toBe(3);
    expect(last(["a", "b", "c"])).toBe("c");
  });

  it("returns undefined for an empty array", () => {
    expect(last([] as unknown[])).toBeUndefined();
  });
});
