const express = require('express');
const {registerUser, loginUser, logoutUser, userProfile, getUser, addMeal} = require('../controllers/userControllers');
const {authenticate} = require('../middlewares/authMiddleware')
const passport = require('passport');
const router = express.Router();

router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/user', authenticate, getUser)
// router.post('/login',passport.authenticate('local', {session: true}), loginUser)
router.get('/logout', authenticate, logoutUser)
router.get('/profile/:id', authenticate, userProfile)
router.post('/add-meal/:time', addMeal)

module.exports = router;