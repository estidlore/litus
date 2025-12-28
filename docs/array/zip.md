# zip

Creates an array of grouped elements, the first of which contains the first
elements of the given arrays, the second of which contains the second elements
of the given arrays, and so on

`Since v1.3.1`

## Arguments

- `...arrays: T`

## Returns

`Transpose<T>`

## Usage

```ts
import * as _ from "litus";

_.zip([1, 2, 3], ["a", "b", "c"], [true, false, true]);
// => [[1, "a", true], [2, "b", false], [3, "c", true]]
```

## Related Functions

- [transpose](transpose.md) (dependency)
