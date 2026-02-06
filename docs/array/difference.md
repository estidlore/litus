# difference

Returns elements from the first array excluding elements in the second array

`Since v1.7.0`

## Arguments

`arr: T[]` - The primary array
`arr2: T[]` - The values to exclude

## Returns

`T[]` - A new array containing elements from arr not present in arr2

## Usage

```ts
import * as _ from "litus";

_.difference([1, 2, 2, 1, 3], [1, 2]);
// => [1, 2, 3]
```

## Related Functions

- [intersection](intersection.md)
- [union](union.md)
- [unique](unique.md)
