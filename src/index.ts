import {
  FromCaseFunction,
  ToCaseFunction,
  TransformFunction,
} from './lib/types';

export const TransformCase = (
  fromCase: FromCaseFunction,
  toCase: ToCaseFunction
): TransformFunction => str => toCase(fromCase(str));

export * from './fromCase';
export * from './toCase';
export * from './lib/types';
