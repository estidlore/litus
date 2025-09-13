# last

Returns the last element of an array

`Since v1.6.0`

## Arguments

- `arr: T[]` – The array

## Returns

`T | undefined` – The last element, or undefined if the array is empty

## Usage

```ts
import * as _ from "litus";

_.last(["a", "b", "c"]);
// => "c"
_.last([]);
// => undefined
```
