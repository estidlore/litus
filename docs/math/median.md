# median

Calculates the median of an array of numbers

`Since v1.0.0`

## Arguments

- `arr: number[]`
- `weights?: number[]`

## Returns

`number`

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
