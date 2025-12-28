# range

Creates an array of numbers between `start` and `end` (`[start, end)`) with
optional `step`

`Since v1.0.0`

## Arguments

- `a: number` - Start of the range (inclusive)
- `b: number` - End of the range (exclusive)
- `step?: number = 1` - Step between elements

## Returns

`number[]` - Array of numbers in the specified range

## Usage

```ts
import * as _ from "litus";

_.range(0, 5);
// => [0, 1, 2, 3, 4]
_.range(0, 5, 2);
// => [0, 2, 4]
```

## Related Functions

- [percentile](../math/percentile.md) (dependent)
