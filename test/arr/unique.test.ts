import { unique } from "/arr";

describe("unique", () => {
  it("returns array without duplicates preserving order", () => {
    expect(unique([3, 3, 1, 2, 2, 3])).toStrictEqual([3, 1, 2]);
    expect(unique([2, 1, 2, 1, 3, 3])).toStrictEqual([2, 1, 3]);
  });
});
