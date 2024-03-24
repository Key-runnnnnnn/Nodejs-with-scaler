// construction of promises
let myPromise = new Promise(function (resolve, reject) {
    const a=4
    const b=5

    setTimeout(()=>{
        if(a===b){
            resolve('Success')
        }else{
            reject('Failed')
        }
    })
  
})

// pending promise (initial state of promise)
console.log(myPromise)

// fullfillment of promise (resolved state of promise)
myPromise.then(function(value){
    console.log(value)
})

// rejection of promise (rejected state of promise)
myPromise.catch(function(reason){
  console.log(reason)
})