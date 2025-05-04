import { pow } from "/math";

describe("pow", () => {
  it("returns exponentiation of given bases and exponents", () => {
    expect(pow(5, 2)).toBe(25);
    expect(pow([-4, 1, 0, 3, 2], 2)).toStrictEqual([16, 1, 0, 9, 4]);
    expect(pow(3, [0, 1, 2, 3])).toStrictEqual([1, 3, 9, 27]);
    expect(pow([1, 2], [3, 4])).toStrictEqual([1, 16]);
  });
});
