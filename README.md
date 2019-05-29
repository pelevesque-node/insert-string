[![Build Status](https://travis-ci.org/pelevesque/insert-string.svg?branch=master)](https://travis-ci.org/pelevesque/insert-string)
[![Coverage Status](https://coveralls.io/repos/github/pelevesque/insert-string/badge.svg?branch=master)](https://coveralls.io/github/pelevesque/insert-string?branch=master)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# insert-string

Inserts a string inside another string.

## Node Repository

https://www.npmjs.com/package/@pelevesque/insert-string

## Installation

`npm install @pelevesque/insert-string`

## Tests

### Standard Style & Unit Tests

`npm test`

### Unit Tests & Coverage

`npm run cover`

## Usage

### Requiring the Module

```js
const insertString = require('@pelevesque/insert-string')
```
### Insertion

```js
const str = 'I have an apple.'
const insert = 'an orange and '
const index = 7
const result = insertString(str, insert, index)
// result === 'I have an orange and an apple.'
```

### Substitution

The fourth parameter `numCharsToRemove` defaults to `0` which permits inserts.

To make a substitution, setting `numCharsToRemove` to `-1` will give it the same length as the string to insert.

```js
const str = 'A nice guy.'
const insert = 'cool'
const index = 2
const numCharsToRemove = -1
const result = insertString(str, insert, index, numCharsToRemove)
// result === 'A cool guy.'
```

### Irregular Substitution

By explicitly setting `numCharsToRemove` to the number of characters to remove, it's possible to do substitutions where the string to insert does not have the same length as the string that it is replacing.

```js
const str = 'My name is Jack Black and I act.'
const insert = 'Joe'
const index = 11
const numCharsToRemove = 10 // the length of 'Jack Black'
const result = insertString(str, insert, index, numCharsToRemove)
// result === 'My name is Joe and I act.'
```

### A Substitution Using a Negative Index

You can use a negative index to add the insert before the original string.

```js
const str = 'abc'
const substitution = '012'
const index = -3
const result = insertString(str, insert, index)
// result === '012abc'
```
