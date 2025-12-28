# union

Creates a set with the unique values of all given arrays

`Since v1.2.1`

## Arguments

- `...arrs: T[][]` - Arrays to union

## Returns

`Set<T>` - Set of unique values

## Usage

```ts
import * as _ from "litus";

_.union([1, 2], [2, 3]);
// => {1, 2, 3}
```
