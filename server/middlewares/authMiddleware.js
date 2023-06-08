exports.authenticate = (req, res, next) => {
  if (!req.isAuthenticated()) {
    res.status(400).send(JSON.stringify('Login first.')) 
  }
  next()
}