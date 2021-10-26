import fs from 'fs';
import os from 'os';
import { sep } from 'path';

export const createTempFolder = () => {
  const tmpDir = os.tmpdir();
  return fs.mkdtempSync(`${tmpDir}${sep}`);
};
