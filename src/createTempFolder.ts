/* eslint-disable @typescript-eslint/no-explicit-any */
import { sep } from 'path';

export const createTempFolder = (os: any, fs: any) => {
  const tmpDir = os.tmpdir();
  return fs.mkdtempSync(`${tmpDir}${sep}`);
};
