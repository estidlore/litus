# last

Returns the last element of an array

`Since v1.6.0`

## Arguments

- `arr: A` – The array

## Returns

`Last<A>` – The last element, or undefined if the array is empty

## Usage

```ts
import * as _ from "litus";

_.last(["a", "b", "c"]);
// => "c"
_.last([]);
// => undefined
```

## Related Functions

- [first](first.md)
