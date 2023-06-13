const Drink = require('../schemas/drinkSchema')
const User = require('../schemas/userSchema')

exports.createOne = async (req) => {
  try{
    const newDrink = await new Drink(req.body)
    const user = await User.findById(req.user.id)
    user.drinkFavourites.push(newDrink._id)
    await user.save()
    await newDrink.save()
    return newDrink
  } catch (e) {
    console.log('Another error, you gotta be shitting me', e)
  }
}