# mean

Calculates the mean of an array of numbers

`Since v1.0.0`

## Arguments

- `arr: number[]` - Array of numbers
- `weights?: number[]` - Array of weights

## Returns

`number` - Mean of the given numbers

## Usage

```ts
import * as _ from "litus";

const nums = [-4, 1, 0, 3, 2];
_.mean(nums);
// => 2 / 5
const meanw = _.mean(nums, [1, 2, 3, 4, 5]);
// => 20 / 15
```

## Related Functions

- [sum](sum.md) (dependency)
- [median](median.md)
