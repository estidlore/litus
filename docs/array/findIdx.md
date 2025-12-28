# findIdx

Finds the index of the first element that matches a given condition

`Since v1.2.1`

## Arguments

- `arr: T[]` - Array to search in
- `predicate: Predicate<T>` - Function to test each element
- `from?: number = 0` - Start index (inclusive)
- `to?: number = arr.length` - End index (exclusive)

## Returns

`number` - Index of the first matching element, or -1 if none found

## Usage

```ts
import * as _ from "litus";

const objs = [
  { color: "red", size: "S" },
  { color: "green", size: "M" },
  { color: "blue", size: "L" },
  { color: "red", size: "XL" }
];

_.findIdx(objs, (el) => el.color === "red");
// => 0
_.findIdx(objs, (el) => el.color === "red", 2);
// => 3
_.findIdx(objs, (el) => el.color === "red", 1, 3);
// => -1
```

## Related Functions

- [find](find.md) (dependent)
- [findAll](findAll.md)
- [findAllIdx](findAllIdx.md)
