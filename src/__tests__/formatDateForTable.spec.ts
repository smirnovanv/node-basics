import { formatDateForTable } from '../formatDateForTable';

describe('test date format', () => {
  test('should return the data in right format', () => {
    const date = new Date('1995-12-17T03:24:00');
    expect(formatDateForTable(date)).toBe('12/17/1995, 03:24:00');
  });
});

