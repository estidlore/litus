import { zip } from "/arr";

describe("zip", () => {
  it("returns array of tuples", () => {
    const a = [1, 2, 3];
    const b = ["a", "b", "c"];
    const c = [true, false, true];

    type T = [number, string, boolean];
    const x: T = [1, "a", true];
    const y: T = [2, "b", false];
    const z: T = [3, "c", true];

    expect(zip(a, b, c)).toStrictEqual([x, y, z]);
    expect(zip(x, y, z)).toStrictEqual([a, b, c]);
  });

  it("fails when array sizes are different", () => {
    expect(() => zip([0, 1, 2], ["a, b"])).toThrow();
  });
});
