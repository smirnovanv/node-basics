import path from 'path';

export const getFolderNameForTable = (folderPath: string) => {
  return path.parse(folderPath).name;
};