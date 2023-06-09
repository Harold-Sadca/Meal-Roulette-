const express = require('express');
const {getComments, postComment} = require('../controllers/commentController')
const router = express.Router();

router.post('/post-comment', postComment)
// router.post('/save-recipe')
router.get('/:id/comments', getComments)
// router.delete('/recipe', deleteRecipe)
// router.put('/recipe',editRecipe)

module.exports = router;