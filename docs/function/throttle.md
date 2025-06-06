# throttle

Given a function, creates a new function that if it's called multiple times
consecutively, it executes the original function only when it's called after
`interval` ms since last execution, the calls between them are ignored.

`Since v1.3.1`

## Arguments

- `fn: (...args: A) => void`
- `interval = 100`

## Returns

`(...args: A) => void`

## Usage

```ts
import * as _ from "litus";

const handleMouseMove = _.throttle((ev) => { ... }, 100);
handleMouseMove(ev); // 0 ms - called
handleMouseMove(ev); // 30 ms - ignored
handleMouseMove(ev); // 60 ms - ignored
handleMouseMove(ev); // 90 ms - ignored
handleMouseMove(ev); // 120 ms - called
```

## Related Functions

- [debounce](debounce.md)
