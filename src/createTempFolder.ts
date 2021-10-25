import os from 'os';
import { sep } from 'path';
import fs from 'fs';

export const createTempFolder = () => {
  const tmpDir = os.tmpdir();
  return fs.mkdtempSync(`${tmpDir}${sep}`);
};
