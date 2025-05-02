import { get } from "/obj";

import { person } from "./data";

describe("get", () => {
  it("returns value at given path of object", () => {
    expect(get(person, "birth")).toStrictEqual(person.birth);
    expect(get(person, "birth.day")).toBe(1);
    expect(get(person, "birth.day", 0)).toBe(1);
    expect(get(person, "height", 0)).toBe(0);
    expect(get(person, "name.0")).toBe("John");
  });
});
