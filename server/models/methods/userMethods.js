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
    const user = await User.findById(id)
    .populate('drinkFavourites')
    .populate('foodFavourites')
    .populate('personalRecipes')
    .populate('breakfast')
    .populate('lunch')
    .populate('dinner');
    return user;
  } catch(e) {
    console.log('Dude you screwed up while getting a user dumbass.');
  }
}

exports.addMeal = async(req) => {
  const {id} = req.user;
  const {_id} = req.body;
  const {time} = req.params
  try{
    const user = await User.findById(id)
    user[time].push(_id)
    await user.save()
    return user
  } catch(e) {
    console.log('Omega LUL another error')
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