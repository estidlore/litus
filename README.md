<div align="center">
  <img src="https://raw.githubusercontent.com/estidlore/litus/main/Logo.svg" alt="Logo" width="80" height="80">
  
  <h2>Litus</h2>

  <p>Lightweight and powerful utils for Typescript with smart type inference</p>
  <a href="https://github.com/estidlore/litus/blob/main/docs/docs.md">Docs</a>
</div>

Litus provides strongly-typed utils for:

- Arrays
- Functions
- Math
- Objects
- Strings

## Why Litus?

- Powerful unique utils (i.e. `math.calc`)
- Tree-shakeable (import only what you need)
- Smart type inference
- Lightweight (no dependencies)
- 100% test coverage

## Installation

```sh
npm i litus
```

```sh
yarn add litus
```

## Usage

**Import all utils**

For ES6+ or Typescript

```ts
import * as _ from "litus";
```

For CommonJS

```js
var _ = require("litus");
```

**Import only what you need**

```ts
import { arr, func, math, obj, str } from "litus";
```

```ts
import { aprox, copy, group, memo, template } from "litus";
```

## Contributing

Feel free to open an [issue](https://github.com/estidlore/litus/issues) or fork this repo and create a pull request.
Don't forget to give the project a star!

## License

This package released under the [MIT License](https://github.com/estidlore/litus/blob/main/LICENSE).
