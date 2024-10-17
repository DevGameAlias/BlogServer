const mongoose = require("mongoose");

const StoryReview = new mongoose.Schema({
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
    createdAt:{
        type:Date,
        default: Date.now
    },
},
{ timestamps: true })


module.exports = mongoose.model("StoryReview", StoryReview)