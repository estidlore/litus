# findAllIdx

Finds the index of all the elements that match a given condition

## Arguments

- `arr: T[]`
- `predicate: Predicate<T>`
- `from = 0`
- `to = arr.length`
- `limit = arr.length`

## Returns

`number[]`

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
