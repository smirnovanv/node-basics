import fs from 'fs';
import path from 'path';

import { https } from 'follow-redirects';

import { fetchFile } from './fetchFile';
import { getLocalFileName } from './getLocalFileName';
import { unzipFile } from './unzipFile';

export const processLink = async (
  link: string, 
  folderName: string,
) => {
  const localFileName = getLocalFileName(link);
  const fileType =  path.parse(localFileName).name;

  await fetchFile(link, localFileName, folderName, fs, https);

  if (fileType === 'zip') {
    unzipFile(folderName, localFileName, fs);
  }
};
