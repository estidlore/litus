# chunk

Splits an array in several sub-arrays of given size

`Since v1.0.0`

## Arguments

- `arr: T[]`
- `size: number`

## Returns

`T[][]`

## Usage

```ts
import * as _ from "litus";

_.chunk([1, 2, 3, 4], 2);
// => [[1, 2], [3, 4]]
_.chunk([1, 2, 3], 2);
// => [[1, 2], [3]]
```
