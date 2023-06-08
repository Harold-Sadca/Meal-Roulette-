const express = require('express');
const app = express();
const PORT = 3001;
var cors = require('cors')
const bodyParser = require('body-parser')
const session = require('express-session');
const secretWord = 'maybe this is a secret';
const recipeRoutes = require('./routes/mainRoutes');
const userRoutes = require('./routes/authRoutes')
const passport = require('passport')
const LocalStrategy = require('passport-local')
const User = require('./models/schemas/userSchema')

app
  .use(cors({
    origin: '*'
}))
  .use(bodyParser.json())
  .use(recipeRoutes)
  .use(session({
    secret: secretWord,
    resave: false,
    saveUninitialized: true,
    cookie: { 
      secure: false,
      httpOnly: false,
      sameSite: 'strict',
      maxAge: 6000000 }}))
  .use(passport.initialize())
  .use(passport.session())
  .use(userRoutes)

//this is saying, user the LocalStrategy to authenticate and that authenticate is inside the User model.
//the authenticate is not something we created, it was provided by passport.
//passport will also automatically add 'isAuthenticated()' in the request which is a boolean that would reflect if they are logged in or not.
passport.use(new LocalStrategy(User.authenticate()));
//this is the instruction for passport to serialize a user or how do we store a user in the session
passport.serializeUser(User.serializeUser())
//not to get the user out of the session
passport.deserializeUser(User.deserializeUser())

app.listen(PORT, () => {
  console.log(`Yo stop chasing me I've ran for ${PORT}km already!`)
})