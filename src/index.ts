import { isValidUrl } from './isValidUrl.js';
import { createTempFolder } from './createTempFolder.js';
import { fetchFile } from './fetchFile.js';
import { showData } from './showData.js';

(async () => {
  const validUrls: string[] = [];

  const tempFolderName = await createTempFolder();

  const links = process.argv.slice(2);

  links.forEach((link) => {
    if(isValidUrl(link)) {
      validUrls.push(link);
    }
  });

  for(let i = 0; i < validUrls.length; i++) {
    await fetchFile(validUrls[i], tempFolderName);
  }
  
  showData(tempFolderName);
})();


