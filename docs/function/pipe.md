# pipe

Creates a function by composing multiple unary functions from left to right.
The output of each function is passed as the input to the next.

## Arguments

- `...fns: UnaryFn[]` – A sequence of unary functions to compose.

## Returns

`(input: FirstFnArg) => LastFnReturn` – A composed function from left to right.

## Usage

```ts
import * as _ from "litus";

const len = (s: string): number => s.length;
const isEven = (x: number): boolean => x % 2 === 0;
const isEvenLen = _.pipe(len, isEven);
isEvenLen("abc"); // false
isEvenLen("abcd"); // true
```
