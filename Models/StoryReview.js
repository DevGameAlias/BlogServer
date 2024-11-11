const mongoose = require("mongoose");

const StoryReviewSchema = new mongoose.Schema({
    author:{
        type: String,
        maxLength:20,
        required: true
    },
    rating:{
        type: Number,
        min: 1,
        max: 5,
        required:true
    },
    body:{
        type: String,
        maxLength: 1000,
        timestamp: true,
        required: true
    },
    storyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Story', // Reference to the Story model
        required: true
    },
    approved: {
        type: Boolean,
        default: false // Optional field for approval status (default to false)
      }
    }, { timestamps: true }); // Automatically manage `createdAt` and `updatedAt`



module.exports = mongoose.model("StoryReview", StoryReviewSchema)