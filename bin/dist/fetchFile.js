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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchFile = void 0;
const fs_1 = __importDefault(require("fs"));
const https_1 = __importDefault(require("https"));
const getLocalFileName_1 = require("./getLocalFileName");
const fetchFile = (link, folderName) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        const localFileName = (0, getLocalFileName_1.getLocalFileName)(link);
        const file = fs_1.default.createWriteStream(`${folderName}/${localFileName}`);
        https_1.default.get(link, function (response) {
            response.pipe(file);
            file.on('finish', function () {
                resolve();
            });
            file.on('error', function (err) {
                console.error('Fetching file error:', err.message);
                response.unpipe();
                file.end();
                reject(err);
            });
        });
    });
});
exports.fetchFile = fetchFile;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmV0Y2hGaWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2ZldGNoRmlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0Q0FBb0I7QUFDcEIsa0RBQTBCO0FBRTFCLHlEQUFzRDtBQUUvQyxNQUFNLFNBQVMsR0FBRyxDQUFPLElBQVksRUFBRSxVQUFrQixFQUFFLEVBQUU7SUFDbEUsT0FBTyxJQUFJLE9BQU8sQ0FBTyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtRQUMzQyxNQUFNLGFBQWEsR0FBRyxJQUFBLG1DQUFnQixFQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdDLE1BQU0sSUFBSSxHQUFHLFlBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLFVBQVUsSUFBSSxhQUFhLEVBQUUsQ0FBQyxDQUFDO1FBRXBFLGVBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLFVBQVMsUUFBUTtZQUMvQixRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFO2dCQUNoQixPQUFPLEVBQUUsQ0FBQztZQUNaLENBQUMsQ0FBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBUyxHQUFHO2dCQUMzQixPQUFPLENBQUMsS0FBSyxDQUFDLHNCQUFzQixFQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDbkQsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUNsQixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBQ1gsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2QsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFBLENBQUM7QUFuQlcsUUFBQSxTQUFTLGFBbUJwQiJ9