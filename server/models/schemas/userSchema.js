const mongoose = require('../index');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username:{
    type: String,
    required: [true, 'Username cannot be empty.']
  },
  password: {
    type: String,
    required: [true, 'Password cannot be empty.']
  },
  email:{
    type: String,
    required: [true, 'Please provide a valid email.']
  },
  favourites: [{type: Schema.Types.ObjectId, ref: 'Recipe'}],
  personalRecipes: [{type: Schema.Types.ObjectId, ref: 'Recipe'}]
});

userSchema.statics.validateUser = async function (email, password) {
  const loggedUser= await this.findOne({email});
  const isValid = await bcrypt.compare(password, loggedUser.password);
  return isValid? loggedUser : false;
};

userSchema.statics.findEmail = async function (email) {
  console.log(email);
  const foundEmail = await this.findOne({email});
  return foundEmail? true : false;
};

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
})

const User = mongoose.Model('User', userSchema)

module.exports = User;