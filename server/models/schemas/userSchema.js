const mongoose = require('../index');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
  // username:{
  //   type: String,
  //   required: [true, 'Username cannot be empty.']
  // },
  // password: {
  //   type: String,
  //   required: [true, 'Password cannot be empty.']
  // },
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
//passportLocalMongoose automatically adds username and password fields and makes sure that the username is unique.
//it will also add a hash and salt field to store the username, the hashed password and the salt value.
userSchema.plugin(passportLocalMongoose);

// userSchema.statics.validateUser = async function (email, password) {
//   const loggedUser= await this.findOne({email});
//   const isValid = await bcrypt.compare(password, loggedUser.password);
//   return isValid? loggedUser : false;
// };

userSchema.statics.findEmail = async function (email) {
  const foundEmail = await this.findOne({email});
  return foundEmail? true : false;
};

// userSchema.pre('save', async function (next) {
//   if (!this.isModified('password')) return next();
//   this.password = await bcrypt.hash(this.password, 12);
//   next();
// })

const User = mongoose.model('User', userSchema)

module.exports = User;