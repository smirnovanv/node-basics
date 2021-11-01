"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateHash = void 0;
const crypto_1 = __importDefault(require("crypto"));
const generateHash = () => {
    return crypto_1.default.randomBytes(48).toString('hex');
};
exports.generateHash = generateHash;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVIYXNoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2dlbmVyYXRlSGFzaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxvREFBNEI7QUFFckIsTUFBTSxZQUFZLEdBQUcsR0FBRyxFQUFFO0lBQy9CLE9BQU8sZ0JBQU0sQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2hELENBQUMsQ0FBQztBQUZXLFFBQUEsWUFBWSxnQkFFdkIifQ==