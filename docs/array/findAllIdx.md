# findAllIdx

Finds the index of all the elements that match a given condition

`Since v1.3.1`

## Arguments

- `arr: T[]` - Array to search in
- `predicate: Predicate<T>` - Function to test each element
- `from?: number = 0` - Start index (inclusive)
- `to?: number = arr.length` - End index (exclusive)
- `limit?: number = arr.length` - Maximum number of indices to return

## Returns

`number[]` - Array of matching indices

## Usage

```ts
import * as _ from "litus";

const objs = [
  { color: "red", size: "S" },
  { color: "green", size: "M" },
  { color: "blue", size: "L" },
  { color: "red", size: "XL" }
];

_.findAllIdx(objs, (el) => el.color === "red");
// => [0, 3]
```

## Related Functions

- [findAll](findAll.md) (dependent)
- [find](find.md)
- [findIdx](findIdx.md)
