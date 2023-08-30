const mongoose = require('mongoose');
const mockRecipes = require('./recipe-helper')
const Recipe = require('../models/schemas/recipeSchema')
const {createUser} = require('../models/methods/userMethods');
const {createOne} = require('../models/methods/recipeMethods')

const mockUser = {
  email: 'email@email.com', username: 'user1', password: 'password1'
}


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
    const user = await createUser(mockUser)
    console.log(user._id)
    for(let recipe of mockRecipes) {
      await createOne(recipe, user._id)
    }
    console.log("Database seeding complete.")
    db.close();
  });
};

database()