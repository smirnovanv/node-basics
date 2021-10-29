import { createTempFolder } from './createTempFolder';
import { fetchFile } from './fetchFile';
import { isValidLink } from './isValidLink';
import { showData } from './showData';

const downloadFilesIntoTempFolder = async (downloadLinks?: string[]) => {
  const links: string[] = [];
  const tempFolderName = createTempFolder();

  if (downloadLinks) {
    links.push(...downloadLinks);
  }

  const validLinks = links.filter((link) => isValidLink(link));

  await Promise.all(validLinks.map(link => fetchFile(link, tempFolderName)));
  
  showData(tempFolderName);
}

export default downloadFilesIntoTempFolder;
