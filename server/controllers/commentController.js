const {createOne, findAll} = require('../models/methods/commentMethods')

exports.getComments = async (req, res) => {
  try {
    const result = await findAll(req);
    res.status(201).send(result);
  } catch(e) {
    res.status(400).send('Bad Request')
  }
}

exports.postComment = async (req,res) => {
  try {
    const result = await createOne(req)
    res.status(201).send(result)
  } catch(e) {
    res.status(400).send('Bad Request')
  }
}