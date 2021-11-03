import { cyanText } from '../colorText';

describe('should return colored text', () => {
  test('should contain incoming text', () => {
    const exectedLine = '\x1b[36mtest colors\x1b[0m';
    const coloredText = cyanText('test colors');
    expect(coloredText).toMatch(exectedLine);
  });
});
