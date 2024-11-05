const express = require('express');
const router = express.Router();
const Blog = require('../Models/blog.js');
const tokenValidation = require('../middlewares/tokenValidation.js');


// GET all blogs
router.get('/blogs', async (req, res) => {
    try {
        const blogs = await Blog.find();
        console.log(Blog);
        
        res.status(200).json(blogs);
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Unable to retrieve blogs' });
    }
});

// GET a single blog by ID
router.get('/blogs/:id', async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) {
            return res.status(404).json({ error: 'Blog not found' });
        }
        res.status(200).json(blog);
    } catch (err) {
     

        res.status(500).json({ error: 'Unable to retrieve the blog' });
    }
});

// POST a new blog
router.post('/blogs', tokenValidation, async (req, res) => {
    const { title, content, author, tags } = req.body;
    try {
        const newBlog = new Blog({
            title,
            content,
            author,
            tags
        });
        const savedBlog = await newBlog.save();
        res.status(201).json(savedBlog);
    } catch (err) {
        res.status(500).json({ error: 'Unable to create the blog' });
    }
});

// PUT (Update) a blog by ID
router.put('/blogs/:id', tokenValidation, async (req, res) => {
    const { title, content, tags } = req.body;
    try {
        const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, {
            title,
            content,
            tags,
            updatedAt: Date.now()
        }, { new: true });
        
        if (!updatedBlog) {
            return res.status(404).json({ error: 'Blog not found' });
        }

        res.status(200).json(updatedBlog);
    } catch (err) {
        res.status(500).json({ error: 'Unable to update the blog' });
    }
});

// DELETE a blog by ID
router.delete('/blogs/:id', tokenValidation, async (req, res) => {
    try {
        const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
        if (!deletedBlog) {
            return res.status(404).json({ error: 'Blog not found' });
        }
        res.status(200).json({ message: 'Blog deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Unable to delete the blog' });
    }
});

module.exports = router;
