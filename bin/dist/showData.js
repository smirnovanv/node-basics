"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.showData = void 0;
const fs_1 = __importStar(require("fs"));
const colorText_1 = require("./colorText");
const formatDateForTable_1 = require("./formatDateForTable");
const getFolderNameForTable_1 = require("./getFolderNameForTable");
const showData = (folder) => {
    const tableData = [];
    console.log((0, colorText_1.cyanText)('*****RESULTS HERE*****'));
    const dir = (0, fs_1.readdirSync)(`${folder}`);
    dir.forEach((file) => {
        const stats = fs_1.default.statSync(`${folder}/${file}`);
        const data = {
            name: file,
            created: (0, formatDateForTable_1.formatDateForTable)(stats.birthtime),
            size: stats.size,
            folder: (0, getFolderNameForTable_1.getFolderNameForTable)(folder),
        };
        tableData.push(data);
    });
    console.table(tableData);
};
exports.showData = showData;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvd0RhdGEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2hvd0RhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlDQUFxQztBQUVyQywyQ0FBdUM7QUFDdkMsNkRBQTBEO0FBQzFELG1FQUFnRTtBQUV6RCxNQUFNLFFBQVEsR0FBRyxDQUFDLE1BQWMsRUFBRSxFQUFFO0lBQ3pDLE1BQU0sU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUEsb0JBQVEsRUFBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUM7SUFDaEQsTUFBTSxHQUFHLEdBQUcsSUFBQSxnQkFBVyxFQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUVyQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7UUFDbkIsTUFBTSxLQUFLLEdBQUcsWUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLE1BQU0sSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQy9DLE1BQU0sSUFBSSxHQUFHO1lBQ1gsSUFBSSxFQUFFLElBQUk7WUFDVixPQUFPLEVBQUUsSUFBQSx1Q0FBa0IsRUFBQyxLQUFLLENBQUMsU0FBUyxDQUFDO1lBQzVDLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTtZQUNoQixNQUFNLEVBQUUsSUFBQSw2Q0FBcUIsRUFBQyxNQUFNLENBQUM7U0FDdEMsQ0FBQztRQUNGLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkIsQ0FBQyxDQUFDLENBQUE7SUFDRixPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQzNCLENBQUMsQ0FBQztBQWhCVyxRQUFBLFFBQVEsWUFnQm5CIn0=