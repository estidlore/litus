import * as time from ".";

describe("time", () => {
  it("convert", () => {
    expect.assertions(5);

    expect(time.convert("h", "s")).toBe(3600);
    expect(time.convert("d", "m")).toBe(1440);
    expect(time.convert("ms", "s")).toBe(1 / 1000);
    expect(time.convert("h", "d")).toBe(1 / 24);
    expect(time.convert("m", "m")).toBe(1);
  });
});
