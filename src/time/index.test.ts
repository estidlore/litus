import { Time } from ".";

describe("Time", () => {
  it("constructor", () => {
    expect.assertions(3);

    const now = Math.round(Time.convert(Date.now(), "ms", "s"));
    expect(Math.round(new Time().get("s"))).toBe(now);
    expect(new Time(1).get()).toBe(1);
    expect(new Time(1.1, "s").get()).toBe(1100);
  });

  it("convert", () => {
    expect.assertions(2);

    expect(Time.convert(2, "s")).toBe(2000);
    expect(Time.convert(-1, "h", "d")).toBe(-1 / 24);
  });

  it("add", () => {
    expect.assertions(2);

    const t = new Time(1, "s");
    expect(t.add(1500)).toBe(2500);
    expect(t.add(-2.4, "s")).toBe(100);
  });

  it("get", () => {
    expect.assertions(2);

    const t = new Time(1.5, "d");
    expect(t.get()).toBe(Time.convert(1.5, "d"));
    expect(t.get("h")).toBe(36);
  });

  it("getDayTime", () => {
    expect.assertions(2);

    const t = new Time(48, "h");
    t.add(2.1, "s");
    expect(t.getDayTime()).toBe(2100);
    expect(t.getDayTime("s")).toBe(2.1);
  });

  it("set", () => {
    expect.assertions(2);

    const t = new Time();
    expect(t.set(2)).toBe(2);
    expect(t.set(7, "s")).toBe(7000);
  });

  it("setDayTime", () => {
    expect.assertions(2);

    const t = new Time(24.1, "h");
    expect(t.setDayTime(12 * 60e3)).toBe(Time.convert(24.2, "h"));
    expect(t.setDayTime(1, "h")).toBe(Time.convert(25, "h"));
  });

  it("toDate", () => {
    expect.assertions(1);

    const t = new Time(5, "m");
    expect(t.toDate().getTime()).toBe(t.get());
  });
});
