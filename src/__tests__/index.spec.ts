import { downloadFiles } from '../index';

describe('test downloading files', () => {
  test('should return undefined if there are no arguments', () => {
    expect(downloadFiles()).resolves.toBe(undefined);
  });
});
