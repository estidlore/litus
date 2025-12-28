# memo

Creates a function that caches the output to speed up complex computations. It
also receives an optional function to get the cache id of given args and an
optional ttl in ms to expire the cache

`Since v1.2.1`

## Arguments

- `fn: (...args: T) => R` - Function to memoize
- `idFn?: (arg: T) => Primitive = JSON.stringify` - Function to generate a cache key from arguments
- `ttl?: number = 0` - Cache expiration time in milliseconds

## Returns

`(...args: T) => R` - Memoized function

## Usage

```ts
import * as _ from "litus";

const fibonacci = _.memo((n: number): number { ... });
fibonacci(99); // called
fibonacci(99); // not called, output of 99 is cached
```
