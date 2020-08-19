"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
let start = new Date().getTime();
async function convertFromBaseToBase(str, fromBase, toBase) {
    let num = parseInt(str.toString(), fromBase);
    return num.toString(toBase);
}
let convertedArray = [];
let arrayNumbers = [];
console.time();
fs_1.default.readFile("./ChangeBaseNumbers.csv", "utf8", async (err, file) => {
    let lines = file.split("\n");
    let start = new Date().getTime();
    for (let line = 1; line < lines.length - 1; line++) {
        arrayNumbers = lines[line].split(",");
        convertedArray.push(await convertFromBaseToBase(parseInt(arrayNumbers[0]), parseInt(arrayNumbers[1]), parseInt(arrayNumbers[2])));
    }
    let end = new Date().getTime();
    let writeStream = fs_1.default.createWriteStream("OutputFile.txt");
    writeStream.write(convertedArray.toString());
});
let end = new Date().getTime();
console.log(end - start);
//# sourceMappingURL=index.js.map