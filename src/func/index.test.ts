import * as func from ".";

describe("func", () => {
  it("apply & unapply", () => {
    expect.assertions(2);

    const appliedMax = func.apply(Math.max);
    expect(appliedMax([-3, 1, 2])).toBe(2);
    const max = func.unapply(appliedMax);
    expect(max(-3, 1, 2)).toBe(2);
  });
});
