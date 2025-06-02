# pow

Calculates the exponentiation of two quantities (vectors / scalars)

## Arguments

- `base: Quantity`
- `exp: Quantity`

## Returns

`Calc<A>`

## Usage

```ts
import * as _ from "litus";

_.pow(5, 2);
// => 25
_.pow([-4, 1, 0, 3, 2], 2);
// => [16, 1, 0, 9, 4]
_.pow(3, [0, 1, 2, 3]);
// => [1, 3, 9, 27]
_.pow([1, 2], [3, 4]);
// => [1, 16]
```

## Related Functions

- [calc](calc.md) (dependency)
- [add](add.md)
- [divide](divide.md)
- [mod](mod.md)
- [multiply](multiply.md)
- [subtract](subtract.md)
