# group

Converts an array into an object where each key is a group and its value is an
array of their items

`Since v1.0.0`

## Arguments

- `arr: T[]` - Array to group
- `getKey: (obj: T) => K` - Function to extract the group key from each item

## Returns

`Record<K, T[]>` - Object with keys as group ids and values as arrays of grouped items

## Usage

```ts
import * as _ from "litus";

const objs = [
  { color: "red", size: "S" },
  { color: "green", size: "M" },
  { color: "blue", size: "L" },
  { color: "red", size: "XL" }
];

_.group(objs, (el) => el.color);
// => { "red": [...], "green": [...], "blue": [...] }
```
