# find

Finds the first element that matches a given condition

`Since v1.2.1`

## Arguments

- `arr: T[]` - Array to search in
- `predicate: Predicate<T>` - Function to test each element
- `from?: number = 0` - Start index (inclusive)
- `to?: number = arr.length` - End index (exclusive)

## Returns

`T` - First matching element, or undefined if none found

## Usage

```ts
import * as _ from "litus";

const objs = [
  { color: "red", size: "S" },
  { color: "green", size: "M" },
  { color: "blue", size: "L" },
  { color: "red", size: "XL" }
];

_.find(objs, (el) => el.color === "red");
// => { color: "red", size: "S" }
_.find(objs, (el) => el.color === "red", 2);
// => { color: "red", size: "XL" }
_.find(objs, (el) => el.color === "red", 1, 3);
// => undefined
```

## Related Functions

- [findIdx](findIdx.md) (dependency)
- [findAll](findAll.md)
- [findAllIdx](findAllIdx.md)
