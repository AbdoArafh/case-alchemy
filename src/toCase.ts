import { ToCaseFunction } from './lib/types';
import { capitalize, lower, upper } from './lib/utils';

export const toCamel: ToCaseFunction = words =>
  words[0] + words.slice(1).map(capitalize).join('');
export const toKebab: ToCaseFunction = words => words.join('-');
export const toSnake: ToCaseFunction = words => words.join('_');
export const toTitle: ToCaseFunction = words => words.map(capitalize).join(' ');
export const toSentence: ToCaseFunction = words =>
  capitalize(words[0]) + ' ' + words.slice(1).join(' ');
export const toConstant: ToCaseFunction = words => words.map(upper).join('_');
export const toUpper: ToCaseFunction = words => upper(words.join(' '));
export const toLower: ToCaseFunction = words => lower(words.join(' '));
