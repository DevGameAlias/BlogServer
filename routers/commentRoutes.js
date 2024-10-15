const express = require('express');
const router = express.Router();
const Blog = require('../Models/Blog');
const Comment = require('../Models/Comment');

// Dummy comment data
let comments = [
  { id: 1, author: 'Author1', content: 'Great blog post!', blogId: 1 },
  { id: 2, author: 'Author2', content: 'Very informative.', blogId: 1 }
];

// Create a new comment
router.post('/', (req, res) => {
  const { author, content, blogId } = req.body;
  const newComment = { id: comments.length + 1, author, content, blogId };
  comments.push(newComment);
  res.status(201).json(newComment);
});

// Read all comments
router.get('/', (req, res) => {
  res.json(comments);
});

// Read a single comment
router.get('/', (req, res) => {
  const comment = comments.find(c => c.id == req.params.id);
  if (!comment) return res.status(404).json({ error: 'Comment not found' });
  res.json(comment);
});

// Update a comment
router.put('/', (req, res) => {
  const { author, content, blogId } = req.body;
  const comment = comments.find(c => c.id == req.params.id);
  if (!comment) return res.status(404).json({ error: 'Comment not found' });

  comment.author = author;
  comment.content = content;
  comment.blogId = blogId;
  res.json(comment);
});

// Delete a comment 
router.delete('/', (req, res) => {
  const commentIndex = comments.findIndex(c => c.id == req.params.id);
  if (commentIndex === -1) return res.status(404).json({ error: 'Comment not found' });

  comments.splice(commentIndex, 1);
  res.status(204).end();
});

module.exports = router;
