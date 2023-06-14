const express = require('express');
const {getComments, postComment} = require('../controllers/commentController')
const router = express.Router();

router.post('/post-comment', postComment)
router.get('/:id/comments', getComments)

module.exports = router;