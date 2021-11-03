import { sep } from 'path';

export const createTempFolder = (os, fs) => {
  const tmpDir = os.tmpdir();
  return fs.mkdtempSync(`${tmpDir}${sep}`);
};
