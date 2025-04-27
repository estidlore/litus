import type { Entry } from "./types";

export const entries: <T extends object>(obj: T) => Entry<T>[] = Object.entries;
