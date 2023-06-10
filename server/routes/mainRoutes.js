const express = require('express');
const {editRecipe, createRecipe, getAllRecipes, deleteRecipe, getRecipeByCat} = require('../controllers/recipeController')
const router = express.Router();

router.post('/create-recipe', createRecipe)
router.get('/get-recipes/:category', getRecipeByCat)
router.get('/recipe', getAllRecipes)
router.delete('/recipe', deleteRecipe)
router.put('/recipe',editRecipe)

module.exports = router;