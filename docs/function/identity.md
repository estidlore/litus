# identity

Returns the input value unchanged. This function is often used as a default
or placeholder function.

`Since v1.5.0`

## Arguments

- `value: T` - The value to return.

## Returns

`T` - The same value that was provided as input.

## Usage

```ts
import * as _ from "litus";

_.identity(5);
// => 5
_.identity("hello");
// => "hello"
_.identity([1, 2, 3]);
// => [1, 2, 3]
```
