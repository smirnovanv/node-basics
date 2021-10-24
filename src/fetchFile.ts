import https from 'https';
import fs from 'fs';
import { generateHash } from "./generateHash.js";

export const fetchFile = async (link: string, folderName: string) => {
  const uniqueHash = await generateHash();
  return new Promise<void>((resolve) => {
    const file = fs.createWriteStream(`${folderName}/file-${uniqueHash}.txt`);

    https.get(link, function(response) {
      response.pipe(file);
      file.on('finish', function(){
        resolve();
      });
    });   
  });
};