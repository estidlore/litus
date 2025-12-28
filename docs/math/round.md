# round

Rounds a quantity (vector / scalar) to given precision decimals

`Since v1.0.0`

## Arguments

- `q: Quantity` - Number or array to round
- `precision?: number = 0` - Number of decimal places to round to

## Returns

`Quantity` - Rounded quantity

## Usage

```ts
import * as _ from "litus";

_.round([-72, 57.6, -1.024]);
// => [-72, 58, -1]
_.round([-72, 57.6, -1.024], 2);
// => [-72, 57.6, -1.02]
```

## Related Functions

- [aprox](aprox.md) (dependent)
