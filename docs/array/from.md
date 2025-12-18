# from

Creates an array of size n with a custom map function

`Since v1.0.0`

## Arguments

- `n: number`
- `mapFn: (i: number) => T`

## Returns

`T[]`

## Usage

```ts
import * as _ from "litus";

_.from(5, (i) => i % 3);
// => [0, 1, 2, 0, 1]
```

## Related Functions

- [calc](../math/calc.md) (dependent)
