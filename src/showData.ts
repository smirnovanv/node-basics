import fs, { readdirSync } from 'fs';
import { cyanText } from "./colorText.js";
import { formatDateForTable } from "./formatDateForTable.js";

export const showData = (folder) => {
  const tableData = [];
  console.log(cyanText('*****RESTULS HERE*****'));
  const dir = readdirSync(`${folder}`);
  console.log(dir);
  dir.forEach((file) => {
    console.log(file);
    const stats = fs.statSync(`${folder}/${file}`);
    const data = {
      name: file,
      created: formatDateForTable(stats.birthtime),
      size: stats.size,
      folder: folder,
    };
    tableData.push(data);
  })
  console.table(tableData);
};
