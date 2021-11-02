import { FgCyan, cyanText } from '../colorText';

describe('should return colored text', () => {
  let coloredText: string;

  beforeEach(() => {
    coloredText = cyanText('test colors');
  });

  test('should contain incoming text', () => {
    expect(coloredText.includes('test colors')).toBe(true);
  });

  test('should contain cyan code', () => {
    expect(coloredText.includes(FgCyan)).toBe(true);
  });

});
