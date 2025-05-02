import { isObj } from "/obj";

describe("isObj", () => {
  it("returns whether value is object", () => {
    expect(isObj(undefined)).toBe(false);
    expect(isObj(false)).toBe(false);
    expect(isObj(0)).toBe(false);
    expect(isObj("")).toBe(false);
    expect(isObj(null)).toBe(false);
    expect(isObj({})).toBe(true);
    expect(isObj(() => 0)).toBe(false);
  });
});
