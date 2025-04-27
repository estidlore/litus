<div align="center">
  <img src="https://raw.githubusercontent.com/estidlore/litus/main/Logo.svg" alt="Logo" width="80" height="80">
  
  <h2 align="center">Litus</h2>

  <p align="center">
    Lightweight and powerful utils for Typescript with smart type inference
    <br />
    <a href="https://github.com/estidlore/litus/issues">Report Bug</a>
  </p>
</div>

Litus provides strongly-typed utils for:

- [Arrays](https://github.com/estidlore/litus/blob/main/docs/Array.md)
- [Functions](https://github.com/estidlore/litus/blob/main/docs/Function.md)
- [Math](https://github.com/estidlore/litus/blob/main/docs/Math.md)
- [Objects](https://github.com/estidlore/litus/blob/main/docs/Object.md)

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
import { arr, func, math, obj } from "litus";
```

```ts
import { aprox, copy, group, memo } from "litus";
```

## Contributing

Feel free to open an [issue](https://github.com/estidlore/litus/issues) or fork this repo and create a pull request.
Don't forget to give the project a star!

## License

This package released under the [MIT License](https://github.com/estidlore/litus/blob/main/LICENSE).
