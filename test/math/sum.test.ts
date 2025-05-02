import { sum } from "/math";

describe("sum", () => {
  it("returns sum of given numbers", () => {
    expect(sum([-4, 1, 0, 3, 2])).toBe(2);
  });
});
