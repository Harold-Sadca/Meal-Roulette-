const express = require('express');
const {registerUser, loginUser, logoutUser, userProfile} = require('../controllers/userControllers');
const {authenticate} = require('../middlewares/authMiddleware')
const passport = require('passport');
const router = express.Router();

router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/user', authenticate, (req,res) => {
    //TODO:
    //change the logic to return the req.user
    //it only has username and id so its safe no password/email
    console.log(req.user)
    res.status(200).send(JSON.stringify("Successfully Authenticated"))
})
// router.post('/login',passport.authenticate('local', {session: true}), loginUser)
router.get('/logout', authenticate, logoutUser)
router.get('/profile/:id', authenticate, userProfile)

module.exports = router;