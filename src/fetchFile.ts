import https from 'https';
import fs from 'fs';
import { getLocalFileName } from './getLocalFileName.js';

export const fetchFile = async (link: string, folderName: string) => {

  const localFileName = await getLocalFileName(link);
  return new Promise<void>((resolve) => {
    const file = fs.createWriteStream(`${folderName}/${localFileName}`);

    https.get(link, function(response) {
      response.pipe(file);
      file.on('finish', function(){
        resolve();
      });
    });   
  });
};