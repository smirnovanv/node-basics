/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from 'fs';

import { https } from 'follow-redirects';

export const fetchFile = async (
  link: string,
  localFileName: string, 
  folderName: string, 
  fsLike: typeof fs | any = fs, 
  httpsLike: typeof https | any = https,
) => {
  return new Promise<void>((resolve, reject) => {
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
