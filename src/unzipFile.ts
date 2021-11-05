import fs from 'fs';

import unzipper from 'unzipper';

export const unzipFile = (path: string, fileName: string) => {
  try {
    fs.createReadStream(`${path}/${fileName}`).pipe(unzipper.Extract({ path: path }));
  } catch (error) {
    console.error(error);
  }
};
