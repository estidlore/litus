# aprox

Compares if two numbers are aproximately equal using a custom precision.
Useful to handle float precision issues

`Since v1.2.1`

## Arguments

- `a: number`
- `b: number`
- `precision = 4`

## Returns

`boolean`

## Usage

```ts
import * as _ from "litus";

_.aprox(3.1416, Math.PI);
// => true
_.aprox(3.14, Math.PI);
// => false
_.aprox(3.14, Math.PI, 2);
// => true
```

## Related Functions

- [round](round.md) (dependency)
