<!-- HEADER -->

<div align="center">
  <img src="https://raw.githubusercontent.com/estidlore/litus/main/Logo.svg" alt="Logo" width="80" height="80">
  
  <h2 align="center">Litus</h2>

  <p align="center">
    Commonly used utilities for JS and TS
    <br />
    <a href="https://github.com/estidlore/litus/issues">Report Bug</a>
  </p>
</div>

Litus provides strongly-typed utils for:

- **Arrays:** chunk, from, group, ... (12 total)
- **Functions:** apply, curry, unapply, ... (5 total)
- **Math:** aprox, multiply, percentile, mod, ... (16 total)
- **Object:** copy, entries, merge, ... (10 total)
- **Time:** convert, format, setDayTime, ...

<!-- Installation -->

## Installation

Using npm

```
npm i litus
```

Using yarn

```
yarn add litus
```

<!-- Usage -->

## Usage

**Import all utils**

For ES6+ or Typescript

```
import * as ls from "litus";
```

For CommonJS

```
var ls = require("litus");
```

**Import what you need only**

```
import type { Literal, TimeFormat } from "litus";
import { arr, math, obj, Time } from "litus";
```

<!-- CONTRIBUTING -->

## Contributing

Feel free to open an [issue](https://github.com/estidlore/litus/issues) or fork this repo and create a pull request.
Don't forget to give the project a star!

<!-- LICENSE -->

## License

This package released under the [MIT License](https://github.com/estidlore/litus/blob/main/LICENSE).
