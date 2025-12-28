# countBy

Counts the occurrences of items in an array, grouping them by a key

`Since v1.6.0`

## Arguments

- `arr: T[]` – Array to count occurrences
- `getKey: (obj: T) => K` - Function to extract the key for grouping

## Returns

`Record<K, number>` - Object mapping each key to its count

## Usage

```ts
import * as _ from "litus";

const arr = [
  { type: "fruit", name: "apple" },
  { type: "fruit", name: "banana" },
  { type: "vegetable", name: "carrot" },
  { type: "fruit", name: "orange" },
  { type: "vegetable", name: "lettuce" }
];

_.countBy(arr, (el) => el.type);
// => { fruit: 3, vegetable: 2 }
```
