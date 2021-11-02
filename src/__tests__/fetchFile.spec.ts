import { readdirSync } from 'fs';

import { createTempFolder } from '../createTempFolder';
import { fetchFile } from '../fetchFile';

describe('should download file', () => {
  test('should download file', async () => {
    const tempFolder = createTempFolder();
    const link = 'https://filesamples.com/samples/document/txt/sample3.txt';

    fetchFile(link, tempFolder).then(() => {
      const dir = readdirSync(tempFolder);
      expect(dir.length).toEqual(1);
    }).catch((err) => console.log('Error: ', err));
  });
});
