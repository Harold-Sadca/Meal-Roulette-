const express = require('express');
const {editRecipe, createRecipe, getAllRecipes, deleteRecipe} = require('../controllers/recipeController')
const router = express.Router();

router.post('/create-recipe', createRecipe)
// router.post('/save-recipe')
router.get('/recipe', getAllRecipes)
router.delete('/recipe', deleteRecipe)
router.put('/recipe',editRecipe)

module.exports = router;