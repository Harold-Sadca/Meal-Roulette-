const mongoose = require('../index');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  name:String,
  ingredients: [String],
  steps:String,
  categories: [{type: Schema.Types.ObjectId, ref: 'Category', default: 'None'}],
  author: {
    type: String,
    default:'Anonymous'
  }
});

const Recipe = mongoose.model('Recipe', recipeSchema)

module.exports = Recipe;