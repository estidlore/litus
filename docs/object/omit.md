# omit

Creates a copy of an object without the specified keys

`Since v1.2.1`

## Arguments

- `obj: T` - Source object
- `keys: K[]` - Array of keys to omit from the result

## Returns

`Omit<T, K>` - New object without the specified keys

## Usage

```ts
import * as _ from "litus";

_.omit({ age: 18, name: "John", height: 170 }, ["height"]);
// => { age: 18, name: "John" }
```

## Related Functions

- [copy](copy.md) (dependency)
- [pick](pick.md)
