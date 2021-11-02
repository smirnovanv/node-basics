import { generateHash } from '../generateHash';

describe('should test generating hash', () => {
  test('hash should contain only letters and numbers', () => {
    const hash = generateHash();
    expect(hash).toMatch(/^[a-z0-9]+$/);
  });

  test('hash length should be 96', () => {
    const hash = generateHash();
    expect(hash.length).toBe(96);
  });
});
