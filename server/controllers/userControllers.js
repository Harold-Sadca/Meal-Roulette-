const {createOne, findAll} = require('../models/methods/userMethods')

exports.registerUser = async (req, res) => {
	try {
		const newUser = await createOne(req);
		res.status(201).send('Registered Successfuly');
	} catch(e) {
		res.status(400).send('Cannot register')
	}
}

exports.loginUser = async (req, res) => {
	console.log('got in')
	res.status(201).send("Successfuly logged in")
}

exports.logoutUser = async (req, res, next) => {
	req.logout(function(err) {
		if(err) {
			return next(err)
		}
		res.status.send('Logged Out')
	})
}