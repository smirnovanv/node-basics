import fs, { readdirSync } from 'fs';

import { cyanText } from './colorText';
import { formatDateForTable } from './formatDateForTable';
import { getFolderNameForTable } from './getFolderNameForTable';

export const showData = (folder: string) => {
  const tableData = [];
  console.log(cyanText('*****RESULTS HERE*****'));
  const dir = readdirSync(`${folder}`);

  dir.forEach((file) => {
    const stats = fs.statSync(`${folder}/${file}`);
    const data = {
      name: file,
      created: formatDateForTable(stats.birthtime),
      size: stats.size,
      folder: getFolderNameForTable(folder),
    };
    tableData.push(data);
  })
  console.table(tableData);
};
