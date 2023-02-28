import { obj } from ".";

describe("obj", () => {
  it("copy", () => {
    const obj1 = {
      a: 1,
      b: false,
      c: {
        d: [
          true,
          "9",
          {
            e: 49
          }
        ],
        f: "l"
      }
    };

    expect.assertions(3);

    const obj2 = obj.copy(obj1);
    expect(obj1).toStrictEqual(obj2);
    expect(obj1).not.toBe(obj2);

    obj2.c.d[1] = !obj1.c.d[1];
    expect(obj2.c.d[1]).not.toBe(obj1.c.d[1]);
  });
});
