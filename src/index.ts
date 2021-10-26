import { createTempFolder } from './createTempFolder';
import { fetchFile } from './fetchFile';
import { isValidLink } from './isValidLink';
import { showData } from './showData';

(async () => {
  let validLinks: string[] = [];

  const tempFolderName = createTempFolder();

  const links = process.argv.slice(2);

  validLinks = links.filter((link) => isValidLink(link));

  await Promise.all(validLinks.map(link => fetchFile(link, tempFolderName)));
  
  showData(tempFolderName);
})();
