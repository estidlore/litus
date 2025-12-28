# cumsum

Calculates the cumulative sum of an array of numbers

`Since v1.2.1`

## Arguments

- `arr: number[]` - Array of numbers to sum

## Returns

- `number[]` - Array of cumulative sums

## Usage

```ts
import * as _ from "litus";

_.cumsum([-4, 1, 0, 3, 2]);
// => [-4, -3, -3, 0, 2]
```

## Related Functions

- [percentile](percentile.md) (dependent)
- [randWeight](../random/randWeight.md) (dependent)
