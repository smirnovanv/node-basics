"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLocalFileName = void 0;
const path_1 = __importDefault(require("path"));
const generateHash_1 = require("./generateHash");
const getLocalFileName = (link) => {
    const uniqueHash = (0, generateHash_1.generateHash)();
    const fileURL = new URL(link);
    const remoteFileNamePath = fileURL.pathname;
    const parsedPath = path_1.default.parse(remoteFileNamePath);
    const { name, ext } = parsedPath;
    return `${name}-${uniqueHash}${ext}`;
};
exports.getLocalFileName = getLocalFileName;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0TG9jYWxGaWxlTmFtZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nZXRMb2NhbEZpbGVOYW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGdEQUF3QjtBQUV4QixpREFBOEM7QUFFdkMsTUFBTSxnQkFBZ0IsR0FBRyxDQUFDLElBQVksRUFBRSxFQUFFO0lBQy9DLE1BQU0sVUFBVSxHQUFHLElBQUEsMkJBQVksR0FBRSxDQUFDO0lBQ2xDLE1BQU0sT0FBTyxHQUFHLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlCLE1BQU0sa0JBQWtCLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQztJQUM1QyxNQUFNLFVBQVUsR0FBRyxjQUFJLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDbEQsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxVQUFVLENBQUM7SUFDakMsT0FBTyxHQUFHLElBQUksSUFBSSxVQUFVLEdBQUcsR0FBRyxFQUFFLENBQUM7QUFDdkMsQ0FBQyxDQUFDO0FBUFcsUUFBQSxnQkFBZ0Isb0JBTzNCIn0=