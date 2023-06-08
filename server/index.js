const express = require('express');
const app = express();
const PORT = 3001;
var cors = require('cors')
const bodyParser = require('body-parser')
const session = require('express-session');
const secret = 'maybe this is a secret';
const recipeRoutes = require('./routes/mainRoutes');
const userRoutes = require('./routes/authRoutes')
const passport = require('passport')
const LocalStrategy = require('passport-local')
const User = require('./models/schemas/userSchema')
const MongoDBStore = require('connect-mongodb-session')(session);
const dbUrl = 'mongodb://127.0.0.1:27017/meal-roulette'

const store = new MongoDBStore({
  url: dbUrl,
  secret,
  touchAfter: 24 * 60 * 60
});

store.on("error", function (e) {
  console.log("SESSION STORE ERROR", e)
})

const sessionConfig = {
  store,
  name: 'session',
  secret,
  resave: false,
  saveUninitialized: true,
  cookie: {
      httpOnly: true,
      // secure: true,
      expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
      maxAge: 1000 * 60 * 60 * 24 * 7
  }
}
// {
//   secret,
//   resave: true,
//   saveUninitialized: true,
//   cookie: { 
//     secure: true,
//     httpOnly: false,
//     sameSite: 'strict',
//     maxAge: 6000000 }}

app
  .use(cors({
    origin: "http://localhost:3000", // allow to server to accept request from different origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // allow session cookie from browser to pass through
}))
  .use(bodyParser.json())
  .use(session(sessionConfig))
  .use(passport.initialize())
  .use(passport.session())


//this is saying, user the LocalStrategy to authenticate and that authenticate is inside the User model.
//the authenticate is not something we created, it was provided by passport.
//passport will also automatically add 'isAuthenticated()' in the request which is a boolean that would reflect if they are logged in or not.
passport.use(new LocalStrategy(User.authenticate()));
//this is the instruction for passport to serialize a user or how do we store a user in the session
passport.serializeUser(User.serializeUser())
//not to get the user out of the session
passport.deserializeUser(User.deserializeUser())

app
  .use(userRoutes)
  .use(recipeRoutes)

app.listen(PORT, () => {
  console.log(`Yo stop chasing me I've ran for ${PORT}km already!`)
})