import { TransformFunction } from './types';

export const capitalize: TransformFunction = str =>
  str[0].toUpperCase() + str.slice(1);
export const lower: TransformFunction = str => str.toLowerCase();
export const upper: TransformFunction = str => str.toUpperCase();
