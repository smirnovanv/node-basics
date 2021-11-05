#!/usr/bin/env node

import fs from 'fs';
import os from 'os';

import dotenv from 'dotenv';

import { createTempFolder } from './createTempFolder';
import { fetchFile } from './fetchFile';
import { isValidLink } from './isValidLink';
import { showData } from './showData';

dotenv.config();

const downloadFilesIntoTempFolder = async (downloadLinks?: string[]) => {
  if (!downloadLinks?.length) {
    return;
  }

  let links: string[] = [];
  const tempFolderName = createTempFolder(os, fs);

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
