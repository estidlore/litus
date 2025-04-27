import type { Val } from "./types";

export const vals: <T extends object>(obj: T) => Val<T>[] = Object.values;
