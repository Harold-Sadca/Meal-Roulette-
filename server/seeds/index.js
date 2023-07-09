const mongoose = require('mongoose');
const mockRecipes = require('./recipe-helper')
const Recipe = require('../models/schemas/recipeSchema')
const User = require('../models/schemas/userSchema')


const database = async () => {
  mongoose.connect('mongodb://127.0.0.1:27017/meal-roulette',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", () => {
  console.log("Database connected");
  });
  await Recipe.deleteMany({});
  await User.deleteMany({})
  for (let i = 0; i < 5; i++) {
    Recipe.create(mockRecipes[i])
  }
}


database()