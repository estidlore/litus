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
});
