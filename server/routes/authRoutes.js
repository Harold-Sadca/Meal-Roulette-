const express = require('express');
const {registerUser, loginUser, logoutUser, userProfile} = require('../controllers/userControllers');
const {authenticate} = require('../middlewares/authMiddleware')
const passport = require('passport');
const router = express.Router();

router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/user', authenticate, (req,res) => {
  // res.status(200).send(JSON.stringify("Successfully Authenticated"))
  res.status(200).send(req.user)
})
// router.post('/login',passport.authenticate('local', {session: true}), loginUser)
router.get('/logout', authenticate, logoutUser)
router.get('/profile/:id', authenticate, userProfile)

module.exports = router;