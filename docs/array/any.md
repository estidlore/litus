# any

Returns `true` if any element satisfies the predicate, `false` otherwise

`Since v1.7.0`

## Arguments

- `arr: ArrayLike<T>` - The array-like object to check
- `predicate: Predicate<T>` - Function to test each element

## Returns

`boolean` - `true` if any element satisfies the predicate, otherwise `false`

## Usage

```ts
import * as _ from "litus";

_.any([1, 2, 3], (x) => x > 5); // false
_.any([1, 2, 3], (x) => x === 2); // true
```

## Related Functions

- [all](all.md)
- [none](none.md)
