# map

Creates an array with the results of calling a mapping function on each
element

`Since v1.7.0`

## Arguments

- `arr: ArrayLike<T>` - The array-like object to map over
- `fn: MapFn<T, U>` - Function to apply to each element

## Returns

`U[]` - A new array with the results of calling `fn` on each element

## Usage

```ts
import * as _ from "litus";

_.map(["a", "b", "c"], (el) => el.toUpperCase());
// => ["A", "B", "C"]
```

## Related Functions

- [reduce](reduce.md)
