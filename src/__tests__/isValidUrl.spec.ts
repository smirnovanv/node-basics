import { isValidUrl } from '../isValidUrl';
import { redText } from '../colorText';

test('just test', () => {
  expect(1 + 1).toBe(2);
});

test('url should be valid', () => {
  expect(isValidUrl('https://filesamples.com/samples/document/txt/sample1.txt', redText)).toBe(true);
});
