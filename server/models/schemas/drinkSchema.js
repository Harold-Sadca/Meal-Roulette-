const mongoose = require('../index');
const Schema = mongoose.Schema;

const drinkSchema = new Schema({
  name:String,
  ingredients :[String],
  alcoholic:String,
  category: String,
  english: String,
  deutsch: String,
	spanish: String,
	french:String,
	italian:String,
});

const Drink = mongoose.model('Drink', drinkSchema)

module.exports = Drink;