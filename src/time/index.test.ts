import * as time from ".";

describe("time", () => {
  it("convert", () => {
    expect.assertions(7);

    expect(time.convert("h", "s")).toBe(3600);
    expect(time.convert("d", "m")).toBe(1440);
    expect(time.convert("ms", "s")).toBe(1 / 1000);
    expect(time.convert("h", "d")).toBe(1 / 24);
    expect(time.convert("m", "m")).toBe(1);
    expect(time.convert("s", "m", 120)).toBe(2);
    expect(time.convert("h", "s", -1)).toBe(-3600);
  });

  it("date", () => {
    expect.assertions(2);

    expect(time.date(2, "d").getTime()).toBe(time.convert("h", "ms", 48));
    expect(time.date(2500).getTime()).toBe(time.date(2.5, "s").getTime());
  });

  it("get", () => {
    expect.assertions(2);

    const d = time.date(1.5, "d");
    expect(time.get(d, "h")).toBe(time.convert("d", "h", 1.5));
    expect(time.get(d)).toBe(time.convert("d", "ms", 1.5));
  });

  it("time", () => {
    expect.assertions(2);

    expect(time.time(3)).toStrictEqual({ unit: "ms", val: 3 });
    expect(time.time(-4, "h")).toStrictEqual({ unit: "h", val: -4 });
  });

  it("to", () => {
    expect.assertions(2);

    expect(time.to(time.time(2, "s"))).toStrictEqual({
      unit: "ms",
      val: 2000
    });
    expect(time.to(time.time(-1, "h"), "d")).toStrictEqual({
      unit: "d",
      val: -1 / 24
    });
  });
});
