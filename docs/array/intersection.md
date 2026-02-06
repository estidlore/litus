# intersection

Returns elements present in both arrays.
Preserves duplicates and order from the first array

`Since v1.7.0`

## Arguments

- `arr: T[]` - First array to intersect
- `arr2: T[]` - Second array to intersect

## Returns

`T[]` - Array of common elements

## Usage

```ts
import * as _ from "litus";

_.intersection([1, 2, 3], [4, 3, 2]);
// => [2, 3]
```

## Related Functions

- [difference](difference.md)
- [union](union.md)
- [unique](unique.md)
