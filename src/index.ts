import { isValidUrl } from './isValidUrl.js';
import { createTempFolder } from './createTempFolder.js';
import { fetchFile } from './fetchFile.js';
import { showData } from './showData.js';
import { redText } from './colorText.js';

(async () => {
  const validUrls: string[] = [];

  const tempFolderName = createTempFolder();

  const links = process.argv.slice(2);

  links.forEach((link) => {
    if(isValidUrl(link, redText)) {
      validUrls.push(link);
    }
  });

  await Promise.all(validUrls.map(url => fetchFile(url, tempFolderName)));
  
  showData(tempFolderName);
})();


