import type { TimeUnit } from "../types";

class Time {
  public static UNITS: Record<TimeUnit, number> = {
    d: 864e5,
    h: 36e5,
    m: 6e4,
    ms: 1,
    s: 1e3
  };

  private readonly date;

  public constructor(val?: number, unit: TimeUnit = "ms") {
    this.date = new Date();
    if (val !== undefined) {
      this.set(val, unit);
    }
  }

  public static convert(
    val: number,
    from: TimeUnit,
    to: TimeUnit = "ms"
  ): number {
    const ms = Math.round(Time.UNITS[from] * val);
    return ms / Time.UNITS[to];
  }

  public add(val: number, unit: TimeUnit = "ms"): number {
    return this.set(this.get(unit) + val, unit);
  }

  public get(unit: TimeUnit = "ms"): number {
    return Time.convert(this.date.getTime(), "ms", unit);
  }

  public getDayTime(unit: TimeUnit = "ms"): number {
    return Time.convert(this.get("d") % 1, "d", unit);
  }

  public set(val: number, unit: TimeUnit = "ms"): number {
    return this.date.setTime(Time.convert(val, unit));
  }

  public setDayTime(val: number, unit: TimeUnit = "ms"): number {
    return this.add(val - this.getDayTime(unit), unit);
  }

  public toDate(): Date {
    return new Date(this.date);
  }
}

export { Time };
