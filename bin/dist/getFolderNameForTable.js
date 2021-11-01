"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFolderNameForTable = void 0;
const path_1 = __importDefault(require("path"));
const getFolderNameForTable = (folderPath) => {
    return path_1.default.parse(folderPath).name;
};
exports.getFolderNameForTable = getFolderNameForTable;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0Rm9sZGVyTmFtZUZvclRhYmxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2dldEZvbGRlck5hbWVGb3JUYWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxnREFBd0I7QUFFakIsTUFBTSxxQkFBcUIsR0FBRyxDQUFDLFVBQWtCLEVBQUUsRUFBRTtJQUMxRCxPQUFPLGNBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDO0FBQ3JDLENBQUMsQ0FBQztBQUZXLFFBQUEscUJBQXFCLHlCQUVoQyJ9