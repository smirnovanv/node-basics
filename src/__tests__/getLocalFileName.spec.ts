import path from 'path';

import { getLocalFileName } from '../getLocalFileName';

describe('test getting local file name', () => {
  const url = 'https://filesamples.com/samples/document/txt/sample3.txt'
  const { name, ext } = path.parse(url);
  const result = getLocalFileName(url);
  const hashLength = 96;

  test('local file name starts with correct name', () => {
    expect(result.startsWith('sample3-')).toBe(true);
  });

  test('local file name has right extention', () => {
    expect(result.endsWith('.txt')).toBe(true);
  });

  test('file name length is correct', () => {
    expect(result.length).toBe(name.length + ext.length + hashLength + 1);
  });
});
