const mongoose = require('../index');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  name:String,
  ingredients :[String],
  instructions: String,
  category: String,
  description: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

const Recipe = mongoose.model('Recipe', recipeSchema)

module.exports = Recipe;