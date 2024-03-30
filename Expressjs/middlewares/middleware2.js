const middelware2=((req, res, next) => {
  console.log('Authenticating...')
  next()
})

module.exports = middelware2