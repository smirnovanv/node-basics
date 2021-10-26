import path from 'path';

import { generateHash } from './generateHash.js';

export const getLocalFileName = (link: string) => {
  const uniqueHash = generateHash();
  const fileURL = new URL(link);
  const remoteFileNamePath = fileURL.pathname;
  const parsedPath = path.parse(remoteFileNamePath);
  const { name, ext } = parsedPath;
  return `${name}-${uniqueHash}${ext}`;
};
