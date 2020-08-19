import fs, { write } from "fs";

let start = new Date().getTime();
async function convertFromBaseToBase(str: number, fromBase: number, toBase: number) {
  let num = parseInt(str.toString(), fromBase);
  return num.toString(toBase);
}
let convertedArray: Array<string> = [];
let arrayNumbers: Array<string> = [];
console.time();
fs.readFile("./ChangeBaseNumbers.csv", "utf8", async (err, file) => {
  let lines = file.split("\n");
  let start = new Date().getTime();
  for (let line = 1; line < lines.length - 1; line++) {
    arrayNumbers = lines[line].split(",");
    convertedArray.push(
      await convertFromBaseToBase(
        parseInt(arrayNumbers[0]),
        parseInt(arrayNumbers[1]),
        parseInt(arrayNumbers[2])
      )
    );
  }
  let end = new Date().getTime();
  console.log(end - start);
  let writeStream = fs.createWriteStream("OutputFile.txt");
  writeStream.write(convertedArray.toString());
});
let end = new Date().getTime();
console.log(end - start);
