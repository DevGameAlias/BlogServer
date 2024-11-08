const express = require('express');
const router = express.Router();
const Blog = require('../Models/blog');
const Comment = require('../Models/Comment');

// // Dummy comment data
// let comments = [
//   { id: 1, author: 'Jane Doe', content: 'Great blog post!', blogId: 1 },
//   { id: 2, author: 'John Doe', content: 'Very informative.', blogId: 1 }
// ];

// Create a new comment
router.post('/', async (req, res) => {
  const { author, body, blogId } = req.body;

   // Check if all necessary fields are provided
  if (!author || !body || !blogId) {
    return res.status(400).json({ error: 'Author, body, and blogId are required' });
  }

    try {
   // Create a new comment with blog id
   const newComment = new Comment({
    author,
    body,
    blogId  // Link the comment to the blog
  });

  // Save the new comment to the database
  await newComment.save();

   // Return the saved comment
   res.status(201).json(newComment);
  } catch (error) {
    console.error('Error saving comment:', error);
    res.status(500).json({ error: 'Failed to save comment' });
  }
});

// Get all comments for a specific blog
router.get('/blog/:blogId', async (req, res) => {
  try {
    const comments = await Comment.find({ blogId: req.params.blogId }); // Find all comments where blogId matches
    if (comments.length === 0) {
      return res.status(404).json({ error: 'No comments found for this blog' });
    }
    res.json(comments); // Return the list of comments
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

  
  // Read a single comment by ID
  router.get('/:id', async (req, res) => {
    try {
      const comment = await Comment.findById(req.params.id);
      if (!comment) return res.status(404).json({ error: 'Comment not found' });
      res.json(comment);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

// Update a comment by ID
router.put('/:id', async (req, res) => {
    try {
      const { author, body } = req.body;
      const updatedComment = await Comment.findByIdAndUpdate(
        req.params.id,
        { author, body },
        { new: true, runValidators: true }
      );
      if (!updatedComment) return res.status(404).json({ error: 'Comment not found' });
      res.json(updatedComment);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

// Delete a comment by ID
router.delete('/', (req, res) => {
  const commentIndex = comments.findIndex(c => c.id == req.params.id);
  if (commentIndex === -1) return res.status(404).json({ error: 'Comment not found' });
  comments.splice(commentIndex, 1);
  res.status(204).end();
});
module.exports = router;

