type TimeUnit = "d" | "h" | "m" | "ms" | "s";

interface Time {
  unit: TimeUnit;
  val: number;
}

export type { Time, TimeUnit };
