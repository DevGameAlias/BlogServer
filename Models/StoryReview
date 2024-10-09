const { mongoose } = require("../db");

const StoryReview = new mongoose.Schema({

    author:{
        type: String,
        maxLength:20,
    },
    // need to figure out story ID and tie to story schema
    // storyId:{
    //    

    // },
    rating:{
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },
    body:{
        type: String,
        required: true,
        maxLength: 1000,
        timestamp: true,
    },
    createdAt:{
        type:Date,
        default: Date.now
        
    }

})

module.exports = mongoose.model ('storyreview', StoryReview)