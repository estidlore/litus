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

  it("has", () => {
    expect.assertions(2);

    expect(obj.has(person, "birth", "id", "name")).toBe(true);
    expect(obj.has(person, "height")).toBe(false);
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
