# interp

Calculates the linear interpolation of monotolically increasing points (xp, fp)

`Since v1.2.1`

## Arguments

- `x: number[]` - Points to interpolate
- `xp: number[]` - Known x-coordinates (must be increasing)
- `fp: number[]` - Known y-coordinates (must be increasing, same size as xp)

## Returns

`number[]` - Interpolated values at each x

## Usage

```ts
import * as _ from "litus";

const ix = _.interp([0, 1, 1.5, 2.72, 3.1], [1, 2, 3], [3, 2, 0]);
// => aprox: [3, 3, 2.5, 0.56, 0]
```

## Related Functions

- [binSearch](../array/binSearch.md) (dependency)
- [identity](../function/identity.md) (dependency)
- [percentile](percentile.md) (dependent)
