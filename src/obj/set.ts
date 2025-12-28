import { isObj } from "./isObj";

export type SetPath<
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

/**
 * Sets a value at a nested path of an object, creating nested objects if needed
 * @param obj Target object to modify
 * @param path Dot-separated string path where the value should be set
 * @param value Value to set at the specified path
 * @returns Modified object with the value set at the given path
 */
export const set = <T extends object, P extends string, V>(
  obj: T,
  path: P,
  value: V
): SetPath<T, P, V> => {
  let val = obj as Record<string, unknown>;
  const keys = path.split(".");
  const end = keys.length - 1;
  for (let i = 0; i < end; i++) {
    const key = keys[i];
    if (!isObj(val[key])) {
      val[key] = {};
    }
    val = val[key] as Record<string, unknown>;
  }
  val[keys[end]] = value;
  return obj as SetPath<T, P, V>;
};
