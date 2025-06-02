# copy

Creates a deep copy of the provided object or array

## Arguments

- `obj: T`

## Returns

`T`

## Usage

```ts
import * as _ from "litus";

_.copy({ age: 18, name: "John" });
// => { age: 18, name: "John" }
```

## Related Functions

- [entries](entries.md) (dependency)
- [isObj](isObj.md) (dependency)
- [merge](merge.md) (dependent)
- [omit](omit.md) (dependent)
- [pick](pick.md) (dependent)
- [equal](equal.md)
