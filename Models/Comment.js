const { mongoose } = require("../db");

const commentSchema = new mongoose.Schema(
  {
    author: {
      type: String,
      maxLength: 20,
    },
    body: {
      type: String,
      required: true,
      maxLength: 1000,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;
