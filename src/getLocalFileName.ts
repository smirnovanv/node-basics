import path from 'path';

import { generateHash } from './generateHash.js';

export const getLocalFileName = async (link: string) => {
  const uniqueHash = generateHash();
  const fileURL = new URL(link);
  const remoteFileNamePath = fileURL.pathname;
  const parsedPath = path.parse(remoteFileNamePath);
  const remoteFileName = parsedPath.name;
  const fileExtention = parsedPath.ext;

  return `${remoteFileName}-${uniqueHash}${fileExtention}`;
};