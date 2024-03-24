const fs = require('fs')

console.log('first Line')


//  synchronus way

// let data = fs.readFileSync('f1.txt')
// console.log(data)

// let data2 = fs.readFileSync('f2.txt')
// console.log(data2)

// asynchronus way

fs.readFile('f1.txt','utf-8',cb1)

function cb1(err, data){
  if(err){
      console.log(err)
  }
  console.log(data)
  fs.readFile('f2.txt','utf-8',cb2)
}


function cb2(err, data){
  if(err){
      console.log(err)
  }
  console.log(data)
  fs.readFile('f3.txt','utf-8',cb3)
}


function cb3(err, data){
  if(err){
      console.log(err)
  }
  console.log(data)
}

console.log('last Line')