function myMiddleware(req, res, next) {
  console.log('Logging... I am a custom middleware function')
  next()
}

module.exports = myMiddleware