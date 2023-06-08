const {createOne, findAll, getUser} = require('../models/methods/userMethods')

exports.registerUser = async (req, res) => {
	try {
		const newUser = await createOne(req);
		res.status(201).send(newUser);
	} catch(e) {
		res.status(400).send('Cannot register.')
	}
}

exports.loginUser = async (req, res) => {
	res.status(201).send(req.isAuthenticated())
}

exports.logoutUser = async (req, res, next) => {
	console.log(req.isAuthenticated())
	req.logout(function(err) {
		if(err) {
			return next(err)
		}
		res.status(200).send(req.isAuthenticated())
		console.log(req.isAuthenticated())
	})
}

exports.userProfile = async (req, res) => {
	console.log(req.isAuthenticated())
	try {
		const user = await getUser(req);
		res.status(201).send(user)
	} catch(e) {
		res.status(400).send('Cannot find profile dumbshit.')
	}
}