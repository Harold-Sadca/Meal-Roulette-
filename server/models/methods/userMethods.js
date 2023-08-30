const User = require('../schemas/userSchema')

exports.findAll = async() => {
  try {
    const users = await User.find({});
    return users;
  } catch(e) {
    console.log('Why cant you retrieve all the users???', e.message);
  }
}

exports.createUser = async(user) => {
  const {email, username, password} = user
  try{
    const newUser = new User({email, username});
    const registeredUser = await User.register(newUser, password)
    return registeredUser
  } catch(e) {
    console.log('You dont wanna see this while creating a user but its a error.', e.message);
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
    console.log('Ohh man do I have to come up with another message.', e.message);
  }
}

exports.removeMeal = async(req) => {
  const {id} = req.user;
  const {_id} = req.body;
  const {path} = req.params
  try {
    const user = await User.findById(id)
    const newFav = user[path].filter((el) => {
      return el._id != _id
    })
    user[path] = newFav
    await user.save()
    //this is returning an unpopulated user
    return newFav
  } catch(e) {
    console.log('This is no longer funny', e.message)
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
    return req.body
  } catch(e) {
    console.log('Omega LUL another error', e.message)
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