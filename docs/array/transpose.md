# transpose

Switches the axes of a 2D array. It also works as a "zip" function

## Arguments

- `matrix: T`

## Returns

`Transpose<T>`

## Usage

```ts
import * as _ from "litus";

const matrix = [
  [1, 2, 3],
  [4, 5, 6]
];
_.transpose(matrix);
// => [[1, 4], [2, 5], [3, 6]]
```

## Related Functions

- [from](from.md) (dependency)
- [zip](zip.md) (dependent)
- [percentile](../math/percentile.md) (dependent)
