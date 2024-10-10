const mongoose = require('mongoose');

const blogPostSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required:true,
        },
        content: {
            type: String,
            required: true,
         },
         author: {
            type: String, // could be the authors id or name?
            required: true,
         },
         created: {
            type: Date,
            default: Date.now,
         },
         updateAt: {
            type: Date,
            default: Date.now
            },
            tags: {
                type: [String], // Array of tags for categorization
                default: [],
            },
         })
         const BlogPost = mongoose.model('BlogPost', blogPostSchema);

         module.exports = BlogPost;
