# vals

Retrieves a strongly-typed array of the values of an object.

`Since v1.0.0`

## Arguments

- `obj: T`

## Returns

`Val<T>[]`

## Usage

```ts
import * as _ from "litus";

_.vals({ age: 18, name: "John" });
// => [18, "John"]
```

## Related Functions

- [entries](entries.md)
- [keys](keys.md)
