import { copy } from "/obj";

import { person } from "./data";

describe("copy", () => {
  it("returns a deep copy of object", () => {
    const copied = copy(person);
    expect(person).toStrictEqual(copied);
    expect(person).not.toBe(copied);

    copied.name[1] = "D.";
    expect(person.name[1]).toBe("Doe");
    expect(copied.name[1]).toBe("D.");
  });
});
