// console.log("Scaler is awesome")

// const fun = () => {
//     console.log("I am a function")
// }
// fun()


// in node js we don't have window object instead we have global object
// console.log(window)  // window is not defined in node js
// console.log(this)  // this is defined in node js


// console.log(global)  // global is defined in node js instead of window
// let a = 'kiran'
// console.log(global.a) // undefined // a is not defined in global scope 
// node js always keeps our variables , fun, obj in this perticular file scope only ->and hence the modular approach comes into picture


// Modularity in node js
// every file in node js is a module
// to define a in global scope we need to define it in global object
global.a = 'kiran' // now a is defined in global scope 
// console.log(global.a) // kiran


// to access a in other file we need to export a from test.js file
// to use other file in test.js we need to import it using require
const calculator = require('./calculator')
console.log(calculator.cal(3,5,'/')) // 15