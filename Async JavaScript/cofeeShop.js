function placeOrder(drink) {
  return new Promise(function (resolve, reject) {
    if (drink === 'coffee') {
      resolve('Order placed successfully')
    }
    else {
      reject('Order not placed')
    }
  })
}

function passOrder(order) {
  return new Promise(function (resolve) {
    console.log('Order is being passed')
    resolve(`${order} and is serverd`)
  })
}

// placeOrder('coffee').then(function (orderPlaced) {
//   console.log(orderPlaced)
//   let orderIspassed = passOrder(orderPlaced)
//   return orderIspassed
// }).then(function (passedOrder) {
//   console.log(passedOrder)
// }).catch(function (reason) {
//   console.log(reason)
// })
//  solution using promises


//  we can do the same thing using async and await
// Asunc and await is a syntactic sugar over promises
// Async and await -> keywords
// always make a function async using async keyword 

async function serveOrder() {
  try {
    let orderPlaced = await placeOrder('coffee')
    console.log(orderPlaced)
    let orderIspassed = await passOrder(orderPlaced)
    console.log(orderIspassed)
  }
  catch (reason) {
    console.log(reason)
  }
}
serveOrder()