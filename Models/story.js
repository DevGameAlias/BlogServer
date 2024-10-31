const mongoose = require('mongoose');

const shortStorySchema = new mongoose.Schema({
    title: {
        type: String,
        required:true,
    },
    description: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    author: {
        type: String, // can be id or authors name
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

const ShortStory = mongoose.model('ShortStory', shortStorySchema);

module.exports = ShortStory;