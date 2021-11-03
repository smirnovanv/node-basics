import { getFolderNameForTable } from '../getFolderNameForTable';

describe('test getting document name', () => {
  test('should return right document name', () => {
    const path = 'Documents/MyDocuments/text.txt'
    expect(getFolderNameForTable(path)).toBe('text');
  });
});
