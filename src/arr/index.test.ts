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
});
