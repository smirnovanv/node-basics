import fs from 'fs';

import { createTempFolder } from '../createTempFolder';

describe('should create temp folder', () => {
  test('should create temp folder', () => {
    const folderPath = createTempFolder();
    console.log(folderPath);
    expect(fs.existsSync(folderPath)).toBe(true)
  });
});
