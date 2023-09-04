import {
  TransformCase,
  fromKebab,
  toCamel,
  fromCamel,
  toKebab,
  fromSnake,
  toSnake,
  fromTitle,
  toTitle,
  fromSentence,
  toSentence,
  fromConstant,
  toConstant,
  fromUpper,
  toUpper,
  fromLower,
  toLower,
} from '../src';

const cases = {
  camel: {
    fromFunc: fromCamel,
    toFunc: toCamel,
    name: 'camelCase',
    text: 'helloWorld',
    noTest: false,
  },
  kebab: {
    fromFunc: fromKebab,
    toFunc: toKebab,
    name: 'kebab-case',
    text: 'hello-world',
    noTest: false,
  },
  snake: {
    fromFunc: fromSnake,
    toFunc: toSnake,
    name: 'snake_case',
    text: 'hello_world',
    noTest: false,
  },
  title: {
    fromFunc: fromTitle,
    toFunc: toTitle,
    name: 'Title Case',
    text: 'Hello World',
    noTest: false,
  },
  sentence: {
    fromFunc: fromSentence,
    toFunc: toSentence,
    name: 'Sentence case',
    text: 'Hello world',
    noTest: false,
  },
  constant: {
    fromFunc: fromConstant,
    toFunc: toConstant,
    name: 'CONSTANT_CASE',
    text: 'HELLO_WORLD',
    noTest: false,
  },
  lower: {
    fromFunc: fromLower,
    toFunc: toLower,
    name: 'lowercase',
    text: 'hello world',
    noTest: true,
  },
  upper: {
    fromFunc: fromUpper,
    toFunc: toUpper,
    name: 'UPPERCASE',
    text: 'HELLO WORLD',
    noTest: true,
  },
} as const;

describe('index', () => {
  describe('TranformCase', () => {
    Object.values(cases).forEach(baseCase =>
      Object.values(cases).forEach(targetCase => {
        it(`should transform from ${baseCase.name} to ${targetCase.name}`, () => {
          const baseToTarget = TransformCase(
            baseCase.fromFunc,
            targetCase.toFunc
          );
          const result = baseToTarget(baseCase.text);
          expect(result).toMatch(targetCase.text);
        });
      })
    );
  });
});
