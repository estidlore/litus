import { multiply } from "/math";

describe("multiply", () => {
  it("returns multiplication of given vectors/scalars", () => {
    expect(multiply(2, 3)).toBe(6);
    expect(multiply([-4, 1, 0, 3, 2], 3)).toStrictEqual([-12, 3, 0, 9, 6]);
    expect(multiply([2, 3], [4, 5])).toStrictEqual([8, 15]);
  });
});
