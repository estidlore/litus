# find

Finds the first element that matches a given condition

## Arguments

- `arr: T[]`
- `predicate: Predicate<T>`
- `from = 0`
- `to = arr.length`

## Returns

`T`

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
