import * as time from ".";

describe("time", () => {
  it("date", () => {
    expect.assertions(2);

    const t1 = time.time(2500);
    const t2 = time.time(2.5, "s");
    expect(time.date(t1).getTime()).toBe(t1.val);
    expect(time.date(t2).getTime()).toBe(t1.val);
  });

  it("get", () => {
    expect.assertions(2);

    const t = time.time(1.5, "d");
    const d = time.date(t);
    expect(time.get(d, "h")).toStrictEqual(time.to(t, "h"));
    expect(time.get(d)).toStrictEqual(time.to(t));
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
