exports.authenticate = (req, res, next) => {
  if(req.isAuthenticated()) {
    next()
  } else {
    res.status(400).send(JSON.stringify('Bad Request'))
  }
}