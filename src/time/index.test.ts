import * as time from ".";

describe("time", () => {
  it("add", () => {
    expect.assertions(2);

    const t1 = time.time(1, "m");
    const t2 = time.time(18, "s");
    expect(time.add(t1, t2)).toStrictEqual({ unit: "m", val: 1.3 });
    expect(time.add(t2, t1)).toStrictEqual({ unit: "s", val: 78 });
  });

  it("date", () => {
    expect.assertions(2);

    const t1 = time.time(2500);
    const t2 = time.time(2.5, "s");
    expect(time.date(t1).getTime()).toBe(t1.val);
    expect(time.date(t2).getTime()).toBe(t1.val);
  });

  it("dayTime", () => {
    expect.assertions(2);

    const d = time.date(time.add(time.time(48, "h"), time.time(2.1, "s")));
    expect(time.dayTime(d)).toStrictEqual({ unit: "ms", val: 2100 });
    expect(time.dayTime(d, "s")).toStrictEqual({ unit: "s", val: 2.1 });
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
