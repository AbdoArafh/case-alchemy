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

describe('index', () => {
  describe('TranformCase', () => {
    it('should transform from kebab-case to camelCase', () => {
      const text = 'hello-world';
      const kebabToCamel = TransformCase(fromKebab, toCamel);
      const result = kebabToCamel(text);
      expect(result).toMatch('helloWorld');
    });

    it('should transform from camelCase to kebab-case', () => {
      const text = 'helloWorld';
      const camelToKebab = TransformCase(fromCamel, toKebab);
      const result = camelToKebab(text);
      expect(result).toMatch('hello-world');
    });

    it('should transform from snake_case to CamelCase', () => {
      const text = 'hello_world';
      const snakeToCamel = TransformCase(fromSnake, toCamel);
      const result = snakeToCamel(text);
      expect(result).toMatch('helloWorld');
    });

    it('should transform from camelCase to snake_case', () => {
      const text = 'helloWorld';
      const camelToSnake = TransformCase(fromCamel, toSnake);
      const result = camelToSnake(text);
      expect(result).toMatch('hello_world');
    });

    it('should transform from Title Case to camelCase', () => {
      const text = 'Hello World';
      const titleToCamel = TransformCase(fromTitle, toCamel);
      const result = titleToCamel(text);
      expect(result).toMatch('helloWorld');
    });

    it('should transform from camelCase to Title Case', () => {
      const text = 'helloWorld';
      const camelToTitle = TransformCase(fromCamel, toTitle);
      const result = camelToTitle(text);
      expect(result).toMatch('Hello World');
    });

    it('should transform from Sentence case to camelCase', () => {
      const text = 'Hello world';
      const sentenceToCamel = TransformCase(fromSentence, toCamel);
      const result = sentenceToCamel(text);
      expect(result).toMatch('helloWorld');
    });

    it('should transform from camelCase to Sentence case', () => {
      const text = 'helloWorld';
      const camelToSentence = TransformCase(fromCamel, toSentence);
      const result = camelToSentence(text);
      expect(result).toMatch('Hello world');
    });

    it('should transform from CONSTANT_CASE to camelCase', () => {
      const text = 'HELLO_WORLD';
      const constantToCamel = TransformCase(fromConstant, toCamel);
      const result = constantToCamel(text);
      expect(result).toMatch('helloWorld');
    });

    it('should transform from camelCase to CONSTANT_CASE', () => {
      const text = 'helloWorld';
      const camelToConstant = TransformCase(fromCamel, toConstant);
      const result = camelToConstant(text);
      expect(result).toMatch('HELLO_WORLD');
    });

    it('should transform from lowercase to camelCase', () => {
      const text = 'helloworld';
      const lowerToCamel = TransformCase(fromLower, toCamel);
      const result = lowerToCamel(text);
      expect(result).toMatch('helloworld');
    });

    it('should transform from camelCase to lowercase', () => {
      const text = 'helloWorld';
      const camelToLower = TransformCase(fromCamel, toLower);
      const result = camelToLower(text);
      expect(result).toMatch('helloworld');
    });

    it('should transform from UPPERCASE to camelCase', () => {
      const text = 'HELLOWORLD';
      const upperToCamel = TransformCase(fromUpper, toCamel);
      const result = upperToCamel(text);
      expect(result).toMatch('helloworld');
    });

    it('should transform from camelCase to UPPERCASE', () => {
      const text = 'helloWorld';
      const camelToUpper = TransformCase(fromCamel, toUpper);
      const result = camelToUpper(text);
      expect(result).toMatch('HELLOWORLD');
    });
  });
});
