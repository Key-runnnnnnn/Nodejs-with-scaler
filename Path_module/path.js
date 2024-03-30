const path = require('path');

const pathObj = path.extname('C:\Users\kiran\Desktop\Computer programing\Web Development\Nodejs with scaler\Path_module\f1.txt')
console.log(pathObj);  // .txt // returns the extension of the file

const objectPath = path.extname('./f1.txt')
console.log(objectPath);  // .txt

const baseName = path.basename('C:\Users\kiran\Desktop\Computer programing\Web Development\Nodejs with scaler\Path_module\\file1.txt')
console.log(baseName);  // file1.txt // returns the file name

console.log(__dirname) // C:\Users\kiran\Desktop\Computer programing\Web Development\Nodejs with scaler\Path_module

console.log(__filename) // C:\Users\kiran\Desktop\Computer programing\Web Development\Nodejs with scaler\Path_module\path.js

