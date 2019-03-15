export const required = value =>
  value || typeof value === 'number' ? undefined : 'Required';

export const exactLength = l => value =>
  value && value.length !== l ? `Must be exactly ${l} numeric digits` : undefined;

export const isInt = value =>
  isNaN(parseInt(value, 10)) ? 'Must be a number': undefined;

export const fourDigitsLong = exactLength(4);

