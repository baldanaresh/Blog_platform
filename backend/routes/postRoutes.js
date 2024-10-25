const express = require('express');
const { createPost, updatePost ,getAllPosts , deletePost, addComment} = require('../controllers/postController');
// const { getAllPosts } = require('../controllers/postController'); // Ensure these are functions
const authMiddleware = require('../middleware/authMiddleware'); // Ensure this is a function

const router = express.Router();

// Use the middleware and controller functions in the routes
router.post('/create', authMiddleware, createPost);
// update a post
router.put('/update/:id', authMiddleware, updatePost);
// Get all posts
router.get('/', getAllPosts);

// Delete a post by ID
router.delete('/:id',authMiddleware , deletePost);

// Add a comment to a post
// Assuming you're using Express
router.post('/:postId/comments', authMiddleware, addComment);


module.exports = router;
