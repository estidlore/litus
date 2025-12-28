# debounce

Given a function, creates a new function that if it's called multiple times
consecutively, only the last call is executed

`Since v1.1.0`

## Arguments

- `fn: (...args: A) => void`
- `delay: number = 100`

## Returns

`(...args: A) => void`

## Usage

```ts
import * as _ from "litus";

const search = _.debounce((input: string) => { ... }, 300);
search("C"); // ignored
search("Co"); // ignored
search("Com"); // ignored
search("Comp"); // ignored
search("Compu"); // ignored
search("Comput"); // ignored
search("Compute"); // ignored
search("Computer"); // called after 300ms
```

## Related Functions

- [throttle](throttle.md)
