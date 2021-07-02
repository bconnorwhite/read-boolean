<div align="center">
  <h1>read-boolean</h1>
  <a href="https://npmjs.com/package/read-boolean">
    <img alt="NPM" src="https://img.shields.io/npm/v/read-boolean.svg">
  </a>
  <a href="https://github.com/bconnorwhite/read-boolean">
    <img alt="TypeScript" src="https://img.shields.io/github/languages/top/bconnorwhite/read-boolean.svg">
  </a>
  <a href="https://coveralls.io/github/bconnorwhite/read-boolean?branch=master">
    <img alt="Coverage Status" src="https://coveralls.io/repos/github/bconnorwhite/read-boolean/badge.svg?branch=master">
  </a>
  <a href="https://github.com/bconnorwhite/read-boolean">
    <img alt="GitHub Stars" src="https://img.shields.io/github/stars/bconnorwhite/read-boolean?label=Stars%20Appreciated%21&style=social">
  </a>
  <a href="https://twitter.com/bconnorwhite">
    <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/bconnorwhite.svg?label=%40bconnorwhite&style=social">
  </a>
</div>

<br />

> Parse a boolean from a string.

## Installation

```sh
yarn add read-boolean
```

```sh
npm install read-boolean
```

## Usage
```ts
import { readBoolean } from "read-boolean";

readBoolean("true");    // true
readBoolean("false");   // false
readBoolen(undefined);  // undefined
readBoolean("other");   // undefined
```

<br />

<h2>Dev Dependencies<img align="right" alt="David" src="https://img.shields.io/david/dev/bconnorwhite/read-boolean.svg"></h2>

- [@bconnorwhite/bob](https://www.npmjs.com/package/@bconnorwhite/bob): Bob is a toolkit for TypeScript projects

<br />

<h2>License <img align="right" alt="license" src="https://img.shields.io/npm/l/read-boolean.svg"></h2>

[MIT](https://opensource.org/licenses/MIT)
