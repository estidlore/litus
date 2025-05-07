# apply

Given a function that receives a spread arg (`...args: T[]`), it creates
a new function without spread arg (`args: T[]`).
It's the opposite of [unapply](https://github.com/estidlore/litus/blob/main/docs/function/unapply.md).

**Arguments**

- `fn: (...args: T[]) => R`

**Returns**

`(arg: T[]) => R`

**Usage**

```ts
import * as _ from "litus";

_.apply((...nums: number[]): void => {});
// => (nums: number[]): void => {}
```
