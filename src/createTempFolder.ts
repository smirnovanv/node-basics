import os from 'os';
import { sep } from 'path';
import fs from 'fs';

export const createTempFolder = () => {
  return new Promise<string>((resolve, reject) => {
    const tmpDir = os.tmpdir();
    fs.mkdtemp(`${tmpDir}${sep}`, (err, folder) => {
      if (err) {
        console.log(err);
        reject();
      }
      
      console.log("The temporary folder path is:", folder);
      resolve(folder);
    });
  });
};