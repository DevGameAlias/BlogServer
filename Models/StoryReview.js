const mongoose = require("mongoose");

const StoryReview = new mongoose.Schema({
    author:{
        type: String,
        maxLength:20,
    },
    rating:{
        type: Number,
        min: 1,
        max: 5,
    },
    body:{
        type: String,
        maxLength: 1000,
        timestamp: true,
    },
    createdAt:{
        type:Date,
        default: Date.now
    },
},
{ timestamps: true })


module.exports = mongoose.model("StoryReview", StoryReview)