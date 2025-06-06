# multiply

Calculates the multiplication of given quantities (vectors / scalars).

`Since v1.0.0`

## Arguments

- `...q: Quantity[]`

## Returns

`Calc<A>`

## Usage

```ts
import * as _ from "litus";

_.multiply([-4, 1, 0, 3, 2], 3);
// => [-12, 3, 0, 9, 6]
_.multiply([1, 2], [3, 4]);
// => [3, 8]
```

## Related Functions

- [calc](calc.md) (dependency)
- [mean](mean.md) (dependent)
- [add](add.md)
- [divide](divide.md)
- [mod](mod.md)
- [pow](pow.md)
- [subtract](subtract.md)
