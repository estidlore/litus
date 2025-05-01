import { fill } from "/arr";

describe("fill", () => {
  it("returns array of size n filled with value", () => {
    expect(fill(3, -1)).toStrictEqual([-1, -1, -1]);
    expect(fill(2, "a")).toStrictEqual(["a", "a"]);
  });
});
