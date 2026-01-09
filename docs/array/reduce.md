# reduce

Applies a reducer function to each element accumulating a single value

## Arguments

`arr: ArrayLike<T>` - The array-like object to reduce
`fn: ReduceFn<T, U>` - The reducer function
`initial: U` - The initial accumulator value

## Returns

`U` - The accumulated value

## Usage

```ts
import * as _ from "litus";

_.reduce([1, 2, 3], (acc, val) => acc + val, 0);
// => 6
```

## Related Functions

- [map](map.md)
