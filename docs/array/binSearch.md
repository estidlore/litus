# binSearch

Performs a binary search on a sorted array and returns the index at which the
target value should be inserted to maintain order. The function uses a custom
accessor `getVal` to extract the value for comparison from each element.

## Arguments

- `arr: T[]` - The sorted array to search.
- `target: number` - The value to search for.
- `getVal: (el: T) => number` - Function that returns the value to compare from each element.
- `start: number` (optional) - The starting index of the search range (inclusive).
- `end: number` (optional) - The ending index of the search range (exclusive).

## Returns

`number` - The index at which the target should be inserted to maintain order.

## Usage

```ts
import * as _ from "litus";
const arr = [{ v: 2 }, { v: 4 }, { v: 6 }];

binSearch(arr, 2, (el) => el.v);
// => 0
binSearch(arr, 5, (el) => el.v);
// => 2
binSearch(arr, 7, (el) => el.v);
// => 3
```

## Related Functions

- [interp](../math/interp.md) (dependent)
- [percentile](../math/percentile.md) (dependent)
- [randWeight](../random/randWeight.md) (dependent)
