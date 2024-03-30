const fs = require('fs');

// <--------------------------------File ---------------------------------->

// // reading file
// let data= fs.readFileSync('f2.txt','utf-8');
// console.log(data);
// readFileSync returns buffer data so using utf-8 to convert it into string

// let data2= fs.readFileSync('f2.txt');
// console.log('file content->' + data2);// the output is not in buffer format because we concatinate with the '+' operator

// let data1= fs.readFileSync('../Path_module/file1.txt','utf-8');
// console.log(data1);

// // writing file
// fs.writeFileSync('f3.txt','Hello world');
// console.log('file written successfully');

// // // appending file
// fs.appendFileSync('f3.txt',' Hello world');
// console.log('file appended successfully');
// console.log(fs.readFileSync('f3.txt','utf-8'));

// // // renaming file
// fs.renameSync('f3.txt','f4.txt');
// console.log('file renamed successfully');

// // deleting file
// fs.unlinkSync('f4.txt');
// console.log('file deleted successfully');


// <--------------------------------Directory ---------------------------------->
// creating folder
// fs.mkdirSync('folder');
// console.log('folder created successfully');


// deleting folder
// fs.rmdirSync('folder');
// console.log('folder deleted successfully');

// create file inside folder
// fs.writeFileSync('folder/f5.txt','Hello world');
// console.log('file written successfully');

// reading files inside folder
// let folderPath = 'C:\\Users\\kiran\\Desktop\\Computer programing\\Web Development\\Nodejs with scaler\\FileSystem_module\\folder'
// let files = fs.readdirSync(folderPath);
// console.log(files);

// reading the content in the file inside folder
// let filePath = 'C:\\Users\\kiran\\Desktop\\Computer programing\\Web Development\\Nodejs with scaler\\FileSystem_module\\folder\\f5.txt';
// let status=fs.readFileSync(filePath);
// console.log(status.toString());  // Hello world

// check if directory exists or not
// let doesExist = fs.existsSync('folder');
// console.log('This path exists?',doesExist);  // true