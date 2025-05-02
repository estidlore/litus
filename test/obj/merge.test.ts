import { merge } from "/obj";

import { person } from "./data";

describe("merge", () => {
  it("returns object from shallow merge of objects", () => {
    const extra = {
      gender: "Male",
      height: 175
    };
    const union = merge(person, extra);
    const expected = Object.assign({}, person, extra);

    expect(union).toStrictEqual(expected);
    expect(union).not.toBe(expected);
    expect(union.birth).not.toBe(person.birth);
  });
});
