require("dotenv").config();
const express = require("express");
const router = express.Router();
const StoryReview = require("../Models/StoryReview");

// POST - Create a new review for a short story
router.post("/", async (req, res) => {
    console.log(req.body); // Log the incoming request body for debugging

    // Destructure required fields from the request body
    const { author, rating, body, storyId } = req.body;

    // Input Validation
    if (!author || !rating || !body || !storyId) {
        return res.status(400).json({ error: "All fields (author, rating, body, storyId) are required." });
    }

    // Check if the rating is within the valid range (1-5)
    if (rating < 1 || rating > 5) {
        return res.status(400).json({ error: "Rating must be between 1 and 5." });
    }

    try {
        // Create a new review instance
        const newReview = new StoryReview({
            author,
            rating,
            body,
            storyId, // Associate the review with a specific story
        });

        // Save the new review to the database
        await newReview.save();

        // Send back the created review as response
        res.status(201).json({
            message: "Review posted successfully",
            review: newReview, // Return the created review
        });

    } catch (err) {
        console.error("Error saving review:", err);
        res.status(500).json({ error: "Failed to post review" });
    }
});

// Toggle approval of a comment by ID
router.patch('/:id/toggle-approval', async (req, res) => {
  try {
    const review = await StoryReview.findById(req.params.id); // Use `review` to avoid confusion with the model name
    if (!review) return res.status(404).json({ error: 'Comment not found' });

    // Toggle the approved status
    review.approved = !review.approved;

    // Save the updated comment
    await review.save();

    // Return the updated comment
    res.json(review);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


   // Get all reviews for a specific story by storyId
router.get('/:storyId', async (req, res) => {
    try {
      const reviews = await StoryReview.find({ storyId: req.params.storyId }); // Find all reviews where storyId matches
  
      if (reviews.length === 0) {
        return res.status(404).json({ error: 'No reviews found for this story' });
      }
  
      res.json(reviews); // Return the list of reviews
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // GET all reviews, sorted by the creation date (newest first)
router.get("/", async (req, res) => {
  try {
    // Fetch all reviews, sorted by 'createdAt' in descending order (newest first)
    const reviews = await StoryReview.find().sort({ createdAt: -1 });

    if (reviews.length === 0) {
      return res.status(404).json({ error: 'No reviews found' });
    }

    // Send the reviews back in the response
    res.json(reviews); // Return the list of reviews
  } catch (error) {
    console.error("Error fetching reviews:", error);
    res.status(500).json({ error: error.message });
  }
});

  // DELETE - Delete a review by ID
router.delete("/:id", async (req, res) => {
  const { id } = req.params; // Extract the review ID from the request parameters

  try {
      // Find and delete the review by ID
      const review = await StoryReview.findByIdAndDelete(id);

      if (!review) {
          // If no review is found, return a 404 error
          return res.status(404).json({ error: "Review not found" });
      }

      // Successfully deleted, return a success message
      res.status(200).json({
          message: "Review deleted successfully",
          reviewId: id,  // Optionally, return the deleted review ID
      });
  } catch (error) {
      console.error("Error deleting review:", error);
      res.status(500).json({ error: error.message });
  }
});
  

module.exports = router;