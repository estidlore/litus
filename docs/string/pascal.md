# pascal

Converts a string to PascalCase by capitalizing the first letter of each word
and removing spaces or delimiters.

**Arguments**

- `str: string` - The input string to be converted to PascalCase.

**Returns**

`string` - The PascalCase version of the input string.

**Usage**

```ts
import * as _ from "litus";

_.pascal("Hello World");
// => "HelloWorld"
_.pascal("helloWorld");
// => "HelloWorld"
_.pascal("hello_world");
// => "HelloWorld"
_.pascal("helloITWorld");
// => "HelloItWorld"
```
