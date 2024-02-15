// child process module is used to create a sub process within the script

const cp=require('child_process');  


cp.execSync('calc');  // opens calculator Chi ld process module is used to create a sub process within the script

// cp.execSync('start chrome')
// opens chrome browser

// cp.execSync('notepad')  // opens notepad

// cp.execSync('start cmd')  // opens command prompt

cp.execSync('start chrome https://www.scaler.com/topics/course/nodejs/video/973/')

console.log("Output ->" + cp.execSync('node demo.js'))