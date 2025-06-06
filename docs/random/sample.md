# sample

Samples elements from an array randomly, optionally using weights to influence
the likelihood of selecting elements.

`Since v1.5.0`

## Arguments

- `data: T[]` - The array to sample from.
- `size: number` - The number of elements to sample.
- `weights?: number[]` (optional) - Array of weights, where each weight
  corresponds to the likelihood of selecting the respective element.

## Returns

`T[]` - A new array containing the sampled elements.

## Usage

```ts
import * as _ from "litus";

const data = [1, 2, 3, 4, 5];
_.sample(data, 3);
// => [3, 1, 5] (example output)

const weights = [1, 6, 3, 4, 2];
_.sample(data, 3, weights);
// => [2, 4, 3] (example output)
```

## Related Functions

- [randWeight](./randWeight.md) (dependency)
