const express = require('express');
const postController = require('../controllers/post');

const router = express.Router();

router.get('/:userId/posts', postController.getUserPosts);

module.exports = router;