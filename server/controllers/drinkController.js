const {createOne, deleteOne, findAll} = require('../models/methods/drinkMethods')

exports.createDrink = async (req, res) => {
	try{
		const drink = await createOne(req);
		res.status(200).send(drink);
	} catch(e) {
		res.status(400).send(JSON.stringify('Too drunk to make drinks'))
	}
}