const Recipe = require('../schemas/recipeSchema')

exports.createRecipe = async(req, res) => {
  try{
    const newRecipe = await new Recipe(req.body)
    await newRecipe.save()
    res.status(201).send(newRecipe)
  } catch(e) {
    res.status(400).send('Bad Request')
  }
}

exports.editRecipe = async(req, res) => {
  const {_id} = req.body
  try{
    const recipe = await Recipe.findOneAndUpdate({_id}, {...req.body})
    res.status(201).send(recipe)
  } catch(e) {
    res.status(400).send('Bad Request')
  }
}