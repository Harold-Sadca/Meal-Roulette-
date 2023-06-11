const User = require('../schemas/userSchema')

exports.findAll = async() => {
  try {
    const users = await User.find({});
    return users;
  } catch(e) {
    console.log('Dude you screwed up while getting all the users dumbass.');
  }
}

exports.createOne = async(req) => {
  // console.log(req.body)
  const {email, username, password} = req.body
  try{
    const newUser = new User({email, username});
    //we dont need to worry about hashing because passport will be taking care of it for us
    const registeredUser = await User.register(newUser, password)
    return registeredUser
  } catch(e) {
    console.log('Dude you screwed up while registering a user dumbass.');
  }
}

exports.findUser = async(req) => {
  const {id} = req.user;
  try{
    const user = await User.find({_id:id}).populate('foodFavourites').populate('drinkFavourites').populate('personalRecipes');
    return user;
  } catch(e) {
    console.log('Dude you screwed up while getting a user dumbass.');
  }
}

// exports.editOne = async(req) => {
//   const {_id} = req.body;
//   try{
//     const recipe = await Recipe.findOneAndUpdate({_id}, {...req.body});
//     return recipe
//   } catch(e) {
//     console.log('Dude you screwed up while updating a recipe dumbass.');
//   }
// }

// exports.deleteOne = async(req) => {
//   const {_id} = req.body;
//   try{
//     const res = await Recipe.deleteOne({_id})
//     return res;
//   } catch(e) {
//     console.log('Dude you screwed up while deleting a recipe dumbass.');
//   }
// }