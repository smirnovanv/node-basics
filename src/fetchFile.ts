import fs from 'fs';
import https from 'https';

import { getLocalFileName } from './getLocalFileName';

export const fetchFile = async (link: string, folderName: string) => {
  return new Promise<void>((resolve, reject) => {
    const localFileName = getLocalFileName(link);
    const file = fs.createWriteStream(`${folderName}/${localFileName}`);

    https.get(link, function(response) {
      response.pipe(file);
      file.on('finish', function(){
        resolve();
      });

      file.on('error', function(err){
        console.error('Fetching file error:', err.message);
        response.unpipe();
        file.end();
        reject(err);
      });
    });   
  });
};
