import { cyanText } from '../colorText';

describe('should return colored text', () => {

  test('should contain incoming text', () => {
    const coloredText = cyanText('test colors');
    expect(coloredText).toMatch('\x1b[36mtest colors\x1b[0m');
  });



});
// /^\x1b[36mtest colors\x1b[0m$/
// const Reset = '\x1b[0m';
// export const FgCyan = '\x1b[36m';
// export const cyanText = (str: string) => `${FgCyan}${str}${Reset}`;
// /^123456$/
