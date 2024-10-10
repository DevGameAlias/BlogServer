const express = require('express');
const router = express.Router();
const blogRoutes = require('../Models/blog.js');
const authMiddleware = require('../middleware/authMiddleware');

// Blog CRUD operations
router.get('/', blogRoutes.getAllBlogs);
router.post('/', authMiddleware.isAuthor, blogRoutes.createBlog);
router.get('/:id', blogRoutes.getBlogById);
router.put('/:id', authMiddleware.isAuthor, blogRoutes.updateBlog);
router.delete('/:id', authMiddleware.isAuthor, blogRoutes.deleteBlog);

// Blog page
router.get('/:id/page', blogRoutes.getBlogPage);

// Comments on blog
router.post('/:id/comments', authMiddleware.isAuthenticated, blogRoutes.addComment);
router.put('/:id/comments/:commentId', authMiddleware.isAuthenticated, blogRouter.updateComment);
router.delete('/:id/comments/:commentId', authMiddleware.isAuthenticated, blogRoutes.deleteComment);

module.exports = router;