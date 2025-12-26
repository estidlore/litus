# clamp

Clamps a number between a minimum and maximum value

`Since v1.6.0`

## Arguments

- `x: number` - The number to clamp
- `min: number` - The lower bound
- `max: number` - The upper bound

## Returns

`number` - The clamped value

## Usage

```ts
import * as _ from "litus";

_.clamp(5, 0, 10);
// => 5
_.clamp(-1, 0, 10);
// => 0
_.clamp(15, 0, 10);
// => 10
```

## Related Functions

- [min](../array/min.md)
- [max](../array/max.md)
