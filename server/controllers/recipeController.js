const {editOne, createOne, deleteOne, findAll} = require('../models/methods/recipeMethods')

exports.getAllRecipes = async (req, res) => {
  try {
    const result = await findAll();
    res.status(201).send(result);
  } catch(e) {
    res.status(400).send(JSON.stringify('Bad Request'))
  }
}

exports.createRecipe = async (req,res) => {
  try {
    const recipe = req.body
    const id = req.user.id
    const result = await createOne(recipe, id)
    res.status(201).send(result)
  } catch(e) {
    res.status(400).send(JSON.stringify('Bad Request'))
  }
}

exports.getRecipeByCat = async (req, res) => {
  try {
    const result = await findByCategory(req)
    res.status(200).send(result)
  } catch(e) {
    res.status(400).send(JSON.stringify('Man you screwed up'))
  }

}

exports.editRecipe = async (req, res) => {
  try {
    const result = await editOne(req)
    res.status(201).send(result)
  } catch(e) {
    res.status(400).send(JSON.stringify('Bad Request'))
  }
}

exports.deleteRecipe = async (req, res) => {
  try {
    const result = await deleteOne(req)
    res.status(201).send(result)
  } catch(e) {
    res.status(400).send(JSON.stringify('Bad Request'))
  }
}