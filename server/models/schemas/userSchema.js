const mongoose = require('../index');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
  profilePic:{
    type:String,
    default:'https://m.media-amazon.com/images/I/515EOVqRexL._AC_UF894,1000_QL80_.jpg'
  },
  email:{
    type: String,
    required: true,
    unique:true
  },
  foodFavourites: [{type: Schema.Types.ObjectId, ref: 'Recipe'}],
  personalRecipes: [{type: Schema.Types.ObjectId, ref: 'Recipe'}],
  drinkFavourites: [{type: Schema.Types.ObjectId, ref: 'Drink'}],
  breakfast:[{type: Schema.Types.ObjectId, ref: 'Recipe'}],
  lunch:[{type: Schema.Types.ObjectId, ref: 'Recipe'}],
  dinner:[{type: Schema.Types.ObjectId, ref: 'Recipe'}]
});
userSchema.plugin(passportLocalMongoose);

const User = mongoose.model('User', userSchema)

module.exports = User;