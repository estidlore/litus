# from

Creates an array of size n with a custom map function

`Since v1.0.0`

## Arguments

- `n: number` - Size of the array to create
- `mapFn: (i: number) => T` - Function that maps each index to an array element

## Returns

`T[]` - Array of mapped values

## Usage

```ts
import * as _ from "litus";

_.from(5, (i) => i % 3);
// => [0, 1, 2, 0, 1]
```

## Related Functions

- [calc](../math/calc.md) (dependent)
