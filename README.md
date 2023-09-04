# 🔮 Case-Alchemy: Transform Text Cases with Magic

Case-Alchemy is a light-weight, fast, and tree-shakable JavaScript library that empowers developers to effortlessly convert text between different cases. Whether you need to transform camel case to kebab case, snake case to title case, or any other case transformation, Case-Alchemy's intuitive and powerful api make it a breeze.

## 🌟 Features

- **Effortless Case Transformations:** Easily convert between various text cases like camel case, snake case, kebab case, and more.
- **Custom Transformations:** Create custom case transformations using our flexible API.
- **Minimal Integration:** Seamlessly integrate into your projects with minimal code.
- **Magical Alchemy:** Empower your string manipulation tasks with a touch of magical alchemy.

## Installation

You can install 'case-alchemy' using npm:


```bash
npm install case-alchemy
```


## Usage

Here's a simple example of how you can use 'case-alchemy' to transform text cases:

```js
const { TransformCase, fromCamel, toKebab } = require('case-alchemy');
const inputText = 'exampleText';
const camelToKebab = TransformCase(fromCamel, toKebab);
const kebabCaseText = camelToKebab(inputText);
console.log(kebabCaseText); // Output: 'example-text'
```


## Get Started

Get started with Case-Alchemy and unlock the art of transforming text cases like never before. Simplify your string manipulations and let the magic flow!

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.