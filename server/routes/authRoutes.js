const express = require('express');
const {registerUser, loginUser, logoutUser, userProfile} = require('../controllers/userControllers');
const {authenticate} = require('../middlewares/authMiddleware')
const passport = require('passport');
const router = express.Router();

router.post('/register', registerUser)
router.post('/login',passport.authenticate('local', {session: false}), loginUser)
router.post('/logout', authenticate, logoutUser)
router.get('/profile/:id', authenticate, userProfile)

module.exports = router;