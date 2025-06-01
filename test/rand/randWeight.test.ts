import { from } from "/arr";
import { randWeight } from "/rand";

describe("randWeight", () => {
  it("throws an error for invalid weights array", () => {
    expect(() => randWeight([])).toThrow("Weights array cannot be empty");
    expect(() => randWeight([1, -2, 3])).toThrow(
      "Weights array cannot contain negative values"
    );
    expect(() => randWeight([0, 0, 0])).toThrow(
      "Total weight must be greater than zero"
    );
  });

  it("returns a valid index based on weights", () => {
    const weights = [1, 3, 6];
    const res = from(100, () => randWeight(weights));
    expect(res.every((idx) => idx >= 0 && idx < weights.length)).toBe(true);
  });

  it("favors indices with higher weights", () => {
    const weights = [1, 3, 6];
    const res = from(100, () => randWeight(weights));

    const counts = [0, 0, 0];
    res.forEach((idx) => {
      counts[idx]++;
    });

    expect(counts[0]).toBeLessThan(counts[1]);
    expect(counts[1]).toBeLessThan(counts[2]);
  });
});
