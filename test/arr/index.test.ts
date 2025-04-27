import * as arr from "/arr";

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
    expect.assertions(4);

    expect(() => arr.chunk([1, 2, 3], 0)).toThrow(
      "Size must be greater than 0"
    );
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

  it("find & findIdx", () => {
    expect.assertions(4);

    expect(arr.findIdx(balls, (el) => el.name === "Baseball")).toBe(0);
    expect(arr.find(balls, (el) => el.name === "Baseball")).toStrictEqual(
      balls[0]
    );

    expect(arr.findIdx(balls, (el) => el.name === "Soccer")).toBe(-1);
    expect(arr.find(balls, (el) => el.name === "Soccer")).toBeUndefined();
  });

  it("findAll & findAllIdx", () => {
    expect.assertions(4);

    const bigs = arr.findAll(balls, (el) => el.size === "big");
    const bigIdxs = arr.findAllIdx(balls, (el) => el.size === "big");

    expect(bigIdxs).toStrictEqual([1, 2]);
    expect(bigs).toStrictEqual(bigIdxs.map((i) => balls[i]));

    const resIdx2 = arr.findAllIdx(balls, (el) => el.size === "big", 0, 3, 1);
    const res2 = arr.findAll(balls, (el) => el.size === "big", 0, 2);

    expect(res2).toStrictEqual([balls[1]]);
    expect(resIdx2).toStrictEqual([1]);
  });

  it("from", () => {
    expect.assertions(2);

    expect(arr.from(3, (i) => i < 2)).toStrictEqual([true, true, false]);
    expect(arr.from(4, (i) => i % 2)).toStrictEqual([0, 1, 0, 1]);
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

  it("max & min", () => {
    expect.assertions(2);

    expect(arr.max(balls, (el) => el.name.length)).toStrictEqual(balls[2]);
    expect(arr.min(balls, (el) => el.name.length)).toStrictEqual(balls[1]);
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

  it("transpose", () => {
    expect.assertions(2);
    const matrix = [
      [1, 2, 3],
      [4, 5, 6]
    ];
    const t = [
      [1, 4],
      [2, 5],
      [3, 6]
    ];

    expect(arr.transpose(matrix)).toStrictEqual(t);
    expect(arr.transpose(t)).toStrictEqual(matrix);
  });

  it("union", () => {
    expect.assertions(2);

    expect(arr.union([1, 2, 2, 3])).toEqual(new Set([1, 2, 3]));
    expect(arr.union([1, 2], [2, 3])).toEqual(new Set([1, 2, 3]));
  });

  it("unique", () => {
    expect.assertions(2);

    expect(arr.unique([3, 3, 1, 2, 2, 3])).toStrictEqual([3, 1, 2]);
    expect(arr.unique([2, 1, 2, 1, 3, 3])).toStrictEqual([2, 1, 3]);
  });

  it("zip", () => {
    expect.assertions(2);

    const a = [1, 2, 3];
    const b = ["a", "b", "c"];
    const c = [true, false, true];

    const x = [1, "a", true];
    const y = [2, "b", false];
    const z = [3, "c", true];

    expect(arr.zip(a, b, c)).toStrictEqual([x, y, z]);
    expect(arr.zip(x, y, z)).toStrictEqual([a, b, c]);
  });
});
