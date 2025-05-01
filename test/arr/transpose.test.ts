import { transpose } from "/arr";

describe("transpose", () => {
  const m = [
    [1, 2, 3],
    [4, 5, 6]
  ];
  const t = [
    [1, 4],
    [2, 5],
    [3, 6]
  ];

  it("returns transpose of given matrix", () => {
    expect(transpose(m)).toStrictEqual(t);
    expect(transpose(t)).toStrictEqual(m);
  });

  it("fails when rows have different size", () => {
    const notAMatrix = [
      [1, 2],
      [3, 4, 5]
    ];
    expect(() => transpose(notAMatrix)).toThrow();
  });
});
