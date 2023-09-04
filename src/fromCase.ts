import { FromCaseFunction } from './lib/types';
import { lower } from './lib/utils';

export const fromKebab: FromCaseFunction = str => str.split('-').map(lower);
export const fromCamel: FromCaseFunction = str =>
  str
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .split(' ')
    .map(lower);
export const fromSnake: FromCaseFunction = str => str.split('_').map(lower);
export const fromTitle: FromCaseFunction = str => str.split(' ').map(lower);
export const fromSentence: FromCaseFunction = str => str.split(' ').map(lower);
export const fromConstant: FromCaseFunction = str => str.split('_').map(lower);
export const fromUpper: FromCaseFunction = str => [lower(str)];
export const fromLower: FromCaseFunction = str => [lower(str)];
