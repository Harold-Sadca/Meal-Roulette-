const express = require('express');
const {registerUser, loginUser, logoutUser} = require('../controllers/userControllers');
const passport = require('passport');
const router = express.Router();

router.post('/register', registerUser)
router.post('/login',passport.authenticate('local', {session: false}), loginUser)
router.post('/logout', logoutUser)

module.exports = router;