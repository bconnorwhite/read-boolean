<!--BEGIN HEADER-->
<div id="top" align="center">
  <h1>read-boolean</h1>
  <a href="https://npmjs.com/package/read-boolean">
    <img alt="NPM" src="https://img.shields.io/npm/v/read-boolean.svg">
  </a>
  <a href="https://github.com/bconnorwhite/read-boolean">
    <img alt="TypeScript" src="https://img.shields.io/github/languages/top/bconnorwhite/read-boolean.svg">
  </a>
  <a href="https://coveralls.io/github/bconnorwhite/read-boolean?branch=master">
    <img alt="Coverage Status" src="https://img.shields.io/coveralls/github/bconnorwhite/read-boolean.svg?branch=master">
  </a>
</div>

<br />

<blockquote align="center">A simple utility for parsing boolean values from strings.</blockquote>

<br />

_If I should maintain this repo, please ⭐️_
<a href="https://github.com/bconnorwhite/read-boolean">
  <img align="right" alt="GitHub stars" src="https://img.shields.io/github/stars/bconnorwhite/read-boolean?label=%E2%AD%90%EF%B8%8F&style=social">
</a>

_DM me on [Twitter](https://twitter.com/bconnorwhite) if you have questions or suggestions._
<a href="https://twitter.com/bconnorwhite">
  <img align="right" alt="Twitter" src="https://img.shields.io/twitter/url?label=%40bconnorwhite&style=social&url=https%3A%2F%2Ftwitter.com%2Fbconnorwhite">
</a>

---
<!--END HEADER-->

## About

## Installation

```sh
yarn add read-boolean
```

```sh
npm install read-boolean
```

```sh
pnpm add read-boolean
```

## Usage

```ts
import { readBoolean } from "read-boolean";

readBoolean("true"); // true
readBoolean("false"); // false
readBoolean("maybe"); // undefined
readBoolen(undefined); // undefined
```

### Options

An options argument is also provided, which allows for more control over the parsing.

If `extended` is set to true, the following list of values will be accepted:
```json
["true", "t", "yes", "y", "1"]
["false", "f", "no", "n", "0"]
```
If `strict` is set to true, values must match exactly. Otherwise, the value will be converted to lowercase before being compared.

```ts
readBoolean("yes", { extended: true }); // true
readBoolean("no", { extended: true }); // false

readBoolean("true", { strict: true }); // true
readBoolean("TRUE", { strict: true }); // undefined

readBoolean("yes", { strict: true, extended: true }); // true
readBoolean("YES", { strict: true, extended: true }); // undefined
```

<!--BEGIN FOOTER-->

<br />

<h2>Dev Dependencies</h2>

- [autorepo](https://www.npmjs.com/package/autorepo): Autorepo abstracts away your dev dependencies, providing a single command to run all of your scripts.


<br />

<h2 id="license">License <a href="https://opensource.org/licenses/MIT"><img align="right" alt="license" src="https://img.shields.io/npm/l/read-boolean.svg"></a></h2>

[MIT](https://opensource.org/licenses/MIT) - _MIT License_
<!--END FOOTER-->
