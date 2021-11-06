#!/usr/bin/env node

import fs from 'fs';
import os from 'os';

import dotenv from 'dotenv';

import { createTempFolder } from './createTempFolder';
import { isValidLink } from './isValidLink';
import { processLink } from './processLink';
import { showData } from './showData';


dotenv.config();

const downloadFilesAndShowStats = async (downloadLinks?: string[]) => {
  if (!downloadLinks?.length) {
    return;
  }

  let links: string[] = [];
  const tempFolderName = createTempFolder(os, fs);

  links.push(...downloadLinks);
  
  if(!process.env.SKIP_CHECK) {
    links = links.filter((link) => isValidLink(link));
  }

  await Promise.all(links.map(link => processLink(link, tempFolderName)));
  
  showData(tempFolderName);
}

const incomingLinks = process.argv.slice(2);

if (incomingLinks.length > 0) {
  downloadFilesAndShowStats(incomingLinks);
}

export default downloadFilesAndShowStats;
