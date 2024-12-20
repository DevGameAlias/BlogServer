const { mongoose } = require("../db");

const commentSchema = new mongoose.Schema({
  author: {
    type: String,
    maxLength: 20,
    required: true ,
  },
  body: {
    type: String,
    required: true,
    maxLength: 1000,
  },
  blogId: {
    type: mongoose.Schema.Types.ObjectId, // Store the ObjectId of the related blog
    ref: 'Blog', // Reference to the Blog model
    required: true, // Ensure each comment is linked to a blog
  },
  approved: { type: Boolean, default: false }, // New field for approval status
},
{ timestamps: true } // Automatically manage `createdAt` and `updatedAt`
);


const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;
