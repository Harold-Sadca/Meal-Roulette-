const express = require('express');
const {editRecipe, createRecipe, getAllRecipes, deleteRecipe} = require('../controllers/recipeController')
const router = express.Router();

router.post('/create-recipe', createRecipe)
// router.post('/save-recipe')
router.get('/recipe', getAllRecipes)
router.delete('/recipe/:id', deleteRecipe)
router.put('/recipe/:id',editRecipe)

module.exports = router;