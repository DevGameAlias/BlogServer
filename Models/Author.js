const mongoose = require("mongoose");

// Author Schema
const authorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (v) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      message: (props) => `${props.value} is not a valid email address!`,
    },
  },
  password: { type: String, required: true },
  bio: String,
  socialMedia: {
    twitter: String,
    facebook: String,
    instagram: String,
  },
  createdAt: { type: Date, default: Date.now },
});

const Author = mongoose.model("Author", authorSchema);
module.exports = Author;
