# findAll

Finds all the elements that match a given condition

`Since v1.3.1`

## Arguments

- `arr: T[]` - Array to search in
- `predicate: Predicate<T>` - Function to test each element
- `from?: number = 0` - Start index (inclusive)
- `to?: number = arr.length` - End index (exclusive)
- `limit?: number = arr.length` - Maximum number of matches to return

## Returns

`T[]` - Array of matching elements

## Usage

```ts
import * as _ from "litus";

const objs = [
  { color: "red", size: "S" },
  { color: "green", size: "M" },
  { color: "blue", size: "L" },
  { color: "red", size: "XL" }
];

_.findAll(objs, (el) => el.color === "red");
// => [{ color: "red", size: "S" }, { color: "red", size: "XL" }]
```

## Related Functions

- [findAllIdx](findAllIdx.md) (dependency)
- [find](find.md)
- [findIdx](findIdx.md)
