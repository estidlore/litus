import { first } from "/arr";

describe("first", () => {
  it("returns the first element of a non-empty array", () => {
    expect(first([1, 2, 3])).toBe(1);
    expect(first(["a", "b", "c"])).toBe("a");
  });

  it("returns undefined for an empty array", () => {
    expect(first([] as unknown[])).toBeUndefined();
  });
});
