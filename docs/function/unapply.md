# unapply

Given a function that receives an array arg (`arg: T[]`), it creates
a new function with spread arg (`...args: T[]`).
It's the opposite of [apply](https://github.com/estidlore/litus/blob/main/docs/function/apply.md).

**Arguments**

- `fn: (arg: T[]) => R`

**Returns**

`(...args: T[]) => R`

**Usage**

```ts
import * as _ from "litus";

_.unapply((nums: number[]): void => {});
// => (...nums: number[]): void => {}
```
