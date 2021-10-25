import https from 'https';
import fs from 'fs';

import { getLocalFileName } from './getLocalFileName.js';

export const fetchFile = async (link: string, folderName: string) => {
  const localFileName = await getLocalFileName(link);
  return new Promise<void>((resolve, reject) => {
    const file = fs.createWriteStream(`${folderName}/${localFileName}`);

    https.get(link, function(response) {
      response.pipe(file);
      file.on('finish', function(){
        resolve();
      });

      file.on('error', function(err){
        console.log('ERROR:', err);
        response.unpipe();
        file.end();
        reject();
      });
    });   
  });
};