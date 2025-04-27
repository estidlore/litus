import type { Key } from "./types";

export const keys: <T extends object>(obj: T) => Key<T>[] = Object.keys;
