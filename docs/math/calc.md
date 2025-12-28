# calc

Given an operation function, it creates a new function that calculates the
result of that operation over any combination of quantities (vectors / scalars)

`Since v1.1.0`

## Arguments

- `opFn: (...nums: T) => number`

## Returns

- `(...q: Quantity[]) => Calc<T>`

## Usage

```ts
import * as _ from "litus";

// fn will receive 3 args (a, b, c). Each can be a vector or a scalar.
const fn = _.calc((a, b, c) => a * b + c);
fn([1, 2], 3, 4);
// => [7, 10]
fn(1, [2, 3, 4], [0, -1, -2]);
// => [2, 2, 2]
```

## Related Functions

- [from](../array/from.md) (dependency)
- [add](add.md) (dependent)
- [divide](divide.md) (dependent)
- [mod](mod.md) (dependent)
- [multiply](multiply.md) (dependent)
- [pow](pow.md) (dependent)
- [subtract](subtract.md) (dependent)
