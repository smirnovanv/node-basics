import { isValidUrl } from './index.js';

test('just test', () => {
    expect(1 + 1).toBe(3);
});

test('url should be valid', () => {
    expect(isValidUrl('https://filesamples.com/samples/document/txt/sample1.txt')).toBe(true);
});

