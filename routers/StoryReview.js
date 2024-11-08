require("dotenv").config();
const express = require("express");
const router = express.Router();
const sReview = require("../Models/StoryReview");

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
        const newReview = new sReview({
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

module.exports = router;