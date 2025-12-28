# once

Ensures that a function is only executed once. Subsequent calls to the function
will return the result of the first execution

`Since v1.5.0`

## Arguments

- `fn: () => T` - The function to be executed only once

## Returns

`() => T` - A new function that will execute the original function only once

## Usage

```ts
import * as _ from "litus";

const initialize = _.once(() => {
  console.log("Initialized");
  return 42;
});

initialize(); // Logs: "Initialized" => 42
initialize(); // => 42 (does not log again)
```
