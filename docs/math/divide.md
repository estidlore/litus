# divide

Calculates the division of two quantities (vectors / scalars)

`Since v1.0.0`

## Arguments

- `a: Quantity` - Dividend (number or array)
- `b: Quantity` - Divisor (number or array)

## Returns

`Calc<A>` - Division of the input quantities

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
- [add](add.md)
- [mod](mod.md)
- [multiply](multiply.md)
- [pow](pow.md)
- [subtract](subtract.md)
