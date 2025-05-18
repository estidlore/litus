import { copy, set } from "/obj";

import { person } from "./data";

describe("set", () => {
  it("sets value at given path of object", () => {
    const data = copy(person);

    set(data, "birth.day", 15);
    expect(data.birth.day).toBe(15);

    set(data, "birth.year", 1990);
    expect(data.birth.year).toBe(1990);

    set(data, "name.0", "Jane");
    expect(data.name[0]).toBe("Jane");
  });

  it("creates nested objects if path does not exist", () => {
    const data1 = { a: 3 };

    const data2 = set(data1, "b.c.d", "Hi");
    expect(data2).toStrictEqual({
      a: 3,
      b: { c: { d: "Hi" } }
    });

    const data3 = set(data2, "b.e", true);
    expect(data3).toStrictEqual({
      a: 3,
      b: { c: { d: "Hi" }, e: true }
    });

    const data4 = set(data3, "b.c", 4);
    expect(data4).toStrictEqual({
      a: 3,
      b: { c: 4, e: true }
    });

    const data5 = set(data4, "a.d", 2);
    expect(data5).toStrictEqual({
      a: { d: 2 },
      b: { c: 4, e: true }
    });
  });
});
