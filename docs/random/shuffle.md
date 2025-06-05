# shuffle

Shuffles an array randomly, optionally using weights to influence the
likelihood of selecting elements first.

## Arguments

- `data: T[]` - The array to shuffle.
- `weights?: number[]` (optional) - Array of weights, where each weight
  corresponds to the likelihood of selecting the respective element first

## Returns

`T[]` - A new array with the elements shuffled.

## Usage

```ts
import * as _ from "litus";

const data = [1, 2, 3, 4, 5];
_.shuffle(data);
// => [3, 1, 5, 2, 4] (example output)

const weights = [1, 6, 3, 4, 2];
_.shuffle(data, weights);
// => [2, 4, 3, 5, 1] (example output)
```

## Related Functions

- [randWeight](randWeight.md) (dependency)
