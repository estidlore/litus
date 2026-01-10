# forEach

Calls the provided function for each element of an array-like object

`Since v1.7.0`

## Arguments

- `arr: ArrayLike<T>` - The array-like object to iterate over
- `fn: ForEachFn<T>` - The function to execute for each element

## Usage

```ts
import * as _ from "litus";

_.forEach(["a", "b", "c"], (el) => console.log(el));
// log: a
// log: b
// log: c
```

## Related Functions

- [map](map.md)
- [reduce](reduce.md)
