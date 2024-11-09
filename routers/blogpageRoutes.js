const express = require("express");
const router = express.Router();
const BlogPage = require("../Models/BlogPage");

// Create a new blog page
router.post("/", async (req, res) => {
  try {
    const { pageTitle, posts, author, description, bannerImage } = req.body;
    const newBlogPage = new BlogPage({
      pageTitle,
      posts,
      author,
      description,
      bannerImage,
    });
    await newBlogPage.save();
    res.status(201).json(newBlogPage);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Read all blog pages
router.get("/", async (req, res) => {
  try {
    const blogPages = await BlogPage.find().populate("posts");
    res.json(blogPages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Read a single blog page by ID
router.get("/:id", async (req, res) => {
  try {
    const blogPage = await BlogPage.findById(req.params.id).populate("posts");
    if (!blogPage)
      return res.status(404).json({ error: "Blog page not found" });
    res.json(blogPage);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a blog page by ID
router.put("/:id", async (req, res) => {
  try {
    const { pageTitle, posts, author, description, bannerImage } = req.body;
    const updatedBlogPage = await BlogPage.findByIdAndUpdate(
      req.params.id,
      { pageTitle, posts, author, description, bannerImage },
      { new: true, runValidators: true }
    );
    if (!updatedBlogPage)
      return res.status(404).json({ error: "Blog page not found" });
    res.json(updatedBlogPage);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a blog page by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedBlogPage = await BlogPage.findByIdAndDelete(req.params.id);
    if (!deletedBlogPage)
      return res.status(404).json({ error: "Blog page not found" });
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
