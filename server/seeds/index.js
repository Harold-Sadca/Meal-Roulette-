const mongoose = require('mongoose');
const mockRecipes = require('./recipe-helper')
const Recipe = require('../models/schemas/recipeSchema')
const User = require('../models/schemas/userSchema')


const database = async () => {
  await mongoose.connect('mongodb://127.0.0.1:27017/meal-roulette', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", async () => {
    db.dropDatabase()
    console.log("Database connected.");
    for(let recipe of mockRecipes) {
      await Recipe.create(recipe)
    }
    console.log("Database seeding complete.")
    db.close();
  });
};

database()