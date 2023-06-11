const express = require('express');
const {editRecipe, createRecipe, getAllRecipes, deleteRecipe, getRecipeByCat} = require('../controllers/recipeController')
const {createDrink} = require('../controllers/drinkController')
const router = express.Router();

router.post('/create-recipe', createRecipe)
router.get('/get-recipes/:category', getRecipeByCat)
router.get('/recipe', getAllRecipes)
router.delete('/recipe', deleteRecipe)
router.put('/recipe',editRecipe)
router.post('/drink', createDrink)

module.exports = router;