# 🔮 Case-Alchemy: Transform Text Cases with Magic

[![npm package][npm-img]][npm-url]
[![Build Status][build-img]][build-url]
[![Downloads][downloads-img]][downloads-url]
[![Issues][issues-img]][issues-url]
[![Code Coverage][codecov-img]][codecov-url]
[![Commitizen Friendly][commitizen-img]][commitizen-url]
[![Semantic Release][semantic-release-img]][semantic-release-url]

Case-Alchemy is a light-weight, fast, and tree-shakable JavaScript library that empowers developers to effortlessly convert text between different cases. Whether you need to transform camel case to kebab case, snake case to title case, or any other case transformation, Case-Alchemy's intuitive and powerful api make it a breeze.

## 🌟 Features

- 🔮 **Effortless Case Transformations:** Easily convert between various text cases like camel case, snake case, kebab case, and more.
- 🔧 **Custom Transformations:** Create custom case transformations using our flexible API.
- 🚀 **Minimal Integration:** Seamlessly integrate into your projects with minimal code.
- ✨ **Magical Alchemy:** Empower your string manipulation tasks with a touch of magical alchemy.

## Installation

You can install 'case-alchemy' using npm:

```bash
npm install case-alchemy
# or
yarn add case-alchemy
# or (best option 😁)
pnpm add case-alchemy
```

## Usage

Here's a simple example of how you can use 'case-alchemy' to transform text cases:

```js
const { TransformCase, fromCamel, toKebab } = require('case-alchemy');
// Or
//import { TransformCase, fromCamel, toKebab } from "case-alchemy";

const inputText = 'exampleText';
const camelToKebab = TransformCase(fromCamel, toKebab);
const kebabCaseText = camelToKebab(inputText);
console.log(kebabCaseText); // Output: 'example-text'
```

### Custom transform function

```js
import { TransformCase, fromKebab } from 'case-alchemy';
const inputText = 'example-text';
const kebabToPath = TransformCase(fromKebab, words => words.join('/'));
const pathCaseText = kebabToPath(inputText);
console.log(pathCaseText); // Output: 'example/text'
```

## Documentation

### TransformCase Function

The `TransformCase` function is a versatile utility provided by the `case-alchemy` library that enables you to seamlessly transform text between different cases. It takes two arguments: the `fromFunc` function that converts a string in a specific case to a string array in lower case, and the `toFunc` function that converts a lower case string array to a string in the desired case.

#### Signature

```ts
TransformCase(fromFunc: FromCaseFunction, toFunc: ToCaseFunction): (text: string) => string;
```

#### Parameters

| Param    | Type                          | Details                             |
| -------- | ----------------------------- | ----------------------------------- |
| fromFunc | `(str: string) => string[]`   | Conversion function for source case |
| toFunc   | `(words: string[]) => string` | Conversion function for target case |

#### Returns

A new function that takes a single parameter `text`, representing the input string in the initial case, and returns the transformed string in the desired case.

### Transformation functions

| Case     | From Function  | To Function  | Details       |
| -------- | -------------- | ------------ | ------------- |
| camel    | `fromCamel`    | `toCamel`    | camelCase     |
| kebab    | `fromKebab`    | `toKebab`    | kebab-case    |
| snake    | `fromSnake`    | `toSnake`    | snake_case    |
| title    | `fromTitle`    | `toTitle`    | Title Case    |
| sentence | `fromSentence` | `toSentence` | Sentence case |
| constant | `fromConstant` | `toConstant` | CONSTANT_CASE |
| lower    | `fromLower`    | `toLower`    | lowercase     |
| upper    | `fromUpper`    | `toUpper`    | UPPERCASE     |

## Get Started

Get started with Case-Alchemy and unlock the art of transforming text cases like never before. Simplify your string manipulations and let the magic flow!

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
