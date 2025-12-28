# median

Calculates the median of an array of numbers

`Since v1.0.0`

## Arguments

- `arr: number[]` - Array of numbers
- `weights?: number[]` - Array of weights

## Returns

`number` - Median of the given numbers

## Usage

```ts
import * as _ from "litus";

_.median([-4, 1, 0, 3, 2]);
// => 1
_.median([1, 0, 3, 2]);
// => 1.5
```

## Related Functions

- [percentile](percentile.md) (dependency)
- [mean](mean.md)
