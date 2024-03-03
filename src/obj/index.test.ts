import * as obj from ".";

interface Person {
  birth: {
    day: number;
    month: number;
    year: number;
  };
  id: number;
  name: string[];
}

const person: Person = {
  birth: {
    day: 1,
    month: 2,
    year: 2000
  },
  id: 12,
  name: ["John", "Doe"]
};

describe("obj", () => {
  it("copy", () => {
    expect.assertions(4);

    const copy = obj.copy(person);
    expect(person).toStrictEqual(copy);
    expect(person).not.toBe(copy);

    copy.name[1] = "D.";
    expect(person.name[1]).toBe("Doe");
    expect(copy.name[1]).toBe("D.");
  });

  it("entries", () => {
    expect.assertions(2);

    expect(obj.entries(person.birth)).toStrictEqual([
      ["day", 1],
      ["month", 2],
      ["year", 2000]
    ]);
    expect(obj.entries(person.name)).toStrictEqual([
      ["0", "John"],
      ["1", "Doe"]
    ]);
  });

  it("equal", () => {
    expect.assertions(9);

    expect(obj.equal(1, 1)).toBe(true);
    expect(obj.equal(person, person)).toBe(true);
    expect(obj.equal(1, "1")).toBe(false);
    expect(obj.equal(1, person)).toBe(false);

    expect(obj.equal({ a: 1 }, person)).toBe(false);
    expect(obj.equal({ a: 1 }, { b: 2 })).toBe(false);
    expect(obj.equal({ a: 1 }, { a: 2 })).toBe(false);

    const person2 = obj.copy(person);
    expect(obj.equal(person, person2)).toBe(true);
    person2.birth.day++;
    expect(obj.equal(person, person2)).toBe(false);
  });

  it("has", () => {
    expect.assertions(2);

    expect(obj.has(person, "birth", "id", "name")).toBe(true);
    expect(obj.has(person, "height")).toBe(false);
  });

  it("isObj", () => {
    expect.assertions(7);
    expect(obj.isObj(undefined)).toBe(false);
    expect(obj.isObj(false)).toBe(false);
    expect(obj.isObj(0)).toBe(false);
    expect(obj.isObj("")).toBe(false);
    expect(obj.isObj(null)).toBe(false);
    expect(obj.isObj({})).toBe(true);
    expect(obj.isObj(() => 0)).toBe(false);
  });

  it("keys", () => {
    expect.assertions(2);

    expect(obj.keys(person)).toStrictEqual(["birth", "id", "name"]);
    expect(obj.keys(person.birth)).toStrictEqual(["day", "month", "year"]);
  });

  it("merge", () => {
    expect.assertions(3);

    const extra = {
      gender: "Male",
      height: 175
    };
    const union = obj.merge(person, extra);
    const expected = Object.assign({}, person, extra);

    expect(union).toStrictEqual(expected);
    expect(union).not.toBe(expected);
    expect(union.birth).not.toBe(person.birth);
  });

  it("vals", () => {
    expect.assertions(2);

    expect(obj.vals(person.birth)).toStrictEqual([1, 2, 2000]);
    expect(obj.vals(person.name)).toStrictEqual(["John", "Doe"]);
  });
});
