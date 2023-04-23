import * as arr from ".";

interface Ball {
  colors: string[];
  name: string;
  size: "big" | "small";
}

const balls: Ball[] = [
  {
    colors: ["black", "white"],
    name: "Baseball",
    size: "small"
  },
  {
    colors: ["green", "red"],
    name: "Beach",
    size: "big"
  },
  {
    colors: ["black", "orange"],
    name: "Basketball",
    size: "big"
  }
];

describe("arr", () => {
  it("chunk", () => {
    expect.assertions(3);

    expect(arr.chunk([1, 2, 3], 4)).toStrictEqual([[1, 2, 3]]);
    expect(arr.chunk([1, 2, 3], 2)).toStrictEqual([[1, 2], [3]]);
    expect(arr.chunk([1, 2, 3, 4], 2)).toStrictEqual([
      [1, 2],
      [3, 4]
    ]);
  });

  it("fill", () => {
    expect.assertions(2);

    expect(arr.fill(3, -1)).toStrictEqual([-1, -1, -1]);
    expect(arr.fill(2, "a")).toStrictEqual(["a", "a"]);
  });

  it("group", () => {
    expect.assertions(1);

    const res = arr.group(balls, ({ size }) => size);
    expect(res).toStrictEqual({
      big: [balls[1], balls[2]],
      small: [balls[0]]
    });
  });

  it("groupBy", () => {
    expect.assertions(1);

    const res = arr.groupBy(balls, "size");
    expect(res).toStrictEqual({
      big: [balls[1], balls[2]],
      small: [balls[0]]
    });
  });

  it("range", () => {
    expect.assertions(4);

    expect(arr.range(0, 3)).toStrictEqual([0, 1, 2]);
    expect(arr.range(3, 0, -1)).toStrictEqual([3, 2, 1]);
    expect(arr.range(0, 1.1, 0.5)).toStrictEqual([0, 0.5, 1]);
    expect(() => arr.range(0, 2, -1)).toThrow();
  });

  it("sort", () => {
    expect.assertions(3);

    expect(arr.sort([2, 1, 2], (n) => -n)).toStrictEqual([2, 2, 1]);
    expect(arr.sort(["3", "1", "2"], (n) => n)).toStrictEqual(["1", "2", "3"]);
    expect(arr.sort(["1", 2, 11], String)).toStrictEqual(["1", 11, 2]);
  });

  it("unique", () => {
    expect.assertions(2);

    expect(arr.unique([3, 3, 1, 2, 2, 3])).toStrictEqual([3, 1, 2]);
    expect(arr.unique([2, 1, 2, 1, 3, 3])).toStrictEqual([2, 1, 3]);
  });
});
