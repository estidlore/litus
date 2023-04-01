import * as arr from ".";

describe("arr", () => {
  it("range", () => {
    expect.assertions(4);

    expect(arr.range(0, 3)).toStrictEqual([0, 1, 2]);
    expect(arr.range(3, 0, -1)).toStrictEqual([3, 2, 1]);
    expect(arr.range(0, 1.1, 0.5)).toStrictEqual([0, 0.5, 1]);
    expect(() => arr.range(0, 2, -1)).toThrow();
  });
});
