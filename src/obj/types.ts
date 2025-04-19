export type Entry<T extends object> = [Key<T>, Val<T>];
export type Key<T extends object> = keyof T;
export type Val<T extends object> = T[keyof T];
