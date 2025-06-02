# set

Sets a value at a nested path of an object, creating nested objects if the path
does not exist.

## Arguments

- `obj: T` — The target object to modify.
- `path: P` — The dot-separated string path where the value should be set.
- `value: V` — The value to set at the specified path.

## Returns

`SetPath<T, P, V>` — The modified object with the value set at the given path.

## Usage

```ts
let data = { a: 2 };
set(data, "a", 3);
// => { a: 3 }
set(data, "b.c", "Hi");
// => { a: 3, b: { c: "Hi" } }
set(data, "b.d", true);
// => { a: 3, b: { c: "Hi", d: true } }
```

## Related Functions

- [isObj](isObj.md) (dependency)
- [get](get.md)
- [has](has.md)
