import { pow } from "/math";

describe("pow", () => {
  it("returns exponentiation of given bases and exponent", () => {
    expect(pow([-4, 1, 0, 3, 2], 2)).toStrictEqual([16, 1, 0, 9, 4]);
  });
});
