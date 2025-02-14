const mongoose  = require("mongoose");

const Song = new mongoose.Schema({
  Artist: {
    type: String,
    required: true,
  },
  Title: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
  Link:{
    type:String,
    required: true,
  }
});

module.exports = mongoose.model("Song", Song);
