import { isValidLink } from '../isValidLink';

describe('should test link validity', () => {
  test('link should be valid', () => {
    expect(isValidLink('https://filesamples.com/samples/document/txt/sample1.txt')).toBe(true);
  });
  
  test('link should be invalid', () => {
    expect(isValidLink('lllooo')).toBe(false);
  });
});

