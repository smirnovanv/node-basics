import * as https from 'https';
import * as fs from 'fs';
const URL = require("url").URL;
import { opendir } from 'fs/promises';
import { strict as assert } from 'assert';
const Reset = '\x1b[0m';
const FgRed = '\x1b[31m';
const FgGreen = '\x1b[32m';
const FgCyan = '\x1b[36m';
const Bright = '\x1b[1m';
const Dim = '\x1b[2m';
const Underscore = '\x1b[4m';
const Blink = '\x1b[5m';
const Reverse = '\x1b[7m';
const Hidden = '\x1b[8m';
const FgBlack = '\x1b[30m';
const FgYellow = '\x1b[33m';
const FgBlue = '\x1b[34m';
const FgMagenta = '\x1b[35m';
const FgWhite = '\x1b[37m';
const BgBlack = '\x1b[40m';
const BgRed = '\x1b[41m'

const redText = (str: string) => `${FgRed}${str}${Reset}`;
const cyanText = (str: string) => `${FgCyan}${str}${Reset}`;
const greenText = (str: string) => `${FgGreen}${str}${Reset}`;


const validUrls: string[] = [];

const isValidUrl = (arg: string) => {
    try {
      new URL(arg);
      validUrls.push(arg);
    } catch (err) {
      console.log(redText(arg), redText('IS NOT A LINK'));
    }
  };

const downloadFile = (link: string, index: number) => {
  const dir = './myFiles';

  if (!fs.existsSync(dir)){
      fs.mkdirSync(dir);
  }
  const file = fs.createWriteStream(`./myFiles/file${index}.txt`);
  const request = https.get(link, function(response) {
  response.pipe(file);
});
};

const formatDate = (date: Date) => {
  return date.toISOString().replace(/T/, ' ').replace(/\..+/, '');
};

const links = process.argv.slice(2);

links.forEach((link) => {
    isValidUrl(link);
});

validUrls.forEach((url, index) => {
    downloadFile(url, index);
});

(async () => {
  const tableData = [];
  try {
      console.log(cyanText('*****RESTULS HERE*****'));
      const dir = await opendir('./myFiles');
      
      for await (const dirent of dir) {
        const stats = fs.statSync(`./myFiles/${dirent.name}`);
        const data = {
          name: dirent.name,
          created: formatDate(stats.birthtime),
          size: stats.size,
          folder: 'myFiles',
        };
        tableData.push(data);
      }} catch (err) {
      throw new Error(err);
      }

  console.table(tableData);
  })();


