import { isValidUrl } from '../isValidUrl';
import { redText } from '../colorText';

test('url should be valid', () => {
  expect(isValidUrl('https://filesamples.com/samples/document/txt/sample1.txt', redText)).toBe(true);
});

test('url should be invalid', () => {
  expect(isValidUrl('lllooo', redText)).toBe(false);
});
