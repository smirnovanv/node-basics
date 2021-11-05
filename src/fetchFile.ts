/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from 'fs';

import { https } from 'follow-redirects';

import { getLocalFileName } from './getLocalFileName';

export const fetchFile = async (
  link: string, 
  folderName: string, 
  fsLike: typeof fs | any = fs, 
  httpsLike: typeof https | any = https,
) => {
  return new Promise<void>((resolve, reject) => {
    const localFileName = getLocalFileName(link);
    const file = fsLike.createWriteStream(`${folderName}/${localFileName}`);

    httpsLike.get(link, function(response) {
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
