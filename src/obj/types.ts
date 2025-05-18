import type { Split } from "/str/types";

type Entry<T extends object> = [Key<T>, Val<T>];
type Key<T extends object> = keyof T;
type Val<T extends object> = T[keyof T];

type SetPathArr<Obj, P extends string[], Val> = P extends [
  infer K extends string,
  ...infer Rest extends string[]
]
  ? {
      [Key in K | keyof Obj]: Key extends K
        ? Rest extends []
          ? Val
          : SetPathArr<
              Key extends keyof Obj
                ? Obj[Key] extends object
                  ? Obj[Key]
                  : object
                : object,
              Rest,
              Val
            >
        : Key extends keyof Obj
        ? Obj[Key]
        : never;
    }
  : Obj;

type SetPath<Obj, P extends string, Val> = SetPathArr<Obj, Split<P, ".">, Val>;

export type { Entry, Key, SetPath, Val };
