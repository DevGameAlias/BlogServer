const express = require('express'); 
const router = express.Router();
const Blog = require('../Models/Blog');
const Comment = require('../Models/Comment');

// POST a comment on a blog
router.post('/', async (req, res) => {
    const { content, author } = req.body;
    try {
        // Find the blog by ID passed in the URL
        //const blog = await Blog.findById(req.params.blogId);
        // if (!blog) {
        //     return res.status(404).json({ error: 'Blog not found' });
        // }

        // Create a new comment
        const newComment = new Comment({
            // postId: req.params.blogId,
            content,
            author
        });

        // Save the comment
        const savedComment = await newComment.save();
        res.status(201).json(savedComment);
    } catch (err) {
        res.status(500).json({ error: 'Unable to post the comment' });
    }
});

module.exports = router;