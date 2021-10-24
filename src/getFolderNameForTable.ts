export const getFolderNameForTable = (path) => {
  const folderPathSplit = path.split('\\');
  return folderPathSplit[folderPathSplit.length - 1];
};