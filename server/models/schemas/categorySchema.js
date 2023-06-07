const mongoose = require('../index');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  name:String,
  recipes: [{type: Schema.Types.ObjectId, ref: 'Recipe'}],
});

const Category = mongoose.model('Category', categorySchema)

module.exports = Category;