const express = require('express');
const app = express();
const PORT = 3001;
var cors = require('cors')
const bodyParser = require('body-parser')
const session = require('express-session');
const secret = 'maybe this is a secret';
const recipeRoutes = require('./routes/mainRoutes');
const userRoutes = require('./routes/authRoutes')
const commentRoutes = require('./routes/commentRoutes')
const passport = require('passport')
const LocalStrategy = require('passport-local')
const User = require('./models/schemas/userSchema')
const MongoDBStore = require('connect-mongodb-session')(session);
const dbUrl = 'mongodb://127.0.0.1:27017/meal-roulette';
const cookieParser = require("cookie-parser")

const store = new MongoDBStore({
  uri: dbUrl,
  secret,
  touchAfter: 24 * 60 * 60
});

store.on("error", function (e) {
  console.log("SESSION STORE ERROR", e)
})
app.use(cookieParser(secret))
const sessionConfig = {
  store,
  name: 'session',
  secret,
  resave: false,
  saveUninitialized: true,
  cookie: {
      httpOnly: true,
      expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
      maxAge: 1000 * 60 * 60 * 24 * 7
  },
  credentials: true
}

app
  .use(cors({
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
}))
  .use(bodyParser.json())
  .use(session(sessionConfig))
  .use(passport.initialize())
  .use(passport.session())
  

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(function(user, callback) {
  process.nextTick(function() {
    return callback(null, {
      id: user._id,
      username: user.username,
    });
  });
});

passport.deserializeUser(function(user, cb) {
  process.nextTick(function() {
    return cb(null, user);
  });
});

app
  .use(userRoutes)
  .use(recipeRoutes)
  .use(commentRoutes)

app.listen(PORT, () => {
  console.log(`Yo stop chasing me I've ran for ${PORT}km already!`)
})