import https from 'https';
import fs, { readdirSync } from 'fs';
import { cyanText } from './colorText.js';
import { isValidUrl } from './isValidUrl.js';
import { createTempFolder } from './createTempFolder.js';

(async () => {
  const validUrls: string[] = [];

  const tempFolderName = await createTempFolder();

  const fetchFile = (link: string, index: number, folderName: string) => {
    return new Promise<void>((resolve) => {
      const file = fs.createWriteStream(`${folderName}/file${index}.txt`);

      https.get(link, function(response) {
        response.pipe(file);
        file.on('finish', function(){
          resolve();
        });
      });   
    });
  };

  const formatDate = (date: Date) => {
    return date.toISOString().replace(/T/, ' ').replace(/\..+/, '');
  };

  const showData = () => {
    const tableData = [];
    console.log(cyanText('*****RESTULS HERE*****'));
    const dir = readdirSync(`${tempFolderName}`);
    console.log(dir);
    dir.forEach((file) => {
      console.log(file);
      const stats = fs.statSync(`${tempFolderName}/${file}`);
      const data = {
        name: file,
        created: formatDate(stats.birthtime),
        size: stats.size,
        folder: tempFolderName,
      };
      tableData.push(data);
    })
    console.table(tableData);
  };

  const links = process.argv.slice(2);

  links.forEach((link) => {
    if(isValidUrl(link)) {
      validUrls.push(link);
    }
  });

  for(let i = 0; i < validUrls.length; i++) {
    await fetchFile(validUrls[i], i, tempFolderName);
  }
  
  showData();
})();


