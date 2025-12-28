# keys

Retrieves a strongly-typed array of the keys of an object

`Since v1.0.0`

## Arguments

- `obj: T`

## Returns

`Key<T>[]`

## Usage

```ts
import * as _ from "litus";

_.keys({ age: 18, name: "John" });
// => ["age", "name"]
```

## Related Functions

- [copy](copy.md) (dependent)
- [equal](equal.md) (dependent)
- [entries](entries.md)
- [vals](vals.md)
