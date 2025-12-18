# copy

Creates a deep copy of the provided object or array

`Since v1.0.0`

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

- [isObj](isObj.md) (dependency)
- [keys](keys.md) (dependency)
- [merge](merge.md) (dependent)
- [omit](omit.md) (dependent)
- [pick](pick.md) (dependent)
- [equal](equal.md)
