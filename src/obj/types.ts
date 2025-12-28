type Entry<T extends object> = [Key<T>, Val<T>];
type Key<T extends object> = keyof T;
type Val<T extends object> = T[keyof T];

export type { Entry, Key, Val };
