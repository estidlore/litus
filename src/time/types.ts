type TimeFormat = "date" | "full" | "time";
type TimeFormatOptions = Record<TimeFormat, Intl.DateTimeFormatOptions>;
type TimeUnit = "d" | "h" | "m" | "ms" | "s";

export type { TimeFormat, TimeFormatOptions, TimeUnit };
