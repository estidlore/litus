# divide

Calculates the division of two quantities (vectors / scalars)

`Since v1.0.0`

## Arguments

- `a: Quantity`
- `b: Quantity`

## Returns

`Calc<A>`

## Usage

```ts
import * as _ from "litus";

_.divide([-4, 1, 0, 3], 2);
// => [-2, 0.5, 0, 1.5]
_.divide([1, 2], [3, 4]);
// => [1 / 3, 0.5]
```

## Related Functions

- [calc](calc.md) (dependency)
- [percentile](percentile.md) (dependent)
- [add](add.md)
- [mod](mod.md)
- [multiply](multiply.md)
- [pow](pow.md)
- [subtract](subtract.md)
