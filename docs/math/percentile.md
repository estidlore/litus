# percentile

Calculates given percentile(s) of an array of numbers.
If weights (occurrences) are provided, it returns weighted percentiles;
otherwise, it returns the linear interpolation of percentiles.

`Since v1.2.1`

## Arguments

- `x: number[]`
- `p: T`
- `weights?: number[]`

## Returns

`number[]`

## Usage

```ts
import * as _ from "litus";

_.percentile([1, 2, 3, 4, 5], [10, 25]);
// => [1.4, 2]
```

## Related Functions

- [cumsum](cumsum.md) (dependency)
- [divide](divide.md) (dependency)
- [interp](interp.md) (dependency)
- [binSearch](../array/binSearch.md) (dependency)
- [range](../array/range.md) (dependency)
- [sort](../array/sort.md) (dependency)
- [transpose](../array/transpose.md) (dependency)
- [identity](../function/identity.md) (dependency)
- [median](median.md) (dependent)
