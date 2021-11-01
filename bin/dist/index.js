#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const createTempFolder_1 = require("./createTempFolder");
const fetchFile_1 = require("./fetchFile");
const isValidLink_1 = require("./isValidLink");
const showData_1 = require("./showData");
const downloadFilesIntoTempFolder = (downloadLinks) => __awaiter(void 0, void 0, void 0, function* () {
    const links = [];
    const tempFolderName = (0, createTempFolder_1.createTempFolder)();
    if (downloadLinks) {
        links.push(...downloadLinks);
    }
    const validLinks = links.filter((link) => (0, isValidLink_1.isValidLink)(link));
    yield Promise.all(validLinks.map(link => (0, fetchFile_1.fetchFile)(link, tempFolderName)));
    (0, showData_1.showData)(tempFolderName);
});
const incomingLinks = process.argv.slice(2);
if (incomingLinks.length > 0) {
    downloadFilesIntoTempFolder(incomingLinks);
}
exports.default = downloadFilesIntoTempFolder;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRUEseURBQXNEO0FBQ3RELDJDQUF3QztBQUN4QywrQ0FBNEM7QUFDNUMseUNBQXNDO0FBRXRDLE1BQU0sMkJBQTJCLEdBQUcsQ0FBTyxhQUF3QixFQUFFLEVBQUU7SUFDckUsTUFBTSxLQUFLLEdBQWEsRUFBRSxDQUFDO0lBQzNCLE1BQU0sY0FBYyxHQUFHLElBQUEsbUNBQWdCLEdBQUUsQ0FBQztJQUUxQyxJQUFJLGFBQWEsRUFBRTtRQUNqQixLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsYUFBYSxDQUFDLENBQUM7S0FDOUI7SUFFRCxNQUFNLFVBQVUsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFBLHlCQUFXLEVBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUU3RCxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUEscUJBQVMsRUFBQyxJQUFJLEVBQUUsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRTNFLElBQUEsbUJBQVEsRUFBQyxjQUFjLENBQUMsQ0FBQztBQUMzQixDQUFDLENBQUEsQ0FBQTtBQUVELE1BQU0sYUFBYSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBRTVDLElBQUksYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7SUFDNUIsMkJBQTJCLENBQUMsYUFBYSxDQUFDLENBQUM7Q0FDNUM7QUFFRCxrQkFBZSwyQkFBMkIsQ0FBQyJ9