const Drink = require('../schemas/drinkSchema')

exports.createOne = async (req) => {
  try{
    const newDrink = await new Drink(req.body)
    await newDrink.save()
    return newDrink
  } catch (e) {
    console.log('Another error, you gotta be shitting me')
  }
}