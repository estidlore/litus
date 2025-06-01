# randWeight

Generates a random index based on the provided weights.

**Arguments**

- `weights: number[]` - Array of weights, where each weight corresponds to the likelihood of selecting the respective index.

**Returns**

`number` - The index selected based on the weights.

**Usage**

```ts
import * as _ from "litus";

const weights = [1, 6, 3];
const index = _.randWeight(weights);
// => 1 with 60% prob, 2 with 30% prob, 0 with 10% prob
```
