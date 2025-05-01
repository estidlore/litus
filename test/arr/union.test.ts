import { union } from "/arr";

describe("union", () => {
  it("returns set of arrays union", () => {
    expect(union([1, 2, 2, 3])).toEqual(new Set([1, 2, 3]));
    expect(union([1, 2], [2, 3])).toEqual(new Set([1, 2, 3]));
  });
});
