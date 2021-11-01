"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTempFolder = void 0;
const fs_1 = __importDefault(require("fs"));
const os_1 = __importDefault(require("os"));
const path_1 = require("path");
const createTempFolder = () => {
    const tmpDir = os_1.default.tmpdir();
    return fs_1.default.mkdtempSync(`${tmpDir}${path_1.sep}`);
};
exports.createTempFolder = createTempFolder;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlVGVtcEZvbGRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jcmVhdGVUZW1wRm9sZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDRDQUFvQjtBQUNwQiw0Q0FBb0I7QUFDcEIsK0JBQTJCO0FBRXBCLE1BQU0sZ0JBQWdCLEdBQUcsR0FBRyxFQUFFO0lBQ25DLE1BQU0sTUFBTSxHQUFHLFlBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUMzQixPQUFPLFlBQUUsQ0FBQyxXQUFXLENBQUMsR0FBRyxNQUFNLEdBQUcsVUFBRyxFQUFFLENBQUMsQ0FBQztBQUMzQyxDQUFDLENBQUM7QUFIVyxRQUFBLGdCQUFnQixvQkFHM0IifQ==