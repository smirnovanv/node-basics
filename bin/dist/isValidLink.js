"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidLink = void 0;
const isValidLink = (link) => {
    try {
        new URL(link);
        return true;
    }
    catch (err) {
        return false;
    }
};
exports.isValidLink = isValidLink;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNWYWxpZExpbmsuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaXNWYWxpZExpbmsudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQU8sTUFBTSxXQUFXLEdBQUcsQ0FBQyxJQUFZLEVBQUUsRUFBRTtJQUMxQyxJQUFJO1FBQ0YsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDZCxPQUFPLElBQUksQ0FBQztLQUNiO0lBQUMsT0FBTyxHQUFHLEVBQUU7UUFDWixPQUFPLEtBQUssQ0FBQztLQUNkO0FBQ0gsQ0FBQyxDQUFDO0FBUFcsUUFBQSxXQUFXLGVBT3RCIn0=