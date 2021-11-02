#!/usr/bin/env node

import dotenv from 'dotenv';

import { createTempFolder } from './createTempFolder';
import { fetchFile } from './fetchFile';
import { isValidLink } from './isValidLink';
import { showData } from './showData';

dotenv.config();

const downloadFilesIntoTempFolder = async (downloadLinks?: string[]) => {
  let links: string[] = [];
  const tempFolderName = createTempFolder();

  if (!downloadLinks?.length) {
    return;
  }
  
  links.push(...downloadLinks);
  
  if(!process.env.SKIP_CHECK) {
    links = links.filter((link) => isValidLink(link));
  }

  await Promise.all(links.map(link => fetchFile(link, tempFolderName)));
  
  showData(tempFolderName);
}

const incomingLinks = process.argv.slice(2);

if (incomingLinks.length > 0) {
  downloadFilesIntoTempFolder(incomingLinks);
}

export default downloadFilesIntoTempFolder;
