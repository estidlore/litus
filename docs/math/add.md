# add

Calculates the sum of given quantities (vectors / scalars).

## Arguments

- `...q: Quantity[]`

## Returns

`Calc<A>`

## Usage

```ts
import * as _ from "litus";

_.add([-4, 1, 0, 3, 2], 5);
// => [1, 6, 5, 8, 7]
_.add([1, 2], [3, 4]);
// => [4, 6]
```

## Related Functions

- [calc](calc.md) (dependency)
- [divide](divide.md)
- [mod](mod.md)
- [multiply](multiply.md)
- [pow](pow.md)
- [subtract](subtract.md)
- [sum](sum.md)
