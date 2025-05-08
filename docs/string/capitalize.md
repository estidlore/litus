# capitalize

Capitalizes the first letter of a string and converts the rest to lowercase.

**Arguments**

- `str: string` - The string to be capitalized.

**Returns**

`string` - The transformed string.

**Usage**

```ts
import * as _ from "litus";

_.capitalize("hello world");
// => "Hello world"
_.capitalize("hElLo");
// => "Hello"
```
