type Entry<T extends object> = [Key<T>, Val<T>];
type Key<T extends object> = keyof T;
type Val<T extends object> = T[keyof T];

type SetPath<
  Obj extends object,
  P extends string,
  Val
> = P extends `${infer K}.${infer Rest}`
  ? {
      [Key in K | keyof Obj]: Key extends K
        ? Rest extends []
          ? Val
          : SetPath<
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

export type { Entry, Key, SetPath, Val };
