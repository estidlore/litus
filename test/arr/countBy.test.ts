import { countBy } from "/arr/countBy";

describe("countBy", () => {
  it("counts elements by key", () => {
    const arr = ["a", "b", "a", "c", "b", "a"];
    expect(countBy(arr, (x) => x)).toEqual({ a: 3, b: 2, c: 1 });
    expect(countBy([], (x) => x)).toEqual({});
  });

  it("works with computed keys", () => {
    const arr = [1, 2, 3, 4, 5];
    expect(countBy(arr, (x) => (x % 2 === 0 ? "even" : "odd"))).toEqual({
      odd: 3,
      even: 2
    });
  });
});
