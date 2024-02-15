const path=require('path');


const pathObj=path.extname('C:\Users\kiran\Desktop\Computer programing\Web Development\Nodejs with scaler\Path_module\f1.txt')
console.log(pathObj);  // .txt

const baseName=path.basename('C:\Users\kiran\Desktop\Computer programing\Web Development\Nodejs with scaler\Path_module\\file1.txt')
console.log(baseName);  // file1.txt

console.log(__dirname) // C:\Users\kiran\Desktop\Computer programing\Web Development\Nodejs with scaler\Path_module

console.log(__filename) // C:\Users\kiran\Desktop\Computer programing\Web Development\Nodejs with scaler\Path_module\path.js

