# entries

Retrieves a strongly-typed array of the entries (key, value) of an object.

`Since v1.0.0`

## Arguments

- `obj: T`

## Returns

`Entry<T>[]`

## Usage

```ts
import * as _ from "litus";

_.entries({ age: 18, name: "John" });
// => [["age", 18], ["name", "John"]]
```

## Related Functions

- [keys](keys.md)
- [vals](vals.md)
