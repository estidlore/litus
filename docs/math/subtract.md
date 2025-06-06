# subtract

Calculates the subtraction of two quantities (vectors / scalars)

`Since v1.0.0`

## Arguments

- `a: Quantity`
- `b: Quantity`

## Returns

`Calc<A>`

## Usage

```ts
import * as _ from "litus";

_.subtract([-4, 1, 0, 3, 2], 1);
// => [-5, 0, -1, 2, 1]
_.subtract([1, 2], [3, 4]);
// => [-2, -2]
```

## Related Functions

- [calc](calc.md) (dependency)
- [add](add.md)
- [divide](divide.md)
- [mod](mod.md)
- [multiply](multiply.md)
- [pow](pow.md)
