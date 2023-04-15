type Entry<T extends object> = [Key<T>, Val<T>];
type KeyOf<T extends object> = Exclude<keyof T, symbol>;
type Key<T extends object> = `${KeyOf<T>}`;
type Val<T extends object> = T[KeyOf<T>];

export type { Entry, Key, KeyOf, Val };
