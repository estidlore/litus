# all

Returns `true` if all the elements satisfy the predicate, `false` otherwise

`Since v1.7.0`

## Arguments

- `arr: ArrayLike<T>` - The array-like object to check
- `predicate: Predicate<T>` - Function to test each element

## Returns

`boolean` - `true` if all the elements satisfy the predicate, otherwise `false`

## Usage

```ts
import * as _ from "litus";

_.all([1, 2, 3], (x) => x < 5); // true
_.all([1, 2, 3], (x) => x === 2); // false
```

## Related Functions

- [any](any.md)
- [none](none.md)
