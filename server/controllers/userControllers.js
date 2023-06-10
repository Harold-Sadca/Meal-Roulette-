const {createOne, findAll, getUser} = require('../models/methods/userMethods')
const passport = require('passport');

exports.registerUser = async (req, res) => {
	try {
		const newUser = await createOne(req);
		res.status(201).send(newUser);
	} catch(e) {
		res.status(400).send('Cannot register.')
	}
}

exports.loginUser = async (req, res, next) => {
	passport.authenticate("local", (err, user, info) => {
		if (err) throw err;
		if (!user) res.send("No User Exists");
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