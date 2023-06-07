const Recipe = require('../schemas/recipeSchema')

exports.findAll = async() => {
  try {
    const recipes = await Recipe.find({});
    return recipes;
  } catch(e) {
    console.log('Dude you screwed up while getting all the recipes dumbass.');
  }
}

exports.createOne = async(req) => {
  console.log(req.body)
  const {name, ingredients, steps} = req.body
  try{
    const newRecipe = await new Recipe({name, ingredients, steps});
    await newRecipe.save();
    return newRecipe;
  } catch(e) {
    console.log('Dude you screwed up while creating a recipe dumbass.');
  }
}

exports.editOne = async(req) => {
  const {_id} = req.body;
  try{
    const recipe = await Recipe.findOneAndUpdate({_id}, {...req.body});
    return recipe
  } catch(e) {
    console.log('Dude you screwed up while updating a recipe dumbass.');
  }
}

exports.deleteOne = async(req) => {
  const {_id} = req.body;
  try{
    const res = await Recipe.deleteOne({_id})
    return res;
  } catch(e) {
    console.log('Dude you screwed up while deleting a recipe dumbass.');
  }
}