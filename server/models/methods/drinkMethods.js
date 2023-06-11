const Drink = require('../schemas/drinkSchema')
const User = require('../schemas/userSchema')

exports.createOne = async (req) => {
  try{
    const newDrink = await new Drink(req.body)
    const user = await User.findById(req.user.id)
    console.log(user.drinkFavourites, newDrink._id)
    user.drinkFavourites.push(newDrink._id)
    user.save()
    await newDrink.save()
    return newDrink
  } catch (e) {
    console.log('Another error, you gotta be shitting me', e)
  }
}