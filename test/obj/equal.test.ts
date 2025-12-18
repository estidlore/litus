import { copy, equal } from "/obj";

import { person } from "./data";

describe("equal", () => {
  it("returns a deep comparison of objects", () => {
    expect(equal(1, 1)).toBe(true);
    expect(equal(person, person)).toBe(true);
    expect(equal(1, "1")).toBe(false);
    expect(equal(1, person)).toBe(false);

    expect(equal([], {})).toBe(false);
    expect(equal([], [2])).toBe(false);
    expect(equal([1], [2])).toBe(false);

    expect(equal({ a: 1 }, person)).toBe(false);
    expect(equal({ a: 1 }, { b: 2 })).toBe(false);
    expect(equal({ a: 1 }, { a: 2 })).toBe(false);

    const person2 = copy(person);
    expect(equal(person, person2)).toBe(true);
    person2.birth.day++;
    expect(equal(person, person2)).toBe(false);

    expect(equal([person, [1, 2]], [person, [1, 2]])).toBe(true);
  });
});
