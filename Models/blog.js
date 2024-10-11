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

         const mongoose = require('mongoose');

// BlogPage schema to represent an entire page of blog posts and related details
const blogPageSchema = new mongoose.Schema({
    pageTitle: {
        type: String,
        required: true,
    },
    posts: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'BlogPost', // Reference to blog posts
    }],
    author: {
        type: String, // Can also be changed to reference an 'Author' schema if needed
        required: true,
    },
    created: {
        type: Date,
        default: Date.now,
    },
    updated: {
        type: Date,
        default: Date.now,
    },
    description: {
        type: String, // A description for the blog page
    },
    bannerImage: {
        type: String, // URL or path to a banner image for the blog page
    }
});

// Create a model for BlogPage
const BlogPage = mongoose.model('BlogPage', blogPageSchema);

module.exports = BlogPage;
