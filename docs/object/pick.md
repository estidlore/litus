# pick

Creates a copy of an object with the specified keys only

`Since v1.2.1`

## Arguments

- `obj: T` - Source object
- `keys: K[]` - Array of keys to pick from the object

## Returns

`Pick<T, K>` - New object with only the picked keys

## Usage

```ts
import * as _ from "litus";

_.pick({ age: 18, name: "John", height: 170 }, ["height"]);
// => { height: 170 }
```

## Related Functions

- [copy](copy.md) (dependency)
- [omit](omit.md)
