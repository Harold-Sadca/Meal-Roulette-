const {editOne, createOne, deleteOne, findAll} = require('../models/methods/recipeMethods')

exports.getAllRecipes = async (req, res) => {
  try {
    const result = await findAll();
    console.log(result)
    res.status(201).send(result);
  } catch(e) {
    res.status(400).send('Bad Request')
  }
}

exports.createRecipe = async (req,res) => {
  // console.log(req)
  try {
    const result = await createOne(req)
    res.status(201).send(result)
  } catch(e) {
    res.status(400).send('Bad Request')
  }
}

exports.editRecipe = async (req, res) => {
  try {
    const result = await editOne(req)
    res.status(201).send(result)
  } catch(e) {
    res.status(400).send('Bad Request')
  }
}

exports.deleteRecipe = async (req, res) => {
  try {
    const result = await deleteOne(req)
    res.status(201).send(result)
  } catch(e) {
    res.status(400).send('Bad Request')
  }
}