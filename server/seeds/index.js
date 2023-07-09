const mongoose = require('mongoose');
const {mockRecipes} = require('recipe-helper')
const Recipe = require('../models/schemas/recipeSchema')
const User = require('../models/schemas/userSchema')

await mongoose.connect('mongodb://127.0.0.1:27017/meal-roulette', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  
})

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const seedDB = async () => {
    await Recipe.deleteMany({});
    await User.deleteMany({})
    for (let i = 0; i < 5; 1++) {
      Recipe.create(mockRecipes[i])
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})