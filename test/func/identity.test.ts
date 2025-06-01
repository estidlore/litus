import { identity } from "/func";

describe("identity", () => {
  it("returns the same input value", () => {
    expect(identity(5)).toBe(5);
    expect(identity("hello")).toBe("hello");
    const obj = { a: 1 };
    expect(identity(obj)).toBe(obj);
    expect(identity(null)).toBeNull();
  });
});
