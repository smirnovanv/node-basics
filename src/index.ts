import { isValidLink } from './isValidLink.js';
import { createTempFolder } from './createTempFolder.js';
import { fetchFile } from './fetchFile.js';
import { showData } from './showData.js';
import { redText } from './colorText.js';

(async () => {
  let validLinks: string[] = [];

  const tempFolderName = createTempFolder();

  const links = process.argv.slice(2);

  validLinks = links.filter((link) => isValidLink(link, redText));

  await Promise.all(validLinks.map(link => fetchFile(link, tempFolderName)));
  
  showData(tempFolderName);
})();
