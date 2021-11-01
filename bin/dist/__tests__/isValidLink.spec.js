"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isValidLink_1 = require("../isValidLink");
describe('should test link validity', () => {
    test('link should be valid', () => {
        expect((0, isValidLink_1.isValidLink)('https://filesamples.com/samples/document/txt/sample1.txt')).toBe(true);
    });
    test('link should be invalid', () => {
        expect((0, isValidLink_1.isValidLink)('lllooo')).toBe(false);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNWYWxpZExpbmsuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9fX3Rlc3RzX18vaXNWYWxpZExpbmsuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGdEQUE2QztBQUU3QyxRQUFRLENBQUMsMkJBQTJCLEVBQUUsR0FBRyxFQUFFO0lBQ3pDLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxHQUFHLEVBQUU7UUFDaEMsTUFBTSxDQUFDLElBQUEseUJBQVcsRUFBQywwREFBMEQsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdGLENBQUMsQ0FBQyxDQUFDO0lBRUgsSUFBSSxDQUFDLHdCQUF3QixFQUFFLEdBQUcsRUFBRTtRQUNsQyxNQUFNLENBQUMsSUFBQSx5QkFBVyxFQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVDLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMifQ==