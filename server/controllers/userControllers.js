const {createOne, findAll, findUser, addMeal, removeMeal} = require('../models/methods/userMethods')
const passport = require('passport');

exports.registerUser = async (req, res) => {
	try {
		const newUser = await createOne(req);
		res.status(201).send(newUser);
	} catch(e) {
		res.status(400).send('Cannot register.')
	}
}

exports.getUser = async (req, res) => {
	try{
		req.user = await findUser(req)
		res.status(201).send(req.user)
	} catch(e) {
		res.status(400).send(JSON.stringify('Cannot find user'))
	}
}

exports.addMeal = async (req, res) => {
	try {
		const result = await addMeal(req);
		res.status(201).send(result)
	} catch (e){
		res.status(400).send(e.message)
	}
}

exports.removeMeal = async (req, res) => {
	try {
		const result = await removeMeal(req)
		res.status(201).send(result)
	} catch(e) {
		res.status(400).send(e.message)
	}
}

exports.loginUser = async (req, res, next) => {
	passport.authenticate("local", (err, user, info) => {
		if (err) throw err;
		if (!user) res.send(JSON.stringify("No User Exists"));
		else {
		  req.logIn(user, (err) => {
			if (err) throw err;
			// res.redirect('/recipe')
			// res.send(JSON.stringify("Successfully Authenticated"));
			res.status(200).send(req.user)
		  });
		}
	  })(req, res, next);
	}

exports.logoutUser = async (req, res, next) => {
	req.logout(function(err) {
		if(err) {
			return next(err)
		}
		res.status(200).send(JSON.stringify('Logged out'))
	})
}

exports.userProfile = async (req, res) => {
	// console.log(req.isAuthenticated())
	try {
		const user = await getUser(req);
		res.status(201).send(user)
	} catch(e) {
		res.status(400).send('Cannot find profile dumbshit.')
	}
}