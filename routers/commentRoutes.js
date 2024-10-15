const express = require('express');
const router = express.Router();
const Blog = require('../Models/Blog');
const Comment = require('../Models/Comment');

// POST a comment on a blog
router.post('/comments', async (req, res) => {
    const { content, author } = req.body;
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) {
            return res.status(404).json({ error: 'Blog not found' });
        }
        
        const newComment = new Comment({
            postId: req.params.id,
            content,
            author
        });
        
        const savedComment = await newComment.save();
        res.status(201).json(savedComment);
    } catch (err) {
        res.status(500).json({ error: 'Unable to post the comment' });
    }
});

// PUT (Update) a comment by ID
router.put('/comments/:id', async (req, res) => {
    const { content } = req.body;
    try {
        const updatedComment = await Comment.findByIdAndUpdate(req.params.id, {
            content,
            updatedAt: Date.now()
        }, { new: true });
        
        if (!updatedComment) {
            return res.status(404).json({ error: 'Comment not found' });
        }

        res.status(200).json(updatedComment);
    } catch (err) {
        res.status(500).json({ error: 'Unable to update the comment' });
    }
});

// DELETE a comment by ID
router.delete('/comments/:id', async (req, res) => {
    try {
        const deletedComment = await Comment.findByIdAndDelete(req.params.id);
        if (!deletedComment) {
            return res.status(404).json({ error: 'Comment not found' });
        }
        res.status(200).json({ message: 'Comment deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Unable to delete the comment' });
    }
});

module.exports = router;
