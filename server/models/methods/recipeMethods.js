const Recipe = require('../schemas/recipeSchema')
const User = require('../schemas/userSchema')

exports.findAll = async() => {
  try {
    const recipes = await Recipe.find({}).populate('author');
    return recipes;
  } catch(e) {
    console.log('OMEGA LUL your find all recipe function did not work...XD...', e.message);
  }
}

exports.createOne = async(req) => {
  try{
    const newRecipe = await new Recipe(req.body);
    const user = await User.findById(req.user.id)
    user.personalRecipes.push(newRecipe._id)
    await user.save()
    newRecipe.author = req.user.id;
    await newRecipe.save();
    const resRecipe = await Recipe.findById(newRecipe._id).populate('author', 'username')
    return resRecipe;
  } catch(e) {
    console.log('Dude your messing up in the create recipe try harder.', e.message);
  }
}

exports.getRecipeByCat = async(req) => {
  const {category} = req.params
  try {
    const recipes = await Recipe.find({category})
    return recipes
  } catch(e) {
    console.log('Ohh man not this one again', e.message)
  }
}


exports.editOne = async(req) => {
  const {_id} = req.body;
  try{
    const recipe = await Recipe.findOneAndUpdate({_id}, {...req.body}).populate('author', 'username');
    return recipe
  } catch(e) {
    console.log('Ohh man I did not know editing a recipe is hard.', e.message);
  }
}

exports.deleteOne = async(req) => {
  const {_id} = req.body;
  try{
    const res = await Recipe.deleteOne({_id})
    return res;
  } catch(e) {
    console.log('Dude deleting a recipe is easy if you do it right.', e.message);
  }
}