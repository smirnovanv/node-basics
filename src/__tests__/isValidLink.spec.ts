import { isValidLink } from '../isValidLink';
import { redText } from '../colorText';

describe('should test link validity', () => {
  test('link should be valid', () => {
    expect(isValidLink('https://filesamples.com/samples/document/txt/sample1.txt', redText)).toBe(true);
  });
  
  test('link should be invalid', () => {
    expect(isValidLink('lllooo', redText)).toBe(false);
  });
});

