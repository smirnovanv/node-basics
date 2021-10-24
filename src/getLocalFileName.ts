import { generateHash } from "./generateHash.js";

export const getLocalFileName = async (link) => {
  const uniqueHash = await generateHash();
  const remoteFileNameParsed = link.split('/');
  const remoteFileNameSplit = remoteFileNameParsed[remoteFileNameParsed.length - 1].split('.');
  const remoteFileName = remoteFileNameSplit[0];
  const fileExtention = remoteFileNameSplit[1];
  return `${remoteFileName}-${uniqueHash}.${fileExtention}`;
};